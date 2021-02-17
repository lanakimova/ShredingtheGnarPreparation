var dropdown = d3.select("#button1")

dropdown.on("click", function(event) {
    event.append("a").classed("dropdown-item", true).attr("href", "#").text("New entry")
});

console.log(dropdown)