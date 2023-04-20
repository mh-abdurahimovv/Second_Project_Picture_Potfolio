import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";


window.addEventListener('DOMContentLoaded', ()=> {
    "use strict";

   
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item ', 'vertical')
    forms();
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
});