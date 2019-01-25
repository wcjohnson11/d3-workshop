d3.tsv('data.tsv').then(function(data) {
	// Grab columns
	const categories = data.columns;

	// Create array of info objects, including description, source, and url
	const categoryInfo = [];
	for (var i = 0; i < 4; i++) {
		categoryInfo.push(data.shift());
	}

	// format data
	const trimmedData = data.reduce((result, d) => {
		// Filter out countries that don't have a value
		if (!isNaN(d['world happiness report score'])) {
			result.push({
				name: d.indicator,
				happinessReportScore: d['world happiness report score']
			});
		}
		return result;
	}, []);

	// Sort data
	// trimmedData.sort((x, y) => y.happinessReportScore - x.happinessReportScore);

	// BarChart Variables
	const colors = {
		main: 'pink',
		secondary: 'black'
	};

	const margin = { top: 30, right: 0, bottom: 10, left: 80 };
	const height = trimmedData.length * 25 + margin.top + margin.bottom;
	const width = 800;

	// barChart(trimmedData, 'happinessReportScore', 'svg', colors, margin, height, width);
	connectedScatterPlot(data);
});

const connectedScatterPlot = (data) => {
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = window.innerWidth - margin.left - margin.right;
    const height = window.innerHeight - margin.top - margin.bottom;
	const cleanNumbers = (string) => parseFloat(string.replace(/,/g, ''));

	data = data.reduce((result, d) => {
		if (d['world happiness report score'] !== '-' && d['GDP per capita (PPP)'] !== '-') {
			result.push({
				name: d.indicator,
				y: cleanNumbers(d['world happiness report score']),
				x: cleanNumbers(d['GDP per capita (PPP)'])
			});
		} 
		return result;
	}, []);
	data.y = 'World Happiness Report Score';
	data.x = 'GDP per Capita';

	// Line for connecting scatterplot
	// Requires data to have (x,y) values for each axis
	const line = d3.line().curve(d3.curveCatmullRom).x((d) => x(d.x)).y((d) => y(d.y));

	// Get the length of the line's path
	const length = (path) => {
		return d3.create('svg:path').attr('d', path).node().getTotalLength();
	};

	// Scales
    const y = d3.scaleLinear()
        .domain(d3.extent(data, d => d.y).reverse()).nice()
        .range([ margin.bottom, height - margin.top ]);

    const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.x).reverse()).nice()
        .range([ width - margin.left, margin.right ]);

	// Axes
	const yAxis = (g) =>
		g
			.attr('transform', `translate(${margin.left}, 0)`)
			.call(d3.axisLeft(y))
			.call((g) => g.select('.domain').remove())
			.call((g) => g.select('.tick:first-of-type text').clone()
					.attr('x', 4)
					.attr('text-anchor', 'start')
					.attr('font-weight', 'bold')
					.attr('fill', 'black')
					.text(data.y)
			);

	const xAxis = (g) =>
		g
			.attr('transform', `translate(0,${height - margin.bottom})`)
			.call(d3.axisBottom(x))
			.call((g) => g.select('.domain').remove())
			.call((g) => g.append('text')
					.attr('x', width - margin.right)
					.attr('y', -4)
					.attr('font-weight', 'bold')
					.attr('text-anchor', 'end')
					.attr('fill', 'black')
					.text(data.x)
			);

	const svg = d3.select('svg');

	// get length of line from the data
	const l = length(line(data));

	svg.append('g').call(xAxis);
	svg.append('g').call(yAxis);

	// Create circles
	svg
		.append('g')
		.attr('fill', 'white')
		.attr('stroke', 'black')
		.attr('stroke-width', 2)
		.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', (d) => x(d.x))
        .attr('cy', (d) => y(d.y))
        .attr('r', 3);
        
    console.log('sup')
};

const barChart = (data, xAxisVariable, container, colors, margin, height, width) => {
	// Create scales & axis
	const xScale = d3
		.scaleLinear()
		.domain([ 0, d3.max(data, (d) => d[xAxisVariable]) ])
		.range([ margin.left, width - margin.right ]);

	const xAxis = (g) =>
		g
			.attr('transform', `translate(0, ${margin.top})`)
			.call(d3.axisTop(xScale).ticks(width / 80))
			.call((g) => g.select('.domain').remove());

	const yScale = d3
		.scaleBand()
		.domain(data.map((d) => d.name))
		.range([ margin.top, height - margin.bottom ])
		.padding(0.1);

	const yAxis = (g) => g.attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(yScale).tickSizeOuter(0));

	const svg = d3.select(container);

	// Bars by name and xAxisVariable
	svg
		.append('g')
		.attr('fill', colors.main)
		.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('x', xScale(0))
		.attr('y', (d) => yScale(d.name))
		.attr('width', (d) => xScale(d[xAxisVariable]) - xScale(0))
		.attr('height', yScale.bandwidth());

	// Labels for bar chart
	svg
		.append('g')
		.attr('fill', colors.secondary)
		.attr('text-anchor', 'end')
		.style('font', '12px sans-serif')
		.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		.attr('x', (d) => xScale(d[xAxisVariable]) - 4)
		.attr('y', (d) => yScale(d.name) + yScale.bandwidth() / 2)
		.attr('dy', '0.35em')
		.text((d) => d[xAxisVariable]);

	// xAxis
	svg.append('g').call(xAxis);

	// yAxis
	svg.append('g').call(yAxis);
};
