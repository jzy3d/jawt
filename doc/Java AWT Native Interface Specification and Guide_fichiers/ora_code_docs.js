/*!
######################################################
# ORA_CODE_DOCS.JS
# VERSION: 1.20
# ORIGINAL BUILD DATE: 24th November 2021
# COPYRIGHT ORACLE CORP 2021 [UNLESS STATED OTHERWISE]
######################################################
*/
if(document.readyState==="loading"||document.readyState==="interactive"){window.s_PingOK=false;window.addEventListener("load",function(){s_Ping(true);});}var siteId="";
/*! Report suite set up */
function s_setAccount(){var sa=["oracledevall","docs","en-us"];sa[0]=(s_checkdev())?"oracledevdocs,oracledevall":"oracledocs,oracleglobal";if(window.location.hostname.indexOf("oraclecloud.com")!=-1||window.location.hostname.indexOf("cloud.oracle.com")!=-1){sa[1]="docs:oraclecloud:oci";siteId=sa[1];}return sa;}
/*! Pre/Post Plugins plus site functions */
function s_prePlugins(s){s_oraVer(":docs",":1.20");s.linkInternalFilters="javascript:,.oracle.,sellingpoint,documentation.custhelp.com,rightnow.com,docs.dev.content.oci.oc-test.com";}
/*! PrePlugins plus site functions */
function s_postPlugins(s){if(location.host==="docs.dev.content.oci.oc-test.com"&&location.pathname==="/"){s.pageName=s.pageName+"content/oci-oc-test/";}if(s.pageName=="docs:en-us:/apps/search/search.jsp"){var pageName_addition="Results";var keyword=s.getQueryParam("q").replace(/[*,\r\n\t ]+/gi,"-");var pageNo=s.getQueryParam("pg");if(keyword){keyword=unescape(keyword).toLowerCase().replace(/\++/g," ");s.prop3="docs:en-us:/apps/search/:Search:"+keyword;s.prop4=keyword;if(pageNo){s.prop6=pageNo;}else{s.prop6=1;}}if(document.body.innerHTML.indexOf("No results found")!=-1){pageName_addition="No Results";if(keyword){s.prop5=keyword;s.prop3="";s.prop4="";s.prop6="";}}if(document.body.innerHTML.indexOf("No data to display")!=-1){pageName_addition="No data to display";if(keyword){s.prop7=keyword;s.prop3="";s.prop4="";s.prop6="";}}s.pageName="Search:doc.oracle.com:"+pageName_addition;}if(s.pageName.indexOf("docs:oraclecloud:oci")!=-1&&s.pageName.indexOf("search.htm")!=-1){oracleCloudSearchTracking();}if(pageMeasurements()){var performanceValues=pageMeasurements();var loadTime=performanceValues.domComplete;s.prop14=loadTime;s.events=s.apl(s.events,"event104="+loadTime,",",1);}}function pageMeasurements(){var timing=window.performance.timing;return{domComplete:((timing.loadEventStart-timing.navigationStart)/1000).toFixed(2)};}function oracleCloudSearchTracking(){var pageName_addition="";var keyword=s.getQueryParam("q").replace(/[*,\r\n\t ]+/gi,"-");var pageNo=s.getQueryParam("p");if(keyword){keyword=unescape(keyword).toLowerCase().replace(/\++/g," ");pageName_addition="results";s.prop3=s.channel+":search:"+keyword;s.prop4=keyword;s.prop6=(pageNo)?pageNo:1;s.prop5="";s.pageName="search:"+siteId+":"+pageName_addition;}else{s.pageName="search:"+siteId;}}function s_checkdev(){var isDev=false;var devSites=new Array();devSites=["-stage","us.oracle.com","-dev","-content","localhost","127.0.0.1","docs-uat","docs.r1.oracleiaas.com","docs-next.aka.r0.grungy.us","docs.dev.content.oci.oc-test.com"];var al=devSites.length;for(i=0;i<al;i++){if(location.host.indexOf(devSites[i])!=-1){isDev=true;i=al+1;}}return(isDev);}function s_oraVer(_s,_v){_v=_s+_v;oraVersion=(oraVersion.indexOf(_s)==-1)?oraVersion+_v:oraVersion.substr(0,oraVersion.indexOf(_s))+_v;}function gotjQ(){try{var jq=(jQuery)?true:false;}catch(err){var jq=false;}return jq;}function hiddenDlink(){var dLink=this;if(dLink){s.prop8="D=pageName";var dLinkTxt=dLink.toString();dLinkTxt=dLinkTxt.replace(/&amp;/g,"&");if(dLink.name!==""){dLinkTxt=dLink.name;}if(dLinkTxt.indexOf("img")>-1){if(dLinkTxt.indexOf("name")>-1){dLinkTxt=dLinkTxt.substring(dLinkTxt.indexOf('name="')+6,dLinkTxt.length);dLinkTxt=dLinkTxt.substring(0,dLinkTxt.indexOf('"'));}else{if(dLinkTxt.indexOf("alt")>-1){dLinkTxt=dLinkTxt.substring(dLinkTxt.indexOf('alt="')+5,dLinkTxt.length);dLinkTxt=dLinkTxt.substring(0,dLinkTxt.indexOf('"'));}else{dLinkTxt=dLink.href;}}}else{dLinkTxt=dLinkTxt.replace(/.*?:\/\//g,"");}s.eVar29=s.prop23=dLinkTxt;s.eVar15=dLink.href.substring(dLink.href.lastIndexOf("/")+1,dLink.href.length);s.eVar16=dLink.href;s.events=s.apl(s.events,"event15",",",1);s.linkTrackVars="prop8,prop23,eVar29,eVar15,eVar16,events";s.linkTrackEvents="event15";s.tl(dLink,"d",dLink);}}var getUrlQueryParams=function(querystring){var qstring=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");for(var i=0;i<qstring.length;i++){var urlparam=qstring[i].split("=");if(urlparam[0]==querystring){return urlparam[1];}}};function queryURLParams(queryURL,toFind){const query=queryURL.slice(queryURL.indexOf("?")+1).split("&");for(var i=0;i<query.length;i++){var find=query[i].split("=");if(toFind==find[0]){return find[1];}}return"";}function trackSearch(){
/*! Search tracking */
jQuery(document).ajaxComplete(function(event,xhr,settings){if(settings.url.indexOf("/search/pages")!=-1){setTimeout(function(){$("#results-preview li").click(function(){searchProps(settings,xhr,$(this).text().trim());});$("#help-prompt-url").click(function(){searchProps(settings,xhr,$(this).text().trim());});},1000);}});$("#search-bar-input").keypress(function(event){var keycode=(event.keyCode?event.keyCode:event.which);if(keycode==13){var keyword=$("#search-bar-input").val();if(keyword){if(location.href.indexOf("/search/")!=-1){setTimeout(function(){sendPing(keyword);},3000);}else{sendPing(keyword);}}}function sendPing(keyword){if($("#noresults-text-container").length>0){s.prop5=$("#search-bar-input").val();s.prop3="";s.eVar22=s.prop4="";s.prop6="";}else{keyword=keyword.replace(/[*,\r\n\t ]+/gi,"-");const pageNo=queryURLParams(location.href,"pg");s.prop3=s.pageName+":Search>"+keyword;s.eVar22=s.prop4="Search>"+keyword;s.prop6=pageNo;}s.prop8=s.pageName;s.eVar26="docs:search";s.prop26=s.eVar26;s.eVar52=decodeURI(location.href.toLowerCase());if(s.pageName!="docs:en-us:/search/"){s.pageName="docs:en-us:/search/";}s_Ping(true);}});$("#load-more").click(function(){const keyword=queryURLParams(location.href,"q").replace(/[*,\r\n\t ]+/gi,"-");const pageNo=queryURLParams(location.href,"pg");s.prop3=s.pageName+":Search>"+keyword;s.eVar22=s.prop4="Search>"+keyword;s.prop6=pageNo;s.prop8=s.pageName;s.eVar26="docs:search";s.prop26=s.eVar26;s.eVar52=decodeURI(location.href.toLowerCase());s_Ping(true);});}function searchProps(settings,xhr,textLi){var keyword=(textLi?textLi:queryURLParams(settings.url,"q")).replace(/[*,\r\n\t ]+/gi,"-");if(xhr&&xhr.responseJSON.hits.length>0){var pageNo=queryURLParams(settings.url,"pg");s.prop3=s.pageName+":Search>"+keyword;s.eVar22=s.prop4="Search>"+keyword;s.prop6=pageNo;s.prop5="";}else{s.prop5=keyword;s.prop3="";s.eVar22=s.prop4="";s.prop6="";}s.prop8=s.pageName;if(s.pageName!="docs:en-us:/search/"){s.pageName="docs:en-us:/search/";}s.eVar26="docs:search";s.prop26=s.eVar26;s.eVar52=decodeURI(location.href.toLowerCase());s_Ping(true);}
/*! JQUERY FUNCTIONS */
if(gotjQ()){jQuery(document).ready(function($){var sn=s_setAccount()[1];var ln=s_setAccount()[2];trackSearch();$('a[href$=".pdf"]').click(hiddenDlink);$('a[href$=".mobi"]').click(hiddenDlink);$('a[href$=".epub"]').click(hiddenDlink);var trackas=[];$("#search-bar-mount form").submit(function(e){var btxt=$(this).find("input[name='q']").val().replace(/[*,\r\n\t ]+/gi,"-");navTrack(sn,ln,"Search",btxt);});$('a[rel*="lightbox"],a[rel*="opop"]').each(function(){var type=($(this).attr("rel")=="opop")?"popup":"lightbox";if(!$(this).attr("data-lbl")&&$(this).attr("title")){$(this).attr("data-lbl",type+"-open-"+$(this).attr("title").toLowerCase().replace(/ /g,"-"));}else{if(!$(this).attr("data-lbl")&&$(this).text()){$(this).attr("data-lbl",type+"-open-"+$(this).text().toLowerCase().replace(/ /g,"-"));}else{if($(this).attr("data-lbl")){$(this).attr("data-lbl",$(this).attr("data-lbl")+"-"+type+"-open");}else{$(this).attr("data-lbl",type+"-open");}}}if(!$(this).attr("data-trackas")){$(this).attr("data-trackas",type);}});for(var i=0;i<trackas.length;i++){if(!$(trackas[i][0]).attr("data-trackas")&&trackas[i][1]){$(trackas[i][0]).attr("data-trackas",trackas[i][1]);}if(trackas[i][2]&&trackas[i][2]=="resetpage"){$(trackas[i][0]).attr("data-pgreset","true");}else{if(trackas[i][2]&&!$(trackas[i][0]).attr("data-lbl")){$(trackas[i][0]).attr("data-lbl",trackas[i][2]);}}}$(document).on("click","*[data-trackas] a,a[data-trackas]",function(e){var lbl="";var o=$(this);if(o.attr("data-lbl")!="notrack"){if(o.attr("data-lbl")){lbl=o.attr("data-lbl");}else{if(o.attr("name")){lbl=o.attr("name");}else{if(o.attr("title")){lbl=o.attr("title");}else{if(o.find("img")&&o.find("img").first().attr("title")){lbl=o.find("img").first().attr("title");}else{if(o.find("img")&&o.find("img").first().attr("alt")){lbl=o.find("img").first().attr("alt");}else{if(o.find("img").first().attr("src")){lbl=o.find("img").first().attr("src");lbl=lbl.split("/")[(lbl.split("/").length-1)];}else{lbl=o.text();}}}}}}var d=o.closest("[data-trackas]").attr("data-trackas");d=(d=="hnav"||d=="header")?":":"-";if(!o.attr("data-trackas")){while(o.parent()){o=o.parent();if(o.attr("data-lbl")){lbl=o.attr("data-lbl")+d+lbl;}if(o.attr("data-trackas")){break;}}}lbl=lbl.toLowerCase().replace(/ /g,"-").replace(/-+/g,"-");var sec=(o.attr("data-trackas"))?o.attr("data-trackas"):o.closest("*[data-trackas]").attr("data-trackas");if(location.href.indexOf(":8888")!=-1){console.log(sn+":"+ln+":"+sec+":"+lbl);}navTrack(sn,ln,sec,lbl);if(o.attr("data-pgreset")=="true"){s.clearVars();if(o.attr("href").indexOf("#")==0&&s.pageName){if(!$("body").attr("data-pgname")){$("body").attr("data-pgname",s.pageName);var pn=s.pageName;}else{var pn=$("body").attr("data-pgname");}s.pageName=pn+"/"+o.attr("href").split("#")[1];}else{s_orapageName(o.attr("href"));}oraSetInternalFilters();s.linkInternalFilters=s.linkInternalFilters+","+o.attr("href");var s_code=s.t();if(s_code){document.write(s_code);}oraSetInternalFilters();}}});});}