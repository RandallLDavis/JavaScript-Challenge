// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var empty = d3.select("tbody")
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(date);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
    
        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});