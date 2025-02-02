let authors = []; // Define members array to hold fetched data


// Fetch members data from JSON file
function fetchAuthor() {
  fetch('./author.json')
    .then(response => response.json())
    .then(data => {
        authors = data;
        displayAuthor(); // Call displayMembers here to ensure it runs after data is fetched
    })
    .catch(error => console.error('Error fetching members:', error));
}

function displayAuthor() {
  const authorGrid = document.getElementById("authorGrid");
  authorGrid.innerHTML = ""; // Clear existing members before adding new ones

  // Add members for current page
  authors.forEach((author) => { // Use members array directly
    const authorElement = `
        <div class="col-md-4"> <!-- Adjusted column size for 3 cards per row -->
          <div class="card h-100 img">
            <img src="${(author.image)}" class="card-img-top" alt="${(author.name)}">
            <div class="card-body">
              <h5 class="card-title" overflow="hidden">${(author.name)}</h5>
              <p class="card-text">${(author.description)} | ${(author.class)}</p>
            </div>
          </div>
        </div>
      `;
      authorGrid.innerHTML += authorElement;
  });
}

// Fetch and display members on load
fetchAuthor();
