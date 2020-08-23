// ==UserScript==
// @name         darkMode do any do
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://desktop.any.do/tasks/next-seven-days
// @grant        none
// ==/UserScript==

(function () {

  'use strict';

  checkIfDomIsLoaded()

  function checkIfDomIsLoaded() {  // ==================================================================================

    const el = document.getElementsByClassName('AppImageAnimatedDom__element')

    if (el[0]) {
      turnOnDarkMode()
    } else {

      setTimeout(() => {
        console.log('Tenta de novo')
        checkIfDomIsLoaded()
      }, 1000);

    }

  }

  function turnOnDarkMode() { // =======================================================================================

    console.log('turn on')

    if (document.getElementsByClassName('AppSidebar__bg')[0]) {
      document.getElementsByClassName('AppSidebar__bg')[0].setAttribute('style', 'background-color: black')
    }

    const el_a = document.getElementsByClassName('AppSidebarGroupsItems__item__categoryTitle')
    for (const el of el_a) {
      if (!el.hasAttribute('style')) {
        el.setAttribute('style', 'color: white')
      }
    }

    const el_b = document.getElementsByClassName('AppSidebarHeadingItem__title__text')
    for (const el of el_b) {
      el.setAttribute('style', 'color: white')
    }


    const el_c = document.getElementsByClassName('TaskListTitle__h')
    for (const el of el_c) {
      el.setAttribute('style', 'color: white')
    }

    const el_d = document.getElementsByClassName('CardScrollView')
    for (const el of el_d) {
      el.setAttribute('style', 'background-color: black')
    }

    const el_f = document.getElementsByClassName('TabsNavigationButtonsBar__item')
    for (const el of el_f) {
      el.setAttribute('style', 'color: white')
    }

    const el_g = document.getElementsByClassName('CardPadder')
    for (const el of el_g) {
      el.setAttribute('style', 'color: white')
    }

    const el_h = document.getElementsByClassName('TaskEditPaneDetails__taskTitle')
    for (const el of el_h) {
      el.setAttribute('style', 'color: white')
    }

    const el_l = document.getElementsByClassName('Label__text')
    for (const el of el_l) {
      el.setAttribute('style', 'color: white')
    }

    const el_j = document.getElementsByClassName('DynamicTextArea')
    for (const el of el_j) {
      el.setAttribute('style', 'background-color: white')
    }

    if (document.getElementsByClassName('BaseCard')[0]) {
      document.getElementsByClassName('BaseCard')[0].setAttribute('style', 'background-color: black; font: white')
    }

  }

})();