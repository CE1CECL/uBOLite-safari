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

// ruleset: est-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".flex.col-300.col\",\"tasks\":[[\"has\",{\"selector\":\"> .col-has-ad\"}]]}"],["{\"selector\":\".flex--direction-column.flex.layout--right\",\"tasks\":[[\"has\",{\"selector\":\"> .flex--equal-width.aside--ad\"}]]}","{\"selector\":\"article.article\",\"action\":[\"remove-class\",\"cookie-paywall-visible\"]}","{\"selector\":\"aside\",\"tasks\":[[\"has-text\",\"Sisuturundus\"]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > article.list-article--commercial\"}]]}"]];

const hostnamesMap = new Map([["delfi.ee",0],["postimees.ee",1]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
