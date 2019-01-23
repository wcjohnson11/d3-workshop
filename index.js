d3.tsv('data.tsv').then(function(data) {
    const categories = Object.keys(data[0])
    tabulate(data, categories)
    console.log(categories, data)
    
})

const tabulate = (data, categories) => {
    const table = d3.select('.table').append('table')
    const thead = table.append('thead')
    const tbody = table.append('tbody')

    const headers = thead.append('tr')
        .selectAll('th')
        .data(categories)
        .enter()
        .append('th')
        .text(d => d)

    const rows = table.append('tbody').selectAll('tr')
        .data(data).enter()
        .append('tr')

    const tableData = rows.selectAll('td')
        .data((d) => {
            return categories.map((k) => {
                return { 'value': d[k], 'name': k }
            })
        }).enter()
        
    tableData.append('td')
        .attr('data-th', (d) => d.name)
        .text(d => d.value)
}