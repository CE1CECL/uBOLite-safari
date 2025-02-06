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

// ruleset: annoyances-social

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".article-meta-lower\",\"tasks\":[[\"has\",{\"selector\":\".article-social\"}]]}"],["{\"selector\":\".border-y.py-2\",\"tasks\":[[\"has-text\",\"Share\"]]}"],["{\"selector\":\".col-xs-12 > div\",\"tasks\":[[\"has-text\",\"Follow AppleInsider\"]]}"],["{\"selector\":\".dcr-4gwv1z > ul\",\"tasks\":[[\"has-text\",\"Get our\"]]}"],["{\"selector\":\".elementor-button-wrapper\",\"tasks\":[[\"has-text\",\"Social Media\"]]}"],["{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"SHARE\"]]}"],["{\"selector\":\".elementor-widget-container > h2\",\"tasks\":[[\"has-text\",\"Please share\"]]}"],["{\"selector\":\".execphpwidget\",\"tasks\":[[\"has-text\",\"FREE UPDATES!\"]]}"],["{\"selector\":\".heading-title\",\"tasks\":[[\"has-text\",\"Follow US\"]]}"],["{\"selector\":\".justify-between.items-center\",\"tasks\":[[\"has-text\",\"Share:\"]]}"],["{\"selector\":\".po-fr__heading\",\"tasks\":[[\"has-text\",\"Share this article\"]]}"],["{\"selector\":\".post_style_zk > p\",\"tasks\":[[\"has-text\",\"Please subscribe\"]]}"],["{\"selector\":\".promo-card-muted\",\"tasks\":[[\"has-text\",\"RSS feed\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Share this page!\"]]}"],["{\"selector\":\"[data-ga-track-action]\",\"tasks\":[[\"has-text\",\"Join The Conversation\"]]}"],["{\"selector\":\"p.cms-textAlign-center\",\"tasks\":[[\"has-text\",\"follow NBC Sports\"]]}"],["{\"selector\":\".post-footer\",\"tasks\":[[\"has\",{\"selector\":\"> .share\"}]]}"],["{\"selector\":\".herald-single-sticky\",\"tasks\":[[\"has\",{\"selector\":\".herald-share\"}]]}"]];

const hostnamesMap = new Map([["foxnews.com",0],["thedispatch.com",1],["appleinsider.com",2],["theguardian.com",3],["newskarnataka.com",4],["bitcoinsensus.com",5],["freethoughtnow.org",6],["openculture.com",7],["cryptotimes.io",8],["neon.tech",9],["jacobin.com",10],["lifenews.com",11],["newsroom.ucla.edu",12],["ruwix.com",13],["theintercept.com",14],["nbcsports.com",15],["apotti.fi",16],["forssanlehti.fi",17]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
