/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["._3S8wP > div:first-child + div,\n.disableAdvButton__container,\na[href*=\"rambler.ru/top100/\"],\na[href*=\"top100.rambler.ru/\"]","a[href=\"http://vtambove.ru/advert/banner_network/\"]","#banner_counters","#bigmirTop,\n.liveinternet","#p-counters","#page_footer > .copyright > center:first-child","#picContainer > img",".ad_title",".ad_title > a,\ndiv[id^=\"leaderboard_ad\"] > *",".b-footer__counters",".bbanerr",".bc > .il:last-child > .bp",".bcounts",".c-liveinternet",".contbaner",".copyright ~ .copyright",".counters",".main > #footer ~ table",".ph-logo_doodle[href^=\"https://universal-link.mail.ru/\"]",".revolvermaps,\nfooter > .counter",".sibnet-footer__counters","[aria-label=\"raichuLogoLink\"]","[class^=\"Footer_liveinternet\"]",".ImageGalleryFullscreenVertical__ad","circle[stroke-dashoffset]","img[alt=\"liru\"]","img[width=\"1\"][height=\"1\"]",".adbanner","#js-mail-layout-content-header > .message-list-banner-portal + div[id]:empty"];

const hostnamesMap = new Map([["rambler.ru",[0,24]],["vtambove.ru",1],["sfw.so",2],["sinoptik.ua",3],["lurkmo.re",4],["lurkmore.to",4],["game4you.top",5],["rustorka.com",5],["rustorka.net",5],["rustorka.top",5],["rustorkacom.lib",5],["fastpic.ru",6],["inoreader.com",8],["svpressa.ru",9],["militaryreview.su",10],["www.sibnet.ru",11],["ingrus.net",12],["kanobu.ru",13],["yakusubstudio.home-forum.com",14],["yakusubstudio.ru",14],["80-e.ru",15],["24warez.ru",16],["ngnovoros.ru",16],["ngzt.ru",16],["progorod59.ru",16],["progorodchelny.ru",16],["progorodnsk.ru",16],["progorodsamara.ru",16],["prokazan.ru",16],["samlab.ws",17],["mail.ru",18],["radioprofusion.com",19],["sibnet.ru",20],["rutube.ru",21],["tass.ru",22],["avtorambler.com",24],["otzovik.com",25],["lostfilm.tv",26],["lostfilm.tw",26]]);

const entitiesMap = new Map([["mail.yandex",28]]);

const exceptionsMap = new Map([["inoreader.com",[7]],["auto.*",[23]],["only-paper.*",[27]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
