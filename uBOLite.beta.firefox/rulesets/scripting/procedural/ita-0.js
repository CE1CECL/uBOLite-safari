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

// ruleset: ita-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".card.shadowLink\",\"tasks\":[[\"has\",{\"selector\":\"#ContentPlaceHolder1_rptAzzMain_btn_0\"}]]}","{\"selector\":\".container-fluid.py-3.bg-white-color.pl-5.pr-5\",\"tasks\":[[\"has\",{\"selector\":\".text-black.weight-400.mb-0\",\"tasks\":[[\"has-text\",\"I Nostri Partners\"]]}]]}"],["{\"selector\":\".flex.flex-col.space-y-3.relative\",\"tasks\":[[\"has\",{\"selector\":\".mr-2\"}]]}"],["{\"selector\":\".jeg_slide_item\",\"tasks\":[[\"has\",{\"selector\":\".category-sponsorizzate\"}]]}"],["{\"selector\":\".lancio-adv\",\"tasks\":[[\"has\",{\"selector\":\"span.contenuto_sponsorizzato\"}]]}"],["{\"selector\":\".post.type-post.status-publish.format-standard\",\"tasks\":[[\"has\",{\"selector\":\".brandvoice\"}]]}"],["{\"selector\":\".product-grid-column\",\"tasks\":[[\"has\",{\"selector\":\".product-tile__sponsored-it\"}]]}"],["{\"selector\":\".rowthumb\",\"tasks\":[[\"has\",{\"selector\":\"a[href]\"}]]}"],["{\"selector\":\".td-block-row\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://group.intesasanpaolo.com/\\\"]\"}]]}"],["{\"selector\":\".td_block_inner.td-mc1-wrap\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/pubbliredazionale/\\\"]\"}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\".sponsor\"}]]}"],["{\"selector\":\".widget.widget_block\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://betsquare.com/\\\"]\"}]]}"],["{\"selector\":\".wpb_wrapper > .td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\".sponsor\"}]]}"],["{\"selector\":\".similar-post-holder\",\"tasks\":[[\"has\",{\"selector\":\".categoria\",\"tasks\":[[\"has-text\",\"Post sponsorizzato\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".featured + .spons-post\"}]]}"],["{\"selector\":\"div[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-test=\\\"mms-plp-sponsored\\\"]\"}]]}","{\"selector\":\"li[data-index-number]\",\"tasks\":[[\"has\",{\"selector\":\"[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has-text\",\"Sponsorizzati\"]]}]]}"],["{\"selector\":\"div[style=\\\"min-height: 885px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".advertisement-wrapper\"}]]}"],["{\"selector\":\".cont-ev-list\",\"tasks\":[[\"has\",{\"selector\":\".title-channel\",\"tasks\":[[\"has-text\",\"in Evidenza\"]]}]]}"],["{\"selector\":\".agi-article-card\",\"tasks\":[[\"has\",{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"BRANDED CONTENT\"]]}]]}"],["{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\".td-block-title-wrap\",\"tasks\":[[\"has-text\",\"Banner\"]]}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\".box-head\",\"tasks\":[[\"has-text\",\"WM Sponsor\"]]}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Esponi i tuoi banner sul forum\"]]}]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"div.categories\",\"tasks\":[[\"has-text\",\"pubbliredazionale\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Contenuti sponsorizzati\"]]}]]}"],["{\"selector\":\".boxAnnunci\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Annuncio pubblicitario\"]]}]]}"],["{\"selector\":\".testo > div\",\"tasks\":[[\"has\",{\"selector\":\"b\",\"tasks\":[[\"has-text\",\"PARTNERS COMMERCIALI\"]]}]]}"],["{\"selector\":\".cl-amp-important-information\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Annuncio pubblicitario\"]]}]]}","{\"selector\":\".custom-html\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Annuncio pubblicitario\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Contenuti sponsorizzati\"]]}]]}"],["{\"selector\":\".article-blog-default\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"CONTENUTO SPONSORIZZATO\"]]}]]}"],["{\"selector\":\".search-itm\",\"tasks\":[[\"has\",{\"selector\":\".search-itm__label\",\"tasks\":[[\"has-text\",\"annuncio\"]]}]]}"],["{\"selector\":\".feat-widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"INFORMAZIONE REDAZIONALE\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\"div[data-testid=\\\"section\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Contenuto sponsorizzato\"]]}]]}"],["{\"selector\":\".card.dark\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Adv\"]]}]]}"]];

const hostnamesMap = new Map([["investire.biz",0],["money.it",1],["orvietosi.it",2],["sportmediaset.mediaset.it",3],["forbes.it",4],["douglas.it",5],["cruiselifestyle.it",6],["italpress.com",7],["ledicoladelsud.it",8],["01health.it",9],["01net.it",9],["01smartlife.it",9],["sportando.basketball",10],["freshpointmagazine.it",11],["pharmacyscanner.it",12],["mediamarkt.ch",13],["mediaworld.it",13],["liberoquotidiano.it",14],["adnkronos.com",15],["agi.it",16],["cronacadiverona.com",17],["forum-wranglermania.com",18],["guadagna.net",19],["ilpiccolo.net",20],["ilprogettistaindustriale.it",21],["impiego24.it",22],["lalaziosiamonoi.it",23],["laleggepertutti.it",24],["logisticanews.it",25],["lospiffero.com",26],["paginegialle.it",27],["radioluna.it",28],["technofashion.it",29],["tgcom24.mediaset.it",30],["tuttoandroid.net",31]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
