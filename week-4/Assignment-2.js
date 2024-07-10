// Assignment 2: HTML DOM and AJAX
// Complete the functions below to make an AJAX call to a URL by Fetch API, and show the response data in the page. You may render UI with any style.

function ajax(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      document.getElementById("title").innerText = "Failed to fetch data";
    });
}
function render(data) {
  const names = data.map((item) => item.name).join(", ");
  document.getElementById("names").innerText = names;

  const prices = data.map((item) => item.price).join(", ");
  document.getElementById("prices").innerText = prices;

  const descriptions = data.map((item) => item.description).join(", ");
  document.getElementById("descriptions").innerText = descriptions;
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
