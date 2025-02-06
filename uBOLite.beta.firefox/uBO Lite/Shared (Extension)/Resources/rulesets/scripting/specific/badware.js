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

// ruleset: badware

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".code-block",".appua-reimage-top,\n.info.box",".download_button_info_texts,\n.js-download_button_additional_links,\n.sidebar_download_inner,\ndiv.attention-button-box-green",".primary_download",".automatic_removal_list,\n.automatic_removal_list_w > .ar_block_description,\n.js-download_button_offer,\n.quick-download-button-placeholder,\n.quick-download-button-text,\n.sidebar_download_inner > :not(.voting-box):not(.colorbg-grey),\n.ui-content > .win","#gray_de,\n#solution_v2_de,\ndiv[style^=\"border:2px\"]","meta[http-equiv=\"refresh\"],\nscript[src^=\"data:text/javascript;base64,\"]","[onclick*=\"open\"]","center > [class*=\"buttonPress-\"]","div[class^=\"code-block code-block-\"]",".getox","center > a[target=\"_blank\"][rel=\"nofollow noreferrer noopener\"]","div[style=\"float: none; margin:10px 0 10px 0; text-align:center;\"]","[id^=\"haxno-\"]","a[rel=\"nofollow noreferrer noopener\"][target=\"_blank\"]",".cente-1",".ads-btns","[class*=\"buttonPress-\"]","center > a","center > button","[href^=\"http://slugmefilehos.xyz/\"]","center#yangchen > iframe#external-frame[src=\"https://im136.mom/\"]:not([class])","html.w-mod-js:not(.wf-active) > body:not([class]):not([id]) > a[class=\"w-inline-block\"][href^=\"http\"]","#ad-gs-05"];

const hostnamesMap = new Map([["windowsreport.com",0],["appuals.com",1],["pcseguro.es",[2,3]],["sauguspc.lt",[2,3]],["sichernpc.de",[2,3]],["ugetfix.com",[2,3]],["wyleczpc.pl",[2,3]],["2-spyware.com",[3,4]],["novirus.uk",[3,4]],["faravirus.ro",[3,4]],["uirusu.jp",[3,4]],["virusi.hr",[3,4]],["wubingdu.cn",[3,4]],["avirus.hu",[3,4]],["ioys.gr",[3,4]],["odstranitvirus.cz",[3,4]],["tanpavirus.web.id",[3,4]],["utanvirus.se",[3,4]],["virukset.fi",[3,4]],["losvirus.es",[3,4]],["virusler.info.tr",[3,4]],["semvirus.pt",[3,4]],["lesvirus.fr",[3,4]],["senzavirus.it",[3,4]],["dieviren.de",[3,4]],["viruset.no",[3,4]],["usunwirusa.pl",[3,4]],["zondervirus.nl",[3,4]],["bedynet.ru",[3,4]],["virusai.lt",[3,4]],["virusi.bg",[3,4]],["viirused.ee",[3,4]],["udenvirus.dk",[3,4]],["howtoremove.guide",5],["tech4yougadgets.com",6],["goharpc.com",[7,9]],["pccrackbox.com",7],["cracklabel.com",[7,8]],["pcwarezbox.com",[7,8]],["10crack.com",7],["crackproductkey.com",[7,8]],["crackpcsoft.net",[7,9]],["crackwinz.com",[7,9]],["genuineactivator.com",7],["topcracked.com",[7,9]],["fullcrackedpc.com",7],["idmfullcrack.info",7],["idmpatched.com",7],["productkeyfree.org",[7,11]],["patchcracks.com",[7,8]],["cracksole.com",7],["allsoftwarekeys.com",7],["softwar2crack.com",7],["productkeyforfree.com",[7,11]],["wazusoft.com",[7,11]],["rootscrack.com",[7,11]],["activators4windows.com",[7,9]],["procrackhere.com",7],["proproductkey.com",[7,9]],["freelicensekey.org",7],["pcsoftz.net",7],["freecrackdownload.com",[7,9]],["f4file.com",[7,9]],["serialkey360.com",7],["zuketcreation.net",[7,15]],["filedownloads.store",7],["serialkey89.com",8],["installcracks.com",8],["crackserialkey.co",8],["maliksofts.com",8],["crackpropc.com",[8,10]],["ayeshapc.com",8],["crackhomes.com",8],["crackspro.co",[8,10]],["crackknow.com",[8,10]],["4howcrack.com",8],["trycracksoftware.com",8],["getprocrack.co",8],["activationkeys.co",8],["organiccrack.com",8],["softwarance.com",8],["procrackkey.co",8],["download4mac.com",8],["freeactivationkeys.org",8],["explorecrack.com",8],["okproductkey.com",8],["downloadpc.net",8],["up4pc.com",8],["hitproversion.com",8],["cracktube.net",8],["abbaspc.net",8],["crackdownload.org",8],["crackdownload.me",8],["corecrack.com",8],["windowsactivator.info",8],["keygenstore.com",8],["procrackpc.co",8],["getmacos.org",8],["latestproductkey.co",8],["shanpc.com",8],["crackpckey.com",8],["torrentfilefree.com",[8,11]],["idmfullversion.com",8],["wareskey.com",8],["crackbell.com",8],["newproductkey.com",[8,9]],["osproductkey.com",8],["serialkeysfree.org",[8,11]],["autocracking.com",[8,11]],["crackzoom.com",8],["greencracks.com",[8,9]],["profullversion.com",[8,11]],["crackswall.com",[8,11]],["rootcracks.org",[8,9]],["licensekeys.org",8],["softserialkey.com",8],["free4pc.org",8],["productkeys.org",8],["crackedfine.com",8],["idmcrackeys.com",8],["crackedhere.com",8],["licensekeysfree.org",8],["trycracksetup.com",8],["crackedsoft.org",8],["assadpc.com",[8,9]],["thecrackbox.com",[8,11]],["keystool.com",[8,9]],["crackedpcs.com",8],["cracksmad.com",8],["licensekeyup.com",8],["chcracked.com",8],["finalcracked.com",8],["activatorpros.com",8],["crackedmod.com",8],["whitecracked.com",8],["cracksoon.com",8],["boxcracked.com",8],["activationkey.org",8],["serialkeypatch.org",8],["crackedsoftpc.com",8],["proapkcrack.com",8],["softscracked.com",8],["freeappstorepc.com",8],["reallpccrack.com",8],["crackfullkey.net",8],["hmzapc.com",8],["zcracked.com",8],["usecracked.com",8],["crackedversion.com",8],["aryancrack.com",8],["piratespc.net",8],["reallcrack.com",8],["fultech.org",8],["crackpro.org",8],["cracksray.com",8],["cracksmat.com",[8,9]],["crackxpoint.com",8],["startcrack.co",8],["crackbros.com",[8,9]],["pcfullversion.com",[8,9]],["sjcrack.com",8],["repack-games.com",[8,9]],["bypassapp.com",8],["crackfury.com",8],["9to5crack.com",8],["zpaste.net",8],["warezcrack.net",9],["freeprosoftz.com",9],["vcracks.com",9],["crackthere.com",9],["keygenfile.net",9],["scracked.com",9],["cyberspc.com",9],["softzcrack.com",9],["crackintopc.com",9],["zslicensekey.com",9],["procrackpc.com",9],["crackshere.com",9],["crackdj.com",9],["cracktopc.com",9],["serialsofts.com",9],["prosoftlink.com",9],["zscracked.com",9],["crackvip.com",9],["windowcrack.com",9],["softsnew.com",9],["licensecrack.net",9],["vstpatch.net",9],["newcrack.info",9],["topkeygen.com",[9,11]],["vsthomes.com",9],["vstserial.com",9],["procrackerz.com",[9,10]],["pcfullcrack.org",9],["keygenpc.com",9],["bicfic.com",9],["ikcrack.com",9],["downloadcracker.com",9],["karancrack.com",9],["piratesfile.com",[9,11]],["activatorwin.com",9],["starcrack.net",9],["crackproduct.com",9],["dgkcrack.com",9],["crackglobal.com",9],["crackcan.com",9],["keygendownloads.com",9],["crackpatched.com",9],["windowsactivators.org",9],["serialsoft.org",9],["crackit.org",9],["productscrack.com",9],["crackurl.info",9],["crackroot.net",9],["crackmak.com",9],["seeratpc.com",9],["crackmix.com",9],["piratepc.me",9],["letcracks.com",[9,11]],["latestcracked.com",9],["fullversionforever.com",9],["vlsoft.net",9],["crackeado.net",9],["fileoye.com",9],["excrack.com",9],["mahcrack.com",9],["get4pcs.com",9],["keygenwin.com",9],["mycrackfree.com",9],["crackfullpro.com",9],["crackkey4u.com",9],["fileserialkey.com",9],["cracksdat.com",9],["crackgrid.com",9],["licensekeysfree.com",9],["crackkeymac.com",9],["freecrack4u.com",9],["getintomac.net",9],["crackreview.com",9],["activatorskey.com",9],["kuyhaa.cc",9],["cracktel.com",9],["up4crack.com",9],["crackcut.com",9],["game-repack.site",9],["dodi-repacks.download",9],["yasir-252.net",9],["getpcsofts.net",9],["procracks.net",9],["zeemalcrack.com",[9,10]],["macfiles.org",9],["softzspot.com",9],["crackkits.com",10],["crackwatch.org",10],["origincrack.com",[10,19]],["crackhub.org",10],["crackrules.com",10],["haxmac.cc",10],["cracka2zsoft.com",[10,18]],["clevercracks.com",10],["onhax.in",[10,17]],["haxpc.net",10],["win-crack.com",11],["kalicrack.com",11],["sadeempc.com",11],["thepiratecity.co",11],["torrentmac.net",11],["ryuugames.com",11],["pesktop.com",11],["proappcrack.com",11],["zgamespc.com",11],["crack11.com",11],["gvnvh.net",11],["cracksoftwaress.net",12],["haxnode.net",13],["romsdl.net",14],["xcloud.mom",16],["torrdroidforpc.com",20],["app",21],["webflow.io",22],["uploadfox.net",23]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
