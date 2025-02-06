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

// ruleset: jpn-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"body > #container\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#mw-content-text div[style] a:is([href*=\\\"contents.fc2.com\\\"], [href*=\\\"dmm.co.jp\\\"]) img\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\"#mw-content-text div[style] a:is([href*=\\\"contents.fc2.com\\\"], [href*=\\\"dmm.co.jp\\\"])\",\"action\":[\"style\",\"font-size: 0 !important;\"]}"],["{\"selector\":\"body.tp-modal-open\",\"action\":[\"style\",\"overflow: visible !important; height: auto !important; touch-action: auto !important;\"]}","{\"selector\":\"html.tp-scroll-prevented\",\"action\":[\"style\",\"overflow: visible !important; height: auto !important; touch-action: auto !important;\"]}"],["{\"selector\":\".ad.ads.adsbygoogle.ad1.ad-space.adbox.imggif.ad-banner.amp_ad.file-display-area\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".image-area\",\"action\":[\"style\",\"opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;\"]}","{\"selector\":\".js-article-wrap .article-body\",\"action\":[\"style\",\"opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;\"]}"],["{\"selector\":\"div[id^=\\\"div-gpt-\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}"],["{\"selector\":\"#check-ad\",\"action\":[\"style\",\"height: 10px !important; position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".adsense-container\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".entry-content\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"div[class*=\\\"ad_\\\"]\",\"action\":[\"style\",\"height: 1px !important; min-height: 1px !important; visibility: hidden !important;\"]}","{\"selector\":\"div[id^=\\\"sub_ad\\\"]\",\"action\":[\"style\",\"height: 1px !important; min-height: 1px !important; visibility: hidden !important;\"]}"],["{\"selector\":\"body > div[style=\\\"visibility: hidden;\\\"]\",\"action\":[\"style\",\"visibility: visible !important;\"]}"],["{\"selector\":\"#ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"#adsidetop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adstop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-10\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-11\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important;left: -4000px !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\"body[style=\\\"display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#amajmpid [style*=\\\"font-size\\\"]\",\"action\":[\"style\",\"font-size: 0 !important;\"]}","{\"selector\":\"#amajmpid\",\"action\":[\"style\",\"pointer-events: none !important;\"]}","{\"selector\":\"td[width=\\\"160\\\"] [style*=\\\"position\\\"] [id][style] ~ [onclick]\",\"action\":[\"style\",\"pointer-events: none !important;\"]}"],["{\"selector\":\".ad_unit.ad-unit.text-ad.text_ad.pub_300x250\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".ads\",\"action\":[\"style\",\"display: block!important;height: 1px!important;\"]}","{\"selector\":\".listInfoR[style=\\\"margin-bottom: 10px; height: 400px;\\\"]\",\"action\":[\"style\",\"height: unset !important;\"]}"],["{\"selector\":\"#adcheck.ads-ad\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#playertopads\",\"action\":[\"style\",\"height: 51px!important; position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".footer-with-ad\",\"action\":[\"style\",\"padding-bottom: 10px !important;\"]}"],["{\"selector\":\"#globalHeader\",\"action\":[\"style\",\"min-height: 0 !important; margin: 0 !important;\"]}"],["{\"selector\":\".movie-watch\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sponsored-loop300x250\",\"action\":[\"style\",\"position: absolute !important; left: -4000px !important;\"]}"],["{\"selector\":\".p-header-billboard\",\"action\":[\"style\",\"min-height: 0 !important;\"]}","{\"selector\":\".u-mb64 .p-new__row\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"#sidebar-small[style^=\\\"height:\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#custom_html-48\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".plugin-freearea td[bgcolor] > div[style]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".ad970x250\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important; margin-bottom: 45px !important;\"]}"],["{\"selector\":\".lsidebar[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#srdk-index-native-pc ~ li.rank-7\",\"action\":[\"style\",\"margin-left: 20px !important;\"]}","{\"selector\":\"#srdk-index-native-pc ~ li.rank-8\",\"action\":[\"style\",\"margin-left: 0 !important;\"]}"],["{\"selector\":\".aa_footer\",\"action\":[\"style\",\"padding-bottom: unset !important;\"]}"],["{\"selector\":\".main_ad_head_wide\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"] .main-header\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"][data-section-type=\\\"new-video\\\"] .content-wrap:nth-child(-1n+2)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".c-ad-103\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".App__contentsMap[style=\\\"height: calc(100% - 50px);\\\"]\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"height:\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".media_article .articlegroups .d-block:not(:first-of-type)\",\"action\":[\"style\",\"border-top: none !important; padding-top: 0 !important;\"]}"],["{\"selector\":\"#cgrig_base_pic\",\"action\":[\"style\",\"grid-auto-rows: auto !important;\"]}","{\"selector\":\"#cgrig_cont\",\"action\":[\"style\",\"grid-row-start: auto !important; grid-row-end: auto !important;\"]}","{\"selector\":\"#cgrig_left\",\"action\":[\"style\",\"grid-row-start: 3 !important; grid-row-end: 7 !important;\"]}"],["{\"selector\":\".block-sub-ad + .block-sub\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".block-sub-recommend[style=\\\"margin-top:30px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".relatedLinksPhoto > ul#orecView2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".nav-menu-width.margin.no-side-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".side-ad-area.half-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"div[style=\\\"margin: auto; width: 930px; height: 265px; text-align: center;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".gPr.u-mtbM\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".gPr_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".p-dol .gNews_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".detail_sideColumnItem__5kZXh\",\"action\":[\"style\",\"min-height: 0 !important;\"]}","{\"selector\":\"div[class^=\\\"detail_photo_\\\"]\",\"action\":[\"style\",\"height: 100% !important; max-height: calc(100vh - 70px - 20px) !important;\"]}","{\"selector\":\"img[class^=\\\"detail_mainImage\\\"]\",\"action\":[\"style\",\"max-height: calc(100vh - 70px - 20px) !important;\"]}"],["{\"selector\":\".csh_main\",\"action\":[\"style\",\"padding-top: 30px !important;\"]}"],["{\"selector\":\".top_banner_area\",\"action\":[\"style\",\"height: 44px !important\"]}"],["{\"selector\":\".viewer, .viewer .imgWrap, .viewer .lastPage.slick-slide, .viewer .slick-list, .viewer .slick-track, .viewerBody\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"#sub-col-wrap_top280\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#hidari\",\"action\":[\"style\",\"top: unset !important;\"]}"],["{\"selector\":\"#asideRight .box.bottom\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".c167:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c213:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c422:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#index_nav > h1\",\"action\":[\"style\",\"padding-top: 30px!important;\"]}","{\"selector\":\"body:not(.tp) > div#container > #main.template1\",\"action\":[\"style\",\"padding-top: 20px !important;\"]}"],["{\"selector\":\"div[class=\\\"block recommend\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#subProgram\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body[style*=\\\"position\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".side_box\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#subAInner[style]\",\"action\":[\"style\",\"position: static !important;margin-top: auto !important;\"]}","{\"selector\":\"._2pnTOjTu\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\"#entry[class^=\\\"e\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"#new\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\"#side[class^=\\\"s\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"div#wrapper.on\",\"action\":[\"style\",\"padding-top: 450px !important;\"]}","{\"selector\":\"div.on h1\",\"action\":[\"style\",\"top: 386px !important;\"]}","{\"selector\":\"div.on nav#path\",\"action\":[\"style\",\"top: 330px !important;\"]}"],["{\"selector\":\"#right\",\"action\":[\"style\",\"padding-top: 25px !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}","{\"selector\":\"#side[class^=\\\"ad\\\"]\",\"action\":[\"style\",\"border-top: 0 !important;\"]}","{\"selector\":\".adh\",\"action\":[\"style\",\"border-top: 0 !important;\"]}"],["{\"selector\":\".gadget_topics > div.cont.last-child\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".sub > div.section > span.heading\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".center_column\",\"action\":[\"style\",\"min-height: 1500px!important;\"]}"],["{\"selector\":\"#signin-with-twitter\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".right-container[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".medipartner\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\".slidead_smartphone_top + script + script + h2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body:not(.custom_1):not(.custom_2):not(.template_news):not([id])\",\"action\":[\"style\",\"margin-top: 0 !important; background-position-y: 0% !important;\"]}"],["{\"selector\":\"#left\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#body-in > div[class^=\\\"d-contents\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#tx7player[style*=\\\"opacity: 0.\\\"]\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".l-generalContent-secondary[style=\\\"position: unset;\\\"]\",\"action\":[\"style\",\"position: sticky !important;\"]}","{\"selector\":\"main > div.l-generalContent-secondary\",\"action\":[\"style\",\"position: sticky !important;\"]}"],["{\"selector\":\"footer\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".isJack\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\"#wholeHeaderPane\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#lower section.character ul.character_list li.standby\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".hustle-no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".fortune-submit\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body[style=\\\"padding: 0px 0px 154px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\"div[class^=\\\"LayoutContentInner-sc\\\"] > div[class^=\\\"Promotion-sc\\\"]\",\"action\":[\"style\",\"grid-template-columns: 1fr 0 !important;\"]}"],["{\"selector\":\"#top #head\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".ad_common_1_970x250\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"#js-forms\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\".bbsmenu-with-ad\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"div[id$=\\\"AdsMain\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"div[itemprop=\\\"itemListElement\\\"][style=\\\"margin-top: 100px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#breadcrumb\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#ydn-bot\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"display: block !important; width: 100% !important; height: 100% !important;\"]}"],["{\"selector\":\".l-contentsSub[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".inv_scroll_cancel\",\"action\":[\"style\",\"overflow: auto !important; height: auto !important;\"]}","{\"selector\":\"div[style^=\\\"max-width: 1000px; width: 100%; height: 150px; margin: 0 auto 50px auto;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"div[style=\\\"width:730px;font-size:11pt;\\\"] > table[width=\\\"730\\\"]\",\"action\":[\"style\",\"width: 380px !important;\"]}"],["{\"selector\":\"body[style^=\\\"overflow:\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".ly_content_wrapper\",\"action\":[\"style\",\"margin-bottom: 0!important;\"]}"],["{\"selector\":\".pum-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#result_nav\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".s-ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#bottom_area\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#cb-container\",\"action\":[\"style\",\"padding-top: 110px !important;\"]}","{\"selector\":\".ovni-header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"padding-bottom: 354px !important;\"]}"],["{\"selector\":\"#footer\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"#main[style=\\\"padding-bottom:300px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 170px !important;\"]}"],["{\"selector\":\".ads970\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".adsepa\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".reply_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}","{\"selector\":\".thread_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}"],["{\"selector\":\"#wrap01\",\"action\":[\"style\",\"height: 2205px !important;\"]}","{\"selector\":\".tabpain[style=\\\"left: -260px; top: 280px;\\\"]\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".tabpain[style=\\\"top: 550px; left: 0px;\\\"]\",\"action\":[\"style\",\"top: -1120px !important;\"]}"],["{\"selector\":\".following_buttons_upper\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".ads_native\",\"action\":[\"style\",\"visibility: hidden !important;margin: 0 !important;\"]}"],["{\"selector\":\"#stage\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"body.app-scroll-lock\",\"action\":[\"style\",\"position: relative!important;overflow-y: unset !important;\"]}"],["{\"selector\":\".header\",\"action\":[\"style\",\"height: 50px !important;\"]}"],["{\"selector\":\"#wrap_contents_box\",\"action\":[\"style\",\"min-height: 676px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"._fukugan_grid\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\"#main-container\",\"action\":[\"style\",\"padding: 0px 60px 80px !important;\"]}"],["{\"selector\":\".l-sidebar-b[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#side-r\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#adnone\",\"action\":[\"style\",\"height: 724px !important;\"]}"],["{\"selector\":\"#writerprofile + aside.adsense\",\"action\":[\"style\",\"height: 90px !important; width: 0 !important;\"]}"],["{\"selector\":\".clearfix.contents\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".blockContainer[style$=\\\"-60px auto;\\\"] > div[style=\\\"min-height: 90px;\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}","{\"selector\":\".sideContents.ie-sticky[style$=\\\"min-height: 1500px;\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".latestnewstable2014[height^=\\\"1\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".side[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height:60px !important;\"]}"],["{\"selector\":\".adBillBoardPC\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".adBillboard_pc\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important; margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow-y: hidden;\\\"]\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\"body.header_bg_ad.modal-open\",\"action\":[\"style\",\"padding-right: 0 !important; overflow: auto!important;\"]}"],["{\"selector\":\"#header_rtranking\",\"action\":[\"style\",\"top: 120px !important;\"]}","{\"selector\":\"div[id^=\\\"container_in\\\"]\",\"action\":[\"style\",\"margin-top: 240px !important;\"]}"],["{\"selector\":\".vjs-controls-disabled.vjs-error .vjs-control-bar\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".app-container[aria-expanded=\\\"false\\\"] section.with-ad\",\"action\":[\"style\",\"width: calc(100% - 20px) !important;\"]}"],["{\"selector\":\"body.withsky div#shellcontent[style]\",\"action\":[\"style\",\"right: 0 !important;\"]}"],["{\"selector\":\".articleList-attention[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"body[style=\\\"position: fixed;\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#common-header > div[class^=\\\"common-header-pc-\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"width:auto !important; padding-left:15px !important;\"]}","{\"selector\":\".tngMainT\",\"action\":[\"style\",\"width:100% !important;\"]}"],["{\"selector\":\"#center-left\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#sidebar\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".right-container\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#plugin2[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#scroll.fixed\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#sub\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#left[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".fix_box-m\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".BottomContainer.InView\",\"action\":[\"style\",\"min-height:auto !important;\"]}"],["{\"selector\":\".jackFix + div.siteContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".siteRanking-main\",\"action\":[\"style\",\"margin-left: 0!important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed.is-pc-bottom\",\"action\":[\"style\",\"bottom: 0 !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 641px)\"]]}"],["{\"selector\":\"#video-container[style*=\\\"display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".pc_block[style^=\\\"position: sticky\\\"]\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow: hidden;\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#entry-text\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"nav:not(.fixed):not([id])\",\"action\":[\"style\",\"top: 132px !important;\"]}"],["{\"selector\":\"#yjnFooter.kBXsbI\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#sidebar\",\"action\":[\"style\",\"min-height: unset !important;\"]}"],["{\"selector\":\".min-h-\\\\[250px\\\\]\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".mno-pitari\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#is_header_banner\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#footer[style=\\\"margin-bottom: 100px;\\\"]\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"main #bnr_about\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"main #bnr_books\",\"action\":[\"style\",\"top: 636px !important;\"]}","{\"selector\":\"main #box_ranking\",\"action\":[\"style\",\"top: 156px !important;\"]}"],["{\"selector\":\"#main-footer[style=\\\"padding-bottom:100px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\"#_popIn_recommend_right\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".bdotted[style=\\\"text-align:center; margin-top:10px;\\\"]\",\"action\":[\"style\",\"height: 0 !important;border: none !important;\"]}"],["{\"selector\":\".google\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#CommonSideColumn_play-report___f_o9.CommonSideColumn_item__OI_xC:not(:first-child)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#moduleFixedBnr[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".MuiGrid-container.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}","{\"selector\":\".MuiGrid-item.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}"],["{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"] > div[data-ranking=\\\"weekly\\\"]\",\"action\":[\"style\",\"color: #1b9b6f !important; fill: #1b9b6f !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"] > div[data-ranking=\\\"weekly\\\"]::after\",\"action\":[\"style\",\"transform: none !important;\"]}"]];

const hostnamesMap = new Map([["mytry.jp",0],["wiki.yjsnpi.nu",1],["guitarmagazine.jp",2],["snrec.jp",2],["b.best-hit.tv",3],["jprime.jp",4],["shindanmaker.com",5],["tters.jp",6],["egotter.com",7],["logworker.net",8],["musmus.main.jp",9],["kledgeb.blogspot.com",10],["animenew.be",11],["kansai-sanpo.com",12],["friday.kodansha.co.jp",[12,42]],["intaa.net",13],["battlecats-db.com",14],["sekai-kabuka.com",15],["ouminews.net",16],["knshow.com",17],["applion.jp",18],["380cc.cc",19],["itest.bbspink.com",20],["nlab.itmedia.co.jp",21],["eromovie-s.com",22],["2game.info",23],["telling.asahi.com",24],["erologz.com",25],["ge-soku.com",26],["hitoikigame.com",27],["afsgames.com",28],["minkch.com",29],["soredoko.jp",30],["allabout.co.jp",31],["vip-front.video.g.fc2.com",[32,124]],["video.fc2.com",[32,33,124]],["map.yahoo.co.jp",34],["umaroidblog.com",35],["maonline.jp",36],["peko-step.com",37],["oricon.co.jp",38],["mapfan.com",39],["shirotomaster.com",40],["dengekionline.com",41],["ekr.chosunonline.com",43],["life.chosunonline.com",43],["www.chosunonline.com",44],["mangalove.me",45],["gameranbu.jp",46],["kakijun.jp",47],["gdm.or.jp",48],["barks.jp",49],["hostlove.com",50],["bunshun.jp",51],["anime.eiga.com",52],["dailynewsonline.jp",53],["azby.fmworld.net",54],["ameblo.jp",55],["ff8clear.net",[56,57]],["ff10-hd.com",56],["sheepplus.com",[56,59]],["winningpost8.com",[56,57]],["dqclear.com",58],["e-nenpi.com",60],["wazap.com",61],["estate.nikkan.co.jp",62],["twpf.jp",63],["h-pon.doorblog.jp",64],["hiraganakeyaki.blog.jp",64],["4gamer.net",65],["matometanews.com",66],["jumpmatome2ch.biz",67],["video.tv-tokyo.co.jp",68],["gizmodo.jp",69],["colordic.org",70],["games.yahoo.co.jp",71],["lesson.golfdigest.co.jp",72],["score.golfdigest.co.jp",72],["dq-dai.com",73],["eguchi-hd.co.jp",74],["uranaitv.jp",75],["t-mall.kantangame.com",76],["auctions.yahoo.co.jp",77],["avfuuzoku.com",78],["news.jorudan.co.jp",79],["itest.5ch.net",80],["k-knuckles.jp",81],["weather.yahoo.co.jp",82],["supercweather.com",83],["applica.info",84],["twivideo.net",85],["kabegamikan.com",86],["news-postseven.com",87],["minkabu.jp",88],["naitter.hippy.jp",89],["pictab.art",89],["my-nikki.net",89],["ero-gazou.jp",89],["mapion.co.jp",90],["teny.co.jp",91],["roote.ekispert.net",92],["ovninavi.com",93],["medibang.com",94],["piapro.jp",95],["minpo.jp",96],["young-machine.com",97],["bbs4.mozakin.com",98],["mozakin.com",99],["okwave.jp",100],["hrs-game.main.jp",101],["main-hrs-game.ssl-lolipop.jp",101],["firecross.jp",102],["novel.prcm.jp",103],["security-next.com",104],["gigafile.nu",105],["freesoft-100.com",106],["automaton-media.com",106],["sunri2525.blog.jp",107],["blog.fc2.com",108],["duellinks.doorblog.jp",109],["news.2chblog.jp",110],["shikaku2ch.doorblog.jp",111],["otajo.jp",112],["togetter.com",113],["gendai.media",114],["cosp.jp",115],["otonanswer.jp",116],["weather.biglobe.ne.jp",117],["figgy.jp",118],["gamer.ne.jp",119],["onlinegamer.jp",119],["uraaka.com",120],["yamareco.com",121],["pokemon-matome.net",122],["asahi.com",123],["ideo.laxd.com",124],["mail.yahoo.co.jp",125],["news.mynavi.jp",126],["sp.jp.wazap.com",127],["tv-asahi.co.jp",128],["uwl.weblio.jp",129],["buhidoh.net",130],["gadget2ch.com",131],["saikyo-jump.com",132],["kosoch.com",133],["anige-sokuhouvip.com",134],["itaishinja.com",135],["digital-thread.com",135],["kyousoku.net",135],["oryouri.2chblog.jp",135],["gahalog.2chblog.jp",136],["itainews.com",137],["takenokosokuhou.com",138],["nicovideo.jp",139],["otakomu.jp",[140,141]],["blog.esuteru.com",[140,141]],["jikayosha.jp",142],["pixnest.pipio.site",143],["kakaku.com",144],["appget.com",145],["peing.net",146],["gigazine.net",147],["wealthadvisor.co.jp",148],["news.yahoo.co.jp",149],["idle-girl.com",150],["eromanga-show.com",151],["hentai-one.com",151],["corp.rakuten.co.jp",152],["musicman.co.jp",153],["weathernews.jp",154],["j-defense.ikaros.jp",155],["jisin.jp",156],["news.audee.jp",157],["kyosui.net",158],["amigo.tennis365.net",159],["app.famitsu.com",160],["bbs.kakaku.com",161],["news.so-net.ne.jp",162],["lifehacker.jp",163]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
