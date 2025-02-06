/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: hrv-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".banner-right,\n.topBanner",".stickyfill",".banner-center,\n.mt10.twelvecol",".footer-reklame,\n.side-marketing",".iklon",".banner-top,\n.sticky-area",".enjoy-css",".border-b.block,\n.container > .p-4,\n.footer-top-bar",".articleViewBanners,\na[href*=\"-kisa-kesa\"][href*=\"eura\"],\na[href*=\"kazino\"]",".box-section",".idk_baner_top,\n.img_advertising",".add_wrapper_below_navbar,\nbody > div:first-of-type","body > div[class=\"container\"]",".ad-container,\n.google-billboard-top","#ads_rectangle,\n#rectangle_container,\n.native-ads",".widget_block",".root-ads-laptop",".reklama_flash,\n.reklama_flash_mini","#rotate-ads,\n.advertising,\n.container-banner,\n.sidebar > div:first-of-type,\n.wrapper > nav + div[class*=\" \"]",".aklaplace,\n.banner-sidebar",".BannerAlignment,\n.BannerBillboard",".widget_custom_html","#shoppster-widget,\n.uc-in-feed-banner","#adx-video-player,\n#dodatni-desk",".aside-box + .banner,\n.main > div.container,\n.text-center.container",".posttext-a,\nbody > div[class^=\"home-branding\"],\ndiv[id^=\"sidebar_\"]",".izdvojeni-index.ad:not(.nas),\n.rbb,\ndiv[class^=\"artikal \"]",".execphpwidget video",".ad-space-bottom",".grid-item-pad",".section-rek",".banner-side,\ndiv.mt-3[style^=\"min-height: 250px\"],\ndiv[style^=\"min-height: 250px; width: 100%\"],\ndiv[style^=\"min-height: 250px;\"]:first-of-type",".brandingBannerLeft,\n.brandingBannerRight",".Wallpaper-container",".adcontainer",".banner-bg,\n.banner-desktop,\n.bp,\na[href*=\"/wwin-\"]",".sd-banners-zone-a1,\ndiv[id^=\"block-ea-adocean-ea-adocean-\"]","#top-banner",".brandLeft,\n.brandRight","#tickerBanner,\n.addActive,\n.addBlock,\n.blockAdd,\n.more-news,\n.widget-slider-wrap","#Billboard_UnderArticle,\n.article__comments + .textwidget",".iAdserver","#sidebar > .widget_custom_html","div[id^=\"reklamaHor\"],\ndiv[id^=\"reklamaVer\"]",".elementor-widget-image",".popupBannerWrapper","#meta_box + #mobile + div[class^=\"css-\"],\n.Slot_content,\n.Slot_placeholder,\ndiv[data-upscore-zone^=\"product\"],\ndiv[style^=\"display:\"],\nmain > .cls_frame",".row .banner + .row,\n.text-center.col-md-3,\nhr:empty","div[class^=\"position_break_\"]","div[class^=\"position_item_\"]","#below_content_third_party,\n.article__listalica,\ndiv[data-upscore-zone=\"product-gallery\"]",".container--break,\n.container--linker-bottom,\n.item__ad-center",".banner-wrapper",".banner",".bnr-wrapper",".justify-content-center:first-of-type",".ads",".ban300x260,\nbody > a[class^=\"bg\"]",".d-bnr-block",".branding,\na[id*=\"FloatBaner\"]",".ad-kliktv,\n.zadruga-top",".BannerAd","div[class*=\"adocean\"],\ndiv[data-label=\"Reklama\"]",".banner-promotion","div[title^=\"TERRA reklama\" i],\ndiv[title^=\"reklama2.\"]",".offers-widget",".banners-wrapper",".sidebar",".leaderboardBanner",".widget_media_image",".uk-margin > .el-link,\n.uk-section-default .uk-text-center.uk-margin,\n.uk-slider-container.uk-text-center,\ndiv[class^=\"uk-width-1-\"] > hr:empty",".banner_main",".onogo-target",".baner__desktop",".elementor-image","aside > img",".gornje-reklame > .big,\n.reklame-dio .medium,\n.vijesti-dio > div[class*=\"banner-\"],\na[href$=\"://cedis.me/\"]",".article__section-wrapper--zebra",".col--item-side,\n.container--break[class*=\"break_\"],\n.feroterm.products,\n.lidl.products,\n.promo_heading_fix img,\ndiv[class^=\"position_j\"],\ndiv[id^=\"upscore-promo-\"]",".js-results-slot",".ponuda","#check-also-box,\n.bgr-box,\n.stream-item",".ad",".vc_raw_html","#mvp-leader-wrap",".promo-header,\n.top-promo-header",".section-sidebar-banners","body > .scale-wrapper","#comments ~ a,\n.ticker-news ~ a,\naside[id*=\"facebook\"] ~ .widget_media_image",".third-party-menu-container",".slot",".contenttop,\n.moduleleftads",".ai_widget",".home-contain",".extendedwopts-mobile,\ndiv[class$=\"-align-center\"]","div[id^=\"html5box-\"]",".adexElement:not(html, body, :empty),\n.pieces_widget",".admiral_widget,\n.js-topOffer,\n.single-article__row--top-offer",".code-block",".el-link > picture,\ndiv[uk-slider].uk-text-center",".a-wrap,\n.pvpor-widget","svg + div[class*=\"ekit\"] section.elementor-section:last-of-type",".elementor-widget-image > .elementor-widget-container",".category-promo,\ndiv[class^=\"advads-\"]",".banner-img",".banner-inner,\n.billboard-banner",".horizontal-banners",".banner-box,\n.right-side > div[style^=\"text-align\"] > a",".ms-image,\n.wp-block-image",".td-single-image-",".custom-html-widget","div[style^=\"text-align: center;\"]",".leaderboard",".triple_banner_container,\ndiv[id*=\"_in_article_\"]",".leader-wrap-out,\n.widget_block.side-widget",".td-ss-main-sidebar",".widget_text.jeg_pb_boxed_shadow",".bannergroup,\n.reklamebg",".billboard-wrapper",".featured-add",".djslider-loader,\n[class*=\"box  nomargin\"],\nsection[id$=\"Top\" i] > div[class=\"box \"]","div[data-href*=\"/icam.hr/\"],\ndiv[data-href*=\"blog.bon.hr/\"]",".widget-ad-image,\nsection[data-settings]:first-of-type",".fusion-imageframe > a[href][target=\"_blank\"] > img",".oglasi_sredina","#header-wrap-reklama,\n#sidebar > #HTML8,\n#sidebar-two > #HTML4,\n#sidebar-two > #HTML5","#billboard_ad_container,\n.noa-banner > a,\n.side_banner",".js-gpt-ad","div[id^=\"midasWidget\"]",".banner-placeholder-text","a[class^=\"baner_\"]",".td-is-sticky div[align=\"center\"] > a > img,\n.td-ss-main-sidebar div[align=\"center\"] > a > img","[id^=\"MyAdsId\"]"];

const hostnamesMap = new Map([["021.rs",0],["agrobiz.hr",1],["alo.rs",[2,53]],["avaz.ba",3],["bit.me",4],["blic.rs",[5,53]],["dan.co.me",6],["danas.rs",7],["depo.ba",8],["dnevnik.hr",9],["farmer.ba",10],["forum.benchmark.rs",11],["glassrpske.com",12],["index.hr",13],["klix.ba",14],["krajiski.ba",15],["glascg.me",[15,102]],["onlyclubbing.com",[15,104]],["zvornicki.ba",[15,69,98]],["mobilnisvet.com",16],["nap.ba",17],["navidiku.rs",18],["nekretnine.rs",19],["njuskalo.hr",20],["noob.ba",21],["infovranjske.rs",[21,94]],["nova.rs",[22,63]],["novi.ba",23],["novosti.rs",24],["objektiv.rs",25],["olx.ba",26],["pcpress.rs",27],["planplus.rs",28],["povezano.com",29],["pravda.rs",30],["radiosarajevo.ba",31],["rtcg.me",32],["rtl.hr",[33,53]],["saznajnovo.com",34],["sportsport.ba",35],["srbijadanas.com",36],["tvprogram.rs",37],["vijesti.me",[38,56]],["novilist.hr",39],["bosnainfo.ba",[40,53]],["raport.ba",42],["source.ba",43],["tuzlainfo.ba",44],["dalmatinskiportal.hr",45],["danas.hr",46],["glasistre.hr",47],["gloria.hr",[48,49]],["jutarnji.hr",[49,78]],["net.hr",50],["slobodnadalmacija.hr",51],["24sedam.rs",[52,53,54]],["informer.rs",53],["sd.rs",[53,62]],["hellomagazin.rs",53],["barinfo.me",[53,66,67]],["mojtv.hr",53],["novaekonomija.rs",53],["svet-scandal.rs",53],["tportal.hr",53],["bloombergadria.com",53],["republika.rs",[54,61]],["atvbl.rs",55],["espreso.co.rs",56],["naxi.rs",57],["nportal.rs",58],["paragraf.rs",59],["pink.rs",60],["sportklub.rs",[63,89]],["n1info.ba",[63,105]],["n1info.com",63],["n1info.hr",[63,105]],["snnovine.hu",64],["telegram.hr",65],["niskevesti.rs",[67,81]],["bokanews.me",68],["borba.me",69],["istramet.hr",69],["primorski.me",[69,101]],["sport026.rs",69],["tangosix.rs",[69,92]],["vijestibp.me",69],["rtvpancevo.rs",69],["udarnavest.rs",69],["jadrannovi.me",70],["najboljamamanasvetu.com",71],["onogost.me",72],["patuljak.me",73],["press.co.me",74],["rthn.co.me",75],["rtnk.me",76],["sportske.net",77],["nicelocal.com.hr",79],["hcl.hr",80],["grazia.hr",82],["motori.hr",83],["filmitv.rs",84],["gradnja.rs",85],["cenoteka.rs",86],["cineplexx.rs",87],["tvsuper.rs",88],["penzionisani.rs",90],["mojkraj.rs",91],["epancevo.rs",93],["dalmacijadanas.hr",95],["24sata.hr",96],["vecernji.hr",97],["bankar.me",98],["fokus.ba",98],["jadranbudva.me",99],["pvportal.me",100],["ul-info.com",103],["n1info.rs",105],["animesrbija.com",106],["vesti.rs",107],["vojvodinainfo.rs",108],["triangletv.rs",109],["srbijajavlja.rs",110],["hayat.ba",111],["vecernjenovosti.ba",112],["glamblam.ba",113],["boljatuzla.ba",114],["infoprijedor.ba",115],["radiovkladusa.ba",116],["artinfo.ba",117],["vecer.com",118],["info-ks.net",119],["vino.rs",120],["arhivanalitika.hr",121],["sodalive.ba",122],["aviatica.rs",123],["eprevodilac.com",124],["gledajcrtace.xyz",125],["mob.hr",126],["mondo.me",127],["prva.rs",128],["telegraf.tv",129],["telegraf.rs",129],["tvarenasport.com",130],["zagreb.info",131],["domaceserije.net",132]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["radiosarajevo.ba",[41]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
