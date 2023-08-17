const routes = {
    "/home": "/pages/home.html",
    "/universo": "/pages/universo.html",
    "/exploracao": "/pages/exploracao.html",
}

function route (event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle () {
    const { pathname } = window.location
    console.log(pathname);

    const route = routes[pathname]
    console.log(route);

    const content = document.querySelector("#content")

    fetch(route)
    .then(data => data.text())
    .then(html => content.innerHTML = html)
}

handle()

window.onpopstate = () => handle()