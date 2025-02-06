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

// ruleset: cze-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".container--break\",\"tasks\":[[\"has\",{\"selector\":\".ad--align\"}]]}","{\"selector\":\"div[class^=\\\"position_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".ad--align\"}]]}"],["{\"selector\":\".ct-related\",\"tasks\":[[\"has-text\",\"/^\\\\s+Reklama/\"]]}","{\"selector\":\".widget-group-2 li\",\"tasks\":[[\"has\",{\"selector\":\"div.ad-pmg\"}]]}"],["{\"selector\":\".block-imageblock\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has-text\",\"/^reklama/i\"]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"reklama\"]]}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a[class^=\\\"glightbox\\\"]\"}]]}","{\"selector\":\"img[src^=\\\"/upload/data/\\\"]\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".v-card--link\",\"tasks\":[[\"has\",{\"selector\":\".ad\"}]]}"],["{\"selector\":\"div.article--content\",\"tasks\":[[\"has\",{\"selector\":\"div.design-advert\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\"?act=detail&f=8\\\"]\"}]]}"],["{\"selector\":\".bcc\",\"tasks\":[[\"has\",{\"selector\":\".banners\"}]]}"],["{\"selector\":\".wrapper__list__article\",\"tasks\":[[\"has\",{\"selector\":\".widget__form-subscribe\"}]]}"],["{\"selector\":\".desktop-wrapper\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".tdc-row\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> .tdc-element-style\"}]]}]]}"],["{\"selector\":\".content-item\",\"tasks\":[[\"has\",{\"selector\":\".header a[href^=\\\"/reklama/\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"img[src*=\\\"/ads/\\\"]\"}]]}"],["{\"selector\":\"div.dragging-enabled\",\"tasks\":[[\"has\",{\"selector\":\"div.gadget--reklama\"}]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"modal-open\"]}"],["{\"selector\":\"div\",\"action\":[\"remove-class\",\"with-active-branding\"]}"],["{\"selector\":\"a[id*=\\\"zatvorit\\\"]\",\"action\":[\"remove-attr\",\"href\"]}"],["{\"selector\":\"img[src*=\\\"/img/atlas\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"img[alt=\\\"casopis\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"a\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"url\"}],[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"stopPrntScr\"]]}","{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}"]];

const hostnamesMap = new Map([["brainee.hnonline.sk",0],["csfd.cz",1],["doktorka.cz",2],["dotekomanie.cz",3],["enigmaplus.cz",[4,18]],["epochaplus.cz",[4,19]],["konzolista.cz",5],["lupa.cz",6],["root.cz",6],["motorkari.cz",7],["msmt.cz",8],["presovak.sk",[9,15]],["slovnik.aktuality.sk",10],["sports24.cz",11],["tvtv.sk",12],["vtn-vranov.sk",13],["www.seznam.cz",14],["autozurnal.com",[15,16]],["pppeter.shop",15],["bombuj.si",17],["serialy.bombuj.si",17],["indian-tv.cz",20],["nerdfix.cz",20],["vranovske.sk",21]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
