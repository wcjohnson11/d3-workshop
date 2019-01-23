d3.tsv('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7nfb5QTcZrfV_feWxFIs9HlO63Ls3PAFTC0k1ZgRIwonNvHY4p6AlG13SLBwi3OA8eGWrzDFLv-Ou/pub?gid=0&single=true&output=tsv').then(function(data) {
    const titles = Object.keys(data[0])
    console.log(titles, data)
})