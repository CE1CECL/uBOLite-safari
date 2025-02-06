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

// ruleset: lva-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\"img\\\"]\"}]]}"],["{\"selector\":\".widget_execphp\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"tag\\\"][class*=\\\"cloud\\\"]\"}]]}"],["{\"selector\":\".widget_execphp\",\"tasks\":[[\"has-text\",\"Reklāmraksti\"]]}"]];

const hostnamesMap = new Map([["pilseta24.lv",0],["zz.lv",[1,2]],["staburags.lv",2],["aluksniesiem.lv",2],["bauskasdzive.lv",2],["dzirkstele.lv",2],["ziemellatvija.lv",2],["rekurzeme.lv",2]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
