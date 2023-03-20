/*
	AFOP implementation!
	check vtid/avatar implementation is ok

*/
LUI.domain = (function() {
    var url = document.querySelector('script[src*="statics.js"]');
    var domain = (new RegExp(/http(s)??\:\/\/([a-z0-9\-\.]+)/ig)).exec(url.src)[2];
    return "//" + domain + (domain == "localhost" ? "/vdlvry/" : "");
})();

// polyfills for IE11
! function(t) {
    "use strict";
    var n, r, e = function() {
            try {
                if (t.URLSearchParams && "bar" === new t.URLSearchParams("foo=bar").get("foo")) return t.URLSearchParams
            } catch (n) {}
            return null
        }(),
        o = e && "a=1" === new e({
            a: 1
        }).toString(),
        i = e && "+" === new e("s=%2B").get("s"),
        a = "__URLSearchParams__",
        s = !e || ((n = new e).append("s", " &"), "s=+%26" === n.toString()),
        u = h.prototype,
        f = !!(t.Symbol && t.Symbol.iterator);
    if (!e || !o || !i || !s) {
        u.append = function(t, n) {
            v(this[a], t, n)
        }, u.delete = function(t) {
            delete this[a][t]
        }, u.get = function(t) {
            var n = this[a];
            return this.has(t) ? n[t][0] : null
        }, u.getAll = function(t) {
            var n = this[a];
            return this.has(t) ? n[t].slice(0) : []
        }, u.has = function(t) {
            return $(this[a], t)
        }, u.set = function t(n, r) {
            this[a][n] = ["" + r]
        }, u.toString = function() {
            var t, n, r, e, o = this[a],
                i = [];
            for (n in o)
                for (t = 0, r = l(n), e = o[n]; t < e.length; t++) i.push(r + "=" + l(e[t]));
            return i.join("&")
        }, i && e && !o && t.Proxy ? (r = new Proxy(e, {
            construct: function(t, n) {
                return new t(new h(n[0]).toString())
            }
        })).toString = Function.prototype.toString.bind(h) : r = h, Object.defineProperty(t, "URLSearchParams", {
            value: r
        });
        var c = t.URLSearchParams.prototype;
        c.polyfill = !0, c.forEach = c.forEach || function(t, n) {
            var r = y(this.toString());
            Object.getOwnPropertyNames(r).forEach(function(e) {
                r[e].forEach(function(r) {
                    t.call(n, r, e, this)
                }, this)
            }, this)
        }, c.sort = c.sort || function() {
            var t, n, r, e = y(this.toString()),
                o = [];
            for (t in e) o.push(t);
            for (o.sort(), n = 0; n < o.length; n++) this.delete(o[n]);
            for (n = 0; n < o.length; n++) {
                var i = o[n],
                    a = e[i];
                for (r = 0; r < a.length; r++) this.append(i, a[r])
            }
        }, c.keys = c.keys || function() {
            var t = [];
            return this.forEach(function(n, r) {
                t.push(r)
            }), g(t)
        }, c.values = c.values || function() {
            var t = [];
            return this.forEach(function(n) {
                t.push(n)
            }), g(t)
        }, c.entries = c.entries || function() {
            var t = [];
            return this.forEach(function(n, r) {
                t.push([r, n])
            }), g(t)
        }, f && (c[t.Symbol.iterator] = c[t.Symbol.iterator] || c.entries)
    }

    function h(t) {
        ((t = t || "") instanceof URLSearchParams || t instanceof h) && (t = t.toString()), this[a] = y(t)
    }

    function l(t) {
        var n = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g, function(t) {
            return n[t]
        })
    }

    function p(t) {
        return t.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/ig, function(t) {
            return decodeURIComponent(t)
        })
    }

    function g(n) {
        var r = {
            next: function() {
                var t = n.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return f && (r[t.Symbol.iterator] = function() {
            return r
        }), r
    }

    function y(t) {
        var n = {};
        if ("object" == typeof t) {
            if (S(t))
                for (var r = 0; r < t.length; r++) {
                    var e = t[r];
                    if (S(e) && 2 === e.length) v(n, e[0], e[1]);
                    else throw TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements")
                } else
                    for (var o in t) t.hasOwnProperty(o) && v(n, o, t[o])
        } else {
            0 === t.indexOf("?") && (t = t.slice(1));
            for (var i = t.split("&"), a = 0; a < i.length; a++) {
                var s = i[a],
                    u = s.indexOf("="); - 1 < u ? v(n, p(s.slice(0, u)), p(s.slice(u + 1))) : s && v(n, p(s), "")
            }
        }
        return n
    }

    function v(t, n, r) {
        var e = "string" == typeof r ? r : null != r && "function" == typeof r.toString ? r.toString() : JSON.stringify(r);
        $(t, n) ? t[n].push(e) : t[n] = [e]
    }

    function S(t) {
        return !!t && "[object Array]" === Object.prototype.toString.call(t)
    }

    function $(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this);
! function() {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback) {
            for (var i = 0; i < this.length; i++) {
                callback(this[i], i, this);
            }
        }
    }
}();
! function() {
    if ('HTMLCollection' in window && !HTMLCollection.prototype.forEach) {
        HTMLCollection.prototype.forEach = function(callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
}();
! function() {
    if ('NodeList' in window && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function(callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
}();
LUI.getURLParameter = function($paramName) {
    var params = new URLSearchParams(window.location.search);

    if (typeof $paramName == "undefined") {
        var result = {};
        params.forEach(function(value, key) {
            result[key] = value;
        })
        return result;
    }
    if (typeof $paramName == "string") {
        return params.get($paramName);
    } else if (Array.isArray($paramName)) {
        var result = {};
        for (var i in $paramName) {
            result[$paramName[i]] = params.get($paramName[i]);
        }
        return result;
    }
};

LUI.createElementFromHTML = function($htmlString) {

    var tpl = document.createElement('template');
    tpl.innerHTML = $htmlString.trim();
    return tpl.content;
}

LUI.setCookie = function($key, $value, $days) {
    var date, expires;
    if ($days) {
        date = new Date();
        date.setTime(date.getTime() + ($days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }

    document.cookie = $key + "=" + $value + expires + "; path=/; " + (location.hostname === "localhost" ? "" : "SameSite=None; Secure");
}

LUI.getCookie = function($key) {
    var c_ar = document.cookie.split(";");
    for (var i in c_ar) {
        var c = c_ar[i].split("=");
        if (c[0].trim() == $key)
            return decodeURI(c[1]);
    }
}

LUI.isMobile = function() {
    useragent = window.navigator.userAgent;
    if (
        useragent.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i) ||
        useragent.substring(0, 4).match(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i)) {
        return true;
    }
    return false;
}

LUI.started_reel = false;
LUI.start_reel = function(host_selector, male_percent) {
    if (male_percent === undefined)
        male_percent = 0.5;

    if (!LUI.started_reel) {
        var reel_element = document.createRange().createContextualFragment('<style>' +
            '.orderreel{' +
            '  display:none;' +
            '  border:solid 4px #6C757D!important;' +
            '}' +
            '.orderreel .map{' +
            '	width:60px;' +
            '	height: 60px;' +
            '	border-radius:30px;' +
            '	display:none;' +
            '	pointer-events: none;' +
            '	background-position:center;' +
            '}' +
            '.orderreel .icon{' +
            '	width:60px;' +
            '	height: 60px;' +
            '	border-radius:30px;' +
            '	display:inline-block;' +
            '	background:url(' + LUI.domain + '/statics/img/order_reel.png) no-repeat;' +
            '	background-size: 70%;' +
            '	background-position: center;' +
            '}' +
            '</style> ' +
            '<div class="orderreel">' +
            '  <div map class="map"></div>' +
            '  <div icon class="icon"></div>' +
            '  <div class="message">' +
            '  </div>' +
            '</div>' +
            '<script>'
        );
        var host = document.querySelector(host_selector);

        host.appendChild(reel_element);
        LUI.started_reel = true
        var reel = document.querySelector(".orderreel");
        reel.style.display = "flex";

        function updateMap(name) {
            var map = document.querySelector(".orderreel .map");
            var img = "url(" + LUI.domain + "/statics/img/states/" + name.replace(" ", "%20") + ".png)";
            map.style.backgroundImage = img;

        }

        function getNextOrder() {

            var offer_unit = "Bottle";
            var offer_name = "";

            if (LUI.setup && LUI.setup.offer_unit)
                offer_unit = LUI.setup.offer_unit;

            if (LUI.setup && LUI.setup.offer_name)
                offer_name += " of " + LUI.setup.offer_name;



            var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
            var names = "SmFtZXMsNDcwMDIyOSxNYXJ5LDMxOTYzODUsU21pdGgsMjQ0Mjk3NwpSb2JlcnQsNDQ1NTY5NixQYXRyaWNpYSwxNTU4NDA3LEpvaG5zb24sMTkzMjgxMgpKb2huLDQ0NTM4MDcsSmVubmlmZXIsMTQ2ODM3NyxXaWxsaWFtcywxNjI1MjUyCk1pY2hhZWwsNDMzNTkxOSxMaW5kYSwxNDQ4MzAzLEJyb3duLDE0MzcwMjYKV2lsbGlhbSwzNTY0Mjc2LEVsaXphYmV0aCwxNDIwMzc3LEpvbmVzLDE0MjU0NzAKRGF2aWQsMzU2NDA1MyxCYXJiYXJhLDEzOTc2MzUsR2FyY2lhLDExNjYxMjAKUmljaGFyZCwyNDU0NDA3LFN1c2FuLDExMDM1NjksTWlsbGVyLDExNjE0MzcKSm9zZXBoLDIzMzU3OTIsSmVzc2ljYSwxMDQ2MzIyLERhdmlzLDExMTYzNTcKVGhvbWFzLDIxNTE4NjQsU2FyYWgsOTkxOTEwLFJvZHJpZ3VleiwxMDk0OTI0CkNoYXJsZXMsMjA4NDA0MyxLYXJlbiw5ODYwNTcsTWFydGluZXosMTA2MDE1OQpDaHJpc3RvcGhlciwyMDM4Nzk4LE5hbmN5LDk2Njg2NyxIZXJuYW5kZXosMTAwNDMyOApEYW5pZWwsMTg5NTI5MixMaXNhLDk2NTAxNSxMb3Bleiw4NzQ1MjMKTWF0dGhldywxNjA3NDY3LEJldHR5LDkyNDYyOSxHb256YWxlcyw4NDEwMjUKQW50aG9ueSwxNDA2MDMwLE1hcmdhcmV0LDkxODU0MSxXaWxzb24sODAxODgyCk1hcmssMTM0NzUxOSxTYW5kcmEsODczNTA5LEFuZGVyc29uLDc4NDQwNApEb25hbGQsMTMzNjc1MyxBc2hsZXksODQ5Mjk3LFRob21hcyw3NTYxNDIKU3RldmVuLDEyODI1OTgsS2ltYmVybHksODM5Nzk2LFRheWxvciw3NTEyMDkKUGF1bCwxMjc1NzAwLEVtaWx5LDgzMDk5OSxNb29yZSw3MjQzNzQKQW5kcmV3LDEyNTQwNTQsRG9ubmEsODIyMzMwLEphY2tzb24sNzA4MDk5Ckpvc2h1YSwxMjIwNzMwLE1pY2hlbGxlLDgxMjMzNSxNYXJ0aW4sNzAyNjI1Cktlbm5ldGgsMTIyMDIyMSxEb3JvdGh5LDgxMTM5MixMZWUsNjkzMDIzCktldmluLDExNzQ3NjIsQ2Fyb2wsODA2MTcwLFBlcmV6LDY4MTY0NQpCcmlhbiwxMTY4MDczLEFtYW5kYSw3NzMxOTksVGhvbXBzb24sNjY0NjQ0Ckdlb3JnZSwxMTM1MjM1LE1lbGlzc2EsNzUzOTk0LFdoaXRlLDY2MDQ5MQpFZHdhcmQsMTA3OTYxOSxEZWJvcmFoLDc0MDAxOSxIYXJyaXMsNjI0MjUyClJvbmFsZCwxMDcyNzQ2LFN0ZXBoYW5pZSw3Mzg1MjMsU2FuY2hleiw2MTI3NTIKVGltb3RoeSwxMDcwOTE2LFJlYmVjY2EsNzI5NjMwLENsYXJrLDU2MjY3OQpKYXNvbiwxMDM4MzM1LFNoYXJvbiw3MjA4MjYsUmFtaXJleiw1NTc0MjMKSmVmZnJleSw5NzU5MTUsTGF1cmEsNzE4MDA2LExld2lzLDUzMTc4MQpSeWFuLDk0Mjk3NyxDeW50aGlhLDcwNTcxNyxSb2JpbnNvbiw1Mjk4MjEKSmFjb2IsOTMzNjkyLEthdGhsZWVuLDY4NjIxNyxXYWxrZXIsNTIzMTg5CkdhcnksOTAwMDg4LEFteSw2ODEzOTcsWW91bmcsNDg0NDQ3Ck5pY2hvbGFzLDg5NDUyMSxTaGlybGV5LDY2MzQ1MixBbGxlbiw0ODI2MDcKRXJpYyw4NzkyNTcsQW5nZWxhLDY1ODk2OCxLaW5nLDQ2NTQyMgpKb25hdGhhbiw4NDg3NzQsSGVsZW4sNjE4NTYzLFdyaWdodCw0NTg5ODAKU3RlcGhlbiw4MzkyNzgsQW5uYSw2MTgzNjcsU2NvdHQsNDM5NTMwCkxhcnJ5LDgwMjI3MixCcmVuZGEsNjA2MjkxLFRvcnJlcyw0Mzc4MTMKSnVzdGluLDc3OTUwNCxQYW1lbGEsNTkyNjk2LE5ndXllbiw0Mzc2NDUKU2NvdHQsNzY5OTgwLE5pY29sZSw1ODk0MzQsSGlsbCw0MzQ4MjcKQnJhbmRvbiw3NjE0NzMsRW1tYSw1ODA2MTAsRmxvcmVzLDQzMzk2OQpCZW5qYW1pbiw3NDAzNDcsU2FtYW50aGEsNTc4OTg2LEdyZWVuLDQzMDE4MgpTYW11ZWwsNzE0MDEzLEthdGhlcmluZSw1NzE1NzQsQWRhbXMsNDI3ODY1CkdyZWdvcnksNzA3NTAxLENocmlzdGluZSw1NjExNjEsTmVsc29uLDQyNDk1OApGcmFuayw2OTE1MzAsRGVicmEsNTQ4MjgwLEJha2VyLDQxOTU4NgpBbGV4YW5kZXIsNjc1NzQ2LFJhY2hlbCw1NDYxNTMsSGFsbCw0MDcwNzYKUmF5bW9uZCw2Njg3OTMsQ2F0aGVyaW5lLDU0Mjc0OCxSaXZlcmEsMzkxMTE0ClBhdHJpY2ssNjY0NzIzLENhcm9seW4sNTQwOTYzLENhbXBiZWxsLDM4NjE1NwpKYWNrLDYzNjY3NCxKYW5ldCw1MzkyMjQsTWl0Y2hlbGwsMzg0NDg2CkRlbm5pcyw2MTExMjgsUnV0aCw1Mzg2MjksQ2FydGVyLDM3Njk2NgpKZXJyeSw2MDIxMTcsTWFyaWEsNTI5MzQyLFJvYmVydHMsMzc2Nzc0ClR5bGVyLDU5MjQ5NSxIZWF0aGVyLDUyNDE2NixHb21leiwzNjU2NTUKQWFyb24sNTgzOTkwLERpYW5lLDUxNTE4MyxQaGlsbGlwcywzNjA4MDIKSm9zZSw1NjI0NDQsVmlyZ2luaWEsNTE1MDg4LEV2YW5zLDM1NTU5MwpBZGFtLDU1NDU1OSxKdWxpZSw1MDY1OTQsVHVybmVyLDM0ODYyNwpIZW5yeSw1NTI4NjEsSm95Y2UsNDk5MzQwLERpYXosMzQ3NjM2Ck5hdGhhbiw1NDk0NDUsVmljdG9yaWEsNDg1Nzg2LFBhcmtlciwzMzYyMjEKRG91Z2xhcyw1NDgwMDgsT2xpdmlhLDQ4MTM2NCxDcnV6LDMzNDIwMQpaYWNoYXJ5LDU0MDY3NCxLZWxseSw0NzE2MjEsRWR3YXJkcywzMzI0MjMKUGV0ZXIsNTM4ODk5LENocmlzdGluYSw0NzExMDYsQ29sbGlucywzMjk3NzAKS3lsZSw0ODEyNTksTGF1cmVuLDQ3MDkwMixSZXllcywzMjc5MDQKV2FsdGVyLDQ2NDUyNSxKb2FuLDQ2NzQ1OSxTdGV3YXJ0LDMyNDk1NwpFdGhhbiw0NDQ5MTMsRXZlbHluLDQ2MTk1MixNb3JyaXMsMzE4ODg0CkplcmVteSw0MzkxNjYsSnVkaXRoLDQ0OTgwNSxNb3JhbGVzLDMxMTc3NwpIYXJvbGQsNDM1MjA1LE1lZ2FuLDQzNzY0NyxNdXJwaHksMzA4NDE3CktlaXRoLDQzMTQyNCxDaGVyeWwsNDM2ODgyLENvb2ssMzAyNTg5CkNocmlzdGlhbiw0Mjk5ODEsQW5kcmVhLDQzNjEyNixSb2dlcnMsMzAyMjYxClJvZ2VyLDQyODQxNyxIYW5uYWgsNDMxMTE3LEd1dGllcnJleiwyOTMyMTgKTm9haCw0MjcxNTcsTWFydGhhLDQyNjI0NyxPcnRpeiwyODY4OTkKR2VyYWxkLDQyNTI4NSxKYWNxdWVsaW5lLDQyMDUwNSxNb3JnYW4sMjg2MjgwCkNhcmwsNDI1MDg1LEZyYW5jZXMsNDE0Mjg5LENvb3BlciwyODA3OTEKVGVycnksNDIyMjEzLEdsb3JpYSw0MDg1NjUsUGV0ZXJzb24sMjc4Mjk3ClNlYW4sNDE5NjY2LEFubiw0MDczNzQsQmFpbGV5LDI3NzAzMApBdXN0aW4sNDE1MjExLFRlcmVzYSw0MDQyNTMsUmVlZCwyNzcwMzAKQXJ0aHVyLDQwNzgyNSxLYXRocnluLDQwMjYxMyxLZWxseSwyNjczOTQKTGF3cmVuY2UsNDAxOTczLFNhcmEsNDAwODg0LEhvd2FyZCwyNjQ4MjYKSmVzc2UsMzg3OTU0LEphbmljZSwzOTk1NDYsUmFtb3MsMjYzNDY0CkR5bGFuLDM4Mzg3OCxKZWFuLDM5OTQxNixLaW0sMjYyMzUyCkJyeWFuLDM4Mjg3NCxBbGljZSwzOTYzNjIsQ294LDI2MTIzMQpKb2UsMzgyNTAyLE1hZGlzb24sMzkzMjk3LFdhcmQsMjYwNDY0CkpvcmRhbiwzODIzMzIsRG9yaXMsMzgzMTU4LFJpY2hhcmRzb24sMjU5NzU4CkJpbGx5LDM3ODM2NCxBYmlnYWlsLDM4MTczOCxXYXRzb24sMjUyNTc5CkJydWNlLDM3NTU3OSxKdWxpYSwzODA4MzYsQnJvb2tzLDI1MTY2MwpBbGJlcnQsMzY3NzkwLEp1ZHksMzc3ODE1LENoYXZleiwyNTA4OTgKV2lsbGllLDM2MTEwNyxHcmFjZSwzNzc2NzgsV29vZCwyNTA3MTUKR2FicmllbCwzNTkwMDksRGVuaXNlLDM3MTI2OSxKYW1lcywyNDkzNzkKTG9nYW4sMzUwNDkwLEFtYmVyLDM3MDU3NyxCZW5uZXQsMjQ3NTk5CkFsYW4sMzUwMTI3LE1hcmlseW4sMzY5NzgxLEdyYXksMjQ2MTE2Ckp1YW4sMzQ3Mjg5LEJldmVybHksMzY5NjY5LE1lbmRvemEsMjQyNzcxCldheW5lLDMzNzI3NCxEYW5pZWxsZSwzNjg0ODUsUnVpeiwyMzgyMzQKUm95LDMzMjIxNCxUaGVyZXNhLDM2NzQyNixIdWdoZXMsMjM2MjcxClJhbHBoLDMzMDE0MixTb3BoaWEsMzY0MzgzLFByaWNlLDIzNTI1MQpSYW5keSwzMjgwODYsTWFyaWUsMzYxMzcxLEFsdmFyZXosMjMzOTgzCkV1Z2VuZSwzMjM3MTcsRGlhbmEsMzU5NjE3LENhc3RpbGxvLDIzMDQyMApWaW5jZW50LDMyMzE5NixCcml0dGFueSwzNTg4NTAsU2FuZGVycywyMzAzNzQKUnVzc2VsbCwzMTgyMTMsTmF0YWxpZSwzNTYzNzksUGF0ZWwsMjI5OTczCkVsaWphaCwzMTY1NzMsSXNhYmVsbGEsMzU0MjQ1LE15ZXJzLDIyOTg5NQpMb3VpcywzMTQ1MzcsQ2hhcmxvdHRlLDM0Nzc3MixMb25nLDIyOTM3NApCb2JieSwzMTM0MDMsUm9zZSwzNDQ2NTYsUm9zcywyMjkzNjgKUGhpbGlwLDMxMzM4NSxBbGV4aXMsMzQwNTg3LEZvc3RlciwyMjc3NjQKSm9obm55LDMwODI4OSxLYXlsYSwzNDA1MTEsSmltZW5leiwyMjcxMTgK";
            var data = atob(names);
            var ar = data.split("\n");
            var config = {
                "m": [],
                "f": [],
                "s": []
            };
            var m = 0,
                f = 0,
                s = 0;
            for (var i in ar) {
                var ars = ar[i].split(",");

                if (ars[0] > "") {
                    config.m.push({
                        name: ars[0],
                        from: m,
                        to: m += (1 * ars[1])
                    });

                    config.f.push({
                        name: ars[2],
                        from: f,
                        to: f += (1 * ars[3])
                    });

                    config.s.push({
                        name: ars[4],
                        from: s,
                        to: s += (1 * ars[5])
                    });
                }
            }
            config.f_max = f;
            config.m_max = m;
            config.s_max = s;

            var sx = Math.random() > male_percent ? "m" : "f";

            var cnt = 0;

            if (sx == "f")
                cnt = Math.floor(Math.random() * config.f_max);
            else
                cnt = Math.floor(Math.random() * config.m_max);

            getInRange = function(n, range) {
                for (var i in range) {
                    if (n >= range[i].from && n <= range[i].to)
                        return range[i].name;
                }
            }
            var nm = getInRange(cnt, config[sx]);
            var sm = getInRange(Math.floor(Math.random() * config.s_max), config.s);

            var st = states[Math.floor(Math.random() * states.length)];
            var p = [6, 3, 6, 6, 6, 6, 6, 6, 6, 3][Math.floor(Math.random() * 10)];
            updateMap(st);
            return '<text x="50%" y="20" alignment-baseline="middle" text-anchor="middle"><tspan font-weight="bold">' + nm + " " + sm[0] + ".</tspan> <tspan> from " + st + " just bought </tspan></text>" +
                '<text x="50%" y="35" alignment-baseline="middle" text-anchor="middle" font-weight="bold">' + p + " " + offer_unit + (p > 1 ? "s" : "") + offer_name + "</text>";
        };



        var show = function() {
            var ord_msg = host.querySelector(".message");
            var reel = host.querySelector(".orderreel");
            var icon = host.querySelector(".icon");
            var map = host.querySelector(".map");

            ord_msg.innerHTML = "";
            reel.style.transform = "scale(1)";
            reel.style.left = "2px";
            ord_msg.style.width = "240px";
            ord_msg.style.height = "60px";
            ord_msg.style.opacity = "1";
            ord_msg.innerHTML = '<svg viewBox="0 0 320 70" class="msg">' +
                getNextOrder() +
                '<image href="' + LUI.domain + '/statics/img/verified_purchase.png" x="85px" y="50"  width="150"/>' +
                '</svg>';
            map.style.display = "inline-block";
            icon.style.display = "none";


            var close = function() {

                ord_msg.innerHTML = "";
                reel.style.transform = "scale(0.45)";
                reel.style.left = "-15px";
                ord_msg.style.width = "0px";
                icon.style.display = "block";
                map.style.display = "none";

            };

            setTimeout(close, 13000);
        };

        setInterval(show, Math.random() * 10000 + 25000);



    }
    setTimeout(show, 7000);

};


LUI.started_timer = false;
LUI.start_vsltimer = function(host_selector) {
    if (!LUI.started_timer) {
        var offer_name = "product";

        if (LUI.setup && LUI.setup.offer_name)
            offer_name = LUI.setup.offer_name

        var timer_element = document.createRange().createContextualFragment(
            '<style>' +
            '.vsl_timer article {' +
            '	width: auto;' +
            '	text-align: center;' +
            '	background-color: inherit;' +
            '	border-radius: 10px!important;' +
            '	margin: 15px auto 20px;' +
            '	padding: 5px;' +
            '	overflow: hidden;' +
            '	box-shadow: 3px 3px 10px #ccc;' +
            '}' +
            '.vsl_timer article h2 {' +
            '	font-weight: bold;' +
            '	line-height: 1.4;' +
            '	padding: 15px;' +
            '	padding-bottom: 0!important;' +
            '	color: #000;' +
            '}' +
            '.vsl_timer article .count {' +
            '	padding: 5px;' +
            '}' +
            '.vsl_timer article #timer{' +
            '	padding-bottom: 5px;' +
            '	padding-top: 0!important;' +
            '	margin-top: -10px;' +
            '	color: red;' +
            '	font-size : 54px;' +
            '	background-color: inherit;' +
            '	border-radius: 2px;' +
            '}' +
            '</style>' +
            '<div class="container vsl_timer">' +
            '<div class="row">' +
            '		<div class="col-12">' +
            '		  <article class="clock" id="model3">' +
            '		  <h2 class="clock-headline"><b>Claim Your Discounted ' + offer_name + '<br>While Stocks Last!</b></h2>' +
            '			<div class="count">' +
            '			<b><h2 class="bold timer" id="timer">30:00</h2></b>' +
            '		  </div>' +
            '		  </article>' +
            '		</div>' +
            '</div>' +
            '</div>' +
            '<script>'
        );
        var host = document.querySelector(host_selector);

        host.appendChild(timer_element);
        LUI.started_timer = true
        var timer = document.querySelector("article .clock-headline");
        timer.innerHTML = "<b>Claim Your Discounted " + offer_name + "<br>While Stocks Last!</b>";

        var secpass = function() {
            'use strict';

            var min = Math.floor(sec / 60),
                remSec = sec % 60;

            if (remSec < 10) {

                remSec = '0' + remSec;

            }
            if (min < 10) {

                min = '0' + min;

            }
            countDiv.innerHTML = min + ":" + remSec;

            if (sec > 0) {

                sec = sec - 1;

            } else {

                clearInterval(countDown);
                countDiv.innerHTML = '';
            }
        }
        var sec = 1800;
        var countDiv = document.querySelector("article .timer");
        var countDown = setInterval(secpass, 1000);

    }

}

LUI.started_ordbtn = false;
LUI.start_ordbtn = function(host_selector) {
    if (!LUI.started_ordbtn) {
        var elm = document.createElement("SPAN");
        var rto_element = document.createRange().createContextualFragment('<style>' +
            '.buy-container{' +
            '	padding: 35px 10px!important;' +
            '	position: fixed;' +
            '	top: 0;' +
            '	left: 0;' +
            '	width: 100%;' +
            '	z-index: 999;' +
            '}' +
            '' +
            '.buy-container .buy-action{' +
            '   float: right;' +
            '   display: block;' +
            '}' +
            '.buy-container .action-btn{' +
            '	background: linear-gradient(180deg,  #FFDE00 0%, #FF8700 100%);' +
            '	border-radius: 10px!important;' +
            '	color: #000 !important;' +
            '	padding: 15px;' +
            '	font-size: 16px!important;' +
            '	font-family: Arial;' +
            '	display: inline-block;' +
            '	font-weight: 700 !important;' +
            '	transition: transform .3s;' +
            '	margin-left: auto;' +
            '	margin-right: auto;' +
            '	float: none;' +
            '	box-shadow: 1px 2px 22px rgb(0 0 0 / 20%);' +
            '	border-radius: 0px;' +
            '	text-decoration: none!important;' +
            '}' +
            '.buy-container .action-btn:hover{' +
            '	transform: scale(1.05);' +
            '	transition: transform .3s;' +
            '}' +
            '' +
            '@media screen ' +
            'and (max-device-width: 820px) { ' +
            '' +
            '.buy-container{' +
            '   display: none!important;' +
            '}' +
            '.buy-container .buy-action{' +
            '	display: none!important;' +
            '}' +
            '.buy-container .action-btn{' +
            '	display: none!important;' +
            '}' +
            '}' +
            '</style>' +
            '' +
            '<div class="buy-container" id="rto_btn" style="display:none;">' +
            '<div class="buy-action">' +
            '<a href="#btn-cta" class="action-btn">READY TO ORDER?</a>' +
            '</div>' +
            '</div>' +
            '<script>');
        var host = document.querySelector(host_selector);

        host.appendChild(rto_element);

        LUI.attachGEvents(host);
        var rto = document.querySelector(".buy-container");
        rto.style.display = "block";
        LUI.started_ordbtn = true;
    }
}



LUI.myGoogleEvent = function(setup) {
    // console.log(this);

    if (setup.target) {
        window[gtm_datalayer].push({
            "event": "lion-click",
            "lion-label": "" + this.getAttribute("g-evt")
        });
    } else {
        window[gtm_datalayer].push({
            "event": "lion-video",
            "lion-label": "" + setup.indexNow,
            "lion-host": window.location.hostname,
            "lion-vsl": window.UPplayer.config_setup
        });
    }
}

if (LUI.tracking && LUI.tracking == "conversion") {
    window[gtm_datalayer].push({
        "event": "conversion"
    });
}

LUI.attachGEvents = function(scope) {
    // attach g-event management
    var list = scope.querySelectorAll("[g-evt]");

    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", LUI.myGoogleEvent);
    }
}


LUI.getFlowID = function() {
    var flow_id = LUI.getURLParameter("item");
    if (flow_id == null)
        flow_id = LUI.getURLParameter("ax_item");
    if (isNaN(flow_id)) {
        for (var id in LUI.setup) {
            if (LUI.setup[id]["codename"] == flow_id)
                flow_id = id;
        }
    }
    return flow_id;
}

LUI.getProduct = function($type, $id) {
    var flow_id = LUI.getFlowID();
    var sitem = ($type == "fe") ? $id : LUI.setup.flow[flow_id].flow[$type];
    if (typeof sitem == "object")
        sitem = sitem["item"];
    return sitem;
}

LUI.replace = function(base, config) {
    if (typeof config == "object") {
        for (var i in config) {
            base = base.replace((config[i][0][0] == "/") ? config[i][0] : new RegExp(config[i][0]), config[i][1]);
        }

        return base;
    }
    return config;
}

LUI.date = {};
LUI.date.setYear = function(obj, year) {
    var obj_year = obj.getFullYear();

    if (match = /([+-]*)([0-9]+)/g.exec(year)) {
        var sign = match[1];
        var value = parseInt(match[2]);

        if (sign == "+") {
            obj.setFullYear(obj_year + value);
        } else if (sign == "-") {
            obj.setFullYear(obj_year - value);
        } else {
            obj.setFullYear(value);
        }
    }
}

LUI.date.setMonth = function(obj, month) {
    var obj_month = obj.getMonth();

    if (match = /([+-]*)([0-9]+)/g.exec(month)) {
        var sign = match[1];
        var value = parseInt(match[2]);

        if (sign == "+") {
            obj.setMonth(obj_month + value);
        } else if (sign == "-") {
            obj.setMonth(obj_month - value);
        } else {
            obj.setMonth(value - 1);
        }
    }
}


LUI.date.setDay = function(obj, day) {
    var obj_day = obj.getDay(); // week day!
    var obj_date = obj.getDate(); // month day
    if (match = /([+-]*)([0-9]+)/g.exec(day)) {
        var sign = match[1];
        var value = parseInt(match[2]);

        if (sign == "+") {
            obj.setDate(obj_date + value);
        } else if (sign == "-") {
            obj.setDate(obj_date - value);
        } else {
            obj.setDate(value);
        }
    } else if (match = /(MO|TU|WE|TH|FR|SA|SU)/ig.exec(day)) {
        var day = {
            "MO": 1,
            "TU": 2,
            "WE": 3,
            "TH": 4,
            "FR": 5,
            "SA": 6,
            "SO": 0
        }[match[1]];

        obj.setDate(1);

        while (obj.getDay() !== day) {
            obj.setDate(obj.getDate() + 1);
        }
    }
}

/**************************************
 * Date class extension
 * 
 */
// Provide month names
Date.prototype.getMonthName = function() {
    var month_names = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return month_names[this.getMonth()];
}

// Provide month abbreviation
Date.prototype.getMonthAbbr = function() {
    var month_abbrs = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    return month_abbrs[this.getMonth()];
}

// Provide full day of week name
Date.prototype.getDayFull = function() {
    var days_full = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    return days_full[this.getDay()];
};

// Provide full day of week name
Date.prototype.getDayAbbr = function() {
    var days_abbr = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thur',
        'Fri',
        'Sat'
    ];
    return days_abbr[this.getDay()];
};

// Provide the day of year 1-365
Date.prototype.getDayOfYear = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - onejan) / 86400000);
};

// Provide the day suffix (st,nd,rd,th)
Date.prototype.getDaySuffix = function() {
    var d = this.getDate();
    var sfx = ["th", "st", "nd", "rd"];
    var val = d % 100;

    return (sfx[(val - 20) % 10] || sfx[val] || sfx[0]);
};

// Provide Week of Year
Date.prototype.getWeekOfYear = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

// Provide if it is a leap year or not
Date.prototype.isLeapYear = function() {
    var yr = this.getFullYear();

    if ((parseInt(yr) % 4) == 0) {
        if (parseInt(yr) % 100 == 0) {
            if (parseInt(yr) % 400 != 0) {
                return false;
            }
            if (parseInt(yr) % 400 == 0) {
                return true;
            }
        }
        if (parseInt(yr) % 100 != 0) {
            return true;
        }
    }
    if ((parseInt(yr) % 4) != 0) {
        return false;
    }
};

// Provide Number of Days in a given month
Date.prototype.getMonthDayCount = function() {
    var month_day_counts = [
        31,
        this.isLeapYear() ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];

    return month_day_counts[this.getMonth()];
}

// format provided date into this.format format
Date.prototype.format = function(dateFormat) {
    // break apart format string into array of characters
    dateFormat = dateFormat.split("");

    var date = this.getDate(),
        month = this.getMonth(),
        hours = this.getHours(),
        minutes = this.getMinutes(),
        seconds = this.getSeconds();
    // get all date properties ( based on PHP date object functionality )
    var date_props = {
        d: date < 10 ? '0' + date : date,
        D: this.getDayAbbr(),
        j: this.getDate(),
        l: this.getDayFull(),
        S: this.getDaySuffix(),
        w: this.getDay(),
        z: this.getDayOfYear(),
        W: this.getWeekOfYear(),
        F: this.getMonthName(),
        m: month < 10 ? '0' + (month + 1) : month + 1,
        M: this.getMonthAbbr(),
        n: month + 1,
        t: this.getMonthDayCount(),
        L: this.isLeapYear() ? '1' : '0',
        Y: this.getFullYear(),
        y: this.getFullYear() + ''.substring(2, 4),
        a: hours > 12 ? 'pm' : 'am',
        A: hours > 12 ? 'PM' : 'AM',
        g: hours % 12 > 0 ? hours % 12 : 12,
        G: hours > 0 ? hours : "12",
        h: hours % 12 > 0 ? hours % 12 : 12,
        H: hours,
        i: minutes < 10 ? '0' + minutes : minutes,
        s: seconds < 10 ? '0' + seconds : seconds
    };

    // loop through format array of characters and add matching data else add the format character (:,/, etc.)
    var date_string = "";
    for (var i = 0; i < dateFormat.length; i++) {
        var f = dateFormat[i];
        if (f.match(/[a-zA-Z]/g)) {
            date_string += date_props[f] ? date_props[f] : '';
        } else {
            date_string += f;
        }
    }

    return date_string;
};
/*
 *
 * END - Date class extension
 * 
 ************************************/

console.log("adasdas");
$evrtrack_px_url = "";

try {
    LUI.setup = JSON.parse(atob(LUI.set));
    var afop = LUI.getURLParameter("affop");
    if (afop > "" && typeof LUI.setup.aff_hops != "undefined" && typeof LUI.setup.aff_hops[afop] != "undefined") {
        var params = LUI.getURLParameter();
        delete params.affop;
        var ar = window.location.pathname.split("/");
        ar.shift();
        ar.pop();
        ar.push(LUI.setup.aff_hops[afop] + ".php");
        window.location.replace(window.location.protocol + "//" + window.location.hostname + "/" + ar.join("/") + "?" + new URLSearchParams(params).toString());
    }
} catch (e) {};


window.addEventListener("DOMContentLoaded", function() {


    // process product images
    elements = document.querySelectorAll("[filter]");
    for (var i = 0; i < elements.length; i++) {
        var item = elements[i];
        var ar = item.getAttribute("filter").split(";");
        for (var j in ar) {
            var sar = ar[j].split("=");

            var param = LUI.getURLParameter(sar[0]);
            if (param > "" && param == sar[1]) {
                item.style.display = "block";
                break;
            }
        }
    }

    // process svgize
    var tosvg = document.querySelectorAll("[svgize]");
    for (var i = 0; i < tosvg.length; i++) {
        var inner_html = tosvg[i].innerHTML;
        var lines = inner_html.split("<br>");
        var y = 0;
        var y_step = 1 * tosvg[i].getAttribute("svgize");
        var y_dist = 2;
        var x = 500;
        var final_html = "";

        for (var k in lines) {
            y += y_step;
            final_html += '<text x="50%" y="' + y + '" text-anchor="middle" class="vsl-headline">' + lines[k].replace(/span/g, "tspan") + '</text>';
            y += y_dist;
        }

        tosvg[i].innerHTML = '<svg viewBox="0 0 550 ' + (y + 8) + '">' + final_html + "</svg>";

        var adjust = function(myelm) {
            setTimeout(function() {
                if (myelm.getBBox().width != 0) {
                    var view_box = myelm.getAttribute("viewBox").split(" ");
                    view_box[3] = myelm.getBBox().height;
                    view_box[2] = myelm.getBBox().width + 5;
                    myelm.setAttribute("viewBox", view_box.join(" "));
                } else {
                    adjust(myelm);
                }

            }, "100");
        }
        adjust(tosvg[i].children[0]);
    }

    // process dates
    elements = document.querySelectorAll("[date]");
    for (var i = 0; i < elements.length; i++) {
        var item = elements[i];

        var year = item.getAttribute("year");
        var d = new Date();
        if (year > "")
            LUI.date.setYear(d, year);

        var month = item.getAttribute("month");
        if (month > "")
            LUI.date.setMonth(d, month);

        var day = item.getAttribute("day");
        if (day > "")
            LUI.date.setDay(d, day);

        var format = item.getAttribute("format");
        if (format > "")
            item.innerHTML = d.format(format);
        else
            item.innerHTML = d;
    }

    if (LUI.set > "") {
        var is_mobile = LUI.isMobile();

        LUI.setup = JSON.parse(atob(LUI.set));


        var afop = LUI.getURLParameter("affop");
        if (afop > "" && typeof LUI.setup.aff_hops != "undefined" && typeof LUI.setup.aff_hops[afop] != "undefined") {
            var params = LUI.getURLParameter();

            delete params.affop;

            var ar = window.location.pathname.split("/");
            ar.shift();
            ar.pop();
            ar.push(LUI.setup.aff_hops[afop] + ".php");
            window.location.replace(window.location.protocol + "//" + window.location.hostname + "/" + ar.join("/") + "?" + new URLSearchParams(params).toString());
            return;
        }
        document.body.style.display = "block";

        // process all products
        var elements = document.querySelectorAll("span[replace]");
        var flow_id = LUI.getFlowID();

        //var item_id = "";
        //if(flow_id > "" )
        //	item_id = LUI.setup.flow[flow_id].flow[LUI.page];

        // process product mentions
        elements.forEach(function(item) {
            var sitem = (item.getAttribute("type") == "fe") ? (flow_id > "" ? flow_id : item.getAttribute("item")) : LUI.setup.flow[flow_id].flow[item.getAttribute("type")];
            if (typeof sitem == "object")
                sitem = sitem["item"];
            item.parentNode.replaceChild(document.createTextNode(LUI.setup[sitem][item.getAttribute("parameter")]), item);
        });

        // process product images
        elements = document.querySelectorAll("img[productimage]");
        elements.forEach(function(item) {
            var img_name = item.getAttribute("img");
            if (!(img_name > ""))
                img_name = "image";
            var sitem = (item.getAttribute("type") == "fe") ? (flow_id > "" ? flow_id : item.getAttribute("productimage")) : LUI.setup.flow[flow_id].flow[item.getAttribute("type")];
            if (typeof sitem == "object")
                sitem = sitem["item"];
            item.setAttribute("src", LUI.setup[sitem][img_name]);
        });


        // process buy links

        // process vtid
        var vtid = LUI.getURLParameter("vtid");
        if (vtid <= "") {
            vtid = LUI.getCookie("vtid");
        } else {
            LUI.setCookie("vtid", vtid);
        }


        // pasrams for buylinks
        var params = new URLSearchParams(window.location.search);

        if (vtid > "")
            params.set("vtid", vtid);
        var gwait = 0;
        var makeLinks = function() {
            var gcid = LUI.getCookie("_ga");
            gwait++;

            if (gcid > "" || gwait > 10) {
                if (gcid > "") {
                    var gcidar = gcid.split(".");
                    gcidar.shift();
                    gcidar.shift();
                    gcid = gcidar.join(".");
                }
                clearInterval(mklinterval);

                elements = document.querySelectorAll("[buylink]");
                elements.forEach(function(item) {

                    var sparams = new URLSearchParams();
                    // copy
                    params.forEach(function(value, key) {
                        if (key && key != 'null')
                            sparams.set(key, value);
                    })

                    var added_params = new URLSearchParams(item.getAttribute("addedparams"));
                    added_params.forEach(function(value, key) {
                        if (key && key != 'null')
                            sparams.set(key, value);
                    })

                    if (flow_id > "" && LUI.setup.links[item.getAttribute("buylink")][flow_id] != undefined) {
                        // upsell links
                        item.setAttribute("href", LUI.setup.links[item.getAttribute("buylink")][flow_id] + "&" + sparams.toString() + "&_ga=" + gcid);
                    } else {
                        // front end links
                        item.setAttribute("href", LUI.setup.links[item.getAttribute("buylink")][is_mobile ? "mobile" : "desktop"] + "&" + sparams.toString() + "&_ga=" + gcid);
                    }
                });

                // we have correct vtid value
                if (vtid > "") {
                    // get the avatar and replace the image with the correct one!
                    if (LUI.vtid_map[vtid] !== undefined) {
                        for (var conf in LUI.vtid_map[vtid]) {
                            var ar = conf.split("@");

                            var elms = document.querySelectorAll(ar[0]);
                            for (var i = 0; i < elms.length; i++) {
                                var elm = elms[i];
                                if (elm !== null) {
                                    if (ar[1] == "_text") {
                                        elm.innerHTML = LUI.replace(elm.innerHTML, LUI.vtid_map[vtid][conf]);
                                    } else {
                                        elm.setAttribute(ar[1], LUI.replace(elm.getAttribute(ar[1]), LUI.vtid_map[vtid][conf]));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        var mklinterval = setInterval(makeLinks, 100);

        // process nmx
        var nmx = LUI.getURLParameter("nmx");
        if (nmx == "1") {
            var advertorial = LUI.createElementFromHTML("<div class='text-center pt-3 advertorial' id='advertorial' ><span style='letter-spacing: 0.2rem;'>advertorial</span></div>");
            var container = document.querySelector(".atf_wrapper");
            container.parentNode.insertBefore(advertorial, container);
        }

        // process popz
        var popz = LUI.getURLParameter("popz");

        if (typeof video_setup !== "undefined" && typeof video_config !== "undefined") {
            var v_setup = video_setup;
            var v_config = video_config;

            if (popz == "1" && v_setup["popz"]) {
                v_setup = v_setup["popz"];
                v_config = v_config["popz"];
            } else if (typeof v_setup["default"] !== "undefined") {
                v_setup = v_setup["default"];
                v_config = v_config["default"];
            }
            new UPManager(v_setup, v_config);
        }

        // compose conversion pixel
        let conversion_value = 1;
        let get_item = "";
        let affiliate_id = "";
        let aff = LUI.getCookie("aff");
        let aff_id = "";

        if (LUI.getURLParameter("aff_id")) // BG - pass via cookie
        {
            LUI.setCookie("aff", LUI.getURLParameter("aff_id"));
        } else if (LUI.getURLParameter("aff")) // DS - pass via cookie
        {
            LUI.setCookie("aff", LUI.getURLParameter("aff_id"));
        } else {
            if (LUI.getURLParameter("cbaffi") > "") {
                aff = aff_id = LUI.getURLParameter("cbaffi"); // CB
                get_item = LUI.getURLParameter("item"); // CB
            } else if (LUI.getURLParameter("hop") > "") {
                aff = aff_id = LUI.getURLParameter("hop"); // CB
            } else if (LUI.getURLParameter("aff_id")) {
                aff_id = LUI.getCookie("aff"); // BG
                get_item = LUI.getURLParameter("ax_item"); // BG
            } else if (LUI.getURLParameter("aff")) {
                aff_id = LUI.getCookie("aff");; // DS
                get_item = LUI.getURLParameter("ax_item"); // DS
                // get_item = LUI.getURLParameter("digistore_initial_product_id"); // DS?
            }
        }


        if (aff_id > "") {
            affiliate_id = aff_id;
            LUI.setCookie("aff", aff_id);

        } else if (aff > "" && get_item > "") {
            affiliate_id = aff;

            if (get_item > "" && typeof LUI.setup[get_item]["price"] != "undefined") {
                conversion_value = LUI.setup[get_item]["price"];
            }
        }

        if (aff > "" && LUI.tracking > "") {
            var scr = document.createElement("SCRIPT");
            scr.setAttribute("src", "https://evrtrack.com/basepixel.php?p=" + LUI.setup["offer_id"] + "&affid=" + aff + "&value=" + conversion_value + "&type=" + LUI.tracking);
            document.head.appendChild(scr);
        }
    }
    document.body.style.display = "block";
    LUI.attachGEvents(document);
});