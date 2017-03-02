// include jquery in js library
// var $ = require('jquery');
// var Person = require('./modules/Person');
import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var featureReveal = new RevealOnScroll($(".feature-item"), "85%");
var testimonialReveal = new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
