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

// ruleset: rou-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"/Philip Morris|țigar/\"]]}","{\"selector\":\".article-category-featured\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}","{\"selector\":\".news-widget\",\"tasks\":[[\"not\",{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://www.stiripesurse.ro\\\"]\"}]]}]]}","{\"selector\":\".row\",\"tasks\":[[\"not\",{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://www.stiripesurse.ro\\\"]\"}]]}]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"adocean\\\"]\"}]]}"],["{\"selector\":\".elementor-column\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[href]:not([href*=\\\"radiomplusfm.ro\\\"])\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"publicitar\"]]}]]}"],["{\"selector\":\".st-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"publicitate\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"presasm.ro\\\"]\"}]]}],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[data-href*=\\\"facebook\\\"]\"}]]}]]}"],["{\"selector\":\"article > div.td-post-content > p\",\"tasks\":[[\"has-text\",\"/^\\\\u00A0$/\"]]}"],["{\"selector\":\"aside.externals\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"cotidianul.ro\\\"]\"}]]}"],["{\"selector\":\".height-250\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://repigmentare.ro/\\\"]\"}]]}"],["{\"selector\":\".clear\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"taboola-\\\"]\"}]]}"],["{\"selector\":\"[data-platform]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"div.grey-section\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}"],["{\"selector\":\"div.d2011-block-lateral-middle\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"voceabasarabiei.net\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[href]:not([href*=\\\"timponline.ro\\\"])\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".top\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has\",{\"selector\":\"> .part-right\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"freakhosting.com\\\"]\"}]]}]]}","{\"selector\":\".ipsWidget_inner\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"freakhosting.com\\\"]\"}]]}"],["{\"selector\":\".ipsWidget_title.ipsType_reset\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\"[style=\\\"min-height: 260px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"adocean\\\"]\"}]]}"],["{\"selector\":\"[class^=\\\"banner\\\"]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\".related-in-article\"}]]}]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"go4it\\\"]\"}]]}","{\"selector\":\".height-300\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"[style^=\\\"overflow:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[data-ad-slot]\"}]]}","{\"selector\":\"[style^=\\\"overflow:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[data-ad]\"}]]}"],["{\"selector\":\"[style^=\\\"overflow:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"#v-scritub-v3\"}]]}"],["{\"selector\":\".DAGInScrollInner\",\"tasks\":[[\"has\",{\"selector\":\".bannerBox\"}]]}","{\"selector\":\".special-box-pm > p\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}"],["{\"selector\":\".container.billboard-1-index\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"#articleContent > [style]\",\"tasks\":[[\"has\",{\"selector\":\"[data-ad]\"}]]}","{\"selector\":\"[align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"#div-gpt-dcnews_gpt-billboard_responsive\"}]]}","{\"selector\":\"[class^=\\\"container-block-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"#div-gpt-dcnews_gpt-billboard_responsive\"}]]}"],["{\"selector\":\".container.mg-top-20\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"pariuri\\\"]\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"PUB\"]]}"],["{\"selector\":\".height-250\",\"tasks\":[[\"has\",{\"selector\":\".strawberry-ads\"}]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"http://thecryptobot.com\\\"]\"}]]}"],["{\"selector\":\".widget_block\",\"tasks\":[[\"not\",{\"selector\":\".widget_block\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"romaniataramea.com\\\"]\"}]]}],[\"not\",{\"selector\":\".widget_block\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"google.com\\\"]\"}]]}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]:not([method])\"}]]}","{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}"],["{\"selector\":\".side-widget\",\"tasks\":[[\"has\",{\"selector\":\"[class=\\\"adsbygoogle\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"not\",{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://floteauto.ro\\\"]\"}]]}],[\"not\",{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"//www.autoexpert.ro\\\"]\"}]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Publicitate|Asemanatoare/\"]]}"],["{\"selector\":\".post_block\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"guest\\\"]\"}],[\"has-text\",\"Anunturi\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\"#billboard\",\"tasks\":[[\"has\",{\"selector\":\".add-container\"}]]}","{\"selector\":\".article-view\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}","{\"selector\":\".textlink\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\"#widget-wrap\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"uzpbihor.ro\\\"]\"}]]}]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\"[id=\\\"t5_zone_standard-ga\\\"]\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\".ad-header\"}]]}","{\"selector\":\".post-review\",\"tasks\":[[\"has\",{\"selector\":\".author-publicitate\"}]]}","{\"selector\":\"[data-ai-debug]\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pnl\\\"]\"}]]}"],["{\"selector\":\".sidebar\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"ad-\\\"]\"}]]}"],["{\"selector\":\".article-wrap\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}","{\"selector\":\"[class^=\\\"add\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"adocean\\\"]\"}]]}"],["{\"selector\":\".col-sm-4\",\"tasks\":[[\"has\",{\"selector\":\"[class=\\\"ad\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\"[id^=\\\"box\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\"> #RO_Web_SP_LB1_Skin\"}]]}","{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"#custom_html-10\",\"tasks\":[[\"has-text\",\"Advertising\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\".afiliere\"}]]}","{\"selector\":\".widget_header\",\"tasks\":[[\"has-text\",\"/recomand/i\"]]}"],["{\"selector\":\".centered\",\"tasks\":[[\"has\",{\"selector\":\".strawberry-ads-manager-container\"}]]}","{\"selector\":\".mg-bottom-10\",\"tasks\":[[\"has\",{\"selector\":\".strawberry-ads-manager-container\"}]]}","{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris International\"]]}"],["{\"selector\":\".align-right\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".td-pb-span12\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has-text\",\"/Recomandate/\"],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"Post\"]]}]]}"],["{\"selector\":\".inside-right-sidebar\",\"tasks\":[[\"has-text\",\"ads\"]]}"],["{\"selector\":\".td-a-rec-id-custom-spot\",\"tasks\":[[\"has\",{\"selector\":\"[alt=\\\"spot_img\\\"]\"}]]}","{\"selector\":\".tdc-element-style.td-pb-row.wpb_row\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}],[\"has\",{\"selector\":\"[class^=\\\"td-lazy-img\\\"]\"}]]}"],["{\"selector\":\".td-pb-span3\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".custom_textwidget\",\"tasks\":[[\"has-text\",\"publicitar\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\"[id^=\\\"media_image\\\"]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"dezvaluiri.ro\\\"]\"}]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\".stream-item-mag\",\"tasks\":[[\"has\",{\"selector\":\"[href=\\\"\\\"]\"}]]}","{\"selector\":\".stream-item-mag\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".elementor-element\",\"tasks\":[[\"has\",{\"selector\":\"[data-widget_type=\\\"image.default\\\"]\"}]]}","{\"selector\":\".elementor-element\",\"tasks\":[[\"has-text\",\"ad\"]]}","{\"selector\":\".wp-block-image\",\"tasks\":[[\"has\",{\"selector\":\"[sizes]\"}]]}"],["{\"selector\":\".widget_rss\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\".bursa.ro/\\\"]\"}]]}"],["{\"selector\":\".clearfix [href][target=\\\"_blank\\\"][rel]\",\"tasks\":[[\"has\",{\"selector\":\"[alt][title][style]\"}]]}"],["{\"selector\":\".container-wrapper > [href=\\\"https://www.gorjonline.ro/anunturi/\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[src]\"}]]}"],["{\"selector\":\".sow-image-container\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"][rel]\"}]]}"],["{\"selector\":\".Wdgt\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\".gif\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[data-aid]\"}]]}","{\"selector\":\"[href]:not([href*=\\\"tuktuk\\\"])\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"anner\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".content-segment\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pagead\\\"]\"}]]}","{\"selector\":\"[style*=\\\"border-radius: 3px; margin-bottom: 20px; width: 160px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pagead\\\"]\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"utm_source=aff\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pagead\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"anner\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[src]\"}]]}"],["{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".boxstire2head\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"[href][target=\\\"_blank\\\"]\"}],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"damboviteanul.com\\\"]\"}]]}],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[id=\\\"widget_container_curs\\\"]\"}]]}]]}"],["{\"selector\":\"[id^=\\\"block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"pub\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"facebook.com\\\"]\"}]]}"],["{\"selector\":\".wrapper\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"admixer\\\"]\"}]]}"],["{\"selector\":\".td-a-rec\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"350x350\\\"]\"}]]}"],["{\"selector\":\".hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".billboard\",\"tasks\":[[\"has\",{\"selector\":\"#consoAdTop\"}]]}"],["{\"selector\":\".incontent\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".wpb_wrapper.vc_figure\",\"tasks\":[[\"has\",{\"selector\":\"[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".height-250\",\"tasks\":[[\"has\",{\"selector\":\"> [id^=\\\"div-gpt-ad\\\"]\"}]]}","{\"selector\":\".min-height-250\",\"tasks\":[[\"has\",{\"selector\":\"> [id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".td-a-rec-id-custom-spot\",\"tasks\":[[\"has\",{\"selector\":\"[href=\\\"https://www.vadrexim.ro/anvelope.html\\\"]\"}]]}","{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"sponsor\"]]}","{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\".td-adspot-title\"}],[\"has\",{\"selector\":\".td_spot_img_all\"}]]}"],["{\"selector\":\".hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\".ad-placeholder\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\".hbagency_space_19811\"}]]}"],["{\"selector\":\"#text-25\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"#text-30\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"jooble.org\\\"]\"}]]}"],["{\"selector\":\".mh-widget\",\"tasks\":[[\"has-text\",\"/PROMO|PARTENER/i\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"[href]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"[href*=\\\"litoraltv.ro\\\"]\"],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"facebook.com\\\"]\"}]]}]]}]]}]]}"],["{\"selector\":\".height-250\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".td_block_template_1.vc_column_text\",\"tasks\":[[\"has\",{\"selector\":\"[href]\"}],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"ziaruldinmuscel.ro\\\"]\"}]]}]]}"],["{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\".mg-bottom-10\",\"tasks\":[[\"has\",{\"selector\":\".strawberry-ads\"}]]}"],["{\"selector\":\"td[width=\\\"250\\\"]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"fileshare.ro\\\"]\"}]]}]]}"],["{\"selector\":\"td > center\",\"tasks\":[[\"has-text\",\"Reclama\"]]}"],["{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"susținut de Philip Morris\"]]}"],["{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}"],["{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}"],["{\"selector\":\"#article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".single__container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".t-records\",\"tasks\":[[\"has-text\",\"arderea \"]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".ContentArticle\",\"tasks\":[[\"has-text\",\" tutunului\"]]}"],["{\"selector\":\".vc_column_inner > .vc_column-inner > .wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"> [href]\"}]]}"],["{\"selector\":\"#sidebar > .widget_text\",\"tasks\":[[\"not\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"Horoscop\"]]}]]}"],["{\"selector\":\".widget_text.widget\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"ziaruldebacau.ro\\\"]\"}]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://arhiblog.ro/colaboram/\\\"]\"}]]}","{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"eMAG\"]]}"],["{\"selector\":\".side_right_box\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"banner/\\\"]\"}]]}"],["{\"selector\":\"[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[alt^=\\\"Agentie\\\"]\"}]]}"],["{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\".td_single_image_bg\"}]]}","{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"td-adspot\\\"]\"}]]}"],["{\"selector\":\".widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"affiliate.php\\\"]\"}]]}"],["{\"selector\":\".vc_column-inner\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"[style^=\\\"min-height: 200px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".py-6\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"/etoro\\\"]\"}]]}"],["{\"selector\":\".border\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"binance.com\\\"]\"}]]}"],["{\"selector\":\".gridview-box-inside\",\"tasks\":[[\"has-text\",\"PROMO\"]]}"],["{\"selector\":\"*\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"ADVERTISING\"}]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has\",{\"selector\":\"[data-tracking-alias^=\\\"sponsored_products\\\"]\"}]]}"]];

const hostnamesMap = new Map([["stiripesurse.ro",0],["zonait.ro",1],["mesagerulneamt.ro",2],["radiomplusfm.ro",3],["ziarpiatraneamt.ro",4],["portalsm.ro",5],["presasm.ro",6],["smlive.ro",7],["luju.ro",8],["b1tv.ro",9],["playtech.ro",9],["nasul.tv",10],["national.ro",11],["ziarulromanesc.de",12],["prosport.ro",13],["agora.md",14],["istoria.md",15],["timponline.ro",16],["agrointel.ro",17],["romaniatv.net",18],["cspower.ro",19],["sa-mp.ro",20],["forum.4tuning.ro",21],["gsp.ro",22],["cancan.ro",23],["scritub.com",[24,25]],["rasfoiesc.com",24],["jurnalul.ro",26],["protv.ro",27],["dcnews.ro",28],["fanatik.ro",29],["lauralaurentiu.ro",30],["b365.ro",31],["nationalisti.ro",32],["incorectpolitic.com",33],["romaniataramea.com",34],["sfatulparintilor.ro",35],["serveresamp.com",36],["bucurestitv.net",37],["floteauto.ro",38],["lovendal.ro",39],["forum.softpedia.com",40],["autoexpert.ro",41],["mediculmeu.com",42],["kudika.ro",43],["uzpbihor.ro",44],["moduri.ro",45],["g4media.ro",46],["kfetele.ro",47],["wall-street.ro",48],["stirilekanald.ro",49],["odat.ro",50],["stiridinromania.ro",[50,97]],["mesagerulhunedorean.ro",50],["pretbenzina.ro",51],["autouncle.ro",52],["evmarket.ro",53],["nwradu.ro",54],["csid.ro",55],["androidu.ro",56],["autolatest.ro",57],["7media.md",58],["stireadeazi.ro",59],["vremeanoua.ro",60],["agro-tv.ro",61],["mesageruldesibiu.ro",62],["weradio.ro",63],["curier.ro",64],["campinatv.ro",65],["buletindecarei.ro",66],["dezvaluiri.ro",67],["napocanews.ro",68],["ciutacu.ro",69],["ziarulargesul.ro",70],["opiniabuzau.ro",71],["graiulsalajului.ro",72],["monitoruldevrancea.ro",73],["bursa.ro",74],["gorjonline.ro",75],["newmoney.ro",76],["filme-bune.biz",77],["tuktuk.ro",[78,79]],["actualitati.info",79],["litoraltv.ro",[79,104]],["cespun.eu",80],["myexpert.ro",81],["parerimagazin.ro",82],["aproapemasini.com",83],["impactpress.ro",84],["newsbv.ro",85],["cargo-bus.ro",86],["buzau.net",87],["zvj.ro",88],["damboviteanul.com",89],["gadget.ro",90],["sportulsalajean.ro",91],["stiri.md",92],["ziarulincomod.ro",93],["ciao.ro",94],["conso.ro",95],["substantial.ro",96],["bzi.ro",98],["presadeazi.ro",99],["zcj.ro",100],["tomisnews.ro",101],["televiziunea-medicala.ro",102],["ctnews.ro",103],["vbiz.ro",105],["ziaruldinmuscel.ro",106],["gazetavalceana.ro",107],["go4games.ro",108],["fileshare.ro",109],["girlshare.ro",110],["hotnews.ro",111],["gandul.ro",112],["news.ro",113],["mediafax.ro",114],["descopera.ro",115],["click.ro",116],["evz.ro",116],["dilemaveche.ro",117],["locals.md",118],["digi24.ro",119],["dcmedical.ro",120],["stirilebzi.ro",121],["arenavalceana.ro",122],["ramnicuvalceaweek.ro",123],["ziaruldebacau.ro",124],["arhiblog.ro",125],["bancherul.ro",126],["info1tv.ro",127],["mangalianews.ro",128],["videotutorial.ro",129],["programegratuitepc.com",130],["newsmed.ro",131],["coinjournal.net",132],["super-boost.ro",133],["editiedevrancea.ro",134],["stirileprotv.ro",135],["acasatv.ro",135],["sport.ro",135]]);

const entitiesMap = new Map([["emag",136]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
