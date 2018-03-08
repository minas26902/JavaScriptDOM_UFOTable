// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $stateInput = document.querySelector('#date_time');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Set filteredDate to dataSet initially
// dataSet comes from the data.js file
var filteredData= dataSet;

// renderTable renders the filteredDate to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var sightings = filteredData[i];
    var fields = Object.keys(sightings);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell and set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sightings[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $stateInput.value.trim();

  // Set filteredData to an array of all data whose "datetime" matches the filter
  filteredData = dataSet.filter(function(sightings) {
    var sightingsDate = sightings.datetime.toLowerCase();

    // If true, add the sighting to the filteredData, otherwise don't add it to filteredData
    return sightingsDate === filterDateTime;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
