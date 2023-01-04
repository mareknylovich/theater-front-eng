var onWebChat_ = onWebChat_ || function() {
	function e() {
		clearTimeout(M), 1 == be || (27254 == be ? M = setTimeout(t, 3e3, "Бихте ли ни дали телефон за връзка, за да уточним детайли?") : 3322 == be && (M = setTimeout(t, 1e4, "Right now all our operators are busy. Please wait a few minutes or give us your email, so we can contact you.")))
	}

	function t(e) {
		if ("undefined" != typeof sessionStorage && '1' != s('hasTriggeredNoReply') && 1 != c('hasTriggeredNoReplyC') && 1 != c('inChatC') && 0 != te) {
			vt('onWebChat', 'Trigger (no reply) activated', ''), r('hasTriggeredNoReply', 1), d('hasTriggeredNoReplyC', 1, .166), r('mustSendTriggerNoReplyText', !0), Lt.emit('sendchat', "", e), i();
			var t = "";
			1 == ie && (t = " agent-bubble ");
			var n = "",
				o = '',
				l = "";
			'agent' != pe && (t += " agent-first ", 1 == ee && (o = '<img id="operatorImageSmall" class="operatorImageSmallClass" src="' + xt + '//' + serverIP + '/filesUpload/operatorImages/' + Q + '" onerror="this.style.visibility=\'hidden\'"></img>')), 1 == ee && (l = " big-margin-left "), 1 == isRTLlanguage(e.substr(0, 1)) && (n = ' style="direction: rtl;text-align:right;" ');
			var m = "";
			printChat('<p ' + n + 'class="agent ' + t + l + ' ">' + o + '<span class="spanbold">' + It('max_agent', G).replace('{{operator}}', m) + '</span> ' + a(e).replace(/({{newline}})/gm, "<br>") + '</p>')
		}
	}

	function n() {
		s('chattext') && s('chattext').endsWith(It('max_gone', G) + "</span></i></p>") && (ue = !1, document.getElementById('onwbtxtarea').style.pointerEvents = 'none', document.getElementById("onwbtxtarea").disabled = !0, document.getElementById('wb-send-image').style.pointerEvents = 'none', document.getElementById('wb-smile-image').style.pointerEvents = 'none', document.getElementById("onwbtxtarea").style.opacity = "0.42", document.getElementById("wb-send-image").style.opacity = "0.42", document.getElementById("wb-smile-image").style.opacity = "0.42", document.getElementById("onwbtxtarea").setAttribute("placeholder", ""), disableMenuItem("uploadfileid"))
	}

	function o() {
		ue = !0;
		try {
			document.getElementById('onwbtxtarea').style.pointerEvents = 'auto', document.getElementById("onwbtxtarea").disabled = !1, document.getElementById('wb-send-image').style.pointerEvents = 'auto', document.getElementById('wb-smile-image').style.pointerEvents = 'auto'
		} catch (e) {}
		document.getElementById("onwbtxtarea").style.opacity = "1", document.getElementById("wb-send-image").style.opacity = "0.73", document.getElementById("wb-smile-image").style.opacity = "0.78", document.getElementById("onwbtxtarea").setAttribute("placeholder", It('max_placeholder', G)), enableMenuItem("uploadfileid")
	}

	function a(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
	}

	function i() {
		if (jt) {
			"" == document.getElementById("onwebchataudio").innerHTML.trim() && (document.getElementById("onwebchataudio").innerHTML = '<source src="' + xt + '//' + serverIP + '/sounds/incoming_sound.mp3"></source><source src="' + xt + '//' + serverIP + '/sounds/incoming_sound.ogg"></source>');
			var e = document.getElementById("onwebchataudio");
			try {
				e.play()
			} catch (t) {}
		}
	}

	function d(e, t, n) {
		var o = new Date;
		o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
		var a = "expires=" + o.toGMTString();
		document.cookie = e + "=" + t + "; " + a + ";path=/"
	}

	function l(e) {
		d(e, '', -1)
	}

	function c(e) {
		for (var t = e + "=", n = document.cookie.split(';'), o = 0; o < n.length; o++) {
			var a = n[o].trim();
			if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
		}
		return ""
	}

	function s(e) {
		return p() ? sessionStorage[e] : c('sessionstorage.' + e)
	}

	function r(e, t) {
		p() ? sessionStorage[e] = t : d('sessionstorage.' + e, t, 1)
	}

	function m(e) {
		p() ? sessionStorage.removeItem(e) : d('sessionstorage.' + e, 'pValue', -1)
	}

	function p() {
		var e = 'test',
			t = window.sessionStorage;
		if (void 0 === Et) try {
			t.setItem(e, '1'), t.removeItem(e), Et = !0
		} catch (n) {
			Et = !1
		}
		return Et
	}

	function u() {
		var e = navigator.userAgent.toLowerCase(),
			t = e.indexOf('msie '),
			n = e.indexOf('trident/'),
			o = e.indexOf('edge/');
		return t > 0 ? -1 != e.indexOf('msie') ? parseInt(e.split('msie')[1]) : !1 : n > 0 ? !0 : o > 0 ? !0 : !1
	}

	function g(e) {
		var t = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return t.test(e)
	}

	function h() {
		try {
			return window.self !== window.top
		} catch (e) {
			return !1
		}
	}

	function y() {
		Wt = !0, Lt.connect(), 8 != u() && (St = setTimeout(function() {
			Lt.io.disconnect(), minimizeChatWindow()
		}, Mt))
	}

	function w() {
		'chat' == ge && 1 == ee ? document.getElementById("div_chat_max_title_span").style.setProperty("padding-left", "50px", "important") : document.getElementById("div_chat_max_title_span").style.setProperty("padding-left", "10px", "important")
	}

	function b(e) {
		e && (e.classList.remove('onwc-show'), e.classList.add('onwc-hide'), fadeTimout = setTimeout(function() {
			e.style.setProperty("display", "none")
		}, 400))
	}

	function f() {
		var e;
		if (e = 'block' == document.getElementById("prechat_form").style.getPropertyValue('display') ? document.getElementById('prechat_btn') : document.getElementById('offlineform_btn'), null != e) {
			var t = getComputedStyle(e);
			const n = t.backgroundColor;
			"rgb(255, 255, 255)" == n && e.style.setProperty("background-color", "#ababab", "important"), e = e.getBoundingClientRect();
			var o = document.getElementById('onwbchat_window').getBoundingClientRect(),
				a = o.bottom - e.bottom,
				i = 16,
				d = 25,
				l = 30,
				c = 26,
				s = 15;
			if (40 > a && '' == document.getElementById("onwebchatform_div_id").style.margin || 0 > a) {
				var r = (40 - a) / 9,
					m = l - 3 * r;
				0 > m && (m = 0), document.getElementById("onwebchatoffname") && document.getElementById("onwebchatoffname").style.setProperty("margin", i - r + "px auto 5px", "important"), document.getElementById("onwebchatoffemail") && document.getElementById("onwebchatoffemail").style.setProperty("margin", i - r + "px auto 5px", "important"), document.getElementById("onwebchatofftel") && document.getElementById("onwebchatofftel").style.setProperty("margin", i - r + "px auto 5px", "important"), document.getElementById("onwebchatemailtext") && document.getElementById("onwebchatemailtext").style.setProperty("margin", i - r + "px auto 5px", "important"), document.getElementById("onprechatname") && document.getElementById("onprechatname").style.setProperty("margin", i - r + "px auto 5px", "important"), document.getElementById("onprechatemail") && document.getElementById("onprechatemail").style.setProperty("margin", i - r + "px auto 5px", "important"), document.getElementById("onprechattel") && document.getElementById("onprechattel").style.setProperty("margin", i - r + "px auto 5px", "important"), document.getElementById("onprechattext") && document.getElementById("onprechattext").style.setProperty("margin", i - r + "px auto 5px", "important"), document.getElementById("prechat_btn").style.setProperty("margin", m + "px auto 20px", "important"), document.getElementById("offlineform_btn").style.setProperty("margin", m + "px auto 20px", "important");
				var p = document.getElementsByClassName("onwebchatform_div"),
					u = d - 2 * r;
				4 > u && (u = 4), p[0].style.setProperty("margin", u + "px auto auto", "important"), p[1].style.setProperty("margin", u + "px auto auto", "important"), document.getElementById("onweboffline_msg_id").style.setProperty("margin-bottom", c - 2 * r + "px", "important"), document.getElementById("onweboffline_msg_id").style.setProperty("top", s - r + "px", "important"), document.getElementById("onwebprechat_msg_id").style.setProperty("margin-bottom", c - 2 * r + "px", "important"), document.getElementById("onwebprechat_msg_id").style.setProperty("top", s - r + "px", "important"), e = 'block' == document.getElementById("prechat_form").style.getPropertyValue('display') ? document.getElementById('prechat_btn') : document.getElementById('offlineform_btn'), e = e.getBoundingClientRect(), o = document.getElementById('onwbchat_window').getBoundingClientRect();
				var g = o.bottom - e.bottom;
				22 > g && (document.getElementById("onwebchatoffname") && document.getElementById("onwebchatoffname").style.setProperty("height", "29px", "important"), document.getElementById("onwebchatoffemail") && document.getElementById("onwebchatoffemail").style.setProperty("height", "29px", "important"), document.getElementById("onwebchatofftel") && document.getElementById("onwebchatofftel").style.setProperty("height", "29px", "important"), document.getElementById("onwebchatemailtext") && document.getElementById("onwebchatemailtext").style.setProperty("height", "60px", "important"), document.getElementById("onprechatname") && document.getElementById("onprechatname").style.setProperty("height", "29px", "important"), document.getElementById("onprechatemail") && document.getElementById("onprechatemail").style.setProperty("height", "29px", "important"), document.getElementById("onprechattel") && document.getElementById("onprechattel").style.setProperty("height", "29px", "important"), document.getElementById("onprechattext") && document.getElementById("onprechattext").style.setProperty("height", "60px", "important"))
			}
		}
	}

	function _() {
		Object.assign && (Object.assign(window, window.__requirejsToggleBackup), delete window.__requirejsToggleBackup), document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', "<style>" + fe + "</style>"), I(), 1 == Ht && document.getElementById("onweb_chatimage").style.setProperty('display', 'none'), setTimeout(function() {
			f()
		}, 5), kt || (null == s('chattext') && r('chattext', ''), 1 != te && 1 != Ee && 1 == xe && '' === s('chattext') || 0 != Ht || 0 === te || showChatWindow());
		var e = 0,
			t = navigator.userAgent;
		(t.indexOf("Googlebot") > -1 || t.indexOf("Yahoo! Slurp") > -1 || t.indexOf("Baiduspider") > -1 || t.indexOf("BaiDuSpider") > -1 || t.indexOf("bingbot") > -1 || t.indexOf("msnbot") > -1) && (e = 1), 0 == e && x(), $t && (document.getElementById("div_chat_max_title_span").style.setProperty("font-size", "145%", "important"), document.getElementById("offline_form").setAttribute("style", "zoom:120% !important"), document.getElementById("onwebchat-logo-span") && document.getElementById("onwebchat-logo-span").setAttribute("style", "zoom:90% !important"), document.getElementById("onwc_welcome_message").setAttribute("style", "zoom:125% !important"), document.getElementById("chat_area_id").setAttribute("style", "font-size:120% !important"), document.getElementById("onwebchat-widget-settings-submenu-ul").setAttribute("style", "zoom:110% !important"), document.getElementById("onwc_chat_message_div").setAttribute("style", "zoom:120% !important"), document.getElementById("onwc_chat_message_div").setAttribute("style", "height:64px !important"), document.getElementById("onwbtxtarea").setAttribute("style", "max-width:83% !important"), document.getElementById("onwbchat_window").style.setProperty("max-height", "650px", "important"))
	}

	function v(e, t, n) {
		function o() {
			a += l, e.scrollTop = a, d++, a >= i && clearInterval(c)
		}
		var a = e.scrollTop,
			i = e.scrollHeight - e.clientHeight,
			d = 0,
			l = (i - a) / t,
			c = setInterval(o, n)
	}

	function I() {
		function t(e) {
			('onwcFileModal' === e.target.id || 'onwcEmailModal' === e.target.id || 'onwcEmailOkModal' === e.target.id) && toggleModal(e.target.id, !1), 'departments' != e.target.id && 'onweb_menu_minimize_btn_id' != e.target.id && document.getElementById("onwcdepartmenu") && document.getElementById("onwcdepartmenu").style.setProperty("display", "none", "important")
		}

		function i(e, t) {
			var n = document.createElement('a');
			if (n.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(t)), n.setAttribute('download', e), document.createEvent) {
				var o = new MouseEvent("click", {
					view: window,
					bubbles: !0,
					cancelable: !0,
					clientX: 0
				});
				n.dispatchEvent(o)
			} else n.click()
		}

		function l() {
			var e = new FormData(document.getElementById("onwbchtUploadForm"));
			sendFileToServer(e)
		}

		function m(e, t, n, o) {
			var a = (document.getElementsByClassName("formVal"), new XMLHttpRequest);
			a.onreadystatechange = function() {
				4 === a.readyState && (200 === a.status || 0 === a.status && '' !== a.responseText ? o({
					url: e,
					status: 200,
					body: a.responseText || ''
				}) : n({
					url: e,
					status: a.status,
					body: a.responseText || ''
				}))
			}, a.open("post", e, !0), a.send(t)
		}

		function p(e) {
			e && (e.classList.contains('onwc-show') ? (e.classList.remove('onwc-show'), e.classList.add('onwc-hide'), F = setTimeout(function() {
				e.style.setProperty("display", "none")
			}, 400)) : (clearTimeout(F), e.style.setProperty("display", "block"), setTimeout(function() {
				e.classList.remove('onwc-hide'), e.classList.add('onwc-show')
			}, 0)))
		}

		function h(e) {
			e && e.classList.contains('onwc-show') && (e.classList.remove('onwc-show'), e.classList.add('onwc-hide'), F = setTimeout(function() {
				e.style.setProperty("display", "none")
			}, 400))
		}
		if (0 == document.querySelectorAll(".onwebchatbox").length) {
			1 == Ee ? div_chat_min_title = It('min_online', G) : div_chat_min_title = It('min_offline', G);
			var b = '<a href="https://www.onwebchat.com/landing.php?l=2&s=' + be + '" target="_blank" rel="noopener noreferrer"><span id="onwebchat-logo-span"> <span id="" class="onwbchtlogo-in-widget-icon" style="display:inline-block;margin-bottom:-3px;opacity:0.9;margin-right:-1px;height:15px;"></span> by onWebChat</span></a>',
				_ = b.replace("l=2&", "");
			1 == ve && (_ = "", b = ""), $t ? 1 == Ee ? image_name = At : image_name = Nt : 1 == Ee ? image_name = Rt : image_name = Ft;
			var I = '';
			1 == ee && (I = '<img id="operatorImage"  src="' + xt + '//' + serverIP + '/filesUpload/operatorImages/' + Q + '"  onerror="this.style.visibility=\'hidden\'"></img>');
			var B = '<div id="onwc_welcome_message"  class="onwebchat_title2 ns">' + It('max_msg', G) + '</div>';
			'' == It('max_msg', G) && (B = ''), tempSaveSt = '', u() || (tempSaveSt = '<li onclick="SaveToFile(\'chat_area_id\')" id="onwebchat-savetofile-li"><div id="onwebchat-save-icon" class="onwcimg onwebchat-menu-icons onwbchtsave-icon"></div><span class="onwebchat-widget-settings-submenu-text">' + It('menu_save', G) + '</span></li>');
			var C = "",
				k = "",
				P = "";
			if (1 == $e) {
				var T = "",
					M = "";
				1 == Je && (T = '<input id="onwc_consent_checkbox_offline" value=1 style="outline:none;margin: 0 5px 0 0px; width: 15px;height: 15px;padding: 0;vertical-align: bottom;position: relative;top:0px;*overflow: hidden;cursor:pointer" type="checkbox" />', M = 'padding-left: 0px;text-indent:-17px;'), C = '<div id="onwc_consent_l_offline" style="cursor:pointer;display:inline;font-weight:500;-webkit-user-select: none;' + M + '">' + T + '<span onClick="consentTextClicked()">' + It('consent_text', G) + ' </span></div>', k = C.replace(/_offline/g, '_prechat'), P = C.replace(/_offline/g, '_inchat_modal')
			}(1 != $t || 1 == Ie) && 8 != u() && document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', "<audio id=\"onwebchataudio\"></audio><div class=\"onwebchatbox\" id=\"onwbchat_window\"><div class=\"webchat_header\" id=\"webchat_header\"><div id=div_chat_min_title class=\"ns\"><span id=\"div_chat_min_title_span\">" + div_chat_min_title + "</span><div id=\"onweb_chaticon\"><div id=\"onweb-online-icon\" class=\"onwcimg onwbchtonline-icon\"></div><div id=\"onweb-offline-icon\" class=\"onwcimg onwbchtoffline-icon\"></div></div></div><div id=div_chat_max_title class=\"ns\"><span id=\"div_chat_max_title_span\"></span><div id=\"onweb_minimize_btn_icon_id\" class=\"onweb_minimize_btn_icon\"></div></div></div><div id=\"offline_form\"><div id=\"onweboffline_msg_id\" class=\"onweboffline_msg ns\" >" + It('off_msg', G) + "</div><div id=\"onwebchatform_div_id\" class=\"onwebchatform_div\">" + (0 == Se ? '' : '<input id="onwebchatoffname" placeholder="' + It('off_name', G) + '" style="border: 1px solid #ccc !important;" >') + (0 == Oe ? '' : '<input  placeholder="' + It('off_email', G) + '" style="border: 1px solid #ccc !important;" class="onweb_mail" id="onwebchatoffemail" >') + (0 == je ? '' : '<input  placeholder="' + It('off_phone', G) + '" style="border: 1px solid #ccc !important;" class="onweb_mail" id="onwebchatofftel" >') + '<textarea style="" id="onwebchatemailtext" placeholder="' + It('off_text', G) + '"></textarea>' + C + '<input type=button class="onweb_mail_btn" id="offlineform_btn" style="color:#fff !important; background-image: inherit;" value="' + It('off_send', G) + '">' + _ + "</div></div><div id=\"upload_img\"><img src=\"https://www.onwebchat.com/operator/assets/images/drop-file.png\" onerror=\"this.style.display='none'\"></div><div id=\"prechat_form\"><div id=\"onwebprechat_msg_id\" class=\"onweboffline_msg ns\">" + It('prechat_msg', G) + "</div><div id=\"onwebchatform_div_id\" class=\"onwebchatform_div\">" + (0 == Ne ? '' : '<input placeholder="' + It('prechat_name', G) + '" style="border: 1px solid #ccc;" id="onprechatname">') + (0 == Fe ? '' : '<input placeholder="' + It('prechat_email', G) + '" style="border: 1px solid #ccc;" class="onweb_mail" id="onprechatemail" >') + (0 == Ue ? '' : '<input placeholder="' + It('prechat_phone', G) + '" style="border: 1px solid #ccc;" class="onweb_mail" id="onprechattel" >') + (0 == Xe ? '' : '<input readonly="readonly" placeholder="' + It('departments', G) + '" style="padding-right: 34px !important; border: 1px solid #ccc;cursor:pointer" class="onweb_mail" id="departments" onClick="openonwcDepartMenu()"><div id="onweb_menu_minimize_btn_id" onClick="openonwcDepartMenu()" class="onweb_menu_minimize_btn"></div><ul id="onwcdepartmenu"  class="onwcdepartmenu"></ul>') + '<textarea placeholder="' + It('prechat_text', G) + '" style="border: 1px solid #ccc !important;" id="onprechattext"></textarea>' + k + '<input type=button class="onweb_mail_btn" id="prechat_btn"  value="' + It('prechat_btn', G) + '">' + _ + "</div></div><div id=\"chat_area_ex_id\"><div id=\"chat_area_id\" class=\"chat_area\">" + I + B + "</div></div><div id=\"onwc_chat_message_div\" class=\"chat_message\" ><div id=\"chat_info_id\" class=\"chat_info\"></div><textarea id=\"onwbtxtarea\" onfocus=\" setTimeout(function(){ checkMobileChatHeight(); }, 400); \" onblur=\" setTimeout(function(){ checkMobileChatHeight(); }, 400); \" class=\"onwebtextarea\" placeholder=\"" + It('max_placeholder', G) + "\" ></textarea><div id=\"iconsdiv\"><div id=\"wb-send-image\" class=\"onwcimg onwbchtsend-icon\"></div><div id=\"wb-smile-image\" class=\"onwcimg onwbchtsmile-icon\"></div><div id=\"onwebchat-emoticons-div\"></div></div><div id=\"onwc-settings-icon-id\" class=\"onwcimg onwebchat-widget-settings-icon onwbchtsettings-icon-final2\"></div><ul class=\"onwebchat-widget-settings-submenu ns\" id=\"onwebchat-widget-settings-submenu-ul\"><li id=\"uploadfileid\" onclick=\"javascript:uploadFilePressed(); return false;\"><div class=\"onwcimg onwebchat-menu-icons onwbchtupload-icon-2\"></div><span class=\"onwebchat-widget-settings-submenu-text\">" + It('menu_send_file', G) + "</span></li><li onclick=\"javascript:emailTranscript()\" id=\"onwebchat-email-li\"><div id=\"onwebchat-email-icon\" class=\"onwcimg onwebchat-menu-icons onwbchtemail-icon\"></div><span class=\"onwebchat-widget-settings-submenu-text\">" + It('menu_email', G) + "</span></li><li onclick=\"PrintElem2Printer('chat_area_id')\" id=\"onwebchat-print-li\"><div id=\"onwebchat-print-icon\" class=\"onwcimg onwebchat-menu-icons onwbchtprint-icon\"></div><span class=\"onwebchat-widget-settings-submenu-text\">" + It('menu_print', G) + '</span></li>' + tempSaveSt + '<li onclick="" id="onwebchat-volume-li-id"><div id="onwebchat-volume-icon" class="onwcimg onwebchat-menu-icons onwbchtvolume-icon-2"></div><span id="wb-volume-text-id" class="onwebchat-widget-settings-submenu-text">' + It('menu_sound', G) + "</span></li><li onclick=\"javascript:endChatClicked();\"  id=\"onwebchat-endchat-li\"><div id=\"onwebchat-end-chat-icon\" class=\"onwcimg onwebchat-menu-icons onwbchtendchat-icon\"></div><span class=\"onwebchat-widget-settings-submenu-text\">" + It('menu_end_chat', G) + "</span></li></ul>" + b + '<form id="onwbchtUploadForm" style="visibility:hidden" enctype="multipart/form-data" method="post"><input type="file" onchange="validateFileSize(this, 1)" id="onwbchtFileinput" name="file"/><input type="hidden" name="siteid" value="' + be + "\"></form></div><div id=\"onwcFileModal\" class=\"onwcmodal\"><div class=\"onwcmodal-content\"><span class=\"onwcmodalclose\" onClick=\"javascript:toggleModal('onwcFileModal'), false\">&times;</span>File size > 5 Mb!</div></div><div id=\"onwcEmailModal\" class= \"onwcmodal\"><div class=\"onwcmodal-content\" style=\"width:70%\">" + It('email_text', G) + "<br><br><input type=\"email\" placeholder=\"Email\" id=\"onwcemailtrans\" style=\"border-radius:5px;height:20px;box-sizing:content-box;border:1px solid #909090;height:20px;font-size:14px;padding:2% 5%;width:89%;outline:none\"><div style=\"text-align:center;padding:14px 1px 7px 1px;\"><input style=\"margin-right:6% !important\" class=onwcbutton type=button value=\"" + It('cancel', G) + '" onClick="javascript:toggleModal(\'onwcEmailModal\', false)"><input class="onwcbutton orange" type=button value="' + It('off_send', G) + "\" onClick=\"javascript:sendEmailTranscript()\"></div></div></div><div id=\"onwcEmailOkModal\" class=\"onwcmodal\"><div class=\"onwcmodal-content\"><span class=\"onwcmodalclose\" onClick=\"javascript:toggleModal('onwcEmailOkModal', false)\">&times;</span>" + It('email_sent', G) + "</div></div><div id=\"onwcEndChatModal\" class=\"onwcmodal\"><div class=\"onwcmodal-content\">" + It('end_chat_msg', G) + '<div style="margin-top: 11px;margin-bottom: 6px;text-align:center"><input class=onwcbutton style="padding: 1px 5px;margin:5% 6% 3% 0% !important;" type=button value="' + It('cancel', G) + '" onClick="javascript:toggleModal(\'onwcEndChatModal\', false)"><input style="padding: 1px 5px;margin:6% 0% 1% 8%" class="orange onwcbutton" type=button value="' + It('menu_end_chat', G) + "\" onClick=\"javascript:endChatFunction()\"> </div></div></div><div id=\"onwcRatingChatModal\" class=\"onwcmodal\"><div class=\"onwcmodal-content\">" + It('rating_msg', G) + "<div style=\"margin-top: 11px;margin-bottom: 6px;text-align:center\"><div class=\"rating ns\"><span id=\"onwcstar5\" onClick=\"javascript:rate(5)\">★</span><span id=\"onwcstar4\" onClick=\"javascript:rate(4)\">★</span><span id=\"onwcstar3\" onClick=\"javascript:rate(3)\">★</span><span id=\"onwcstar2\" onClick=\"javascript:rate(2)\">★</span><span id=\"onwcstar1\" onClick=\"javascript:rate(1)\">★</span></div></div><div style=\"margin-top: 11px;margin-bottom: 6px;text-align:center\"><input id=\"sendStarButton\" disabled class=\"onwcbutton orange disabled\" style=\"margin:8% auto 6% auto !important;\" type=button value=\"" + It('rating_btn', G) + "\" onClick=\"javascript:sendRate();\"><br><a href=\"#\" onClick=\"javascript:toggleModal('onwcRatingChatModal', false);\">" + It('rating_no_msg', G) + "</a></div></div></div><div id=\"onwcConsentModal\" class= \"onwcmodal\"><div class=\"onwcmodal-content\" style=\"width:70%\"><div style=\"margin: 4px 6px;\">" + P + "</div><div style=\"text-align:center;margin:9px\"><input  class=onwcbutton type=button style=\"padding: 2px 9px;margin:0 auto;cursor:pointer\" value=\"OK\" onClick=\"clickConsentModalOk()\"></div></div></div></div>"), openonwcDepartMenu = function() {
				Lt.emit('askdepartments', be), widthtemp = document.getElementById("departments").offsetWidth, document.getElementById("onwcdepartmenu").style.setProperty("width", widthtemp + "px", "important")
			}, onwcmenuliclick = function(e) {
				document.getElementById("departments").value = e.children[0].innerText, Ve = e.children[1].innerText.trim(), Lt.emit('visitorselectdepartment', be, Ve), setTimeout(function() {
					document.getElementById("departments").style.setProperty("border", "1px solid  #CCC", "important")
				}, 0)
			}, consentTextClicked = function() {
				if (1 == Je) {
					var e = document.getElementById("onwc_consent_checkbox_inchat_modal");
					e && (e.checked = !e.checked), e = document.getElementById("onwc_consent_checkbox_offline"), e && (e.checked = !e.checked), e = document.getElementById("onwc_consent_checkbox_prechat"), e && (e.checked = !e.checked)
				}
			}, toggleModal = function(e, t) {
				document.getElementById(e).classList.toggle("show-onwcmodal", t)
			}, document.getElementById('onwbchat_window') && document.getElementById('onwbchat_window').addEventListener("click", t), checkPhone = function(e) {
				e.value = e.value.replace(/[^\d -]/g, '')
			}, emailTranscript = function() {
				"" != s('chattext') && 6 > it && (document.getElementById("onwebchat-widget-settings-submenu-ul").style.setProperty("display", "none"), toggleModal("onwcEmailModal"), document.getElementById("onwcemailtrans").focus())
			}, checkMobileChatHeight = function() {
				try {
					if ($t) {
						var e = document.getElementById("onwbchat_window").clientHeight;
						document.getElementById("chat_area_id").style.setProperty("height", e - 98 - Ce - 4 + 14 * S + "px"), v(document.getElementById("chat_area_id"), 2, 1)
					}
				} catch (t) {}
			}, clickConsentModalOk = function() {
				var e = -1;
				document.getElementById("onwc_consent_checkbox_inchat_modal") && (e = document.getElementById("onwc_consent_checkbox_inchat_modal").value), 1 == Je && 0 == document.getElementById("onwc_consent_checkbox_inchat_modal").checked ? document.getElementById("onwc_consent_l_inchat_modal").style.setProperty("color", "#D04848") : 1 == Je && 1 == document.getElementById("onwc_consent_checkbox_inchat_modal").checked ? (d("consentvalue", 2, 93), toggleModal('onwcConsentModal', !1), Lt.emit('setconsentsettings', zt, e, $e, Je)) : 1 == $e && 1 != Je && (d("consentvalue", 1, 93), toggleModal('onwcConsentModal', !1), Lt.emit('setconsentsettings', zt, e, $e, Je))
			}, document.getElementById("onwc_consent_checkbox_inchat_modal") && document.getElementById("onwc_consent_checkbox_inchat_modal").addEventListener('change', function() {
				1 == document.getElementById("onwc_consent_checkbox_inchat_modal").checked && document.getElementById("onwc_consent_l_inchat_modal").style.setProperty("color", "#545454")
			}), endChatClicked = function() {
				1 == Y && (document.getElementById("onwebchat-widget-settings-submenu-ul").style.setProperty("display", "none"), toggleModal("onwcEndChatModal", !0))
			}, endChatFunction = function() {
				if ("" != s('chattext')) {
					for (r('chattext', ''), disableMenuItem("onwebchat-print-li"), disableMenuItem("onwebchat-savetofile-li"), disableMenuItem("onwebchat-email-li"), disableMenuItem('onwebchat-endchat-li'), Y = !1; document.getElementById('chat_area_id').firstChild;) document.getElementById('chat_area_id').removeChild(document.getElementById('chat_area_id').firstChild);
					document.getElementById('chat_area_id').insertAdjacentHTML('beforeend', B), showChatWindow(), Lt.emit('close_dialog_visitor'), r("servingOpImage", ""), Q = "", 1 == ee && (Q = "0_support_man.png"), document.getElementById("departments") && (document.getElementById("departments").value = "", document.getElementById("departments").placeholder = It('departments', G)), document.getElementById('onprechattext').value = '', Ve = 0
				}
				toggleModal('onwcEndChatModal', !1), 1 == le && 1 == c('inChatC') && 0 == se && toggleModal("onwcRatingChatModal", !0), se = 0, r("isRated", 0), r('hasTriggeredNoReply', 0), d('hasTriggeredNoReplyC', 0, .166), d('inChatC', 0, .166)
			}, rate = function(e) {
				for (this.rating = e, document.getElementById("sendStarButton").classList.remove("disabled"), document.getElementById("sendStarButton").removeAttribute("disabled"), ht = 1; e >= ht; ht++) {
					var t = "onwcstar" + ht;
					document.getElementById(t).style.setProperty("color", "#ffb900")
				}
				for (ht = e + 1; 5 >= ht; ht++) {
					var t = "onwcstar" + ht;
					document.getElementById(t).style.setProperty("color", "#aeaeae")
				}
			}, sendRate = function() {
				Lt.emit('ratechat', be, ce, this.rating), toggleModal('onwcRatingChatModal', !1), 0 == c('inChatC') ? (se = 0, r("isRated", 0)) : (se = 1, r("isRated", 1))
			}, sendEmailTranscript = function() {
				if (g(document.getElementById('onwcemailtrans').value)) {
					if (6 > it) {
						var e = (new Date).getTimezoneOffset() / 60 * -1;
						Lt.emit('onwcemailtranscript', zt, be, document.getElementById("onwcemailtrans").value, e, lt), toggleModal("onwcEmailModal", !1);
						var t = c('onwbchtemailsSent');
						it++, "" == t ? d('onwbchtemailsSent', 1, .0416) : d('onwbchtemailsSent', parseInt(t) + 1, .0416)
					}
				} else document.getElementById("onwcemailtrans").focus(), document.getElementById("onwcemailtrans").style.setProperty("border", "1px solid  #D04848", "important")
			}, document.getElementById("onwcemailtrans") && document.getElementById("onwcemailtrans").addEventListener('keyup', function() {
				g(document.getElementById('onwcemailtrans').value) && document.getElementById("onwcemailtrans").style.setProperty("border", "1px solid  #909090", "important")
			}), 1 == Ee ? o() : n(), 1 == re && document.getElementById("onwbchat_window").style.setProperty('display', 'none'), 1 == Ee ? document.getElementById("onweb-offline-icon") && document.getElementById("onweb-offline-icon").style.setProperty('display', 'none') : document.getElementById("onweb-online-icon") && document.getElementById("onweb-online-icon").style.setProperty('display', 'none'), 1 == Ee && "" != X ? document.getElementById("webchat_header").style.setProperty('background-color', X, 'important') : "" != $ && (document.getElementById("webchat_header").style.setProperty('background-color', $, 'important'), document.getElementById("offlineform_btn").style.setProperty('background-color', $, 'important')), 0 == Ke && document.getElementById('onwc-settings-icon-id').remove(), 0 == et && 0 == Qe && 0 == tt && 0 == nt && 0 == ot && 0 == at && document.getElementById('onwebchat-widget-settings-submenu-ul') && document.getElementById('onwebchat-widget-settings-submenu-ul').remove(), 0 == et && document.getElementById('onwebchat-email-li') && document.getElementById('onwebchat-email-li').remove(), 0 == Qe && document.getElementById('uploadfileid') && document.getElementById('uploadfileid').remove(), 0 == tt && document.getElementById('onwebchat-print-li') && document.getElementById('onwebchat-print-li').remove(), 0 == nt && document.getElementById('onwebchat-savetofile-li') && document.getElementById('onwebchat-savetofile-li').remove(), 0 == ot && document.getElementById('onwebchat-volume-li-id') && document.getElementById('onwebchat-volume-li-id').remove(), 0 == at && document.getElementById('onwebchat-endchat-li') && document.getElementById('onwebchat-endchat-li').remove(), validateFileSize = function(e, t) {
				var n;
				return n = 1 == t ? e.files[0].size / 1024 / 1024 : e.size / 1024 / 1024, n > 5 ? (toggleModal('onwcFileModal'), document.getElementById('onwbchtFileinput').value = '', !1) : (printChat('<p class="me me-bubble"><span class="spanbold">' + It('max_me', G) + "</span>	[loading...]</p>", 'me'), 1 == t && l(), !0)
			}, SaveToFile = function(e) {
				try {
					if ("" != s('chattext')) {
						document.getElementById("onwebchat-widget-settings-submenu-ul").style.setProperty("display", "none");
						var t = new Date,
							n = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate(),
							o = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Chat transcript from ' + E(window.location.href) + ' on ' + n + '</title><style>',
							a = ".me-bubble {background-color: #efeded;width: 75%;margin-right: 5%;padding: 8px 12px;float: right;border-radius: 11px;} .me-first  {margin-top: 12px;border-top-right-radius: 2px;} .agent-bubble {background-color: #b0cdcf;width: 75%;padding: 8px 12px;border-radius: 11px;} .agent-first  {margin-top: 12px;border-top-left-radius: 2px;} p {display: inline-block;font-family: Arial, Helvetica, sans-serif;line-height: 19px;word-wrap: break-word;max-width: 55%;margin: 3px;} #operatorImageSmall, #operatorImage, .server_messages, .spanbold{display:none;} .chat {display: block;flex-direction: column;width: 560px;margin: 0 auto;} i{font-style: initial; } .print:hover {background-color: #438d93 !important;cursor: pointer;} @media print {.print {display: none;}} .onwctime{ color:#646464; font-size: 14px !important;text-align: right;display: inline-block; padding-top: 14px;padding-right: 18px;padding-left: 18px;} .onwcinner{display: inline-flex;width:100%} .onwcouter{display: relative;} .onwcminner{width: 100%;text-align: right;}";
						i('chat_' + E(window.location.href) + '_' + n + '.html', o + ' ' + a + ' </style> </head> <body> <div style="font-weight: 600;font-size: 23px;color:#565656;text-align: center;margin: 32px 0px;white-space: nowrap;"><p>Chat transcript from ' + E(window.location.href) + ' on ' + n + ' </p></div>  <button style="position: fixed;top: 27px;right: 105px;width: 91px;height: 36px;background-color: #58a9af;font-size: 19px;border-radius: 3px;color: white;border: none;box-shadow: none;" class="print" onclick="window.print()">Print</button> <div class="chat">' + document.getElementById(e).innerHTML + '  </div><br><br><br><br></body></html>')
					}
				} catch (d) {
					console.log(d)
				}
			}, PrintElem2Printer = function(e) {
				try {
					"" != s('chattext') && (document.getElementById("onwebchat-widget-settings-submenu-ul").style.setProperty("display", "none"), Popup2Print(document.getElementById(e).innerHTML))
				} catch (t) {
					console.log(t)
				}
			}, Popup2Print = function(e) {
				var t = window.open('', 'onWebChat live chat - Print ', 'height=700,width=920');
				return t.document.write('<html><head><title>Chat transcript from ' + E(window.location.href) + ' </title>'), t.document.write('<style> .onwcinner{ display: list-item;} .onwcminner {display:inline-block} .onwctime { left: 4px; position: absolute; line-height: 20px; font-size: 14px;color: #585858;display:inline-block;  margin:6px 14px 6px 6px; float:left} p{     margin: 4px 4px 4px 51px; position: relative; display:inline-block} .spanbold {font-style: italic; color: #838d93;} p.agent.agent-bubble { line-height: 20px; }  p.me.me-bubble{ line-height: 20px;} p.server_messages,#operatorImage,#operatorImageSmall{display:none;} i{font-style: initial; }</style>'), t.document.write('</head><body ><br><br>'), t.document.write(e), t.document.write('</body></html>'),
					t.document.close(), t.focus(), t.print(), t.close(), !0
			}, okButtonClicked = function() {
				Lt.emit('chatWindowMax', 0), minimizeChatWindow()
			}, uploadFilePressed = function() {
				document.getElementById("uploadfileid").style.opacity > .9 && (document.getElementById('onwbchtFileinput').click(), 0 == Pt && 0 == Wt && y())
			}, void 0 != s('chattext') && "" != s('chattext') && (enableMenuItem("onwebchat-print-li"), enableMenuItem("onwebchat-savetofile-li"), 6 > it && enableMenuItem("onwebchat-email-li"), enableMenuItem('onwebchat-endchat-li'), Y = !0);
			var L = 0,
				A = document.getElementById('onwbchat_window'),
				R = document.getElementById('upload_img');
			A.addEventListener('dragenter', function(e) {
				L++, 1 == ue && 1 == Ke && 1 == Qe && 'chat' == ge && (A.style.filter = "brightness(55%)", R.style.display = "block"), e.preventDefault()
			}, !1), A.addEventListener('dragleave', function(e) {
				L--, 0 == L && (A.style.filter = "brightness(100%)", R.style.display = "none"), e.preventDefault()
			}, !1), A.addEventListener('dragover', function(e) {
				e.preventDefault()
			}, !1), A.addEventListener('drop', function(e) {
				L = 0;
				var t = e.dataTransfer,
					n = t.files;
				if (A.style.filter = "brightness(100%)", R.style.display = "none", e.preventDefault(), 1 == ue && 1 == Ke && 1 == Qe && 'chat' == ge && validateFileSize(n[0], 0)) {
					var o = new FormData;
					o.append('file', n[0]), o.append('siteid', be), sendFileToServer(o)
				}
			}, !1), sendFileToServer = function(e) {
				m('' + xt + '//' + serverIP + '/chat_upload_file/url', e, function(e) {
					console.log('Error sending file: ' + e.status)
				}, function(e) {
					var t, n = document.querySelectorAll('img[src$="loading.gif"][class="onweb_uploadfile"]')[0],
						o = e.body,
						a = o.substring(o.indexOf(":") + 1);
					if (a.toLowerCase().endsWith(".png") || a.toLowerCase().endsWith(".jpg") || a.toLowerCase().endsWith(".jpeg") || a.toLowerCase().endsWith(".svg") || a.toLowerCase().endsWith(".gif")) {
						me++, t = n.src.replace("chatimages/loading.gif", "filesUpload/" + encodeURI(a)), n.style.maxWidth = "150px", n.style.maxHeight = "70px", r('chattext', s('chattext').replace('<img class="onweb_uploadfile" id="loadingImg" src="' + xt + '//' + serverIP + '/chatimages/loading.gif" />', "<a target='_blank' rel='noopener noreferrer' href=" + xt + "//" + serverIP + "/filesUpload/" + encodeURI(a) + "><img class='onweb_uploadfile' style='max-width:150px; max-height:70px' src=" + xt + "//" + serverIP + "/filesUpload/" + encodeURI(a) + "></a>")), v(document.getElementById("chat_area_id"), 20, 1), setTimeout(function() {
							v(document.getElementById("chat_area_id"), 20, 1)
						}, 500), setTimeout(function() {
							v(document.getElementById("chat_area_id"), 20, 1)
						}, 1e3), n.src = t;
						var i = document.createElement("a");
						i.innerHTML = n.outerHTML, i.setAttribute('href', xt + "//" + serverIP + "/filesUpload/" + encodeURI(a)), i.setAttribute('target', '_blank'), i.setAttribute('rel', 'noopener noreferrer'), n.parentNode.insertBefore(i, n), n.remove()
					} else {
						t = n.src.replace("loading.gif", "download-icon.png");
						var d = a.replace(/^.*[\\\/]/, '');
						n.src = t;
						var i = document.createElement("a");
						i.innerHTML = n.outerHTML, i.setAttribute('href', xt + "//" + serverIP + "/filesUpload/" + encodeURI(a)), i.setAttribute('target', '_blank'), i.setAttribute('rel', 'noopener noreferrer'), n.parentNode.insertBefore(i, n);
						var l = n.parentNode;
						n.remove();
						var c = document.createElement("span");
						c.innerHTML = d, l.appendChild(c), r('chattext', s('chattext').replace('<img class="onweb_uploadfile" id="loadingImg" src="' + xt + '//' + serverIP + '/chatimages/loading.gif" />', "<a target='_blank' href=" + xt + "//" + serverIP + "/filesUpload/" + encodeURI(a) + "><img class='onweb_uploadfile' src='" + xt + "//" + serverIP + "/chatimages/download-icon.png' /><span>" + d + "</span></a>"))
					}
					Lt.emit('sendchat', '{{fileuploaded:' + a + '}}'), D("{{fileuploaded:" + a + "}}", "visitor")
				})
			}, document.getElementById('onwc-settings-icon-id') && (document.getElementById('onwc-settings-icon-id').onclick = function(e) {
				e.stopPropagation(), h(document.getElementById('onwebchat-emoticons-div')), p(document.getElementById('onwebchat-widget-settings-submenu-ul'))
			}), document.getElementById('wb-smile-image').onclick = function(e) {
				e.stopPropagation(), p(document.getElementById('onwebchat-emoticons-div')), h(document.getElementById('onwebchat-widget-settings-submenu-ul')), 0 == Pt && 0 == Wt && y()
			};
			var F;
			if (document.addEventListener("click", function(e) {
					document.getElementById("onwebchat-widget-settings-submenu-ul") && '1' == document.getElementById("onwebchat-widget-settings-submenu-ul").classList.contains('onwc-show') && p(document.getElementById('onwebchat-widget-settings-submenu-ul')), '1' == document.getElementById("onwebchat-emoticons-div").classList.contains('onwc-show') && p(document.getElementById('onwebchat-emoticons-div'))
				}), document.getElementById('onwebchat-volume-li-id') && (document.getElementById('onwebchat-volume-li-id').onclick = function(e) {
					1 == jt ? (jt = !1, d("onwbchtSound", 0, 93), document.getElementById('onwebchat-volume-icon').classList.replace('onwbchtvolume-icon-2', 'onwbchtvolume-icon-off')) : (jt = !0, d("onwbchtSound", 1, 93), document.getElementById('onwebchat-volume-icon').classList.replace('onwbchtvolume-icon-off', 'onwbchtvolume-icon-2'))
				}), 0 == jt && document.getElementById('onwebchat-volume-icon').classList.replace('onwbchtvolume-icon-2', 'onwbchtvolume-icon-off'), document.getElementById("onwebchat-widget-settings-submenu-ul") && document.getElementById("onwebchat-widget-settings-submenu-ul").addEventListener("click", function(e) {
					e.stopPropagation()
				}), document.getElementById("onwebchat-emoticons-div").addEventListener("click", function(e) {
					e.stopPropagation()
				}), 1 == S && (document.getElementById("webchat_header").style.setProperty("height", "40px", "important"), document.getElementById("onwbchat_window").style.setProperty("height", "0px", "important"), document.getElementById("div_chat_min_title").style.setProperty("line-height", "42px", "important"), document.getElementById("onwbchat_window").style.setProperty("box-shadow", "0px 0px 5px 0px #777", "important")), 1 == de || $t) {
				$t ? imageClass = "onweb_chatimage_mobile" : imageClass = "onweb_chatimage";
				var H = xt + '//' + serverIP + '/chatWidgetImages/' + image_name,
					U = document.getElementById('onwbchat_window');
				U && (U.insertAdjacentHTML("afterend", '<div id="onweb_chatimage_div"><img  id="onweb_chatimage" onload="onweb_chatimage_loaded()" onmouseover="document.getElementById(\'onweb_chatimage_x\').style.visibility=\'visible\'" onmouseout="setTimeout(function(){ if (document.getElementById(\'onweb_chatimage_x\').style.opacity!=0.9)  document.getElementById(\'onweb_chatimage_x\').style.visibility=\'hidden\'}, 200)"  onerror="this.style.visibility=\'hidden\'" usemap="#onwcmap1" class="' + imageClass + '" alt="" src="' + H + '"></div>'), 0 == te && document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").style.setProperty("display", "none")), 0 == Ee && 1 == xe && document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").style.setProperty("display", "none"), onweb_chatimage_loaded = function() {
					document.getElementById('onwbchat_window').insertAdjacentHTML('beforeend', '<div id="onweb_chatimage_x" onmouseover="this.style.opacity=\'0.9\';this.style.visibility=\'visible\'" class="onwcimg onwbchtclose2 onweb_chatimage_x"></div>');
					var e = parseInt(window.getComputedStyle(document.getElementById("onweb_chatimage"), null).getPropertyValue("left"));
					e = e + parseInt(document.getElementById('onweb_chatimage').clientWidth) - 4, document.getElementById("onweb_chatimage_x").style.setProperty("left", e + "px");
					var t = parseInt(window.getComputedStyle(document.getElementById("onweb_chatimage"), null).getPropertyValue("bottom")) + parseInt(document.getElementById('onweb_chatimage').clientHeight) - 4;
					document.getElementById("onweb_chatimage_x").style.setProperty("bottom", t + "px"), document.getElementById('onwbchat_window').onmouseleave = function() {
						document.getElementById('onweb_chatimage_x').style.visibility = 'hidden'
					}, document.getElementById('onweb_chatimage_x').onmouseleave = function() {
						document.getElementById('onweb_chatimage_x').style.opacity = '0.5'
					}, document.getElementById('webchat_header').onmouseenter = function() {
						document.getElementById('onweb_chatimage_x').style.visibility = 'hidden'
					}, document.getElementById('onweb_chatimage_x').onclick = function() {
						document.getElementById("onweb_chatimage").style.setProperty("display", "none"), document.getElementById('onweb_chatimage_x').style.display = "none", r('hideImage', 1)
					}
				}
			}
			if (document.getElementById('offlineform_btn').onclick = function() {
					if (1 == $e && 1 == Je && 0 == document.getElementById("onwc_consent_checkbox_offline").checked || 1 == Oe && 1 == ze && !g(document.getElementById("onwebchatoffemail").value) || 1 == je && 1 == Ae && document.getElementById("onwebchatofftel").value.length < 4 || 1 == Se && 1 == Le && document.getElementById("onwebchatoffname").value.length < 2 || document.getElementById("onwebchatemailtext").value.length < 1) return 1 == $e && 1 == Je && 0 == document.getElementById("onwc_consent_checkbox_offline").checked && document.getElementById("onwc_consent_l_offline").style.setProperty("color", "#D04848"), document.getElementById("onwebchatemailtext").value.length < 1 && (document.getElementById("onwebchatemailtext").focus(), document.getElementById("onwebchatemailtext").style.setProperty("border", "1px solid  #D04848", "important")), 1 == je && 1 == Ae && document.getElementById("onwebchatofftel").value.length < 4 && (document.getElementById("onwebchatofftel").focus(), setTimeout(function() {
						document.getElementById("onwebchatofftel").style.setProperty("border", "1px solid  #D04848", "important")
					}, 0), f()), 1 != Oe || 1 != ze || g(document.getElementById("onwebchatoffemail").value) || (document.getElementById("onwebchatoffemail").focus(), setTimeout(function() {
						document.getElementById("onwebchatoffemail").style.setProperty("border", "1px solid  #D04848", "important")
					}, 0), f()), 1 == Se && 1 == Le && document.getElementById("onwebchatoffname").value.length < 2 && (document.getElementById("onwebchatoffname").focus(), setTimeout(function() {
						document.getElementById("onwebchatoffname").style.setProperty("border", "1px solid  #D04848", "important")
					}, 0), f()), !1;
					var e = -1;
					document.getElementById("onwc_consent_checkbox_offline") && (e = document.getElementById("onwc_consent_checkbox_offline").value);
					var t = new FormData;
					t.append('clientip', Z), t.append('clientid', zt), t.append('sid', be), t.append('name', ''), t.append('email', ''), t.append('text', ''), t.append('phone', ''), document.getElementById("onwebchatoffname") && t.append('name', document.getElementById("onwebchatoffname").value), document.getElementById("onwebchatoffemail") && t.append('email', document.getElementById("onwebchatoffemail").value), document.getElementById("onwebchatemailtext") && t.append('text', document.getElementById("onwebchatemailtext").value), document.getElementById("onwebchatofftel") && t.append('phone', document.getElementById("onwebchatofftel").value), t.append('conboxv', e), t.append('conuse', $e), t.append('conboxshow', Je);
					var n = "",
						o = "",
						a = "",
						i = "";
					return document.getElementById("onwebchatoffname") && (o = document.getElementById("onwebchatoffname").value), document.getElementById("onwebchatoffemail") && (n = document.getElementById("onwebchatoffemail").value), document.getElementById("onwebchatemailtext") && (a = document.getElementById("onwebchatemailtext").value), document.getElementById("onwebchatofftel") && (i = document.getElementById("onwebchatofftel").value), Lt.emit('visitorSendOfflineEmail', zt, Z, be, o, n, a, i, e, $e, Je, lt), document.getElementById('onwebchatform_div_id').style.display = "none", document.getElementById('onweboffline_msg_id').innerHTML = It('off_thank', G) + '<input type=button class="onweb_mail_btn" id="offlineform_ok_btn"  onclick="javascript:okButtonClicked();" style="color:#fff !important; background-image: inherit;" value="OK">', vt('onWebChat', 'Offline message sent', ''), !1
				}, document.getElementById('prechat_btn').onclick = function() {
					if (document.getElementById("onprechatname") && (O = document.getElementById("onprechatname").value), document.getElementById("onprechatemail") && (z = document.getElementById("onprechatemail").value), document.getElementById("onprechattel") && (j = document.getElementById("onprechattel").value), void 0 == O && (O = ""), void 0 == z && (z = ""), void 0 == j && (j = ""), O = O.trim(), z = z.trim(), j = j.trim(), 1 == $e && 1 == Je && 0 == document.getElementById("onwc_consent_checkbox_prechat").checked || 1 == Fe && 1 == He && !g(z) || 1 == Ue && 1 == qe && j.length < 4 || 1 == Ne && 1 == Re && O.length < 2 || 1 == Xe && 1 == De && 0 == Ve || document.getElementById('onprechattext').value.trim().length < 1) return 1 == $e && 1 == Je && 0 == document.getElementById("onwc_consent_checkbox_prechat").checked && document.getElementById("onwc_consent_l_prechat").style.setProperty("color", "#D04848"), document.getElementById('onprechattext').value.trim().length < 1 && (document.getElementById('onprechattext').focus(), document.getElementById("onprechattext").style.setProperty("border", "1px solid  #D04848", "important")), 1 == Ue && 1 == qe && j.length < 4 && (document.getElementById("onprechattel").focus(), setTimeout(function() {
						document.getElementById("onprechattel").style.setProperty("border", "1px solid  #D04848", "important")
					}, 0), f()), 1 != Fe || 1 != He || g(document.getElementById('onprechatemail').value) || (document.getElementById("onprechatemail").focus(), setTimeout(function() {
						document.getElementById("onprechatemail").style.setProperty("border", "1px solid  #D04848", "important")
					}, 0), f()), 1 == Ne && 1 == Re && O.length < 2 && (document.getElementById("onprechatname").focus(), setTimeout(function() {
						document.getElementById("onprechatname").style.setProperty("border", "1px solid  #D04848", "important")
					}, 0), f()), 1 == Xe && 1 == De && 0 == Ve && (setTimeout(function() {
						document.getElementById("departments").style.setProperty("border", "1px solid  #D04848", "important")
					}, 0), f()), !1;
					var t = document.getElementById("onprechattext").value;
					Lt.emit('setclientdetails', zt, be, O, z, j, "");
					var n = -1;
					document.getElementById("onwc_consent_checkbox_prechat") && (n = document.getElementById("onwc_consent_checkbox_prechat").value), 1 == n ? d("consentvalue", 2, 93) : 1 == $e && d("consentvalue", 1, 93), Lt.emit('setconsentsettings', zt, n, $e, Je), document.getElementById('chat_area_id').style.display = "block", document.getElementById('onwc_chat_message_div').style.display = "block", document.getElementById('chat_info_id').style.display = "block", document.getElementById('prechat_form').style.display = "none", document.getElementById('div_chat_max_title_span').textContent = It('max_title', G);
					var o = "";
					return 1 == ie && (o = " me-bubble"), printChat('<p class="me ' + o + ' me-first"><span class="spanbold">' + It('max_me', G) + '</span>	' + a(t) + '</p>', 'me'), pe = "me", setTimeout(function() {
						Lt.emit('sendchat', t, void 0, 0, Ve)
					}, 300), e(), ge = "chat", w(), !1
				}, document.getElementById('onwc_consent_checkbox_offline') && document.getElementById('onwc_consent_checkbox_offline').addEventListener('change', function() {
					1 == document.getElementById("onwc_consent_checkbox_offline").checked && document.getElementById("onwc_consent_l_offline").style.setProperty("color", "#545454")
				}), document.getElementById('onwc_consent_checkbox_prechat') && (document.getElementById('onwc_consent_checkbox_prechat').onchange = function() {
					1 == document.getElementById("onwc_consent_checkbox_prechat").checked && document.getElementById("onwc_consent_l_prechat").style.setProperty("color", "#545454")
				}), document.getElementById('onwebchatoffemail') && (document.getElementById('onwebchatoffemail').onkeyup = function() {
					g(document.getElementById('onwebchatoffemail').value) && (document.getElementById("onwebchatoffemail").style.setProperty("border", "1px solid  #ccc", "important"), f())
				}), document.getElementById('onwebchatemailtext') && (document.getElementById('onwebchatemailtext').onkeyup = function() {
					document.getElementById('onwebchatemailtext').value.length >= 1 && (document.getElementById("onwebchatemailtext").style.setProperty("border", "1px solid  #ccc", "important"), f())
				}), document.getElementById('onwebchatofftel') && (document.getElementById('onwebchatofftel').onkeyup = function() {
					checkPhone(document.getElementById('onwebchatofftel')), document.getElementById('onwebchatofftel').value.length >= 4 && (document.getElementById("onwebchatofftel").style.setProperty("border", "1px solid  #ccc", "important"), f())
				}), document.getElementById('onwebchatoffname') && (document.getElementById('onwebchatoffname').onkeyup = function() {
					document.getElementById('onwebchatoffname').value.length >= 2 && (document.getElementById("onwebchatoffname").style.setProperty("border", "1px solid  #ccc", "important"), f())
				}), document.getElementById('onprechatemail') && (document.getElementById('onprechatemail').onkeyup = function() {
					g(document.getElementById('onprechatemail').value) && (document.getElementById("onprechatemail").style.setProperty("border", "1px solid  #ccc", "important"), f())
				}), document.getElementById('onprechattext').onkeyup = function() {
					document.getElementById('onprechattext').value.length >= 1 && (document.getElementById("onprechattext").style.setProperty("border", "1px solid  #ccc", "important"), f())
				}, document.getElementById('onprechattel') && (document.getElementById('onprechattel').onkeyup = function() {
					checkPhone(document.getElementById('onprechattel')), document.getElementById('onprechattel').value.length >= 4 && (document.getElementById("onprechattel").style.setProperty("border", "1px solid  #ccc", "important"), f())
				}), document.getElementById('onprechatname') && (document.getElementById('onprechatname').onkeyup = function() {
					document.getElementById('onprechatname').value.length >= 2 && (document.getElementById("onprechatname").style.setProperty("border", "1px solid  #ccc", "important"), f())
				}), loadEmoticons = function() {
					if ("" == document.getElementById('onwebchat-emoticons-div').innerHTML) {
						document.getElementById('onwebchat-emoticons-div').insertAdjacentHTML('beforeend', "<span>😀</span> <span>😬</span> <span>😁</span> <span>😂</span> <span>😃</span> <span>😄</span><br><span>😅</span> <span>😆</span> <span>😇</span> <span>😉</span> <span>😊</span> <span>🙂</span><br><span>😋</span> <span>😌</span> <span>😍</span> <span>😘</span> <span>😗</span> <span>😙</span><br><span>😶</span> <span>😐</span> <span>😒</span> <span>😳</span> <span>😞</span> <span>😟</span><br><span>😚</span> <span>😜</span> <span>😝</span> <span>😛</span> <span>😎</span> <span>😏</span><br><span>😠</span> <span>😡</span> <span>😔</span> <span>😕</span> <span>🙁</span> <span>😣</span><br><span>😖</span> <span>😫</span> <span>😩</span> <span>😮</span> <span>😤</span> <span>😱</span><br><span>😨</span> <span>😰</span> <span>😯</span> <span>😦</span> <span>😧</span> <span>😢</span><br><span>😪</span> <span>😓</span> <span>😭</span> <span>😵</span> <span>😲</span> <span>😴</span>");
						for (var e = document.querySelector("#onwebchat-emoticons-div").querySelectorAll("span"), t = 0; t < e.length; t++) e[t].addEventListener("click", function() {
							var e = event.target.innerHTML;
							"" == e && (e = event.target.getAttribute("alt")), void 0 != e && e.length > 2 && (e = ""), document.getElementById("onwbtxtarea").value += " " + e + " ", document.getElementById("onwbtxtarea").focus(), checkText2ShowSendButton(), '1' == document.getElementById("onwebchat-emoticons-div").classList.contains('onwc-show') && p(document.getElementById('onwebchat-emoticons-div'))
						})
					}
				}, MaximizeWindowInit = function() {
					return Lt || x(), 0 == Pt && 0 == Wt && y(), Lt.emit('chatWindowMax', 1), maximizeChatWindow(), document.getElementById("onwbtxtarea").focus(), !1
				}, document.getElementById("webchat_header").addEventListener("click", function() {
					0 == W ? 1 != s('maxChat') ? (N(), MaximizeWindowInit(), vt('onWebChat', 'Chat window opened', '')) : (N(), Lt.emit('chatWindowMax', 0), minimizeChatWindow()) : W = 0
				}), document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").addEventListener("click", function() {
					return MaximizeWindowInit(), N(), vt('onWebChat', 'Chat window opened', ''), !1
				}), text = s('chattext'), text && (me = (text.match(/filesUpload/g) || []).length), null != text && '' != text && (document.getElementById("onwc_welcome_message") && (document.getElementById("onwc_welcome_message").style.setProperty("display", "none", "important"), setTimeout(function() {
					document.getElementById("onwc_welcome_message").style.setProperty("display", "none", "important")
				}, 0)), document.getElementById('chat_area_id').insertAdjacentHTML('beforeend', text), document.getElementById("chat_area_id").scrollTop = 99999999, setTimeout(function() {
					document.getElementById("chat_area_id").scrollTop = 999999999
				}, 120)), 340 > ke) {
				var q = document.getElementsByClassName('operatorImageSmallClass');
				[].forEach.call(q, function(e) {
					e.style.zoom = "0.9"
				})
			}
			$t && (document.getElementById("onwbchat_window").style.setProperty("height", "95%"), document.getElementById("onwbchat_window").style.setProperty("bottom", "2px", "important"), document.getElementById("onwbchat_window").style.setProperty("width", "99%", "important"), "left" == Pe ? setTimeout(function() {
				document.getElementById("onwbchat_window").style.setProperty("left", "0px", "important")
			}, 10) : document.getElementById("onwbchat_window").style.setProperty("right", "0px", "important"), document.getElementById('wb-send-image').style.setProperty("zoom", "1.2", "important"), document.getElementById('wb-send-image').style.setProperty("right", "13px", "important"), document.getElementById('wb-send-image').style.setProperty("top", "22px", "important"), document.getElementById('wb-smile-image').style.setProperty("display", "none", "important"), checkMobileChatHeight(), document.getElementById('onweb_minimize_btn_icon_id').style.zoom = "1.2", document.getElementById("onweb_chatimage_div").style.setProperty("right", "0"), document.getElementById("onweb_chatimage_div").style.setProperty("left", "initial"))
		}
	}

	function E(e) {
		var t;
		return null == e ? null : (t = e.indexOf("://") > -1 ? e.split('/')[2] : e.split('/')[0], t = t.split(':')[0])
	}

	function x() {
		function t() {
			var t = document.getElementById('onwbtxtarea').value;
			if (document.getElementById('onwbtxtarea').value = "", "" != t.trim()) {
				var n = "";
				1 == ie && (n = " me-bubble"), "me" != pe && (n += " me-first "), N = t, D(t, "visitor"), t = t.replace(/\n/g, "{{newline}}");
				var o = "";
				1 == isRTLlanguage(t.substr(0, 1)) && (o = ' style="direction: rtl;text-align:right;" '), printChat('<p ' + o + ' class="me ' + n + '"><span class="spanbold">' + It('max_me', G) + '</span>	' + a(t) + '</p>', "me"), pe = "me", e(), s('mustSendTriggerText') && 1 == T ? (Lt.emit('sendchat', t, s('triggerText')), r('mustSendTriggerText', !1), T = !1, m('triggerText')) : Lt.emit('sendchat', t)
			}
			x = 0
		}

		function p() {
			var e = document.getElementById('onwbtxtarea').value;
			"" != e.trim() && Lt.emit('sendchat', e, void 0, 1)
		}

		function g() {
			isRTLlanguage(It('max_placeholder', G).trim().substring(0, 2)) ? h("rtl", "right") : h("", "left")
		}

		function h(e, t) {
			document.getElementById('onwbtxtarea').style.setProperty("direction", e, "important"), document.getElementById('onwbtxtarea').style.setProperty("text-align", t, "important")
		}

		function w() {
			window.removeEventListener('mousemove', _, !0)
		}

		function f(e) {
			var t;
			e.target ? t = e.target : e.srcElement && (t = e.srcElement), "onweb_minimize_btn_icon_id" != t.id && 1 == s('maxChat') && (H = 1, window.addEventListener('mousemove', _, !0), document.getElementById("webchat_header").style.setProperty('cursor', 'move'))
		}

		function _(e) {
			var t = window.innerHeight,
				n = Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth),
				o = parseInt(document.getElementById("onwbchat_window").style.getPropertyValue('height')),
				a = parseInt(document.getElementById("onwbchat_window").offsetWidth),
				i = e.clientX,
				d = e.clientY;
			if (1 == H) {
				var l = document.body.scrollTop,
					c = document.body.scrollLeft;
				divTop = document.getElementById('onwbchat_window').offsetTop - l, divLeft = document.getElementById('onwbchat_window').offsetLeft - c, R = i - divLeft, F = d - divTop
			}
			H = 0, W = 1;
			var s = document.getElementById('onwbchat_window');
			s.style.position = 'absolute', C = d - F, 0 > d - F && (C = 0), d - F > t - o && (C = t - o), s.style.top = C + 'px', B = i - R, 0 > i - R && (B = 0), i - R > n - a && (B = n - a), s.style.left = B + 'px'
		}
		var I = {
			query: {
				server: Ct
			},
			reconnectionAttempts: 40
		};
		Lt = k ? io.connect('http://' + serverIP + Bt, I) : io.connect('https://' + serverIP + Bt, I), Lt.on('disconnect', function() {
			Pt = !1
		}), Lt.on('error', function(e) {}), Lt.on('connect_error', function(e) {}), Lt.on('connect_timeout', function() {}), Lt.on('reconnect', function() {}), Lt.on('reconnecting', function(e) {}), 8 != u() && (St = setTimeout(function() {
			Lt.io.disconnect(), minimizeChatWindow()
		}, Mt)), Lt.on('connect', function() {
			ae++, ae > 10 && (Lt.io.disconnect(), Lt.disconnect(), Lt = null), Pt = !0, Wt = !1, sessionrandom = c('onwbchtsessionrandom'), ('null' == sessionrandom || null == sessionrandom || '' == sessionrandom || 'undefined' == sessionrandom) && (sessionrandom = Math.floor(1e6 * Math.random() + 1), d("onwbchtsessionrandom", Math.floor(1e6 * Math.random() + 1), 365));
			var e = document.referrer,
				t = 0;
			if (!Tt && (null == s('chattext') || '' == s('chattext'))) var t = Math.floor(11e3 * Math.random()) + 1e4;
			setTimeout(function() {
				Lt.emit('userconnect', zt, O, z, j, A, dt, lt, screen.width, sessionrandom, Dt, Vt, Jt, be, Z, e, c('onwbchtlastvisit'), Xt, $t, Ht, Tt, Ee, $e, Je)
			}, t), Tt = !1
		}), Lt.on('onwcemailtranscript_ok', function() {
			toggleModal('onwcEmailOkModal')
		}), Lt.on('addvisited1', function(e) {
			Jt++, d("onwbchttimesVisited", Jt, 93), d("onwbchtlastvisit", e, 93)
		}), Lt.on('setCookie', function(e, t) {
			if ("onwbchtclientid" == e) {
				if ('' != c('onwbchtclientid') && null != c('onwbchtclientid') && c('onwbchtclientid') != t) {
					deleteAllCookies(), r('chattext', '');
					var n = document.querySelectorAll('#chat_area_id p');
					n.forEach(function(e) {
						e.remove()
					}), document.getElementById('onwc_welcome_message').style.display = "block"
				}
				zt = t
			}
			d(e, t, 365)
		}), Lt.on('chatWindowMax', function(e) {
			1 == e ? maximizeChatWindow() : 0 == e && minimizeChatWindow()
		}), Lt.on('updateagents', function(e) {
			q(e)
		}), Lt.on('send_dialogid', function(e) {
			ce = e
		}), Lt.on('newChatEvent', function(e) {
			vt('onWebChat', 'Chat started', 'by ' + e)
		}), Lt.on('askforrating', function(e) {
			ce = e, toggleModal("onwcRatingChatModal", !0)
		}), Lt.on('updateclientdetails', function(e, t, n, o) {
			'' != e && isNaN(e) && (O = e), '' != t && (z = t), '' != n && (j = n), '' != o && (A = o)
		}), Lt.on('senddepartments', function(e) {
			if (document.getElementById("onwcdepartmenu").style.setProperty("display", "block", "important"), e = JSON.parse(e), onwcdepartmenu = document.getElementById("onwcdepartmenu"), onwcdepartmenu.innerHTML = "", 0 == onwcdepartmenu.childElementCount)
				for (var t = 0; t < e.length; t++) {
					var n = document.createElement("LI"),
						o = document.createElement("span"),
						a = document.createTextNode(e[t].name);
					o.appendChild(a), n.appendChild(o);
					var i = document.createElement("span");
					i.appendChild(document.createTextNode(e[t].id)), i.style.setProperty("display", "none", "important"), n.appendChild(i), onwcdepartmenu.appendChild(n), n.onclick = function() {
						onwcmenuliclick(this)
					}
				}
			isRTLlanguage(It('departments', G).trim().substring(0, 2)) ? (document.getElementById("onwcdepartmenu").style.setProperty("direction", "rtl", "important"), document.getElementById("onwcdepartmenu").style.setProperty("text-align", "right", "important")) : (document.getElementById("onwcdepartmenu").style.setProperty("direction", "", "important"), document.getElementById("onwcdepartmenu").style.setProperty("text-align", "left", "important"))
		}), Lt.on('setAgentImage', function(e) {
			void 0 != e && '' != e && (Q = e, document.getElementById("operatorImage").src = xt + '//' + serverIP + '/filesUpload/operatorImages/' + e)
		}), Lt.on('setAgentOnlineHideOffline', function(e, t, a, i) {
			if (1 != ne) {
				void 0 == a && (a = 0), he = a;
				try {} catch (d) {
					console.log(d)
				}
				if (1 == e && void 0 != i && '' != i && (Q = i, document.getElementById("operatorImage").src = xt + '//' + serverIP + '/filesUpload/operatorImages/' + i), void 0 != e && null != e) {
					if (Ee != e && ($t ? 1 == e ? image_name = At : image_name = Nt : 1 == e ? image_name = Rt : image_name = Ft, 1 == e ? (document.getElementById("div_chat_min_title_span").textContent = It('min_online', G), document.getElementById("onweb-offline-icon").style.setProperty("display", "none"), document.getElementById("onweb-online-icon").style.setProperty("display", "inline-block"), "" != X && document.getElementById("webchat_header").style.setProperty('background-color', X, 'important'), document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").setAttribute('src', xt + '//' + serverIP + '/chatWidgetImages/' + image_name)) : setTimeout(function() {
							document.getElementById("div_chat_min_title_span").textContent = It('min_offline', G), document.getElementById("onweb-offline-icon").style.display = "inline-block", document.getElementById("onweb-online-icon").style.display = "none", "" != $ && document.getElementById("webchat_header").style.setProperty('background-color', $, 'important'), "" != $ && document.getElementById("offlineform_btn").style.setProperty('background-color', $, 'important'), document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").setAttribute('src', xt + '//' + serverIP + '/chatWidgetImages/' + image_name)
						}, 300)), Ee = e, xe = t, (1 == Ee || 1 != xe || s('chattext').length > 0) && 0 == Ht ? 0 != te && showChatWindow() : hideChatWindow(), s('chattext').endsWith(It('max_gone', G) + "</span></i></p>") && 1 == Ee && 0 != he) {
						var l = document.getElementById('chat_area_id').lastChild;
						document.getElementById('chat_area_id').removeChild(l), r('chattext', s('chattext').substring(0, s('chattext').lastIndexOf('<p class="server_messages"><i><span class="spanbold">' + It('max_gone', G) + '</span></i></p>'))), o()
					}
					if (1 == Ee && 0 != he && o(), 1 != Ee && 0 == he && s('chattext').length > 0 && !s('chattext').endsWith(It('max_gone', G) + "</span></i></p>")) {
						var c = 1e3;
						1 == P && (c = 3e3), setTimeout(function() {
							1 == Ee || 0 != he || s('chattext').endsWith(It('max_gone', G) + "</span></i></p>") || printChat('<p class="server_messages"><i><span class="spanbold">' + It('max_gone', G) + '</span></i></p>'), n()
						}, c)
					}
				}
			}
		}), Lt.on('setIsBlocked', function(e) {
			void 0 == e && (e = 0), Ht = e, d("onwbchtblocked", e, 183), 1 == Ht ? hideChatWindow() : 0 == Ht && (1 == Ee || 1 != xe) && 0 != te && showChatWindow()
		}), Lt.on('visitordeleted', function() {
			r('chattext', '');
			var e = document.querySelectorAll('#chat_area_id p');
			e.forEach(function(e) {
				e.remove()
			}), b(document.getElementById("onwbchat_window")), deleteAllCookies(), Lt.disconnect()
		}), deleteAllCookies = function() {
			l("onwbchtclientid"), l("inChatC"), l("onwbchtSound"), l("onwbchtblocked"), l("onwbchtexpress.sid"), l("onwbchtlastvisit"), l("onwbchtsessionrandom"), l("onwbchttimesVisited")
		}, Lt.on('servercommand', function(e, t, n, o, a, i) {
			(null == n || "" == n) && (n = "operator"), 'close_dialog' == e ? (1 == c('inChatC') && "" != It('max_closed', G) && printChat('<p class="server_messages"><i><span class="spanbold">' + It('max_closed', G).replace('{{operator}}', n) + '</span></i></p>'), 1 == le && 1 == c('inChatC') && 0 == se && toggleModal("onwcRatingChatModal", !0), d('inChatC', 0, .166), r("servingOpImage", ""), Q = "", 1 == ee && (Q = "0_support_man.png"), r('hasTriggeredNoReply', 0), d('hasTriggeredNoReplyC', 0, .166), disableMenuItem('onwebchat-endchat-li'), Y = !1, se = 0, r('isRated', 0), ce = i) : 'serve_dialog' == e ? (P = "androidapp" == o ? 1 : 0, pe = "served_by", "" != It('max_served', G) && (s('hasWrSeByTr') || printChat('<p class="server_messages"><i><span class="spanbold">' + It('max_served', G).replace('{{operator}}', n) + '</span></i></p>')), void 0 != a && '' != a && (Q = a, r("servingOpImage", a), document.getElementById("operatorImage") && document.getElementById("operatorImage").setAttribute('src', xt + '//' + serverIP + '/filesUpload/operatorImages/' + a))) : 'no_agent' == e && printChat('<p class="server_messages"><i><span class="spanbold">No agent is online now, but we will reply to you asap.</span></i></p>')
		}), Lt.on('updatechat', function(e, t, n, l) {
			if ((null == l || "" == l) && (l = "operator"), 'command:typing...' == n) document.getElementById('agenttypingimage') && document.getElementById('agenttypingimage').remove(), document.getElementById('chat_area_id').insertAdjacentHTML("beforeend", "<img onload='document.getElementById(\"chat_area_id\").scrollTop = 9999999;' id='agenttypingimage' src='" + xt + "//" + serverIP + "/chatimages/typing.gif'>");
			else if ('command:notyping...' == n) try {
					null != document.getElementById('agenttypingimage') && (document.getElementById('agenttypingimage').style.visibility = 'hidden')
				} catch (c) {} else if (0 == te);
				else {
					i(), clearTimeout(M), o(), document.getElementById('agenttypingimage') && document.getElementById('agenttypingimage').remove();
					var r = "",
						m = '',
						p = "";
					1 == ie && (r = " agent-bubble "), 'agent' != pe && (r += " agent-first ", 1 == ee && (m = '<img id="operatorImageSmall" class="operatorImageSmallClass" src="' + xt + '//' + serverIP + '/filesUpload/operatorImages/' + Q + '" onerror="this.style.visibility=\'hidden\'"></img>')), 1 == ee && (p = " big-margin-left "), D(n, "operator"), d('inChatC', 1, .166);
					var u = "";
					1 == isRTLlanguage(n.substr(0, 1)) && (u = ' style="direction: rtl;text-align:right;" '), printChat('<p ' + u + ' class="agent ' + r + p + '">' + m + '<span class="spanbold">' + It('max_agent', G).replace('{{operator}}', l) + '</span> ' + a(n) + '</p>'), pe = "agent", "" != e && 1 != s('maxChat') && MaximizeWindowInit(), 1 != Ee && (null != s('chattext') && '' != s('chattext'), showChatWindow()), 'block' == document.getElementById('prechat_form').style.display && showChatWindow()
				}
		}), printChat = function(e, t) {
			void 0 == t && (t = ""), document.getElementById("onwc_welcome_message") && (document.getElementById('onwc_welcome_message').style.display = "none"),
				document.getElementById("triangle_down") && document.getElementById("triangle_down").style.setProperty("display", "none");
			var n = /(\b(https?|ftp|file):\/\/(?![-A-Z0-9+\/:.]*filesUpload\/operatorImages)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
				o = n.exec(e);
			if (null != o) {
				o = o[0];
				var a = E(o);
				e = a == E(window.location.href) ? e.replace(n, "<a href='$1'>$1</a>") : e.replace(n, "<a target='_blank' rel='noopener noreferrer' href='$1'>$1</a>")
			}
			var n = /(^|[^\/])(www\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
				i = n.exec(e);
			if (null != i) {
				i = i[0];
				var a = E(i);
				e = a == E(window.location.href) ? e.replace(n, "$1<a href='http://$2'>$2</a>") : e.replace(n, "$1<a target='_blank' rel='noopener noreferrer' href='http://$2'>$2</a>")
			}
			for (var d = !1; e.indexOf("{{fileuploaded:") > -1;) {
				var l = (e.indexOf("{{fileuploaded:") + 1, e.indexOf("{{fileuploaded:") + 15),
					c = e.indexOf("}}", l),
					m = e.substring(l, c),
					p = m.replace(/^.*[\\\/]/, ''),
					g = "";
				p.toLowerCase().endsWith(".png") || p.toLowerCase().endsWith(".jpg") || p.toLowerCase().endsWith(".jpeg") || p.toLowerCase().endsWith(".svg") || p.toLowerCase().endsWith(".gif") ? (d = !0, me++, g = '<a target="_blank" rel="noopener noreferrer" href="' + xt + '//' + serverIP + '/filesUpload/' + m + '"><img id="' + me + '" onload="removeLoadingImage(\'' + me + '\')" class="onweb_uploadfile onweb_uploadimage" style="max-width:150px;max-height:70px" src="' + xt + '//' + serverIP + '/filesUpload/' + m + '" /></a>') : g = '<a target="_blank" rel="noopener noreferrer" href="' + xt + '//' + serverIP + '/filesUpload/' + m + '"><img class="onweb_uploadfile" src="' + xt + '//' + serverIP + '/chatimages/download-icon.png" />' + p + '</a>', e = e.replace("{{fileuploaded:" + m + "}}", g)
			}
			var h = "😀😬😁😂😃😄😅😆😇😉😊🙂🙃😋😌😍😘😗😙😚😜😝😛🤑🤓😎🤗😏😶😐😒🙄🤔😳😞😟😠😡😔😕🙁😣😖😫😩😤😱😨😰😯😦😧😢😪😓😭😵😲🤐😷🤒🤕😴😮";
			const y = h[Symbol.iterator]();
			for (var w;;) {
				var b = y.next();
				if (b.done) break;
				w = b.value, e = e.replace(new RegExp(w, "g"), '<i>' + w + '</i>')
			}
			e = e.replace('[loading...]', '<img class="onweb_uploadfile" id="loadingImg" src="' + xt + '//' + serverIP + '/chatimages/loading.gif" />'), e = e.replace(/{{newline}}/g, '<br>');
			var f = new Date,
				_ = f.getHours(),
				I = f.getMinutes();
			if (10 > I && (I = "0" + I), -1 == e.indexOf("server_messages") && (e = "<div class='onwcouter'><div class='onwcinner'><div class='onwcminner'> " + e + "<div class='onwctime " + t + "'><span>" + _ + ":" + I + " </span></div></div></div></div>"), null != document.getElementById('agenttypingimage') ? document.getElementById('agenttypingimage').insertAdjacentHTML("beforebegin", e) : document.getElementById('chat_area_id').insertAdjacentHTML("beforeend", e), v(document.getElementById("chat_area_id"), 20, 4), s('chattext') ? r('chattext', s('chattext') + e) : r('chattext', e), 8 != u() && (clearTimeout(St), St = setTimeout(function() {
					Lt.io.disconnect(), minimizeChatWindow()
				}, Mt)), enableMenuItem("onwebchat-print-li"), enableMenuItem("onwebchat-savetofile-li"), 6 > it && enableMenuItem("onwebchat-email-li"), enableMenuItem('onwebchat-endchat-li'), Y = !0, 340 > ke) {
				var x = document.getElementsByClassName('operatorImageSmallClass');
				[].forEach.call(x, function(e) {
					e.style.zoom = "0.9"
				})
			}
			checkMobileChatHeight()
		}, removeLoadingImage = function(e) {
			document.getElementById(e) && (document.getElementById(e).style.background = "none"), v(document.getElementById('chat_area_id'), 10, 10)
		};
		var x = 0,
			S = 0,
			L = 0,
			N = "";
		document.getElementById("onwc_chat_message_div").addEventListener("paste", function(e) {
			0 == Pt && 0 == Wt && y()
		}), document.getElementById("onwc_chat_message_div").addEventListener("keydown", function(e) {
			"Enter" != e.key || e.shiftKey ? (1 != J && 1 != s('hasStartedWriting') && (U(), r('hasStartedWriting', 1)), J = 1, 0 == Pt && 0 == Wt && y(), 0 == x && (Lt.emit('sendchat', 'command:typing...'), x = 1), 'free' != _e && 0 == L && (L = setTimeout(function() {
				p(), L = 0
			}, 500)), clearTimeout(S), S = setTimeout(function() {
				x = 0, clearTimeout(L), Lt.emit('sendchat', 'command:notyping...')
			}, 1800)) : (e.preventDefault(), t(), clearTimeout(L), L = 0)
		}), document.getElementById("wb-send-image").addEventListener("click", function(e) {
			t(), document.getElementById("onwbtxtarea").focus(), checkText2ShowSendButton()
		}), isRTLlanguage = function(e) {
			var t = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\uFB50-\uFC3F\uFE70-\uFEFC]/;
			return result = t.test(e), result
		}, g(), document.getElementById("onwc_chat_message_div").addEventListener("keyup", function(e) {
			'ArrowUp' == e.key && '' == document.getElementById('onwbtxtarea').value && (document.getElementById('onwbtxtarea').value = N), "" != document.getElementById('onwbtxtarea').value.trim().substring(0, 2) ? isRTLlanguage(document.getElementById('onwbtxtarea').value.trim().substring(0, 2)) ? h("rtl", "right") : h("", "left") : "" == document.getElementById('onwbtxtarea').value && g(), 1 == $e && 1 != c('consentvalue') && 2 != c('consentvalue') && toggleModal("onwcConsentModal", !0), checkText2ShowSendButton()
		}), checkText2ShowSendButton = function() {
			"" == document.getElementById('onwbtxtarea').value ? document.getElementById("wb-send-image").style.visibility = "hidden" : document.getElementById("wb-send-image").style.visibility = "visible"
		}, checkText2ShowSendButton(), document.getElementById('onwebchatemailtext').addEventListener("keyup", function(e) {
			isRTLlanguage(document.getElementById('onwebchatemailtext').value.substring(0, 2)) ? (document.getElementById("onwebchatemailtext").style.setProperty("direction", "rtl", "important"), document.getElementById("onwebchatemailtext").style.setProperty("text-align", "right", "important")) : (document.getElementById("onwebchatemailtext").style.setProperty("direction", "", "important"), document.getElementById("onwebchatemailtext").style.setProperty("text-align", "left", "important"))
		}), document.getElementById('onprechattext').addEventListener("keyup", function(e) {
			isRTLlanguage(document.getElementById("onprechattext").value.substring(0, 2)) ? (document.getElementById("onprechattext").style.setProperty("direction", "rtl", "important"), document.getElementById("onprechattext").style.setProperty("text-align", "right", "important")) : (document.getElementById("onprechattext").style.setProperty("direction", "", "important"), document.getElementById("onprechattext").style.setProperty("text-align", "left", "important"))
		});
		var R, F, H = 0;
		parseInt(document.getElementById("onwbchat_window").style.getPropertyValue('width'));
		try {
			document.getElementById('webchat_header').addEventListener('mousedown', f, !1), document.getElementById('onweb_minimize_btn_icon_id').removeEventListener('mousedown', f), window.addEventListener('mouseup', w, !1)
		} catch (K) {}
		setTimeout(function() {
			V()
		}, 500)
	}
	window.console || (console = {
		log: function() {}
	});
	var B, C, k = !1,
		P = 0,
		W = 0,
		T = !1,
		M = 0,
		S = 1,
		L = {
			min_offline: {
				l1: 'Offline',
				l2: 'Online'
			},
			min_online: {
				l1: 'Online',
				l2: 'Online'
			},
			max_title: {
				l1: 'Chat with us',
				l2: 'Chat with us'
			},
			max_msg: {
				l1: 'We are online. Ready to answer your questions.',
				l2: 'We are online. Ready to answer your questions.'
			},
			max_served: {
				l1: 'You are served by {{operator}}',
				l2: 'You are served by {{operator}}'
			},
			max_me: {
				l1: 'Me:',
				l2: 'Me:'
			},
			max_agent: {
				l1: '{{operator}}:',
				l2: '{{operator}}:'
			},
			max_placeholder: {
				l1: 'Write your message here...',
				l2: 'Write your message here...'
			},
			max_closed: {
				l1: '{{operator}} closed chat',
				l2: '{{operator}} closed chat'
			},
			max_typing: {
				l1: '{{operator}} is typing..',
				l2: '{{operator}} is typing..'
			},
			off_title: {
				l1: 'Email us!',
				l2: 'Email us!'
			},
			off_msg: {
				l1: 'Sorry, we are not online at the moment. Leave a message and we will get back to you.',
				l2: 'Sorry, we are not online at the moment. Leave a message and we will get back to you.'
			},
			off_name: {
				l1: 'Name',
				l2: 'Name'
			},
			off_email: {
				l1: 'Email',
				l2: 'Email'
			},
			off_phone: {
				l1: 'Phone',
				l2: 'Phone'
			},
			off_text: {
				l1: 'Message',
				l2: 'Message'
			},
			prechat_name: {
				l1: 'Name',
				l2: 'Name'
			},
			prechat_email: {
				l1: 'Email',
				l2: 'Email'
			},
			prechat_phone: {
				l1: 'Phone',
				l2: 'Phone'
			},
			prechat_text: {
				l1: 'how can we help you?',
				l2: 'how can we help you?'
			},
			off_send: {
				l1: 'Send',
				l2: 'Send'
			},
			off_thank: {
				l1: 'Thank you for contacting us. We will reply to you as soon as possible.',
				l2: 'Thank you for contacting us. We will reply to you as soon as possible.'
			},
			prechat_msg: {
				l1: 'Please give us some info to serve you better.',
				l2: 'Please give us some info to serve you better.'
			},
			prechat_btn: {
				l1: 'Start chat!',
				l2: 'Start chat!'
			},
			max_gone: {
				l1: 'No operators on the network',
				l2: 'No operators on the network'
			},
			consent_text: {
				l1: 'I agree that my personal data, provided via chat, to be processed for using live chat service',
				l2: 'I agree that my personal data, provided via chat, to be processed for using live chat service'
			},
			menu_send_file: {
				l1: 'Send file',
				l2: 'Send file'
			},
			menu_email: {
				l1: 'Email transcript',
				l2: 'Email transcript'
			},
			menu_print: {
				l1: 'Print',
				l2: 'Print'
			},
			menu_save: {
				l1: 'Save',
				l2: 'Save'
			},
			menu_sound: {
				l1: 'Sound',
				l2: 'Sound'
			},
			menu_end_chat: {
				l1: 'End chat',
				l2: 'End chat'
			},
			end_chat_msg: {
				l1: 'Are you sure you want to close this chat?',
				l2: 'Are you sure you want to close this chat?'
			},
			cancel: {
				l1: 'Cancel',
				l2: 'Cancel'
			},
			rating_msg: {
				l1: 'Thank you. We would appreciate it if you could rate this chat',
				l2: 'Thank you. We would appreciate it if you could rate this chat'
			},
			rating_btn: {
				l1: 'Submit',
				l2: 'Submit'
			},
			rating_no_msg: {
				l1: 'No, thanks',
				l2: 'No, thanks'
			},
			departments: {
				l1: 'Please select a department',
				l2: 'Please select a department'
			}
		},
		O = "",
		z = "",
		j = "",
		A = "",
		N = function() {},
		R = function() {},
		F = function() {},
		H = function() {},
		U = function() {},
		q = function() {},
		D = function() {},
		V = function() {},
		X = "",
		$ = "",
		J = 0,
		Y = !1,
		Z = "46.246.106.41",
		G = "l2",
		K = "",
		Q = "";
	"" != s("servingOpImage") && void 0 != s("servingOpImage") && (Q = s("servingOpImage"));
	var ee = "1";
	1 == ee && "" == Q && (Q = "0_support_man.png");
	var te = -1,
		ne = 0,
		oe = -1,
		ae = 0,
		ie = "1",
		de = "1",
		le = "0",
		ce = 0,
		se = 0,
		re = "0";
	"" != s("isRated") && void 0 != s("isRated") && (se = s("isRated")), 1 == S && (ie = 1), 1 == re && 0 == de && (re = 0);
	var me = 0,
		pe = "";
	1 == re && r('hideImage', 0);
	var ue = !0,
		ge = "";
	0 != s('hideImage') && 1 != s('hideImage') && r('hideImage', 0);
	var he, ye = "0",
		we = "1",
		be = 46432,
		fe = ".onwebchatbox div{padding:initial}.onwebchatbox #offline_form{display:none;position:initial;line-height:inherit}.onwebchatbox #prechat_form{display:none;position:initial}.onwebchatbox a{margin-bottom:0 !important;border-width:0 !important;border-style:none !important;display:inline;color:#393939;letter-spacing:initial;text-decoration:underline}.onwebchatbox a:hover{text-shadow:0 0 1px #b1b1b1}.onwebchatbox .onweb_uploadfile{margin-right:10px;margin-bottom:-3px}.onwebchatbox .onweb_uploadimage{background:url('https://www.onwebchat.com/chatimages/loading.gif');background-repeat:no-repeat;background-position:center}#onweb_chatimage_div{position:fixed;bottom:0;right:40px;width:#chat_widthpx;z-index:2147483600}#operatorImageSmall{width:32px !important;height:32px !important;position:absolute !important;border-radius:20px !important;left:-37px !important;top:0 !important;box-shadow:0 0 7px 2px #bebebe !important;cursor:initial !important}@media(max-width:480px){#operatorImageSmall{zoom:1.14 !important}}.operatorImageSmallClass{zoom:1}#operatorImage{position:absolute;z-index:100 !important;border-radius:30px;border-style:solid;border-color:#ababab;top:8px !important;left:20px !important;width:50px !important;height:50px !important;border-width:0 !important;user-drag:none !important;-webkit-user-drag:none !important}.onweb_chatimage{position:absolute !important;bottom:45px !important;left:114px !important;cursor:pointer !important;border:none !important;opacity:1 !important;width:99px !important;max-height:initial !important;max-width:initial !important;min-width:initial !important;min-height:initial !important;-webkit-filter:brightness(100%);-webkit-transition:all .7s ease;-moz-transition:all .7s ease;-o-transition:all .7s ease;-ms-transition:all .7s ease;transition:all .7s ease}.onweb_chatimage_mobile{position:absolute !important;bottom:25px !important;right:20px !important;cursor:pointer !important;border:none !important;opacity:1 !important;width:70px !important;max-height:initial !important;max-width:initial !important;min-width:initial !important;min-height:initial !important}img#onweb_chatimage:hover{opacity:1;-webkit-filter:brightness(112%);-webkit-transition:all .7s ease;-moz-transition:all .7s ease;-o-transition:all .7s ease;-ms-transition:all .7s ease;transition:all .7s ease}.onwebchatbox .onweb_chatimage:-moz-loading{visibility:hidden}.onwebchatbox .onweb_chatimage_x{position:absolute;visibility:hidden;z-index:2147483600;display:inline;cursor:pointer;border:0;opacity:.5}#agenttypingimage{position:relative !important;float:left !important;padding-left:18px !important;height:initial !important;clear:both !important}.onwebchatbox .wblogoimg{margin-right:10px;margin-top:7px}.onwebchatbox .wblogoimgdiv{text-align:right;width:100%}.onwebchatbox img{vertical-align:baseline;border:0;cursor:pointer;width:initial !important;margin:0;clear:initial;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.onwebchatbox .onwcimg{vertical-align:baseline;border:0;cursor:pointer;margin:0;clear:initial;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.onwebchatbox{all:initial;*{all:unset}color:#555;box-shadow:0 0 5px 0 #777 !important;line-height:16px !important;display:none;text-align:left;position:fixed !important;bottom:0 !important;right:40px;width:#chat_widthpx !important;height:#onwebchatbox_header1_heightpx;font-family:Arial,Helvetica,sans-serif !important;background-color:#fcfcfc;font-size:12px !important;border-top-left-radius:6px !important;border-top-right-radius:6px !important;z-index:2147483610 !important;box-sizing:content-box !important;color:#545454 !important;backgroundtransition:initial !important}#onwbchat_window{background-image:url(https://www.onwebchat.com/chatimages/backgrounds/back4.png);border-radius:11px !important;border-top-left-radius:13px !important;border-top-right-radius:13px !important;box-shadow:rgba(0,0,0,0.43) 0 0 1.2em !important}.onwebchatbox .webchat_header{display:block !important;white-space:nowrap !important;background-color:#567ea6 !important;height:#onwebchatbox_header_height_+_4px !important;min-height:36px !important;line-height:#onwebchatbox_header1_heightpx !important;cursor:pointer;box-sizing:content-box !important;margin:0 !important;padding:0 !important;border:0 !important;outline:0 !important;float:left !important;padding-left:12px !important;padding-right:28px !important;vertical-align:baseline !important;font-size:13px !important;font-weight:bold !important;width:#chatheader_widthpx !important;position:relative;border-top-left-radius:11px !important;border-top-right-radius:11px !important;background-image:url(https://www.onwebchat.com/chatimages/backgrounds/trans-back4.png)}.onwebchatbox .webchat_header:hover{opacity:1}.onwebchatbox .webchat_header a{float:right;text-decoration:none;color:#fff;display:block;margin-right:0;padding-left:0;padding-right:0;line-height:13px}}.onwebchatbox .webchat_header a:hover{color:#000}.onwebchatbox .chat_area{float:left;clear:left;width:#chat_widthpx;height:#chat_area_heightpx;margin-top:0;margin-bottom:0;padding:16px 0 0 0;overflow:auto;color:#a4a4a4;box-sizing:content-box;direction:ltr !important;box-shadow:inset 0 11px 17px -17px rgba(0,0,0,0.4) !important}.onwebchatbox #chat_area_id{box-sizing:initial !important}#chat_area_id::-webkit-scrollbar{width:8px;height:8px;border:3px solid #eee}#chat_area_id::-webkit-scrollbar-button:start:decrement,::-webkit-scrollbar-button:end:increment{display:block;height:10px;background:#eee}#chat_area_id::-webkit-scrollbar-track{background:#eee;-webkit-border-radius:10px;border-radius:10px;-webkit-box-shadow:inset 0 0 4px rgba(0,0,0,.2)}#chat_area_id::-webkit-scrollbar-thumb{height:50px;width:50px;background:#b2b2b2;-webkit-border-radius:8px;border-radius:8px;-webkit-box-shadow:inset 0 0 4px rgba(0,0,0,.1)}#chat_area_id::-webkit-scrollbar-thumb:hover{background:#a2a2a2}#onwbtxtarea::-webkit-scrollbar{width:0}.onwebchatbox .chat_area .me a{color:#visitor_css_text_color !important;text-decoration:underline !important;letter-spacing:normal !important;line-height:normal !important}.onwebchatbox .chat_area .agent a{color:#agent_css_text_color !important;text-decoration:underline !important;letter-spacing:normal !important;line-height:normal !important}.onwebchatbox .chat_info{clear:left;height:10px;background-color:#fcfcfc;border-top:1px solid #ddd;box-sizing:border-box;border-top:1px solid ##e2e2e2 !important;width:90% !important;float:none !important;margin:auto !important}.onwebchatbox .chat_message{position:initial;width:100%;height:55px;float:left;clear:left;padding-top:0;background-color:#fcfcfc;box-sizing:content-box}#onwc_chat_message_div{position:absolute;bottom:0;height:68px !important;border-bottom-left-radius:11px !important;border-bottom-right-radius:11px !important}.onwebchatbox #onwbtxtarea{float:none !important;padding:4px 25px 0 4px !important;font-weight:400 !important;text-align:initial !important;font-style:initial !important;box-sizing:initial !important;white-space:initial !important;position:absolute !important;left:9px !important;bottom:25px !important}.onwebchatbox input::-webkit-input-placeholder,.onwebchatbox textarea::-webkit-input-placeholder{color:#717171 !important;font-size:14px !important;font-style:italic !important;font-weight:400 !important;line-height:inherit !important;font-family:inherit !important;padding:0 2px 0 2pxa}.onwebchatbox input::-moz-placeholder,.onwebchatbox textarea::-moz-placeholder{color:#515151 !important;font-size:14px !important;font-style:italic !important;font-weight:400 !important;font-family:inherit !important;line-height:inherit !important}.onwebchatbox input:-ms-input-placeholder,.onwebchatbox textarea:-ms-input-placeholder{color:#717171 !important;font-size:14px !important;font-style:italic !important;font-weight:400 !important;font-family:inherit !important;line-height:inherit !important}.onwebchatbox .chat_message .onwebtextarea{width:#textarea_widthpx !important;line-height:normal !important;min-height:initial !important;min-width:initial !important;max-height:initial !important;max-width:initial !important;font-family:Arial,Helvetica,sans-serif !important;text-transform:initial !important;letter-spacing:initial !important;color:#545454 !important;display:block;margin-left:auto !important;margin-right:auto !important;margin-bottom:initial !important;padding:2px 2px 2px 2px !important;background-image:none !important;resize:none;outline:none !important;border-radius:5px !important;box-sizing:content-box;transition:box-shadow .40s,border-color .40s ease-in-out;border:none !important;box-shadow:none !important;font-size:14px !important;height:27px !important;background-color:transparent !important}@media(max-width:480px){.onwebchatbox .chat_message .onwebtextarea{font-size:120% !important}}.onwebchatbox .chat_message textarea:hover{border:none !important}.onwebchatbox .chat_message textarea:focus{border:none !important}.onwebchatbox #onweb-offline-icon{margin:initial !important;border:none !important;box-sizing:content-box !important;padding-top:1px !important}.onwebchatbox #onweb-online-icon{margin:initial !important;border:none !important;box-sizing:content-box !important}.onwebchatbox #onweb_chaticon{display:inline !important;position:absolute !important;right:0 !important;float:right !important;line-height:24px !important;margin-right:16px !important;margin-top:11px !important}.onwebchatbox .con:hover{opacity:.75}.onwebchatbox .onweb_minimize_btn_icon{border:solid;border-width:0 3px 3px 0;position:absolute;top:#onweb_min_btn_marginpx;!important;padding:4px;transform:rotate(45deg);-webkit-transform:rotate(45deg);margin-right:15px;color:#ddd;cursor:pointer;right:6px !important;zoom:01.0}.onwebchatbox .onweb_minimize_btn_icon:hover{margin-top:1px}.onwebchatbox .onweb_menu_minimize_btn{border:solid;border-width:0 2px 2px 0;padding:3px;border-color:#929292;position:relative;top:-35px;float:right;transform:rotate(45deg);-webkit-transform:rotate(45deg);margin-right:15px;color:#ddd;cursor:default;right:6px !important;zoom:01.0}.onwebchatbox div.maximize_onwebchatbox{display:inline}.onwebchatbox .chat_area p{padding-left:12px;padding-right:12px;font-size:14px !important;font-family:Arial,Helvetica,sans-serif !important;line-height:19px;float:left;clear:left;word-wrap:break-word;max-width:max-content;margin:0;color:#agent_css_text_color;box-sizing:content-box}@media(max-width:480px){.onwebchatbox .chat_area p{font-size:135% !important;line-height:1.18 !important}}.onwebchatbox .chat_area .error{color:#c30000;font-style:italic}.onwebchatbox .chat_area .me{color:#visitor_css_text_color;margin-bottom:4px;font-family:arial,verdana,sans-serif !important;text-align:right}.onwebchatbox .spanbold{font-weight:700;// 13/4/2021(800 ->700,giati fainotan ta server messages(px you are served by support) poli xalia,poli paxia sta windows 10) margin-left:initial;float:initial;font-size:12px !important}@media(max-width:480px){.onwebchatbox .spanbold{font-size:14px !important}}.onwebchatbox .chat_area .agent{color:#agent_css_text_color;margin-bottom:4px;min-height:10px;font-family:arial,verdana,sans-serif !important}.onwebchatbox .chat_area .system{font-style:italic;font-size:11px}.onwebchatbox #onwebchat-logo-span{position:absolute !important;right:15px;color:#a0a0a0;font-weight:bold;font-family:Arial,sans-serif !important;letter-spacing:0;font-size:11.7px;font-style:normal;bottom:3px !important;direction:ltr !important}.onwebchatbox #off-form-onwebchat-logo{display:none;float:right !important;position:absolute !important;margin:0 !important;right:9px !important;border:none !important;box-sizing:content-box !important;opacity:.91;bottom:7px !important}.onwebchatbox #off-form-onwebchat-logo:hover{opacity:1}.onwebchatbox .widget-logo{float:right !important;position:absolute !important;margin:0 !important;bottom:0 !important;right:4px !important;border:none !important;padding:4px 6px !important;box-sizing:content-box;height:initial !important;width:initial !important;margin:initial !important;opacity:.80}.onwebchatbox .widget-logo:hover{opacity:1}.onwebchatbox #div_chat_min_title{display:block;position:initial;margin:auto 10px auto auto;width:97%;text-align:center;overflow:hidden;margin-right:10px;line-height:inherit !important}.onwebchatbox #div_chat_min_title_span{color:#f1f1f1 !important;font-family:arial,verdana,sans-serif !important;font-weight:600 !important;font-size:14px !important;line-height:42px !important}.onwebchatbox #div_chat_max_title{display:none;position:initial;margin:auto 10px auto auto;width:96%;text-align:center;overflow:hidden;margin-right:10px;line-height:inherit !important}.onwebchatbox #div_chat_max_title_span{padding-left:10px !important;color:#f1f1f1 !important;font-family:arial,verdana,sans-serif !important;line-height:#onwebchatbox_header1_heightpx !important;font-weight:600 !important;font-size:15px !important}.onwebchatbox .server_messages{display:block;text-align:center;width:90%;max-width:90% !important;margin:auto;color:#727787 !important;padding:0 0 10px 15px;box-sizing:content-box}.onwebchatbox .onweboffline_msg{position:relative;font-size:14px;font-weight:400;font-family:arial,verdana,sans-serif !important;color:#393939 !important;padding:2% 10% 0 !important;margin-top:22% !important;margin-bottom:3px !important;top:initial !important;min-height:26px !important;line-height:20px !important}.onwebchatbox .ns{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.onwebchatbox .onwebchat_title2{display:block;text-align:center !important;width:54% !important;margin:auto !important;color:#737379 !important;font-family:arial,verdana,sans-serif !important;font-weight:300 !important;border-radius:13px !important;box-sizing:initial;line-height:18px !important;position:relative;margin-top:13% !important;box-shadow:1px 1px 3px 0 #c9c9c9 !important;padding:14px 19px 14px 19px !important;max-width:160px !important;background:#ececec !important;border:none !important;font-size:15px !important}.onwebchatbox .onwebchat_title2::after{content:'';width:0;height:0;position:absolute;bottom:-16px;left:18%;border-left:0 solid transparent;border-right:22px solid transparent;border-top:17px solid #ececec}.onwebchatbox .onwebchat_title2::before{content:'';width:0;height:0;position:absolute;bottom:-15px;left:23%;border-left:5px solid transparent;border-right:12px solid transparent;border-top:0}.onwebchatbox .onwebchatform_div{display:block;position:initial;line-height:inherit;width:80%;margin:19px auto auto;color:#545454 !important}.onwebchatbox #onwebchatoffname,#onwebchatoffemail,#onwebchatofftel,#onwebchatemailtext,#onprechatname,#onprechatemail,#onprechattel,#onprechattext,#departments{float:initial !important;display:block;background-color:#fefefe !important;background-image:none !important;padding:7px 11px !important;font-size:14px !important;font-weight:initial !important;font-family:Arial,Helvetica,sans-serif !important;font-style:initial !important;text-transform:initial !important;text-indent:initial !important;text-align:initial !important;letter-spacing:.2px !important;color:#393939 !important;width:100% !important;max-width:initial !important;max-height:initial !important;min-width:initial !important;min-height:initial !important;resize:none !important;outline:none !important;border-radius:5px !important;line-height:inherit !important;transition:box-shadow .40s,border-color .40s ease-in-out !important;box-sizing:border-box !important;box-shadow:inset 0 1px 2px rgba(0,0,0,0.1) !important;height:36px !important;margin:12px auto 11px !important}.onwebchatbox .onwebchatform_div #onprechattext{height:68px !important;line-height:normal !important;text-align:initial !important;white-space:initial !important}.onwebchatbox .onwebchatform_div #onwebchatemailtext{height:82px !important;line-height:normal !important;text-align:initial !important;border:1px solid #ccc !important;white-space:initial !important}#prechat_btn{margin:30px auto 20px !important;color:#fff !important;background-image:inherit;background-color:#567ea6 !important;width:100% !important;font-weight:600 !important;height:40px !important;max-width:initial !important;letter-spacing:.1px !important}.onwebchatbox #onwebchatoffname:focus,#onwebchatoffemail:focus,#onwebchatemailtext:focus,#onwebchatofftel:focus,#onprechatname:focus,#onprechatemail:focus,#onprechattext:focus,#onprechattel:focus{background:inherit;box-shadow:0 0 1px !important}#offlineform_btn{background-color:#567ea6 !important;width:100% !important;font-weight:600 !important;height:40px !important;max-width:initial !important;letter-spacing:.1px !important}#offlineform_ok_btn{background-color:#567ea6 !important;min-width:100% !important;height:37px !important}.onwebchatbox .onweb_mail_btn{display:block !important;margin:30px auto 20px !important;text-align:center !important;text-transform:initial !important;text-indent:initial !important;font-family:Arial,Helvetica,sans-serif !important;font-style:normal !important;font-weight:400 !important;background-color:#567ea6 !important;cursor:pointer;padding:3px 14px !important;border-style:none !important;position:relative !important;border-radius:5px !important;float:inherit !important;min-width:80px !important;width:initial;max-width:200px !important;outline:none !important;min-height:initial !important;height:28px !important;line-height:16px !important;box-sizing:border-box !important;text-shadow:inherit !important;box-shadow:none !important;letter-spacing:inherit !important;font-size:14px !important}.onwebchatbox .onweb_mail_btn:hover{background-color:#567ea6;opacity:.82;border-style:none;box-shadow:none !important}.onwebchatbox .me .spanbold,.agent .spanbold{display:block}.onwebchatbox .me-bubble{background-color:#e9e9e9;width:69% !important;margin-right:5% !important;padding:8px;position:relative !important;float:right !important;text-align:left;clear:both !important;border-radius:11px;border:0;margin-left:8px !important}.onwebchatbox .me-first{border-top-right-radius:2px !important}.onwebchatbox .me-bubble .spanbold{display:none}.onwebchatbox .agent-bubble{background-color:#567ea6;width:56% !important;margin-left:5% !important;padding:8px;position:relative;text-align:left;clear:both !important;border-radius:11px;border:0;margin-right:8px !important}.onwebchatbox .big-margin-left{margin-left:13% !important}.onwebchatbox .agent-first{border-top-left-radius:2px !important}.onwebchatbox .agent-bubble .spanbold{display:none}.onwebchatbox .onwebchat-widget-settings-icon{opacity:.83 !important;position:absolute;bottom:9px !important;left:12px}.onwebchatbox .onwebchat-widget-settings-icon:hover{opacity:1 !important}.onwebchatbox #onwebchat-emoticons-div{position:absolute;bottom:66px !important;right:4px !important;background-color:#fff !important;box-shadow:0 3px 12px 1px #b5b5b5 !important;border:1px solid #d2d2d2 !important;display:none;margin:0 !important;padding:4px 6px !important;list-style-type:none !important;box-sizing:content-box !important;line-height:initial !important;width:162px !important;width:-moz-max-content !important;width:max-content !important;border-radius:8px !important;font-size:21px;line-height:1.5 !important;user-select:none !important;z-index:999999 !important}#onwebchat-emoticons-div:after{display:block !important;content:'' !important;border:9px solid transparent !important;border-top-color:#fff !important;position:absolute !important;right:9px !important;bottom:-17px !important;pointer-events:none !important}.onwebchatbox #onwebchat-emoticons-div span{margin-bottom:initial !important;padding:2px 2px !important;display:inline-block !important;text-align:center !important;width:1.53em !important;height:1.56em !important;line-height:26px !important;vertical-align:middle !important;-webkit-transition:-webkit-transform .12s ease !important;transition:-webkit-transform .12s ease !important;transition:transform .12s ease !important;transition:transform .12s ease,-webkit-transform .12s ease !important}.onwebchatbox #onwebchat-emoticons-div span:hover{cursor:pointer !important;-webkit-transform:scale(1.21) !important;transform:scale(1.21) !important}#onwbchat_window .chat_area p>i{font-size:140% !important;line-height:1.2 !important;font-style:normal !important}.onwebchatbox .onwebchat-widget-settings-submenu{position:absolute;bottom:38px !important;left:3px !important;background-color:#fffff9 !important;border:1px solid #d2d2d2 !important;opacity:1;display:none;margin:0 !important;padding:3px 5px !important;list-style-type:none !important;width:initial !important;box-shadow:rgba(0,0,0,0.23) 0 2px 12px;border-radius:8px !important}.onwebchatbox .onwebchat-widget-settings-submenu:after{display:block !important;content:'' !important;border:9px solid transparent !important;border-top-color:#fff !important;position:absolute !important;left:6px !important;bottom:-17px !important;pointer-events:none !important}.onwebchatbox .onwebchat-widget-settings-submenu li{text-align:left !important;float:initial !important;list-style-type:none !important;list-style:none !important;cursor:pointer !important;margin:0 !important;line-height:22px !important;direction:ltr !important;background:none !important;display:block !important;font-size:10px !important;padding:11px 13px 5px 10px !important}.onwebchatbox .onwebchat-widget-settings-submenu li:hover{background-color:#d4d4d4;color:black !important}.onwebchatbox .onwebchat-widget-settings-submenu li:before{content:initial !important}.onwebchatbox .onwebchat-widget-settings-submenu-text{margin-right:10px;color:#585858;position:relative;bottom:4px;font-weight:bold;vertical-align:middle;font-family:arial,verdana,sans-serif !important;margin-left:11px !important;font-size:13px !important}.onwebchatbox .onwebchat-menu-icons{margin:0 !important;zoom:1.1}.onwebchatbox .onwebchat-emoticons{position:relative;top:4px;cursor:initial !important}.onwebchatbox img:-moz-loading{visibility:hidden}#operator-image{position:absolute;width:46px;left:15px;border-radius:100%;border:2px solid #bbb7b7;z-index:9999999;top:-5px}#iconsdiv{width:50px;height:80px;position:absolute;right:0;bottom:0}#wb-send-image{position:relative;float:right;opacity:.8;z-index:initial;right:35px !important;top:28px !important}#wb-smile-image{position:relative;float:right;right:-14px;opacity:.8;z-index:initial;cursor:pointer !important;top:26px !important}#wb-send-image:hover{opacity:1 !important}#wb-smile-image:hover{opacity:1 !important}#uploadfileid{opacity:.84}#uploadfileid:hover{opacity:1;background-color:#e5e5e5 !important}#onwebchat-volume-li-id{opacity:.84}#onwebchat-volume-li-id:hover{opacity:1;background-color:#e5e5e5 !important}#onwebchat-print-li{cursor:default !important;opacity:.5}#onwebchat-print-li:hover{background-color:#e5e5e5 !important}#onwebchat-savetofile-li{cursor:default !important;opacity:.5}#onwebchat-savetofile-li:hover{background-color:#e5e5e5 !important}#onwebchat-email-li{cursor:default !important;opacity:.5}#onwebchat-email-li:hover{background-color:#e5e5e5 !important}#onwebchat-endchat-li{cursor:default !important;opacity:.5}#onwebchat-endchat-li:hover{background-color:#e5e5e5 !important}.onwcmodal{position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.69);opacity:0;visibility:hidden;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;z-index:110;border-top-right-radius:5px;border-top-left-radius:5px}.onwebchatbox .onwcmodal-content{position:relative !important;margin:auto;margin-top:50%;background-color:white !important;width:84% !important;min-width:172px !important;line-height:17px !important;min-height:22px !important;font-size:14px !important;padding:13px 16px !important;border-radius:7px !important}.onwcmodalclose{font-size:16px;color:#7f7e7e;font-weight:800;margin-left:5px;float:right;width:18px;line-height:18px;text-align:center;cursor:pointer;border-radius:3px;background-color:lightgray;margin-top:-3px;margin-right:-3px}.onwcmodalclose:hover{background-color:darkgray}.show-onwcmodal{opacity:1;visibility:visible;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s}.onwc-show{transition:opacity 400ms !important;opacity:1 !important}.onwc-hide{opacity:0 !important;transition:opacity 400ms !important}.onwcbutton{width:29% !important;cursor:pointer !important;line-height:initial !important;min-width:fit-content !important;min-width:-moz-fit-content !important;min-height:initial !important;margin-left:auto !important;margin-right:auto !important;color:#484848 !important;background:#ddd !important;font-family:Arial,Helvetica,sans-serif !important;border:1px solid rgba(0,0,0,0.0) !important;padding:5px 12px !important;font-size:13px !important;border-radius:5px !important}.onwcbutton:focus{outline-color:lightgray !important}.onwcbutton:hover{background:#c5c5c5 !important}.onwebchatbox .orange{background:#f5d28d !important}.onwebchatbox .orange:hover:not(:disabled){background:#eac57b !important}.onwebchatbox .disabled{opacity:.5;cursor:default !important}.onwbchtlogo-in-widget-bw2,.onwbchtlogo-in-widget-icon,.onwbchtsmile-icon,.onwbchtsend-icon,.onwbchtonline-icon,.onwbchtoffline-icon,.onwbchtprint-icon,.onwbchtupload-icon-2,.onwbchtvolume-icon-2,.onwbchtvolume-icon-off,.onwbchtsave-icon,.onwbchtemail-icon,.onwbchtclose2,.onwbchtendchat-icon,.onwbchtsettings-icon-final2{display:inline-block;background:url('https://www.onwebchat.com/chatimages/live-chat-images-3.png?v=2') no-repeat;overflow:hidden;text-indent:-9999px;text-align:left}.onwbchtlogo-in-widget-bw2{background-position:-1px -0;width:71px;height:10px}.onwbchtsmile-icon{background-position:-1px -11px;width:25px;height:25px}.onwbchtsend-icon{background-position:-27px -11px;width:24px;height:27px}.onwbchtonline-icon{background-position:-1px -37px;width:23px;height:18px}.onwbchtoffline-icon{background-position:-52px -11px;width:17px;height:15px}.onwbchtprint-icon{background-position:-52px -27px;width:17px;height:15px}.onwbchtupload-icon-2{background-position:-25px -39px;width:17px;height:14px}.onwbchtvolume-icon-2{background-position:-43px -43px;width:17px;height:13px}.onwbchtvolume-icon-off{background-position:-25px -54px;width:17px;height:13px}.onwbchtsave-icon{background-position:-1px -56px;width:16px;height:14px}.onwbchtemail-icon{background-position:-43px -57px;width:16px;height:15px}.onwbchtclose2{background-position:-18px -68px;width:14px;height:14px}.onwbchtendchat-icon{background-position:-16px -68px;width:17px;height:14px}.onwbchtsettings-icon-final2{background-position:-59px -57px;width:16px;height:15px}.onwbchtlogo-in-widget-icon{background-position:0 -70px;width:17px;height:14px}#onwc_consent_l_offline{font-size:13px !important}.onwebchatbox .rating{unicode-bidi:bidi-override;direction:rtl;text-align:center;font-size:23px;margin-top:20px}.onwebchatbox .rating>span{display:inline-block;position:relative;width:1.1em;color:#aeaeae}.onwebchatbox .rating>span:hover,.onwebchatbox .rating>span:hover ~ span{cursor:pointer !important;color:#ffb900 !important}#onwbchat_window .onwcdepartmenu{display:none !important;position:absolute !important;background:white !important;list-style:none !important;border:1px solid #ddd !important;border-radius:7px !important;margin-top:-11px !important;padding-inline-start:0 !important;z-index:999999 !important;box-shadow:0 2px 10px rgb(0 0 0 / 20%) !important;-webkit-box-shadow:0 2px 10px rgb(0 0 0 / 20%) !important;user-select:none !important}#onwbchat_window .onwcdepartmenu>li{cursor:default !important;font-size:13px !important;padding:7px 15px 5px 15px !important}#onwbchat_window .onwcdepartmenu>li:hover{background:#fee188 !important}#onwbchat_window #upload_img{display:none;position:absolute;text-align:center;top:50%;width:100%;z-index:10000}#onwbchat_window .onwctime{color:grey;font-size:13px !important;text-align:left;display:block;padding-top:11px;opacity:0;padding-right:16px}#onwbchat_window .onwctime.me{text-align:right !important}#onwbchat_window .onwcinner{display:inline-flex;width:100%}.onwcouter{position:relative;margin-bottom:2px}.onwcminner{position:relative;width:100%;text-align:right}.onwcouter:last-of-type .onwctime{opacity:1 !important}.onwcinner:hover .onwctime{opacity:1 !important;transition:opacity .5s ease-out;transition-delay:.09s} @keyframes onwbmoveleft { 0% { transform: scaleX(0.4) scaleY(0.4); } } #onweb_chatimage{ animation-name: onwbmoveleft ; animation-timing-function: linear; animation-iteration-count: 1 ; animation-duration: 0.35s ; }",
		_e = "free",
		ve = "0",
		Ie = "1",
		Ee = "1",
		xe = 0,
		Be = "560",
		Ce = "66",
		ke = "340",
		Pe = "right",
		We = "40",
		Te = "#595959",
		Me = "#ffffff",
		Se = "1",
		Le = "0",
		Oe = "1",
		ze = "1",
		je = "0",
		Ae = "0",
		Ne = "1",
		Re = "0",
		Fe = "1",
		He = "1",
		Ue = "0",
		qe = "0",
		De = "0",
		Ve = 0,
		Xe = "0",
		$e = "0",
		Je = "1",
		Ye = "0",
		Ze = "dk",
		Ge = ['gr', 'cy', 'gb', 'at', 'be', 'bg', 'hr', 'cz', 'dk', 'ee', 'fi', 'fr', 'de', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se'],
		Ke = "1",
		Qe = "0",
		et = "0",
		tt = "0",
		nt = "0",
		ot = "1",
		at = "1";
	1 == $e && 1 == Ye && -1 === Ge.indexOf(Ze) && ($e = 0);
	var it = c('onwbchtemailsSent');
	it = "" == it ? 0 : parseInt(it), "0" === we && (fe = fe.replace(/radius: 13px|radius: 11px|radius: 8px|radius: 5px|radius: 6px|radius: 2px|radius: 3px/g, "radius:0px"), fe = fe.replace(/radius:13px|radius:11px|radius:8px|radius:5px|radius:6px|radius:2px|radius:3px/g, "radius:0px")), fe = fe.replace("#onweb_min_btn_margin", .36 * Ce - 1.36), 1 == S ? (fe = fe.replace(new RegExp('__modern', 'g'), ""), fe = fe.replace(/#textarea_width/g, ke - 71)) : (fe = fe.replace(new RegExp('live-chat-images-3.png', 'g'), "live-chat-images.png"), fe = fe.replace(/#textarea_width/g, ke - 48)), fe = fe.replace(/#chat_width/g, ke), fe = fe.replace(/#chatheader_width/g, ke - 40), fe = fe.replace("#chat_area_height", Be - 98 - Ce - 4 + 14 * S), fe = fe.replace("#onwebchatbox_header_height_+_4", Ce - 0 + 4), fe = fe.replace(/#onwebchatbox_header1_height/g, Ce), 0 == ie && (Te = "#595959", Me = "#595959"), fe = fe.replace(/#visitor_css_text_color/g, Te), fe = fe.replace(/#agent_css_text_color/g, Me), (void 0 == Ee || 'undefined' == Ee) && (Ee = 0);
	var dt = document.title,
		lt = window.location.href;
	'remove' in Element.prototype || (Element.prototype.remove = function() {
		this.parentNode && this.parentNode.removeChild(this)
	}), window.addEventListener("orientationchange", function(e) {
		1 == s('maxChat') && (setTimeout(function() {
			maximizeChatWindow()
		}, 20), setTimeout(function() {
			maximizeChatWindow()
		}, 200))
	});
	try {
		var ct = function(e, t) {
			if (1 == Ee && "undefined" != typeof sessionStorage && '1' != s('hasTriggered') && 1 != c('hasTriggeredC') && 1 != c('inChatC') && "" == s('chattext'))
				if (1 == s('maxChat') && 1 == ye);
				else if (H(), 0 != te) {
				vt('onWebChat', 'Trigger activated', ''), r('hasTriggered', 1), d('hasTriggeredC', 1, .166), r('mustSendTriggerText', !0), T = !0, r('triggerText', e), i(), "" != It('max_served', G) && "" != t && "null" != t && null != t && (printChat('<p class="server_messages"><i><span class="spanbold">' + It('max_served', G).replace('{{operator}}', t) + '</span></i></p>'), pe = "", r('hasWrSeByTr', !0));
				var n = "";
				1 == ie && (n = " agent-bubble ");
				var o = "",
					l = '',
					m = "";
				'agent' != pe && (n += " agent-first ", 1 == ee && (l = '<img id="operatorImageSmall" class="operatorImageSmallClass" src="' + xt + '//' + serverIP + '/filesUpload/operatorImages/' + Q + '" onerror="this.style.visibility=\'hidden\'"></img>')), 1 == ee && (m = " big-margin-left "), 1 == isRTLlanguage(e.substr(0, 1)) && (o = ' style="direction: rtl;text-align:right;" '), printChat('<p ' + o + 'class="agent ' + n + m + ' ">' + l + '<span class="spanbold">' + It('max_agent', G).replace('{{operator}}', t) + '</span> ' + a(e).replace(/({{newline}})/gm, "<br>") + '</p>'), pe = "agent", 1 != s('maxChat') && MaximizeWindowInit(), Pt && Lt.emit('setclientstatus', 'triggered')
			}
		}
	} catch (st) {
		console.log(st)
	}
	var rt = '[]';
	rt = rt.replace(/(\r\n|\n|\r)/gm, "{{newline}}");
	var mt = JSON.parse(rt),
		pt = 0,
		ut = !1;
	void 0 === s('secOnSite') && r('secOnSite', 0);
	for (var gt = mt.length, ht = 0; gt > ht; ht++)
		if (1 == mt[ht].isFullSite && 0 == mt[ht].whole) setTimeout(ct, 1e3 * mt[ht].delay, mt[ht].text, mt[ht].agentName);
		else if (1 == mt[ht].isFullSite && 1 == mt[ht].whole) {
		ut = !0;
		try {
			var yt = mt[ht].delay - s('secOnSite')
		} catch (st) {
			console.log(st)
		}
		yt >= 0 && setTimeout(ct, 1e3 * yt, mt[ht].text, mt[ht].agentName)
	} else if (0 == mt[ht].isFullSite) {
		for (var wt = mt[ht].urls, bt = !1, ft = wt.length, _t = 0; ft > _t; _t++)
			if (window.location.href.indexOf(wt[_t]) > -1) {
				bt = !0;
				break
			} bt && setTimeout(ct, 1e3 * mt[ht].delay, mt[ht].text, mt[ht].agentName)
	}
	ut && setInterval(function() {
		void 0 === s('secOnSite') && r('secOnSite', 0), pt++, r('secOnSite', parseInt(s('secOnSite')) + 1)
	}, 1e3);
	var vt = function(e, t, n) {
			try {
				'function' == typeof gtag ? gtag('event', t, {
					event_category: e,
					event_label: n
				}) : ga('send', 'event', {
					eventCategory: e,
					eventAction: t,
					eventLabel: n
				})
			} catch (o) {}
		},
		It = function(e, t) {
			return L[e] && L[e][t] ? L[e][t] : 'email_text' == e ? "Send chat transcript to the following email:" : 'email_sent' == e ? "Transcript sent!" : 'send' == e ? "Send" : void 0 == L[e] ? "" : L[e].l1
		};
	try {
		for (var _t = 0; _t < onWebChat.ar.length; _t++) onWebChat.ar[_t] && ("name" == onWebChat.ar[_t][0] ? O = onWebChat.ar[_t][1] : "email" == onWebChat.ar[_t][0] ? z = onWebChat.ar[_t][1] : "phone" == onWebChat.ar[_t][0] ? j = onWebChat.ar[_t][1] : "notes" == onWebChat.ar[_t][0] ? A = onWebChat.ar[_t][1] : "pageUrl" == onWebChat.ar[_t][0] ? lt = onWebChat.ar[_t][1] : "pageTitle" == onWebChat.ar[_t][0] ? dt = onWebChat.ar[_t][1] : "max" == onWebChat.ar[_t][0] ? 1 == onWebChat.ar[_t][1] ? r('maxChat', 1) : 0 == onWebChat.ar[_t][1] && r('maxChat', 0) : "show" == onWebChat.ar[_t][0] ? 1 == onWebChat.ar[_t][1] ? te = 1 : 0 == onWebChat.ar[_t][1] && (te = 0) : "hideImage" == onWebChat.ar[_t][0] ? 1 == onWebChat.ar[_t][1] ? oe = 1 : 0 == onWebChat.ar[_t][1] && (oe = 0) : "alwaysOffline" == onWebChat.ar[_t][0] ? 1 == onWebChat.ar[_t][1] ? (ne = 1, Ee = 0, document.getElementById("div_chat_min_title_span").textContent = It('min_offline', G), document.getElementById('onweb-offline-icon').style.display = 'block', document.getElementById('onweb-online-icon').style.display = 'none', "" != $ && document.getElementById("webchat_header").style.setProperty('background-color', $, 'important'), "" != $ && document.getElementById("offlineform_btn").style.setProperty('background-color', $, 'important')) : 0 == onWebChat.ar[_t][1] && (ne = 0) : "language" == onWebChat.ar[_t][0] ? G = onWebChat.ar[_t][1] : "languageFile" == onWebChat.ar[_t][0] ? K = onWebChat.ar[_t][1] : "onClick" == onWebChat.ar[_t][0] ? N = onWebChat.ar[_t][1] : "onMaximize" == onWebChat.ar[_t][0] ? R = onWebChat.ar[_t][1] : "onMinimize" == onWebChat.ar[_t][0] ? F = onWebChat.ar[_t][1] : "onTrigger" == onWebChat.ar[_t][0] ? H = onWebChat.ar[_t][1] : "onStartWriting" == onWebChat.ar[_t][0] ? U = onWebChat.ar[_t][1] : "onUpdateOperators" == onWebChat.ar[_t][0] ? q = onWebChat.ar[_t][1] : "onNewMessage" == onWebChat.ar[_t][0] ? D = onWebChat.ar[_t][1] : "onWebChatLoaded" == onWebChat.ar[_t][0] ? V = onWebChat.ar[_t][1] : "onlineColor" == onWebChat.ar[_t][0] ? X = onWebChat.ar[_t][1] : "offlineColor" == onWebChat.ar[_t][0] && ($ = onWebChat.ar[_t][1]))
	} catch (st) {}
	"" == K && (('gr' == G || 'el' == G) && (G = 'l1'), 'en' == G && (G = 'l2'), 'l1' != G && 'l2' != G && (G = 'l1')), 'function' != typeof String.prototype.trim && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '')
	}), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
		var n = this.toString();
		('number' != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length;
		var o = n.indexOf(e, t);
		return -1 !== o && o === t
	});
	var Et = void 0,
		xt = document.location.protocol;
	'file:' == xt && (xt = "https:");
	var Bt = document.location.port;
	Bt = void 0 == document.location.protocol || '' == Bt || '80' == Bt || '443' == Bt ? '' : ':443', serverIP = "www.onwebchat.com";
	var Ct = "1",
		kt = !1,
		Pt = !1,
		Wt = !1,
		Tt = !0,
		Mt = 216e5;
	'free' == _e && (Mt = 144e5);
	var St, Lt, Ot = {},
		zt = "",
		jt = !0;
	jt = c('onwbchtSound'), '' == jt || null == jt ? (jt = !0, d("onwbchtSound", 1, 93)) : 0 == jt && (jt = !1), zt = c('onwbchtclientid'), '' == zt || null == zt || 1 == de && 1 == oe && (de = 0);
	var At = "",
		Nt = "",
		Rt = "",
		Ft = "",
		Ht = c('onwbchtblocked');
	('' == Ht || null == Ht || 'null' == Ht || 'NaN' == Ht) && (Ht = 0, d("onwbchtblocked", 0, 183));
	var Ut = function(e, t) {
		jdelay = 0, "undefined" != typeof window.define && (console.log("define.."), jdelay = 1200), setTimeout(function() {
			var n = document.createElement('script');
			n.src = e, n.async = !0, n.onreadystatechange = n.onload = function() {
				var e = n.readyState;
				t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t())
			};
			var o = document.getElementsByTagName('head')[0];
			o.insertBefore(n, o.firstChild)
		}, jdelay)
	};
	'undefined' == typeof JSON && (kt = !0);
	var qt = !1;
	h() && (qt = !0), 'function' != typeof String.prototype.trim && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '')
	}), maximizeChatWindow = function() {
		if (document.getElementById("onwbchat_window").style.setProperty("animation-iteration-count", "0"), document.getElementById("onwbchat_window").style.setProperty("box-shadow", "rgba(0, 0, 0, 0.43) 0px 0em 1.2em", "important"), (1 == re || $t) && document.getElementById("onwbchat_window").style.setProperty("display", "block"), "none" == document.getElementById("div_chat_max_title").style.display && R(), document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").style.setProperty("display", "none"), document.getElementById("onweb_chatimage_x") && document.getElementById("onweb_chatimage_x").style.setProperty("display", "none"), document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").style.setProperty("display", "none"), 1 == xe || 0 != Ee || null != s('chattext') && '' != s('chattext') ? 1 == ye && 0 === s('chattext').length ? (ge = "prechat", document.getElementById('chat_area_id').style.display = 'none', document.getElementById('onwc_chat_message_div').style.display = 'none', document.getElementById('chat_info_id').style.display = 'none', document.getElementById('offline_form').style.display = 'none', document.getElementById('prechat_form').style.display = 'block', document.getElementById("div_chat_max_title_span").textContent = It('max_title', G)) : (ge = "chat", document.getElementById('chat_area_id').style.display = 'block', document.getElementById('onwc_chat_message_div').style.display = 'block', document.getElementById('chat_info_id').style.display = 'block', document.getElementById('offline_form').style.display = 'none', document.getElementById('prechat_form').style.display = 'none', document.getElementById("div_chat_max_title_span").textContent = It('max_title', G)) : (ge = "offline", document.getElementById('chat_area_id').style.display = 'none', document.getElementById('onwc_chat_message_div').style.display = 'none', document.getElementById('chat_info_id').style.display = 'none', document.getElementById('offline_form').style.display = 'block', document.getElementById("div_chat_max_title_span").textContent = It('off_title', G), document.getElementById('prechat_form').style.display = 'none'), $t) {
			document.getElementById("onwbchat_window").style.setProperty("height", "95%");
			var e = document.getElementById("onwbchat_window").clientWidth;
			document.getElementById("onwbtxtarea").style.setProperty("width", e - 48 - 23 * S + "px", "important"), document.getElementById("chat_area_id").style.setProperty("width", e - 0 + "px", "important"), document.getElementById("webchat_header").style.setProperty("width", e - 40 + "px", "important")
		} else document.getElementById("onwbchat_window").style.setProperty("height", Be + "px", "important"), document.getElementById("onwbchat_window").style.setProperty("top", C + "px"), document.getElementById("onwbchat_window").style.setProperty("left", B + "px"), 1 == S && document.getElementById("onwbchat_window").style.setProperty("bottom", "20px", "important");
		return 1 == S ? (document.getElementById("div_chat_min_title").style.setProperty("line-height", "42px", "important"), document.getElementById("webchat_header").style.setProperty("height", Ce + "px", "important")) : document.getElementById("webchat_header").style.setProperty("height", Ce - 0 + 4 + "px", "important"), document.getElementById("webchat_header").style.setProperty("cursor", "move"), document.getElementById("div_chat_max_title").style.setProperty("display", "block"), document.getElementById("div_chat_min_title").style.setProperty("display", "none"), document.getElementById('off-form-onwebchat-logo') && (document.getElementById('off-form-onwebchat-logo').style.display = 'block'), document.getElementById('onwebchat-logo-span') && (document.getElementById('onwebchat-logo-span').style.display = 'block'), r('maxChat', 1), loadEmoticons(), f(), w(), !1
	}, minimizeChatWindow = function() {
		return (1 == re || $t) && document.getElementById("onwbchat_window").style.setProperty("display", "none"), "block" == document.getElementById('div_chat_max_title').style.display && F(), r('maxChat', 0), setTimeout(function() {
			document.getElementById('chat_area_id').style.display = 'none', document.getElementById('onwc_chat_message_div').style.display = 'none', document.getElementById('chat_info_id').style.display = 'none', document.getElementById("prechat_form") && (document.getElementById('prechat_form').style.display = 'none'), document.getElementById("onwbchat_window").style.setProperty("height", "66px"), document.getElementById('webchat_header').style.cursor = 'pointer', 0 == s('hideImage') && document.getElementById("onweb_chatimage") && (document.getElementById("onweb_chatimage").style.setProperty("display", "inline"), document.getElementById("onweb_chatimage").style.setProperty("cursor", "pointer"), document.getElementById("onweb_chatimage").style.setProperty("animation-iteration-count", "0")), 0 == te && document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").style.setProperty("display", "none"), document.getElementById('onweb_chatimage_x') && (document.getElementById('onweb_chatimage_x').style.display = 'inline', onweb_chatimage_loaded()), document.getElementById("div_chat_min_title").style.setProperty("display", "block"), document.getElementById("div_chat_max_title").style.setProperty("display", "none"), document.getElementById('off-form-onwebchat-logo') && (document.getElementById('off-form-onwebchat-logo').style.display = 'none'), document.getElementById('onwebchat-logo-span') && (document.getElementById('onwebchat-logo-span').style.display = 'none'), document.getElementById("onwbchat_window").style.setProperty("box-shadow", "0px 0px 5px 0px #777", "important"), $t || (document.getElementById("onwbchat_window").style.setProperty("top", "initial"), document.getElementById("onwbchat_window").style.setProperty("left", "initial"), document.getElementById("onwbchat_window").style.setProperty(Pe, We + "px"), document.getElementById("webchat_header").style.setProperty("height", "40px", "important"), document.getElementById("onwbchat_window").style.setProperty("height", "40px", "important"), document.getElementById("onwbchat_window").style.setProperty("bottom", "0px", "important"))
		}, 100), !1
	}, hideChatWindow = function() {
		b(document.getElementById("onwbchat_window")), b(document.getElementById("onweb_chatimage"))
	}, showChatWindow = function() {
		document.getElementById("onwbchat_window").classList.remove('onwc-hide'), document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").classList.remove('onwc-hide');
		try {} catch (e) {
			console.log(e)
		}
		0 == re && 0 == $t && document.getElementById("onwbchat_window").style.setProperty("display", "block"), 1 == s('hideImage') && document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").style.setProperty("display", "none"), 0 == s('hideImage') && document.getElementById("onweb_chatimage") && document.getElementById("onweb_chatimage").style.setProperty("display", "inline"), 1 == s('maxChat') ? maximizeChatWindow() : (document.getElementById('chat_area_id').style.display = 'none', document.getElementById('onwc_chat_message_div').style.display = 'none', document.getElementById('chat_info_id').style.display = 'none')
	};
	var Dt, Vt, Xt, $t;
	if (function(e) {
			var t = '-',
				n = navigator.appVersion,
				o = navigator.userAgent,
				a = navigator.appName,
				i = '' + parseFloat(navigator.appVersion),
				d = parseInt(navigator.appVersion, 10);
			Xt = n + " -- " + o + " -- " + a + " -- " + i + " -- " + d + " -- " + navigator.platform + " -- " + navigator.oscpu;
			var l, c, s; - 1 != (c = o.indexOf('Opera')) ? (a = 'Opera', i = o.substring(c + 6), -1 != (c = o.indexOf('Version')) && (i = o.substring(c + 8))) : -1 != (c = o.indexOf('MSIE')) ? (a = 'Internet Explorer', i = o.substring(c + 5)) : -1 != (c = o.indexOf('Edge')) || -1 != (c = o.indexOf('Edg/')) ? (a = 'Edge', i = '') : -1 != (c = o.indexOf('Chrome')) ? (a = 'Chrome', i = o.substring(c + 7), -1 != (c = o.indexOf('OPR/')) && (a = 'Opera', i = o.substring(c + 4))) : -1 != (c = o.indexOf('Safari')) ? (a = 'Safari', i = o.substring(c + 7), -1 != (c = o.indexOf('Version')) && (i = o.substring(c + 8))) : -1 != (c = o.indexOf('Firefox')) ? (a = 'Firefox', i = o.substring(c + 8)) : -1 != o.indexOf('Trident/') ? (a = 'Internet Explorer', i = o.substring(o.indexOf('rv:') + 3)) : (l = o.lastIndexOf(' ') + 1) < (c = o.lastIndexOf('/')) && (a = o.substring(l, c), i = o.substring(c + 1), a.toLowerCase() == a.toUpperCase() && (a = navigator.appName)), -1 != (s = i.indexOf(';')) && (i = i.substring(0, s)), -1 != (s = i.indexOf(' ')) && (i = i.substring(0, s)), -1 != (s = i.indexOf(')')) && (i = i.substring(0, s));
			var r = i.indexOf('.');
			if (r > 0) {
				var m = i.indexOf('.', i.indexOf('.') + 1);
				m > 0 && (i = i.substring(0, m))
			}
			d = parseInt('' + i, 10), isNaN(d) && (i = '' + parseFloat(navigator.appVersion), d = parseInt(navigator.appVersion, 10)), 'Edge' == a && (i = ''), $t = !1, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && ($t = !0);
			var p = navigator.cookieEnabled ? !0 : !1;
			'undefined' != typeof navigator.cookieEnabled || p || (document.cookie = 'testcookie', p = -1 != document.cookie.indexOf('testcookie') ? !0 : !1);
			var u = '',
				g = [{
					s: 'Windows 3.11',
					r: /Win16/
				}, {
					s: 'Windows 95',
					r: /(Windows 95|Win95|Windows_95)/
				}, {
					s: 'Windows ME',
					r: /(Win 9x 4.90|Windows ME)/
				}, {
					s: 'Windows 98',
					r: /(Windows 98|Win98)/
				}, {
					s: 'Windows CE',
					r: /Windows CE/
				}, {
					s: 'Windows 2000',
					r: /(Windows NT 5.0|Windows 2000)/
				}, {
					s: 'Windows XP',
					r: /(Windows NT 5.1|Windows XP)/
				}, {
					s: 'Windows Server 2003',
					r: /Windows NT 5.2/
				}, {
					s: 'Windows Vista',
					r: /Windows NT 6.0/
				}, {
					s: 'Windows 7',
					r: /(Windows 7|Windows NT 6.1)/
				}, {
					s: 'Windows 8.1',
					r: /(Windows 8.1|Windows NT 6.3)/
				}, {
					s: 'Windows 8',
					r: /(Windows 8|Windows NT 6.2)/
				}, {
					s: 'Windows 10',
					r: /(Windows 10|Windows NT 10.0)/
				}, {
					s: 'Windows NT 4.0',
					r: /(Windows NT 4.0|WinNT4.0)/
				}, {
					s: 'Windows',
					r: /(WinNT|Windows NT)/
				}, {
					s: 'Windows ME',
					r: /Windows ME/
				}, {
					s: 'Windows Phone',
					r: /Windows Phone/
				}, {
					s: 'Android',
					r: /Android/
				}, {
					s: 'Open BSD',
					r: /OpenBSD/
				}, {
					s: 'Sun OS',
					r: /SunOS/
				}, {
					s: 'Linux',
					r: /(Linux|X11)/
				}, {
					s: 'iOS',
					r: /(iPhone|iPad|iPod)/
				}, {
					s: 'Mac OS X',
					r: /Mac OS X/
				}, {
					s: 'Mac OS',
					r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
				}, {
					s: 'QNX',
					r: /QNX/
				}, {
					s: 'UNIX',
					r: /UNIX/
				}, {
					s: 'BeOS',
					r: /BeOS/
				}, {
					s: 'OS/2',
					r: /OS\/2/
				}, {
					s: 'BlackBerry OS',
					r: /BlackBerry/
				}, {
					s: 'Search Bot',
					r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
				}];
			for (var h in g) {
				var y = g[h];
				if (y.r.test(o)) {
					u = y.s;
					break
				}
			}
			'' == u && (u = navigator.platform);
			var w = t;
			switch (/Windows/.test(u) && (w = /Windows (.*)/.exec(u)[1], u = 'Windows'), u) {
				case 'Mac OS X':
					w = /Mac OS X (10[\.\_\d]+)/.exec(o)[1];
					break;
				case 'Android':
					w = /Android ([\.\_\d]+)/.exec(o)[1];
					break;
				case 'iOS':
					w = /OS (\d+)_(\d+)_?(\d+)?/.exec(n), w = w[1] + '.' + w[2] + '.' + (0 | w[3])
			}
			var b = 'no check';
			if ('undefined' != typeof swfobject) {
				var f = swfobject.getFlashPlayerVersion();
				b = f.major > 0 ? f.major + '.' + f.minor + ' r' + f.release : t
			}
			e.jscd = {
				browser: a,
				browserVersion: i,
				mobile: $t,
				os: u,
				osVersion: w,
				cookies: p,
				flashVersion: b
			}
		}(this), Vt = jscd.os + ' ' + jscd.osVersion, Dt = jscd.browser + ' ' + jscd.browserVersion, 1 != $t || 0 != Ie) {
		hasRequirejs_delay = 100, "undefined" != typeof window.define && (hasRequirejs_delay = 5e3), setTimeout(function() {
			function e() {
				function e(e, t, n) {
					var o = new XMLHttpRequest;
					o.open('GET', e), o.withCredentials = !0, o.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), o.setRequestHeader('Content-Type', 'application/json'), o.onreadystatechange = function() {
						4 === o.readyState && (200 === o.status || 0 === o.status && '' !== o.responseText ? n({
							url: e,
							status: 200,
							body: o.responseText || ''
						}) : t({
							url: e,
							status: o.status,
							body: o.responseText || ''
						}))
					}, o.send()
				}
				e(K, function(e) {
					console.log("Error: language file failed to load!  filename: " + K), console.log("Ensure that language file url is correct and is not blocked as cross-origin request."), 'l1' != G && 'l2' != G && (G = 'l1'), _()
				}, function(e) {
					try {
						var t = JSON.parse(e.body);
						for (var n in t) t.hasOwnProperty(n) && (L[n] = t[n])
					} catch (o) {
						console.log("exception parsing lang text file : " + o), console.log("lang text file data: " + e.body.substring(0, 100) + " ...")
					}
					_()
				})
			}
			window.__requirejsToggleBackup = {
				define: window.define,
				require: window.require,
				requirejs: window.requirejs
			}, window.define = void 0, window.require = void 0, window.requirejs = void 0, kt || qt || ("" != K ? Ut(xt + '//cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.0/socket.io.min.js', e) : Ut(xt + '//cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.0/socket.io.min.js', _))
		}, hasRequirejs_delay), enableMenuItem = function(e) {
			document.getElementById(e) && (document.getElementById(e).style.opacity = .84, document.getElementById(e).onmouseenter = function(e) {
				this.style.opacity = 1
			}, document.getElementById(e).onmouseleave = function(e) {
				this.style.opacity = .84
			}, document.getElementById(e).style.setProperty("cursor", "pointer", "important"))
		}, disableMenuItem = function(e) {
			document.getElementById(e) && (document.getElementById(e).style.opacity = .5, document.getElementById(e).onmouseenter = function(e) {
				this.style.opacity = .5
			}, document.getElementById(e).onmouseleave = function(e) {
				this.style.opacity = .5
			}, document.getElementById(e).style.setProperty("cursor", "initial", "important"))
		};
		var Jt = c('onwbchttimesVisited');
		return ('' == Jt || void 0 == Jt || 'NaN' == Jt) && (Jt = 0, d("onwbchttimesVisited", 1, 93)), {
			init: function(e) {
				Ot = e
			},
			set: function(e, t) {
				if ("name" == e) {
					O = t;
					try {
						Lt.emit('setclientdetails', zt, be, O, "", "", "")
					} catch (n) {}
				} else if ("email" == e) {
					z = t;
					try {
						Lt.emit('setclientdetails', zt, be, "", z, "", "")
					} catch (n) {}
				} else if ("phone" == e) {
					j = t;
					try {
						Lt.emit('setclientdetails', zt, be, "", "", j, "")
					} catch (n) {}
				} else if ("notes" == e) {
					A = t;
					try {
						Lt.emit('setclientdetails', zt, be, "", "", "", A)
					} catch (n) {}
				} else if ("pageUrl" == e) try {
					Lt.emit('setclientpageurl', zt, be, "", t)
				} catch (n) {} else if ("pageTitle" == e) try {
					Lt.emit('setclientpageurl', zt, be, t, "")
				} catch (n) {} else "max" == e ? 1 == t ? (maximizeChatWindow(), document.getElementById("onwbtxtarea").focus()) : 0 == t && minimizeChatWindow() : "show" == e ? 1 == t ? (te = 1, showChatWindow()) : 0 == t && (te = 0, hideChatWindow()) : "online" == e ? 1 == t ? (Ee = 1, showChatWindow()) : 0 == t && (Ee = 0, showChatWindow()) : "hideImage" == e || ("language" == e ? (G = t, ('gr' == G || 'el' == G) && (G = 'l1'), 'en' == G && (G = 'l2'), 'l1' != G && 'l2' != G && (G = 'l1')) : "languageFile" == e ? K = "" : "onClick" == e ? N = t : "onMaximize" == e ? R = t : "onMinimize" == e ? F = t : "onTrigger" == e ? H = t : "onStartWriting" == e ? U = t : "onUpdateOperators" == e ? q = t : "onNewMessage" == e ? D = t : "onWebChatLoaded" == e ? V = t : "onlineColor" == e ? (X = t, 1 == Ee && "" != X && document.getElementById("webchat_header").style.setProperty('background-color', X, 'important')) : "offlineColor" == e && ($ = t, 1 != Ee && "" != $ && (document.getElementById("webchat_header").style.setProperty('background-color', $, 'important'), document.getElementById("offlineform_btn").style.setProperty('background-color', $, 'important'))))
			},
			get: function(e) {
				return "name" == e ? O : "email" == e ? z : "phone" == e ? j : "notes" == e ? A : "status" == e ? 1 == Ee ? "online" : "offline" : ""
			}
		}
	}
}();