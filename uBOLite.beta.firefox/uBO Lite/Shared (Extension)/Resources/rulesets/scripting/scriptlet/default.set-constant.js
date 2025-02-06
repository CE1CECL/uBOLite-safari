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
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["attachEvent","trueFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["foundation.adPlayer.bitmovin","{}"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.serviceWorker","{}"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["app_vars.please_disable_adblock","undefined"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["sensorsDataAnalytic201505","{}"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["navigator.brave","undefined"],["paAddUnit","noopFunc"],["showBlackout","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["googletag.cmd.push","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["openPopunder","noopFunc"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["navigator.sendBeacon","noopFunc"],["Taplytics","{}"],["Taplytics.featureFlagEnabled","noopFunc"],["Taplytics.runningExperiments","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["fapit.check","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,626]],["t-online.de",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["motherless.com",8],["sueddeutsche.de",9],["watchanimesub.net",10],["wco.tv",10],["wcoanimesub.tv",10],["wcoforever.net",10],["freeviewmovies.com",10],["filehorse.com",10],["guidetnt.com",10],["sp-today.com",10],["linkvertise.com",10],["eropaste.net",10],["getpaste.link",10],["sharetext.me",10],["note.sieuthuthuat.com",10],["elcriticodelatele.com",[10,301]],["gadgets.es",[10,301]],["amateurporn.co",[10,111]],["wiwo.de",11],["masteranime.tv",12],["alphaporno.com",[13,397]],["porngem.com",13],["shortit.pw",[13,95]],["familyporn.tv",13],["id45.cyou",13],["85tube.com",[13,79]],["k1nk.co",13],["watchasians.cc",13],["soltoshindo.com",13],["nolive.me",15],["sankakucomplex.com",16],["player.glomex.com",17],["merkur.de",17],["tz.de",17],["hotpornfile.org",20],["player.tabooporns.com",20],["x69.ovh",20],["wiztube.xyz",20],["multiup.us",20],["rpdrlatino.live",20],["peliculas8k.com",[20,21]],["video.q34r.org",20],["czxxx.org",20],["vtplayer.online",20],["netu.ac",20],["netu.frembed.lol",20],["dirtyvideo.fun",21],["adbull.org",22],["mitly.us",22],["linkrex.net",22],["linx.cc",22],["oke.io",22],["dz4link.com",22],["linclik.com",22],["shrt10.com",22],["loptelink.com",22],["cut-fly.com",22],["linkfinal.com",22],["payskip.org",22],["cutpaid.com",22],["forexmab.com",22],["linkjust.com",22],["linkszia.co",22],["leechpremium.link",22],["icutlink.com",[22,116]],["oncehelp.com",22],["rgl.vn",22],["reqlinks.net",22],["bitlk.com",22],["qlinks.eu",22],["link.3dmili.com",22],["short-fly.com",22],["foxseotools.com",22],["pngit.live",22],["link.turkdown.com",22],["urlty.com",22],["7r6.com",22],["oko.sh",22],["ckk.ai",22],["fc.lc",22],["fstore.biz",22],["cuts-url.com",22],["eio.io",22],["exe.app",22],["exee.io",22],["exey.io",22],["skincarie.com",22],["exeo.app",22],["coinlyhub.com",[22,190]],["adsafelink.com",22],["aii.sh",22],["cybertechng.com",[22,204]],["cutdl.xyz",22],["iir.ai",22],["shorteet.com",[22,224]],["smoner.com",22],["gyanlight.com",22],["xpshort.com",22],["upshrink.com",22],["enit.in",[22,219]],["ez4short.com",22],["easysky.in",22],["veganab.co",22],["adrinolinks.in",22],["go.bloggingaro.com",22],["go.gyanitheme.com",22],["go.theforyou.in",22],["go.hipsonyc.com",22],["birdurls.com",22],["vipurl.in",22],["try2link.com",22],["jameeltips.us",22],["gainl.ink",22],["promo-visits.site",22],["satoshi-win.xyz",[22,240]],["shorterall.com",22],["encurtandourl.com",22],["forextrader.site",22],["postazap.com",22],["cety.app",22],["exego.app",[22,235]],["cutlink.net",22],["cutsy.net",22],["cutyurls.com",22],["cutty.app",22],["cutnet.net",22],["tinys.click",[22,204]],["cpm.icu",22],["panyshort.link",22],["enagato.com",22],["pandaznetwork.com",22],["tvi.la",22],["iir.la",22],["tii.la",22],["oei.la",22],["lnbz.la",[22,219]],["oii.la",[22,248]],["tpi.li",[22,248]],["recipestutorials.com",22],["shrinkforearn.in",22],["techyuth.xyz",22],["oii.io",22],["du-link.in",22],["atglinks.com",22],["thotpacks.xyz",22],["megaurl.in",22],["megafly.in",22],["simana.online",22],["fooak.com",22],["joktop.com",22],["evernia.site",22],["falpus.com",22],["link.paid4link.com",[22,252]],["exalink.fun",22],["indiamaja.com",22],["newshuta.in",22],["shortxlinks.com",22],["upfiles.app",22],["upfiles-urls.com",22],["flycutlink.com",[22,204]],["linksly.co",22],["pkr.pw",22],["imagenesderopaparaperros.com",22],["shortenbuddy.com",22],["apksvip.com",22],["4cash.me",22],["namaidani.com",22],["teknomuda.com",22],["miuiku.com",22],["savelink.site",22],["samaa-pro.com",22],["miklpro.com",22],["modapk.link",22],["ccurl.net",22],["linkpoi.me",22],["menjelajahi.com",22],["pewgame.com",22],["haonguyen.top",22],["crazyblog.in",22],["gtlink.co",22],["cutearn.net",22],["rshrt.com",22],["filezipa.com",22],["dz-linkk.com",22],["theblissempire.com",22],["finanzas-vida.com",22],["adurly.cc",22],["paid4.link",22],["link.asiaon.top",22],["go.gets4link.com",22],["download.sharenulled.net",22],["beingtek.com",22],["shorturl.unityassets4free.com",22],["disheye.com",22],["techymedies.com",22],["techysuccess.com",22],["za.gl",[22,133]],["bblink.com",22],["myad.biz",22],["swzz.xyz",22],["vevioz.com",22],["charexempire.com",22],["clk.asia",22],["linka.click",22],["sturls.com",22],["myshrinker.com",22],["snowurl.com",[22,204]],["netfile.cc",22],["rocklink.in",22],["techgeek.digital",22],["download3s.net",22],["shortx.net",22],["shortawy.com",22],["tlin.me",22],["apprepack.com",22],["up-load.one",22],["zuba.link",22],["golink.xaydungplus.com",22],["bestcash2020.com",22],["hoxiin.com",22],["go.linkbnao.com",22],["link-yz.com",22],["paylinnk.com",22],["thizissam.in",22],["ier.ai",22],["adslink.pw",22],["novelssites.com",22],["links.medipost.org",22],["faucetcrypto.net",22],["short.freeltc.top",22],["trxking.xyz",22],["weadown.com",22],["m.bloggingguidance.com",22],["blog.onroid.com",22],["link.codevn.net",22],["upfilesurls.com",22],["shareus.site",22],["link4rev.site",22],["c2g.at",22],["bitcosite.com",[22,411]],["cryptosh.pro",22],["link68.net",22],["traffic123.net",22],["windowslite.net",[22,204]],["viewfr.com",22],["cl1ca.com",22],["4br.me",22],["fir3.net",22],["kiddyshort.com",22],["watchmygf.me",[23,49]],["camwhorez.tv",[23,35,78,79]],["cambay.tv",[23,57,78,108,110,111,112,113]],["fpo.xxx",[23,57]],["sexemix.com",23],["heavyfetish.com",[23,553]],["thotcity.su",23],["viralxxxporn.com",[23,227]],["you-porn.com",25],["youporngay.com",25],["youpornru.com",25],["9908ww.com",25],["adelaidepawnbroker.com",25],["bztube.com",25],["hotovs.com",25],["insuredhome.org",25],["nudegista.com",25],["pornluck.com",25],["vidd.se",25],["pornhub.com",25],["pornerbros.com",26],["freep.com",26],["porn.com",29],["tune.pk",30],["noticias.gospelmais.com.br",31],["techperiod.com",31],["viki.com",[32,33]],["sleazyneasy.com",[35,36,37]],["smutr.com",[35,186]],["yourporngod.com",[35,36]],["javbangers.com",[35,291]],["camfox.com",35],["camthots.tv",[35,108]],["shegotass.info",35],["amateur8.com",35],["bigtitslust.com",35],["ebony8.com",35],["freeporn8.com",35],["lesbian8.com",35],["maturetubehere.com",35],["sortporn.com",35],["webcamvau.com",35],["motherporno.com",[35,36,57,110]],["tktube.com",35],["theporngod.com",[35,36]],["watchdirty.to",[35,79,80,111]],["pornsocket.com",38],["luxuretv.com",39],["porndig.com",[40,41]],["webcheats.com.br",42],["ceesty.com",[43,44]],["gestyy.com",[43,44]],["corneey.com",44],["destyy.com",44],["festyy.com",44],["sh.st",44],["mitaku.net",44],["angrybirdsnest.com",45],["zrozz.com",45],["clix4btc.com",45],["4tests.com",45],["business-standard.com",45],["goltelevision.com",45],["news-und-nachrichten.de",45],["laradiobbs.net",45],["urlaubspartner.net",45],["produktion.de",45],["cinemaxxl.de",45],["bladesalvador.com",45],["tempr.email",45],["cshort.org",45],["friendproject.net",45],["covrhub.com",45],["katfile.com",45],["trust.zone",45],["planetsuzy.org",46],["empflix.com",47],["alleneconomicmatter.com",48],["apinchcaseation.com",48],["bethshouldercan.com",48],["bigclatterhomesguideservice.com",48],["bradleyviewdoctor.com",48],["brittneystandardwestern.com",48],["brookethoughi.com",48],["brucevotewithin.com",48],["cindyeyefinal.com",48],["denisegrowthwide.com",48],["donaldlineelse.com",48],["edwardarriveoften.com",48],["erikcoldperson.com",48],["evelynthankregion.com",48],["graceaddresscommunity.com",48],["heatherdiscussionwhen.com",48],["housecardsummerbutton.com",48],["jamessoundcost.com",48],["jamesstartstudent.com",48],["jamiesamewalk.com",48],["jasminetesttry.com",48],["jasonresponsemeasure.com",48],["jayservicestuff.com",48],["jessicaglassauthor.com",48],["johntryopen.com",48],["josephseveralconcern.com",48],["kennethofficialitem.com",48],["lisatrialidea.com",48],["lorimuchbenefit.com",48],["loriwithinfamily.com",48],["lukecomparetwo.com",48],["markstyleall.com",48],["michaelapplysome.com",48],["morganoperationface.com",48],["nectareousoverelate.com",48],["paulkitchendark.com",48],["rebeccaneverbase.com",48],["roberteachfinal.com",48],["robertordercharacter.com",48],["robertplacespace.com",48],["ryanagoinvolve.com",48],["sandratableother.com",48],["sandrataxeight.com",48],["seanshowcould.com",48],["sethniceletter.com",48],["shannonpersonalcost.com",48],["sharonwhiledemocratic.com",48],["stevenimaginelittle.com",48],["strawberriesporail.com",48],["susanhavekeep.com",48],["timberwoodanotia.com",48],["tinycat-voe-fashion.com",48],["toddpartneranimal.com",48],["troyyourlead.com",48],["uptodatefinishconference.com",48],["uptodatefinishconferenceroom.com",48],["vincentincludesuccessful.com",48],["voe.sx",48],["motphimtv.com",48],["rabbitstream.net",48],["projectfreetv.one",48],["freeplayervideo.com",48],["nazarickol.com",48],["player-cdn.com",48],["playhydrax.com",[48,483,484]],["transparentcalifornia.com",49],["deepbrid.com",50],["webnovel.com",51],["videosgay.me",[52,53]],["oneupload.to",53],["wishfast.top",53],["rubystm.com",53],["rubyvid.com",53],["schwaebische.de",55],["8tracks.com",56],["3movs.com",57],["bravoerotica.net",[57,110]],["youx.xxx",57],["camclips.tv",[57,186]],["camflow.tv",[57,110,111,154,227]],["camhoes.tv",[57,108,110,111,154,227]],["xmegadrive.com",57],["xxxymovies.com",57],["xxxshake.com",57],["gayck.com",57],["xhand.com",[57,110]],["analdin.com",[57,110]],["revealname.com",58],["golfchannel.com",60],["telemundodeportes.com",60],["stream.nbcsports.com",60],["mathdf.com",60],["gamcore.com",61],["porcore.com",61],["69games.xxx",61],["javmix.app",61],["tecknity.com",62],["haaretz.co.il",63],["haaretz.com",63],["hungama.com",63],["a-o.ninja",63],["anime-odcinki.pl",63],["kumpulmanga.org",63],["shortgoo.blogspot.com",63],["tonanmedia.my.id",[63,435]],["yurasu.xyz",63],["isekaipalace.com",63],["ennovelas.com",[65,71]],["n-tv.de",66],["brigitte.de",67],["stern.de",[67,202]],["foxsports.com.au",68],["canberratimes.com.au",68],["thesimsresource.com",69],["ctrl.blog",72],["sportlife.es",73],["finofilipino.org",74],["mysflink.blogspot.com",76],["assia.tv",77],["assia4.com",77],["assia24.com",77],["cwtvembeds.com",[79,109]],["camlovers.tv",79],["porntn.com",79],["pornissimo.org",79],["sexcams-24.com",[79,111]],["watchporn.to",[79,111]],["camwhorez.video",79],["footstockings.com",[79,80,111]],["xmateur.com",[79,80,111]],["multi.xxx",80],["worldofbitco.in",[81,82]],["weatherx.co.in",[81,82]],["getyourbitco.in",81],["sunbtc.space",81],["ojogos.com.br",84],["powforums.com",85],["supforums.com",85],["studybullet.com",85],["usgamer.net",86],["recordonline.com",86],["freebitcoin.win",87],["e-monsite.com",87],["coindice.win",87],["temp-mails.com",88],["freiepresse.de",89],["investing.com",90],["mp3fiber.com",92],["chicoer.com",93],["dailybreeze.com",93],["dailybulletin.com",93],["dailynews.com",93],["delcotimes.com",93],["eastbaytimes.com",93],["macombdaily.com",93],["ocregister.com",93],["pasadenastarnews.com",93],["pe.com",93],["presstelegram.com",93],["redlandsdailyfacts.com",93],["reviewjournal.com",93],["santacruzsentinel.com",93],["saratogian.com",93],["sentinelandenterprise.com",93],["sgvtribune.com",93],["tampabay.com",93],["times-standard.com",93],["theoaklandpress.com",93],["trentonian.com",93],["twincities.com",93],["whittierdailynews.com",93],["bostonherald.com",93],["dailycamera.com",93],["sbsun.com",93],["dailydemocrat.com",93],["montereyherald.com",93],["orovillemr.com",93],["record-bee.com",93],["redbluffdailynews.com",93],["reporterherald.com",93],["thereporter.com",93],["timescall.com",93],["timesheraldonline.com",93],["ukiahdailyjournal.com",93],["dailylocal.com",93],["mercurynews.com",93],["suedkurier.de",94],["anysex.com",96],["vlist.se",97],["pornve.com",98],["coolrom.com.au",99],["pornohirsch.net",100],["marie-claire.es",101],["gamezhero.com",101],["flashgirlgames.com",101],["onlinesudoku.games",101],["mpg.football",101],["sssam.com",101],["globalnews.ca",102],["drinksmixer.com",103],["leitesculinaria.com",103],["fupa.net",104],["browardpalmbeach.com",105],["dallasobserver.com",105],["houstonpress.com",105],["miaminewtimes.com",105],["phoenixnewtimes.com",105],["westword.com",105],["nhentai.net",106],["nowtv.com.tr",107],["caminspector.net",108],["camwhoreshd.com",108],["camgoddess.tv",108],["gay4porn.com",110],["mypornhere.com",110],["camhub.cc",111],["love4porn.com",111],["thotvids.com",111],["watchmdh.to",111],["celebwhore.com",111],["cluset.com",111],["4kporn.xxx",111],["xhomealone.com",111],["lusttaboo.com",[111,364]],["hentai-moon.com",111],["sexwebvideo.com",111],["sexwebvideo.net",111],["mediapason.it",114],["linkspaid.com",114],["tuotromedico.com",114],["neoteo.com",114],["phoneswiki.com",114],["celebmix.com",114],["myneobuxportal.com",114],["oyungibi.com",114],["25yearslatersite.com",114],["jeshoots.com",115],["techhx.com",115],["karanapk.com",115],["flashplayer.fullstacks.net",117],["cloudapps.herokuapp.com",117],["youfiles.herokuapp.com",117],["texteditor.nsspot.net",117],["temp-mail.org",118],["javhdporn.net",119],["comnuan.com",120],["veedi.com",121],["battleboats.io",121],["fruitlab.com",122],["acetack.com",122],["androidquest.com",122],["apklox.com",122],["chhaprawap.in",122],["gujarativyakaran.com",122],["kashmirstudentsinformation.in",122],["kisantime.com",122],["shetkaritoday.in",122],["pastescript.com",122],["trimorspacks.com",122],["updrop.link",122],["haddoz.net",122],["garoetpos.com",122],["stiletv.it",123],["hqtv.biz",125],["liveuamap.com",126],["muvibg.com",126],["audycje.tokfm.pl",127],["hulu.com",[128,129,130]],["shush.se",131],["allkpop.com",132],["pickcrackpasswords.blogspot.com",134],["kfrfansub.com",135],["thuglink.com",135],["voipreview.org",135],["illicoporno.com",136],["lavoixdux.com",136],["tonpornodujour.com",136],["jacquieetmichel.net",136],["swame.com",136],["vosfemmes.com",136],["voyeurfrance.net",136],["jacquieetmicheltv.net",[136,492,493]],["hanime.tv",137],["pogo.com",138],["cloudvideo.tv",139],["legionjuegos.org",140],["legionpeliculas.org",140],["legionprogramas.org",140],["16honeys.com",141],["elespanol.com",142],["remodelista.com",143],["coolmathgames.com",[144,145,146,579]],["audiofanzine.com",147],["hitokin.net",149],["developerinsider.co",150],["ilprimatonazionale.it",151],["hotabis.com",151],["root-nation.com",151],["italpress.com",151],["airsoftmilsimnews.com",151],["artribune.com",151],["thehindu.com",152],["cambro.tv",[153,154]],["nibelungen-kurier.de",155],["adfoc.us",157],["techyember.com",157],["remixbass.com",157],["techipop.com",157],["quickimageconverter.com",157],["mastharyana.com",157],["tea-coffee.net",157],["spatsify.com",157],["newedutopics.com",157],["getviralreach.in",157],["edukaroo.com",157],["funkeypagali.com",157],["careersides.com",157],["nayisahara.com",157],["wikifilmia.com",157],["infinityskull.com",157],["viewmyknowledge.com",157],["iisfvirtual.in",157],["starxinvestor.com",157],["jkssbalerts.com",157],["myprivatejobs.com",[157,236]],["wikitraveltips.com",[157,236]],["amritadrino.com",[157,236]],["sahlmarketing.net",157],["filmypoints.in",157],["fitnessholic.net",157],["moderngyan.com",157],["sattakingcharts.in",157],["freshbhojpuri.com",157],["bgmi32bitapk.in",157],["bankshiksha.in",157],["earn.mpscstudyhub.com",157],["earn.quotesopia.com",157],["money.quotesopia.com",157],["best-mobilegames.com",157],["learn.moderngyan.com",157],["bharatsarkarijobalert.com",157],["quotesopia.com",157],["creditsgoal.com",157],["techacode.com",157],["trickms.com",157],["ielts-isa.edu.vn",157],["sptfy.be",157],["mcafee-com.com",[157,235]],["pianetamountainbike.it",158],["barchart.com",159],["modelisme.com",160],["parasportontario.ca",160],["prescottenews.com",160],["nrj-play.fr",161],["hackingwithreact.com",162],["gutekueche.at",163],["eplfootballmatch.com",164],["peekvids.com",165],["playvids.com",165],["pornflip.com",165],["redensarten-index.de",166],["vw-page.com",167],["viz.com",[168,169]],["0rechner.de",170],["configspc.com",171],["xopenload.me",171],["uptobox.com",171],["uptostream.com",171],["japgay.com",172],["mega-debrid.eu",173],["dreamdth.com",174],["diaridegirona.cat",176],["diariodeibiza.es",176],["diariodemallorca.es",176],["diarioinformacion.com",176],["eldia.es",176],["emporda.info",176],["farodevigo.es",176],["laopinioncoruna.es",176],["laopiniondemalaga.es",176],["laopiniondemurcia.es",176],["laopiniondezamora.es",176],["laprovincia.es",176],["levante-emv.com",176],["mallorcazeitung.es",176],["regio7.cat",176],["superdeporte.es",176],["playpaste.com",177],["player.rtl2.de",178],["cnbc.com",179],["puzzles.msn.com",180],["metro.us",180],["newsobserver.com",180],["arkadiumhosted.com",180],["firefaucet.win",182],["74k.io",[183,184]],["stmruby.com",183],["direct-link.net",185],["direkt-wissen.com",185],["link-to.net",185],["fullhdxxx.com",187],["pornclassic.tube",188],["tubepornclassic.com",188],["etonline.com",189],["creatur.io",189],["drphil.com",189],["urbanmilwaukee.com",189],["ontiva.com",189],["hideandseek.world",189],["myabandonware.com",189],["kendam.com",189],["wttw.com",189],["synonyms.com",189],["definitions.net",189],["hostmath.com",189],["camvideoshub.com",189],["minhaconexao.com.br",189],["home-made-videos.com",191],["amateur-couples.com",191],["slutdump.com",191],["produsat.com",193],["12thman.com",195],["acusports.com",195],["atlantic10.com",195],["auburntigers.com",195],["baylorbears.com",195],["bceagles.com",195],["bgsufalcons.com",195],["big12sports.com",195],["bigten.org",195],["bradleybraves.com",195],["butlersports.com",195],["cmumavericks.com",195],["conferenceusa.com",195],["cyclones.com",195],["dartmouthsports.com",195],["daytonflyers.com",195],["dbupatriots.com",195],["dbusports.com",195],["denverpioneers.com",195],["fduknights.com",195],["fgcuathletics.com",195],["fightinghawks.com",195],["fightingillini.com",195],["floridagators.com",195],["friars.com",195],["friscofighters.com",195],["gamecocksonline.com",195],["goarmywestpoint.com",195],["gobison.com",195],["goblueraiders.com",195],["gobobcats.com",195],["gocards.com",195],["gocreighton.com",195],["godeacs.com",195],["goexplorers.com",195],["goetbutigers.com",195],["gofrogs.com",195],["gogriffs.com",195],["gogriz.com",195],["golobos.com",195],["gomarquette.com",195],["gopack.com",195],["gophersports.com",195],["goprincetontigers.com",195],["gopsusports.com",195],["goracers.com",195],["goshockers.com",195],["goterriers.com",195],["gotigersgo.com",195],["gousfbulls.com",195],["govandals.com",195],["gowyo.com",195],["goxavier.com",195],["gozags.com",195],["gozips.com",195],["griffinathletics.com",195],["guhoyas.com",195],["gwusports.com",195],["hailstate.com",195],["hamptonpirates.com",195],["hawaiiathletics.com",195],["hokiesports.com",195],["huskers.com",195],["icgaels.com",195],["iuhoosiers.com",195],["jsugamecocksports.com",195],["longbeachstate.com",195],["loyolaramblers.com",195],["lrtrojans.com",195],["lsusports.net",195],["morrisvillemustangs.com",195],["msuspartans.com",195],["muleriderathletics.com",195],["mutigers.com",195],["navysports.com",195],["nevadawolfpack.com",195],["niuhuskies.com",195],["nkunorse.com",195],["nuhuskies.com",195],["nusports.com",195],["okstate.com",195],["olemisssports.com",195],["omavs.com",195],["ovcsports.com",195],["owlsports.com",195],["purduesports.com",195],["redstormsports.com",195],["richmondspiders.com",195],["sfajacks.com",195],["shupirates.com",195],["siusalukis.com",195],["smcgaels.com",195],["smumustangs.com",195],["soconsports.com",195],["soonersports.com",195],["themw.com",195],["tulsahurricane.com",195],["txst.com",195],["txstatebobcats.com",195],["ubbulls.com",195],["ucfknights.com",195],["ucirvinesports.com",195],["uconnhuskies.com",195],["uhcougars.com",195],["uicflames.com",195],["umterps.com",195],["uncwsports.com",195],["unipanthers.com",195],["unlvrebels.com",195],["uoflsports.com",195],["usdtoreros.com",195],["utahstateaggies.com",195],["utepathletics.com",195],["utrockets.com",195],["uvmathletics.com",195],["uwbadgers.com",195],["villanova.com",195],["wkusports.com",195],["wmubroncos.com",195],["woffordterriers.com",195],["1pack1goal.com",195],["bcuathletics.com",195],["bubraves.com",195],["goblackbears.com",195],["golightsgo.com",195],["gomcpanthers.com",195],["goutsa.com",195],["mercerbears.com",195],["pirateblue.com",195],["pirateblue.net",195],["pirateblue.org",195],["quinnipiacbobcats.com",195],["towsontigers.com",195],["tribeathletics.com",195],["tribeclub.com",195],["utepminermaniacs.com",195],["utepminers.com",195],["wkutickets.com",195],["aopathletics.org",195],["atlantichockeyonline.com",195],["bigsouthnetwork.com",195],["bigsouthsports.com",195],["chawomenshockey.com",195],["dbupatriots.org",195],["drakerelays.org",195],["ecac.org",195],["ecacsports.com",195],["emueagles.com",195],["emugameday.com",195],["gculopes.com",195],["godrakebulldog.com",195],["godrakebulldogs.com",195],["godrakebulldogs.net",195],["goeags.com",195],["goislander.com",195],["goislanders.com",195],["gojacks.com",195],["gomacsports.com",195],["gseagles.com",195],["hubison.com",195],["iowaconference.com",195],["ksuowls.com",195],["lonestarconference.org",195],["mascac.org",195],["midwestconference.org",195],["mountaineast.org",195],["niu-pack.com",195],["nulakers.ca",195],["oswegolakers.com",195],["ovcdigitalnetwork.com",195],["pacersports.com",195],["rmacsports.org",195],["rollrivers.com",195],["samfordsports.com",195],["uncpbraves.com",195],["usfdons.com",195],["wiacsports.com",195],["alaskananooks.com",195],["broncathleticfund.com",195],["cameronaggies.com",195],["columbiacougars.com",195],["etownbluejays.com",195],["gobadgers.ca",195],["golancers.ca",195],["gometrostate.com",195],["gothunderbirds.ca",195],["kentstatesports.com",195],["lehighsports.com",195],["lopers.com",195],["lycoathletics.com",195],["lycomingathletics.com",195],["maraudersports.com",195],["mauiinvitational.com",195],["msumavericks.com",195],["nauathletics.com",195],["nueagles.com",195],["nwusports.com",195],["oceanbreezenyc.org",195],["patriotathleticfund.com",195],["pittband.com",195],["principiaathletics.com",195],["roadrunnersathletics.com",195],["sidearmsocial.com",195],["snhupenmen.com",195],["stablerarena.com",195],["stoutbluedevils.com",195],["uwlathletics.com",195],["yumacs.com",195],["collegefootballplayoff.com",195],["csurams.com",195],["cubuffs.com",195],["gobearcats.com",195],["gohuskies.com",195],["mgoblue.com",195],["osubeavers.com",195],["pittsburghpanthers.com",195],["rolltide.com",195],["texassports.com",195],["thesundevils.com",195],["uclabruins.com",195],["wvuathletics.com",195],["wvusports.com",195],["arizonawildcats.com",195],["calbears.com",195],["cuse.com",195],["georgiadogs.com",195],["goducks.com",195],["goheels.com",195],["gostanford.com",195],["insidekstatesports.com",195],["insidekstatesports.info",195],["insidekstatesports.net",195],["insidekstatesports.org",195],["k-stateathletics.com",195],["k-statefootball.net",195],["k-statefootball.org",195],["k-statesports.com",195],["k-statesports.net",195],["k-statesports.org",195],["k-statewomenshoops.com",195],["k-statewomenshoops.net",195],["k-statewomenshoops.org",195],["kstateathletics.com",195],["kstatefootball.net",195],["kstatefootball.org",195],["kstatesports.com",195],["kstatewomenshoops.com",195],["kstatewomenshoops.net",195],["kstatewomenshoops.org",195],["ksuathletics.com",195],["ksusports.com",195],["scarletknights.com",195],["showdownforrelief.com",195],["syracusecrunch.com",195],["texastech.com",195],["theacc.com",195],["ukathletics.com",195],["usctrojans.com",195],["utahutes.com",195],["utsports.com",195],["wsucougars.com",195],["vidlii.com",[195,220]],["tricksplit.io",195],["fangraphs.com",196],["4players.de",[197,287]],["buffed.de",197],["gamesaktuell.de",197],["gamezone.de",197],["pcgames.de",197],["videogameszone.de",197],["tvspielfilm.de",[198,199,200,201]],["tvtoday.de",[198,199,200,201]],["chip.de",[198,199,200,201]],["focus.de",[198,199,200,201]],["planetaminecraft.com",203],["cravesandflames.com",204],["codesnse.com",204],["link.paid4file.com",204],["flyad.vip",204],["lapresse.ca",205],["kolyoom.com",206],["ilovephd.com",206],["negumo.com",207],["games.wkb.jp",[208,209]],["fandom.com",[210,596,597]],["kenshi.fandom.com",211],["hausbau-forum.de",212],["homeairquality.org",212],["faucettronn.click",212],["fake-it.ws",213],["laksa19.github.io",214],["1shortlink.com",215],["nesia.my.id",216],["u-s-news.com",217],["luscious.net",218],["makemoneywithurl.com",219],["junkyponk.com",219],["healthfirstweb.com",219],["vocalley.com",219],["yogablogfit.com",219],["howifx.com",[219,395]],["en.financerites.com",219],["mythvista.com",219],["livenewsflix.com",219],["cureclues.com",219],["apekite.com",219],["host-buzz.com",219],["insmyst.com",219],["wp2host.com",219],["blogtechh.com",219],["techbixby.com",219],["blogmyst.com",219],["iammagnus.com",220],["dailyvideoreports.net",220],["unityassets4free.com",220],["resetoff.pl",221],["sexodi.com",221],["cdn77.org",222],["howtofixwindows.com",223],["3sexporn.com",224],["momxxxsex.com",224],["myfreevintageporn.com",224],["penisbuyutucum.net",224],["ujszo.com",225],["newsmax.com",226],["bobs-tube.com",227],["nadidetarifler.com",228],["siz.tv",228],["suzylu.co.uk",[229,230]],["onworks.net",231],["yabiladi.com",231],["downloadsoft.net",232],["pixsera.net",233],["testlanguages.com",234],["newsinlevels.com",234],["videosinlevels.com",234],["starkroboticsfrc.com",235],["sinonimos.de",235],["antonimos.de",235],["quesignifi.ca",235],["tiktokrealtime.com",235],["tiktokcounter.net",235],["tpayr.xyz",235],["poqzn.xyz",235],["ashrfd.xyz",235],["rezsx.xyz",235],["tryzt.xyz",235],["ashrff.xyz",235],["rezst.xyz",235],["dawenet.com",235],["erzar.xyz",235],["waezm.xyz",235],["waezg.xyz",235],["blackwoodacademy.org",235],["cryptednews.space",235],["vivuq.com",235],["swgop.com",235],["vbnmll.com",235],["telcoinfo.online",235],["dshytb.com",235],["fitdynamos.com",[235,237]],["btcbitco.in",[235,239]],["btcsatoshi.net",235],["cempakajaya.com",235],["crypto4yu.com",235],["readbitcoin.org",235],["wiour.com",235],["finish.addurl.biz",235],["aiimgvlog.fun",[235,242]],["laweducationinfo.com",235],["savemoneyinfo.com",235],["worldaffairinfo.com",235],["godstoryinfo.com",235],["successstoryinfo.com",235],["cxissuegk.com",235],["learnmarketinfo.com",235],["bhugolinfo.com",235],["armypowerinfo.com",235],["rsadnetworkinfo.com",235],["rsinsuranceinfo.com",235],["rsfinanceinfo.com",235],["rsgamer.app",235],["rssoftwareinfo.com",235],["rshostinginfo.com",235],["rseducationinfo.com",235],["phonereviewinfo.com",235],["makeincomeinfo.com",235],["gknutshell.com",235],["vichitrainfo.com",235],["workproductivityinfo.com",235],["dopomininfo.com",235],["hostingdetailer.com",235],["fitnesssguide.com",235],["tradingfact4u.com",235],["cryptofactss.com",235],["softwaredetail.com",235],["artoffocas.com",235],["insurancesfact.com",235],["travellingdetail.com",235],["advertisingexcel.com",235],["allcryptoz.net",235],["batmanfactor.com",235],["beautifulfashionnailart.com",235],["crewbase.net",235],["documentaryplanet.xyz",235],["crewus.net",235],["gametechreviewer.com",235],["midebalonu.net",235],["misterio.ro",235],["phineypet.com",235],["seory.xyz",235],["shinbhu.net",235],["shinchu.net",235],["substitutefor.com",235],["talkforfitness.com",235],["thefitbrit.co.uk",235],["thumb8.net",235],["thumb9.net",235],["topcryptoz.net",235],["uniqueten.net",235],["ultraten.net",235],["exactpay.online",235],["quins.us",235],["kiddyearner.com",235],["luckydice.net",236],["adarima.org",236],["tieutietkiem.com",236],["weatherwx.com",236],["sattaguess.com",236],["winshell.de",236],["rosasidan.ws",236],["modmakers.xyz",236],["gamepure.in",236],["warrenrahul.in",236],["austiblox.net",236],["upiapi.in",236],["myownguess.in",236],["networkhint.com",236],["thichcode.net",236],["texturecan.com",236],["tikmate.app",[236,475]],["arcaxbydz.id",236],["4funbox.com",238],["nephobox.com",238],["1024tera.com",238],["blog.cryptowidgets.net",239],["blog.insurancegold.in",239],["blog.wiki-topia.com",239],["blog.coinsvalue.net",239],["blog.cookinguide.net",239],["blog.freeoseocheck.com",239],["blog24.me",239],["bildirim.link",241],["arahdrive.com",242],["appsbull.com",243],["diudemy.com",243],["maqal360.com",[243,244,245]],["lifesurance.info",246],["akcartoons.in",247],["cybercityhelp.in",247],["infokeeda.xyz",249],["webzeni.com",249],["dl.apkmoddone.com",250],["phongroblox.com",250],["apkmodvn.com",251],["streamelements.com",253],["share.hntv.tv",[253,665,666,667]],["forum.dji.com",[253,667]],["unionpayintl.com",[253,666]],["arcai.com",254],["my-code4you.blogspot.com",255],["flickr.com",256],["firefile.cc",257],["pestleanalysis.com",257],["kochamjp.pl",257],["tutorialforlinux.com",257],["whatsaero.com",257],["animeblkom.net",[257,273]],["blkom.com",257],["globes.co.il",[258,259]],["jardiner-malin.fr",260],["tw-calc.net",261],["ohmybrush.com",262],["talkceltic.net",263],["mentalfloss.com",264],["uprafa.com",265],["cube365.net",266],["nightfallnews.com",[267,268]],["wwwfotografgotlin.blogspot.com",269],["freelistenonline.com",269],["badassdownloader.com",270],["quickporn.net",271],["yellowbridge.com",272],["aosmark.com",274],["atozmath.com",[276,277,278,279,280,281,282]],["newyorker.com",283],["brighteon.com",284],["more.tv",285],["video1tube.com",286],["alohatube.xyz",286],["onlinesoccermanager.com",287],["fshost.me",288],["link.cgtips.org",289],["hentaicloud.com",290],["netfapx.com",292],["javdragon.org",292],["njav.tv",292],["paperzonevn.com",293],["hentaienglish.com",294],["hentaiporno.xxx",294],["venge.io",[295,296]],["btcbux.io",297],["its.porn",[298,299]],["atv.at",300],["2ndrun.tv",301],["rackusreads.com",301],["teachmemicro.com",301],["willcycle.com",301],["kusonime.com",[302,303]],["imgur.com",[305,306,554]],["hentai-party.com",307],["hentaicomics.pro",307],["xxx-comics.pro",307],["genshinimpactcalculator.com",310],["mysexgames.com",311],["embed.indavideo.hu",314],["xnxx.com",315],["gdr-online.com",316],["mmm.dk",317],["iqiyi.com",[318,319,467]],["m.iqiyi.com",320],["nbcolympics.com",321],["apkhex.com",322],["indiansexstories2.net",323],["issstories.xyz",323],["1340kbbr.com",324],["gorgeradio.com",324],["kduk.com",324],["kedoam.com",324],["kejoam.com",324],["kelaam.com",324],["khsn1230.com",324],["kjmx.rocks",324],["kloo.com",324],["klooam.com",324],["klykradio.com",324],["kmed.com",324],["kmnt.com",324],["kool991.com",324],["kpnw.com",324],["kppk983.com",324],["krktcountry.com",324],["ktee.com",324],["kwro.com",324],["kxbxfm.com",324],["thevalley.fm",324],["quizlet.com",325],["dsocker1234.blogspot.com",326],["schoolcheats.net",[327,328]],["mgnet.xyz",329],["japopav.tv",330],["lvturbo.com",330],["designtagebuch.de",331],["pixroute.com",332],["uploady.io",333],["calculator-online.net",334],["porngames.club",335],["sexgames.xxx",335],["111.90.159.132",336],["battleplan.news",336],["mobile-tracker-free.com",337],["pfps.gg",338],["ac-illust.com",[339,340]],["photo-ac.com",[339,340]],["social-unlock.com",341],["superpsx.com",342],["ninja.io",343],["sourceforge.net",344],["samfirms.com",345],["rapelust.com",346],["vtube.to",346],["vtplay.net",346],["desitelugusex.com",346],["xvideos-downloader.net",346],["xxxvideotube.net",346],["sdefx.cloud",346],["nozomi.la",346],["moviesonlinefree.net",346],["banned.video",347],["madmaxworld.tv",347],["androidpolice.com",347],["cbr.com",347],["collider.com",347],["dualshockers.com",347],["gamerant.com",347],["howtogeek.com",347],["makeuseof.com",347],["movieweb.com",347],["screenrant.com",347],["thegamer.com",347],["xda-developers.com",347],["huffpost.com",348],["ingles.com",349],["spanishdict.com",349],["surfline.com",[350,351]],["play.tv3.ee",352],["play.tv3.lt",352],["play.tv3.lv",352],["tv3play.skaties.lv",352],["trendyoum.com",353],["bulbagarden.net",354],["hollywoodlife.com",355],["mat6tube.com",356],["textstudio.co",357],["newtumbl.com",358],["aruble.net",360],["nevcoins.club",361],["mail.com",362],["oggi.it",[365,366]],["manoramamax.com",365],["video.gazzetta.it",[365,366]],["mangakita.id",367],["mangakita.net",367],["avpgalaxy.net",368],["mhma12.tech",369],["panda-novel.com",370],["zebranovel.com",370],["lightsnovel.com",370],["eaglesnovel.com",370],["pandasnovel.com",370],["zadfaucet.com",371],["ewrc-results.com",372],["kizi.com",373],["cyberscoop.com",374],["fedscoop.com",374],["canale.live",375],["indiatimes.com",376],["netzwelt.de",377],["jeep-cj.com",378],["sponsorhunter.com",379],["cloudcomputingtopics.net",380],["likecs.com",381],["tiscali.it",382],["linkspy.cc",383],["adshnk.com",384],["chattanoogan.com",385],["adsy.pw",386],["playstore.pw",386],["socialmediagirls.com",387],["windowspro.de",388],["snapinsta.app",389],["jiocinema.com",390],["uploadmall.com",390],["tvtv.ca",391],["tvtv.us",391],["ipalibrary.me",392],["mydaddy.cc",393],["roadtrippin.fr",394],["vavada5com.com",395],["redketchup.io",396],["anyporn.com",[397,414]],["bravoporn.com",397],["bravoteens.com",397],["crocotube.com",397],["hellmoms.com",397],["hellporno.com",397],["sex3.com",397],["tubewolf.com",397],["xbabe.com",397],["xcum.com",397],["zedporn.com",397],["imagetotext.info",398],["infokik.com",399],["freepik.com",400],["ddwloclawek.pl",[401,402]],["www.seznam.cz",403],["deezer.com",404],["my-subs.co",405],["plaion.com",406],["slideshare.net",[407,408]],["ustreasuryyieldcurve.com",409],["businesssoftwarehere.com",410],["goo.st",410],["freevpshere.com",410],["softwaresolutionshere.com",410],["madoohd.com",413],["staige.tv",415],["in-jpn.com",416],["oninet.ne.jp",416],["xth.jp",416],["androidadult.com",417],["streamvid.net",418],["watchtv24.com",419],["cellmapper.net",420],["medscape.com",421],["newscon.org",[422,423]],["arkadium.com",424],["wheelofgold.com",425],["bembed.net",426],["embedv.net",426],["fslinks.org",426],["listeamed.net",426],["v6embed.xyz",426],["vgplayer.xyz",426],["vid-guard.com",426],["app.blubank.com",427],["mobileweb.bankmellat.ir",427],["sportdeutschland.tv",428],["kcra.com",428],["wcvb.com",428],["chat.nrj.fr",429],["chat.tchatche.com",[429,445]],["ccthesims.com",436],["chromeready.com",436],["coursedrive.org",436],["dtbps3games.com",436],["illustratemagazine.com",436],["uknip.co.uk",436],["vod.pl",437],["megadrive-emulator.com",438],["animesaga.in",441],["moviesapi.club",441],["bestx.stream",441],["watchx.top",441],["digimanie.cz",442],["svethardware.cz",442],["srvy.ninja",443],["drawer-opportunity-i-243.site",444],["cnn.com",[446,447,448]],["edmdls.com",449],["freshremix.net",449],["scenedl.org",449],["trakt.tv",450],["client.falixnodes.net",451],["shroomers.app",452],["classicalradio.com",453],["di.fm",453],["jazzradio.com",453],["radiotunes.com",453],["rockradio.com",453],["zenradio.com",453],["pc-builds.com",454],["qtoptens.com",454],["reuters.com",454],["today.com",454],["videogamer.com",454],["wrestlinginc.com",454],["gbatemp.net",454],["usatoday.com",[455,699]],["ydr.com",455],["getthit.com",456],["techedubyte.com",457],["soccerinhd.com",457],["movie-th.tv",458],["iwanttfc.com",459],["nutraingredients-asia.com",460],["nutraingredients-latam.com",460],["nutraingredients-usa.com",460],["nutraingredients.com",460],["mavenarts.in",461],["ozulscansen.com",462],["nexusmods.com",463],["fitnessbr.click",464],["minhareceita.xyz",464],["doomied.monster",465],["lookmovie2.to",465],["royalroad.com",466],["biletomat.pl",468],["hextank.io",[469,470]],["filmizlehdfilm.com",[471,472,473,474]],["fullfilmizle.cc",[471,472,473,474]],["gofilmizle.net",[471,472,473,474]],["btvplus.bg",476],["sagewater.com",477],["redlion.net",477],["satdl.com",478],["vidstreaming.xyz",479],["everand.com",480],["myradioonline.pl",481],["cbs.com",482],["paramountplus.com",482],["abysscdn.com",[483,484]],["buktube.com",485],["fullxh.com",485],["galleryxh.site",485],["megaxh.com",485],["movingxh.world",485],["seexh.com",485],["unlockxh4.com",485],["valuexh.life",485],["xhaccess.com",485],["xhadult2.com",485],["xhadult3.com",485],["xhadult4.com",485],["xhadult5.com",485],["xhamster46.com",485],["xhamsterporno.mx",485],["xhbig.com",485],["xhbranch5.com",485],["xhchannel.com",485],["xhchannel2.com",485],["xhdate.world",485],["xhday.com",485],["xhday1.com",485],["xhlease.world",485],["xhmoon5.com",485],["xhofficial.com",485],["xhopen.com",485],["xhplanet1.com",485],["xhplanet2.com",485],["xhreal2.com",485],["xhreal3.com",485],["xhspot.com",485],["xhtab2.com",485],["xhtab4.com",485],["xhtotal.com",485],["xhtree.com",485],["xhvictory.com",485],["xhwebsite.com",485],["xhwebsite2.com",485],["xhwebsite5.com",485],["xhwide1.com",485],["xhwide2.com",485],["xhwide5.com",485],["lightnovelworld.com",486],["megadescarga.net",[487,488,489,490]],["megadescargas.net",[487,488,489,490]],["hentaihaven.xxx",491],["jacquieetmicheltv2.net",493],["fcportables.com",[495,496]],["emurom.net",497],["freethesaurus.com",[498,499]],["thefreedictionary.com",[498,499]],["oeffentlicher-dienst.info",500],["dcdlplayer8a06f4.xyz",501],["ultimate-guitar.com",502],["xyzsports111.xyz",[503,504,505]],["xyzsports112.xyz",[503,504,505]],["xyzsports113.xyz",[503,504,505]],["xyzsports114.xyz",[503,504,505]],["xyzsprtsfrmr1.site",[503,504,505]],["xyzsprtsfrmr2.site",[503,504,505]],["claimbits.net",506],["sexyscope.net",507],["recherche-ebook.fr",509],["virtualdinerbot.com",509],["zonebourse.com",510],["pink-sluts.net",511],["andhrafriends.com",512],["benzinpreis.de",513],["turtleviplay.xyz",514],["paktech2.com",515],["defenseone.com",516],["govexec.com",516],["nextgov.com",516],["route-fifty.com",516],["sharing.wtf",517],["wetter3.de",518],["esportivos.fun",519],["cosmonova-broadcast.tv",520],["hartvannederland.nl",521],["shownieuws.nl",521],["vandaaginside.nl",521],["rock.porn",[522,523]],["videzz.net",[524,525]],["ezaudiobookforsoul.com",526],["club386.com",527],["littlebigsnake.com",528],["easyfun.gg",529],["smailpro.com",530],["ilgazzettino.it",531],["ilmessaggero.it",531],["3bmeteo.com",[532,533]],["mconverter.eu",534],["lover937.net",535],["10gb.vn",536],["pes6.es",537],["tactics.tools",[538,539]],["boundhub.com",540],["alocdnnetu.xyz",541],["reliabletv.me",542],["jakondo.ru",543],["anonymfile.com",545],["gofile.to",545],["dotycat.com",546],["rateyourmusic.com",547],["reporterpb.com.br",548],["tacobell.com",550],["zefoy.com",551],["cnet.com",552],["natgeotv.com",555],["spankbang.com",[556,557]],["globo.com",558],["wayfair.com",559],["foxbusiness.com",[560,561,562]],["foxnews.com",[560,561,562]],["br.de",563],["indeed.com",564],["pasteboard.co",565],["clickhole.com",566],["deadspin.com",566],["gizmodo.com",566],["jalopnik.com",566],["jezebel.com",566],["kotaku.com",566],["lifehacker.com",566],["splinternews.com",566],["theinventory.com",566],["theonion.com",566],["theroot.com",566],["thetakeout.com",566],["pewresearch.org",566],["los40.com",[567,568]],["as.com",568],["telegraph.co.uk",[569,570]],["poweredbycovermore.com",[569,619]],["lumens.com",[569,619]],["verizon.com",571],["humanbenchmark.com",572],["politico.com",573],["officedepot.co.cr",[574,575]],["usnews.com",578],["factable.com",580],["zee5.com",581],["gala.fr",582],["geo.fr",582],["voici.fr",582],["gloucestershirelive.co.uk",583],["arsiv.mackolik.com",584],["jacksonguitars.com",585],["scandichotels.com",586],["stylist.co.uk",587],["nettiauto.com",588],["thaiairways.com",[589,590]],["cerbahealthcare.it",[591,592]],["futura-sciences.com",[591,608]],["toureiffel.paris",591],["tiendaenlinea.claro.com.ni",[593,594]],["tieba.baidu.com",595],["grasshopper.com",[598,599]],["epson.com.cn",[600,601,602,603]],["oe24.at",[604,605]],["szbz.de",604],["platform.autods.com",[606,607]],["wikihow.com",609],["citibank.com.sg",610],["uol.com.br",[611,612,613,614,615]],["gazzetta.gr",616],["digicol.dpm.org.cn",[617,618]],["virginmediatelevision.ie",620],["larazon.es",[621,622]],["waitrosecellar.com",[623,624,625]],["sharpen-free-design-generator.netlify.app",[627,628]],["help.cashctrl.com",[629,630]],["gry-online.pl",631],["vidaextra.com",632],["commande.rhinov.pro",[633,634]],["ecom.wixapps.net",[633,634]],["tipranks.com",[635,636]],["iceland.co.uk",[637,638,639]],["socket.pearsoned.com",640],["tntdrama.com",[641,642]],["trutv.com",[641,642]],["mobile.de",[643,644]],["ioe.vn",[645,646]],["geiriadur.ac.uk",[645,649]],["welsh-dictionary.ac.uk",[645,649]],["bikeportland.org",[647,648]],["biologianet.com",[612,613,614]],["10play.com.au",[650,651]],["sunshine-live.de",[652,653]],["whatismyip.com",[654,655]],["myfitnesspal.com",656],["netoff.co.jp",[657,658]],["clickjogos.com.br",661],["bristan.com",[662,663]],["zillow.com",664],["optimum.net",[668,669]],["hdfcfund.com",670],["user.guancha.cn",[671,672]],["sosovalue.com",673],["bandyforbundet.no",[674,675]],["tatacommunications.com",676],["suamusica.com.br",[677,678,679]],["macrotrends.net",[680,681]],["code.world",682],["smartcharts.net",682],["topgear.com",683],["eservice.directauto.com",[684,685]],["nbcsports.com",686],["standard.co.uk",687],["pruefernavi.de",[688,689]],["speedtest.net",[690,691]],["17track.net",692],["visible.com",[693,697,698]],["hagerty.com",[694,695]],["poophq.com",696],["veev.to",696],["livewithkellyandmark.com",[697,698]],["porsche.com",[697,698]],["uber.com",[697,698]],["jdsports.com",[697,698]],["engadget.com",[697,698]],["yahoo.com",[697,698]],["techcrunch.com",[697,698]],["rivals.com",[697,698]],["kkrt.com",[697,698]],["crunchyroll.com",[697,698]],["dnb.com",[697,698]],["dnb.co.uk",[697,698]],["weather.com",[697,698]],["ubereats.com",[697,698]]]);

const entitiesMap = new Map([["starmusiq",10],["wcofun",10],["kissasian",12],["gogoanime",[12,48]],["1movies",[12,54]],["xmovies8",12],["0123movies",12],["gostream",12],["gomovies",12],["primewire",13],["streanplay",[13,14]],["sbplay",13],["milfnut",13],["sxyprn",18],["hqq",[19,20]],["waaw",[20,21]],["younetu",20],["vvtplayer",20],["123link",22],["adshort",22],["linkshorts",22],["adsrt",22],["vinaurl",22],["adfloz",22],["dutchycorp",22],["shortearn",22],["pingit",22],["shrink",22],["tmearn",22],["megalink",22],["miniurl",22],["gplinks",22],["clk",22],["pureshort",22],["shrinke",22],["shrinkme",22],["link1s",22],["shortzzy",22],["shorttey",[22,189]],["lite-link",22],["adcorto",22],["zshort",22],["upfiles",22],["linkfly",22],["wplink",22],["seulink",22],["encurtalink",22],["camwhores",[23,35,78,79,80]],["tube8",[24,25]],["youporn",25],["redtube",25],["pornhub",[25,175]],["upornia",[27,28]],["watch-series",34],["watchseries",34],["vev",34],["vidop",34],["vidup",34],["fmovies",48],["streamwish",[52,53]],["xtits",[57,110]],["pouvideo",59],["povvideo",59],["povw1deo",59],["povwideo",59],["powv1deo",59],["powvibeo",59],["powvideo",59],["powvldeo",59],["plyjam",[64,65]],["fxporn69",70],["vipbox",71],["viprow",71],["desbloqueador",75],["xberuang",76],["teknorizen",76],["subtorrents",83],["subtorrents1",83],["newpelis",83],["pelix",83],["allcalidad",83],["infomaniakos",83],["tornadomovies",91],["icdrama",97],["mangasail",97],["file4go",99],["mangovideo",111],["asianclub",119],["anitube",122],["streamingcommunity",122],["mixdrop",124],["uploadev",148],["ver-pelis-online",156],["ancient-origins",164],["spankbang",181],["lookcam",189],["lootlinks",189],["dpstream",192],["bluemediafiles",194],["docer",221],["terabox",238],["ctrlv",275],["123movieshd",304],["uproxy",308],["animesa",309],["cinecalidad",[312,313]],["xvideos",315],["dvdplay",346],["apkmaven",359],["gmx",363],["gamereactor",412],["doomovie-hd",413],["drakecomic",425],["vembed",426],["empire-anime",[430,431,432,433,434]],["empire-stream",[430,431,432]],["empire-streaming",[430,431,432]],["empire-streamz",[430,431,432]],["tvhay",[439,440]],["lookmovie",465],["filmizletv",[471,472,473,474]],["hamsterix",485],["xhamster",485],["xhamster1",485],["xhamster10",485],["xhamster11",485],["xhamster12",485],["xhamster13",485],["xhamster14",485],["xhamster15",485],["xhamster16",485],["xhamster17",485],["xhamster18",485],["xhamster19",485],["xhamster20",485],["xhamster2",485],["xhamster3",485],["xhamster4",485],["xhamster42",485],["xhamster5",485],["xhamster7",485],["xhamster8",485],["acortalo",[487,488,489,490]],["acortar",[487,488,489,490]],["a2zapk",494],["kickassanime",508],["filecrypt",544],["www.google",549],["officedepot",[576,577]],["foundit",[659,660]],["ticketmaster",[697,698]]]);

const exceptionsMap = new Map([["pingit.com",[22]],["pingit.me",[22]],["lookmovie.studio",[465]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue, extraArgs);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, rawValue);
    }, extraArgs.runAt);
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

function validateConstantFn(trusted, raw, extraArgs = {}) {
    const safe = safeSelf();
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( raw === 'throwFunc' ) {
        value = function(){ throw ''; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('json:') ) {
            try { value = safe.JSON_parse(raw.slice(5)); } catch { return; }
        } else if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
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
    try { setConstant(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_setConstant();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
