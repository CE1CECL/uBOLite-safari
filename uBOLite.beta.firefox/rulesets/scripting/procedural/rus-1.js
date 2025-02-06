/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: rus-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#side_right > .block_r\",\"tasks\":[[\"has\",{\"selector\":\"> div [href*=\\\"liveinternet.ru/\\\"]\"}]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> .block-title\",\"tasks\":[[\"has-text\",\"Счётчики\"]]}]]}"],["{\"selector\":\".footer [id]\",\"tasks\":[[\"has\",{\"selector\":\"> b\"}]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has-text\",\"Рекомендуем ещё\"]]}"],["{\"selector\":\".region-sidebar-first > .block\",\"tasks\":[[\"has\",{\"selector\":\"> .content > [href*=\\\"metrika\\\"]\"}]]}"],["{\"selector\":\".sidebar > .menu-wrap > .menu-head\",\"tasks\":[[\"has-text\",\"Счетчики\"],[\"spath\",\" + div\"]]}","{\"selector\":\".sidebar > .menu-wrap > .menu-head\",\"tasks\":[[\"has-text\",\"Счетчики\"]]}"],["{\"selector\":\"article div\",\"tasks\":[[\"has\",{\"selector\":\"> div > [id^=\\\"rcmw-container-\\\"]\"}]]}","{\"selector\":\"section > nav ~ div div\",\"tasks\":[[\"has\",{\"selector\":\"> div > [id^=\\\"rcmw-container-\\\"]\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"getPrefixes\"]]}"],["{\"selector\":\"a[href*=\\\":2053\\\"]\",\"action\":[\"remove-class\",\"btn\"]}"],["{\"selector\":\"[aria-label*=\\\"Лент\\\"] article\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}","{\"selector\":\"div[class*=\\\"__col\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\"-feed__\\\"][class*=\\\"_type_\\\"] > div[class*=\\\"loader\\\"]\"}]]}"],["{\"selector\":\".mail-Page-Body .Popup2 > .Tooltip-Content\",\"tasks\":[[\"has-text\",\"2001—2024\"]]}"],["{\"selector\":\".content__right div\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > button\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/advertiser/\"}]]}]]}","{\"selector\":\"[id][aria-label] > [class*=\\\"_card\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > button\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/advertiser/\"}]]}]]}","{\"selector\":\"[id][aria-label] > [class*=\\\"_card\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > div > [data-event-required]\"}]]}","{\"selector\":\"[id][aria-label] > [class*=\\\"_card\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div [data-vnl*=\\\"advertiser\\\"]\"}]]}"],["{\"selector\":\".touch-feed > div > .feed-item[id^=\\\"zen-row-\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"zen-ui-channel-info\\\"][class$=\\\"subtitle-text\\\"]\",\"tasks\":[[\"has-text\",\"промо\"]]}]]}"],["{\"selector\":\".article > div[style^=\\\"background-color:\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> span + a[id][href][target=\\\"_blank\\\"]\"}]]}","{\"selector\":\"[itemprop=\\\"articleBody\\\"] > div[style^=\\\"background-color:\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> span + a[id][href][target=\\\"_blank\\\"]\"}]]}","{\"selector\":\"a.rounded[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has-text\",\"/^Узнать больше/\"]]}","{\"selector\":\"html[style] > body .advanced-area .post[itemid] ~ .post:not([itemid])\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> [class] a[href][target=\\\"_blank\\\"]\"}]]}","{\"selector\":\"html[style] > body .advanced-area .post[itemid] ~ .post:not([itemid])\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> [class]:empty\"}]]}","{\"selector\":\"html[style] > body [id][class][style^=\\\"overflow: hidden; height:\\\"] > div[style]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"a[href][target=\\\"_blank\\\"] > img\"}]]}","{\"selector\":\"html[style] > body a.rounded[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has-text\",\"/^Узнать /\"]]}","{\"selector\":\"html[style] [id] .slider-list[style] ~ div[class]:not([id])\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> :only-child:not(div):not([id]):not([class])\"}]]}","{\"selector\":\"html[style] [id] div[class]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> h2 ~ script\",\"tasks\":[[\"has-text\",\"/return/\"]]}]]}"]];

const hostnamesMap = new Map([["happy-hack.net",0],["uniongang.net",1],["uniongang.org",1],["virtualbrest.ru",2],["ferra.ru",3],["letidor.ru",3],["moslenta.ru",3],["motor.ru",3],["passion.ru",3],["quto.ru",3],["wmj.ru",3],["istmat.org",4],["freehd.com.ua",5],["hdreactor.club",5],["hdreactor.su",5],["avtorambler.com",6],["rambler.ru",6],["gazeta.ru",7],["id.rambler.ru",7],["quiz.rambler.ru",7],["vp.rambler.ru",7]]);

const entitiesMap = new Map([["avtorambler",7],["championat",7],["eda",7],["lenta",7],["letidor",7],["moslenta",7],["motor",7],["passion",7],["quto",7],["rambler",7],["wmj",7],["www.afisha",7],["dzen",9],["mail.yandex",10],["ya",11],["yandex",[11,12]],["4pda",13]]);

const exceptionsMap = new Map([["online-fix.*",[8]]]);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
