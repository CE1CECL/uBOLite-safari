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

// ruleset: spa-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#sidebar > div > section\",\"tasks\":[[\"has\",{\"selector\":\".fixed_adslot\"}]]}"],["{\"selector\":\".Page-above.loaded\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"GoogleDfpAd\\\"]\"}]]}","{\"selector\":\".PromoBasic\",\"tasks\":[[\"has\",{\"selector\":\".Promo-sponsor\"}]]}"],["{\"selector\":\".cnvs-block-section\",\"tasks\":[[\"has\",{\"selector\":\"#contenido-patrocinado\"}]]}"],["{\"selector\":\".column > div[class] > div[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"sc-\\\"] > div[id^=\\\"div-gpt-ad\\\"]\"}]]}","{\"selector\":\"div[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".grid-pod\",\"tasks\":[[\"has\",{\"selector\":\".patrocinado-title\"}]]}"],["{\"selector\":\".l-resultsList__item\",\"tasks\":[[\"has\",{\"selector\":\".kl-blade--sponsored\"}]]}","{\"selector\":\".product-thumbnail\",\"tasks\":[[\"has\",{\"selector\":\".o-thumbnail__sponsored\"}]]}"],["{\"selector\":\".main-article-container-patr\",\"tasks\":[[\"has\",{\"selector\":\".contenido-comercial\"}]]}","{\"selector\":\".main-article-container-patr\",\"tasks\":[[\"has\",{\"selector\":\".mas-contenido\",\"tasks\":[[\"has-text\",\"Más Contenido\"]]}]]}"],["{\"selector\":\".ue-l-article__secondary-column-item.ue-l-article--grow\",\"tasks\":[[\"has\",{\"selector\":\".ue-c-ad\"}]]}"],["{\"selector\":\".ui-recommendations-carousel-wrapper-ref\",\"tasks\":[[\"has\",{\"selector\":\"a[rel=\\\"nofollow, sponsored\\\"]\"}]]}","{\"selector\":\"li.ui-search-layout__item\",\"tasks\":[[\"has\",{\"selector\":\"div.ui-search-item__pub-container\"}]]}"],["{\"selector\":\"div[class^=\\\"embed-card_card_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"http://disneyplus.bn5x.net/\\\"]\"}]]}"],["{\"selector\":\"td[class*=\\\"id_publi_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.amazon.es/\\\"]\"}]]}"],["{\"selector\":\"td[class*=\\\"id_publi_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"publicidad\\\"]\"}]]}"],["{\"selector\":\".s.s--v\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"OFRECIDO POR\"]]}]]}"],["{\"selector\":\".wide-content\",\"tasks\":[[\"has\",{\"selector\":\"h1\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\"#lateral\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Auspiciado por:\"]]}]]}"],["{\"selector\":\".Block\",\"tasks\":[[\"has\",{\"selector\":\".Title_section\",\"tasks\":[[\"has-text\",\"Contenido patrocinado\"]]}]]}","{\"selector\":\".Card\",\"tasks\":[[\"has\",{\"selector\":\".Card-Section.Section\",\"tasks\":[[\"has-text\",\"Contenido patrocinado\"]]}]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PUBLICIDAD\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}"],["{\"selector\":\".display-ads\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Anuncio\"]]}]]}"],["{\"selector\":\".clearfix.list-cards.mb1.section-ciudadanos\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"Espacio de marca\"]]}]]}"],["{\"selector\":\"[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[data-test=\\\"mms-plp-presented\\\"]\"}]]}"],["{\"selector\":\".ui-search-layout__item\",\"tasks\":[[\"has\",{\"selector\":\".poly-component__ads-promotions\"}]]}"],["{\"selector\":\".et_pb_column\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".widget-content\",\"tasks\":[[\"has\",{\"selector\":\"a[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".dropdown\",\"tasks\":[[\"has\",{\"selector\":\"label\",\"tasks\":[[\"has-text\",\"VPN\"]]}]]}"],["{\"selector\":\".balcon.borderBottomDesktop\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"patrocinado\"]]}]]}"],["{\"selector\":\"section > h3\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}"],["{\"selector\":\".section\",\"tasks\":[[\"has\",{\"selector\":\".section-subtitle\",\"tasks\":[[\"has-text\",\"Contenido en colaboración\"]]}]]}"],["{\"selector\":\".tno-article-block\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Branded content\"]]}]]}"],["{\"selector\":\"[data-testid=\\\"item-stack\\\"] > div\",\"tasks\":[[\"has-text\",\"Patrocinado\"]]}"],["{\"selector\":\".quicklink_w100\",\"tasks\":[[\"has\",{\"selector\":\".publi-tag\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".ui-recommendations-carousel-wrapper-ref\",\"tasks\":[[\"has-text\",\"Promocionado\"]]}"],["{\"selector\":\".c.d1\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Más cosas interesantes\"]]}]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"WEBCAM PORNO XXX\"]]}]]}"]];

const hostnamesMap = new Map([["forocoches.com",0],["elpais.com.uy",1],["chocale.cl",2],["clarin.com",3],["falabella.com",4],["leroymerlin.es",5],["eltiempo.com",6],["expansion.com",7],["mercadolibre.cl",[8,21]],["mercadolibre.co.cr",[8,21]],["mercadolibre.com.ar",[8,21]],["mercadolibre.com.bo",[8,21]],["mercadolibre.com.co",[8,21]],["mercadolibre.com.do",[8,21]],["mercadolibre.com.ec",[8,21]],["mercadolibre.com.gt",[8,21]],["mercadolibre.com.hn",[8,21]],["mercadolibre.com.mx",[8,21]],["mercadolibre.com.ni",[8,21]],["mercadolibre.com.pa",[8,21]],["mercadolibre.com.pe",[8,21]],["mercadolibre.com.py",[8,21]],["mercadolibre.com.sv",[8,21]],["mercadolibre.com.uy",[8,21]],["mercadolibre.com.ve",[8,21]],["hobbyconsolas.com",9],["mil21.es",10],["cuencanews.es",11],["as.com",12],["diarios-argentinos.com",13],["elcomercio.pe",14],["elespectador.com",15],["elquindiano.com",16],["laboyanos.com",16],["hoy.com.do",17],["juegosdiarios.com",18],["lavoz.com.ar",19],["mediamarkt.es",20],["mundo724.com",22],["periodismokosher.com.ar",23],["photocall.tv",24],["prensa.com",25],["recetasfacilescocina.com",26],["semana.com",27],["theobjective.com",28],["walmart.com.mx",29],["yorokobu.es",30],["muyzorras.com",32],["videospornogratisx.net",33]]);

const entitiesMap = new Map([["mercadolibre",[21,31]]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
