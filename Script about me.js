window.onload = function() {
  fetch('about-text.html')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load about text");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("content").innerHTML = data;
    })
    .catch(error => {
      document.getElementById("content").innerHTML = "<p>Could not load content.</p>";
      console.error("Error:", error);
    });
};