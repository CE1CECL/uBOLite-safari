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

// ruleset: ltu-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".col-18.no-padding.vl-auto-row\",\"tasks\":[[\"has\",{\"selector\":\"iframe\"}]]}","{\"selector\":\".item\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\"//bit.ly\\\"][target=\\\"_blank\\\"] > img\"}]]}","{\"selector\":\"script + div:not(.header)\",\"tasks\":[[\"has\",{\"selector\":\"+ .wrapper\"}]]}"],["{\"selector\":\".bdaia-widget\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"farming\\\"]\"}]]}","{\"selector\":\"div[data-vc-full-width]\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"aina_lt_300x250_\\\"]\"}]]}"],["{\"selector\":\".obj-cont dt\",\"tasks\":[[\"has-text\",\" Reklama/\"]]}"],["{\"selector\":\".col-md-4.col-sm-6\",\"tasks\":[[\"has\",{\"selector\":\"> ._slot\"}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}"],["{\"selector\":\".fl-row\",\"tasks\":[[\"has\",{\"selector\":\"iframe[src*=\\\"reklama\\\"]\"}]]}"],["{\"selector\":\".panel-pane\",\"tasks\":[[\"has\",{\"selector\":\".pane-content > script:first-of-type + style + div:last-of-type\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"a:not([href*=\\\"suvalkai.\\\"])\"}]]}"],["{\"selector\":\".md-block > div:not([class])\",\"tasks\":[[\"has\",{\"selector\":\"> [class*=\\\"adx\\\"]\"}]]}"],["{\"selector\":\"#inside > .block\",\"tasks\":[[\"has\",{\"selector\":\".middle > #left_banner\"}]]}"],["{\"selector\":\".portlet_block\",\"tasks\":[[\"has-text\",\"Partneriai\"]]}"],["{\"selector\":\".sp-module\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle, img[src*=\\\"/reklama_\\\"], a[href*=\\\"mods.\\\"]\"}]]}"],["{\"selector\":\".sp-column\",\"tasks\":[[\"has\",{\"selector\":\"#krepsiniozinios_lt_top\"}]]}"],["{\"selector\":\".col-md-6\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\"#sp-right .module\",\"tasks\":[[\"has\",{\"selector\":\"script, a[data-saferedirecturl]\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\".stickyContainer\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"ins\"}]]}"],["{\"selector\":\"aside > .uk-panel-box\",\"tasks\":[[\"has\",{\"selector\":\"> ins\"}]]}"],["{\"selector\":\"#sidebar1 > div\",\"tasks\":[[\"has-text\",\"mods\"]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has-text\",\"/^Nuorodos/\"]]}"],["{\"selector\":\".partner-item\",\"tasks\":[[\"upward\",\".bg-gray-100\"]]}"],["{\"selector\":\"#sidebar > div.custom-div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"]];

const hostnamesMap = new Map([["15min.lt",0],["aina.lt",1],["aruodas.lt",2],["automokyklos.lt",3],["itiketini-faktai.online",4],["lietuviuzodynas.lt",5],["lzinios.lt",6],["diena.lt",7],["suvalkai.lt",8],["m.delfi.lt",9],["torrent.ai",10],["torrent.lt",10],["technologijos.lt",11],["zarasuose.lt",12],["krepsiniozinios.lt",13],["anekdotai.lt",14],["budas.lt",15],["nidosreceptai.lt",16],["bukimevieningi.lt",17],["pirkis.lt",18],["kaunozinios.lt",19],["klaipedoszinios.lt",20],["xn--iauliinios-z9b5t9e.lt",20],["lkl.lt",21],["tv3.lt",22]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
