/* Basic styling for the webpage */
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

#gestureBox {
    width: 300px;
    height: 300px;
    margin: 20px auto;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

@media (max-width: 600px) {
    #gestureBox {
        width: 90%;
        height: 250px;
    }
}
// Function to fetch multiple food images from the API
function getFoodPics(amount) {
  let requests = []; // Array to store multiple API requests

  for (let i = 0; i < amount; i++) {
    let request = fetch("https://foodish-api.com/api/") // Fetch a random food image
      .then(response => response.json())
      .then(data => data.image)
      .catch(error => console.error("Error fetching image:", error));

    requests.push(request);
  }

  Promise.all(requests).then((images) => { // Wait for all fetch requests to complete
    imgList = images; // Store the fetched images in a list
    imageIndex = 0; // Start at the first image in the list
    updateScreen(); // Display the first image
  });
}
