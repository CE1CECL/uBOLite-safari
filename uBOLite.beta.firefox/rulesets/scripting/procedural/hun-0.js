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

// ruleset: hun-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".ez-egy-dc-doboz\",\"tasks\":[[\"has\",{\"selector\":\"> .double_click_doboz\"}]]}"],["{\"selector\":\"div[style*=\\\"text-align\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > img\"}]]}","{\"selector\":\"td.txtcenter\",\"tasks\":[[\"has\",{\"selector\":\"> script + ins\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"script + ins\"}]]}"],["{\"selector\":\".whiteBox\",\"tasks\":[[\"has\",{\"selector\":\".goAdverticum\"}]]}"],["{\"selector\":\"div#mymodal\",\"tasks\":[[\"has\",{\"selector\":\"#form-popup\"}]]}"],["{\"selector\":\".hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"> .lablec_alatt\"}]]}","{\"selector\":\".hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"> .weboldal_felett\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".otw-sidebar\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"https://bpiautosok.hu/tamogatonk-a-te-ceged-jelenj-meg-nalunk-a-youtube-on-es-a-bpiautosok-hu-n/\\\"]\"}]]}","{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"h3w\",\"tasks\":[[\"has-text\",\"Támogatóink\"]]}]]}","{\"selector\":\".widget.widget_text\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"[class*=\\\"item_container\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"_tag\\\"]\",\"tasks\":[[\"has-text\",\"hirdetés\"]]}]]}","{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://bpiautosok.hu/mediaajanlat\\\"]\"}],[\"spath\",\" + br\"]]}","{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://bpiautosok.hu/mediaajanlat\\\"]\"}]]}","{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> font\"}]]}"],["{\"selector\":\"div[class*=\\\"widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widgettitle\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}","{\"selector\":\"div[class*=\\\"widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widgettitle\",\"tasks\":[[\"has-text\",\"Állásajánlat\"]]}]]}"],["{\"selector\":\".sb-widget\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}"],["{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\"> #onet-ad-top\"}]]}","{\"selector\":\".wrapRectangle\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}","{\"selector\":\"div.wrapRectangle\",\"tasks\":[[\"has\",{\"selector\":\"#ad-cikk\"}]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"Quantcast Choice\"]]}"],["{\"selector\":\".cikk-torzs [data-miniapp-id]\",\"tasks\":[[\"has\",{\"selector\":\".femina-shop-ajanlo-slider-hirdetes\"}]]}","{\"selector\":\".cikk-torzs [data-miniapp-id]\",\"tasks\":[[\"has\",{\"selector\":\".lapozgato-ajanlo\"}]]}","{\"selector\":\".szelso-jobb > div\",\"tasks\":[[\"has\",{\"selector\":\"> a\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .ai-attributes + script + ins\"}]]}"],["{\"selector\":\"div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads\"}]]}"],["{\"selector\":\".frame\",\"tasks\":[[\"has\",{\"selector\":\"> span[style^=\\\"font-size: 11px;\\\"]\"}]]}"],["{\"selector\":\"div.right-rail\",\"tasks\":[[\"has\",{\"selector\":\"div.ad-wrapper\"}]]}","{\"selector\":\"figure\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"ignshop.hu\\\"]\"}]]}"],["{\"selector\":\".ik\",\"tasks\":[[\"has-text\",\"/^[Hh]irdetés$/\"]]}"],["{\"selector\":\"[style*=\\\"text-align: center;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .adverticum-label + a\"}]]}"],["{\"selector\":\"div[style*=\\\"margin-bottom:10px\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"HIRDETÉS\"]]}]]}"],["{\"selector\":\"div.ct-div-block\",\"tasks\":[[\"has\",{\"selector\":\"> div.ct-div-block > div.ct-text-block\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a + h6\"}]]}"],["{\"selector\":\"#league-selector + .row + .row\",\"tasks\":[[\"has\",{\"selector\":\".banner\"}]]}"],["{\"selector\":\".frip-inline\",\"tasks\":[[\"has\",{\"selector\":\"[data-module-name=\\\"inline-article\\\"]\"}]]}"],["{\"selector\":\"div.lol\",\"tasks\":[[\"has\",{\"selector\":\"> a[onclick=\\\"getValue()\\\"]\"}]]}","{\"selector\":\"div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > p > script\"}]]}"],["{\"selector\":\"div[class=\\\"container-full\\\"][style=\\\"background:#fff\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".topadv\"}]]}"],["{\"selector\":\".mc-modal\",\"tasks\":[[\"has\",{\"selector\":\"iframe\"}]]}","{\"selector\":\"[id^=\\\"um-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".fb-page.fb_iframe_widget\"}]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ai_run_\"]]}"],["{\"selector\":\".sub-text\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"> div + ins.adsbygoogle + script\"}]]}"],["{\"selector\":\".m-breakingLayer\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"nlc.hu/balkonfanatik\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> [style*=\\\"calc\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> h4 + div[style*=\\\"calc\\\"]\"}]]}"],["{\"selector\":\"div#center\",\"tasks\":[[\"has\",{\"selector\":\"div > div > p > a[style=\\\"color: #b42223;\\\"]\"}]]}"],["{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"/(Hirdetés|[Hh].*i.*r.*d.*e.*t.*é.*s)/\"],[\"spath\",\" + div[class]\"]]}]]}"],["{\"selector\":\"[id^=\\\"tie-block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".stream-title\"}]]}"],["{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\".mainTopBnr\"}]]}"],["{\"selector\":\"p + center\",\"tasks\":[[\"has\",{\"selector\":\"iframe[data-src*=\\\"facebook\\\"]\"}]]}"],["{\"selector\":\".hover_bkgr_fricc\",\"tasks\":[[\"has\",{\"selector\":\".facebookPopupCloseButton\"}]]}"],["{\"selector\":\"#sitemodal\",\"tasks\":[[\"has\",{\"selector\":\".fb-button\"}]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"hirdetes\\\"]\"}]]}","{\"selector\":\"div.item\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"hirdetes\\\"]\"}]]}"],["{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\".adslot_1\"}]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ShadowRoot\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"cli_cookiebar_\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"fbmodal-title\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"a2blckLayer\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.onload = window.onfocus\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"adblocker\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"testadblock\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"popUpBannerBox Ad300 hirdetes_box\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.atob\"]]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display: block !important;\"],\"tasks\":[[\"has\",{\"selector\":\"> .background.height\"}],[\"spath\",\" .notation\"]]}","{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 610px !important;\"],\"tasks\":[[\"has\",{\"selector\":\"> [class=\\\"background\\\"]\"}],[\"spath\",\" footer\"]]}"]];

const hostnamesMap = new Map([["agroinform.hu",0],["gyakorikerdesek.hu",1],["najlepsie-clanky.com",2],["ado.hu",3],["agrarszektor.hu",4],["bien.hu",5],["blikkruzs.blikk.hu",6],["bpiautosok.hu",7],["budapestkornyeke.hu",8],["cyberpress.hu",9],["egeszsegkalauz.hu",10],["femina.hu",11],["harmonikum.co",12],["hetek.hu",13],["hiros.hu",14],["hu.ign.com",15],["idokep.hu",16],["jofogas.hu",17],["kezilabda.hu",18],["kiszamolo.hu",19],["koroshircentrum.hu",20],["kosarsport.hu",21],["hunbasket.hu",21],["life.hu",22],["lifestory.hu",23],["mafab.hu",24],["magyarhang.org",25],["hang.hu",25],["mandiner.hu",26],["napjainkportal.hu",27],["nlc.hu",28],["prohardver.hu",[29,30,31,32]],["mobilarena.hu",[29,30,31]],["gamepod.hu",[29,30,31]],["itcafe.hu",[29,30,31]],["hardverapro.hu",[29,30,32]],["fototrend.hu",29],["logout.hu",[30,31]],["szeged365.hu",33],["ugytudjuk.hu",34],["autosjog.hu",35],["hirado.hu",36],["infostart.hu",37],["444.hu",38],["filmvilag.me",39],["gamer.hu",40],["portfolio.hu",41],["24.hu",42],["hazipatika.com",42],["divany.hu",43],["totalcar.hu",43],["totalbike.hu",43],["hungliaonline.com",44],["openspeedtest.com",45],["port.hu",46],["szeretlekmagyarorszag.hu",47],["menetrendek.hu",48]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
