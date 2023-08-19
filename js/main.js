import { Router } from "./router.js"

const router = new Router()
router.add("/home", "/pages/home.html")
router.add("/universo", "/pages/universo.html",)
router.add("/exploracao", "/pages/exploracao.html")

router.handle()

window.onpopstate = () => handle()
window.route = () => router.route()