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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".col\",\"tasks\":[[\"has\",{\"selector\":\"a[rel=\\\"nofollow\\\"]\"}]]}","{\"selector\":\".col\",\"tasks\":[[\"has\",{\"selector\":\"a[rel=\\\"sponsored\\\"]\"}]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"[data-adaptive]\"}]]}"],["{\"selector\":\".group-link\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"&utm_\\\"]\"}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".hsdn > li\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has\",{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"QUẢNG CÁO\"]]}]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\".block-container > .block-body > a[href]\"}]]}","{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\".block-container > .block-body > ins\"}]]}"],["{\"selector\":\".menu-item\",\"tasks\":[[\"has\",{\"selector\":\"a[rel=\\\"nofollow\\\"]\"}]]}"],["{\"selector\":\".p-body-sidebar > .block > .block-container\",\"tasks\":[[\"has\",{\"selector\":\".adsbypubpower\"}]]}","{\"selector\":\".p-body-sidebar > .block > .block-container\",\"tasks\":[[\"has\",{\"selector\":\"[data-widget_id]\"}]]}","{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\".adsbypubpower\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"[class$=\\\"-modal\\\"]\"}]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"data-pop1\"]}","{\"selector\":\"body\",\"action\":[\"remove-attr\",\"data-pop2\"]}"]];

const hostnamesMap = new Map([["24h.com.vn",0],["baomoi.com",1],["goal.90phut24.xyz",2],["gocmod.com",3],["hsctvn.com",4],["metruyencv.info",5],["metruyencv.net",5],["metruyencv.com",5],["techrum.vn",6],["vebozy.cc",7],["voz.vn",8],["xem.javkche.info",9],["phimmoi.rip",10]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
