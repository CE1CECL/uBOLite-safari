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

// ruleset: hrv-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".panel-2\",\"tasks\":[[\"has\",{\"selector\":\"> div[id*=\\\"gpt\\\"]\"}]]}"],["{\"selector\":\".BaseLayout_content div[class^=\\\"intextAdIgnore\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".Slot_content\"}]]}","{\"selector\":\".Sidebar_aside > div:only-of-type > div:first-of-type\",\"tasks\":[[\"has\",{\"selector\":\".Slot_content\"}]]}","{\"selector\":\".intextAdIgnore\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"css-\\\"]:only-child > .Slot_content:only-child\"}]]}","{\"selector\":\"div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .Slot_content:only-child\"}]]}","{\"selector\":\"div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> span.Slot_title:first-child + .Slot_content:last-child\"}]]}","{\"selector\":\"p ~ div\",\"tasks\":[[\"has\",{\"selector\":\"> .Slot_content\"}]]}"],["{\"selector\":\".body-content.container > div[id^=\\\"home\\\"] ~ .row\",\"tasks\":[[\"has\",{\"selector\":\".ponuda\"}]]}"],["{\"selector\":\".flash--news\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"ad-\\\"]\"}]]}","{\"selector\":\".flash--news\",\"tasks\":[[\"has\",{\"selector\":\"> script\"}]]}"],["{\"selector\":\".single__widget\",\"tasks\":[[\"has\",{\"selector\":\"> .lwdgt\"}]]}","{\"selector\":\"section[class=\\\"section\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".lwdgt\"}]]}"],["{\"selector\":\".positionFrame\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"native.tportal\\\"]\"}]]}"],["{\"selector\":\".relative.center\",\"tasks\":[[\"has\",{\"selector\":\"> .banner-slot\"}]]}"],["{\"selector\":\".td-stretch-content\",\"tasks\":[[\"has\",{\"selector\":\"> [class*=\\\"  \\\"]:not([class*=\\\"style\\\"])\"}],[\"has\",{\"selector\":\".sviBanneri\"}]]}","{\"selector\":\".vc_row[class*=\\\"  \\\"] > .vc_column\",\"tasks\":[[\"has\",{\"selector\":\".td-a-rec\"}]]}"],["{\"selector\":\"div[class^=\\\"css-\\\"]:first-of-type\",\"tasks\":[[\"has\",{\"selector\":\"+ div[align=\\\"center\\\"]\"}]]}"],["{\"selector\":\".widget_block\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"pvinformer\\\"]\"}]]}]]}","{\"selector\":\".widget_media_image\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"pvinformer\\\"]\"}]]}]]}"],["{\"selector\":\".big\",\"tasks\":[[\"has\",{\"selector\":\"ins\"}]]}","{\"selector\":\".reklame-dio .big\",\"tasks\":[[\"has\",{\"selector\":\"img:not([src*=\\\"rtnk.me.png\\\"])\"}]]}"],["{\"selector\":\".article--listing ~ .article\",\"tasks\":[[\"has\",{\"selector\":\"script[src*=\\\"adsbygoogle\\\"]\"}]]}","{\"selector\":\".article__header\",\"tasks\":[[\"has\",{\"selector\":\"+ .article__section-wrapper--zebra\"}]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"img[width^=\\\"4\\\"]\"}]]}"],["{\"selector\":\"div[class=\\\"single-article__row\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .banner\"}]]}"],["{\"selector\":\".elementor-column-gap-default\",\"tasks\":[[\"has-text\",\"/^SERV\\\\IS/\"]]}","{\"selector\":\"article.type-post\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"meridian\\\"]\"}]]}","{\"selector\":\"article.type-post\",\"tasks\":[[\"has\",{\"selector\":\"img[data-src*=\\\"freebet\\\"]\"}]]}","{\"selector\":\"main section[data-settings*=\\\"background\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"adv\\\"]\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"[id*=\\\"hayat_ba_\\\"]\"}]]}"],["{\"selector\":\"style[scoped] + div[class*=\\\"  wpb_column\\\"]:last-of-type\",\"tasks\":[[\"has\",{\"selector\":\"script[src*=\\\"pagead\\\"]\"}]]}"],["{\"selector\":\".ayuPost\",\"tasks\":[[\"has\",{\"selector\":\"img[src*=\\\"://redakcija.\\\"]\"}]]}"],["{\"selector\":\"#secondary > aside\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-header > h3\",\"tasks\":[[\"has-text\",\"/Marketing|Sponzor\\\\isano/\"]]}]]}"]];

const hostnamesMap = new Map([["depo.ba",0],["danas.hr",1],["glasistre.hr",2],["monitor.hr",3],["poslovni.hr",4],["poslovni.co.rs",4],["poslovni-dnevnik.me",4],["poslovni.mk",4],["tportal.hr",5],["telegram.hr",6],["bokanews.me",7],["klikdoposla.com",8],["pvinformer.me",9],["rtnk.me",10],["sportske.net",11],["tvjasenica.rs",12],["vecernji.hr",13],["ul-info.com",14],["intermagazin.rs",15],["hayat.ba",16],["otisak.ba",17],["b92.tv",18],["sveopoznatima.com",19]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
