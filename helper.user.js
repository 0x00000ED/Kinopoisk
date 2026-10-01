// ==UserScript==
// @name         kinopoisk
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  kinopoisk смотреть фильмы бесплатно
// @author       0x00000ED
// @match        https://www.kinopoisk.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kinopoisk.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function createButton()
    {
        if(document.querySelector('.watch_button'))
        {
            return;
        }

        const container = document.querySelector('[class^="styles_buttonsContainer__"]');

        //console.log(container);

        if(!container)
        {
            return;
        }

        const div = document.createElement("div");

        div.innerHTML = `<button style="background: #2563eb; color: white; padding: 15px 20px; border: none; border-radius: 5px; cursor: pointer;">Смотреть онлайн</button>`;
        div.className = `watch_button`;
        div.onclick = function() {location.href=`https://kinokino.win${location.pathname}`};

        container.append(div);
    }

    const observer = new MutationObserver(() => {
        createButton();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
