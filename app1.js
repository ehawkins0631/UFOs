// 11.2.4
// import the data from data.js
// Use const becase we do not want the data variable to be reassigned or reused
const tableData = data;

// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage.
// Reference the HTML table using d3
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");
// 11.5.2 
// Examlple using forEach
// let numbers = [1,2,3,4,5,6];
// numbers.forEach(function (elements) {console.log(elements**2);})
// 11.5.1 Building a Table

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

// 11.5.3 & 11.5.4
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

// Data-Driven Documents (D3 for short) is a JavaScript library that adds interactive functionality, 
// such as when users click a button to filter a table. 
//  It works by "listening" for events, such as a button click, then reacts according to the code we've created.

// 11.5.4 
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
