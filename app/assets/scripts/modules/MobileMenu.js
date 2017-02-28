import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        // register events
        this.events();
    }

    events() {
        // THIS IS WRONG! DO NOT CALL THE FUNCTION
        // this.menuIcon.click(this.toggleTheMenu());
        // We only want to REGISTER the handler click
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}
export default MobileMenu;
