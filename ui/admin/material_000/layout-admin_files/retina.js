(function(){function n(){}function r(e,t){this.path=e;if(typeof t!=="undefined"&&t!==null){this.at_2x_path=t;this.perform_check=false}else{this.at_2x_path=e.replace(/\.\w+$/,function(e){return"@2x"+e});this.perform_check=true}}function i(e){this.el=e;this.path=new r(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var t=this;this.path.check_2x_variant(function(e){if(e)t.swap()})}var e=typeof exports=="undefined"?window:exports;var t={check_mime_type:true};e.Retina=n;n.configure=function(e){if(e==null)e={};for(var n in e)t[n]=e[n]};n.init=function(t){if(t==null)t=e;var n=t.onload||new Function;t.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,s;for(r=0;r<e.length;r++){s=e[r];t.push(new i(s))}n()}};n.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(e.devicePixelRatio>1)return true;if(e.matchMedia&&e.matchMedia(t).matches)return true;return false};e.RetinaImagePath=r;r.confirmed_paths=[];r.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};r.prototype.check_2x_variant=function(e){var n,i=this;if(this.is_external()){return e(false)}else if(!this.perform_check&&typeof this.at_2x_path!=="undefined"&&this.at_2x_path!==null){return e(true)}else if(this.at_2x_path in r.confirmed_paths){return e(true)}else{n=new XMLHttpRequest;n.open("HEAD",this.at_2x_path);n.onreadystatechange=function(){if(n.readyState!=4){return e(false)}if(n.status>=200&&n.status<=399){if(t.check_mime_type){var s=n.getResponseHeader("Content-Type");if(s==null||!s.match(/^image/i)){return e(false)}}r.confirmed_paths.push(i.at_2x_path);return e(true)}else{return e(false)}};n.send()}};e.RetinaImage=i;i.prototype.swap=function(e){function n(){if(!t.el.complete){setTimeout(n,5)}else{t.el.setAttribute("width",t.el.offsetWidth);t.el.setAttribute("height",t.el.offsetHeight);t.el.setAttribute("src",e)}}if(typeof e=="undefined")e=this.path.at_2x_path;var t=this;n()};if(n.isRetina()){n.init(e)}})()