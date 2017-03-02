import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor () {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.triggerElement = $(".large-hero__title");
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createHeaderWaypoint();
        this.createPageSectionWaypoint();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.load(function() {
            Waypoint.refreshAll();
        })
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
    createHeaderWaypoint() {
        var that = this;
        //console.log(that.triggerElement[0]);
        new Waypoint({
            element: that.triggerElement[0],
            handler: function(direction) {
                if (direction === "down") {
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }
    createPageSectionWaypoint() {
        var that = this;
        this.pageSections.each(function() {
            var currentSection = this;
            new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if (direction === "down") {
                        var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if (direction === "up") {
                        var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            })
        })
    }
}

export default StickyHeader;
