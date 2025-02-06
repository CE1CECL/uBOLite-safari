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

/* eslint-disable indent */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeNodeText = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/block-adb|-0x|ad block|alert/"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/adb/i"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script",";break;case $."],["script","adb_detected"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/AdbModel|showPopup/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/WebAssembly|forceunder/"],["script","popundersPerIP"],["script","wpadmngr.com"],["script","/adb|offsetWidth/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script",".xyz/script/"],["script","adrecover.com"],["script","html-load.com"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","WebAssembly"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","/b5rh0rt|\\;\\}\\}catch\\(_/"],["script","/[a-zA-Z0-9]{10","20}\\; \\} \\}/"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",[0,1]],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,5]],["mactechnews.de",0],["sport1.de",0],["welt.de",0],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["web.de",3],["skidrowreloaded.com",[4,15]],["embedsports.me",[4,63]],["embedstream.me",[4,14,15,59,63]],["jumbtv.com",[4,63]],["reliabletv.me",[4,63]],["topembed.pw",[4,61,200]],["crackstreamer.net",4],["methstreamer.com",4],["rnbastreams.com",4],["1stream.eu",4],["4kwebplay.xyz",4],["antennasports.ru",4],["buffsports.me",[4,59]],["buffstreams.app",4],["claplivehdplay.ru",[4,200]],["cracksports.me",[4,14]],["euro2024direct.ru",4],["ext.to",4],["eztv.tf",4],["eztvx.to",4],["kenitv.me",[4,14,15]],["lewblivehdplay.ru",[4,200]],["mlbbite.net",4],["mlbstreams.ai",4],["qatarstreams.me",[4,14]],["qqwebplay.xyz",[4,200]],["soccerworldcup.me",[4,14]],["topstreams.info",4],["totalsportek.to",4],["viwlivehdplay.ru",4],["vidco.pro",[4,59]],["streamingnow.mov",[4,52]],["cinedesi.in",[6,45]],["intro-hd.net",6],["monacomatin.mc",6],["nodo313.net",6],["hesgoal-tv.io",6],["hesgoal-vip.io",6],["yts.mx",8],["magesypro.com",9],["pinsystem.co.uk",9],["elrellano.com",9],["tinyppt.com",9],["veganab.co",9],["camdigest.com",9],["learnmany.in",9],["amanguides.com",[9,32]],["highkeyfinance.com",[9,32]],["appkamods.com",9],["techacode.com",9],["djqunjab.in",9],["downfile.site",9],["expertvn.com",9],["trangchu.news",9],["3dmodelshare.org",9],["nulleb.com",9],["asiaon.top",9],["coursesghar.com",9],["thecustomrom.com",9],["snlookup.com",9],["bingotingo.com",9],["ghior.com",9],["3dmili.com",9],["karanpc.com",9],["plc247.com",9],["apkdelisi.net",9],["javindo.eu.org",9],["chindohot.site",9],["freepasses.org",9],["tomarnarede.pt",9],["basketballbuzz.ca",9],["dribbblegraphics.com",9],["kemiox.com",9],["teksnologi.com",9],["bharathwick.com",9],["descargaspcpro.net",9],["dx-tv.com",9],["rt3dmodels.com",9],["plc4me.com",9],["blisseyhusbands.com",9],["madaradex.org",9],["trigonevo.com",9],["franceprefecture.fr",9],["jazbaat.in",9],["aipebel.com",9],["audiotools.blog",9],["embdproxy.xyz",9],["upornia.com",11],["germancarforum.com",13],["cybercityhelp.in",13],["innateblogger.com",13],["omeuemprego.online",13],["streamnoads.com",[14,15,51,59]],["bowfile.com",14],["cloudvideo.tv",[14,59]],["coloredmanga.com",14],["exeo.app",14],["hiphopa.net",[14,15]],["megaup.net",14],["olympicstreams.co",[14,59]],["tv247.us",[14,15]],["uploadhaven.com",14],["userscloud.com",[14,59]],["mlbbox.me",14],["neodrive.xyz",14],["mdfx9dc8n.net",15],["mdzsmutpcvykb.net",15],["mixdrop21.net",15],["mixdropjmk.pw",15],["141jav.com",15],["1bit.space",15],["1bitspace.com",15],["345movies.com",15],["3dporndude.com",15],["4archive.org",15],["4horlover.com",15],["560pmovie.com",15],["85tube.com",15],["85videos.com",15],["acefile.co",15],["actusports.eu",15],["adclickersbot.com",15],["adricami.com",15],["adslink.pw",15],["adultstvlive.com",15],["adz7short.space",15],["aeblender.com",15],["ahdafnews.blogspot.com",15],["ak47sports.com",15],["akuma.moe",15],["allplayer.tk",15],["amateurblog.tv",15],["androidadult.com",[15,223]],["anhsexjav.xyz",15],["anidl.org",15],["anime-loads.org",15],["animeblkom.net",15],["animefire.plus",15],["animelek.me",15],["animespire.net",15],["animestotais.xyz",15],["animeyt.es",15],["anroll.net",15],["anymoviess.xyz",15],["aotonline.org",15],["asenshu.com",15],["asialiveaction.com",15],["asianclipdedhd.net",15],["askim-bg.com",15],["asumsikedaishop.com",15],["avcrempie.com",15],["avseesee.com",15],["gettapeads.com",[15,51]],["backfirstwo.com",15],["bajarjuegospcgratis.com",15],["balkanportal.net",15],["balkanteka.net",15],["bdnewszh.com",[15,59]],["belowporn.com",15],["bestgirlsexy.com",15],["bestnhl.com",15],["bestporn4free.com",15],["bestporncomix.com",15],["bet36.es",15],["bikinitryon.net",15],["birdurls.com",15],["bitsearch.to",15],["blackcockadventure.com",15],["blackcockchurch.org",15],["blackporncrazy.com",15],["blizzboygames.net",15],["blizzpaste.com",15],["blkom.com",15],["blog-peliculas.com",15],["blogtrabalhista.com",15],["bobsvagene.club",15],["bolly4umovies.click",15],["bonusharian.pro",15],["brilian-news.id",15],["brupload.net",15],["bucitana.com",15],["camchickscaps.com",15],["camgirlcum.com",15],["camgirls.casa",15],["cashurl.in",15],["castingx.net",15],["ccurl.net",[15,59]],["celebrity-leaks.net",15],["cgpelis.net",15],["charexempire.com",15],["choosingnothing.com",15],["clasico.tv",15],["clik.pw",15],["coin-free.com",[15,29]],["coins100s.fun",15],["comicsmanics.com",15],["compucalitv.com",15],["coolcast2.com",15],["cosplaytab.com",15],["countylocalnews.com",15],["cpmlink.net",15],["crackstreamshd.click",15],["crespomods.com",15],["crisanimex.com",15],["crunchyscan.fr",15],["cuevana3.fan",15],["cuevana3hd.com",15],["cumception.com",15],["cutpaid.com",15],["dailyuploads.net",15],["datawav.club",15],["daughtertraining.com",15],["deepgoretube.site",15],["deltabit.co",15],["deporte-libre.top",15],["depvailon.com",15],["derleta.com",15],["desivdo.com",15],["desixx.net",15],["detikkebumen.com",15],["deutschepornos.me",15],["diasoft.xyz",15],["directupload.net",15],["diskusscan.com",15],["dixva.com",15],["doctormalay.com",15],["dofusports.xyz",15],["dogemate.com",15],["doods.cam",15],["doodskin.lat",15],["downloadrips.com",15],["downvod.com",15],["dphunters.mom",15],["dragontranslation.com",15],["dvdfullestrenos.com",15],["ebookbb.com",15],["ebookhunter.net",15],["egyanime.com",15],["egygost.com",15],["egyshare.cc",15],["ekasiwap.com",15],["electro-torrent.pl",15],["elil.cc",15],["eplayer.click",15],["erovoice.us",15],["eroxxx.us",15],["estrenosdoramas.net",15],["everia.club",15],["everythinginherenet.blogspot.com",15],["extrafreetv.com",15],["extremotvplay.com",15],["fapinporn.com",15],["fapptime.com",15],["fashionblog.tv",15],["fastreams.live",15],["faucethero.com",15],["fembed.com",15],["femdom-joi.com",15],["fileone.tv",15],["film1k.com",15],["filmeonline2023.net",15],["filmesonlinex.org",15],["filmesonlinexhd.biz",[15,59]],["filmovitica.com",15],["filmymaza.blogspot.com",15],["filthy.family",15],["fixfinder.click",15],["flostreams.xyz",15],["flyfaucet.com",15],["footyhunter.lol",15],["forex-trnd.com",15],["forumchat.club",15],["forumlovers.club",15],["freemoviesonline.biz",15],["freeomovie.co.in",15],["freeomovie.to",15],["freeporncomic.net",15],["freepornhdonlinegay.com",15],["freeproxy.io",15],["freeuse.me",15],["freeusexporn.com",15],["fsicomics.com",15],["gamepcfull.com",15],["gameronix.com",15],["gamesfullx.com",15],["gameshdlive.net",15],["gamesmountain.com",15],["gamesrepacks.com",15],["gamingguru.fr",15],["gamovideo.com",15],["garota.cf",15],["gaydelicious.com",15],["gaypornmasters.com",15],["gaysex69.net",15],["gemstreams.com",15],["get-to.link",15],["girlscanner.org",15],["giurgiuveanul.ro",15],["gledajcrtace.xyz",15],["gocast2.com",15],["gomo.to",15],["gostosa.cf",15],["gtlink.co",15],["gwiazdypornosow.pl",15],["haho.moe",15],["hatsukimanga.com",15],["hayhd.net",15],["hdsaprevodom.com",15],["hdstreamss.club",15],["hentais.tube",15],["hentaistream.co",15],["hentaitk.net",15],["hentaitube.online",15],["hentaiworld.tv",15],["hesgoal.tv",15],["hexupload.net",15],["hhkungfu.tv",15],["highlanderhelp.com",15],["hindimean.com",15],["hindimovies.to",[15,59]],["hiperdex.com",15],["hispasexy.org",15],["hitprn.com",15],["hoca4u.com",15],["hollymoviehd.cc",15],["hoodsite.com",15],["hopepaste.download",15],["hornylips.com",15],["hotgranny.live",15],["hotmama.live",15],["hqcelebcorner.net",15],["huren.best",15],["hwnaturkya.com",[15,59]],["hxfile.co",[15,59]],["igfap.com",15],["iklandb.com",15],["illink.net",15],["imgkings.com",15],["imgsex.xyz",15],["imx.to",15],["influencersgonewild.org",15],["infosgj.free.fr",15],["investnewsbrazil.com",15],["itdmusics.com",15],["itsuseful.site",15],["itunesfre.com",15],["iwatchfriendsonline.net",[15,117]],["jackstreams.com",15],["jatimupdate24.com",15],["jav-fun.cc",15],["jav-noni.cc",15],["jav-scvp.com",15],["javcl.com",15],["javf.net",15],["javhay.net",15],["javhoho.com",15],["javhun.com",15],["javleak.com",15],["javporn.best",15],["javsek.net",15],["javsex.to",15],["javtiful.com",[15,26]],["jimdofree.com",15],["jiofiles.org",15],["jorpetz.com",15],["jp-films.com",15],["jpop80ss3.blogspot.com",15],["jpopsingles.eu",[15,176]],["kantotflix.net",15],["kantotinyo.com",15],["kaoskrew.org",15],["kaplog.com",15],["keralatvbox.com",15],["kickassanimes.io",15],["kimochi.info",15],["kimochi.tv",15],["kinemania.tv",15],["konstantinova.net",15],["koora-online.live",15],["kunmanga.com",15],["kutmoney.com",15],["kwithsub.com",15],["lat69.me",15],["latinblog.tv",15],["latinomegahd.net",15],["lazyfaucet.com",15],["leechpremium.link",15],["legendas.dev",15],["legendei.net",15],["lightdlmovies.blogspot.com",15],["lighterlegend.com",15],["linclik.com",15],["linkebr.com",15],["linkrex.net",15],["lulu.st",15],["lulustream.com",[15,61]],["luluvdo.com",15],["manga-oni.com",15],["mangaboat.com",15],["mangagenki.me",15],["mangahere.onl",15],["mangaweb.xyz",15],["mangoporn.net",15],["manhwahentai.me",15],["masahub.com",15],["masahub.net",15],["maturegrannyfuck.com",15],["mdy48tn97.com",15],["mediapemersatubangsa.com",15],["mega-mkv.com",15],["megapastes.com",15],["megapornpics.com",15],["messitv.net",15],["meusanimes.net",15],["milfmoza.com",15],["milfzr.com",15],["millionscast.com",15],["mimaletamusical.blogspot.com",15],["mitly.us",15],["mkv-pastes.com",15],["monaskuliner.ac.id",15],["moredesi.com",15],["movgotv.net",15],["movi.pk",15],["movieswbb.com",15],["moviewatch.com.pk",15],["mp4upload.com",15],["mrskin.live",15],["multicanaistv.com",15],["mundowuxia.com",15],["myeasymusic.ir",15],["myonvideo.com",15],["myyouporn.com",15],["narutoget.info",15],["naughtypiss.com",15],["nerdiess.com",15],["new-fs.eu",15],["newtorrentgame.com",15],["nflstreams.me",15],["niaomea.me",[15,59]],["nicekkk.com",15],["nicesss.com",15],["nlegs.com",15],["nolive.me",[15,59]],["notformembersonly.com",15],["novamovie.net",15],["novelpdf.xyz",15],["novelssites.com",[15,59]],["novelup.top",15],["nsfwr34.com",15],["nu6i-bg-net.com",15],["nudebabesin3d.com",15],["nukedfans.com",15],["nuoga.eu",15],["nzbstars.com",15],["ohjav.com",15],["ojearnovelas.com",15],["okanime.xyz",15],["olarixas.xyz",15],["oldbox.cloud",15],["olweb.tv",15],["olympicstreams.me",15],["on9.stream",15],["onepiece-mangaonline.com",15],["onifile.com",15],["onionstream.live",15],["onlinesaprevodom.net",15],["onlyfullporn.video",15],["onplustv.live",15],["originporn.com",15],["ovagames.com",15],["ovamusic.com",15],["packsporn.com",15],["pahaplayers.click",15],["palimas.org",15],["pandafiles.com",15],["password69.com",15],["pastemytxt.com",15],["payskip.org",15],["peeplink.in",15],["peliculasmx.net",15],["pervertgirlsvideos.com",15],["pervyvideos.com",15],["phim12h.com",15],["picdollar.com",15],["pickteenz.com",15],["pics4you.net",15],["picsxxxporn.com",15],["pinayscandalz.com",15],["pinkueiga.net",15],["piratefast.xyz",15],["piratehaven.xyz",15],["pirateiro.com",15],["pirlotvonline.org",15],["playtube.co.za",15],["plugintorrent.com",15],["pmvzone.com",15],["porndish.com",15],["pornez.net",15],["pornfetishbdsm.com",15],["pornfits.com",15],["pornhd720p.com",15],["pornobr.club",15],["pornobr.ninja",15],["pornodominicano.net",15],["pornofaps.com",15],["pornoflux.com",15],["pornotorrent.com.br",15],["pornredit.com",15],["pornstarsyfamosas.es",15],["pornstreams.co",15],["porntn.com",15],["pornxbit.com",15],["pornxday.com",15],["portaldasnovinhas.shop",15],["portugues-fcr.blogspot.com",15],["poscitesch.com",[15,59]],["poseyoung.com",15],["pover.org",15],["proxyninja.org",15],["pubfilmz.com",15],["publicsexamateurs.com",15],["punanihub.com",15],["putlocker5movies.org",15],["pxxbay.com",15],["r18.best",15],["ragnaru.net",15],["rapbeh.net",15],["rapelust.com",15],["rapload.org",15],["read-onepiece.net",15],["retro-fucking.com",15],["retrotv.org",15],["robaldowns.com",15],["rockdilla.com",15],["rojadirectatvenvivo.com",15],["rojitadirecta.blogspot.com",15],["romancetv.site",15],["rsoccerlink.site",15],["rule34.club",15],["rule34hentai.net",15],["rumahbokep-id.com",15],["safego.cc",15],["sakurafile.com",15],["satoshi-win.xyz",15],["scat.gold",15],["scatfap.com",15],["scatkings.com",15],["scnlog.me",15],["scripts-webmasters.net",15],["serie-turche.com",15],["serijefilmovi.com",15],["sexcomics.me",15],["sexdicted.com",15],["sexgay18.com",15],["sexofilm.co",15],["sextgem.com",15],["sextubebbw.com",15],["sgpics.net",15],["shadowrangers.live",15],["shahee4u.cam",15],["shahiid-anime.net",15],["shemale6.com",15],["shinden.pl",15],["short.es",15],["showmanga.blog.fc2.com",15],["shrt10.com",15],["shurt.pw",15],["sideplusleaks.net",15],["silverblog.tv",15],["silverpic.com",15],["sinhalasub.life",15],["sinsitio.site",15],["sinvida.me",15],["skidrowcpy.com",15],["skidrowfull.com",15],["slut.mom",15],["smallencode.me",15],["smoner.com",15],["smplace.com",15],["soccerinhd.com",[15,59]],["socceron.name",15],["softairbay.com",15],["sokobj.com",15],["songsio.com",15],["souexatasmais.com",15],["sportbar.live",15],["sportstream1.cfd",15],["srt.am",15],["srts.me",15],["stbemuiptv.com",15],["stockingfetishvideo.com",15],["stream.crichd.vip",15],["stream.lc",15],["stream25.xyz",15],["streambee.to",15],["streamcenter.pro",15],["streamers.watch",15],["streamgo.to",15],["streamkiste.tv",15],["streamoupload.xyz",15],["streamservicehd.click",15],["streamvid.net",[15,22]],["subtitleporn.com",15],["subtitles.cam",15],["suicidepics.com",15],["supertelevisionhd.com",15],["supexfeeds.com",15],["swiftload.io",15],["swzz.xyz",15],["sxnaar.com",15],["tabooporns.com",15],["taboosex.club",15],["tapeantiads.com",[15,51]],["tapeblocker.com",[15,51]],["tapenoads.com",[15,51]],["tapewithadblock.org",[15,51,231]],["teamos.xyz",15],["teen-wave.com",15],["teenporncrazy.com",15],["telegramgroups.xyz",15],["telenovelasweb.com",15],["tensei-shitara-slime-datta-ken.com",15],["tfp.is",15],["tgo-tv.co",[15,59]],["thaihotmodels.com",15],["theblueclit.com",15],["thebussybandit.com",15],["thedaddy.to",[15,198]],["theicongenerator.com",15],["thelastdisaster.vip",15],["thepiratebay0.org",15],["thepiratebay10.info",15],["thesexcloud.com",15],["thothub.today",15],["tightsexteens.com",15],["tojav.net",15],["tokyoblog.tv",15],["top16.net",15],["topvideosgay.com",15],["torrage.info",15],["torrents.vip",15],["torrsexvid.com",15],["tpb-proxy.xyz",15],["trannyteca.com",15],["trendytalker.com",15],["tumanga.net",15],["turbogvideos.com",15],["turbovid.me",15],["turkishseriestv.org",15],["turksub24.net",15],["tutele.sx",15],["tvglobe.me",15],["tvpclive.com",15],["tvs-widget.com",15],["tvseries.video",15],["ucptt.com",15],["ufaucet.online",15],["ufcfight.online",15],["ultrahorny.com",15],["ultraten.net",15],["unblockweb.me",15],["underhentai.net",15],["uniqueten.net",15],["upbaam.com",15],["upstream.to",15],["valeriabelen.com",15],["verdragonball.online",15],["vfxmed.com",15],["video.az",15],["videostreaming.rocks",15],["videowood.tv",15],["vidorg.net",15],["vidtapes.com",15],["vidz7.com",15],["vikistream.com",15],["vikv.net",15],["virpe.cc",15],["visifilmai.org",15],["viveseries.com",15],["vladrustov.sx",15],["volokit2.com",[15,198]],["vstorrent.org",15],["w-hentai.com",15],["watchbrooklynnine-nine.com",15],["watchelementaryonline.com",15],["watchjavidol.com",15],["watchkobestreams.info",15],["watchlostonline.net",15],["watchmonkonline.com",15],["watchrulesofengagementonline.com",15],["watchthekingofqueens.com",15],["webcamrips.com",15],["wincest.xyz",15],["wolverdon.fun",15],["wordcounter.icu",15],["worldmovies.store",15],["worldstreams.click",15],["wpdeployit.com",15],["wqstreams.tk",15],["wwwsct.com",15],["xanimeporn.com",15],["xblog.tv",15],["xn--verseriesespaollatino-obc.online",15],["xn--xvideos-espaol-1nb.com",15],["xpornium.net",15],["xsober.com",15],["xvip.lat",15],["xxgasm.com",15],["xxvideoss.org",15],["xxx18.uno",15],["xxxdominicana.com",15],["xxxfree.watch",15],["xxxmax.net",15],["xxxwebdlxxx.top",15],["xxxxvideo.uno",15],["y2b.wiki",15],["yabai.si",15],["yadixv.com",15],["yayanimes.net",15],["yeshd.net",15],["yodbox.com",15],["youjax.com",15],["yourdailypornvideos.ws",15],["yourupload.com",15],["ytstv.me",15],["zerion.cc",15],["zerocoin.top",15],["zitss.xyz",15],["zpaste.net",15],["zplayer.live",15],["1337x.ninjaproxy1.com",15],["y2tube.pro",15],["freeshot.live",15],["fastreams.com",15],["redittsports.com",15],["sky-sports.store",15],["streamsoccer.site",15],["tntsports.store",15],["wowstreams.co",15],["zdsptv.com",15],["faucet.ovh",16],["oko.sh",[17,41,42]],["variety.com",18],["gameskinny.com",18],["deadline.com",18],["bigbtc.win",19],["cryptofun.space",19],["sexo5k.com",20],["truyen-hentai.com",20],["theshedend.com",22],["zeroupload.com",22],["securenetsystems.net",22],["miniwebtool.com",22],["bchtechnologies.com",22],["eracast.cc",22],["spiegel.de",23],["jacquieetmichel.net",24],["hausbau-forum.de",25],["althub.club",25],["kiemlua.com",25],["tea-coffee.net",27],["spatsify.com",27],["newedutopics.com",27],["getviralreach.in",27],["edukaroo.com",27],["funkeypagali.com",27],["careersides.com",27],["nayisahara.com",27],["wikifilmia.com",27],["infinityskull.com",27],["viewmyknowledge.com",27],["iisfvirtual.in",27],["starxinvestor.com",27],["jkssbalerts.com",27],["kenzo-flowertag.com",28],["mdn.lol",28],["btcbitco.in",29],["btcsatoshi.net",29],["cempakajaya.com",29],["crypto4yu.com",29],["gainl.ink",29],["manofadan.com",29],["readbitcoin.org",29],["wiour.com",29],["tremamnon.com",29],["btc25.org",29],["bitsmagic.fun",29],["ourcoincash.xyz",29],["blog.cryptowidgets.net",30],["blog.insurancegold.in",30],["blog.wiki-topia.com",30],["blog.coinsvalue.net",30],["blog.cookinguide.net",30],["blog.freeoseocheck.com",30],["aylink.co",31],["sugarona.com",32],["nishankhatri.xyz",32],["cety.app",33],["exe-urls.com",33],["exego.app",33],["cutlink.net",33],["cutsy.net",33],["cutyurls.com",33],["cutty.app",33],["cutnet.net",33],["tinys.click",34],["answerpython.com",34],["formyanime.com",34],["gsm-solution.com",34],["h-donghua.com",34],["hindisubbedacademy.com",34],["linksdramas2.blogspot.com",34],["pkgovjobz.com",34],["ripexbooster.xyz",34],["serial4.com",34],["serial412.blogspot.com",34],["sigmalinks.in",34],["tutorgaming.com",34],["everydaytechvams.com",34],["dipsnp.com",34],["cccam4sat.com",34],["zeemoontv-24.blogspot.com",34],["stitichsports.com",34],["aiimgvlog.fun",35],["appsbull.com",36],["diudemy.com",36],["maqal360.com",36],["mphealth.online",36],["makefreecallsonline.com",36],["androjungle.com",36],["bookszone.in",36],["drakescans.com",36],["shortix.co",36],["msonglyrics.com",36],["app-sorteos.com",36],["bokugents.com",36],["client.pylexnodes.net",36],["btvplus.bg",36],["blog24.me",[37,38]],["coingraph.us",39],["impact24.us",39],["iconicblogger.com",40],["auto-crypto.click",40],["tvi.la",[41,42]],["iir.la",[41,42]],["tii.la",[41,42]],["ckk.ai",[41,42]],["oei.la",[41,42]],["lnbz.la",[41,42]],["oii.la",[41,42,61]],["tpi.li",[41,42]],["smutty.com",43],["e-sushi.fr",43],["freeadultcomix.com",43],["down.dataaps.com",43],["filmweb.pl",43],["safetxt.net",43],["premiumporn.org",43],["atglinks.com",44],["thevouz.in",45],["tejtime24.com",45],["techishant.in",45],["kbconlinegame.com",46],["hamrojaagir.com",46],["odijob.com",46],["blogesque.net",47],["bookbucketlyst.com",47],["explorosity.net",47],["optimizepics.com",47],["torovalley.net",47],["travize.net",47],["trekcheck.net",47],["metoza.net",47],["techlike.net",47],["snaplessons.net",47],["atravan.net",47],["transoa.net",47],["techmize.net",47],["crenue.net",47],["simana.online",48],["fooak.com",48],["joktop.com",48],["evernia.site",48],["falpus.com",48],["indiamaja.com",49],["newshuta.in",49],["celebzcircle.com",49],["bi-girl.net",49],["hentaiseason.com",49],["hoodtrendspredict.com",49],["marcialhub.xyz",49],["osteusfilmestuga.online",49],["ragnarokscanlation.opchapters.com",49],["sampledrive.org",49],["tojimangas.com",49],["tvappapk.com",49],["twobluescans.com",[49,95]],["varnascan.xyz",49],["financemonk.net",50],["advertisertape.com",51],["tapeadsenjoyer.com",[51,59]],["tapeadvertisement.com",51],["tapelovesads.org",51],["watchadsontape.com",51],["neymartv.net",52],["streamhd247.info",52],["hindimoviestv.com",52],["nowlive1.me",52],["buzter.xyz",52],["valhallas.click",52],["cuervotv.me",[52,59]],["aliezstream.pro",52],["daddy-stream.xyz",52],["instream.pro",52],["mylivestream.pro",52],["powerover.online",52],["sportea.link",52],["sportsurge.stream",52],["ufckhabib.com",52],["ustream.pro",52],["animeshqip.site",52],["apkship.shop",52],["buzter.pro",52],["enjoysports.bond",52],["filedot.to",52],["foreverquote.xyz",52],["hdstream.one",52],["kingstreamz.site",52],["live.fastsports.store",52],["livesnow.me",52],["livesports4u.pw",52],["masterpro.click",52],["nuxhallas.click",52],["papahd.info",52],["rgshows.me",52],["sportmargin.live",52],["sportmargin.online",52],["sportsloverz.xyz",52],["sportzlive.shop",52],["supertipzz.online",52],["totalfhdsport.xyz",52],["ultrastreamlinks.xyz",52],["usgate.xyz",52],["webmaal.cfd",52],["wizistreamz.xyz",52],["worldstreamz.shop",52],["g-porno.com",52],["g-streaming.com",52],["educ4m.com",52],["fromwatch.com",52],["visualnewshub.com",52],["rahim-soft.com",53],["x-video.tube",53],["rubystm.com",53],["rubyvid.com",53],["streamruby.com",53],["poophd.cc",53],["windowsreport.com",53],["hyundaitucson.info",54],["exambd.net",55],["cgtips.org",56],["freewebcart.com",57],["siamblockchain.com",57],["emuenzen.de",58],["adsh.cc",59],["afilmyhouse.blogspot.com",59],["ak.sv",59],["animesultra.com",59],["api.webs.moe",59],["apkmody.io",59],["attvideo.com",59],["backfirstwo.site",[59,145]],["crazyblog.in",59],["divicast.com",59],["dlhd.so",59],["embed.meomeo.pw",59],["filmeserialeonline.org",59],["flexyhit.com",59],["foreverwallpapers.com",59],["french-streams.cc",59],["fslinks.org",59],["hdtoday.to",59],["hinatasoul.com",59],["igg-games.com",59],["infinityscans.net",[59,233]],["mangareader.to",59],["membed.net",59],["mgnetu.com",59],["mp3juice.info",59],["mp3juices.cc",59],["myflixerz.to",59],["nowmetv.net",59],["nowsportstv.com",59],["nxbrew.com",59],["oii.io",59],["paidshitforfree.com",59],["pepperlive.info",59],["playertv.net",59],["putlocker68.com",59],["roystream.com",59],["rssing.com",59],["s.to",59],["share.filesh.site",59],["sharkfish.xyz",59],["skidrowcodex.net",59],["smartermuver.com",59],["sports-stream.site",59],["stream4free.live",59],["tamilmobilemovies.in",59],["thewatchseries.live",59],["tnmusic.in",59],["travelplanspro.com",59],["tusfiles.com",59],["tutlehd4.com",59],["twstalker.com",59],["vid-guard.com",59],["vidsaver.net",59],["vidspeeds.com",59],["viralitytoday.com",59],["voiranime.stream",59],["watchdoctorwhoonline.com",59],["watchserie.online",59],["webhostingpost.com",59],["woxikon.in",59],["www-y2mate.com",59],["ylink.bid",59],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",59],["buffshub.stream",61],["cinego.tv",61],["ev01.to",61],["fstream365.com",61],["minoplres.xyz",61],["mostream.us",61],["s3embtaku.pro",61],["sflix2.to",61],["sportshub.stream",61],["topcinema.cam",61],["animesaturn.cx",61],["hunterscomics.com",61],["unblocked.id",64],["listendata.com",65],["7xm.xyz",65],["fastupload.io",65],["azmath.info",65],["wouterplanet.com",66],["androidacy.com",67],["pillowcase.su",68],["veryfreeporn.com",69],["theporngod.com",69],["besthdgayporn.com",70],["drivenime.com",70],["javup.org",70],["shemaleup.net",70],["freeroms.com",71],["soap2day-online.com",71],["andhrafriends.com",71],["beatsnoop.com",72],["fetchpik.com",72],["hackerranksolution.in",72],["camsrip.com",72],["help.sakarnewz.com",72],["austiblox.net",74],["btcbunch.com",75],["teachoo.com",76],["automobile-catalog.com",[77,78,83]],["motorbikecatalog.com",[77,78,83]],["topstarnews.net",77],["islamicfinder.org",77],["secure-signup.net",77],["dramabeans.com",77],["manta.com",77],["tportal.hr",77],["tvtropes.org",77],["wouldurather.io",77],["convertcase.net",77],["interfootball.co.kr",78],["a-ha.io",78],["cboard.net",78],["jjang0u.com",78],["joongdo.co.kr",78],["viva100.com",78],["gamingdeputy.com",78],["thesaurus.net",78],["alle-tests.nl",78],["maketecheasier.com",78],["allthekingz.com",78],["tweaksforgeeks.com",78],["m.inven.co.kr",78],["mlbpark.donga.com",78],["meconomynews.com",78],["brandbrief.co.kr",78],["motorgraph.com",78],["worldhistory.org",79],["lovelive-petitsoku.com",80],["pravda.com.ua",80],["mariowiki.com",81],["ap7am.com",82],["cinema.com.my",82],["dolldivine.com",82],["giornalone.it",82],["iplocation.net",82],["jutarnji.hr",82],["kompasiana.com",82],["mediaindonesia.com",82],["nmplus.hk",82],["slobodnadalmacija.hr",82],["allthetests.com",83],["apkmirror.com",[83,171]],["autoby.jp",83],["blog.esuteru.com",83],["blog.livedoor.jp",83],["carscoops.com",83],["crosswordsolver.com",83],["cruciverba.it",83],["daily.co.jp",83],["dnevno.hr",83],["dziennik.pl",83],["ff14net.2chblog.jp",83],["forsal.pl",83],["freemcserver.net",83],["game8.jp",83],["gazetaprawna.pl",83],["globalrph.com",83],["golf-live.at",83],["heureka.cz",83],["horairesdouverture24.fr",83],["indiatimes.com",83],["itainews.com",83],["j-cast.com",83],["j-town.net",83],["javatpoint.com",83],["jin115.com",83],["kreuzwortraetsel.de",83],["kurashiru.com",83],["lacuarta.com",83],["laleggepertutti.it",83],["mamastar.jp",83],["meeco.kr",83],["mirrored.to",83],["modhub.us",83],["motscroises.fr",83],["news4vip.livedoor.biz",83],["nyitvatartas24.hu",83],["oeffnungszeitenbuch.de",83],["onecall2ch.com",83],["oraridiapertura24.it",83],["palabr.as",83],["persoenlich.com",83],["petitfute.com",83],["powerpyx.com",83],["rabitsokuhou.2chblog.jp",83],["raetsel-hilfe.de",83],["rostercon.com",83],["slashdot.org",83],["sourceforge.net",83],["suzusoku.blog.jp",83],["syosetu.com",83],["talkwithstranger.com",83],["the-crossword-solver.com",83],["thestockmarketwatch.com",83],["trilltrill.jp",83],["tvtv.ca",83],["tvtv.us",83],["verkaufsoffener-sonntag.com",83],["watchdocumentaries.com",83],["webdesignledger.com",83],["wetteronline.de",83],["wfmz.com",83],["winfuture.de",83],["word-grabber.com",83],["wort-suchen.de",83],["yugioh-starlight.com",83],["yutura.net",83],["zagreb.info",83],["mafiatown.pl",84],["bitcotasks.com",85],["hilites.today",86],["udvl.com",87],["www.chip.de",[88,89,234]],["topsporter.net",90],["sportshub.to",90],["streamcheck.link",91],["myanimelist.net",92],["unofficialtwrp.com",93],["codec.kyiv.ua",93],["kimcilonlyofc.com",93],["bitcosite.com",94],["bitzite.com",94],["hacoos.com",97],["watchhentai.net",98],["hes-goals.io",98],["pkbiosfix.com",98],["casi3.xyz",98],["bondagevalley.cc",99],["zefoy.com",100],["mailgen.biz",101],["tempinbox.xyz",101],["vidello.net",102],["newscon.org",103],["yunjiema.top",103],["pcgeeks-games.com",103],["resizer.myct.jp",104],["gametohkenranbu.sakuraweb.com",105],["jisakuhibi.jp",106],["rank1-media.com",106],["lifematome.blog",107],["fm.sekkaku.net",108],["free-avx.jp",109],["dvdrev.com",110],["betweenjpandkr.blog",111],["nft-media.net",112],["ghacks.net",113],["songspk2.info",114],["truyentranhfull.net",115],["fcportables.com",115],["repack-games.com",115],["ibooks.to",115],["blog.tangwudi.com",115],["zoechip.com",116],["nohost.one",116],["vidbinge.com",116],["nectareousoverelate.com",118],["khoaiphim.com",119],["haafedk2.com",120],["fordownloader.com",120],["jovemnerd.com.br",121],["totalcsgo.com",122],["vivamax.asia",123],["manysex.com",124],["gaminginfos.com",125],["tinxahoivn.com",126],["automoto.it",127],["codelivly.com",128],["lordchannel.com",129],["client.falixnodes.net",130],["novelhall.com",131],["abc17news.com",132],["bailiwickexpress.com",132],["barnsleychronicle.com",132],["chaptercheats.com",132],["commercialobserver.com",132],["competentedigitale.ro",132],["freeconvert.com",132],["imgur.com",132],["kion546.com",132],["localnews8.com",132],["lonestarlive.com",132],["madeeveryday.com",132],["maidenhead-advertiser.co.uk",132],["makeuseof.com",132],["mardomreport.net",132],["melangery.com",132],["milestomemories.com",132],["modernmom.com",132],["momtastic.com",132],["mostlymorgan.com",132],["motherwellmag.com",132],["movieweb.com",132],["muddybootsanddiamonds.com",132],["musicfeeds.com.au",132],["mylifefromhome.com",132],["nationalreview.com",132],["neoskosmos.com",132],["nordot.app",132],["nothingbutnewcastle.com",132],["nsjonline.com",132],["oakvillenews.org",132],["observer.com",132],["ourlittlesliceofheaven.com",132],["palachinkablog.com",132],["patheos.com",132],["pinkonthecheek.com",132],["politicususa.com",132],["predic.ro",132],["puckermom.com",132],["qtoptens.com",132],["realgm.com",132],["reelmama.com",132],["robbreport.com",132],["royalmailchat.co.uk",132],["samchui.com",132],["sandrarose.com",132],["screenrant.com",132],["sherdog.com",132],["sidereel.com",132],["silive.com",132],["simpleflying.com",132],["sloughexpress.co.uk",132],["spacenews.com",132],["sportsgamblingpodcast.com",132],["spotofteadesigns.com",132],["stacysrandomthoughts.com",132],["ssnewstelegram.com",132],["superherohype.com",132],["tablelifeblog.com",132],["thebeautysection.com",132],["thecelticblog.com",132],["thecurvyfashionista.com",132],["thefashionspot.com",132],["thegamer.com",132],["thegamescabin.com",132],["thenerdyme.com",132],["thenonconsumeradvocate.com",132],["theprudentgarden.com",132],["thethings.com",132],["timesnews.net",132],["topspeed.com",132],["toyotaklub.org.pl",132],["travelingformiles.com",132],["tutsnode.org",132],["viralviralvideos.com",132],["wannacomewith.com",132],["wimp.com",[132,134]],["windsorexpress.co.uk",132],["woojr.com",132],["worldoftravelswithkids.com",132],["worldsurfleague.com",132],["xda-developers.com",132],["adoredbyalex.com",132],["agrodigital.com",[132,134]],["al.com",[132,134]],["aliontherunblog.com",[132,134]],["allaboutthetea.com",[132,134]],["allmovie.com",[132,134]],["allmusic.com",[132,134]],["allthingsthrifty.com",[132,134]],["amessagewithabottle.com",[132,134]],["androidpolice.com",132],["antyradio.pl",132],["artforum.com",[132,134]],["artnews.com",[132,134]],["awkward.com",[132,134]],["awkwardmom.com",[132,134]],["becomingpeculiar.com",132],["bethcakes.com",[132,134]],["blogher.com",[132,134]],["bluegraygal.com",[132,134]],["briefeguru.de",[132,134]],["carmagazine.co.uk",132],["cattime.com",132],["cbr.com",132],["cleveland.com",[132,134]],["collider.com",132],["comingsoon.net",132],["crafty.house",132],["dailyvoice.com",[132,134]],["decider.com",[132,134]],["didyouknowfacts.com",[132,134]],["dogtime.com",[132,134]],["dualshockers.com",132],["dustyoldthing.com",132],["faithhub.net",132],["femestella.com",[132,134]],["footwearnews.com",[132,134]],["frogsandsnailsandpuppydogtail.com",[132,134]],["fsm-media.com",132],["funtasticlife.com",[132,134]],["fwmadebycarli.com",[132,134]],["gamerant.com",132],["gfinityesports.com",132],["givemesport.com",132],["gulflive.com",[132,134]],["helloflo.com",132],["homeglowdesign.com",[132,134]],["honeygirlsworld.com",[132,134]],["hotcars.com",132],["howtogeek.com",132],["insider-gaming.com",132],["insurancejournal.com",132],["jasminemaria.com",[132,134]],["lehighvalleylive.com",[132,134]],["lettyskitchen.com",[132,134]],["lifeinleggings.com",[132,134]],["liveandletsfly.com",132],["lizzieinlace.com",[132,134]],["masslive.com",[132,134,235]],["mlive.com",[132,134]],["nj.com",[132,134]],["oregonlive.com",[132,134]],["pagesix.com",[132,134,235]],["pennlive.com",[132,134,235]],["sheknows.com",[132,134]],["syracuse.com",[132,134,235]],["tvline.com",[132,134]],["cheatsheet.com",133],["pwinsider.com",133],["baeldung.com",133],["mensjournal.com",133],["15min.lt",134],["247sports.com",[134,235]],["betweenenglandandiowa.com",134],["bgr.com",134],["blazersedge.com",134],["blu-ray.com",134],["brobible.com",134],["cagesideseats.com",134],["cbsnews.com",[134,235]],["cbssports.com",[134,235]],["celiacandthebeast.com",134],["dailykos.com",134],["eater.com",134],["eldiariony.com",134],["free-power-point-templates.com",134],["golfdigest.com",134],["ibtimes.co.in",134],["inc.com",134],["indiewire.com",[134,235]],["inquisitr.com",134],["intouchweekly.com",134],["kcrg.com",134],["kentucky.com",134],["knowyourmeme.com",134],["last.fm",134],["lifeandstylemag.com",134],["mandatory.com",134],["nationalpost.com",134],["nbcsports.com",134],["news.com.au",134],["ninersnation.com",134],["nypost.com",[134,235]],["playstationlifestyle.net",134],["rollingstone.com",134],["sbnation.com",134],["sneakernews.com",134],["sport-fm.gr",134],["stylecaster.com",134],["tastingtable.com",134],["thecw.com",134],["thedailymeal.com",134],["theflowspace.com",134],["themarysue.com",134],["torontosun.com",134],["usmagazine.com",134],["wallup.net",134],["worldstar.com",134],["worldstarhiphop.com",134],["yourcountdown.to",134],["bagi.co.in",135],["keran.co",135],["biblestudytools.com",136],["christianheadlines.com",136],["ibelieve.com",136],["kuponigo.com",137],["kimcilonly.site",138],["kimcilonly.link",138],["cryptoearns.com",139],["inxxx.com",140],["ipaspot.app",141],["embedwish.com",142],["filelions.live",142],["leakslove.net",142],["jenismac.com",143],["vxetable.cn",144],["jewelavid.com",145],["nizarstream.com",145],["snapwordz.com",146],["toolxox.com",146],["rl6mans.com",146],["idol69.net",146],["plumbersforums.net",147],["gulio.site",148],["mediaset.es",149],["updatewallah.in",149],["izlekolik.net",150],["donghuaworld.com",151],["letsdopuzzles.com",152],["rediff.com",153],["dzapk.com",154],["darknessporn.com",155],["familyporner.com",155],["freepublicporn.com",155],["pisshamster.com",155],["punishworld.com",155],["xanimu.com",155],["pig69.com",156],["cosplay18.pics",156],["sexwebvideo.com",156],["sexwebvideo.net",156],["tainio-mania.online",157],["javhdo.net",158],["eroticmoviesonline.me",159],["teleclub.xyz",160],["ecamrips.com",161],["showcamrips.com",161],["tucinehd.com",162],["9animetv.to",163],["qiwi.gg",164],["jornadaperfecta.com",165],["loseart.com",166],["sousou-no-frieren.com",167],["unite-guide.com",168],["thebullspen.com",169],["receitasdaora.online",170],["streambucket.net",172],["nontongo.win",172],["player.smashy.stream",173],["player.smashystream.com",173],["hentaihere.com",173],["cineb.rs",175],["123animehub.cc",175],["hiraethtranslation.com",176],["d0000d.com",177],["d000d.com",177],["d0o0d.com",177],["do0od.com",177],["doods.pro",177],["dooodster.com",177],["ds2play.com",177],["ds2video.com",177],["xfreehd.com",178],["freethesaurus.com",179],["thefreedictionary.com",179],["dexterclearance.com",180],["x86.co.kr",181],["onlyfaucet.com",182],["x-x-x.tube",183],["visionpapers.org",184],["fdownloader.net",185],["thehackernews.com",186],["mielec.pl",187],["treasl.com",188],["mrbenne.com",189],["cnpics.org",190],["ovabee.com",190],["porn4f.com",190],["cnxx.me",190],["ai18.pics",190],["sportsonline.si",191],["fiuxy2.co",192],["animeunity.to",193],["tokopedia.com",194],["remixsearch.net",195],["remixsearch.es",195],["onlineweb.tools",195],["sharing.wtf",195],["2024tv.ru",196],["xnxxcom.xyz",197],["sportsurge.net",198],["joyousplay.xyz",198],["quest4play.xyz",[198,200]],["generalpill.net",198],["moneycontrol.com",199],["cookiewebplay.xyz",200],["ilovetoplay.xyz",200],["streamcaster.live",200],["weblivehdplay.ru",200],["oaaxpgp3.xyz",201],["m9.news",202],["callofwar.com",203],["secondhandsongs.com",204],["nudezzers.org",205],["send.cm",206],["send.now",206],["3rooodnews.net",207],["xxxbfvideo.net",208],["filmy4wap.co.in",209],["filmy4waps.org",209],["gameshop4u.com",210],["regenzi.site",210],["handirect.fr",211],["animefenix.tv",212],["fsiblog3.club",213],["kamababa.desi",213],["atlasstudiousa.com",214],["getfiles.co.uk",215],["genelify.com",216],["dhtpre.com",217],["xbaaz.com",218],["lineupexperts.com",220],["fearmp4.ru",221],["sportnews.to",222],["thesciencetoday.com",222],["ghbrisk.com",224],["bacasitus.com",225],["katoikos.world",225],["botcomics.com",226],["cefirates.com",226],["chandlerorchards.com",226],["comicleaks.com",226],["marketdata.app",226],["monumentmetals.com",226],["tapmyback.com",226],["ping.gg",226],["revistaferramental.com.br",226],["hawpar.com",226],["alpacafinance.org",[226,227]],["nookgaming.com",226],["enkeleksamen.no",226],["kvest.ee",226],["creatordrop.com",226],["panpots.com",226],["cybernetman.com",226],["bitdomain.biz",226],["gerardbosch.xyz",226],["fort-shop.kiev.ua",226],["accuretawealth.com",226],["resourceya.com",226],["tracktheta.com",226],["camberlion.com",226],["replai.io",226],["trybawaryjny.pl",226],["segops.madisonspecs.com",226],["stresshelden-coaching.de",226],["controlconceptsusa.com",226],["ryaktive.com",226],["tip.etip-staging.etip.io",226],["tt.live",227],["future-fortune.com",227],["adventuretix.com",227],["bolighub.dk",227],["panprices.com",228],["intercity.technology",228],["freelancer.taxmachine.be",228],["adria.gg",228],["fjlaboratories.com",228],["emanualonline.com",228],["abhijith.page",228],["helpmonks.com",228],["dataunlocker.com",229],["proboards.com",230],["winclassic.net",230],["pandadoc.com",232],["infinityscans.xyz",233],["infinityscans.org",233],["abema.tv",236]]);

const entitiesMap = new Map([["wawacity",4],["720pstream",[4,59]],["vidsrc",[4,14,59]],["extreme-down",4],["flix-wave",4],["mixdrop",[4,15]],["sanet",4],["sportshd",4],["userupload",6],["pahe",[7,15,61]],["soap2day",7],["reset-scans",9],["poplinks",[9,36]],["mhdsports",9],["mhdsportstv",9],["mhdtvsports",9],["mhdtvworld",9],["mhdtvmax",9],["mhdstream",9],["hqq",10],["waaw",10],["pixhost",12],["viprow",[14,15,59]],["bluemediadownload",14],["bluemediafile",14],["bluemedialink",14],["bluemediastorage",14],["bluemediaurls",14],["urlbluemedia",14],["cloudvideotv",[14,59]],["123-movies",15],["123movieshd",15],["123movieshub",15],["123moviesme",15],["1337x",[15,174]],["1stream",15],["1tamilmv",15],["2ddl",15],["2umovies",15],["3hiidude",15],["4stream",15],["5movies",15],["7hitmovies",15],["9xmovie",15],["aagmaal",[15,59]],["adblockeronstape",[15,51]],["adblockeronstreamtape",15],["adblockplustape",[15,51]],["adblockstreamtape",[15,51]],["adblockstrtape",[15,51]],["adblockstrtech",[15,51]],["adblocktape",[15,51]],["adcorto",15],["alexsports",15],["alexsportss",15],["alexsportz",15],["animepahe",15],["animesanka",15],["animixplay",15],["aniplay",15],["antiadtape",[15,51]],["asianclub",15],["ask4movie",15],["atomixhq",[15,59]],["atomohd",15],["beinmatch",[15,21]],["bhaai",15],["blurayufr",15],["buffstreams",15],["canalesportivo",15],["clickndownload",15],["clicknupload",15],["daddylive",[15,59]],["daddylivehd",[15,59]],["ddrmovies",15],["desiremovies",15],["devlib",15],["divxtotal",15],["divxtotal1",15],["dlhd",15],["dvdplay",[15,59]],["elixx",15],["enjoy4k",15],["estrenosflix",15],["estrenosflux",15],["estrenosgo",15],["f1stream",15],["fbstream",15],["file4go",15],["filmyzilla",[15,59]],["findav",15],["findporn",15],["flixmaza",15],["flizmovies",15],["freetvsports",15],["fullymaza",15],["g3g",15],["gotxx",15],["grantorrent",15],["hdmoviesfair",[15,59]],["hdmoviesflix",15],["hiidudemoviez",15],["imgsen",15],["imgsto",15],["incest",15],["incestflix",15],["itopmusic",15],["javmost",15],["keeplinks",15],["keepvid",15],["keralahd",15],["khatrimazaful",15],["khatrimazafull",15],["leechall",15],["linkshorts",15],["mangovideo",15],["masaporn",15],["miniurl",15],["mirrorace",15],["mixdroop",15],["mkvcage",15],["mlbstream",15],["mlsbd",15],["mmsbee",15],["motogpstream",15],["movieplex",15],["movierulzlink",15],["movies123",15],["moviesflix",15],["moviesmeta",15],["moviessources",15],["moviesverse",15],["moviezwaphd",15],["mrunblock",15],["nbastream",15],["newmovierulz",15],["nflstream",15],["nhlstream",15],["noblocktape",[15,51]],["nocensor",15],["onlyfams",15],["ouo",15],["pctfenix",[15,59]],["pctnew",[15,59]],["peliculas24",15],["pelisplus",15],["piratebay",15],["plyjam",15],["plylive",15],["plyvdo",15],["pornhoarder",[15,219]],["prbay",15],["projectfreetv",15],["proxybit",15],["psarips",15],["racaty",15],["remaxhd",15],["rintor",15],["rnbxclusive",15],["rnbxclusive0",15],["rnbxclusive1",15],["rojadirecta",15],["rojadirectaenvivo",15],["rugbystreams",15],["sadisflix",15],["safetxt",15],["shadowrangers",15],["shahi4u",15],["shahid4u1",15],["shahid4uu",15],["shavetape",15],["shortearn",15],["shorten",15],["shorttey",15],["shortzzy",15],["skymovieshd",15],["socceronline",[15,59]],["softarchive",15],["sports-stream",15],["sporttuna",15],["sshhaa",15],["stapadblockuser",[15,51]],["stape",[15,51]],["stapewithadblock",15],["starmusiq",15],["strcloud",[15,51]],["streamadblocker",[15,51,59]],["streamadblockplus",[15,51]],["streamcdn",15],["streamhub",15],["streamsport",15],["streamta",[15,51]],["streamtape",[15,51]],["streamtapeadblockuser",[15,51]],["strikeout",15],["strtape",[15,51]],["strtapeadblock",[15,51]],["strtapeadblocker",[15,51]],["strtapewithadblock",15],["strtpe",[15,51]],["swatchseries",15],["tabooflix",15],["tennisstreams",15],["themoviesflix",15],["thepiratebay",15],["tmearn",15],["toonanime",15],["torlock",15],["tormalayalam",15],["torrentz2eu",15],["tutelehd",15],["tvply",15],["u4m",15],["ufcstream",15],["unblocknow",15],["uploadbuzz",15],["usagoals",15],["vexmoviex",15],["vidclouds",15],["vidlox",15],["vipbox",[15,59]],["vipboxtv",[15,59]],["vipleague",15],["watch-series",15],["watchseries",15],["xclusivejams",15],["xmoviesforyou",15],["youdbox",15],["ytmp3eu",15],["yts-subs",15],["yts",15],["zooqle",15],["dutchycorp",16],["mydverse",34],["shrinke",43],["shrinkme",43],["livecamrips",43],["stfly",47],["stly",47],["ftuapps",49],["showflix",49],["dropgalaxy",50],["bollyflix",52],["daddylive1",52],["esportivos",52],["poscitechs",52],["nekopoi",53],["123movies",59],["123moviesla",59],["123movieweb",59],["2embed",59],["9xmovies",59],["adshort",59],["allmovieshub",59],["asianplay",59],["atishmkv",59],["bflix",59],["cricstream",59],["crictime",59],["dood",[59,177]],["dooood",[59,177]],["extramovies",59],["faselhd",59],["faselhds",59],["filemoon",59],["filmy",59],["filmyhit",59],["filmywap",59],["fmovies",59],["gdplayer",59],["goku",59],["gomovies",59],["gowatchseries",59],["hdfungamezz",59],["hindilinks4u",59],["hurawatch",59],["jalshamoviezhd",59],["livecricket",59],["mhdsport",59],["mkvcinemas",[59,175]],["movies2watch",59],["moviespapa",59],["mp4moviez",59],["mydownloadtube",59],["nuroflix",59],["o2tvseries",59],["o2tvseriesz",59],["pirlotv",59],["poscitech",59],["primewire",59],["redecanais",59],["serienstream",59],["sflix",59],["shahed4u",59],["shaheed4u",59],["speedostream",59],["sportcast",59],["sportskart",59],["streamingcommunity",[59,61,73]],["tamilarasan",59],["tamilfreemp3songs",59],["tamilprinthd",59],["torrentdosfilmes",59],["tubemate",59],["uploadrar",59],["uqload",59],["vidcloud9",59],["vido",59],["vidoo",59],["vudeo",59],["vumoo",59],["watchomovies",[59,71]],["yesmovies",59],["kickassanime",60],["11xmovies",61],["fzmovies",61],["linkz",61],["myflixer",61],["prmovies",61],["streamblasters",61],["filecrypt",61],["kickass",62],["cine-calidad",69],["woxikon",83],["teluguflix",96],["actvid",116],["torrentdownload",175],["doodstream",177]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeNodeText(
    nodeName,
    includes,
    ...extraArgs
) {
    replaceNodeTextFn(nodeName, '', '', 'includes', includes || '', ...extraArgs);
}

function replaceNodeTextFn(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('replace-node-text.fn', ...Array.from(arguments));
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const reIncludes = extraArgs.includes || extraArgs.condition
        ? safe.patternToRegex(extraArgs.includes || extraArgs.condition, 'ms')
        : null;
    const reExcludes = extraArgs.excludes
        ? safe.patternToRegex(extraArgs.excludes, 'ms')
        : null;
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Quitting');
        }
    };
    const textContentFactory = (( ) => {
        const out = { createScript: s => s };
        const { trustedTypes: tt } = self;
        if ( tt instanceof Object ) {
            if ( typeof tt.getPropertyType === 'function' ) {
                if ( tt.getPropertyType('script', 'textContent') === 'TrustedScript' ) {
                    return tt.createPolicy(getRandomToken(), out);
                }
            }
        }
        return out;
    })();
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( reIncludes ) {
            reIncludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reIncludes, before) === false ) { return true; }
        }
        if ( reExcludes ) {
            reExcludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reExcludes, before) ) { return true; }
        }
        rePattern.lastIndex = 0;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = node.nodeName === 'SCRIPT'
            ? textContentFactory.createScript(after)
            : after;
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Text before:\n${before.trim()}`);
        }
        safe.uboLog(logPrefix, `Text after:\n${after.trim()}`);
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( node === document.currentScript ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        safe.uboLog(logPrefix, `${count} nodes present before installing mutation observer`);
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
}

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { removeNodeText(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_removeNodeText();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
