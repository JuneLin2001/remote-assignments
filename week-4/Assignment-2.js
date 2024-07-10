// Assignment 2: HTML DOM and AJAX
// Complete the functions below to make an AJAX call to a URL by Fetch API, and show the response data in the page. You may render UI with any style.

function ajax(url) {
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const names = data.map((item) => item.name);
      document.getElementById("names").innerText = names.join(", ");
      const prices = data.map((item) => item.price);
      document.getElementById("prices").innerText = prices.join(", ");
      const descriptions = data.map((item) => item.description);
      document.getElementById("descriptions").innerText =
        descriptions.join(", ");
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      document.getElementById("title").innerText = "Failed to fetch data";
    });
}
function render(data) {
  //render UI
  // your code here
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

// const { name,price,description } = data;

ajax(url).then((data) => {
  render(data);
});
// you should get product information in JSON format and render data in the page
