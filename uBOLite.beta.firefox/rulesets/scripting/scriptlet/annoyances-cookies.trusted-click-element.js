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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedClickElement = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["div[aria-label=\"Decline optional cookies\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["span#cmpbntnotxt","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pg-shadow-host >>> #pg-configure-btn, #pg-shadow-host >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-shadow-host >>> button#pg-save-preferences-btn"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[title*=\"Zustimmen\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["#pg-shadow-root-host >>> button#pg-reject-btn"],["#pg-shadow-root-host >>> button#pg-configure-btn"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt\"]","","1000"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["button[title=\"Alle akzeptieren\"]","","1000"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title=\"Zustimmen\"]","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button.mde-consent-accept-btn","","1000"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"]];

const hostnamesMap = new Map([["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["bloomberg.com",7],["forbes.com",[7,65]],["cmpv2.standard.co.uk",[8,9]],["cmpv2.independent.co.uk",[10,11,12]],["wetransfer.com",[13,14]],["spiegel.de",[15,16]],["nytimes.com",[17,153]],["consent.yahoo.com",18],["tumblr.com",19],["fplstatistics.co.uk",20],["e-shop.leonidas.com",21],["cdn.privacy-mgmt.com",[22,23,38,39,40,82,87,88,94,102,120,121,122,123,146,168,179,191,192,193]],["festoolcanada.com",24],["dr-beckmann.com",24],["consent.ladbible.com",[25,26]],["consent.unilad.com",[25,26]],["consent.gamingbible.com",[25,26]],["consent.sportbible.com",[25,26]],["consent.tyla.com",[25,26]],["consent.ladbiblegroup.com",[25,26]],["m2o.it",27],["deejay.it",27],["capital.it",27],["ilmattino.it",[27,28]],["leggo.it",[27,28]],["libero.it",27],["tiscali.it",27],["consent-manager.ft.com",[29,30]],["mediaworld.it",32],["tf1info.fr",33],["uber.com",[34,154]],["ubereats.com",34],["lego.com",35],["ai.meta.com",36],["lilly.com",37],["telekom.com",41],["telekom.net",41],["telekom.de",41],["blick.ch",42],["digi24.ro",42],["digisport.ro",42],["digitalfoundry.net",42],["egx.net",42],["eurogamer.it",42],["mail.com",42],["mcmcomiccon.com",42],["nachrichten.at",42],["nintendolife.com",42],["oe24.at",42],["paxsite.com",42],["peacocktv.com",42],["player.pl",42],["pricerunner.com",42],["pricerunner.se",42],["pricerunner.dk",42],["proximus.be",42],["proximus.com",42],["purexbox.com",42],["pushsquare.com",42],["southparkstudios.com",42],["starwarscelebration.com",42],["thehaul.com",42],["timeextension.com",42],["travelandleisure.com",42],["tunein.com",42],["videoland.com",42],["wizzair.com",42],["wetter.at",42],["dicebreaker.com",[43,44]],["eurogamer.cz",[43,44]],["eurogamer.es",[43,44]],["eurogamer.net",[43,44]],["eurogamer.nl",[43,44]],["eurogamer.pl",[43,44]],["eurogamer.pt",[43,44]],["gamesindustry.biz",[43,44]],["jelly.deals",[43,44]],["reedpop.com",[43,44]],["rockpapershotgun.com",[43,44]],["thepopverse.com",[43,44]],["vg247.com",[43,44]],["videogameschronicle.com",[43,44]],["eurogamer.de",45],["roadtovr.com",46],["mundodeportivo.com",[47,116]],["m.youtube.com",48],["www.youtube.com",48],["ohra.nl",49],["corriere.it",50],["gazzetta.it",50],["oggi.it",50],["cmp.sky.it",51],["tennisassa.fi",52],["formula1.com",53],["f1racing.pl",54],["consent-pref.trustarc.com",57],["highlights.legaseriea.it",58],["calciomercato.com",58],["sosfanta.com",59],["wetter.com",62],["youmath.it",63],["pip.gov.pl",64],["dw.com",66],["winfuture.de",66],["lippu.fi",66],["racingnews365.com",66],["slashdot.org",67],["mediaset.it",68],["fortune.com",69],["cmp.dpgmedia.nl",[70,72]],["cmp.dpgmedia.be",[70,72]],["cmp.ad.nl",[70,72]],["cmp.autotrack.nl",[70,72]],["cmp.autoweek.nl",[70,72]],["cmp.bd.nl",[70,72]],["cmp.bndestem.nl",[70,72]],["cmp.demorgen.be",[70,72]],["cmp.deondernemer.nl",[70,72]],["cmp.destentor.nl",[70,72]],["cmp.ed.nl",[70,72]],["cmp.gaspedaal.nl",[70,72]],["cmp.gelderlander.nl",[70,72]],["cmp.hln.be",[70,72]],["cmp.humo.be",[70,72]],["cmp.margriet.nl",[70,72]],["cmp.nu.nl",[70,72]],["cmp.qmusic.nl",[70,72]],["cmp.stijlvol-wonen.com",[70,72]],["cmp.trouw.nl",[70,72]],["cmp.tubantia.nl",[70,72]],["cmp.vtwonen.be",[70,72]],["cmp.vtwonen.nl",[70,72]],["cmp.pzc.nl",[70,72]],["cmp.zozitdat.nl",[70,72]],["cmp-sp.vrt.be",[71,72]],["myprivacy.dpgmedia.nl",73],["dpgmediagroup.com",73],["story.nl",73],["veronicasuperguide.nl",73],["ilrestodelcarlino.it",74],["quotidiano.net",74],["lanazione.it",74],["ilgiorno.it",74],["iltelegrafolivorno.it",74],["auto.it",75],["boursobank.com",75],["frandroid.com",75],["meteofrance.com",75],["mondialtissus.fr",75],["publicsenat.fr",75],["rmcbfmplay.com",75],["nutri-plus.de",76],["aa.com",77],["consent.capital.fr",78],["programme-tv.net",78],["cmp.e24.no",[79,80]],["cmp.vg.no",[79,80]],["huffingtonpost.fr",81],["rainews.it",83],["remarkable.com",84],["netzwelt.de",85],["money.it",86],["cmp.computerbild.de",88],["cmp.petbook.de",88],["cmp-sp.siegener-zeitung.de",88],["cmp-sp.sportbuzzer.de",88],["klarmobil.de",88],["eneco.nl",89],["deichmann.com",90],["blackpoolgazette.co.uk",91],["lep.co.uk",91],["northamptonchron.co.uk",91],["scotsman.com",91],["shieldsgazette.com",91],["thestar.co.uk",91],["portsmouth.co.uk",91],["sunderlandecho.com",91],["northernirelandworld.com",91],["3addedminutes.com",91],["anguscountyworld.co.uk",91],["banburyguardian.co.uk",91],["bedfordtoday.co.uk",91],["biggleswadetoday.co.uk",91],["bucksherald.co.uk",91],["burnleyexpress.net",91],["buxtonadvertiser.co.uk",91],["chad.co.uk",91],["daventryexpress.co.uk",91],["derbyshiretimes.co.uk",91],["derbyworld.co.uk",91],["derryjournal.com",91],["dewsburyreporter.co.uk",91],["doncasterfreepress.co.uk",91],["falkirkherald.co.uk",91],["fifetoday.co.uk",91],["glasgowworld.com",91],["halifaxcourier.co.uk",91],["harboroughmail.co.uk",91],["harrogateadvertiser.co.uk",91],["hartlepoolmail.co.uk",91],["hemeltoday.co.uk",91],["hucknalldispatch.co.uk",91],["lancasterguardian.co.uk",91],["leightonbuzzardonline.co.uk",91],["lincolnshireworld.com",91],["liverpoolworld.uk",91],["londonworld.com",91],["lutontoday.co.uk",91],["manchesterworld.uk",91],["meltontimes.co.uk",91],["miltonkeynes.co.uk",91],["newcastleworld.com",91],["newryreporter.com",91],["newsletter.co.uk",91],["northantstelegraph.co.uk",91],["northumberlandgazette.co.uk",91],["nottinghamworld.com",91],["peterboroughtoday.co.uk",91],["rotherhamadvertiser.co.uk",91],["stornowaygazette.co.uk",91],["surreyworld.co.uk",91],["thescarboroughnews.co.uk",91],["thesouthernreporter.co.uk",91],["totallysnookered.com",91],["wakefieldexpress.co.uk",91],["walesworld.com",91],["warwickshireworld.com",91],["wigantoday.net",91],["worksopguardian.co.uk",91],["yorkshireeveningpost.co.uk",91],["yorkshirepost.co.uk",91],["eurocard.com",92],["saseurobonusmastercard.se",93],["tver.jp",95],["linkedin.com",96],["elmundo.es",97],["srf.ch",98],["alternate.de",98],["bayer04.de",98],["douglas.de",98],["falke.com",98],["flaschenpost.de",98],["hornbach.nl",98],["postbank.de",98],["immowelt.de",99],["morenutrition.de",99],["moebel24.ch",[100,159]],["meubles.fr",100],["meubelo.nl",100],["moebel.de",100],["mapillary.com",101],["cmp.seznam.cz",103],["marca.com",104],["raiplay.it",105],["derstandard.at",106],["derstandard.de",106],["ansa.it",107],["delladio.it",107],["huffingtonpost.it",107],["lastampa.it",107],["movieplayer.it",107],["multiplayer.it",107],["repubblica.it",107],["tomshw.it",107],["tuttoandroid.net",107],["tuttotech.net",107],["ilgazzettino.it",108],["ilmessaggero.it",108],["ilsecoloxix.it",108],["privacy.motorradonline.de",109],["dailystar.co.uk",[110,111,112,113]],["mirror.co.uk",[110,111,112,113]],["jeuxvideo.com",114],["idnes.cz",115],["20minutes.fr",116],["20minutos.es",116],["24sata.hr",116],["abc.es",116],["actu.fr",116],["antena3.com",116],["antena3internacional.com",116],["atresmedia.com",116],["atresmediapublicidad.com",116],["atresmediastudios.com",116],["atresplayer.com",116],["autopista.es",116],["belfasttelegraph.co.uk",116],["bonduelle.it",116],["bonniernews.se",116],["cadenaser.com",116],["ciclismoafondo.es",116],["cnews.fr",116],["cope.es",116],["correryfitness.com",116],["decathlon.nl",116],["decathlon.pl",116],["diepresse.com",116],["dn.se",116],["dnevnik.hr",116],["dumpert.nl",116],["ebuyclub.com",116],["edreams.de",116],["edreams.net",116],["elcomercio.es",116],["elconfidencial.com",116],["eldesmarque.com",116],["elespanol.com",116],["elpais.com",116],["elpais.es",116],["engadget.com",116],["euronews.com",116],["europafm.com",116],["expressen.se",116],["flooxernow.com",116],["france.tv",116],["france24.com",116],["ghacks.net",116],["gva.be",116],["hbvl.be",116],["krone.at",116],["kurier.at",116],["ladepeche.fr",116],["lalibre.be",116],["lasexta.com",116],["lasprovincias.es",116],["ledauphine.com",116],["lejdd.fr",116],["leparisien.fr",116],["lexpress.fr",116],["libremercado.com",116],["marmiton.org",116],["melodia-fm.com",116],["metronieuws.nl",116],["nicematin.com",116],["nieuwsblad.be",116],["numerama.com",116],["ondacero.es",116],["profil.at",116],["radiofrance.fr",116],["rankia.com",116],["rfi.fr",116],["rossmann.pl",116],["rtbf.be",116],["rtl.lu",116],["science-et-vie.com",116],["sensacine.com",116],["sfgame.net",116],["shure.com",116],["silicon.es",116],["sncf-connect.com",116],["sport.es",116],["techcrunch.com",116],["telegraaf.nl",116],["telequebec.tv",116],["trailrun.es",116],["video-streaming.orange.fr",116],["lotoquebec.com",116],["ryobitools.eu",[117,118]],["americanexpress.com",119],["golem.de",120],["vikingline.com",124],["1und1.de",125],["infranken.de",126],["cmp.chip.de",127],["estadiodeportivo.com",128],["kicker.de",129],["formulatv.com",130],["web.de",131],["lefigaro.fr",132],["linternaute.com",133],["consent.caminteresse.fr",134],["volksfreund.de",135],["dailypost.co.uk",136],["the-express.com",136],["tarife.mediamarkt.de",137],["saturn.de",138],["eltiempo.es",[139,140]],["otempo.pt",141],["tweakers.net",[142,143]],["cmp-sp.goettinger-tageblatt.de",145],["privacy.maennersache.de",145],["sinergy.ch",147],["agglo-valais-central.ch",147],["biomedcentral.com",148],["hsbcnet.com",149],["hsbcinnovationbanking.com",149],["create.hsbc",149],["gbm.hsbc.com",149],["hsbc.co.uk",150],["internationalservices.hsbc.com",150],["history.hsbc.com",150],["about.hsbc.co.uk",151],["privatebanking.hsbc.com",152],["independent.co.uk",155],["the-independent.com",156],["argos.co.uk",157],["poco.de",[158,159]],["lipo.ch",160],["schubiger.ch",161],["gutefrage.net",162],["insideparadeplatz.ch",162],["pdfupload.io",163],["gamestar.de",164],["verksamt.se",165],["booking.com",166],["dhl.de",166],["khanacademy.org",166],["konami.com",166],["groceries.asda.com",166],["pluto.tv",166],["telenet.be",166],["questdiagnostics.com",166],["here.com",167],["cmp.heise.de",169],["zara.com",170],["negociardivida.spcbrasil.org.br",171],["privacy.topreality.sk",173],["s-pankki.fi",174],["vu.lt",175],["adnkronos.com",[176,177]],["cornwalllive.com",[176,177]],["cyprus-mail.com",[176,177]],["informazione.it",[176,177]],["mymovies.it",[176,177]],["tuttoeuropei.com",[176,177]],["video.lacnews24.it",[176,177]],["taxscouts.com",178],["online.no",180],["telenor.no",180],["austrian.com",181],["hornetsecurity.com",182],["kayzen.io",182],["standaard.be",183],["cmp.bz-berlin.de",184],["cmp-sp.tagesspiegel.de",184],["bruendl.at",185],["latamairlines.com",186],["elisa.ee",187],["baseendpoint.brigitte.de",188],["baseendpoint.gala.de",188],["regjeringen.no",189],["sp-manager-magazin-de.manager-magazin.de",190],["centrum24.pl",194],["replay.lsm.lv",195],["mobile.de",196],["cookist.it",197],["fanpage.it",197],["geopop.it",197],["lexplain.it",197],["royalmail.com",198],["gmx.net",199],["gmx.ch",200],["mojehobby.pl",201],["sp.stylevamp.de",202],["easyjet.com",203],["experian.co.uk",203],["postoffice.co.uk",203]]);

const entitiesMap = new Map([["consent.google",0],["festool",24],["hertz",31],["mediamarkt",32],["gmx",42],["music.amazon",[55,56]],["chrono24",[60,61]],["kinepolis",66],["americanairlines",77],["joyn",99],["degiro",124],["atlasformen",144],["hsbc",149],["moebelix",158],["moemax",158],["xxxlutz",158],["xxxlesnina",158],["samsonite",166],["adidas",172],["super-hobby",201]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedClickElement(
    selectors = '',
    extraMatch = '',
    delay = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('trusted-click-element', selectors, extraMatch, delay);

    if ( extraMatch !== '' ) {
        const assertions = safe.String_split.call(extraMatch, ',').map(s => {
            const pos1 = s.indexOf(':');
            const s1 = pos1 !== -1 ? s.slice(0, pos1) : s;
            const not = s1.startsWith('!');
            const type = not ? s1.slice(1) : s1;
            const s2 = pos1 !== -1 ? s.slice(pos1+1).trim() : '';
            if ( s2 === '' ) { return; }
            const out = { not, type };
            const match = /^\/(.+)\/(i?)$/.exec(s2);
            if ( match !== null ) {
                out.re = new RegExp(match[1], match[2] || undefined);
                return out;
            }
            const pos2 = s2.indexOf('=');
            const key = pos2 !== -1 ? s2.slice(0, pos2).trim() : s2;
            const value = pos2 !== -1 ? s2.slice(pos2+1).trim() : '';
            out.re = new RegExp(`^${this.escapeRegexChars(key)}=${this.escapeRegexChars(value)}`);
            return out;
        }).filter(details => details !== undefined);
        const allCookies = assertions.some(o => o.type === 'cookie')
            ? getAllCookiesFn()
            : [];
        const allStorageItems = assertions.some(o => o.type === 'localStorage')
            ? getAllLocalStorageFn()
            : [];
        const hasNeedle = (haystack, needle) => {
            for ( const { key, value } of haystack ) {
                if ( needle.test(`${key}=${value}`) ) { return true; }
            }
            return false;
        };
        for ( const { not, type, re } of assertions ) {
            switch ( type ) {
            case 'cookie':
                if ( hasNeedle(allCookies, re) === not ) { return; }
                break;
            case 'localStorage':
                if ( hasNeedle(allStorageItems, re) === not ) { return; }
                break;
            }
        }
    }

    const getShadowRoot = elem => {
        // Firefox
        if ( elem.openOrClosedShadowRoot ) {
            return elem.openOrClosedShadowRoot;
        }
        // Chromium
        if ( typeof chrome === 'object' ) {
            if ( chrome.dom && chrome.dom.openOrClosedShadowRoot ) {
                return chrome.dom.openOrClosedShadowRoot(elem);
            }
        }
        return null;
    };

    const querySelectorEx = (selector, context = document) => {
        const pos = selector.indexOf(' >>> ');
        if ( pos === -1 ) { return context.querySelector(selector); }
        const outside = selector.slice(0, pos).trim();
        const inside = selector.slice(pos + 5).trim();
        const elem = context.querySelector(outside);
        if ( elem === null ) { return null; }
        const shadowRoot = getShadowRoot(elem);
        return shadowRoot && querySelectorEx(inside, shadowRoot);
    };

    const selectorList = safe.String_split.call(selectors, /\s*,\s*/)
        .filter(s => {
            try {
                void querySelectorEx(s);
            } catch {
                return false;
            }
            return true;
        });
    if ( selectorList.length === 0 ) { return; }

    const clickDelay = parseInt(delay, 10) || 1;
    const t0 = Date.now();
    const tbye = t0 + 10000;
    let tnext = selectorList.length !== 1 ? t0 : t0 + clickDelay;

    const terminate = ( ) => {
        selectorList.length = 0;
        next.stop();
        observe.stop();
    };

    const next = notFound => {
        if ( selectorList.length === 0 ) {
            safe.uboLog(logPrefix, 'Completed');
            return terminate();
        }
        const tnow = Date.now();
        if ( tnow >= tbye ) {
            safe.uboLog(logPrefix, 'Timed out');
            return terminate();
        }
        if ( notFound ) { observe(); }
        const delay = Math.max(notFound ? tbye - tnow : tnext - tnow, 1);
        next.timer = setTimeout(( ) => {
            next.timer = undefined;
            process();
        }, delay);
        safe.uboLog(logPrefix, `Waiting for ${selectorList[0]}...`);
    };
    next.stop = ( ) => {
        if ( next.timer === undefined ) { return; }
        clearTimeout(next.timer);
        next.timer = undefined;
    };

    const observe = ( ) => {
        if ( observe.observer !== undefined ) { return; }
        observe.observer = new MutationObserver(( ) => {
            if ( observe.timer !== undefined ) { return; }
            observe.timer = setTimeout(( ) => {
                observe.timer = undefined;
                process();
            }, 20);
        });
        observe.observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    };
    observe.stop = ( ) => {
        if ( observe.timer !== undefined ) {
            clearTimeout(observe.timer);
            observe.timer = undefined;
        }
        if ( observe.observer ) {
            observe.observer.disconnect();
            observe.observer = undefined;
        }
    };

    const process = ( ) => {
        next.stop();
        if ( Date.now() < tnext ) { return next(); }
        const selector = selectorList.shift();
        if ( selector === undefined ) { return terminate(); }
        const elem = querySelectorEx(selector);
        if ( elem === null ) {
            selectorList.unshift(selector);
            return next(true);
        }
        safe.uboLog(logPrefix, `Clicked ${selector}`);
        elem.click();
        tnext += clickDelay;
        next();
    };

    runAtHtmlElementFn(process);
}

function getAllCookiesFn() {
    const safe = safeSelf();
    return safe.String_split.call(document.cookie, /\s*;\s*/).map(s => {
        const pos = s.indexOf('=');
        if ( pos === 0 ) { return; }
        if ( pos === -1 ) { return `${s.trim()}=`; }
        const key = s.slice(0, pos).trim();
        const value = s.slice(pos+1).trim();
        return { key, value };
    }).filter(s => s !== undefined);
}

function getAllLocalStorageFn(which = 'localStorage') {
    const storage = self[which];
    const out = [];
    for ( let i = 0; i < storage.length; i++ ) {
        const key = storage.key(i);
        const value = storage.getItem(key);
        return { key, value };
    }
    return out;
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
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
    try { trustedClickElement(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_trustedClickElement();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
