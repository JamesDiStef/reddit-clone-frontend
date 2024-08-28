document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) return;
  e.preventDefault();
  urlRoute();
});

const urlRoutes = {
  404: {
    template: "reddit-clone-frontend/templates/404.html",
    title: "Not found",
    description: "404 page",
  },
  "/": {
    template: "reddit-clone-frontend/index.html",
    title: "Home page",
    description: "home page",
  },
  "/about": {
    template: "reddit-clone-frontend/templates/about.html",
    title: "About this app",
    description: "about page",
  },
  "/contact": {
    template: "reddit-clone-frontend/templates/contact.html",
    title: "About this app",
    description: "about page",
  },
  "/info": {
    template: "reddit-clone-frontend/templates/info.html",
    title: "About this app",
    description: "about page",
  },
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState([], "", event.target.href);
  urlLocationhandler();
};

const urlLocationhandler = async () => {
  const location = window.location.pathname;
  console.log(location);
  if (location.length === 0) location = "/";
  console.log(location);
  const route = urlRoutes[location] || urlRoutes[404];
  console.log(route);
  const html = await fetch(route.template).then((res) => res.text());
  console.log(html);
  document.getElementById("stuff").innerHTML = html;
};

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log("hey ");
  fetch(
    "https://us-central1-xenon-heading-433720-j4.cloudfunctions.net/api/subscribers",
    {
      // mode: "no-cors",
    }
  )
    .then((response) => {
      console.log(response);
      // If the response is not 2xx, throw an error
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // If the response is 200 OK, return the response in JSON format.
      return response.json();
    })
    .then((data) => console.log(data)) // You can continue to do something to the response.
    .catch((error) => console.error("Fetch error:", error)); // In case of an error, it will be captured and logged.
});
