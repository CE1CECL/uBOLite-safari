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
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["","history.go"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","shouldOpenPopUp"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["/adblock/i"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["",")](this,..."],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["pinsystem.co.uk",5],["ancensored.com",5],["mp3fiber.com",[5,25]],["xrivonet.info",5],["kingofdown.com",6],["radiotormentamx.com",6],["quelleestladifference.fr",6],["otakuworldsite.blogspot.com",6],["ad-itech.blogspot.com",6],["agar.pro",6],["unlockapk.com",6],["mobdi3ips.com",6],["socks24.org",6],["interviewgig.com",6],["javaguides.net",6],["almohtarif-tech.net",6],["forum.release-apk.com",6],["devoloperxda.blogspot.com",6],["zwergenstadt.com",6],["primedeportes.es",6],["upxin.net",6],["ciudadblogger.com",6],["ke-1.com",6],["secretsdeepweb.blogspot.com",6],["bit-shares.com",6],["itdmusics.com",6],["aspdotnet-suresh.com",6],["tudo-para-android.com",6],["urdulibrarypk.blogspot.com",6],["zerotopay.com",6],["akw.to",6],["mawsueaa.com",6],["hesgoal-live.io",6],["king-shoot.io",6],["9goals.live",6],["bibme.org",8],["citationmachine.net",8],["easybib.com",9],["vermangasporno.com",10],["imgtorrnt.in",10],["picbaron.com",[10,115]],["letmejerk.com",10],["letmejerk2.com",10],["letmejerk3.com",10],["letmejerk4.com",10],["letmejerk5.com",10],["letmejerk6.com",10],["letmejerk7.com",10],["dlapk4all.com",10],["kropic.com",10],["kvador.com",10],["pdfindir.net",10],["brstej.com",10],["topwwnews.com",10],["xsanime.com",10],["vidlo.us",10],["put-locker.com",10],["youx.xxx",10],["animeindo.asia",10],["masahub.net",10],["adclickersbot.com",10],["badtaste.it",11],["shemalez.com",13],["tubepornclassic.com",13],["gotporn.com",14],["freepornrocks.com",14],["tvhai.org",14],["realgfporn.com",[15,16]],["thisvid.com",16],["xvideos-downloader.net",16],["imgspice.com",17],["vikiporn.com",18],["tnaflix.com",18],["hentai2w.com",[18,175]],["yourlust.com",18],["hotpornfile.org",18],["watchfreexxx.net",18],["vintageporntubes.com",18],["angelgals.com",18],["babesexy.com",18],["porndaa.com",18],["ganstamovies.com",18],["youngleak.com",18],["porndollz.com",18],["xnxxvideo.pro",18],["xvideosxporn.com",18],["filmpornofrancais.fr",18],["pictoa.com",[18,40]],["adultasianporn.com",18],["nsfwmonster.com",18],["girlsofdesire.org",18],["gaytail.com",18],["fetish-bb.com",18],["rumporn.com",18],["soyoungteens.com",18],["zubby.com",18],["lesbian8.com",18],["gayforfans.com",18],["reifporn.de",18],["javtsunami.com",18],["18tube.sex",18],["xxxextreme.org",18],["amateurs-fuck.com",18],["sex-amateur-clips.com",18],["hentaiworld.tv",18],["dads-banging-teens.com",18],["home-xxx-videos.com",18],["mature-chicks.com",18],["teens-fucking-matures.com",18],["hqbang.com",18],["darknessporn.com",18],["familyporner.com",18],["freepublicporn.com",18],["pisshamster.com",18],["punishworld.com",18],["xanimu.com",18],["tubator.com",18],["pornhd.com",19],["cnnamador.com",[19,29]],["cle0desktop.blogspot.com",19],["turkanime.co",19],["camclips.tv",[19,41]],["blackpornhq.com",19],["xsexpics.com",19],["ulsex.net",19],["wannafreeporn.com",19],["ytube2dl.com",19],["multiup.us",19],["protege-torrent.com",19],["pussyspace.com",[20,21]],["pussyspace.net",[20,21]],["empflix.com",22],["cpmlink.net",23],["bdsmstreak.com",23],["cutpaid.com",23],["pornforrelax.com",23],["fatwhitebutt.com",23],["short.pe",24],["totaldebrid.org",25],["neko-miku.com",25],["elsfile.org",25],["venstrike.jimdofree.com",25],["schrauben-normen.de",25],["avengerinator.blogspot.com",25],["link-to.net",25],["hanimesubth.com",25],["gsmturkey.net",25],["adshrink.it",25],["presentation-ppt.com",25],["mangacanblog.com",25],["pekalongan-cits.blogspot.com",25],["4tymode.win",25],["linkvertise.com",25],["reifenrechner.at",25],["tire-size-calculator.info",25],["linuxsecurity.com",25],["itsguider.com",25],["cotravinh.blogspot.com",25],["itudong.com",25],["shortx.net",25],["lecturel.com",25],["bakai.org",25],["nar.k-ba.net",25],["tiroalpalo.org",25],["eurotruck2.com.br",25],["tiroalpaloes.com",25],["tiroalpaloes.net",25],["flixsix.com",25],["bs.to",27],["efukt.com",27],["generacionretro.net",28],["nuevos-mu.ucoz.com",28],["micloudfiles.com",28],["mimaletamusical.blogspot.com",28],["visionias.net",28],["b3infoarena.in",28],["lurdchinexgist.blogspot.com",28],["thefreedommatrix.blogspot.com",28],["hentai-vl.blogspot.com",28],["projetomotog.blogspot.com",28],["ktmx.pro",28],["lirik3satu.blogspot.com",28],["marketmovers.it",28],["pharmaguideline.com",28],["safemaru.blogspot.com",28],["mixloads.com",28],["mangaromance.eu",28],["interssh.com",28],["freesoftpdfdownload.blogspot.com",28],["cirokun.blogspot.com",28],["myadslink.com",28],["blackavelic.com",28],["server.satunivers.tv",28],["eg-akw.com",28],["xn--mgba7fjn.cc",28],["flashingjungle.com",29],["ma-x.org",30],["lavozdegalicia.es",30],["ddwloclawek.pl",30],["ki24.info",30],["xmovies08.org",32],["globaldjmix.com",33],["zazzybabes.com",34],["haaretz.co.il",35],["haaretz.com",35],["slate.com",36],["megalinks.info",37],["megapastes.com",37],["mega-mkv.com",[37,38]],["mkv-pastes.com",37],["zpaste.net",37],["zlpaste.net",37],["9xlinks.site",37],["zona-leros.net",38],["cine.to",[40,181]],["kissasia.cc",40],["digjav.com",41],["videoszoofiliahd.com",42],["xxxtubezoo.com",43],["zooredtube.com",43],["megacams.me",44],["rlslog.net",44],["porndoe.com",45],["acienciasgalilei.com",47],["playrust.io",48],["payskip.org",49],["short-url.link",50],["tubedupe.com",51],["mcrypto.club",52],["fatgirlskinny.net",53],["polska-ie.com",53],["windowsmatters.com",53],["canaltdt.es",54],["masbrooo.com",54],["2ndrun.tv",54],["oncehelp.com",55],["curto.win",55],["smallseotools.com",56],["macwelt.de",58],["pcwelt.de",58],["capital.de",58],["geo.de",58],["allmomsex.com",59],["allnewindianporn.com",59],["analxxxvideo.com",59],["animalextremesex.com",59],["anime3d.xyz",59],["animefuckmovies.com",59],["animepornfilm.com",59],["animesexbar.com",59],["animesexclip.com",59],["animexxxsex.com",59],["animexxxfilms.com",59],["anysex.club",59],["apetube.asia",59],["asianfuckmovies.com",59],["asianfucktube.com",59],["asianporn.sexy",59],["asiansexcilps.com",59],["beeg.fund",59],["beegvideoz.com",59],["bestasiansex.pro",59],["bravotube.asia",59],["brutalanimalsfuck.com",59],["candyteenporn.com",59],["daddyfuckmovies.com",59],["desifuckonline.com",59],["exclusiveasianporn.com",59],["exteenporn.com",59],["fantasticporn.net",59],["fantasticyoungporn.com",59],["fineasiansex.com",59],["firstasianpussy.com",59],["freeindiansextube.com",59],["freepornasians.com",59],["freerealvideo.com",59],["fuck-beeg.com",59],["fuck-xnxx.com",59],["fuckasian.pro",59],["fuckfuq.com",59],["fuckundies.com",59],["gojapaneseporn.com",59],["golderotica.com",59],["goodyoungsex.com",59],["goyoungporn.com",59],["hardxxxmoms.com",59],["hdvintagetube.com",59],["hentaiporn.me",59],["hentaisexfilms.com",59],["hentaisexuality.com",59],["hot-teens-movies.mobi",59],["hotanimepornvideos.com",59],["hotanimevideos.com",59],["hotasianpussysex.com",59],["hotjapaneseshows.com",59],["hotmaturetube.com",59],["hotmilfs.pro",59],["hotorientalporn.com",59],["hotpornyoung.com",59],["hotxxxjapanese.com",59],["hotxxxpussy.com",59],["indiafree.net",59],["indianpornvideo.online",59],["japanpornclip.com",59],["japanesetube.video",59],["japansex.me",59],["japanesexxxporn.com",59],["japansporno.com",59],["japanxxx.asia",59],["japanxxxworld.com",59],["keezmovies.surf",59],["lingeriefuckvideo.com",59],["liveanimalporn.zooo.club",59],["madhentaitube.com",59],["megahentaitube.com",59],["megajapanesesex.com",59],["megajapantube.com",59],["milfxxxpussy.com",59],["momsextube.pro",59],["momxxxass.com",59],["monkeyanimalporn.com",59],["moviexxx.mobi",59],["newanimeporn.com",59],["newjapanesexxx.com",59],["nicematureporn.com",59],["nudeplayboygirls.com",59],["openxxxporn.com",59],["originalindianporn.com",59],["originalteentube.com",59],["pig-fuck.com",59],["plainasianporn.com",59],["popularasianxxx.com",59],["pornanimetube.com",59],["pornasians.pro",59],["pornhat.asia",59],["pornjapanesesex.com",59],["pornomovies.asia",59],["pornvintage.tv",59],["primeanimesex.com",59],["realjapansex.com",59],["realmomsex.com",59],["redsexhub.com",59],["retroporn.world",59],["retrosexfilms.com",59],["sex-free-movies.com",59],["sexanimesex.com",59],["sexanimetube.com",59],["sexjapantube.com",59],["sexmomvideos.com",59],["sexteenxxxtube.com",59],["sexxxanimal.com",59],["sexyoungtube.com",59],["sexyvintageporn.com",59],["sopornmovies.com",59],["spicyvintageporn.com",59],["sunporno.club",59],["tabooanime.club",59],["teenextrem.com",59],["teenfucksex.com",59],["teenhost.net",59],["teensexass.com",59],["tnaflix.asia",59],["totalfuckmovies.com",59],["totalmaturefuck.com",59],["txxx.asia",59],["voyeurpornsex.com",59],["warmteensex.com",59],["wetasiancreampie.com",59],["wildhentaitube.com",59],["wowyoungsex.com",59],["xhamster-art.com",59],["xmovie.pro",59],["xnudevideos.com",59],["xnxxjapon.com",59],["xpics.me",59],["xvide.me",59],["xxxanimefuck.com",59],["xxxanimevideos.com",59],["xxxanimemovies.com",59],["xxxhentaimovies.com",59],["xxxhothub.com",59],["xxxjapaneseporntube.com",59],["xxxlargeporn.com",59],["xxxmomz.com",59],["xxxpornmilf.com",59],["xxxpussyclips.com",59],["xxxpussysextube.com",59],["xxxretrofuck.com",59],["xxxsex.pro",59],["xxxsexyjapanese.com",59],["xxxteenyporn.com",59],["xxxvideo.asia",59],["xxxvideos.ink",59],["xxxyoungtv.com",59],["youjizzz.club",59],["youngpussyfuck.com",59],["bayimg.com",60],["celeb.gate.cc",61],["kinoger.re",62],["desi.upn.bio",62],["masterplayer.xyz",64],["pussy-hub.com",64],["porndex.com",65],["compucalitv.com",66],["diariodenavarra.es",68],["pennlive.com",71],["beautypageants.indiatimes.com",72],["01fmovies.com",73],["lnk2.cc",75],["fullhdxxx.com",76],["luscious.net",[76,115]],["classicpornbest.com",76],["1youngteenporn.com",76],["www-daftarharga.blogspot.com",[76,165]],["miraculous.to",[76,171]],["vtube.to",76],["xstory-fr.com",76],["gosexpod.com",77],["otakukan.com",78],["xcafe.com",79],["pornfd.com",79],["venusarchives.com",79],["imagehaha.com",80],["imagenpic.com",80],["imageshimage.com",80],["imagetwist.com",80],["k1nk.co",81],["watchasians.cc",81],["lulustream.com",81],["luluvdo.com",81],["web.de",82],["news18.com",83],["thelanb.com",84],["dropmms.com",84],["softwaredescargas.com",85],["cracking-dz.com",86],["gazzetta.it",88],["port.hu",90],["dziennikbaltycki.pl",91],["dzienniklodzki.pl",91],["dziennikpolski24.pl",91],["dziennikzachodni.pl",91],["echodnia.eu",91],["expressbydgoski.pl",91],["expressilustrowany.pl",91],["gazetakrakowska.pl",91],["gazetalubuska.pl",91],["gazetawroclawska.pl",91],["gk24.pl",91],["gloswielkopolski.pl",91],["gol24.pl",91],["gp24.pl",91],["gra.pl",91],["gs24.pl",91],["kurierlubelski.pl",91],["motofakty.pl",91],["naszemiasto.pl",91],["nowiny24.pl",91],["nowosci.com.pl",91],["nto.pl",91],["polskatimes.pl",91],["pomorska.pl",91],["poranny.pl",91],["sportowy24.pl",91],["strefaagro.pl",91],["strefabiznesu.pl",91],["stronakobiet.pl",91],["telemagazyn.pl",91],["to.com.pl",91],["wspolczesna.pl",91],["course9x.com",91],["courseclub.me",91],["azrom.net",91],["alttyab.net",91],["esopress.com",91],["nesiaku.my.id",91],["onemanhua.com",92],["freeindianporn.mobi",92],["dr-farfar.com",93],["boyfriendtv.com",94],["brandstofprijzen.info",95],["netfuck.net",96],["blog24.me",[96,108]],["kisahdunia.com",96],["javsex.to",96],["nulljungle.com",96],["oyuncusoruyor.com",96],["pbarecap.ph",96],["sourds.net",96],["teknobalta.com",96],["tvinternetowa.info",96],["sqlserveregitimleri.com",96],["tutcourse.com",96],["readytechflip.com",96],["warddogs.com",96],["dvdgayporn.com",96],["iimanga.com",96],["tinhocdongthap.com",96],["tremamnon.com",96],["423down.com",96],["brizzynovel.com",96],["jugomobile.com",96],["freecodezilla.net",96],["iconmonstr.com",96],["gay-tubes.cc",96],["rbxscripts.net",96],["comentariodetexto.com",96],["wordpredia.com",96],["livsavr.co",96],["allfaucet.xyz",[96,108]],["titbytz.tk",96],["replica-watch.info",96],["alludemycourses.com",96],["kayifamilytv.com",96],["iir.ai",97],["gameofporn.com",99],["qpython.club",100],["antifake-funko.fr",100],["dktechnicalmate.com",100],["recipahi.com",100],["e9china.net",101],["ontools.net",101],["marketbeat.com",102],["hentaipornpics.net",103],["apps2app.com",104],["upshrink.com",105],["fitdynamos.com",107],["ohionowcast.info",108],["wiour.com",108],["bitzite.com",[108,113,114]],["appsbull.com",108],["diudemy.com",108],["maqal360.com",[108,116,117]],["bitcotasks.com",108],["videolyrics.in",108],["manofadan.com",108],["cempakajaya.com",108],["tagecoin.com",108],["doge25.in",108],["king-ptcs.com",108],["naijafav.top",108],["ourcoincash.xyz",108],["sh.techsamir.com",108],["claimcoins.site",108],["cryptosh.pro",108],["eftacrypto.com",108],["fescrypto.com",108],["earnhub.net",108],["kiddyshort.com",108],["tronxminer.com",108],["homeairquality.org",109],["cety.app",[110,111]],["exego.app",110],["cutlink.net",110],["cutsy.net",110],["cutyurls.com",110],["cutty.app",110],["cutnet.net",110],["cuty.me",111],["upfiles.app",[111,126]],["upfiles-urls.com",[111,126]],["gamerxyt.com",111],["adcrypto.net",112],["admediaflex.com",112],["aduzz.com",112],["bitcrypto.info",112],["cdrab.com",112],["datacheap.io",112],["hbz.us",112],["savego.org",112],["owsafe.com",112],["sportweb.info",112],["gfx-station.com",113],["buzzheavier.com",114],["flashbang.sh",114],["trashbytes.net",114],["aiimgvlog.fun",115],["6indianporn.com",115],["amateurebonypics.com",115],["amateuryoungpics.com",115],["cinemabg.net",115],["coomer.su",115],["desimmshd.com",115],["frauporno.com",115],["givemeaporn.com",115],["hitomi.la",115],["jav-asia.top",115],["javf.net",115],["javfull.net",115],["javideo.net",115],["kemono.su",115],["kr18plus.com",115],["pilibook.com",115],["pornborne.com",115],["porngrey.com",115],["qqxnxx.com",115],["sexvideos.host",115],["submilf.com",115],["subtaboo.com",115],["tktube.com",115],["xfrenchies.com",115],["soft98.ir",[116,134]],["moderngyan.com",118],["sattakingcharts.in",118],["freshbhojpuri.com",118],["bgmi32bitapk.in",118],["bankshiksha.in",118],["earn.mpscstudyhub.com",118],["earn.quotesopia.com",118],["money.quotesopia.com",118],["best-mobilegames.com",118],["learn.moderngyan.com",118],["bharatsarkarijobalert.com",118],["quotesopia.com",118],["creditsgoal.com",118],["coingraph.us",119],["momo-net.com",119],["maxgaming.fi",119],["cybercityhelp.in",120],["travel.vebma.com",121],["cloud.majalahhewan.com",121],["crm.cekresi.me",121],["ai.tempatwisata.pro",121],["pinloker.com",121],["sekilastekno.com",121],["mrproblogger.com",122],["themezon.net",122],["dagensnytt.com",122],["hblinks.pro",123],["hubcdn.vip",123],["90fpsconfig.in",123],["katdrive.link",123],["kmhd.net",123],["bollydrive.rest",123],["azmath.info",124],["downfile.site",124],["downphanmem.com",124],["expertvn.com",124],["memangbau.com",124],["trangchu.news",124],["aztravels.net",124],["ielts-isa.edu.vn",124],["techedubyte.com",[124,231]],["jpopsingles.eu",124],["aipebel.com",124],["link.paid4link.com",125],["vulture.com",127],["megaplayer.bokracdn.run",128],["hentaistream.com",129],["siteunblocked.info",130],["larvelfaucet.com",131],["feyorra.top",131],["claimtrx.com",131],["moviesyug.net",132],["w4files.ws",132],["parispi.net",133],["flatai.org",133],["hentaicloud.com",134],["justin.mp3quack.lol",134],["tio.ch",135],["lavanguardia.com",135],["tu.no",135],["paperzonevn.com",136],["dailyvideoreports.net",137],["lewd.ninja",138],["systemnews24.com",139],["incestvidz.com",140],["niusdiario.es",141],["playporngames.com",142],["javx.cc",142],["movi.pk",[143,146]],["cutesexyteengirls.com",145],["0dramacool.net",146],["185.53.88.104",146],["185.53.88.204",146],["185.53.88.15",146],["123movies4k.net",146],["1rowsports.com",146],["4share-mp3.net",146],["9animetv.to",146],["720pstream.me",146],["aagmaal.com",146],["abysscdn.com",146],["ajkalerbarta.com",146],["androidapks.biz",146],["androidsite.net",146],["animeonlinefree.org",146],["animesite.net",146],["animespank.com",146],["aniworld.to",146],["apkmody.io",146],["appsfree4u.com",146],["audioz.download",146],["awafim.tv",146],["bdnewszh.com",146],["beastlyprints.com",146],["bengalisite.com",146],["bestfullmoviesinhd.org",146],["betteranime.net",146],["blacktiesports.live",146],["buffsports.stream",146],["ch-play.com",146],["clickforhire.com",146],["cloudy.pk",146],["computercrack.com",146],["coolcast2.com",146],["crackedsoftware.biz",146],["crackfree.org",146],["cracksite.info",146],["cryptoblog24.info",146],["cuatrolatastv.blogspot.com",146],["cydiasources.net",146],["decmelfot.xyz",146],["dirproxy.com",146],["dopebox.to",146],["downloadapk.info",146],["downloadapps.info",146],["downloadgames.info",146],["downloadmusic.info",146],["downloadsite.org",146],["downloadwella.com",146],["ebooksite.org",146],["educationtips213.blogspot.com",146],["egyup.live",146],["elgoles.pro",146],["embed.meomeo.pw",146],["embed.scdn.to",146],["emulatorsite.com",146],["essaysharkwriting.club",146],["exploreera.net",146],["extrafreetv.com",146],["fakedetail.com",146],["fclecteur.com",146],["files.im",146],["flexyhit.com",146],["fmoviefree.net",146],["fmovies24.com",146],["freeflix.info",146],["freemoviesu4.com",146],["freeplayervideo.com",146],["freesoccer.net",146],["fseries.org",146],["gamefast.org",146],["gamesite.info",146],["gettapeads.com",146],["gmanga.me",146],["gocast123.me",146],["gogohd.net",146],["gogoplay5.com",146],["gooplay.net",146],["gostreamon.net",146],["happy2hub.org",146],["harimanga.com",146],["healthnewsreel.com",146],["hexupload.net",146],["hinatasoul.com",146],["hindisite.net",146],["holymanga.net",146],["hxfile.co",146],["isosite.org",146],["iv-soft.com",146],["januflix.expert",146],["jewelry.com.my",146],["johnwardflighttraining.com",146],["kabarportal.com",146],["kstorymedia.com",146],["la123movies.org",146],["lespassionsdechinouk.com",146],["lilymanga.net",146],["linksdegrupos.com.br",146],["linkz.wiki",146],["livestreamtv.pk",146],["macsite.info",146],["mangasite.org",146],["manhuascan.com",146],["megamovies.org",146],["membed.net",146],["moddroid.com",146],["moviefree2.com",146],["movies-watch.com.pk",146],["moviesite.app",146],["moviesonline.fm",146],["moviesx.org",146],["msmoviesbd.com",146],["musicsite.biz",146],["myfernweh.com",146],["myviid.com",146],["nazarickol.com",146],["noob4cast.com",146],["nsw2u.com",[146,271]],["oko.sh",146],["olympicstreams.me",146],["orangeink.pk",146],["pahaplayers.click",146],["patchsite.net",146],["pdfsite.net",146],["play1002.com",146],["player-cdn.com",146],["productkeysite.com",146],["projectfreetv.one",146],["romsite.org",146],["rufiguta.com",146],["rytmp3.io",146],["send.cm",146],["seriesite.net",146],["seriezloaded.com.ng",146],["serijehaha.com",146],["shrugemojis.com",146],["siteapk.net",146],["siteflix.org",146],["sitegames.net",146],["sitekeys.net",146],["sitepdf.com",146],["sitetorrent.com",146],["softwaresite.net",146],["sportbar.live",146],["ssyoutube.com",146],["stardima.com",146],["stream4free.live",146],["superapk.org",146],["supermovies.org",146],["tainio-mania.online",146],["talaba.su",146],["tamilguns.org",146],["tatabrada.tv",146],["techtrendmakers.com",146],["thememypc.net",146],["thripy.com",146],["travelplanspro.com",146],["turcasmania.com",146],["tusfiles.com",146],["tvonlinesports.com",146],["ultramovies.org",146],["uploadbank.com",146],["urdubolo.pk",146],["vidspeeds.com",146],["warezsite.net",146],["watchmovies2.com",146],["watchmoviesforfree.org",146],["watchofree.com",146],["watchsite.net",146],["watchsouthpark.tv",146],["watchtvch.club",146],["web.livecricket.is",146],["webseries.club",146],["worldcupstream.pm",146],["y2mate.com",146],["youapk.net",146],["youtube4kdownloader.com",146],["yts-subs.com",146],["haho.moe",147],["nicy-spicy.pw",148],["novelmultiverse.com",149],["mylegalporno.com",150],["embedsports.me",151],["embedstream.me",151],["jumbtv.com",151],["reliabletv.me",151],["xnxx.com",154],["thecut.com",155],["novelism.jp",156],["alphapolis.co.jp",157],["game3rb.com",158],["javhub.net",158],["thotvids.com",159],["berklee.edu",160],["rawkuma.com",[161,162]],["moviesjoyhd.to",162],["cineb.rs",162],["imeteo.sk",163],["youtubemp3donusturucu.net",164],["surfsees.com",166],["vivo.st",[167,168]],["alueviesti.fi",170],["kiuruvesilehti.fi",170],["lempaala.ideapark.fi",170],["olutposti.fi",170],["urjalansanomat.fi",170],["tainhanhvn.com",172],["titantv.com",173],["3cinfo.net",174],["camarchive.tv",175],["crownimg.com",175],["freejav.guru",175],["hentai2read.com",175],["icyporno.com",175],["illink.net",175],["javtiful.com",175],["m-hentai.net",175],["pornblade.com",175],["pornfelix.com",175],["pornxxxxtube.net",175],["redwap.me",175],["redwap2.com",175],["redwap3.com",175],["sunporno.com",175],["tubxporn.xxx",175],["ver-comics-porno.com",175],["ver-mangas-porno.com",175],["xanimeporn.com",175],["xxxvideohd.net",175],["zetporn.com",175],["simpcity.su",176],["cocomanga.com",177],["animelatinohd.com",177],["sampledrive.in",178],["sportnews.to",178],["soccershoes.blog",178],["mcleaks.net",179],["explorecams.com",179],["minecraft.buzz",179],["chillx.top",180],["playerx.stream",180],["m.liputan6.com",182],["stardewids.com",[182,208]],["ingles.com",183],["spanishdict.com",183],["surfline.com",184],["rureka.com",185],["bunkr.is",186],["freepreset.net",187],["amateur8.com",188],["freeporn8.com",188],["maturetubehere.com",188],["embedo.co",189],["corriere.it",190],["oggi.it",190],["2the.space",191],["file.gocmod.com",193],["apkcombo.com",194],["winfuture.de",195],["sponsorhunter.com",196],["novelssites.com",197],["haxina.com",198],["scimagojr.com",198],["torrentmac.net",199],["udvl.com",200],["apimate.net",201],["dynamicminister.net",201],["gofirmware.com",201],["dlpanda.com",202],["socialmediagirls.com",203],["einrichtungsbeispiele.de",204],["weadown.com",205],["molotov.tv",206],["freecoursesonline.me",207],["adelsfun.com",207],["advantien.com",207],["bailbondsfinder.com",207],["bigpiecreative.com",207],["childrenslibrarylady.com",207],["classifarms.com",207],["comtasq.ca",207],["crone.es",207],["ctrmarketingsolutions.com",207],["dropnudes.com",207],["ftuapps.dev",207],["genzsport.com",207],["ghscanner.com",207],["grsprotection.com",207],["gruporafa.com.br",207],["inmatefindcalifornia.com",207],["inmatesearchidaho.com",207],["itsonsitetv.com",207],["mfmfinancials.com",207],["myproplugins.com",207],["onehack.us",207],["ovester.com",207],["paste.bin.sx",207],["privatenudes.com",207],["renoconcrete.ca",207],["richieashbeck.com",207],["sat.technology",207],["short1ink.com",207],["stpm.co.uk",207],["wegotcookies.co",207],["mathcrave.com",207],["marinetraffic.live",207],["commands.gg",208],["smgplaza.com",209],["emturbovid.com",210],["findjav.com",210],["javggvideo.xyz",210],["mmtv01.xyz",210],["stbturbo.xyz",210],["streamsilk.com",210],["freepik.com",211],["diyphotography.net",213],["bitchesgirls.com",214],["hiraethtranslation.com",215],["programmingeeksclub.com",216],["diendancauduong.com",217],["androidadult.com",218],["parentcircle.com",219],["h-game18.xyz",220],["wheelofgold.com",221],["davescomputertips.com",222],["historyofroyalwomen.com",222],["skill4ltu.eu",224],["lifestyle.bg",225],["news.bg",225],["topsport.bg",225],["webcafe.bg",225],["freepikdownloader.com",226],["freepasses.org",227],["iusedtobeaboss.com",228],["androidpolice.com",229],["cbr.com",229],["gamerant.com",229],["howtogeek.com",229],["thegamer.com",229],["blogtruyenmoi.com",230],["repretel.com",232],["tubereader.me",232],["igay69.com",233],["graphicget.com",234],["qiwi.gg",[235,236]],["sonixgvn.net",237],["alliptvlinks.com",238],["smashyplayer.top",239],["xvideos.com",240],["xvideos2.com",240],["homemoviestube.com",241],["sexseeimage.com",241],["ukchat.co.uk",244],["hivelr.com",245],["skidrowcodex.net",246],["takimag.com",247],["digi.no",248],["th.gl",249],["twi-fans.com",250],["learn-cpp.org",251],["terashare.co",252],["pornwex.tv",253],["smithsonianmag.com",254],["homesports.net",255],["realmoasis.com",256],["javfc2.xyz",257],["gobankingrates.com",258],["hiddenleaf.to",259],["ronorp.net",260],["videovak.com",263],["a-lohas.jp",264],["akirabox.com",265],["purplex.app",266],["idnes.cz",[267,268]],["cbc.ca",269],["slashdot.org",270]]);

const entitiesMap = new Map([["kissasian",5],["ganool",5],["pirate",5],["piratebay",5],["pirateproxy",5],["proxytpb",5],["thepiratebay",5],["limetorrents",[6,10]],["king-pes",6],["depedlps",6],["komikcast",6],["idedroidsafelink",6],["links-url",6],["ak4eg",6],["streanplay",7],["steanplay",7],["pahe",10],["yts",10],["tube8",10],["topeuropix",10],["moviescounter",10],["torrent9",10],["desiremovies",10],["movs4u",10],["uwatchfree",10],["hydrax",10],["4movierulz",10],["projectfreetv",10],["arabseed",10],["btdb",[10,48]],["world4ufree",10],["streamsport",10],["rojadirectatvhd",10],["userload",10],["adyou",12],["fxporn69",15],["rexporn",19],["movies07",19],["pornocomics",19],["pornomoll",23],["gsurl",24],["freecoursesonline",25],["lordpremium",25],["todovieneok",25],["novablogitalia",25],["anisubindo",25],["btvsports",25],["stream4free",25],["mimaletadepeliculas",26],["burningseries",27],["dz4soft",28],["yoututosjeff",28],["ebookmed",28],["lanjutkeun",28],["novelasesp",28],["singingdalong",28],["doujindesu",28],["xmovies8",31],["mega-dvdrip",38],["peliculas-dvdrip",38],["desbloqueador",39],["newpelis",[40,46]],["pelix",[40,46]],["allcalidad",[40,175]],["khatrimaza",40],["camwhores",41],["camwhorestv",41],["uproxy",41],["mirrorace",52],["mixdrp",57],["asiansex",59],["japanfuck",59],["japanporn",59],["teensex",59],["vintagetube",59],["xxxmovies",59],["zooqle",63],["hdfull",67],["mangamanga",69],["streameast",70],["thestreameast",70],["vev",74],["vidop",74],["zone-telechargement",76],["1337x",76],["x1337x",76],["megalink",81],["gmx",82],["mega1080p",87],["anitube",87],["9hentai",89],["gaypornhdfree",96],["cinemakottaga",96],["privatemoviez",96],["apkmaven",96],["popcornstream",98],["fc-lc",106],["pornktube",115],["watchseries",115],["milfnut",119],["hubdrive",123],["azsoft",124],["pagalmovies",132],["7starhd",132],["jalshamoviez",132],["9xupload",132],["bdupload",132],["desiupload",132],["rdxhd1",132],["nuvid",134],["moviessources",144],["0gomovie",146],["0gomovies",146],["123moviefree",146],["1kmovies",146],["1madrasdub",146],["1primewire",146],["2embed",146],["2madrasdub",146],["2umovies",146],["4anime",146],["adblockplustape",146],["altadefinizione01",146],["atomixhq",146],["beinmatch",146],["brmovies",146],["cima4u",146],["clicknupload",146],["cmovies",146],["cricfree",146],["crichd",146],["dood",146],["f1stream",146],["faselhd",146],["fbstream",146],["filemoon",146],["filepress",[146,212]],["filmlinks4u",146],["filmpertutti",146],["filmyzilla",146],["fmovies",146],["french-stream",146],["fzlink",146],["gofilms4u",146],["gogoanime",146],["gomoviz",146],["hdmoviefair",146],["hdmovies4u",146],["hdmovies50",146],["hdmoviesfair",146],["hh3dhay",146],["hindilinks4u",146],["hotmasti",146],["hurawatch",146],["klmanga",146],["klubsports",146],["libertestreamvf",146],["livetvon",146],["manga1000",146],["manga1001",146],["mangaraw",146],["mangarawjp",146],["mlbstream",146],["motogpstream",146],["movierulz",146],["movies123",146],["movies2watch",146],["moviesden",146],["moviezaddiction",146],["nbastream",146],["netcine",146],["nflstream",146],["nhlstream",146],["onlinewatchmoviespk",146],["pctfenix",146],["pctnew",146],["pksmovies",146],["plyjam",146],["plylive",146],["pogolinks",146],["popcorntime",146],["poscitech",146],["rugbystreams",146],["shahed4u",146],["sflix",146],["sitesunblocked",146],["solarmovies",146],["sportcast",146],["sportskart",146],["sports-stream",146],["streaming-french",146],["streamers",146],["streamingcommunity",[146,192]],["strikeout",146],["t20cup",146],["tennisstreams",146],["torrentdosfilmes",146],["toonanime",146],["tvply",146],["ufcstream",146],["uptomega",146],["uqload",146],["vudeo",146],["vidoo",146],["vipbox",146],["vipboxtv",146],["vipleague",146],["viprow",146],["yesmovies",146],["yomovies",146],["yomovies1",146],["yt2mp3s",146],["kat",146],["katbay",146],["kickass",146],["kickasshydra",146],["kickasskat",146],["kickass2",146],["kickasstorrents",146],["kat2",146],["kattracker",146],["thekat",146],["thekickass",146],["kickassz",146],["kickasstorrents2",146],["topkickass",146],["kickassgo",146],["kkickass",146],["kkat",146],["kickasst",146],["kick4ss",146],["guardaserie",152],["cine-calidad",153],["xvideos",154],["videovard",169],["gntai",175],["grantorrent",175],["mejortorrent",175],["mejortorrento",175],["mejortorrents",175],["mejortorrents1",175],["mejortorrentt",175],["shineads",178],["bg-gledai",207],["gledaitv",207],["motchill",223],["upns",239],["readcomiconline",242],["nekopoi",243],["gdflix",261],["a1movies",262]]);

const exceptionsMap = new Map([["forum.soft98.ir",[116,134]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const elementMatches = elem => {
        if ( targetSelector === 'window' ) { return elem === window; }
        if ( targetSelector === 'document' ) { return elem === document; }
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        // https://github.com/uBlockOrigin/uAssets/discussions/17907#discussioncomment-9871079
        const id = String(elem.id);
        if ( id !== '' ) { parts.push(`#${CSS.escape(id)}`); }
        for ( let i = 0; i < elem.classList.length; i++ ) {
            parts.push(`.${CSS.escape(elem.classList.item(i))}`);
        }
        for ( let i = 0; i < elem.attributes.length; i++ ) {
            const attr = elem.attributes.item(i);
            if ( attr.name === 'id' ) { continue; }
            if ( attr.name === 'class' ) { continue; }
            parts.push(`[${CSS.escape(attr.name)}="${attr.value}"]`);
        }
        return parts.join('');
    };
    const shouldPrevent = (thisArg, type, handler) => {
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // eslint-disable-line no-debugger
        }
        if ( matchesBoth && targetSelector !== undefined ) {
            if ( elementMatches(thisArg) === false ) { return false; }
        }
        return matchesBoth;
    };
    runAt(( ) => {
        proxyApplyFn('EventTarget.prototype.addEventListener', function(context) {
            const { callArgs, thisArg } = context;
            let t, h;
            try {
                t = String(callArgs[0]);
                if ( typeof callArgs[1] === 'function' ) {
                    h = String(safe.Function_toString(callArgs[1]));
                } else if ( typeof callArgs[1] === 'object' && callArgs[1] !== null ) {
                    if ( typeof callArgs[1].handleEvent === 'function' ) {
                        h = String(safe.Function_toString(callArgs[1].handleEvent));
                    }
                } else {
                    h = String(callArgs[1]);
                }
            } catch {
            }
            if ( type === '' && pattern === '' ) {
                safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
            } else if ( shouldPrevent(thisArg, t, h) ) {
                return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
            }
            return context.reflect();
        });
    }, extraArgs.runAt);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
    try { addEventListenerDefuser(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_addEventListenerDefuser();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
