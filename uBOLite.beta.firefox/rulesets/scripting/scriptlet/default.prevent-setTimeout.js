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
const uBOL_preventSetTimeout = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["displayAdBlockedVideo"],["isDesktopApp","1000"],["Bait"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["mdp"],["brave_load_popup"],["0x","3000"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["t()","0"],["$"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["/^/","1000"],["displayAdBlockerMessage"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["blooket-answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["afterOpen"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["data-google-query-id"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["googleFC"],[")](this,..."]];

const hostnamesMap = new Map([["4-liga.com",0],["4fansites.de",0],["4players.de",0],["9monate.de",0],["aachener-nachrichten.de",0],["aachener-zeitung.de",0],["abendblatt.de",0],["abendzeitung-muenchen.de",0],["about-drinks.com",0],["abseits-ka.de",0],["airliners.de",0],["ajaxshowtime.com",0],["allgemeine-zeitung.de",0],["alpin.de",0],["antenne.de",0],["arcor.de",0],["areadvd.de",0],["areamobile.de",0],["ariva.de",0],["astronews.com",0],["aussenwirtschaftslupe.de",0],["auszeit.bio",0],["auto-motor-und-sport.de",0],["auto-service.de",0],["autobild.de",0],["autoextrem.de",0],["autopixx.de",0],["autorevue.at",0],["az-online.de",0],["baby-vornamen.de",0],["babyclub.de",0],["bafoeg-aktuell.de",0],["berliner-kurier.de",0],["berliner-zeitung.de",0],["bigfm.de",0],["bikerszene.de",0],["bildderfrau.de",0],["blackd.de",0],["blick.de",0],["boerse-online.de",0],["boerse.de",0],["boersennews.de",0],["braunschweiger-zeitung.de",0],["brieffreunde.de",0],["brigitte.de",0],["buerstaedter-zeitung.de",0],["buffed.de",0],["businessinsider.de",0],["buzzfeed.at",0],["buzzfeed.de",0],["caravaning.de",0],["cavallo.de",0],["chefkoch.de",0],["cinema.de",0],["clever-tanken.de",0],["computerbild.de",0],["computerhilfen.de",0],["comunio-cl.com",0],["connect.de",0],["chip.de",0],["da-imnetz.de",0],["dasgelbeblatt.de",0],["dbna.com",0],["dbna.de",0],["deichstube.de",0],["deine-tierwelt.de",0],["der-betze-brennt.de",0],["derwesten.de",0],["desired.de",0],["dhd24.com",0],["dieblaue24.com",0],["digitalfernsehen.de",0],["dnn.de",0],["donnerwetter.de",0],["e-hausaufgaben.de",0],["e-mountainbike.com",0],["eatsmarter.de",0],["echo-online.de",0],["ecomento.de",0],["einfachschoen.me",0],["elektrobike-online.com",0],["eltern.de",0],["epochtimes.de",0],["essen-und-trinken.de",0],["express.de",0],["extratipp.com",0],["familie.de",0],["fanfiktion.de",0],["fehmarn24.de",0],["fettspielen.de",0],["fid-gesundheitswissen.de",0],["finanznachrichten.de",0],["finanztreff.de",0],["finya.de",0],["firmenwissen.de",0],["fitforfun.de",0],["fnp.de",0],["football365.fr",0],["formel1.de",0],["fr.de",0],["frankfurter-wochenblatt.de",0],["freenet.de",0],["fremdwort.de",0],["froheweihnachten.info",0],["frustfrei-lernen.de",0],["fuldaerzeitung.de",0],["funandnews.de",0],["fussballdaten.de",0],["futurezone.de",0],["gala.de",0],["gamepro.de",0],["gamersglobal.de",0],["gamesaktuell.de",0],["gamestar.de",0],["gamezone.de",0],["gartendialog.de",0],["gartenlexikon.de",0],["gedichte.ws",0],["geissblog.koeln",0],["gelnhaeuser-tageblatt.de",0],["general-anzeiger-bonn.de",0],["geniale-tricks.com",0],["genialetricks.de",0],["gesund-vital.de",0],["gesundheit.de",0],["gevestor.de",0],["gewinnspiele.tv",0],["giessener-allgemeine.de",0],["giessener-anzeiger.de",0],["gifhorner-rundschau.de",0],["giga.de",0],["gipfelbuch.ch",0],["gmuender-tagespost.de",0],["golem.de",[0,5,6]],["gruenderlexikon.de",0],["gusto.at",0],["gut-erklaert.de",0],["gutfuerdich.co",0],["hallo-muenchen.de",0],["hamburg.de",0],["hanauer.de",0],["hardwareluxx.de",0],["hartziv.org",0],["harzkurier.de",0],["haus-garten-test.de",0],["hausgarten.net",0],["haustec.de",0],["haz.de",0],["heidelberg24.de",0],["heilpraxisnet.de",0],["heise.de",0],["helmstedter-nachrichten.de",0],["hersfelder-zeitung.de",0],["hftg.co",0],["hifi-forum.de",0],["hna.de",0],["hochheimer-zeitung.de",0],["hoerzu.de",0],["hofheimer-zeitung.de",0],["iban-rechner.de",0],["ikz-online.de",0],["immobilienscout24.de",0],["ingame.de",0],["inside-digital.de",0],["inside-handy.de",0],["investor-verlag.de",0],["jappy.com",0],["jpgames.de",0],["kabeleins.de",0],["kachelmannwetter.com",0],["kamelle.de",0],["kicker.de",0],["kindergeld.org",0],["klettern-magazin.de",0],["klettern.de",0],["kochbar.de",0],["kreis-anzeiger.de",0],["kreisbote.de",0],["kreiszeitung.de",0],["ksta.de",0],["kurierverlag.de",0],["lachainemeteo.com",0],["lampertheimer-zeitung.de",0],["landwirt.com",0],["laut.de",0],["lauterbacher-anzeiger.de",0],["leckerschmecker.me",0],["leinetal24.de",0],["lesfoodies.com",0],["levif.be",0],["lifeline.de",0],["liga3-online.de",0],["likemag.com",0],["linux-community.de",0],["linux-magazin.de",0],["live.vodafone.de",0],["ln-online.de",0],["lokalo24.de",0],["lustaufsleben.at",0],["lustich.de",0],["lvz.de",0],["lz.de",0],["mactechnews.de",0],["macwelt.de",0],["macworld.co.uk",0],["mail.de",0],["main-spitze.de",0],["manager-magazin.de",0],["manga-tube.me",0],["mathebibel.de",0],["mathepower.com",0],["maz-online.de",0],["medisite.fr",0],["mehr-tanken.de",0],["mein-kummerkasten.de",0],["mein-mmo.de",0],["mein-wahres-ich.de",0],["meine-anzeigenzeitung.de",0],["meinestadt.de",0],["menshealth.de",0],["mercato365.com",0],["merkur.de",0],["messen.de",0],["metal-hammer.de",0],["metalflirt.de",0],["meteologix.com",0],["minecraft-serverlist.net",0],["mittelbayerische.de",0],["modhoster.de",0],["moin.de",0],["mopo.de",0],["morgenpost.de",0],["motor-talk.de",0],["motorbasar.de",0],["motorradonline.de",0],["motorsport-total.com",0],["motortests.de",0],["mountainbike-magazin.de",0],["moviejones.de",0],["moviepilot.de",0],["mt.de",0],["mtb-news.de",0],["musiker-board.de",0],["musikexpress.de",0],["musikradar.de",0],["mz-web.de",0],["n-tv.de",0],["naumburger-tageblatt.de",0],["netzwelt.de",0],["neuepresse.de",0],["neueroeffnung.info",0],["news.at",0],["news.de",0],["news38.de",0],["newsbreak24.de",0],["nickles.de",0],["nicknight.de",0],["nl.hardware.info",0],["nn.de",0],["nnn.de",0],["nordbayern.de",0],["notebookchat.com",0],["notebookcheck-ru.com",0],["notebookcheck-tr.com",0],["noz-cdn.de",0],["noz.de",0],["nrz.de",0],["nw.de",0],["nwzonline.de",0],["oberhessische-zeitung.de",0],["och.to",0],["oeffentlicher-dienst.info",0],["onlinekosten.de",0],["onvista.de",0],["op-marburg.de",0],["op-online.de",0],["outdoor-magazin.com",0],["outdoorchannel.de",0],["paradisi.de",0],["pc-magazin.de",0],["pcgames.de",0],["pcgameshardware.de",0],["pcwelt.de",0],["pcworld.es",0],["peiner-nachrichten.de",0],["pferde.de",0],["pietsmiet.de",0],["pixelio.de",0],["pkw-forum.de",0],["playboy.de",0],["playfront.de",0],["pnn.de",0],["pons.com",0],["prad.de",[0,114]],["prignitzer.de",0],["profil.at",0],["promipool.de",0],["promobil.de",0],["prosiebenmaxx.de",0],["psychic.de",[0,139]],["quoka.de",0],["radio.at",0],["radio.de",0],["radio.dk",0],["radio.es",0],["radio.fr",0],["radio.it",0],["radio.net",0],["radio.pl",0],["radio.pt",0],["radio.se",0],["ran.de",0],["readmore.de",0],["rechtslupe.de",0],["recording.de",0],["rennrad-news.de",0],["reuters.com",0],["reviersport.de",0],["rhein-main-presse.de",0],["rheinische-anzeigenblaetter.de",0],["rimondo.com",0],["roadbike.de",0],["roemische-zahlen.net",0],["rollingstone.de",0],["rot-blau.com",0],["rp-online.de",0],["rtl.de",[0,249]],["rtv.de",0],["rugby365.fr",0],["ruhr24.de",0],["rundschau-online.de",0],["runnersworld.de",0],["safelist.eu",0],["salzgitter-zeitung.de",0],["sat1.de",0],["sat1gold.de",0],["schoener-wohnen.de",0],["schwaebische-post.de",0],["schwarzwaelder-bote.de",0],["serienjunkies.de",0],["shz.de",0],["sixx.de",0],["skodacommunity.de",0],["smart-wohnen.net",0],["sn.at",0],["sozialversicherung-kompetent.de",0],["spiegel.de",0],["spielen.de",0],["spieletipps.de",0],["spielfilm.de",0],["sport.de",0],["sport1.de",0],["sport365.fr",0],["sportal.de",0],["spox.com",0],["stern.de",0],["stuttgarter-nachrichten.de",0],["stuttgarter-zeitung.de",0],["sueddeutsche.de",0],["svz.de",0],["szene1.at",0],["szene38.de",0],["t-online.de",0],["tagesspiegel.de",0],["taschenhirn.de",0],["techadvisor.co.uk",0],["techstage.de",0],["tele5.de",0],["teltarif.de",0],["the-voice-of-germany.de",0],["thueringen24.de",0],["tichyseinblick.de",0],["tierfreund.co",0],["tiervermittlung.de",0],["torgranate.de",0],["trend.at",0],["tv-media.at",0],["tvdigital.de",0],["tvinfo.de",0],["tvspielfilm.de",0],["tvtoday.de",0],["tz.de",0],["unicum.de",0],["unnuetzes.com",0],["unsere-helden.com",0],["unterhalt.net",0],["usinger-anzeiger.de",0],["usp-forum.de",0],["videogameszone.de",0],["vienna.at",0],["vip.de",0],["virtualnights.com",0],["vox.de",0],["wa.de",0],["wallstreet-online.de",[0,3]],["waz.de",0],["weather.us",0],["webfail.com",0],["weihnachten.me",0],["weihnachts-bilder.org",0],["weihnachts-filme.com",0],["welt.de",0],["weltfussball.at",0],["weristdeinfreund.de",0],["werkzeug-news.de",0],["werra-rundschau.de",0],["wetterauer-zeitung.de",0],["wiesbadener-kurier.de",0],["wiesbadener-tagblatt.de",0],["winboard.org",0],["windows-7-forum.net",0],["winfuture.de",[0,245]],["wintotal.de",0],["wlz-online.de",0],["wn.de",0],["wohngeld.org",0],["wolfenbuetteler-zeitung.de",0],["wolfsburger-nachrichten.de",0],["woman.at",0],["womenshealth.de",0],["wormser-zeitung.de",0],["woxikon.de",0],["wp.de",0],["wr.de",0],["yachtrevue.at",0],["ze.tt",0],["zeit.de",0],["meineorte.com",1],["osthessen-news.de",1],["techadvisor.com",1],["focus.de",1],["m.timesofindia.com",4],["timesofindia.indiatimes.com",4],["youmath.it",4],["redensarten-index.de",4],["lesoir.be",4],["electriciansforums.net",4],["keralatelecom.info",4],["universegunz.net",4],["happypenguin.altervista.org",4],["everyeye.it",4],["bluedrake42.com",4],["supermarioemulator.com",4],["futbollibrehd.com",4],["eska.pl",4],["eskarock.pl",4],["voxfm.pl",4],["mathaeser.de",4],["betaseries.com",4],["free-sms-receive.com",4],["sms-receive-online.com",4],["hdbox.ws",6],["todopolicia.com",6],["scat.gold",6],["freecoursesite.com",6],["windowcleaningforums.co.uk",6],["cruisingearth.com",6],["hobby-machinist.com",6],["freegogpcgames.com",6],["latitude.to",6],["kitchennovel.com",6],["w3layouts.com",6],["blog.receivefreesms.co.uk",6],["eductin.com",6],["dealsfinders.blog",6],["audiobooks4soul.com",6],["tinhocdongthap.com",6],["sakarnewz.com",6],["downloadr.in",6],["topcomicporno.com",6],["dongknows.com",6],["celtadigital.com",6],["iptvrun.com",6],["adsup.lk",6],["cryptomonitor.in",6],["areatopik.com",6],["cardscanner.co",6],["nullforums.net",6],["courseclub.me",6],["tamarindoyam.com",6],["jeep-cj.com",6],["choiceofmods.com",6],["myqqjd.com",6],["ssdtop.com",6],["apkhex.com",6],["gezegenforum.com",6],["iptvapps.net",6],["null-scripts.net",6],["nullscripts.net",6],["bloground.ro",6],["witcherhour.com",6],["ottverse.com",6],["torrentmac.net",6],["mazakony.com",6],["laptechinfo.com",6],["mc-at.org",6],["playstationhaber.com",6],["seriesperu.com",6],["pesprofessionals.com",6],["wpsimplehacks.com",6],["sportshub.to",[6,244]],["topsporter.net",[6,244]],["darkwanderer.net",6],["truckingboards.com",6],["coldfrm.org",6],["azrom.net",6],["freepatternsarea.com",6],["alttyab.net",6],["hq-links.com",6],["mobilkulup.com",6],["esopress.com",6],["nesiaku.my.id",6],["jipinsoft.com",6],["surfsees.com",6],["truthnews.de",6],["farsinama.com",6],["worldofiptv.com",6],["vuinsider.com",6],["crazydl.net",6],["gamemodsbase.com",6],["babiato.tech",6],["secuhex.com",6],["turkishaudiocenter.com",6],["galaxyos.net",6],["bizdustry.com",6],["storefront.com.ng",6],["pkbiosfix.com",6],["casi3.xyz",6],["starleaks.org",6],["mediafire.com",7],["wcoanimedub.tv",8],["wcoforever.net",8],["openspeedtest.com",8],["addtobucketlist.com",8],["3dzip.org",[8,70]],["ilmeteo.it",8],["wcoforever.com",8],["comprovendolibri.it",8],["healthelia.com",8],["keephealth.info",9],["anghami.com",11],["wired.com",12],["tutele.sx",13],["katestube.com",14],["short.pe",14],["footystreams.net",14],["seattletimes.com",15],["bestgames.com",16],["yiv.com",16],["globalrph.com",17],["e-glossa.it",18],["webcheats.com.br",19],["gala.fr",21],["gentside.com",21],["geo.fr",21],["hbrfrance.fr",21],["nationalgeographic.fr",21],["ohmymag.com",21],["serengo.net",21],["vsd.fr",21],["updato.com",[22,39]],["methbox.com",23],["daizurin.com",23],["pendekarsubs.us",23],["dreamfancy.org",23],["rysafe.blogspot.com",23],["techacode.com",23],["toppng.com",23],["th-world.com",23],["avjamack.com",23],["avjamak.net",23],["dlhd.sx",24],["embedstream.me",24],["yts-subs.net",24],["cnnamador.com",25],["nudecelebforum.com",26],["pronpic.org",27],["thewebflash.com",28],["discordfastfood.com",28],["xup.in",28],["popularmechanics.com",29],["op.gg",30],["lequipe.fr",31],["comunidadgzone.es",32],["mp3fy.com",32],["lebensmittelpraxis.de",32],["ebookdz.com",32],["forum-pokemon-go.fr",32],["praxis-jugendarbeit.de",32],["dictionnaire-medical.net",32],["cle0desktop.blogspot.com",32],["up-load.io",32],["direct-link.net",32],["direkt-wissen.com",32],["keysbrasil.blogspot.com",32],["hotpress.info",32],["turkleech.com",32],["anibatch.me",32],["anime-i.com",32],["healthtune.site",32],["gewinde-normen.de",32],["tucinehd.com",32],["plex-guide.de",32],["jellynote.com",33],["eporner.com",35],["pornbimbo.com",36],["4j.com",36],["avoiderrors.com",37],["sitarchive.com",37],["livenewsof.com",37],["topnewsshow.com",37],["gatcha.org",37],["empregoestagios.com",37],["everydayonsales.com",37],["kusonime.com",37],["suicidepics.com",37],["codesnail.com",37],["codingshiksha.com",37],["graphicux.com",37],["asyadrama.com",37],["bitcoinegypt.news",37],["citychilli.com",37],["talkjarvis.com",37],["hdmotori.it",38],["femdomtb.com",40],["camhub.cc",40],["bobs-tube.com",40],["pornfd.com",40],["popno-tour.net",40],["molll.mobi",40],["watchmdh.to",40],["camwhores.tv",40],["elfqrin.com",41],["satcesc.com",42],["apfelpatient.de",42],["lusthero.com",43],["m2list.com",44],["embed.nana2play.com",44],["elahmad.com",44],["dofusports.xyz",44],["dallasnews.com",45],["lnk.news",46],["lnk.parts",46],["efukt.com",47],["wendycode.com",47],["springfieldspringfield.co.uk",48],["porndoe.com",49],["smsget.net",[50,51]],["kjanime.net",52],["gioialive.it",53],["classicreload.com",54],["scriptzhub.com",54],["hotpornfile.org",55],["coolsoft.altervista.org",55],["hackedonlinegames.com",55],["dailytech-news.eu",55],["settlersonlinemaps.com",55],["ad-doge.com",55],["magdownload.org",55],["kpkuang.org",55],["shareus.site",55],["crypto4yu.com",55],["faucetwork.space",55],["thenightwithoutthedawn.blogspot.com",55],["entutes.com",55],["claimlite.club",55],["newscon.org",55],["chicoer.com",56],["bostonherald.com",56],["dailycamera.com",56],["maxcheaters.com",57],["rbxoffers.com",57],["postimees.ee",57],["police.community",57],["gisarea.com",57],["schaken-mods.com",57],["tvnet.lv",57],["theclashify.com",57],["txori.com",57],["olarila.com",57],["deletedspeedstreams.blogspot.com",57],["schooltravelorganiser.com",57],["xhardhempus.net",57],["mhn.quest",57],["leagueofgraphs.com",57],["hieunguyenphoto.com",57],["benzinpreis.de",57],["sportsplays.com",58],["pornvideotop.com",60],["krotkoosporcie.pl",60],["xstory-fr.com",60],["deinesexfilme.com",61],["einfachtitten.com",61],["halloporno.com",61],["herzporno.com",61],["lesbenhd.com",61],["milffabrik.com",[61,217]],["porn-monkey.com",61],["porndrake.com",61],["pornhubdeutsch.net",61],["pornoaffe.com",61],["pornodavid.com",61],["pornoente.tv",[61,217]],["pornofisch.com",61],["pornofelix.com",61],["pornohammer.com",61],["pornohelm.com",61],["pornoklinge.com",61],["pornotom.com",[61,217]],["pornotommy.com",61],["pornovideos-hd.com",61],["pornozebra.com",[61,217]],["xhamsterdeutsch.xyz",61],["xnxx-sexfilme.com",61],["zerion.cc",61],["letribunaldunet.fr",62],["vladan.fr",62],["live-tv-channels.org",63],["eslfast.com",64],["freegamescasual.com",65],["tcpvpn.com",66],["oko.sh",66],["timesnownews.com",66],["timesnowhindi.com",66],["timesnowmarathi.com",66],["zoomtventertainment.com",66],["tsubasa.im",67],["sholah.net",68],["2rdroid.com",68],["bisceglielive.it",69],["pandajogosgratis.com.br",71],["5278.cc",72],["tonspion.de",74],["duplichecker.com",75],["plagiarismchecker.co",75],["plagiarismdetector.net",75],["searchenginereports.net",75],["giallozafferano.it",76],["autojournal.fr",76],["autoplus.fr",76],["sportauto.fr",76],["linkspaid.com",77],["proxydocker.com",77],["beeimg.com",[78,79]],["emturbovid.com",79],["findjav.com",79],["javggvideo.xyz",79],["mmtv01.xyz",79],["stbturbo.xyz",79],["streamsilk.com",79],["ftlauderdalebeachcam.com",80],["ftlauderdalewebcam.com",80],["juneauharborwebcam.com",80],["keywestharborwebcam.com",80],["kittycatcam.com",80],["mahobeachcam.com",80],["miamiairportcam.com",80],["morganhillwebcam.com",80],["njwildlifecam.com",80],["nyharborwebcam.com",80],["paradiseislandcam.com",80],["pompanobeachcam.com",80],["portbermudawebcam.com",80],["portcanaveralwebcam.com",80],["portevergladeswebcam.com",80],["portmiamiwebcam.com",80],["portnywebcam.com",80],["portnassauwebcam.com",80],["portstmaartenwebcam.com",80],["portstthomaswebcam.com",80],["porttampawebcam.com",80],["sxmislandcam.com",80],["themes-dl.com",80],["badassdownloader.com",80],["badasshardcore.com",80],["badassoftcore.com",80],["nulljungle.com",80],["teevee.asia",80],["otakukan.com",80],["gearingcommander.com",82],["generate.plus",83],["calculate.plus",83],["avcesar.com",84],["audiotag.info",85],["tudigitale.it",86],["ibcomputing.com",87],["legia.net",88],["acapellas4u.co.uk",89],["robloxscripts.com",90],["libreriamo.it",90],["postazap.com",90],["medebooks.xyz",90],["mashtips.com",90],["marriedgames.com.br",90],["4allprograms.me",90],["nurgsm.com",90],["certbyte.com",90],["plugincrack.com",90],["gamingdeputy.com",90],["freewebcart.com",90],["streamhentaimovies.com",91],["konten.co.id",92],["diariodenavarra.es",93],["scripai.com",93],["myfxbook.com",93],["whatfontis.com",93],["tubereader.me",93],["xiaomifans.pl",94],["eletronicabr.com",94],["optifine.net",95],["luzernerzeitung.ch",96],["tagblatt.ch",96],["spellcheck.net",97],["spellchecker.net",97],["spellweb.com",97],["ableitungsrechner.net",98],["alternet.org",99],["gourmetsupremacy.com",99],["shrib.com",100],["pandafiles.com",101],["vidia.tv",[101,120]],["hortonanderfarom.blogspot.com",101],["coolcast2.com",102],["techclips.net",102],["earthquakecensus.com",102],["footyhunter.lol",102],["gamerarcades.com",102],["poscitech.click",102],["starlive.stream",102],["utopianwilderness.com",102],["wecast.to",102],["sportbar.live",102],["tunovelaligera.com",103],["tapchipi.com",103],["cuitandokter.com",103],["tech-blogs.com",103],["cardiagn.com",103],["dcleakers.com",103],["esgeeks.com",103],["pugliain.net",103],["uplod.net",103],["worldfreeware.com",103],["fikiri.net",103],["myhackingworld.com",103],["phoenixfansub.com",103],["freecourseweb.com",104],["devcourseweb.com",104],["coursewikia.com",104],["courseboat.com",104],["coursehulu.com",104],["lne.es",107],["pornult.com",108],["webcamsdolls.com",108],["bitcotasks.com",[108,155]],["adsy.pw",108],["playstore.pw",108],["exactpay.online",108],["thothd.to",108],["proplanta.de",109],["hydrogenassociation.org",110],["ludigames.com",110],["made-by.org",110],["xenvn.com",110],["worldtravelling.com",110],["igirls.in",110],["technichero.com",110],["roshiyatech.my.id",110],["24sport.stream",110],["androidadult.com",110],["aeroxplorer.com",110],["sportitalialive.com",110],["mad4wheels.com",111],["logi.im",111],["emailnator.com",111],["textograto.com",112],["voyageforum.com",113],["hmc-id.blogspot.com",113],["myabandonware.com",113],["ilforumdeibrutti.is",113],["chatta.it",115],["ketubanjiwa.com",116],["nsfw247.to",117],["funzen.net",117],["ilclubdellericette.it",117],["extremereportbot.com",118],["getintopc.com",119],["qoshe.com",121],["lowellsun.com",122],["mamadu.pl",122],["dobrapogoda24.pl",122],["motohigh.pl",122],["namasce.pl",122],["ultimate-catch.eu",123],["cpopchanelofficial.com",124],["creditcardgenerator.com",125],["creditcardrush.com",125],["bostoncommons.net",125],["thejobsmovie.com",125],["livsavr.co",125],["hl-live.de",126],["satoshi-win.xyz",126],["encurtandourl.com",[126,132]],["freesoft.id",126],["zcteam.id",126],["www-daftarharga.blogspot.com",126],["ear-phone-review.com",126],["telefullenvivo.com",126],["listatv.pl",126],["daemon-hentai.com",[126,262]],["coin-profits.xyz",126],["relampagomovies.com",126],["wohnmobilforum.de",126],["nulledbear.com",126],["sinnerclownceviri.net",126],["nilopolisonline.com.br",127],["mesquitaonline.com",127],["yellowbridge.com",127],["socialgirls.im",128],["yaoiotaku.com",129],["camhub.world",130],["moneyhouse.ch",131],["ihow.info",132],["filesus.com",132],["sturls.com",132],["re.two.re",132],["turbo1.co",132],["cartoonsarea.xyz",132],["hartico.tv",132],["valeronevijao.com",133],["cigarlessarefy.com",133],["figeterpiazine.com",133],["yodelswartlike.com",133],["generatesnitrosate.com",133],["crownmakermacaronicism.com",133],["chromotypic.com",133],["gamoneinterrupted.com",133],["metagnathtuggers.com",133],["wolfdyslectic.com",133],["rationalityaloelike.com",133],["sizyreelingly.com",133],["simpulumlamerop.com",133],["urochsunloath.com",133],["monorhinouscassaba.com",133],["counterclockwisejacky.com",133],["35volitantplimsoles5.com",133],["scatch176duplicities.com",133],["antecoxalbobbing1010.com",133],["boonlessbestselling244.com",133],["cyamidpulverulence530.com",133],["guidon40hyporadius9.com",133],["449unceremoniousnasoseptal.com",133],["19turanosephantasia.com",133],["30sensualizeexpression.com",133],["321naturelikefurfuroid.com",133],["745mingiestblissfully.com",133],["availedsmallest.com",133],["greaseball6eventual20.com",133],["toxitabellaeatrebates306.com",133],["20demidistance9elongations.com",133],["audaciousdefaulthouse.com",133],["fittingcentermondaysunday.com",133],["fraudclatterflyingcar.com",133],["launchreliantcleaverriver.com",133],["matriculant401merited.com",133],["realfinanceblogcenter.com",133],["reputationsheriffkennethsand.com",133],["telyn610zoanthropy.com",133],["tubelessceliolymph.com",133],["tummulerviolableness.com",133],["un-block-voe.net",133],["v-o-e-unblock.com",133],["voe-un-block.com",133],["voeun-block.net",133],["voeunbl0ck.com",133],["voeunblck.com",133],["voeunblk.com",133],["voeunblock.com",133],["voeunblock1.com",133],["voeunblock2.com",133],["voeunblock3.com",133],["agefi.fr",134],["cariskuy.com",135],["letras2.com",135],["yusepjaelani.blogspot.com",136],["letras.mus.br",137],["mtlurb.com",138],["port.hu",139],["acdriftingpro.com",139],["flight-report.com",139],["forumdz.com",139],["abandonmail.com",139],["flmods.com",139],["zilinak.sk",139],["projectfreetv.stream",139],["hotdesimms.com",139],["pdfaid.com",139],["dzeko11.net",[139,244]],["bootdey.com",139],["mail.com",139],["expresskaszubski.pl",139],["moegirl.org.cn",139],["flix-wave.lol",139],["fmovies0.cc",139],["onemanhua.com",140],["laksa19.github.io",141],["javcl.com",141],["tvlogy.to",141],["live.dragaoconnect.net",141],["beststremo.com",141],["seznamzpravy.cz",141],["xerifetech.com",141],["freemcserver.net",141],["t3n.de",142],["allindiaroundup.com",143],["vectorizer.io",144],["smgplaza.com",144],["onehack.us",144],["thapcam.net",144],["thefastlaneforum.com",145],["trade2win.com",146],["modagamers.com",147],["freemagazines.top",147],["straatosphere.com",147],["rule34porn.net",147],["nullpk.com",147],["adslink.pw",147],["downloadudemy.com",147],["picgiraffe.com",147],["weadown.com",147],["freepornsex.net",147],["nurparatodos.com.ar",147],["librospreuniversitariospdf.blogspot.com",148],["forexeen.us",148],["khsm.io",148],["webcreator-journal.com",148],["nu6i-bg-net.com",148],["msdos-games.com",148],["blocklayer.com",148],["routech.ro",149],["hokej.net",149],["turkmmo.com",150],["palermotoday.it",151],["baritoday.it",151],["trentotoday.it",151],["agrigentonotizie.it",151],["anconatoday.it",151],["arezzonotizie.it",151],["avellinotoday.it",151],["bresciatoday.it",151],["brindisireport.it",151],["casertanews.it",151],["cataniatoday.it",151],["cesenatoday.it",151],["chietitoday.it",151],["forlitoday.it",151],["frosinonetoday.it",151],["genovatoday.it",151],["ilpescara.it",151],["ilpiacenza.it",151],["latinatoday.it",151],["lecceprima.it",151],["leccotoday.it",151],["livornotoday.it",151],["messinatoday.it",151],["milanotoday.it",151],["modenatoday.it",151],["monzatoday.it",151],["novaratoday.it",151],["padovaoggi.it",151],["parmatoday.it",151],["perugiatoday.it",151],["pisatoday.it",151],["quicomo.it",151],["ravennatoday.it",151],["reggiotoday.it",151],["riminitoday.it",151],["romatoday.it",151],["salernotoday.it",151],["sondriotoday.it",151],["sportpiacenza.it",151],["ternitoday.it",151],["today.it",151],["torinotoday.it",151],["trevisotoday.it",151],["triesteprima.it",151],["udinetoday.it",151],["veneziatoday.it",151],["vicenzatoday.it",151],["thumpertalk.com",152],["arkcod.org",152],["facciabuco.com",153],["softx64.com",154],["thelayoff.com",155],["blog.coinsrise.net",155],["blog.cryptowidgets.net",155],["blog.insurancegold.in",155],["blog.wiki-topia.com",155],["blog.coinsvalue.net",155],["blog.cookinguide.net",155],["blog.freeoseocheck.com",155],["blog.makeupguide.net",155],["blog.carstopia.net",155],["blog.carsmania.net",155],["shorterall.com",155],["blog24.me",155],["maxstream.video",155],["tvepg.eu",155],["manwan.xyz",155],["dailymaverick.co.za",156],["apps2app.com",157],["starkroboticsfrc.com",158],["sinonimos.de",158],["antonimos.de",158],["quesignifi.ca",158],["tiktokrealtime.com",158],["tiktokcounter.net",158],["tpayr.xyz",158],["poqzn.xyz",158],["ashrfd.xyz",158],["rezsx.xyz",158],["tryzt.xyz",158],["ashrff.xyz",158],["rezst.xyz",158],["dawenet.com",158],["erzar.xyz",158],["waezm.xyz",158],["waezg.xyz",158],["blackwoodacademy.org",158],["cryptednews.space",158],["vivuq.com",158],["swgop.com",158],["vbnmll.com",158],["telcoinfo.online",158],["dshytb.com",158],["enit.in",159],["financerites.com",159],["fadedfeet.com",160],["homeculina.com",160],["ineedskin.com",160],["kenzo-flowertag.com",160],["lawyex.co",160],["mdn.lol",160],["bitzite.com",161],["coingraph.us",162],["impact24.us",162],["apkmodvn.com",163],["mod1s.com",163],["apkmoddone.com",164],["dl.apkmoddone.com",165],["phongroblox.com",165],["shortencash.click",166],["my-code4you.blogspot.com",167],["vrcmods.com",168],["osuskinner.com",168],["osuskins.net",168],["pentruea.com",[169,170]],["mchacks.net",171],["why-tech.it",172],["compsmag.com",173],["tapetus.pl",174],["autoroad.cz",175],["brawlhalla.fr",175],["tecnobillo.com",175],["sexcamfreeporn.com",176],["breatheheavy.com",177],["wenxuecity.com",178],["key-hub.eu",179],["fabioambrosi.it",180],["tattle.life",181],["emuenzen.de",181],["terrylove.com",181],["mynet.com",[182,245]],["cidade.iol.pt",183],["fantacalcio.it",184],["hentaifreak.org",185],["hypebeast.com",186],["krankheiten-simulieren.de",187],["catholic.com",188],["3dmodelshare.org",189],["techinferno.com",190],["ibeconomist.com",191],["bookriot.com",192],["purposegames.com",193],["globo.com",194],["latimes.com",194],["claimrbx.gg",195],["perelki.net",196],["vpn-anbieter-vergleich-test.de",197],["livingincebuforums.com",198],["paperzonevn.com",199],["alltechnerd.com",200],["malaysianwireless.com",201],["erinsakura.com",202],["infofuge.com",202],["freejav.guru",202],["novelmultiverse.com",202],["fritidsmarkedet.dk",203],["maskinbladet.dk",203],["15min.lt",204],["baddiehub.com",205],["mr9soft.com",206],["21porno.com",207],["adult-sex-gamess.com",208],["hentaigames.app",208],["mobilesexgamesx.com",208],["mysexgamer.com",208],["porngameshd.com",208],["sexgamescc.com",208],["xnxx-sex-videos.com",208],["f2movies.to",209],["freeporncave.com",210],["tubsxxx.com",211],["subtitle.one",212],["manga18fx.com",213],["freebnbcoin.com",213],["sextvx.com",214],["studydhaba.com",215],["freecourse.tech",215],["victor-mochere.com",215],["papunika.com",215],["mobilanyheter.net",215],["prajwaldesai.com",[215,235]],["ftuapps.dev",215],["muztext.com",216],["pornohans.com",217],["nursexfilme.com",217],["pornohirsch.net",217],["xhamster-sexvideos.com",217],["pornoschlange.com",217],["hdpornos.net",217],["gutesexfilme.com",217],["short1.site",217],["zona-leros.com",217],["charbelnemnom.com",218],["simplebits.io",219],["online-fix.me",220],["gamersdiscussionhub.com",221],["owlzo.com",222],["q1003.com",223],["blogpascher.com",224],["testserver.pro",225],["lifestyle.bg",225],["money.bg",225],["news.bg",225],["topsport.bg",225],["webcafe.bg",225],["schoolcheats.net",226],["mgnet.xyz",227],["advertiserandtimes.co.uk",228],["xvideos2020.me",229],["111.90.159.132",230],["techsolveprac.com",231],["joomlabeginner.com",232],["largescaleforums.com",233],["dubznetwork.com",234],["hentaidexy.com",236],["traderepublic.community",237],["babia.to",238],["code2care.org",239],["xxxxsx.com",241],["ngontinh24.com",242],["idevicecentral.com",243],["zona11.com",244],["scsport.live",244],["blog.esuteru.com",245],["blog.livedoor.jp",245],["carscoops.com",245],["dziennik.pl",245],["eurointegration.com.ua",245],["flatpanelshd.com",245],["fourfourtwo.co.kr",245],["hoyme.jp",245],["issuya.com",245],["itainews.com",245],["iusm.co.kr",245],["logicieleducatif.fr",245],["mydaily.co.kr",245],["onlinegdb.com",245],["picrew.me",245],["pravda.com.ua",245],["reportera.co.kr",245],["sportsrec.com",245],["sportsseoul.com",245],["taxguru.in",245],["text-compare.com",245],["tweaksforgeeks.com",245],["videogamemods.com",245],["wfmz.com",245],["worldhistory.org",245],["etnews.com",245],["palabr.as",245],["motscroises.fr",245],["cruciverba.it",245],["oradesibiu.ro",245],["w.grapps.me",245],["gazetaprawna.pl",245],["pressian.com",245],["raenonx.cc",[245,263]],["indiatimes.com",245],["missyusa.com",245],["aikatu.jp",245],["adintrend.tv",245],["ark-unity.com",245],["cool-style.com.tw",245],["doanhnghiepvn.vn",245],["thesaurus.net",246],["automobile-catalog.com",246],["motorbikecatalog.com",246],["maketecheasier.com",246],["mlbpark.donga.com",247],["jjang0u.com",248],["mangacrab.com",250],["viefaucet.com",251],["cloud-computing-central.com",252],["afk.guide",253],["businessnamegenerator.com",254],["derstandard.at",255],["derstandard.de",255],["rocketnews24.com",256],["soranews24.com",256],["youpouch.com",256],["gourmetscans.net",257],["ilsole24ore.com",258],["ipacrack.com",259],["hentaiporn.one",260],["infokik.com",261],["daemonanime.net",262],["deezer.com",263],["fosslinux.com",264],["shrdsk.me",265],["examword.com",266],["sempreupdate.com.br",266],["tribuna.com",267],["trendsderzukunft.de",268],["gal-dem.com",268],["lostineu.eu",268],["oggitreviso.it",268],["speisekarte.de",268],["mixed.de",268],["lightnovelspot.com",[269,270]],["lightnovelworld.com",[269,270]],["novelpub.com",[269,270]],["webnovelpub.com",[269,270]],["mail.yahoo.com",271],["hwzone.co.il",272],["nammakalvi.com",273],["c2g.at",274],["terafly.me",274],["elamigos-games.com",274],["elamigos-games.net",274],["dktechnicalmate.com",275],["recipahi.com",275],["kaystls.site",276],["aquarius-horoscopes.com",277],["cancer-horoscopes.com",277],["dubipc.blogspot.com",277],["echoes.gr",277],["engel-horoskop.de",277],["freegames44.com",277],["fuerzasarmadas.eu",277],["gemini-horoscopes.com",277],["jurukunci.net",277],["krebs-horoskop.com",277],["leo-horoscopes.com",277],["maliekrani.com",277],["nklinks.click",277],["ourenseando.es",277],["pisces-horoscopes.com",277],["radio-en-direct.fr",277],["sagittarius-horoscopes.com",277],["scorpio-horoscopes.com",277],["singlehoroskop-loewe.de",277],["skat-karten.de",277],["skorpion-horoskop.com",277],["taurus-horoscopes.com",277],["the1security.com",277],["virgo-horoscopes.com",277],["zonamarela.blogspot.com",277],["yoima.hatenadiary.com",277],["vpntester.org",278],["japscan.lol",279],["digitask.ru",280],["tempumail.com",281],["sexvideos.host",282],["10alert.com",284],["cryptstream.de",285],["nydus.org",285],["techhelpbd.com",286],["fapdrop.com",287],["cellmapper.net",288],["hdrez.com",289],["youwatch-serie.com",289],["bembed.net",290],["embedv.net",290],["fslinks.org",290],["listeamed.net",290],["v6embed.xyz",290],["vgplayer.xyz",290],["vid-guard.com",290],["giga-uqload.xyz",290],["printablecreative.com",291],["peachprintable.com",291],["comohoy.com",292],["leak.sx",292],["paste.bin.sx",292],["pornleaks.in",292],["merlininkazani.com",292],["j91.asia",293],["rekidai-info.github.io",294],["jeniusplay.com",295],["indianyug.com",296],["rgb.vn",296],["needrom.com",297],["criptologico.com",298],["megadrive-emulator.com",299],["eromanga-show.com",300],["hentai-one.com",300],["hentaipaw.com",300],["10minuteemails.com",301],["luxusmail.org",301],["w3cub.com",302],["bangpremier.com",303],["nyaa.iss.ink",304],["tnp98.xyz",306],["freepdfcomic.com",307],["techedubyte.com",308],["tickzoo.tv",309],["memedroid.com",310],["animesync.org",311],["karaoketexty.cz",312],["filmizlehdfilm.com",313],["fullfilmizle.cc",313],["gofilmizle.net",313],["resortcams.com",314],["cheatography.com",314],["sonixgvn.net",315],["faqwiki.us",315],["mjakmama24.pl",317],["cheatermad.com",318],["ville-ideale.fr",319],["eodev.com",320],["xfreehd.com",321],["freethesaurus.com",322],["thefreedictionary.com",322],["fm-arena.com",323],["tradersunion.com",324],["tandess.com",325],["allosurf.net",325],["spontacts.com",326],["dankmemer.lol",327],["getexploits.com",328],["fplstatistics.com",329],["breitbart.com",330],["salidzini.lv",331],["choosingnothing.com",332],["cryptorank.io",[333,334]],["th.gl",335],["4kwebplay.xyz",336],["qqwebplay.xyz",336],["viwlivehdplay.ru",336],["molbiotools.com",337],["vods.tv",338],["18xxx.xyz",339],["raidrush.net",340],["xnxxcom.xyz",341],["videzz.net",342],["spambox.xyz",343],["dreamdth.com",344],["freemodsapp.in",344],["onlytech.com",344],["player.jeansaispasplus.homes",345],["en-thunderscans.com",346],["historicaerials.com",348],["iqksisgw.xyz",349],["caroloportunidades.com.br",350],["coempregos.com.br",350],["foodiesgallery.com",350],["vikatan.com",351],["lastampa.it",352],["dogdrip.net",353],["infinityfree.com",353],["slashdot.org",353],["smsonline.cloud",353]]);

const entitiesMap = new Map([["comunio",0],["finanzen",0],["gameswelt",0],["heftig",0],["notebookcheck",0],["testedich",0],["transfermarkt",0],["truckscout24",0],["tvtv",0],["wetteronline",0],["wieistmeineip",0],["wetter",2],["eztv",4],["1337x",4],["sushi-scan",6],["spigotunlocked",6],["ahmedmode",6],["kissasian",9],["mma-core",10],["yts",13],["720pstream",13],["1stream",13],["thefmovies",14],["urlcero",20],["totaldebrid",23],["sandrives",23],["fxporn69",32],["aliancapes",32],["pouvideo",34],["povvideo",34],["povw1deo",34],["povwideo",34],["powv1deo",34],["powvibeo",34],["powvideo",34],["powvldeo",34],["tubsexer",40],["porno-tour",40],["lenkino",40],["pornomoll",40],["camsclips",40],["m4ufree",44],["writedroid",55],["telerium",59],["pandafreegames",73],["thoptv",81],["shortzzy",90],["streameast",102],["thestreameast",102],["daddylivehd",102],["solvetube",105],["pornhub",106],["wcofun",113],["bollyholic",117],["gotxx",132],["turkanime",133],["voe-unblock",133],["rp5",141],["khatrimaza",147],["pogolinks",147],["popcornstream",149],["xhamsterdeutsch",217],["privatemoviez",221],["gmx",240],["lightnovelpub",[269,270]],["camcaps",283],["vembed",290],["moflix-stream",[290,347]],["drivebot",305],["thenextplanet1",306],["oploverz",309],["filmizletv",313],["autoscout24",316],["brainly",320]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function preventSetTimeout(
    needleRaw = '',
    delayRaw = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setTimeout', needleRaw, delayRaw);
    const needleNot = needleRaw.charAt(0) === '!';
    const reNeedle = safe.patternToRegex(needleNot ? needleRaw.slice(1) : needleRaw);
    const range = new RangeParser(delayRaw);
    proxyApplyFn('setTimeout', function(context) {
        const { callArgs } = context;
        const a = callArgs[0] instanceof Function
            ? String(safe.Function_toString(callArgs[0]))
            : String(callArgs[0]);
        const b = callArgs[1];
        if ( needleRaw === '' && range.unbound() ) {
            safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
            return context.reflect();
        }
        if ( reNeedle.test(a) !== needleNot && range.test(b) ) {
            callArgs[0] = function(){};
            safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
        }
        return context.reflect();
    });
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = this.private = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( fn.prototype?.constructor === fn ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
}

class RangeParser {
    constructor(s) {
        this.not = s.charAt(0) === '!';
        if ( this.not ) { s = s.slice(1); }
        if ( s === '' ) { return; }
        const pos = s.indexOf('-');
        if ( pos !== 0 ) {
            this.min = this.max = parseInt(s, 10) || 0;
        }
        if ( pos !== -1 ) {
            this.max = parseInt(s.slice(1), 10) || Number.MAX_SAFE_INTEGER;
        }
    }
    unbound() {
        return this.min === undefined && this.max === undefined;
    }
    test(v) {
        const n = Math.min(Math.max(Number(v) || 0, 0), Number.MAX_SAFE_INTEGER);
        if ( this.min === this.max ) {
            return (this.min === undefined || n === this.min) !== this.not;
        }
        if ( this.min === undefined ) {
            return (n <= this.max) !== this.not;
        }
        if ( this.max === undefined ) {
            return (n >= this.min) !== this.not;
        }
        return (n >= this.min && n <= this.max) !== this.not;
    }
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
    try { preventSetTimeout(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_preventSetTimeout();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
