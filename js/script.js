class MobileNavbar {
    constructor(mobileMenu, navegacao, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navegacao = document.querySelector(navegacao);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => { 
            link.style.animation ? link.style.animation = "" : link.style.animation = 'navegacaoFade 0.5s ease forwards 0.3s'
        });
    }

    handleClick() {
        this.navegacao.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => this.handleClick());
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

let mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navegacao",
    ".navegacao a"
);

mobileNavbar.init();


