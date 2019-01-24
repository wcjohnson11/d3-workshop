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
	trimmedData.sort((x, y) => y.happinessReportScore - x.happinessReportScore);

	// BarChart Variables
	const colors = {
		main: 'pink',
		secondary: 'black'
	};

	const margin = { top: 30, right: 0, bottom: 10, left: 80 };
	const height = trimmedData.length * 25 + margin.top + margin.bottom;
	const width = 800;

	barChart(trimmedData, 'happinessReportScore', 'svg', colors, margin, height, width);
});

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
