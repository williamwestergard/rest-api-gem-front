fetch("https://rest-api-gem-back.onrender.com/api/users")
  .then((response) => response.json())
  .then((data) => {
    let currentIndex = 0;

    function updateContent() {
      const user = data[currentIndex];
      document.getElementById("name").innerText = user.name;
      document.getElementById("desc").innerText = user.desc;
      document.getElementById("value").innerText = user.value;
      document.getElementById("price").innerHTML = user.price;
      document.getElementById("image").src = "http://localhost:3000" + user.url;
    }

    updateContent();

    document.getElementById("amethyst").addEventListener("click", () => {
      currentIndex = 0; // Amethyst
      updateContent();
    });

    document.getElementById("emerald").addEventListener("click", () => {
      currentIndex = 1; // Emerald
      updateContent();
    });

    document.getElementById("ruby").addEventListener("click", () => {
      currentIndex = 2; // Ruby
      updateContent();
    });
  });
