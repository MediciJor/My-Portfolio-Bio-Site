function loadPage(filename) {
  fetch(filename)
    .then(response => {
      if (!response.ok) {
        throw new Error("File not found");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("content").innerHTML = data;
    })
    .catch(error => {
      document.getElementById("content").innerHTML = "<p>Error loading content.</p>";
      console.error("Error:", error);
    });
}
