import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter"
import showPictureByHover from "./modules/showPictureByHover";
import accordion from "./modules/accordion";
import burger from "./modules/menuBurger";
import scrolling from "./modules/scrolling"

window.addEventListener('DOMContentLoaded', ()=> {
    "use strict";

   
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item ', 'vertical')
    forms();
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    showPictureByHover('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');

});