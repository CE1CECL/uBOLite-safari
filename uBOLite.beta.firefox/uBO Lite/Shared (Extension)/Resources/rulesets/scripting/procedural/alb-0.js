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

// ruleset: alb-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".vc_raw_html\",\"tasks\":[[\"has-text\",\"Html code\"]]}"],["{\"selector\":\".td-block-title-wrap > h4 > span\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has-text\",\"- Advertisement -\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".lazyloaded\"}]]}"],["{\"selector\":\".a-listing > li\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".boost-list-container > [style] > [class]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://aa.boostapi.net\\\"]\"}]]}"],["{\"selector\":\"div.others\",\"tasks\":[[\"has\",{\"selector\":\"div[id*=\\\"_ads\\\"]\"}]]}"]];

const hostnamesMap = new Map([["kohajone.com",0],["shkoder.net",1],["mediaworld.al",2],["konica.al",3],["360grade.al",4],["tej.al",5],["joq-albania.com",6],["joqalbania.com",6],["gazetaexpress.com",7]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
