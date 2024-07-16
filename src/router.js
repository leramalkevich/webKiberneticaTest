import {Main} from "./components/main.js";
import {Login} from "./components/login.js";

export class Router {
    constructor() {
        this.titlePageElement = document.getElementById('page-title');
        this.contentPageElement = document.getElementById('content');
        this.initEvents();

        this.routes = [
            {
                route: '/',
                title: 'Главная страница',
                filePath: '/templates/main.html',
                load: () => {
                    new Main();
                }
            },
            {
                route: '/login',
                title: 'Войти в систему',
                filePath: '/templates/login.html',
                load: () => {
                    new Login();
                }
            },
        ]
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.openRoute.bind(this));
        window.addEventListener('popstate', this.openRoute.bind(this));
    }

    async openRoute() {
        const url = window.location.pathname;
        const newUrl = this.routes.find(item => item.route === url);
        if (newUrl) {
            if (newUrl.title) {
                this.titlePageElement.innerText = newUrl.title;
            }
            if (newUrl.filePath) {
                let contentBlock = this.contentPageElement;
                this.contentPageElement.innerHTML = await fetch(newUrl.filePath).then(response => response.text());
                contentBlock.innerHTML = await fetch(newUrl.filePath).then(response => response.text());
            }

            if (newUrl.load && typeof newUrl.load === 'function') {
                newUrl.load();
            }
        }
    }
}