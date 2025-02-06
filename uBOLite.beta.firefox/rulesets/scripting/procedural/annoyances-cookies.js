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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".DVWebNode-conditional-site-wide-wrapper\",\"tasks\":[[\"has\",{\"selector\":\"[data-testid=\\\"consent-reject-all-endpoint\\\"]\"}]]}"],["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has-text\",\"Welcome,\"]]}"],["{\"selector\":\".MuiStack-root\",\"tasks\":[[\"has-text\",\"Personalised ads\"]]}"],["{\"selector\":\".Wrapper--1lbmq00\",\"tasks\":[[\"has-text\",\"This website uses cookies\"]]}"],["{\"selector\":\".bom-form-alert--info.bom-form-alert\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\".cdk-overlay-pane\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\".css-175oi2r.r-12vffkv[style^=\\\"position: absolute; bottom: 0px; width: 100%;\\\"]\",\"tasks\":[[\"has-text\",\"data protection\"]]}"],["{\"selector\":\".dialog-lightbox-message\",\"tasks\":[[\"has-text\",\"/Cookies/i\"]]}"],["{\"selector\":\".fixed\",\"tasks\":[[\"has\",{\"selector\":\".cookies-scrollbar\"}]]}"],["{\"selector\":\".fixed\",\"tasks\":[[\"has-text\",\"cookies\"]]}"],["{\"selector\":\".footer\",\"tasks\":[[\"has-text\",\"By using our platform\"]]}"],["{\"selector\":\".gb_g\",\"tasks\":[[\"has-text\",\"cookie\"]]}"],["{\"selector\":\".hLgTAv\",\"tasks\":[[\"has-text\",\"Terms of Sale\"]]}"],["{\"selector\":\".md\\\\:right-\\\\[40px\\\\]\",\"tasks\":[[\"has-text\",\"By continuing to use our site\"]]}"],["{\"selector\":\".t8b87\",\"tasks\":[[\"has-text\",\"Privacy Policy Notice\"]]}"],["{\"selector\":\".toast\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\".top-0.z-9999.fixed.bg-opacity-30\",\"tasks\":[[\"has-text\",\"Website Cookies\"]]}"],["{\"selector\":\".undefined\",\"tasks\":[[\"has\",{\"selector\":\"[data-test-selector=\\\"click-the-cookie-banner\\\"]\"}]]}"],["{\"selector\":\".warning\",\"tasks\":[[\"has\",{\"selector\":\"[data-cookie-type]\"}]]}"],["{\"selector\":\".z-50\",\"tasks\":[[\"has-text\",\"This site uses cookies\"]]}"],["{\"selector\":\"[open]\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"/cookies\\\"]\"}]]}"],["{\"selector\":\"body > div > div\",\"tasks\":[[\"has\",{\"selector\":\"#jentis_consent\"}]]}"],["{\"selector\":\"div[class^=\\\"elements__Banner-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[href$=\\\"-privacy-policy\\\"]\"}]]}"],["{\"selector\":\"body > div:not([class]):not([id]) > div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div[class] > a[href^=\\\"https://policy.medium.com/medium-privacy-policy-\\\"]\"}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"div[role=\\\"alert\\\"] > a[href^=\\\"https://policy.medium.com/medium-privacy-policy-\\\"]\"}]]}"],["{\"selector\":\".container\",\"action\":[\"style\",\"display: block !important\"],\"tasks\":[[\"has\",{\"selector\":\".consent-blocking-embed-message\"}],[\"spath\",\" ~ #onetrust-consent-sdk\"]]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display: flex !important\"],\"tasks\":[[\"has\",{\"selector\":\"div[class*=\\\"Styled\\\"][class*=\\\"Container\\\"] [data-testid=\\\"bbc-logo-wrapper\\\"]\"}],[\"spath\",\" > .fc-consent-root\"]]}"],["{\"selector\":\"section[id][class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > button[class][onclick^=\\\"onClickCookiesBannerWeb\\\"]\"}]]}"],["{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Accept\"],[\"upward\",\"section\"]]}"],["{\"selector\":\".cc-banner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#moduleCookies\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#CookieWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#ask-consent\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"data-eu-cookie-compliance-once\"]}"],["{\"selector\":\".modal\",\"tasks\":[[\"has\",{\"selector\":\"#eprivacy\"}]]}"],["{\"selector\":\"div[id$=\\\"_modal_outer_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .cookie-modal\"}]]}"],["{\"selector\":\".fancybox-container\",\"tasks\":[[\"has\",{\"selector\":\"a[onclick=\\\"document.getElementById('privacy_more').style.display='block';\\\"]\"}]]}"],["{\"selector\":\"[data-p*=\\\"/consent.google.\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"button[jsname=\\\"tWT92d\\\"]\"}]]}"],["{\"selector\":\"[data-p*=\\\"/consent.youtube.com\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"button[jsname=\\\"tWT92d\\\"]\"}]]}","{\"selector\":\"body.bodyUIModernization\",\"tasks\":[[\"has\",{\"selector\":\"[action=\\\"https://consent.youtube.com/save\\\"] .saveButtonUIModernization[value][aria-label]\"}]]}"],["{\"selector\":\"body > div[style*=\\\"z-index: 2147483647\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"https://nytimes.com/cookie-policy/\\\"]\"}]]}"],["{\"selector\":\"html[style=\\\"overflow: hidden;\\\"]\",\"action\":[\"style\",\"overflow: auto !important\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"#cmp_consent_wall\"}]]}]]}"],["{\"selector\":\".banner\",\"tasks\":[[\"has\",{\"selector\":\"[href=\\\"javascript:acceptAllCookies();void(0);\\\"]\"}]]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"],\"tasks\":[[\"has\",{\"selector\":\"#cmp_consent_wall\"}]]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"],\"tasks\":[[\"has\",{\"selector\":\"#mms-consent-portal-container\"}]]}"],["{\"selector\":\"div[role=\\\"dialog\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"],\"tasks\":[[\"has\",{\"selector\":\"button[data-tracking-name=\\\"cookie-preferences-mloi-initial-opt-out\\\"]\"}]]}"],["{\"selector\":\".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack:not([title=\\\"Sanoman sisällönjakelukumppanit\\\"]) button.pm-switch.checked\",\"action\":[\"remove-class\",\"checked\"]}"],["{\"selector\":\"#overlay > div > #banner\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"privacyprefs/\\\"]\"}]]}"],["{\"selector\":\"#kick__pur__layer\",\"action\":[\"style\",\"visibility: hidden !important;\"],\"tasks\":[[\"has\",{\"selector\":\"a[href][onclick=\\\"ov.cmp.acceptAllConsents()\\\"]\"}]]}"],["{\"selector\":\".videop em:not([data-video-src])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"],\"tasks\":[[\"has\",{\"selector\":\".cmpboxinner\"}]]}"]];

const hostnamesMap = new Map([["primevideo.com",0],["news.abs-cbn.com",1],["memefi.club",2],["honeygain.com",3],["beta.bom.gov.au",4],["betsson.com",5],["x.com",6],["cun.edu.co",7],["join.chat",7],["milkinkstudio.com",7],["worklouder.cc",7],["sonarhome.pl",8],["blog.smithsecurity.biz",9],["sniffies.com",10],["play.google.com",11],["twitch.tv",12],["alohaprofile.com",13],["clickscope.org",14],["privatekeys.pw",15],["coopmobile.ch",16],["studocu.com",17],["istockphoto.com",18],["app.filen.io",19],["unsplash.com",20],["moebelix.at",21],["yogainternational.com",22],["blog.discord.com",23],["codeburst.io",23],["eand.co",23],["infosecwriteups.com",23],["medium.com",23],["medium.engineering",23],["netflixtechblog.com",23],["plainenglish.io",23],["primegaming.blog",23],["towardsdatascience.com",23],["uxdesign.cc",23],["windscribe.com",23],["mtvuutiset.fi",24],["bbc.com",25],["minhaconexao.com.br",26],["xe.com",27],["nature.com",28],["link.springer.com",28],["topographic-map.com",29],["schwarzenbacher-kundl.at",30],["e-comas.com",31],["omnipedia.app",32],["kiertokanki.com",33],["flip.bg",34],["50plusmatch.fi",35],["consent.youtube.com",37],["archive.nytimes.com",38],["m2o.it",39],["deejay.it",39],["capital.it",39],["ilmattino.it",[39,40]],["leggo.it",[39,40]],["libero.it",39],["tiscali.it",39],["mediaworld.it",41],["uber.com",42],["ubereats.com",42],["cdn.privacy-mgmt.com",43],["kicker.de",45],["winfuture.de",46],["gutefrage.net",47],["insideparadeplatz.ch",47]]);

const entitiesMap = new Map([["consent.google",36],["mediamarkt",41],["music.amazon",44]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
