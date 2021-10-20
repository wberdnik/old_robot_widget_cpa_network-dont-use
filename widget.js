/*
This is very old robot widget of CPA network Leadinka.com
It is not using now at production

*/

leadinkawgtnew = new LeadinkaWidget();


function LeadinkaWidget() {
    "use strict";


    if (
        !("classList" in document.createElement("_"))
        || document.createElementNS
        && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))
    ) {/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.2.20171210
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

        /*global self, document, DOMException */

        /**! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js **/

        (function (view) {

            "use strict";

            if (!('Element' in view))
                return;

            var
                classListProp = "classList"
                , protoProp = "prototype"
                , elemCtrProto = view.Element[protoProp]
                , objCtr = Object
                , strTrim = String[protoProp].trim || function () {
                    return this.replace(/^\s+|\s+$/g, "");
                }
                , arrIndexOf = Array[protoProp].indexOf || function (item) {
                    var
                        i = 0
                        , len = this.length
                    ;
                    for (; i < len; i++) {
                        if (i in this && this[i] === item) {
                            return i;
                        }
                    }
                    return -1;
                }
                // Vendors: please allow content code to instantiate DOMExceptions
                , DOMEx = function (type, message) {
                    this.name = type;
                    this.code = DOMException[type];
                    this.message = message;
                }
                , checkTokenAndGetIndex = function (classList, token) {
                    if (token === "") {
                        throw new DOMEx(
                            "SYNTAX_ERR"
                            , "The token must not be empty."
                        );
                    }
                    if (/\s/.test(token)) {
                        throw new DOMEx(
                            "INVALID_CHARACTER_ERR"
                            , "The token must not contain space characters."
                        );
                    }
                    return arrIndexOf.call(classList, token);
                }
                , ClassList = function (elem) {
                    var
                        trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
                        , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
                        , i = 0
                        , len = classes.length
                    ;
                    for (; i < len; i++) {
                        this.push(classes[i]);
                    }
                    this._updateClassName = function () {
                        elem.setAttribute("class", this.toString());
                    };
                }
                , classListProto = ClassList[protoProp] = []
                , classListGetter = function () {
                    return new ClassList(this);
                }
            ;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
            DOMEx[protoProp] = Error[protoProp];
            classListProto.item = function (i) {
                return this[i] || null;
            };
            classListProto.contains = function (token) {
                return ~checkTokenAndGetIndex(this, token + "");
            };
            classListProto.add = function () {
                var
                    tokens = arguments
                    , i = 0
                    , l = tokens.length
                    , token
                    , updated = false
                ;
                do {
                    token = tokens[i] + "";
                    if (!~checkTokenAndGetIndex(this, token)) {
                        this.push(token);
                        updated = true;
                    }
                } while (++i < l);

                if (updated) {
                    this._updateClassName();
                }
            };
            classListProto.remove = function () {
                var
                    tokens = arguments
                    , i = 0
                    , l = tokens.length
                    , token
                    , updated = false
                    , index
                ;
                do {
                    token = tokens[i] + "";
                    index = checkTokenAndGetIndex(this, token);
                    while (~index) {
                        this.splice(index, 1);
                        updated = true;
                        index = checkTokenAndGetIndex(this, token);
                    }
                } while (++i < l);

                if (updated) {
                    this._updateClassName();
                }
            };
            classListProto.toggle = function (token, force) {
                var
                    result = this.contains(token)
                    , method = result ?
                    force !== true && "remove"
                    :
                    force !== false && "add"
                ;

                if (method) {
                    this[method](token);
                }

                if (force === true || force === false) {
                    return force;
                } else {
                    return !result;
                }
            };
            classListProto.replace = function (token, replacement_token) {
                var index = checkTokenAndGetIndex(token + "");
                if (~index) {
                    this.splice(index, 1, replacement_token);
                    this._updateClassName();
                }
            };
            classListProto.toString = function () {
                return this.join(" ");
            };

            if (objCtr.defineProperty) {
                var classListPropDesc = {
                    get: classListGetter
                    , enumerable: true
                    , configurable: true
                };
                try {
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                } catch (ex) { // IE 8 doesn't support enumerable:true
                    // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
                    // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
                    if (ex.number === undefined || ex.number === -0x7FF5EC54) {
                        classListPropDesc.enumerable = false;
                        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                    }
                }
            } else if (objCtr[protoProp].__defineGetter__) {
                elemCtrProto.__defineGetter__(classListProp, classListGetter);
            }

        }(self));

    }


    /**
     * Base64 encode/decode
     * http://www.webtoolkit.info
     **/

    this.Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        //метод для раскодировки из base64
        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 !== 64) output = output + String.fromCharCode(chr2);
                if (enc4 !== 64) output = output + String.fromCharCode(chr3);

            }
            return _utf8_decode(output);

            //метод для раскодировки из urf8
            function _utf8_decode(utftext) {
                var string = "";
                var i = 0;
                var c = 0, c2 = 0, c3 = 0;
                while (i < utftext.length) {
                    c = utftext.charCodeAt(i);
                    if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                    } else if ((c > 191) && (c < 224)) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                        i += 2;
                    } else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                        i += 3;
                    }
                }
                return string;
            }
        }
    };


    this.systemVars = {
        semaphoreAnimation: 0,
        AnimCompleted: 0,
        semaphoreAnimEnd: 0,
        main_robot: 0,
        arr_ballons: [],
    };
    var _l = this, cy = _l.systemVars, portH = 360, barH = 175, leedurl; //portH - высота Portlet barH - высота ползунка
    _l.resorces = {
        CssFork: 'aHRtbHtsaW5lLWhlaWdodDoxLjE1Oy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Ym9keXttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7b3BhY2l0eToxIWltcG9ydGFudH1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDpvYmplY3RzfWRmbntmb250LXN0eWxlOml0YWxpY31pbWd7Ym9yZGVyLXN0eWxlOm5vbmV9c3ZnOm5vdCg6cm9vdCl7b3ZlcmZsb3c6aGlkZGVufWlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luOjB9aW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1zZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1odG1sIFt0eXBlPSJidXR0b24iXSxbdHlwZT0icmVzZXQiXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPSJidXR0b24iXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT0icmVzZXQiXTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9W3R5cGU9ImJ1dHRvbiJdOi1tb3otZm9jdXNyaW5nLFt0eXBlPSJyZXNldCJdOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fXRleHRhcmVhe292ZXJmbG93OmF1dG99W3R5cGU9ImNoZWNrYm94Il0sW3R5cGU9InJhZGlvIl17Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT0ibnVtYmVyIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9Im51bWJlciJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfVt0eXBlPSJzZWFyY2giXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9InNlYXJjaCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFt0eXBlPSJzZWFyY2giXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fVtoaWRkZW5de2Rpc3BsYXk6bm9uZX0qe2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LXN0eWxlOm5vcm1hbDtmb250LWZhbWlseTonUm9ib3RvJywnSGVsdmV0aWNhIE5ldWUnLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmIWltcG9ydGFudDtmb250LXdlaWdodDozMDA7dGFibGUtbGF5b3V0OmF1dG99KiBpbWd7cGFkZGluZy1ib3R0b206MH1Aa2V5ZnJhbWVzIGJ1dHRvbkJsaWt7MCV7bGVmdDotMTAwcHg7dG9wOjUwJX0zMCV7bGVmdDoxMDAlO3RvcDoxMDAlfTMwLjAwMDEle2xlZnQ6LTEwMHB4O3RvcDo1MCV9MTAwJXtsZWZ0Oi0xMDBweDt0b3A6NTAlfX0ubG0td3JhcHttaW4td2lkdGg6YXV0bzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCU7dmVydGljYWwtYWxpZ246bWlkZGxlO3BhZGRpbmc6MCAyMHB4fS5taWJ7Y29sb3I6IzAwMH0ubWl3aHtjb2xvcjojZmZmfS5hc3Rlcmlza3tjb2xvcjojNzU3NTc1O2ZvbnQtc2l6ZToxNHB4fS5sbS10ZXh0YXJlYS13cmFwZXJ7d2lkdGg6MTAwJTttYXJnaW4tYm90dG9tOjEwcHh9LmxtLXRleHRhcmVhLXdyYXBlciAubG0tbXNne3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztyZXNpemU6bm9uZTtoZWlnaHQ6MTUycHghaW1wb3J0YW50O21heC1oZWlnaHQ6MTUycHghaW1wb3J0YW50O21pbi1oZWlnaHQ6MTUycHghaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgI2Q3ZDlkZTtib3gtc2hhZG93Om5vbmU7YmFja2dyb3VuZDpub25lO2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtd2VpZ2h0OjMwMDtyZXNpemU6bm9uZTtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxOHB4O3BhZGRpbmc6MTJweCAxNnB4O2ZvbnQtZmFtaWx5OidSb2JvdG8nLCdIZWx2ZXRpY2EgTmV1ZScsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjJzLGJveC1zaGFkb3cgLjJzO292ZXJmbG93OmF1dG99LmxtLXRleHRhcmVhLXdyYXBlciAubG0tbXNnOmZvY3Vze2JvcmRlci1jb2xvcjojNEU5RkZGO291dGxpbmU6bm9uZX0ubG0tdGV4dGFyZWEtd3JhcGVyIC5sbS1tc2c6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLmxtLXRleHRhcmVhLXdyYXBlciAubG0tbXNnOjotbW96LXBsYWNlaG9sZGVyLC5sbS10ZXh0YXJlYS13cmFwZXIgLmxtLW1zZzotbW96LXBsYWNlaG9sZGVyLC5sbS10ZXh0YXJlYS13cmFwZXIgLmxtLW1zZzotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzdhN2E3YTtvcGFjaXR5OjF9LmxtLXByb21pc2V7cGFkZGluZy1sZWZ0OjMwcHg7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MzBweDtjb2xvcjojMDAwO2ZvbnQtd2VpZ2h0OjMwMDttYXJnaW4tYm90dG9tOjIwcHh9LmxtLWg0LC5sbS1iZWF0e21hcmdpbjowO3BhZGRpbmc6MDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMHB4O3dvcmQtc3BhY2luZzpjYWxjKC0xcHgpO3dvcmQtd3JhcDpicmVhay13b3JkfS5sbS1wb3J0bGV0X2hlYWQsLmxtLW1zZy1oZWFke2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0byAyNXB4O3dpZHRoOjEwMCV9LmxtLXBvcnRsZXRfaGVhZCAubG0taDMsLmxtLW1zZy1oZWFkIC5sbS1oM3ttYXJnaW46MCAwIDRweDtwYWRkaW5nOjA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0OjIycHg7Y29sb3I6IzAwMDt3b3JkLXdyYXA6YnJlYWstd29yZH0ubG0tcG9ydGxldF9oZWFkIC5sbS13cmFwLXBob3RvLC5sbS1tc2ctaGVhZCAubG0td3JhcC1waG90b3twb3NpdGlvbjpyZWxhdGl2ZX0ubG0tcG9ydGxldF9oZWFkIC5sbS13cmFwLXBob3RvOmJlZm9yZSwubG0tbXNnLWhlYWQgLmxtLXdyYXAtcGhvdG86YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6Jyc7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUJ3Y21WelpYSjJaVUZ6Y0dWamRGSmhkR2x2UFNKNFRXbGtXVTFwWkNJZ2QybGtkR2c5SWpndU9EZ2lJR2hsYVdkb2REMGlOaTQzT0RFaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TGpnNElEWXVOemd4SWo0S0lDQThaR1ZtY3o0S0lDQWdJRHh6ZEhsc1pUNEtJQ0FnSUNBZ0xtTnNjeTB4SUhzS0lDQWdJQ0FnSUNCbWFXeHNPaUFqWm1abU93b2dJQ0FnSUNBZ0lHWnBiR3d0Y25Wc1pUb2daWFpsYm05a1pEc0tJQ0FnSUNBZ2ZRb2dJQ0FnUEM5emRIbHNaVDRLSUNBOEwyUmxabk0rQ2lBZ1BIQmhkR2dnWkQwaVRUUXVNREE1TERZdU5EWXlJRU16TGpZd05pdzJMamczTlNBeUxqazFNU3cyTGpnM05TQXlMalUwT0N3MkxqUTJNaUJNTUM0eU9EUXNOQzR4TkRRZ1F5MHdMakV5TUN3ekxqY3pNQ0F0TUM0eE1qQXNNeTR3TmpBZ01DNHlPRFFzTWk0Mk5EY2dRekF1TmpnM0xESXVNak0wSURFdU16UXhMREl1TWpNMElERXVOelExTERJdU5qUTNJRXd6TGpBNU5DdzBMakF5T0NCRE15NHhPVFlzTkM0eE16SWdNeTR6TmpFc05DNHhNeklnTXk0ME5qTXNOQzR3TWpnZ1REY3VNVEUyTERBdU1qZzRJRU0zTGpVeU1Dd3RNQzR4TWpVZ09DNHhOelFzTFRBdU1USTFJRGd1TlRjM0xEQXVNamc0SUVNNExqYzNNU3d3TGpRNE5pQTRMamc0TUN3d0xqYzFOaUE0TGpnNE1Dd3hMakF6TmlCRE9DNDRPREFzTVM0ek1UY2dPQzQzTnpFc01TNDFPRFlnT0M0MU56Y3NNUzQzT0RRZ1REUXVNREE1TERZdU5EWXlJRm9pSUdOc1lYTnpQU0pqYkhNdE1TSXZQZ284TDNOMlp6ND0pIDUwJSA1MCUgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZToxMnB4O2JvcmRlcjoycHggc29saWQgI2ZmZjt3aWR0aDoyNXB4O2hlaWdodDoyNXB4O2JvdHRvbTotNnB4O3JpZ2h0OjA7Ym9yZGVyLXJhZGl1czo1MCV9LmxtLXBvcnRsZXRfaGVhZCAubG0td3JhcC1waG90byBpbWcsLmxtLW1zZy1oZWFkIC5sbS13cmFwLXBob3RvIGltZ3tkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7b2JqZWN0LWZpdDpjb3Zlcn0ubG0tbXNnLWhlYWQgaDN7bWFyZ2luLWJvdHRvbTowfS5sbS1wb3J0bGV0e3dpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206MjRweH0ubG0tcG9ydGxldCBpe3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE0cHg7bGVmdDoxMnB4O3otaW5kZXg6OTk5OX0ubG0tcG9ydGxldCAudGltZV96b25lX3NlbGVjdHtkaXNwbGF5Om5vbmU7YmFja2dyb3VuZDojZmZmIHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa05oY0dGZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpQ2drZ2QybGtkR2c5SWpJNU1pNHpOakp3ZUNJZ2FHVnBaMmgwUFNJeU9USXVNell5Y0hnaUlIWnBaWGRDYjNnOUlqQWdNQ0F5T1RJdU16WXlJREk1TWk0ek5qSWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lESTVNaTR6TmpJZ01qa3lMak0yTWpzaUNna2dlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0lnWm1sc2JEMGlJMlEzWkRsa1pTSStQR2MrQ2drOGNHRjBhQ0JrUFNKTk1qZzJMamt6TlN3Mk9TNHpOemRqTFRNdU5qRTBMVE11TmpFM0xUY3VPRGs0TFRVdU5ESTBMVEV5TGpnME9DMDFMalF5TkVneE9DNHlOelJqTFRRdU9UVXlMREF0T1M0eU16TXNNUzQ0TURjdE1USXVPRFVzTlM0ME1qUUtDUWxETVM0NE1EY3NOekl1T1RrNExEQXNOemN1TWpjNUxEQXNPREl1TWpJNFl6QXNOQzQ1TkRnc01TNDRNRGNzT1M0eU1qa3NOUzQwTWpRc01USXVPRFEzYkRFeU55NDVNRGNzTVRJM0xqa3dOMk16TGpZeU1Td3pMall4Tnl3M0xqa3dNaXcxTGpReU9Dd3hNaTQ0TlN3MUxqUXlPQW9KQ1hNNUxqSXpNeTB4TGpneE1Td3hNaTQ0TkRjdE5TNDBNamhNTWpnMkxqa3pOU3c1TlM0d056UmpNeTQyTVRNdE15NDJNVGNzTlM0ME1qY3ROeTQ0T1Rnc05TNDBNamN0TVRJdU9EUTNRekk1TWk0ek5qSXNOemN1TWpjNUxESTVNQzQxTkRnc056SXVPVGs0TERJNE5pNDVNelVzTmprdU16YzNlaUl2UGdvOEwyYytDand2YzNablBnPT0pIDUwJSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOjEwcHh9LmxtLXBvcnRsZXQgaXtiYWNrZ3JvdW5kOiNmZmYgdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmLTgsPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDQiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAzMDQgNjAiPjxwYXRoIGZpbGw9IiNEN0Q5REUiIGQ9Ik0zMCwwLjA2MSBDMTMuNDU4LDAuMDYxIDAsMTMuNTE5IDAsMzAuMDYxIEMwLDQ2LjYwMyAxMy40NTgsNTkuOTQgMzAsNTkuOTQgQzQ2LjU0Miw1OS45NCA2MCw0Ni42MDMgNjAsMzAuMDYxIEM2MCwxMy41MTkgNDYuNTQyLDAuMDYxIDMwLDAuMDYxIFogTTMyLDMwLjkzOSBDMzIsMzIuMDQzIDMxLjEwNCwzMi45MzkgMzAsMzIuOTM5IEwxNCwzMi45MzkgQzEyLjg5NiwzMi45MzkgMTIsMzIuMDQzIDEyLDMwLjkzOSBDMTIsMjkuODM1IDEyLjg5NiwyOC45MzkgMTQsMjguOTM5IEwyOCwyOC45MzkgTDI4LDYuOTM5IEMyOCw1LjgzNSAyOC44OTYsNC45MzkgMzAsNC45MzkgQzMxLjEwNCw0LjkzOSAzMiw1LjgzNSAzMiw2LjkzOSBMMzIsMzAuOTM5IFogTTE5NC42NzM3NjgsMCBMMTk0LjY3Mzc2OCwwIEMxODIuNzAyNzU0LDAgMTczLjAzNjA4Nyw5LjY2NjY2NjY3IDE3My4wMzYwODcsMjEuNjM3NjgxMiBDMTczLjAzNjA4NywyNS44MTE1OTQyIDE3NC4zNjk0MiwyOS43OTcxMDE0IDE3Ni4yMjQ0OTMsMzMuMDcyMzE4OCBMMTkwLjMyNTk0Miw1Ny40Nzc5NzEgQzE5MS4yMSw1OS4wNzIxNzM5IDE5Mi45OTI2MDksNTkuODY5Mjc1NCAxOTQuNjczNzY4LDU5Ljg2OTI3NTQgQzE5Ni4zNTUwNzIsNTkuODY5Mjc1NCAxOTguMDUwNTgsNTkuMDcyMTczOSAxOTkuMDIxNTk0LDU3LjQ3Nzk3MSBMMjEzLjEyMzA0MywzMy4wODY4MTE2IEMyMTQuOTkyNjA5LDI5LjgxMTMwNDMgMjE2LjMxMTQ0OSwyNS44OTgyNjA5IDIxNi4zMTE0NDksMjEuNjUxODg0MSBDMjE2LjMxMTQ0OSw5LjY4MTE1OTQyIDIwNi42NDQ3ODMsMCAxOTQuNjczNzY4LDAgWiBNMTk0LjY3Mzc2OCwyOC4wMjg5ODU1IEMxOTAuMzI1OTQyLDI4LjAyODk4NTUgMTg2Ljc3NTIxNywyNC40NzgyNjA5IDE4Ni43NzUyMTcsMjAuMTMwNDM0OCBDMTg2Ljc3NTIxNywxNS43ODI2MDg3IDE5MC4zMjU5NDIsMTIuMjMxODg0MSAxOTQuNjczNzY4LDEyLjIzMTg4NDEgQzE5OS4wMjE1OTQsMTIuMjMxODg0MSAyMDIuNTcyMzE5LDE1Ljc4MjYwODcgMjAyLjU3MjMxOSwyMC4xMzA0MzQ4IEMyMDIuNTcyMzE5LDI0LjQ5Mjc1MzYgMTk5LjAyMTU5NCwyOC4wMjg5ODU1IDE5NC42NzM3NjgsMjguMDI4OTg1NSBaIE04Ni4zNjcxODc1LDAgQzk1LjA5MDUwNzgsMCAxMDIuMTg3NSw3LjA5Njk5MjE5IDEwMi4xODc1LDE1LjgyMDMxMjUgQzEwMi4xODc1LDI0LjU0MzYzMjggOTUuMDkwNTA3OCwzMS42NDA2MjUgODYuMzY3MTg3NSwzMS42NDA2MjUgQzc3LjY0Mzg2NzIsMzEuNjQwNjI1IDcwLjU0Njg3NSwyNC41NDM2MzI4IDcwLjU0Njg3NSwxNS44MjAzMTI1IEM3MC41NDY4NzUsNy4wOTY5OTIxOSA3Ny42NDM4NjcyLDAgODYuMzY3MTg3NSwwIFogTTEwNi4wNTA3MDMsNDEuOTc1OTc2NiBDMTEwLjM2MDc0Miw0Ni4zNTIyMjY2IDExMi43MzQzNzUsNTIuMTI4ODY3MiAxMTIuNzM0Mzc1LDU4LjI0MjE4NzUgQzExMi43MzQzNzUsNTkuMjEyOTY4OCAxMTEuOTQ3MzQ0LDYwIDExMC45NzY1NjIsNjAgTDYxLjc1NzgxMjUsNjAgQzYwLjc4NzAzMTIsNjAgNjAsNTkuMjEyOTY4OCA2MCw1OC4yNDIxODc1IEM2MCw1Mi4xMjg4NjcyIDYyLjM3MzYzMjgsNDYuMzUyMjI2NiA2Ni42ODM2NzE5LDQxLjk3NTk3NjYgQzcxLjAxNDkyMTksMzcuNTc4MTY0MSA3Ni43NTY4NzUsMzUuMTU2MjUgODIuODUxNTYyNSwzNS4xNTYyNSBMODkuODgyODEyNSwzNS4xNTYyNSBDOTUuOTc3NjE3MiwzNS4xNTYyNSAxMDEuNzE5NDUzLDM3LjU3ODE2NDEgMTA2LjA1MDcwMyw0MS45NzU5NzY2IFogTTE3MS40OTk2NTYsNDcuNDI4MTAzNCBDMTczLjMzNTI0NCw0OS4yNzUgMTczLjI4MDQwMSw1Mi4zMzIyNDE0IDE3MS4zNzY1NjIsNTQuMjQ1Njg5NyBMMTY4LjczNzkzNyw1Ni44MzY4OTY2IEwxNjguNjgxMDMyLDU2Ljc4NjIwNjkgQzE2Ny41NjczMzUsNTcuNjYwMTcyNCAxNjYuMjgyOTIzLDU4LjM5MTAzNDUgMTY0LjkwODk0LDU4LjkyOTMxMDMgQzE2My42MzAwMjksNTkuNDI3NDEzOCAxNjIuMzcxNTc2LDU5Ljc0MjA2OSAxNjEuMDU4NDUzLDU5Ljg5OTQ4MjggQzE2MC40NTU1Myw1OS45NjM2MjA3IDE0Ni40Nzk4MjgsNjEuMjc3NDEzOCAxMjkuMTM3NDIxLDQzLjg4NjM3OTMgQzExNi41OTE0MDQsMzEuMzA0MTM3OSAxMTEuOTY4NDgxLDIyLjAzMTg5NjYgMTEzLjE4ODc2OCwxMS44ODYzNzkzIEMxMTMuMzMxMjg5LDEwLjYyMTIwNjkgMTEzLjY0Mjk4LDkuMzU4NjIwNjkgMTE0LjE0MzYxLDguMDM1NTE3MjQgQzExNC42ODY3MDUsNi42NDU1MTcyNCAxMTUuNDE2NTA0LDUuMzU2NTUxNzIgMTE2LjI4OTg1Nyw0LjIzODk2NTUyIEwxMTYuMjE4NjgyLDQuMTY4MTAzNDUgTDExOC44MjMyNjYsMS41NDEwMzQ0OCBDMTIwLjczMTA2LC0wLjM3Mjc1ODYyMSAxMjMuNzgwNzQ1LC0wLjQyODYyMDY5IDEyNS42MTcxOTIsMS40MTI3NTg2MiBMMTM0Ljg1ODczOSwxMC42ODI5MzEgQzEzNi42OTUxODYsMTIuNTI2ODk2NiAxMzYuNjQyNTc5LDE1LjU4MzEwMzQgMTM0LjczNDc4NSwxNy40OTY4OTY2IEwxMzMuMTk4NTEsMTkuMDM5NDgyOCBMMTMwLjA3MzY5NiwyMi4xNjg2MjA3IEMxMzAuMjM2ODQ4LDIyLjQ1NDgyNzYgMTMwLjQwMjA2MywyMi43NTYyMDY5IDEzMC41NzQ0OTksMjMuMDY4NzkzMSBDMTMyLjIwODU5NiwyNi4wMTkzMTAzIDEzNC40NDM1NTMsMzAuMDYxMjA2OSAxMzguNjkwNjU5LDM0LjMyIEMxNDIuOTI1MjE1LDM4LjU2OTgyNzYgMTQ2Ljk0OTM0MSw0MC44MDkxMzc5IDE0OS44ODk1MTMsNDIuNDQyOTMxIEMxNTAuMjA5NjI4LDQyLjYyMzEwMzQgMTUwLjUxNDA5Nyw0Mi43OTI5MzEgMTUwLjgwODI1Miw0Mi45NTU1MTcyIEwxNTUuNDY0MTgzLDM4LjI4NzI0MTQgQzE1Ny4zNjkwNTQsMzYuMzc2MjA2OSAxNjAuNDE3MzY0LDM2LjMyMDM0NDggMTYyLjI1ODEwOSwzOC4xNTg5NjU1IEwxNzEuNDk5NjU2LDQ3LjQyODEwMzQgWiBNMjYyLDQyIEwyNzIuMzkyLDMyLjkwNCBMMzAyLjA4Niw1OC4zNzQgQzMwMS4wMTIsNTkuMzc2IDI5OS41Niw2MCAyOTcuOTU4LDYwIEwyMjYuMDQyLDYwIEMyMjQuNDM0LDYwIDIyMi45NzYsNTkuMzc2IDIyMS44OTYsNTguMzc0IEwyNTEuNjA4LDMyLjkwNCBMMjYyLDQyIFogTTMwMi4xMDQsMS42MjYgTDI2MiwzNiBMMjIxLjkwOCwxLjYzOCBDMjIyLjk4OCwwLjYyNCAyMjQuNDQsMCAyMjYuMDQyLDAgTDI5Ny45NTgsMCBDMjk5LjU3MiwwIDMwMS4wMjQsMC42MTggMzAyLjEwNCwxLjYyNiBaIE0yMjAsNS4yNjggTDI0OC45OTgsMzAuNDc0IEwyMjAsNTUuMTE2IEwyMjAsNS4yNjggWiBNMjc1LjAwMiwzMC40NzQgTDMwNCw1LjI1IEwzMDQsNTUuMTE2IEwyNzUuMDAyLDMwLjQ3NCBaIi8+PC9zdmc+JykgMCAwIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9LmxtLXBvcnRsZXQgLnBob25lX2lucHV0IGl7YmFja2dyb3VuZC1wb3NpdGlvbjotMjZweDt3aWR0aDoxNHB4O2xlZnQ6MThweH0ubG0tcG9ydGxldCAubmFtZV9pbnB1dCBpe2JhY2tncm91bmQtcG9zaXRpb246LTE0cHg7d2lkdGg6MTJweDtsZWZ0OjIwcHh9LmxtLXBvcnRsZXQgLmNpdHlfaW5wdXQgaXtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00MHB4O3dpZHRoOjEwcHg7bGVmdDoyMHB4fS5sbS1wb3J0bGV0IC5lbWFpbF9pbnB1dCBpe2JhY2tncm91bmQtcG9zaXRpb246LTQzcHg7d2lkdGg6MjBweDtsZWZ0OjE2cHg7dG9wOjE1cHh9LmxtLXBvcnRsZXQgLmxtLWZpZWxke21hcmdpbjowIDAgMTNweDt3aWR0aDoxMDAlO3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZX0ubG0tcG9ydGxldCAubG0tZmllbGQudGltZV96b25lX3NlbGVjdHttYXJnaW46MH0ubG0tcG9ydGxldCAubG0tZmllbGQ6bGFzdC1jaGlsZHttYXJnaW46MH0ubG0tcG9ydGxldCAubG0tZmllbGQgLmxtX2ZpZWxke2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttYXJnaW46MDtwYWRkaW5nOjEwcHggMjBweCAxMHB4IDQwcHg7bGluZS1oZWlnaHQ6MjBweCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE0cHghaW1wb3J0YW50O2NvbG9yOiMwMDA7Ym9yZGVyOjFweCBzb2xpZCAjZDdkOWRlO2JvcmRlci1yYWRpdXM6MjhweDtib3gtc2hhZG93Om5vbmU7b3V0bGluZTpub25lIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7aGVpZ2h0OmluaGVyaXQhaW1wb3J0YW50fS5sbS1wb3J0bGV0IC5sbS1maWVsZCAubG1fZmllbGQ6Zm9jdXN7Ym9yZGVyLWNvbG9yOiM0RTlGRkZ9LnB2X2JhY2tfYnRuIHN2Z3tkaXNwbGF5OmJsb2NrO2ZpbGw6Izc4OGNhNDt3aWR0aDoxNXB4O2hlaWdodDoxNXB4fS5sbS1ieWV7cGFkZGluZzoxMjBweCAwIDM0cHg7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246NTAlIDA7YmFja2dyb3VuZC1jb2xvcjpub25lO3RyYW5zaXRpb246b3BhY2l0eSAuM3M7YmFja2dyb3VuZC1zaXplOjEwMHB4IDEwMHB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlrTmhjR0ZmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lDZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVTJJRFUySWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0ExTmlBMU5qc2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvOGNtVmpkQ0I0UFNJeExqVWlJSGs5SWpJd0lpQnpkSGxzWlQwaVptbHNiRG9qTkVJMlJFRkJPeUlnZDJsa2RHZzlJakUwSWlCb1pXbG5hSFE5SWpNMklpOCtDanhqYVhKamJHVWdjM1I1YkdVOUltWnBiR3c2STBRNFFUZzFNanNpSUdONFBTSTRMalVpSUdONVBTSTBOeUlnY2owaU5DSXZQZ284Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUmtKRFJUbEVPeUlnWkQwaVRUVXpMalVzTWpaak1DMHlMakl3T1MweExqYzVNUzAwTFRRdE5HZ3RPV2d0TTJndE15NDJNREpzTUM0NU9EZ3ROQzQyTVRsak1DNDNOVFF0TXk0MU1qUXNNQzQxTlRJdE55NDRNVGtzTUM0eE1EUXRNVEF1T0RNMkNnbERNelF1TlRReUxETXVOVEk0TERNeExqZzBMREFzTWprdU1ERXpMREJvTFRBdU1qTTVRekkyTGpNMk5Dd3dMREkxTGpVc01pNDJOVGtzTWpVdU5TdzJZekFzTVRZdU1qVXRPQ3d4TmkwNExERTJhQzB5ZGpNeWFERTFhREV3YURSak1pNHlNRGtzTUN3MExURXVOemt4TERRdE5Bb0pZekF0TWk0eU1Ea3RNUzQzT1RFdE5DMDBMVFJvTTJNeUxqSXdPU3d3TERRdE1TNDNPVEVzTkMwMFl6QXRNaTR5TURrdE1TNDNPVEV0TkMwMExUUm9NMk15TGpJd09Td3dMRFF0TVM0M09URXNOQzAwWXpBdE1pNDBPVE10TVM0Mk1UTXRNeTQwTkRJdE5DMHpMamM1TmdvSlF6UTVMak16Tnl3ek1DNHdNekVzTkRjdU1qSTBMRE13TERRMkxqVXNNekJvTTBNMU1TNDNNRGtzTXpBc05UTXVOU3d5T0M0eU1Ea3NOVE11TlN3eU5ub2lMejRLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBZM1FqVTJNenNpSUdROUlrMDFNaTR4TWl3eU9VZ3pPUzQxWXkwd0xqVTFNaXd3TFRFc01DNDBORGN0TVN3eGN6QXVORFE0TERFc01Td3hhREV6TGpRMU5tTXRNQzQyTlRjdE1DNDBNRE10TVM0ME9EZ3RNQzQyTlRNdE1pNDBOVFl0TUM0M09UWUtDVU0wT1M0ek16Y3NNekF1TURNeExEUTNMakl5TkN3ek1DdzBOaTQxTERNd2FETkROVEF1TlRBNExETXdMRFV4TGpReE55d3lPUzQyTVRVc05USXVNVElzTWpsNklpOCtDanh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5HTjBJMU5qTTdJaUJrUFNKTk5UTXVNVElzTXpkSU16a3VOV010TUM0MU5USXNNQzB4TERBdU5EUTNMVEVzTVhNd0xqUTBPQ3d4TERFc01XZ3hNQzQyTWpGakxUQXVOekF6TFRBdU5qRTFMVEV1TmpFekxURXRNaTQyTWpFdE1XZ3pDZ2xETlRFdU5UQTRMRE00TERVeUxqUXhOeXd6Tnk0Mk1UVXNOVE11TVRJc016ZDZJaTgrQ2p4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOR04wSTFOak03SWlCa1BTSk5OVEF1TVRJc05EVklNemN1TldNdE1DNDFOVElzTUMweExEQXVORFEzTFRFc01YTXdMalEwT0N3eExERXNNV2c1TGpZeU1XTXRNQzQzTURNdE1DNDJNVFV0TVM0Mk1UTXRNUzB5TGpZeU1TMHhhRE1LQ1VNME9DNDFNRGdzTkRZc05Ea3VOREUzTERRMUxqWXhOU3cxTUM0eE1pdzBOWG9pTHo0S1BHYytQQzluUGp4blBqd3ZaejQ4Wno0OEwyYytQR2MrUEM5blBqeG5Qand2Wno0OFp6NDhMMmMrUEdjK1BDOW5QanhuUGp3dlp6NDhaejQ4TDJjK1BHYytQQzluUGp4blBqd3ZaejQ4Wno0OEwyYytQR2MrUEM5blBqeG5Qand2Wno0OFp6NDhMMmMrUEM5emRtYyspfS5sbS1ieWUgLmxtLWJlYXR7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjB9LnR4dF9zdWJfaW1ne21hcmdpbjowIDAgMTVweDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDoyMnB4O2ZvbnQtd2VpZ2h0OjMwMDtmb250LWZhbWlseTonUm9ib3RvJywnSGVsdmV0aWNhIE5ldWUnLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2JvcmRlcjowIG5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7d29yZC13cmFwOmJyZWFrLXdvcmR9LmxtLWJ0bntvdXRsaW5lOjA7Ym9yZGVyLXJhZGl1czo2NXB4O3BhZGRpbmc6MTJweCAwO21hcmdpbi1ib3R0b206MTZweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LWRlY29yYXRpb246bm9uZSFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJX0ubG0tbmF2aXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjAgMTBweDt6LWluZGV4OjE7d2lkdGg6Y2FsYygxMDAlICsgNjBweCk7bWFyZ2luOjAgLTMwcHh9LmxtLW5hdmkgYXtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjE1cHg7Y3Vyc29yOnBvaW50ZXI7dXNlci1zZWxlY3Q6bm9uZTtvdXRsaW5lOm5vbmUhaW1wb3J0YW50fS5sbS1uYXZpIHN2Z3t3aWR0aDoxNHB4O2ZpbGw6IzdmN2Y3ZjtoZWlnaHQ6MTRweH0ubG0td3JhcHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzowIDMwcHggMjBweH0ubG0tYmxvY2t7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpub25lO21heC13aWR0aDo1MDBweDttYXJnaW46MCBhdXRvO3BhZGRpbmctdG9wOjQwcHh9LmxtLWJsb2NrLnN0ZXAtb257dmlzaWJpbGl0eTp2aXNpYmxlO2Rpc3BsYXk6YmxvY2t9LmxtX2lzX0ksLmxtLXdyYXAtcGhvdG97bWF4LXdpZHRoOjgwcHg7bWFyZ2luOjAgYXV0byAyMHB4fS5sYXd5ZXJfcGhvdG97ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2JvcmRlci1yYWRpdXM6NTAlfS5sbV9hZ3JlZW1lbnRfYmxvY2t7Zm9udC1zaXplOjEwcHg7cGFkZGluZzowIDAgMTJweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2Rpc3BsYXk6bm9uZX0jbG5tdF9yb290e2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6MTAwdmg7bWF4LWhlaWdodDoxMDB2aDtvdmVyZmxvdy15OmF1dG99I2xubXRfcm9vdFtkYXRhLXN0ZXA9InRoYW5rX3lvdSJdIC5sbS13cmFwe3BhZGRpbmctdG9wOjA7ZGlzcGxheTp0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtoZWlnaHQ6MTAwdmg7cGFkZGluZy1ib3R0b206MDttaW4td2lkdGg6MTAwdnd9I2xubXRfcm9vdFtkYXRhLXN0ZXA9InRoYW5rX3lvdSJdIC5sbS1uYXZpe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9I2xubXRfcm9vdFtkYXRhLXN0ZXA9ImFncmVlbWVudCJdIC5sbS1uYXZpIC5sbS1idG4tZXhpdCBzdmd7ZGlzcGxheTpub25lO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9I2xubXRfcm9vdCAubG0tYmxvY2suc3RlcC1vbiAuYnRuLTItY2hhdDpiZWZvcmUsI2xubXRfcm9vdCAubG0tYmxvY2suc3RlcC1vbiAuYnRuLTItY2FsbGJhY2s6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0Oi0xMDBweDtoZWlnaHQ6MTAwcHg7d2lkdGg6MjBweDtvcGFjaXR5Oi40O2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWZpbHRlcjpibHVyKDEwcHgpO2ZpbHRlcjpibHVyKDEwcHgpOy1tcy10cmFuc2Zvcm06cm90YXRlKDMwZGVnKSB0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTpyb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZVkoLTUwJSk7YW5pbWF0aW9uOmJ1dHRvbkJsaWsgNHMgM3MgaW5maW5pdGV9',
        call_ic_svg: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjIyLjQzIiBoZWlnaHQ9IjIyLjMxMiIgdmlld0JveD0iMCAwIDIyLjQzIDIyLjMxMiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0yMS45MzIsMTcuNjUwIEwxOC40NjgsMTQuMTk1IEMxNy43NzgsMTMuNTEwIDE2LjYzNiwxMy41MzAgMTUuOTIyLDE0LjI0MiBMMTQuMTc3LDE1Ljk4MyBDMTQuMDY3LDE1LjkyMiAxMy45NTMsMTUuODU5IDEzLjgzMywxNS43OTEgQzEyLjczMSwxNS4xODMgMTEuMjIyLDE0LjM0OCA5LjYzNSwxMi43NjQgQzguMDQ0LDExLjE3NyA3LjIwNiw5LjY3MCA2LjU5NCw4LjU3MCBDNi41MjksOC40NTQgNi40NjcsOC4zNDEgNi40MDYsOC4yMzUgTDcuNTc3LDcuMDY4IEw4LjE1Myw2LjQ5MyBDOC44NjgsNS43ODAgOC44ODgsNC42NDEgOC4xOTksMy45NTQgTDQuNzM1LDAuNDk4IEM0LjA0NywtMC4xODggMi45MDQsLTAuMTY3IDIuMTg5LDAuNTQ2IEwxLjIxMywxLjUyNSBMMS4yNDAsMS41NTIgQzAuOTEyLDEuOTY4IDAuNjM5LDIuNDQ5IDAuNDM1LDIuOTY3IEMwLjI0OCwzLjQ2MCAwLjEzMSwzLjkzMSAwLjA3Nyw0LjQwMiBDLTAuMzgwLDguMTg0IDEuMzUzLDExLjY0MCA2LjA1NSwxNi4zMzAgQzEyLjU1NSwyMi44MTIgMTcuNzkzLDIyLjMyMiAxOC4wMTksMjIuMjk4IEMxOC41MTEsMjIuMjQwIDE4Ljk4MywyMi4xMjIgMTkuNDYyLDIxLjkzNyBDMTkuOTc3LDIxLjczNiAyMC40NTksMjEuNDY0IDIwLjg3NiwyMS4xMzggTDIwLjg5NywyMS4xNTcgTDIxLjg4NiwyMC4xOTEgQzIyLjYwMCwxOS40NzcgMjIuNjIwLDE4LjMzOCAyMS45MzIsMTcuNjUwIFoiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4=',
        callpng: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAAABGdBTUEAALGPC/xhBQAAAYBQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAA9fb0+/z6sN2cS7IR9vn09vj0gsxgo9eLXLcvXr4wb8VFd8lRndeDTLIV+fr4n9OIYb0ze8VZ0+nJh8xohs1jfcpag8hkz+jEptePxeW47PTot96l3e3WZME2TrQYbr9HmNF+Zr49w+O1aME84e/byua+ks928Pbtv+Gx6PLk5PHfs96h8/fy2ezQU7UgqtqWjc1xUbYbYcIxu+CrRq4JVbkiWrwnXr8tV7olXb4sX8AuXL0pYMEwYcEx////8vLy+vr6+/v79vb29/f3+fn59fX1/Pz8+Pj48/Pz/f399PT0/v7+Y8Iy8afClwAAADN0Uk5TZ/2IRPe8vcv8e6NFzvTs8O768rBfySRMZaQQfdCFKN2241kKcxu7qpdSF0fE+dMF/gEA4pziCAAABslJREFUaN6tmmdjmzoUhrmje6Rp9t7xnrdtmmbvPR0nXolnvDAECjaY2uSvX4QXNmLYzvvFQjp6OIgjI3RA3Dpk/jBvnB6f+dJLkmTvl5nxaeP8B7Oejogm2WScImGaMprM3dFHh61OUllO6/Bop3SXxWAjtWQzWFwd0F2zdlKf7LOudulDetki39QWfaGP5NsRuTipm+5494lvV7Yxhz764ADJty9yYFAP3fSV70xfTZp014ST71TOCZc63WEg+c5FGhxq9LnFbuAgduaU6XPW7uAC3jqnRHcsdgsH3jvgdNcIX+pe/IgLSp94CbiAn4DRh5yll5FzSE5f+My/EJ3/vNBKd1i14d98se3tk/PjgBbe6mihv9OGL12nNq8SicTV1fX2hTp+rJk+adO+4u+pKJ7LZrM5PJNOXAe/qZjaJpvoi6WipjxX+HNVT1k8fXOqbFpalNKHeG14MZjIPjf0lEsf3Sva8qYG3WWHur7k80r7054c8Szl46tBReftrjp9Fup6Mpr6sXkUktSEQ+Fi+O50Y61ylkcM3aaUnJ+t0V3jENe34qkrFMczNxeQttPlJ5FP4PEtBefHXVW6BeL61lEqgRPAv9sQpDPtWxP5RO4grOC8pUo3yF2njlLR6ig/HULdC29goP0xu7wEd95QoY/+S8vkF+CP1buH/WrUB44jXK3svRRPn41TNEy2UZE+XJK1HKcSdbjQ/6JWf7qZ+hE9Sv6sHF3ciqOTjUHppWGRbi3KXd/MSIKPOKhWb0U3hRuNpndiFf79GiaGzh6MXrQC+oJT3nLdNHGesbtK9VkqLXhLYDh6c1zB3wI8sRaA4Z0LAr2flzfcpJ+k9OeHSjW1kqleTQ49EUc7sgoMnzwwOt8v0N8XIb6nm2blc+2+Hu881SdqfAnUJMUhxCKwoXkv0KdoSqajVt9rDWFfbJ2ouu/nQI0fzApiWc6g6Ck3YiYhDdtpTAq/vJc2RvaxCv4EHAVuwC3C9iAU0ox84CH13ua7et7SnBQjncgeiwcouM44hMJbkPkSpD6QwCXwDaa1PSJGOrH+Uygz1zlwH87klNI8YixC6NRupjGZNjh5ezVWvovOg5v0eC43KhqRaZqB6LxxW9cLMAOvGCu3YaEYXgHO78tt6GlknIJ1DqC5Gt3DQBUXY8UrFlGhePtTZkJ9RGagdMaD1iJ+HU6/R0HkHIBiMCoUHyNy+gzSA+98l65FDRGBW+yDsSECwPYKXOip3KQHsTEKV17/H9uHGwTFOeETSpwYYQ9yk16EVKDfobUJhXmhBiHR4++gKP79xOQmJEJyCvLUnb+9hxrcAGYSlFZQIX5P5BYq9MoUrzz7/oMZPAhRu3YGSpuAHoPRbUp0LojWYh7zF6AG/l8h8FtI1a+iWb1IjyKdi+O1CZs94dR0jQo2d/L6HmSGUex0Vh8bIvegRt+7xC4hBswM8lGZzp3Wx4bIJdXw4cgZpJb5iEwzBWVt40Qd7y20K2YaMVIq7exR/e9G8L5dOmVE5mk1g7Pr+mOEwM/bpNPziKWkahGpP6cFfKw9esmCmHl1k71VCd4fbtTvRlf2fapdebOwJijkVXWak+B3Q9XaB2HJh6LR3QvljgVhTeAeYdTp+WA9cIQH9c45C+piqasMRgirslxSsR8zAtZiRQ16Pil5o8HQXR/LnlQW9+A442EVuhX7xXWkFj3vXSUkb0vpKPoj0ZgIuF8BL64j3QOcJt63I1mbYXgmk22cjsjFoH04cQ3snqc16fm92+aln1QEEYJ1oRGRbn7Laut+F1PGP8B6VN893H2cDnzAnyWU8L8g9pyh9s5XZPXofEcJD/O9WHvnc9kLuvAXh/DRubyT2xbsrvq7tj7n2T+xS5j7JxBTelayT8Dpw7P3ceyxFX7wGzLqkn0C9z86nRd0fNgSm4dnsFE3Sfdn+piybvn2pcNzGIKYME37M+5BG6sfX76Lrdcu4AAGZ1v2ltxjVLktXSQ34ssHnuBvWCM11rqn94Ypv5QY2Z6ee/Br4YXgBfl+pBD0TvZF4CxsL1XYB6ZehE5NwHfIR6g/3YtS2MN2O153j6deOZRzB0y3cOXcAch7dOc9pZb3ADkbqtwxu0wZ5jTzTfkO4Xnn3y4duTKuIzj3yaQnzzf5poPRKVP68nzC4I/ZuN/tidOdowTuv6bzbbDz9KvJtnLDJjvF6mSzVJu5YRA8/XZd/ufpDvLaYk6+7y3DarjdYU6+koSaH3BShT9QcrlAd/M9QfVbiOH3MzzNFPJlIUwBVYi+fIGh+SnjbJffQtTOYAHfcUx9+SRk9/+qfMdhWdDT8X8/V4K/g8UJcAAAAABJRU5ErkJggg==",
        CssDesktop: "QGNoYXJzZXQgIlVURi04IjsjbG5rd3RfY2xlYXJfYWxsLCNsbmt3dF9jbGVhcl9hbGwgKnt0cmFuc2Zvcm06bm9uZX0jbG5rd3RfY2xlYXJfYWxsICp7ei1pbmRleDphdXRvO3RleHQtc2hhZG93Om5vbmU7dGV4dC1hbGlnbjpsZWZ0O2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCFpbXBvcnRhbnQ7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6MDttYXJnaW46MDtjb2xvcjojMDAwO2xpbmUtaGVpZ2h0OjEuMjt0ZXh0LXRyYW5zZm9ybTpub25lO2xldHRlci1zcGFjaW5nOm5vcm1hbDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei10cmFuc2l0aW9uOm5vbmU7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmU7LW8tdHJhbnNpdGlvbjpub25lOy1tcy10cmFuc2l0aW9uOm5vbmU7dHJhbnNpdGlvbjpub25lOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyOy1tb3otdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyOy1tcy10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7LW8tdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC1zcGFjaW5nOjAhaW1wb3J0YW50O2ZvbnQtdmFyaWFudDpub3JtYWw7bWluLXdpZHRoOmluaXRpYWx9I2xua3d0X2NsZWFyX2FsbCA6bm90KGJyKXtkaXNwbGF5OmJsb2NrfSNsbmt3dF9jbGVhcl9hbGwgc3R5bGV7ZGlzcGxheTpub25lfSNsbmt3dF9jbGVhcl9hbGwgaW1ne2hlaWdodDphdXRvfSNsbmt3dF9jbGVhcl9hbGwgOmFmdGVyLCNsbmt3dF9jbGVhcl9hbGwgOmJlZm9yZXtiYWNrZ3JvdW5kLWltYWdlOm5vbmV9I2xua3d0X2NsZWFyX2FsbCBpbnB1dCwjbG5rd3RfY2xlYXJfYWxsIHRleHRhcmVhLCNsbmt3dF9jbGVhcl9hbGwgc2VsZWN0e3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0OjE7ZmxvYXQ6bm9uZSFpbXBvcnRhbnQ7Zm9udC1zaXplOjE0cHghaW1wb3J0YW50O2NvbG9yOiMwMDAhaW1wb3J0YW50O2JvcmRlcjowIWltcG9ydGFudDtiYWNrZ3JvdW5kOiNmZmYhaW1wb3J0YW50O29wYWNpdHk6MSFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50Oy1tb3otYm94LXNoYWRvdzpub25lIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O2xldHRlci1zcGFjaW5nOm5vcm1hbCFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NDAwIWltcG9ydGFudDttYXgtd2lkdGg6MTAwJSFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCBpbnB1dCwjbG5rd3RfY2xlYXJfYWxsIHNlbGVjdHtwYWRkaW5nOjAhaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudDt3aWR0aDphdXRvIWltcG9ydGFudDtoZWlnaHQ6YXV0byFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MSFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCBpbnB1dDpmb2N1cywjbG5rd3RfY2xlYXJfYWxsIHRleHRhcmVhOmZvY3VzLCNsbmt3dF9jbGVhcl9hbGwgc2VsZWN0OmZvY3Vze291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50Oy1tb3otYm94LXNoYWRvdzpub25lIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZSFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCBpbnB1dDphZnRlciwjbG5rd3RfY2xlYXJfYWxsIGlucHV0OmJlZm9yZSwjbG5rd3RfY2xlYXJfYWxsIHRleHRhcmVhOmFmdGVyLCNsbmt3dF9jbGVhcl9hbGwgdGV4dGFyZWE6YmVmb3JlLCNsbmt3dF9jbGVhcl9hbGwgc2VsZWN0OmFmdGVyLCNsbmt3dF9jbGVhcl9hbGwgc2VsZWN0OmJlZm9yZXtkaXNwbGF5Om5vbmV9I2xua3d0X2NsZWFyX2FsbCBpbnB1dFt0eXBlPSJjaGVja2JveCJde2FwcGVhcmFuY2U6Y2hlY2tib3ghaW1wb3J0YW50Oy1tb3otYXBwZWFyYW5jZTpjaGVja2JveCFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOmNoZWNrYm94IWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0OmF1dG87dG9wOmF1dG87Ym90dG9tOmF1dG87cmlnaHQ6YXV0b30jbG5rd3RfY2xlYXJfYWxsIGlucHV0W3R5cGU9InRleHQiXXthcHBlYXJhbmNlOnRleHRmaWVsZCFpbXBvcnRhbnQ7LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZCFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZCFpbXBvcnRhbnQ7bGVmdDppbmhlcml0IWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5OTkhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOmluaXRpYWwhaW1wb3J0YW50O2ZvbnQtc2l6ZToxM3B4IWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF90ZXh0YXJlYV9jbGFzczo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOTk5IWltcG9ydGFudDt0ZXh0LXRyYW5zZm9ybTppbml0aWFsIWltcG9ydGFudDtmb250LXNpemU6MTNweCFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdGV4dGFyZWFfY2xhc3M6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5OTkhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOmluaXRpYWwhaW1wb3J0YW50O2ZvbnQtc2l6ZToxM3B4IWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF90ZXh0YXJlYV9jbGFzczo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5OTkhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOmluaXRpYWwhaW1wb3J0YW50O2ZvbnQtc2l6ZToxM3B4IWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIGlucHV0OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiM5OTkhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOmluaXRpYWwhaW1wb3J0YW50O2ZvbnQtc2l6ZToxM3B4IWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF90ZXh0YXJlYV9jbGFzczo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjojOTk5IWltcG9ydGFudDt0ZXh0LXRyYW5zZm9ybTppbml0aWFsIWltcG9ydGFudDtmb250LXNpemU6MTNweCFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdGV4dGFyZWFfY2xhc3M6OnBsYWNlaG9sZGVye2NvbG9yOiM5OTkhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOmluaXRpYWwhaW1wb3J0YW50O2ZvbnQtc2l6ZToxM3B4IWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOTk5IWltcG9ydGFudDt0ZXh0LXRyYW5zZm9ybTppbml0aWFsIWltcG9ydGFudDtmb250LXNpemU6MTNweCFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5OTkhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOmluaXRpYWwhaW1wb3J0YW50O2ZvbnQtc2l6ZToxM3B4IWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjojOTk5IWltcG9ydGFudDt0ZXh0LXRyYW5zZm9ybTppbml0aWFsIWltcG9ydGFudDtmb250LXNpemU6MTNweCFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAucGxhY2Vob2xkZXJzanN7Y29sb3I6Izk5OX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9ib2R5e3Bvc2l0aW9uOmZpeGVkO2JhY2tncm91bmQtY29sb3I6IzczODNiNTtmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWw7Zm9udC1zaXplOjE0cHg7LXdlYmtpdC10cmFuc2l0aW9uOnRvcCAuMnMsbWFyZ2luIC4yczstbW96LXRyYW5zaXRpb246dG9wIC4ycyxtYXJnaW4gLjJzOy1vLXRyYW5zaXRpb246dG9wIC4ycyxtYXJnaW4gLjJzO3RyYW5zaXRpb246dG9wIC4ycyxtYXJnaW4gLjJzO3dpZHRoOjM0NHB4O2JvdHRvbTowO3BhZGRpbmc6MTBweCA0cHggMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweCAzcHggMCAwOy1tb3otYm9yZGVyLXJhZGl1czozcHggM3B4IDAgMDtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwO3otaW5kZXg6MTAwMDAwMX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9wb3J0bGV0e2JvcmRlci1yYWRpdXM6MTBweCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLDAuMikgM3B4IDEwcHggMTBweCAwIWltcG9ydGFudDtib3R0b206MjBweCFpbXBvcnRhbnQ7cmlnaHQ6MjBweCFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX25hbWV7bWFyZ2luOjA7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MTtmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X3BvcnRsZXRfaGVhZHtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjUwcHg7cGFkZGluZy1sZWZ0OjcwcHg7Y29sb3I6Izk3YTdiZDttYXJnaW4tYm90dG9tOjhweDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dGV4dC1zaGFkb3c6MCAxcHggMXB4ICM2MTcyYTR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX3Bob3Rve3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTBweDt0b3A6MDtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4Oy13ZWJraXQtYm9yZGVyLXJhZGl1czo1MCU7LW1vei1ib3JkZXItcmFkaXVzOjUwJTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXI6bm9uZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTstbW96LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7bWFyZ2luOjAhaW1wb3J0YW50O29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDstbW96LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDstbXMtdHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50Oy1vLXRyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbjpub25lIWltcG9ydGFudDstby10cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbWV0aWVyX3R4dHtjb2xvcjojZmZmO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MS4yfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X3Njcm9sbHtoZWlnaHQ6Mjc1cHg7cGFkZGluZzo2cHggMDtvdmVyZmxvdy14OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9wb3J0bGV0X2JvZHl7YmFja2dyb3VuZC1jb2xvcjojZmZmO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDozNjBweDtvdmVyZmxvdzpoaWRkZW59I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2hhdF9saXN0e21pbi1oZWlnaHQ6NTVweDttYXJnaW46MDtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzo2cHggMTZweDtmb250LXdlaWdodDo0MDA7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjVzOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC41czstby10cmFuc2l0aW9uOm9wYWNpdHkgLjVzO3RyYW5zaXRpb246b3BhY2l0eSAuNXN9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfYmFsbG9vbnttaW4taGVpZ2h0OjMycHg7bWFyZ2luLWJvdHRvbToxMHB4O2xpbmUtaGVpZ2h0OjIwcHg7Y29sb3I6I2ZmZn0jbG5rd3RfY2xlYXJfYWxsIC5sYXd5ZXJfYmFsbG9vbl93cmFwe21heC13aWR0aDo5MCU7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDowO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MTJweCAxNXB4O2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZGNkNztjb2xvcjojMDAwO2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTstd2Via2l0LWJvcmRlci1yYWRpdXM6MTNweDstbW96LWJvcmRlci1yYWRpdXM6MTNweDtib3JkZXItcmFkaXVzOjEzcHg7d29yZC13cmFwOmJyZWFrLXdvcmR9I2xua3d0X2NsZWFyX2FsbCAubGF3eWVyX2JhbGxvb25fd3JhcDphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjE1cHg7aGVpZ2h0OjEycHg7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhOy13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NTAlOy1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDo1MCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NTAlO2xlZnQ6MDtib3R0b206MnB4O3otaW5kZXg6MX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF91c2VyX2JhbGxvb24gLmxhd3llcl9iYWxsb29uX3dyYXA6YWZ0ZXJ7bGVmdDphdXRvO3JpZ2h0OjA7YmFja2dyb3VuZC1jb2xvcjojZmZmfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X25pcHBsZV9sYXd5ZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMjFweDtib3R0b206N3B4O3dpZHRoOjFweDtoZWlnaHQ6MXB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X3VzZXJfYmFsbG9vbiAubG5rd3RfbmlwcGxlX2xhd3llcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7bGVmdDphdXRvO3JpZ2h0Oi0yMXB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X3VzZXJfYmFsbG9vbiAubG5rd3RfbmlwcGxlX2xhd3llcjpiZWZvcmV7Ym9yZGVyLXJpZ2h0LWNvbG9yOiNmZmZ9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbmlwcGxlX2xhd3llcjpiZWZvcmV7Y29udGVudDoiIjtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Oi0xO2JvdHRvbTotMTBweDtsZWZ0OjA7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJpZ2h0OjMwcHggc29saWQgI2ZhZmFmYTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgMXB4ICNkZGRjZDc7LW1vei1ib3gtc2hhZG93OjAgMCAwIDFweCAjZGRkY2Q3O2JveC1zaGFkb3c6MCAwIDAgMXB4ICNkZGRjZDc7LXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo4MHB4IDUwcHg7LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OjgwcHggNTBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo4MHB4IDUwcHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTJweCk7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwtMnB4KTstby10cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTJweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0ycHgpfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X25pcHBsZV9sYXd5ZXI6YWZ0ZXJ7Y29udGVudDoiIjtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Oi0xO2JvdHRvbTotMTFweDtsZWZ0OjA7d2lkdGg6MzBweDtoZWlnaHQ6MTNweDtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0MHB4IDUwcHg7LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OjQwcHggNTBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0MHB4IDUwcHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMHB4LC0ycHgpOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTBweCwtMnB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTBweCwtMnB4KTstby10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMHB4LC0ycHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEwcHgsLTJweCk7LXdlYmtpdC1ib3gtc2hhZG93OjFweCAwIDAgMCAjZGRkY2Q3Oy1tb3otYm94LXNoYWRvdzoxcHggMCAwIDAgI2RkZGNkNztib3gtc2hhZG93OjFweCAwIDAgMCAjZGRkY2Q3fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X25pcHBsZV91c2Vye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTIxcHg7Ym90dG9tOjdweDt3aWR0aDoxcHg7aGVpZ2h0OjFweH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9iYWxsb29uLmxua3d0X3VzZXJfYmFsbG9vbiAubGF3eWVyX2JhbGxvb25fd3JhcHtjb2xvcjojMDAwO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTstbW96LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Ym9yZGVyOjFweCBzb2xpZCAjZGVkY2Q2O3RleHQtYWxpZ246bGVmdDttaW4td2lkdGg6NTAlO3BhZGRpbmctYm90dG9tOjExcHh9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdXNlcl9iYWxsb29uIC5sbmt3dF9uaXBwbGVfdXNlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7bGVmdDphdXRvO3JpZ2h0Oi0yMXB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X25pcHBsZV91c2VyOmFmdGVye2NvbnRlbnQ6IiI7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMTtib3R0b206LTExcHg7bGVmdDowO3dpZHRoOjMwcHg7aGVpZ2h0OjEzcHg7YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NDBweCA1MHB4Oy1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDo0MHB4IDUwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NDBweCA1MHB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTBweCwtMnB4KTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTEwcHgsLTJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUoLTEwcHgsLTJweCk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTBweCwtMnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xMHB4LC0ycHgpOy13ZWJraXQtYm94LXNoYWRvdzoxcHggMCAwIDAgI2RkZGNkNzstbW96LWJveC1zaGFkb3c6MXB4IDAgMCAwICNkZGRjZDc7Ym94LXNoYWRvdzoxcHggMCAwIDAgI2RkZGNkN30jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9uaXBwbGVfdXNlcjo6YmVmb3Jle2NvbnRlbnQ6IiI7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMTtib3R0b206LTEwcHg7bGVmdDowO2hlaWdodDoxMHB4O2JvcmRlci1yaWdodDozMHB4IHNvbGlkICNmYWZhZmE7Ym9yZGVyLXJpZ2h0LWNvbG9yOiNmYWZhZmE7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIDFweCAjZGRkY2Q3Oy1tb3otYm94LXNoYWRvdzowIDAgMCAxcHggI2RkZGNkNztib3gtc2hhZG93OjAgMCAwIDFweCAjZGRkY2Q3Oy13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ODBweCA1MHB4Oy1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDo4MHB4IDUwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ODBweCA1MHB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0ycHgpOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0ycHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTJweCk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0ycHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwtMnB4KX0jbG5rd3RfY2xlYXJfYWxsIC5sbnd0LW1zZ3tmb250LXNpemU6MTNweH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF91c2VyX2JhbGxvb24gLmxua3d0LXN1Yl9lZGl0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi00NXB4O2JvdHRvbTotMTFweDtib3JkZXI6MXB4IHNvbGlkICNkZWRjZDY7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjEwcHg7LW1vei1ib3JkZXItcmFkaXVzOjEwcHg7LW8tYm9yZGVyLXJhZGl1czoxMHB4O2JvcmRlci1yYWRpdXM6MTBweDtmb250LXNpemU6MTBweDtjb2xvcjojQjlCOUI5O3BhZGRpbmc6MXB4IDdweCAzcHg7YmFja2dyb3VuZDojZmZmO2xpbmUtaGVpZ2h0OjE7Y3Vyc29yOnBvaW50ZXJ9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdXNlcl9iYWxsb29uIC5sbmt3dC1zdWJfZWRpdFtkYXRhLWNvbnRlbnQtZWRpdGFibGU9InRydWUiXXtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjI7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjEzcHg7LW1vei1ib3JkZXItcmFkaXVzOjEzcHg7Ym9yZGVyLXJhZGl1czoxM3B4O291dGxpbmU6MDstd2Via2l0LWJveC1zaGFkb3c6MCAwIDEwcHggMXB4ICM0NDhGRkY7LW1vei1ib3gtc2hhZG93OjAgMCAxMHB4IDFweCAjNDQ4RkZGO2JveC1zaGFkb3c6MCAwIDEwcHggMXB4ICM0NDhGRkY7bWFyZ2luOi0xMnB4IC0xNXB4O3BhZGRpbmc6MTBweCAxNXB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X3N0eWxlX3NoYWtlcntwb3NpdGlvbjpyZWxhdGl2ZX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9zdHlsZV9zaGFrZXI6YmVmb3Jle2NvbnRlbnQ6Jyc7Ym90dG9tOjNweDtyaWdodDoxcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTlweDtoZWlnaHQ6MjhweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7ei1pbmRleDoxOy13ZWJraXQtYm9yZGVyLXJhZGl1czowIDEwcHggOHB4IDA7LW1vei1ib3JkZXItcmFkaXVzOjAgMTBweCA4cHggMDtib3JkZXItcmFkaXVzOjAgMTBweCA4cHggMH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9zdHlsZV9zaGFrZXJfbm9uZTpiZWZvcmV7Y29udGVudDonJzt6LWluZGV4Oi0xIWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIC5maXhlZF93aWR0aHt3aWR0aDo0MnB4Oy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF90aW1lX2xpbmV7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTBweDtjb2xvcjojYjliY2MwfSNsbmt3dF9jbGVhcl9hbGwgLmxfa2FfbXNnX3R5cGVtZXNzYWdle3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM3RjdGN0Z9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdXNlcl9iYWxsb29uIC5sbmt3dF90aW1lX2xpbmV7dGV4dC1hbGlnbjpyaWdodH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9iYWxsb29uLmxua3d0X3VzZXJfYmFsbG9vbnt0ZXh0LWFsaWduOnJpZ2h0O21hcmdpbi1ib3R0b206MjVweH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9iYWxsb29uLmxua3d0X3VzZXJfYmFsbG9vbiAubGF3eWVyX2JhbGxvb25fd3JhcC51c2VyX21zZ3ttaW4td2lkdGg6NTAlfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X3dyYXBfb2ZfdGV4dGFyZWF7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO2JvdHRvbTowO3otaW5kZXg6MTt3aWR0aDoxMDAlO3BhZGRpbmc6MCAxNXB4IDE1cHg7YmFja2dyb3VuZDotbW96LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwjZjNmM2YzIDEwMCUpO2JhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDApKSxjb2xvci1zdG9wKDEwMCUsI2YzZjNmMykpO2JhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsI2YzZjNmMyAxMDAlKTtiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwjZjNmM2YzIDEwMCUpO2JhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDApKSx0bygjZjNmM2YzKSk7YmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwjZjNmM2YzIDEwMCUpO2JhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCNmM2YzZjMgMTAwJSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsI2YzZjNmMyAxMDAlKX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF90ZXh0YXJlYV9jbGFzc3t3aWR0aDoxMDAlO2hlaWdodDozN3B4IWltcG9ydGFudDttaW4taGVpZ2h0OmluaGVyaXQ7cGFkZGluZzo4cHggMzVweCA4cHggMTVweCAhaW1wb3J0YW50O3ZlcnRpY2FsLWFsaWduOmJvdHRvbTtib3JkZXI6MXB4IHNvbGlkICNkZGRjZDchaW1wb3J0YW50O2ZvbnQ6MTNweC8xLjUgSGVsdmV0aWNhLEFyaWFsO2NvbG9yOiMwMDAhaW1wb3J0YW50Oy13ZWJraXQtYm9yZGVyLXJhZGl1czoxNnB4IWltcG9ydGFudDstbW96LWJvcmRlci1yYWRpdXM6MTZweCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czoxNnB4IWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50O21pbi13aWR0aDppbml0aWFsIWltcG9ydGFudDtyZXNpemU6bm9uZTstd2Via2l0LXRyYW5zaXRpb246aGVpZ2h0IC4ycywtd2Via2l0LWJveC1zaGFkb3cgLjJzLGJvcmRlci1jb2xvciAuMnM7LW1vei10cmFuc2l0aW9uOmhlaWdodCAuMnMsLW1vei1ib3gtc2hhZG93IC4ycyxib3JkZXItY29sb3IgLjJzOy1vLXRyYW5zaXRpb246aGVpZ2h0IC4ycyxib3gtc2hhZG93IC4ycyxib3JkZXItY29sb3IgLjJzO3RyYW5zaXRpb246aGVpZ2h0IC4ycyxib3gtc2hhZG93IC4ycyxib3JkZXItY29sb3IgLjJzOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46MDtiYWNrZ3JvdW5kOiNmZmY7bGVmdDppbmhlcml0IWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF90ZXh0YXJlYV9jbGFzcy50ZXh0YXJlYV9vcGVuZWR7aGVpZ2h0OjgwcHh9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdGV4dGFyZWFfY2xhc3M6Zm9jdXN7aGVpZ2h0OjgwcHg7b3V0bGluZTowOy13ZWJraXQtYm94LXNoYWRvdzowIDVweCA3cHggcmdiYSgwLDAsMCwwLjEpOy1tb3otYm94LXNoYWRvdzowIDVweCA3cHggcmdiYSgwLDAsMCwwLjEpO2JveC1zaGFkb3c6MCA1cHggN3B4IHJnYmEoMCwwLDAsMC4xKTtib3JkZXItY29sb3I6IzliYmFlOSFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdGV4dGFyZWFfY2xhc3M6Zm9jdXMgfiAubG5rd3RfbmlwcGxlX3VzZXI6YWZ0ZXJ7LXdlYmtpdC1ib3gtc2hhZG93Oi0xNnB4IC0zcHggMCAtNXB4IHdoaXRlLC0xNnB4IC0zcHggMCAtNHB4ICM5YmJhZTksaW5zZXQgNHB4IDAgMCAtM3B4ICM5YmJhZTk7LW1vei1ib3gtc2hhZG93Oi0xNnB4IC0zcHggMCAtNXB4IHdoaXRlLC0xNnB4IC0zcHggMCAtNHB4ICM5YmJhZTksaW5zZXQgNHB4IDAgMCAtM3B4ICM5YmJhZTk7Ym94LXNoYWRvdzotMTZweCAtM3B4IDAgLTVweCB3aGl0ZSwtMTZweCAtM3B4IDAgLTRweCAjOWJiYWU5LGluc2V0IDRweCAwIDAgLTNweCAjOWJiYWU5fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Fkc19mb290ZXIgKntmb250LXNpemU6MTBweH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9hZHNfZm9vdGVye2ZvbnQtc2l6ZToxMHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjNweCAwIDZweDtvcGFjaXR5OjE7bGluZS1oZWlnaHQ6MTtmb250LXNpemU6MTJweH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9hZHNfd3JhcHtkaXNwbGF5OmlubGluZS1ibG9ja30jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9hZHNfZm9vdGVyX3R4dHt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6MDtjb2xvcjojRkZGfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Fkc19mb290ZXI6aG92ZXJ7b3BhY2l0eTouOH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9tZXRpZXJfdGl0bGV7cGFkZGluZzo0cHggMH0ubG5rd3RfY3NzX21pbmltaXple3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtyaWdodDoxNXB4O3RvcDoxM3B4O3dpZHRoOjE1cHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2ZmZn0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9lbGVtZW50X2NlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0jbG5rd3RfY2xlYXJfYWxsIC5zdWNjZXNzX2xlYWRfc2VuZHstbW96LWJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7LW8tYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO21hcmdpbjo4cHggYXV0bztiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCkgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRWdBQUFCSUNBWUFBQUJWN2JOSEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0Z1FNQ1IwTTBRVVM2UUFBQUIxcFZGaDBRMjl0YldWdWRBQUFBQUFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJrTG1VSEFBQVdRVWxFUVZSNDJ0VmNhNUJsVlhYKzF0cjduSHR2UDRmcG1XWWVQV09QSldvU3BVQUI4NUJFSkpWb3lySk1Ta3lVQ0dvMEdpeXFFbEpHd3lUK1NVRlZ0RXBOREE5RkZFUWlFalJLSmFSVTFLUWtxSUJCREF3UkdIcUd1ZE16ZEUvUHM3dnY0NXk5VjM3c3h6bm5kdmRNOTlBOU1ZZHF1bnR1Mys1enZ2dXR0YjV2clhVdTRRd2VEKzdiMTNnUnArZm5aQzdNSlg5cFhmVnRUbFM2bnBSc09wNmQyS0pBQ1FBWVNEYVVERTZLb1lPWjZSNXVtL2tEbXZSVFd0VERlMjMzMFYvZHRxMTFwczZaMXZvUFRFd2NHRmMxL2ozVy9Ib2krUTJtWktDUjFtREZna0JRekFDQWxGSVlzZ0FBSll5dWRBRUF4Z29zREJRcHRMb2RXTWxtUmVnL2JHNi9henIyYXp0MmJON3ovdzZnQi9mdGEyemordVU2VlZleVVxL1ZyS0NZa2FnRVZpeXN0ZkZuQlhLS0V5eE9rWm5CeE1oTUJpc1d4bGprSm44Zzc1cmI5OW4ybld2QkxGcGR0a3lzVTQzR2gwalJCeHBKZlgzQ0taZ1oxdHBUQW5FNkJ4TkJCTWhzRjYyc2ZWaU0zR3hhclkvdjJMSGo2TThiUVBUYzVQTi9SaHJYOWRjRzZxbEtZTVhBeXVxQ0lxWGZKd0lRT1FZeU1RaUUzQnJNZCtmYWttUG45aTFuZnhKNDRhL0tDd1pvejc0RGI2dzNhcmVrU2JwVnM0SUkxb1F0VmlTR0c1RVBUb0gvRUJBVENBUW1RdGZrTUNiYjMyNTEzamUrYmZPLy9aOEE5T0MrZlkydFN0M2NWeCs0SXRVSmlMRHFqS215eHpOR0FrQ0FzYmFTbzhJNWtBODlJemxhcmJrdjdqZm1BNmVibjA0TG9EMlRrNytRcVBTK2VyMDJYbE0xNURaZlEyQWNIOHNuNmdBbzhWVGMvd0l3SVJTMVV1aVlMckp1dGljejNkOFozN0xseVJYbnVaVSs0ZGxtODdJa1RYWU45dytOcHlwRmJyTXpLYVZBUkxEaXdvdEt6QkVQWnNoTFJFQnVEVFJwOU5YNng0V3g2OWxtODdJMVpkQ2UvUWV1YXRRYk4vVFZHakRXckRrWUlXSmRhSWxqQmhWQkpTVnFFVUtJRTVnQWF3VUM5eHlsRk1RSzVydnpNTG41NFBqV3pUZXVPa0ROeVlQWE52b0dya3QxY2tiQTZRVUpwVUJ6SXJPZ1QvZzZnTUxFRUJHZmowbzVEQXhqYzJUZDFzNnhMWnV1WHpXQTl1dy9jTlZBMzhBTnRTUTlvK0M0eWxXRUZmdlBNZm1VMkJOeWt2V2xUU3NORVFzckFtdGRmaUp5d2pNekdkcWQ5cktZZE1vY3RIdHk4dkpHdlhIR3dTbS9odUxCRVJHSXY5aElLaWxDQ3dJb1lnQ0VQRGR3d3NEOU8vdm5pQWRQYVhYRDdzbkp5MThRZzU0N2NPQkMwdnFoZFkyaE14eFdFaE55cjBBcy8weDQzRmdiMlVVaFl3Y0dVaEdoZ21xMW0rMmVnQks2YVB2bXpRK3ZtRUhOWm5ORWNYTDN1c1pReFR1dDlSSHNReTg0RWpOeVQ0bjN6N0ZXcXJxWm5HaWswczhISFJXcTNWQnRDQVQxcFdhek9iSmlnREpGSCt1ck44WkYxc1pITFhVWUsyQ21uZ1R0cmk1VXBVV1RPRldaUmY2Y0N3VmU1Q0lIc3Z0NW5TUXZ6UlI5YkVVQTdaNmN2THkvUHZBZXJmU2FxdU5GUTB2S1lWYjYyMUlxNjBRdVRIdzNRQ29DMGxVNVc2NWlQamtIVm5JcE5GT1ZRT3YwUFV2bEkxb3N0SXhXdTlZUHJCODlVM2tuK0xmd1NwZkRpNGhnckFWODJMbkhKRDZIcVFnNzEwb0pEQ3JESzBYakpOaVYwdDlsSWh6dkhEK1lHbm5GMk5qWXpFa1paTFcrcHIvZU55cGl6MXpPUVVqS0VnRW9oeHlCUUZ5RW1Nc3BFbGxnckFFUm9ZLzdvVmhIQUNzdmdNOUQ3ckprQVQxcXVyYkphbjNOU1JuMDNIUFBiVWtiQS8vVDMrZ2ZQRE5LT2NTTTlDVGxnaVV1UEJCMWtMdEk1OTZ0c2NpdHdicjZJR3FXY2NTME1jeDFBTUFSTXc4aEd6VlM5VkpsUVE1alVtaGxzeWVrMDNuNTl1M2JKOFBqdW56Q0txMWZuYWJwNEpsaVQ5RzZLRlVhRUlnRUxxb0VKQlM4S0tSMGpkWmFnQWxucDhQWTEybml5OGR1eDJ4MkFBRHcxb0gzNDl6K1YrS0l0R0VrcTNRQTRFTzVON2NLTExSS0IyMUtWd1A0eXdVTW1waVkydFFZMEUrZENmYUlGTTFXQjBqeEtrdEp1NVJaUTk1S2dGeFk1dFppZ3g3QU0rMDkrTkQwKzNIQTdNWHo2akQyWk5NZ0JkdysrQVc4Yy9oZE9JbzJNdW1DaEF1QWVseC9PZHhiMmZ5SmZKNWV1bVBINk1GS0RsSTFlVWVTbkNuMkZJbTAxNVFXenJ3Y0ZGSXhwbVZ3L256Nmo3Q2JmNFlmcDg5aUQwOEREVUFVY01Yc3UzSEhzZHV3RG5Xa1ZFZlpuMWdyU3haMVpqWEl0ZnozRnlScDF2U09SS2sxSytzeFVaYlZiUVNyWUl4NGRLellVbDVDSlVGdlNBcHc5dklFbnFSSjVKSTVCV0I5T0hFQjBqQlNhRTc4dGNtUzZ0eUtRY0lwbE5idnJBRFViRTZkbDZqMDFVUzhwcXdwWHNHcVZaQnlVU0ZYem5teGN5SENpQjdBazYzZCtORDBlN0dYSi9BRU5TTTRDM0tiQXE2WTkweks2MUNrY0tyWDN5djVWemViVStkRmdLeTJsMm1sMTh4U2xNRUFuRklPWGNHUWplS0pSL2VOd3AzN1kwVDM0L0gyVTdoMit2Mlk0R2Z4VTNwdVVYQWlTUDZwVjg2K0c5OXJmUThqM05mRDNrV0RING8xckxhWFJZQ0kxQzhyNWxXM0ZMMm1zK3pPUThNZFJWSDMzeE9JL1dNbFZiMWU5K1B4MWxQNDYrbXJJamdpWm1tM0xRQXNnQzRnSjRDL09id1RzM21PZmpWd3lsekF4TENRU3dDQW04M21pTkw4V3MxNlZVRXBmeTV5RDBVeEdNUmUyVkNFVm1tc2JEN3ZqT2lCQ001ZTNvTW5xQW14cHdaSGNnQXQ5ekdWUFkvSnptNll6SGd4dWRSVEJab1RFUEVGeldaemhITlJGMm5XcVJXemF1RDBhdEN5Q0F6NUovQ2ZTckVmNUw4VnA1Q3RCK2V4OXE0SXpuK0hzRHBacUZnUGVnZEFEcUFCYkc1c0JsRERWUHNnTXRNOUtVZ0FvTUJKTHVvaW5hUjhVY0lhS3lsZTVkQUpBbTlJOVVFeFlDd3diN3N3eUl2SFM3a21nRWZna2hZS2xhcndUU0tDRGVrZ0htODloWTlPWDQxOXZOZUJZMDhCVHFEa0hJQU1RQXFjV3gvSGgvcy9BZ0JvU3d2ZGRoZG4xVWQ4WlRPTFhKK0ZWaHFVMm91NGEvUHRGdmEwd1dGaW5LWDYwT3p1dzQrT1BvS0oxaDRNVW9xR3FqdVRXZEU2VHVnRW9WaTVwdElyWk1WaVF6S0l4MXE3c0hQNlQ3Q1hKMDRPVGdBbEIyQUFtZmZnSkE2Y0c5YmRnbGNtRjhOSURpS0dGWU1qN1JsWU1XQlNTK0xjdGZsMm5WQnlBWmM4YTJBRWw2cU9sZkwzdmxTTFJhSVNESENLaDJZZXdGMXpYOEJ1dXdkemNnSVhOVjZINjlkL0REWFZqNWw4TnBac0twWDB5SlpnSmJ4SHpjVmdOQm5DayszZCtPajAxWmpnM1lYT09WVllHUTlNMTRQVEdNZE53N2RpWEoySGFYc0FpalFZRFBFRytYam5HQVpydzFDMDBIb1FDQWtsRjJpdDlRaFZITFhyQnhSaFVXeFlsSTJrSmdmTy9jZnV3MWVPL1FOK29IZGhsMm9DMXVBNzh3OWp2Mm5pOXJQK0VTTzFBY3lZdWRncGpGSS96dnNLb1poWmk5SFVnZk9SNlQrdWdyTlVOOHVVdnU1NGNOS0NPUzlTNStLb25ha1VBZ0JRcEdBa1J6dWJReVBwWHlBN21CaEVQTVNaeVlZMDYwV3FUYm01SkJWd0VwVmdVRHR3L21ubVJ2dzdQWW9uc0JjaXhobEtEWHl4KzJXOC9mQmJnWTdUTDliYUtBS2orUXgrZ2doQ2d0RjBzQUxPNDB1SXdESnJZQnh6Wks1Z3pxdnFMOEZOdzdkaU83OENoKzBoNThvcDhYa1BZR0lvMGtoVkRRRFF6VHRGUHh1RnUyK2pQY0tBY1BtQjNtWlY4Vzh1ckJScDlIT0MrNC9kaDd0bmJzUzMrQ0U4b3c3R0VBb2ZVTUJkMlZjZFNHMWdKQm1JVmlJMHQ4ai90TEVXNjlWQUJHZTNCK2VrT2djdTU0Z0JNQStnN1pqenFzWkw4T25oejJCTS9TS095bUcvMEtCY2FIa256OFJRck1DK1dBZ0UzYndOMnpQclp5Z0hhVlgyUzBuSWxRV2RvMTJmRDZ1N1oyN0V0L2toWnhBWGFVMUdrRXdKSk5WZkhmcUZoS3ljenZtTDZmZGlOKy9HcmxPQlkzeENoczg1ZWNHY01qanVBaDBNQVJ6RnlvSGlUWG5JanlLQ3J1bFVQS0NQWExMV1NuUzRaVU5aOUlWZGYzY2ROL0JVYXpkdU9mSXBmSTkrdkNRNEZaQ29CRklIR05FRHNXcFpDRGJvQVR6V2NkVnFnaWZ3Qk8xZEdoenVhVk1INXVpQ09WdlV5M0hVekFSdkRpS09ncE9KL1FkQmtRS1RxdVJlSWtZdVdleHVMbWk1bGt2eHdrVUJBaFF3MDVyQUE5bjM4WXcrdUt6UmJBUXAreW91Ty9JV29BT3M1MzVZQVRZa1RnUitkUHJxeUJ3SWxnYkhGZ3BaNW91Y2MwSGpITngwMWhjY09QWXdpQlUwa2lLMFBEaWF0VmZwRFBMTWlyK2VHWW9ZSklUYzVCRGZuZU1jRnNSRkw0YlpJVldlRkVUTURKRG9kWmpVYmNBdWY3QWZ3dTJlL0J1NDdNaGJZTHZBYU0zcG5MK2EvaUFtbGhOV0lTRkx0WlJmMEhjT2JsajNlV3pBT0k3WVEzSGJqUHhuSXprVUt5aFdzWHB4cU1vUTkzTlVnTVVjQkt5QmhRRnI1aXk0ZUpkdi9KVEFTdFZNaW1DZWMxellmd0d1U045ZXlQbVZnRVFPcEhjZmVRZCtkUHdSWEQvOXA5akxFeWRQeUNIS2pmL2NMaEx5YS9wZWhwdUhiOE1vdlJoSDVUQVVhV2drVUY3OENjUnBIOCtZSUFvSlhCcGZTNlh0QzNGSjNWZ0xMYXBGellOVGp6VWFqWE5kbGtkUGs3dlVOZmV0aDNXNkgvbGNCMjg2ZENudXgzOEN1bWdyTExzckpNQnI4RXFrbHZDQWZ1TFVDVG1FZjlzemg0SFg5TDhNTnd4L0hodjV4VGpzbWFPUlZOZ0FBSnAxWkpXbXBDaEc1UHJkekVVU1p3OGNnV0VrUnlmci9JUXp5UjV4bG9EaUlrQklSVkZjV1orNEFSek5abEZyMUhEdnhtL2lOL0ZycnRUU3lwbjBNOTZESCtnblQ1NlF5eUp3cmtqSVpYQm03SlJYeUs0NnFWTGlMVE9Ib3ByMytWVUk1UVpoTVl0MU1rQWdBTWwvY1NiWkFWankrMzNXSStoQ0RLVk4wckIyUWtTWU5pZlE2T3V2Z3JUQ2NEc3FKMkNXbzVERjlYT0M4ZnlWeGk5VndOR1VlalhEdnFqWWloaGtjdW00bkhkQ3JtRnkxK21HQXdyQlVRZ0UxbHBra2gxZ2JmVmptZTBDVnNWeFNoek0rVTJ0OHJnMlZJUkQyV3dWSkZtQ1NUa1dSZStrcFBNZXQxS3RQRGlmSHY0c3pxTHRPTlFEamlKZG5CK3E1UndBRkJmaFJhWC9tRlZjdUNxRUxzR0tnYmI2TVU2QjcrYldaQVo1M0pBUWxJZjhVbWxiaEkwSkNCeElEUWZTRyt5dnU4Uk5DeG9ySzE4VnpUMUlRUVNtd01YOTUwWndqc25oS0FDNWxIeEZCSW9WTkJlSk90Z0dFZXZ5amdmRitvbHNvWUU4Tko2RlFyYWRBdC9sc2JHeEdSSDdpTFVHU25FYzlEdXdISXRDdU1HdjJWcHJuU1Fnd3FIY01lbHJHKzl6SUpWemtxd0FIQzYxTEFESXJHZU9kdUI4Y3ZBbW5FWGJjVnlPUXBHT3pqeUFZOFc2Y3U3RGlvaWpHSXgvUWhqTVplQTRyRmlWcWdnaHN4a2cvT2pZMk5pTXN4clcvTEJydXNVR1JOQTk1VUxHeFZaWCtJWEcySUpKOVg1OGZjTzM4QWFVUUxKWVhuSUtPU2VFVnR0L3IwcmdzR2NPTVJnTVRUb20yY0NjaEpPWUN0aDdzTUpqc3I4dHdva3B4VHFHRjNreFdmUzVMTVNhSDBZbG5VcHlUMjZkZWpUR3hyQUtrOHk0aEJUN3lOVm1QUHZFWFd2VXFpRHBaVElvSzhDVWVjOGlEVnc4VUdLT1BRb2x5dnNyNWRVTXgzTU5PU2c0OTNKT0tqaENsWkFxWDA4c1RnQXNMRkpKN29rQWJkMTY5b1BXNUkrNlhpMjdjbTlsd2Q1T1lGaDVoSU13RXJhSUlQM0x4dS9nVGZTNjVVa0FVNGpCbUpBWnVLVHZmUHo5NEsxRnppR0c1aFRLVnhzR3g2cWJjQW9pcDVKVnFScTVhcVg4dGxuUjZvam5Ud1c3d2pBdE0xMVlreis2ZGV2WkQxWW5xK0RiTTlNRk04ZGhQL1cyV0tQYURnQlcyeVFNd2xSMkFxcXU4ZlVOM3o0MVNPTFBnSHhZK1dwMVNkLzUrTVRRWnpGRW0yTE9jYXhCMUR0R2NqQXhFazZMd2dGVW1CUFl6ZVRBREtFVjJtSk15a2VIaGZndWc1RWNXWjcvODRMUnMrM29yd0J5d2hoVHJMT1ZZSGF2RmhiMGpYcDNDNWtJVS9ueENOS2I2ZldMZ3lRbDh6bFh0Q3d1NlRzZm54NitGVU8wcVpSelZNV1pCeUIwS2Vkb1NxSTdEMkhIZnRabnJRa2RRbGhZaEJaemVRK0JpR0dzZ1lXY1NFemZMUXNBMnJGajlHQTM3OXpSemp0eDViWThaeWlhN2VocGpuSGMzNG5NbFlKSjM5andiYnlGZm11aG1QUUZJRllyQmk3cGQrRDAwOWs0Sm9kanpuR1ZTUldXZ0RpQ28zcFVjcEdURkVnSTFscnYxRldVSjM1WTZ0czROdmE2Y3VTd2VYWkgyT3hZME81SWJmMVRSa3dXRzJpbERZenlVbFlBUlB5cklBdTJOTnp0QUZQNWNhRE91R2ZEdnpxUWpHY1MrMjVndTFESWdUbUR0QmxIclFlSGRkUTdzVnFSaW1FVWdOSGVrSlo2eWJEZUJxU3E1cGxsWXpJVzJOaDNEOTRydHptc3RWbHE2NTlhY2dWdjI3YlJwMG5rNC9QZCtZaDIzT2ZyTWRmUjlNVkViWXRrR3hlN0NjOTNqNEZxdWdBcEE2UmJ5amtKY0duL2haRTVSODJNQzZzQVRrOHBkd0M0VUZaUWtWbkJZc0J2MUJjdGV1dERxYXFheTUxRHhZek1ka0VpSDkrMmJmVHBrKzRvY3A1L3d0aHNmKzZYczhQU0l4TVdzQ21XVUVIRnh4U1B1YW94blRtUTdocTVGMWZVM3U0cWwzRi8vZEtCQy9GM1E1OXg0TmpEQUZNMG5ZcDAwYWZ4M2lxSVAvZVpLMkZYTnFKaHhsN2R1YmJ4eFN2Ympzem1zQ2JmejNuK2lXVlpvcjBIcHE0RW1kdjZrb0hLVFdybDVVanVtU1dWeHlhTEZpd1NES3BCMURMQ25YTzM0Zjd1dC9CeTJZRTMxbjhYRFI1Qnk4NUJrNDc2UnBFdTd0YnhDdGt4UnptUkNLb3NXeEJ4TktRQVFNd2VKRldadTRkMk1wSHl2U0RDYlBjNEZOSjN2V2p6Nk8zTDlveDdKeWR2SjYydTZOTURjVHhiYVN5ZDV1eStwdXNZUnVxV1JtY1B1djV4WUEyVXYxQmUwR1NQMVVvbGppRTlRejVtNWFjdTRia2NnWWpNOGJuQzJRM3JialhQV3JBbS8rS0x0bXk1Y3RtTDVBQ2dyTDNHNU5uK2ptbkZlOXNYMit0YjJjSW1vV3M2bURZbmNBeGQxT3FONkkzSzQ1a3dDdGVjUkhBVUtTY0lTK0NFMW1yZ2gvYS9pNGxqNHltQUUzU2RHMFpZTUJUYVdSdTU2ZTVYMWw1ek1oZTA2REUyTmphVFN2SzJUdDVHMTJSTHpyQlA5K2lhRGhLVjR1ekdWcjlEaUpoc0NZUlVwY1hXeHlKTmRoZEdYbVQ0YlN2eHpwM0FzWFVwS0ZxcTRVT3hSbVl6ZEcwSHFTUnY2MTBlWHhaQXdZSWt0dmErZHQ3eWcvN1ZmUjhDWTNNd0s0dzBOaUxsbXR0RzlkYUJTWUhKdFVsZDZGVnpUbGluSXk3Q0R4VnZWWFIrZ3FZTFE4UGNaR2puODBoczdYM0JVcHdXUUFDd2Jldkd6eVZXNzV6TFptRkVWaDJrc0dGeFZuMEVLZGQ4RDVrcWF5bmxmVVVocDRWQ0xSZHJ2U3dvR2srbHBacVNYbkp2Z3lFaWFPVnpTRVh2M0xaMTQrZVcxU0plenRHY25McldLSHRkWGZjdHVnM3hRbzhnNXVhN3N6QmlZcG52blhTUzd4UTZhY0d4ZUpRM2oxQ3lHNEZGVEl6TU91YWtrdTRjMnpLNmVyZGtobVB5NEtGck8raGVWMU4xMUhRZFpwVnZCM2ZqbGh6dGZENzZyUmhXVEc0S2dYSTNvYmk1aFh4eUQ2M1VZcm5QNVp4TzNvYXhHUklrTzdkczJuRDlzZ3ZMU2k5aTh2bERmOWlSN2gwS0NuMXBIOFJYaXRVRHlTMHpkRTJuNU1nNWhwa1I0OHEvMHJFL1RxQUtPRWJjSGlJSndFeVl5K1pneGFKRzZUdTNuTDNoU3l1cXZLZHpFYzNtMUhsR20yK0NhTFNtNmt1dXNxMXNpOXJHemg3N25sVEhkRndib2hSS3dZa2IzMkoxOTZNV0xqL29KODBLbWNuUk5XMEFtRks1K3UyeHNkR2ZyUGdGTzUyTEdSc2IvY24rTEIrSDRNNVdQbzkyTnQralNWYTJEZXUrNW5oZmZJaXFWS1hRS2lrYVhYNldSWjVSaE9wTktpSUNUUnFLTlZwWkMyM1RBa0IzN3MveThkTUI1N1FaVkQ3Mkg1eCtjOWQyYm1TbHQ2YXE1dXdDblZ4UTlyNUJBQlpwekpWdjBURTJMNDJkd3BZYTk0U21Beml6R1l6TllLM1puM0x0cXEyYk50Nzdna0wraFFLMGRkUEdldzhZT1ljRTErZW1NOWUyN2ZoZUhvVUNsNTc3YloyWkxQZTZRVkl4bGZIVjh5ME9sTjc1cGR6eWRYcEkwTTVhNk9SdGlPUnpCTHIrZ0pGelhpZzRxOEtnOGpFeE1iRXViZlIvMkpLOTJnTDl6QW9LYnRwUTdwbElwUXdYNWRtaVdMK3ZURWxSdWd1QUJBd0ZZdzF5eVl0NWwrQUVDOTNRYmMzOTdjL2pHeXhWanFtcHFZRk9SbjlBaVh4QUJLOFd2OTNnOWdUSkdVNWYvYXkvWjFTc2xBYVd2VWJVVmJiY1pMQnc3Mm5ta3JrQ2lmeFlNcnE1bHNoZG82T2pzNnQ5TFd2K0ptOVRVOGRlMHMwN2J4TkZsMXJZaTVrNXNTWUh4VGFvay83RlBxU2JYWVhtbHJVR3dvQTFPZGpkY0pNeCtQdEs2RHVhazd0SFI0ZWZXY3Z6WDNPQWVwbVZaWEp1VHViQ05FM1BNVmJHeGNnNUdiS2hST2wxVEpUN05SdWRtZnhvZ3VRNEtYcGFNZTNwZHJ0UGExRVBKd245ZEMyWXN0VHh2d3lIS0FMekE5bThBQUFBQUVsRlRrU3VRbUNDKSBuby1yZXBlYXQgc2Nyb2xsIDAgMDtoZWlnaHQ6NzJweDt3aWR0aDo3MnB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19zZW5ke3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjEwcHg7dG9wOjUwJTt3aWR0aDoyMXB4O2hlaWdodDoyMXB4O2xpbmUtaGVpZ2h0OjE5cHg7bWFyZ2luLXRvcDotMTFweDstd2Via2l0LWJvcmRlci1yYWRpdXM6NTAlOy1tb3otYm9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojNzM4M2I1O3otaW5kZXg6MTt0ZXh0LWFsaWduOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXRyYW5zaXRpb246YWxsIC4yczstby10cmFuc2l0aW9uOmFsbCAuMnM7LW1vei10cmFuc2l0aW9uOmFsbCAuMnM7dHJhbnNpdGlvbjphbGwgLjJzfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19zZW5kX2Fycm93e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7d2lkdGg6OHB4O2hlaWdodDo4cHg7bWFyZ2luOi00cHggMCAwIC02cHg7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjZmZmO2JvcmRlci10b3A6MnB4IHNvbGlkICNmZmY7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LW8tdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMnM7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4yczstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMnM7dHJhbnNpdGlvbjpvcGFjaXR5IC4yc30jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jc3Nfc2VuZF9iYWNrYXJyb3d7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDttYXJnaW46LTRweCAwIDAgLTZweDtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJlZDtib3JkZXItdG9wOjJweCBzb2xpZCByZWQ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIyNWRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTstby10cmFuc2Zvcm06cm90YXRlKDIyNWRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlKDIyNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4yczstby10cmFuc2l0aW9uOm9wYWNpdHkgLjJzOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4yczt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19ub3RpZnl7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjEwMCU7bGVmdDowO3dpZHRoOjkwJTtib3JkZXI6MXB4IHNvbGlkICNEQUQ3QjI7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjEzcHg7LW1vei1ib3JkZXItcmFkaXVzOjEzcHg7Ym9yZGVyLXJhZGl1czoxM3B4O3BhZGRpbmc6OXB4IDE1cHg7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MS40O2NvbG9yOiM0RTRCNDE7bWFyZ2luLWJvdHRvbToyMHB4O3RleHQtc2hhZG93OjAgMXB4IDAgI2ZmZjstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMCAjZmZmOy1tb3otYm94LXNoYWRvdzppbnNldCAwIDFweCAwICNmZmY7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwICNmZmY7YmFja2dyb3VuZC1jb2xvcjojRkVGQUQwfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19ub3RpZnk6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xMXB4O2xlZnQ6MjdweDtib3JkZXItbGVmdDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3A6MTBweCBzb2xpZCAjREFEN0IyO2JvcmRlci1yaWdodDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19ub3RpZnk6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTEwcHg7bGVmdDoyN3B4O2JvcmRlci1sZWZ0OjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICNGRUZBRDA7Ym9yZGVyLXJpZ2h0OjEwcHggc29saWQgdHJhbnNwYXJlbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX3Bob3Rve3BlcnNwZWN0aXZlOjEwMDBweDstd2Via2l0LXBlcnNwZWN0aXZlOjEwMDBweDstbW96LXBlcnNwZWN0aXZlOjEwMDBweDstby1wZXJzcGVjdGl2ZToxMDAwcHg7LW1zLXBlcnNwZWN0aXZlOjEwMDBweH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jc3NfcGhvdG9fZmxpcHBlcnt0cmFuc2l0aW9uOi41cyBlYXNlLW91dDstd2Via2l0LXRyYW5zaXRpb246LjVzIGVhc2Utb3V0Oy1tb3otdHJhbnNpdGlvbjouNXMgZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbjouNXMgZWFzZS1vdXQ7LW1zLXRyYW5zaXRpb246LjVzIGVhc2Utb3V0O3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDstbW96LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDstby10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7LW1zLXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2xhd3llcl9waG90by5sbmt3dF9jc3NfcGhvdG9fZmxpcHBlZCAubG5rd3RfY3NzX3Bob3RvX2ZsaXBwZXJ7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyl9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX3Bob3RvX2Zyb250LCNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19waG90b19iYWNre2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47LW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstby1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTp2aXNpYmxlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowOy13ZWJraXQtYm9yZGVyLXJhZGl1czo1MCUhaW1wb3J0YW50Oy1tb3otYm9yZGVyLXJhZGl1czo1MCUhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6NTAlIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW59I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX3Bob3RvIC5sbmt3dF9jc3NfcGhvdG9fZnJvbnQsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX3Bob3RvLmxua3d0X2Nzc19waG90b19mbGlwcGVkIC5sbmt3dF9jc3NfcGhvdG9fZnJvbnR7dHJhbnNmb3JtOnJvdGF0ZVkoMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWSgwZGVnKTstbW96LXRyYW5zZm9ybTpyb3RhdGVZKDBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGVZKDBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlWSgwZGVnKX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9sYXd5ZXJfcGhvdG8gLmxua3d0X2Nzc19waG90b19iYWNrLCNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2xhd3llcl9waG90by5sbmt3dF9jc3NfcGhvdG9fZmxpcHBlZCAubG5rd3RfY3NzX3Bob3RvX2JhY2t7dHJhbnNmb3JtOnJvdGF0ZVkoLTE4MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWSgtMTgwZGVnKTstbW96LXRyYW5zZm9ybTpyb3RhdGVZKC0xODBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGVZKC0xODBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlWSgtMTgwZGVnKX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9sYXd5ZXJfcGhvdG8gLmxua3d0X2Nzc19waG90b19mcm9udCwjbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9sYXd5ZXJfcGhvdG8ubG5rd3RfY3NzX3Bob3RvX2ZsaXBwZWQgLmxua3d0X2Nzc19waG90b19iYWNre2FuaW1hdGlvbjpzdGF5dmlzaWJsZSAuNXMgYm90aDstd2Via2l0LWFuaW1hdGlvbjpzdGF5dmlzaWJsZSAuNXMgYm90aDstbW96LWFuaW1hdGlvbjpzdGF5dmlzaWJsZSAuNXMgYm90aDstby1hbmltYXRpb246c3RheXZpc2libGUgLjVzIGJvdGg7LW1zLWFuaW1hdGlvbjpkb25vdGhpbmcgLjVzOy1tcy10cmFuc2l0aW9uOnZpc2liaWxpdHkgMCBsaW5lYXIgLjE3czt2aXNpYmlsaXR5OnZpc2libGV9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX3Bob3RvLmxua3d0X2Nzc19waG90b19mbGlwcGVkIC5sbmt3dF9jc3NfcGhvdG9fZnJvbnQsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX3Bob3RvIC5sbmt3dF9jc3NfcGhvdG9fYmFja3thbmltYXRpb246c3RheXZpc2libGUgLjVzIGJvdGg7LXdlYmtpdC1hbmltYXRpb246c3RheXZpc2libGUgLjVzIGJvdGg7LW1vei1hbmltYXRpb246c3RheXZpc2libGUgLjVzIGJvdGg7LW8tYW5pbWF0aW9uOnN0YXl2aXNpYmxlIC41cyBib3RoOy1tcy1hbmltYXRpb246ZG9ub3RoaW5nIC41czstbXMtdHJhbnNpdGlvbjp2aXNpYmlsaXR5IDAgbGluZWFyIC4xN3M7dmlzaWJpbGl0eTpoaWRkZW59I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX3Bob3RvX2Zyb250IGltZywjbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jc3NfcGhvdG9fYmFjayBpbWd7bWF4LXdpZHRoOjEwMCUhaW1wb3J0YW50O2JvcmRlcjpub25lIWltcG9ydGFudDtoZWlnaHQ6YXV0b31Aa2V5ZnJhbWVzIHN0YXl2aXNpYmxle2Zyb217dmlzaWJpbGl0eTp2aXNpYmxlfXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC13ZWJraXQta2V5ZnJhbWVzIHN0YXl2aXNpYmxle2Zyb217dmlzaWJpbGl0eTp2aXNpYmxlfXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIHN0YXl2aXNpYmxle2Zyb217dmlzaWJpbGl0eTp2aXNpYmxlfXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyBzdGF5dmlzaWJsZXtmcm9te3Zpc2liaWxpdHk6dmlzaWJsZX10b3t2aXNpYmlsaXR5OnZpc2libGV9fV86Oi1tb3otc3ZnLWZvcmVpZ24tY29udGVudCw6cm9vdCAubG5rd3RfbmlwcGxlX3VzZXJ7ZGlzcGxheTpub25lfV86Oi1tb3otc3ZnLWZvcmVpZ24tY29udGVudCw6cm9vdCAubG5rd3Rfc3R5bGVfc2hha2VyOmJlZm9yZXtkaXNwbGF5Om5vbmV9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfdGl0bGV7cGFkZGluZzoyMHB4IDA7Y29sb3I6IzUyNTE1MTtmb250LXNpemU6MTJweDt0ZXh0LWFsaWduOmNlbnRlcn0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja19maWVsZHtwb3NpdGlvbjpyZWxhdGl2ZX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja19jb250cm9se3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDozNXB4IWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkICNiY2MzYzkhaW1wb3J0YW50Oy13ZWJraXQtYm9yZGVyLXJhZGl1czo0cHghaW1wb3J0YW50Oy1tb3otYm9yZGVyLXJhZGl1czo0cHghaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6NHB4IWltcG9ydGFudDttYXJnaW4tYm90dG9tOjIwcHghaW1wb3J0YW50O3BhZGRpbmctbGVmdDozN3B4IWltcG9ydGFudDtmb250LXNpemU6MTJweCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbjphbGwgLjJzIWltcG9ydGFudDstby10cmFuc2l0aW9uOmFsbCAuMnMhaW1wb3J0YW50O3RyYW5zaXRpb246YWxsIC4ycyFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfY29udHJvbDpmb2N1c3tvdXRsaW5lOm5vbmUhaW1wb3J0YW50O2JvcmRlci1jb2xvcjojOTFiZWUzIWltcG9ydGFudDstd2Via2l0LWJveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNSkhaW1wb3J0YW50Oy1tb3otYm94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwwLjE1KSFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwwLjE1KSFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCBzZWxlY3QubG5rd3RfY2FsbGJhY2tfY29udHJvbHtwYWRkaW5nLWxlZnQ6MzNweCFpbXBvcnRhbnQ7Y29sb3I6Izg4OCFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUhaW1wb3J0YW50Oy1tb3otYXBwZWFyYW5jZTpub25lIWltcG9ydGFudDthcHBlYXJhbmNlOm5vbmUhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2NhbGxiYWNrX2RhdGVfc2hvcnQsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfZGF0ZV9mdWxse3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiM5MzlhYTE7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2NhbGxiYWNrX2RhdGVfZnVsbCAubG5rd3RfY2FsbGJhY2tfY29udHJvbHtwYWRkaW5nOjAgMCAwIDVweCAhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2NhbGxiYWNrX2RhdGVfc2hvcnR7d2lkdGg6NTUlO3BhZGRpbmctcmlnaHQ6MjBweDttYXJnaW4tcmlnaHQ6LTRweH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja19kYXRlX3Nob3J0IC5sbmt3dF9jc3NfYXJyb3dfZG93bntyaWdodDoyNnB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2NhbGxiYWNrX2RhdGVfZnVsbHt3aWR0aDo0NSV9I2xua3d0X2NsZWFyX2FsbCAubG5rd3Rfc2VuZF9jYWxsYmFja3twb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDo0MXB4O2xpbmUtaGVpZ2h0OjQxcHg7bWFyZ2luLWJvdHRvbToxNXB4O2JvcmRlcjoxcHggc29saWQgI2IxYWU5MTtiYWNrZ3JvdW5kOiNmZGNmMzE7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjRweDstbW96LWJvcmRlci1yYWRpdXM6NHB4O2JvcmRlci1yYWRpdXM6NHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjojMDAwO2ZvbnQtc2l6ZToxMnB4O3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyO3RleHQtc2hhZG93OjAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtiYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwjZmRjZjMxIDAlLCNmYmI2MmQgMTAwJSk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxjb2xvci1zdG9wKDAlLCNmZGNmMzEpLGNvbG9yLXN0b3AoMTAwJSwjZmJiNjJkKSk7YmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsI2ZkY2YzMSAwJSwjZmJiNjJkIDEwMCUpO2JhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KHRvcCwjZmRjZjMxIDAlLCNmYmI2MmQgMTAwJSk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxmcm9tKCNmZGNmMzEpLHRvKCNmYmI2MmQpKTtiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwjZmRjZjMxIDAlLCNmYmI2MmQgMTAwJSk7YmFja2dyb3VuZDotby1saW5lYXItZ3JhZGllbnQodG9wLCNmZGNmMzEgMCUsI2ZiYjYyZCAxMDAlKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2ZkY2YzMSAwJSwjZmJiNjJkIDEwMCUpO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZkY2YzMScsZW5kQ29sb3JzdHI9JyNmYmI2MmQnLEdyYWRpZW50VHlwZT0wKX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9zZW5kX2NhbGxiYWNrOmhvdmVye2JhY2tncm91bmQ6I2ZiYjYyZDtiYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwjZmJiNjJkIDAlLCNmZGNmMzEgMTAwJSk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxjb2xvci1zdG9wKDAlLCNmYmI2MmQpLGNvbG9yLXN0b3AoMTAwJSwjZmRjZjMxKSk7YmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsI2ZiYjYyZCAwJSwjZmRjZjMxIDEwMCUpO2JhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KHRvcCwjZmJiNjJkIDAlLCNmZGNmMzEgMTAwJSk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxmcm9tKCNmYmI2MmQpLHRvKCNmZGNmMzEpKTtiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwjZmJiNjJkIDAlLCNmZGNmMzEgMTAwJSk7YmFja2dyb3VuZDotby1saW5lYXItZ3JhZGllbnQodG9wLCNmYmI2MmQgMCUsI2ZkY2YzMSAxMDAlKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2ZiYjYyZCAwJSwjZmRjZjMxIDEwMCUpO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZiYjYyZCcsZW5kQ29sb3JzdHI9JyNmZGNmMzEnLEdyYWRpZW50VHlwZT0wKX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9zZW5kX2NhbGxiYWNrOmFjdGl2ZXstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAycHggM3B4IHJnYmEoMCwwLDAsMC4yKTstbW96LWJveC1zaGFkb3c6aW5zZXQgMCAycHggM3B4IHJnYmEoMCwwLDAsMC4yKTtib3gtc2hhZG93Omluc2V0IDAgMnB4IDNweCByZ2JhKDAsMCwwLDAuMil9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfcmV0dXJue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyO2NvbG9yOiM5YWExYTc7Zm9udC1zaXplOjEycHg7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja19yZXR1cm46aG92ZXJ7Y29sb3I6IzAwMH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja19yZXR1cm46aG92ZXIgLmxua3d0X2Nzc19hcnJvd19sZWZ0e2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgLTU2cHh9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfcmV0dXJuOmhvdmVyIC5sbmt3dF9kb3BfaWNvbl9yZXR1cm4yY2hhdHtvcGFjaXR5OjF9I2xua3d0X2NsZWFyX2FsbCBbY2xhc3MqPSJsbmt3dF9pY29uXyJde3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6OHB4O3RvcDo5cHg7ei1pbmRleDoxO3dpZHRoOjE3cHg7aGVpZ2h0OjE3cHh9I2xua3d0X2NsZWFyX2FsbCBbY2xhc3MqPSJsbmt3dF9pY29uXyJdOmFmdGVye2NvbnRlbnQ6Jyc7aGVpZ2h0OjIwcHg7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiY2MzYzk7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXJpZ2h0Oi02cHh9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfaWNvbl9waG9uZXtiYWNrZ3JvdW5kOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQVNDQUlBQUFEWnJCa0FBQUFCRFVsRVFWUW9rWTNTVzJ1RE1CUUFZUC8vcnhwRktNcTgxcXFUWmxYVUVvSlkzUVJKWTNQMkVCWXlUYzNPUzVKRHZseVBCUUFBZ0VsbnUrSFJpMG5Yd3ovQ0FvRGlzNHJTWXFac3BpeEtpeWd0T09jRzFnK2pGMmZxdlB4eVJXVnRZRTZRVFBORFRWRzJIQnpmd042Tzc1UXRhdW8rVVMvT0RBeVZkZFhjMUJRbVhZdUpnVDA1dDkyd0gwYVpRbVd0RHZVTWZpOGpwdzVmMy80cDMzOU1TelFyaWNwNlgxcXl0NVZlblBYRDJHTGluL0tENDZPeWxndFo2aHJiMDZLcWFURzVUNVN5UlZTRmtIL1lWcTdpL0lFdzZUUnNYODZVMlc2b1owS3Vma1V5VVVCNnBwV2M4eWd0UkNXOFpGS2lxcUZzbWVhSEV5VDU1YXAva2xVOE9hK2FtKzJHVHBDb094dllxL2dCVEk2cDk4R08rRm9BQUFBQVNVVk9SSzVDWUlJQSkgMCAwIG5vLXJlcGVhdH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9pY29uX3VzZXJuYW1le2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBU0NBSUFBQURkV2NrOUFBQUJTRWxFUVZRb2tZMlMzWXFETUJDRisvN3ZsTEpJckdoVVdvdllDaGJGSDBLUVlNeENjVFhqWHRqZGpXa3VkcTRtNFh5Wk9UTTVyUHNBQUQ2SUtNayt2REJLTWo0SUFOQUZCME1kWDI5VjB5MUtBY0NpVk5WMDhmV21NenVnS0d2S2VxTW1aWDFSMWhaQUFUaCtiRFN3aGVQSDZ1ZitEM2hPYzNvdjN0WHJ1cWIzNGpuTkpqRE55em5OcmNBNXphZDVzWGh3dzh1aWxLRmVsSExEaThYRHVxNWlsT2MwVjVvTkJSQmZiMktVZGdBQWlySjIvTGlsYkJobFM1bmp4MFZaMjhkYU5kM3hGRVpKaG5CUU5SM3JlVXNad2tHVVpNZFRXRFhkRHFDc3p4L1Y5cElZcFJjbG44OHZMMHEyWmdBZ2YxVGJpZzVXdTJLVXgxT290LzVyL1FVZ2x4Z3JlejhpSEdnQUpnQXdqSkwxM0JncjYva3dTZ0JBTHRHQllBT3NmK2tGWUIxd2lRTGdnMmdwZzMyMGxQRkJLS09DRnlVSUU0UURoQU9FQ1hMSks5SHluZW4veHplTFZ6T1hVL1oxcVFBQUFBQkpSVTVFcmtKZ2dnQT0pIDAgMCBuby1yZXBlYXR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfaWNvbl9jaXR5e2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBVENBSUFBQURBb01EOUFBQUEzRWxFUVZRb2taMlJid3VDTUJERy9mN2ZTZkRGUUJwR0dtVTBNQmhNa1NHU0ZZUzV2RjRNYnFjdStuUGNxK2QrYk04OUY4QXZGZnhKUzFXdE5ydVE4WkR4TEJkbHJmMTBQeGprYU8rUGhZZk9jckZFYlJkU1RlamIvWUV6eHRPeTFsSlZqS2RXaWVLa0g0eWpwYXFRYnMrZFZidkxGVVc2UUZCSWhRUDZxZGRNVU5ZYUIxSlZWcVdpYmxwSDk0T0o0Z1JuV1M3bzBuUGZBQ0JPOHR0TWJONzBlUm9SZmRqZGtocjFPcDdRQUxEZUhpaWE1UUlXNVdpYThXdzVEdzBBbVAxc09UL2RENGJ4bFBIVWk4NXBBTkJOaS9mL1FEL0g4UjFuNndWUzRRNGtaeE5JQmdBQUFBQkpSVTVFcmtKZ2dnQT0pIDAgMCBuby1yZXBlYXR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfaWNvbl9kYXRlX2NhbGxiYWNre2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkVBQUFBU0NBSUFBQUF5bTZJREFBQUJBVWxFUVZRb2thMlMzV3FEUUJDRjkvM2ZhWmRTVmlYN0UwUVJUVERrdHBRU2RBMklkV2NtRjVzMEpxM1ZRZy9uNHR4ODdNelpZVVRrQWJaNTVRR0M1N0xOU2c5QVJLeXFqMm14NTFMbFZWM3NEbmxWYzZtTDNlR1cxVFNueGI2cWo0eEhHaEZiMTlGTnYyUkU1Rkl4RVJzUEFJaHI3QUZFYkZqak9pNlZ6Y28xNXBGdVhjY1FrVXRONjhRalRVU0JVZi9KblB2UGZoanZqRnhpK21FVXNVbHN0c0MwcmpzMUxSRjVnTmZOVnNUbThSMzFBMk96a2t0OWF0ckVacUdsdVgzdXZYa0FxVkllNlVBK2R6QjU1NkhyWWZRdmlYbDcvL2krNFhTZjUvOEp0L2czWms3WDJZaEl4R1lZL2RmTnp6bk1mR1VhMTRXRFgzU29rYTJjYXFvTFVrOWNVTWVLTzFvQUFBQUFTVVZPUks1Q1lJSUEpIDAgMCBuby1yZXBlYXR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfY29udHJvbDpmb2N1cyB+IC5sbmt3dF9pY29uX3Bob25le2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkVBQUFBU0NBSUFBQUF5bTZJREFBQUJHRWxFUVZRb2tZWFJNV3VFTUJRQVlQLy8ya1Z3Nk9CeU9Ea1ZPaDBGUlpGREtsZ3FPT1JBc0NIVzVnaHF6TVY3NlNBRVQ3M2NXNUk4OGoxZVhpeWxsRktxd0lNVDR0Y0lsMlJRejhKU1NoM0xpNSsxWEVndXBKKzFmdFlDZ01sVWREeWN5UExTK3plTkVUTVpOeUVkdnk1VFFrNTJnRTNtNWVOSHlHbVpvcDN3MHNaa1lzU1M4MTBuQlI0K3E4NWtiZ0JPaUNzNjZsU00yUEs0WS9RRDlEM01oSmMyaHRGWjg3SmlNV0lHWnVuZGxoMU9wS0pqWHZkZTJ0Z0JqaEdicTFqTEF0c21JOFR5dXFlZEVIS2F2eDRBN3N5V3JlTHQ2Ni9BdzlxWUdSZlNDZkdPTVRBdXBCMDhNSnFoWDY0ekFPQm5iVjczRDgzTW5CQkhpQWs1ZGZ6cUp1UllYblptc0lvYlFISm1kb0RkaE9oV241amQrQWZEWTNBNE5SelI1UUFBQUFCSlJVNUVya0pnZ2dBPSkgMCAwIG5vLXJlcGVhdH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja19jb250cm9sOmZvY3VzIH4gLmxua3d0X2ljb25fdXNlcm5hbWV7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCSUFBQUFTQ0FJQUFBRFpyQmtBQUFBQlBrbEVRVlFva1pYU3dhdUNNQndIOFA3L2d6em9JblR3R3A2OGRqRUN3d2lSaENEQmc1Rll2elF4MXRJM2RiKzlnOURMYVQ3ZWoxMDI5aG43L3JhSjZCWWlocmRTZDlQcDZxSzdhWGdyRVZIMGFpSVozVTJkMDZOcU9DSldEWGRPRDkxTis3TEROaUh4cjRXMHc3OFdtNUI4WkJ4UnRhQi9NQ0txRnZEdStpOHJXYjA0NVAwWVFvakZJUzlaUGN4WTNSaGVOc2dNTDJOMU04eUVFTE0xVkEyWFROVnd6UVpwc2NPQU1NUEwzbU53Uk1QTGdMQXhob2piSTFFdDJKK2ZVZjY5UHo5VkM3WkhNdllBdTRoT1Y1ZTVreWhtdkl0b2tCVDc4MU14NDdtVFRGZVhYVVFIbUEvRk1yaTNwK2FVYVRiUXN0SnN5Q2xyYjdFTTdqNFVNcE9ha1ZQMnRZeGI4MnJNYkEweVU4eFlDdENmS21ZOHpJQ3dJSkUvVjVBVVFOZ2Y3RDNBSy9ZWTQ0aHQwN0ZiN1dQd1FhYlpvSmp4K0Job3lYL3JCNVpzbWFsV0UrNHJBQUFBQUVsRlRrU3VRbUNDQUE9PSkgMCAwIG5vLXJlcGVhdH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja19jb250cm9sOmZvY3VzIH4gLmxua3d0X2ljb25fY2l0eXtiYWNrZ3JvdW5kOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQVRDQUlBQUFEQW9NRDlBQUFBNFVsRVFWUW9rWjJSdlF1RE1CREYvZjhIRjhlTTNUcTVkckU0eEtGSVFSQTZDQTRXTlZpa3RWYmJOTUoxQ0p5bmhuNGRONzM3a2J4N1o4RXZaZjFKaDFtNzJsVzJsOXRlN2taMVhIUm1XcW9CT2RxYnc5bEF1MUc5UkhVSGFUT2hiL2NuemhnWGNkR0ZXY3U0MElyamwxSU5JeDFtTGRMSDgwT3I0aXBScEF0WVFkcmdnSDVxTkdQRlJZZURNR3UxU3NXazZrZGFxc0h4UzV5NVVVMlhudnNHZ0cxeStUWVRuVGQ5bmtaRUh4NXZTWTBhSFU5b0FGanZUeFIxb3hvV05kSTA0OWx5QmhvQU1QdlpjbVphcW9GeHdiZ3dvbk1hQUpLcXgvdC9wdC9YQzdMVUJEYUF4c0JlQUFBQUFFbEZUa1N1UW1DQ0FBPT0pIDAgMCBuby1yZXBlYXR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfY29udHJvbDpmb2N1cyB+IC5sbmt3dF9pY29uX2RhdGVfY2FsbGJhY2t7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCRUFBQUFTQ0FJQUFBQXltNklEQUFBQTdVbEVRVlFva2JXU3ZXdkRNQkRGOWY4UHd1Q2wwQ0Y3cGt3Rkx4S0JCRzhCRDhHRkRCM0NrWU44S0JnVDUyUkpsMEZPS0JRNzl0REhHOTZnSDA4Nm5XQm02L3g4YzdUT1J3OW5aaFo2ZDEwVVo2bmdhM3VKSHNpTDRweVZSa2dGSVFSVEV6ODFrRU1JVW9GSU5Gam5mUWhqYkoxUGx3ZUJGVWtGODgxeGpLVUNyRWpFT2g2bmVQSWZtTHF4RGJVVG1JYmFSTU1zeHplTXFXbHY3c3hzbmY5WVlhTGhmVThjenMrcG1lVW9GZnorbjE3R092KzVScWxBS29pRm8yWkFyVXVYaDIrOC9YM2gwQXppTGs1ait0UXh6Snhvb05hOWRyN1A4YzRkZ3hWbHBYbnRmSit6MG1CRkhUTlZEMnJKVklJM09HYldBQUFBQUVsRlRrU3VRbUNDQUE9PSkgMCAwIG5vLXJlcGVhdH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja19jb250cm9sOmZvY3VzIH4gW2NsYXNzKj0ibG5rd3RfaWNvbl8iXTphZnRlcntib3JkZXItY29sb3I6IzkxYmVlM30jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jc3NfYXJyb3dfcmlnaHR7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTVweDt0b3A6NTAlO21hcmdpbi10b3A6LTZweDt3aWR0aDo3cHg7aGVpZ2h0OjEwcHg7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFLQ0FZQUFBQjR6RVFOQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRnUVlDQWMyZVoyYmZ3QUFBQjFwVkZoMFEyOXRiV1Z1ZEFBQUFBQUFRM0psWVhSbFpDQjNhWFJvSUVkSlRWQmtMbVVIQUFBQXlVbEVRVlFZMDJOa3dBSjJIajV1L3ZqaG95QW1kSWxaQzFkNFByci82SVFBTHk4WGl1U01oY3RpR0JrWnR3bnk4MDRKOXZOc2dFdk1YTFM4Y1BiaWxmOTM3ajlhOC8vL2Z4NjR4SndsS3p0bkwxcjVmL2VoNDRYSUVrd01EQXdNZ2dMOHp4a1lHQmdlUG5va3djakkrQlhGRWYvLy8rZlpmZWg0NGV6RksvL1BXYkt5azRHQmdSR3VrNUdSOGN0N2x2OHpkRFZVSS8vL1l5aWJ2WEQ1RWdZR0JrWkdaQk1hOXU5bjhlRGhEN2x5OC9hRS8zLy8zMlJFOTJmRC92MHN6dHg4TG0vZnZqTUFBR0FqVHVsT1MzMUNBQUFBQUVsRlRrU3VRbUNDKSAwIDAgbm8tcmVwZWF0fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19hcnJvd19sZWZ0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW4tcmlnaHQ6NXB4O3dpZHRoOjdweDtoZWlnaHQ6MTBweDtiYWNrZ3JvdW5kOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUtDQVlBQUFCNHpFUU5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINGdRWUNBc08vU3BzN1FBQUFCMXBWRmgwUTI5dGJXVnVkQUFBQUFBQVEzSmxZWFJsWkNCM2FYUm9JRWRKVFZCa0xtVUhBQUFBeVVsRVFWUVkwMk5rd0FKMkhqNXUvdmpob3lBbWRJbFpDMWQ0UHJyLzZJUUFMeThYaXVTTWhjdGlHQmtadHdueTgwNEo5dk5zZ0V2TVhMUzhjUGJpbGY5MzdqOWE4Ly8vZng2NHhKd2xLenRuTDFyNWYvZWg0NFhJRWt3TURBd01nZ0w4enhrWUdCZ2VQbm9rd2NqSStCWEZFZi8vLytmWmZlaDQ0ZXpGSy8vUFdiS3lrNEdCZ1JHdWs1R1I4Y3Q3bHY4emREVlVJLy8vWXlpYnZYRDVFZ1lHQmtaR1pCTWE5dTluOGVEaEQ3bHk4L2FFLzMvLzMyUkU5MmZEL3Ywc3p0eDhMbS9mdmpNQUFHQWpUdWxPUzMxQ0FBQUFBRWxGVGtTdVFtQ0MpIDAgMCBuby1yZXBlYXR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX2Fycm93X2Rvd257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NnB4O2xlZnQ6YXV0bzt0b3A6MTRweDt3aWR0aDoxMHB4O2hlaWdodDo2cHg7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFHQ0FZQUFBRDY4QS9HQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRnUVlDQTBRVVgvMkNBQUFBQjFwVkZoMFEyOXRiV1Z1ZEFBQUFBQUFRM0psWVhSbFpDQjNhWFJvSUVkSlRWQmtMbVVIQUFBQXYwbEVRVlFJMTJOZ0lCSXdidGkrdStMMXE3ZWVxZkVSRGd3TURQK1JKZi8vL3krOGR0UDJoZytmUDM5akVoWVd1c0RJektnK2UrSHlKUXdNREl4SWlualdidHJlOFA3ajV4eFplYmwxVEh1L2Z0cWpvNjVhd01ESUZEVm55Y29PQmdZR3h2Ly8vL1BzT25DczRQM0h6em4vLy8vM2NyZTFQTW5Jd01EQTBMQi9QNHNIRDMvSTVSdTNsek15TW5USnk4bTllUER3VWQvZmYzOWpNK0tqbGpBZ1c3WHEyREZPd1QrTUdROGVQT3BqWUdCZytNZndyeWc5THJJZkpnOEF5QUpPK0xSa0xlTUFBQUFBU1VWT1JLNUNZSUk9KSAwIDAgbm8tcmVwZWF0O3otaW5kZXg6LTF9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfZG9wX2ljb25fcmV0dXJuMmNoYXR7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7b3BhY2l0eTouNDttYXJnaW4tcmlnaHQ6NXB4O21hcmdpbi1sZWZ0Oi0yMXB4O2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0Z1FZQ0E4UDdrR1pmd0FBQUIxcFZGaDBRMjl0YldWdWRBQUFBQUFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJrTG1VSEFBQUF0MGxFUVZRNHk2WFN2V25EY0JRRThKOUVCdEFDcmx3SHRFQWdFNlN4YXBjZXdGNGxsYXRzWUpFQmhDQUxDRko3aGdnOGdGUDRFUlFoWTZUL1ZlK0R1L2M0TG5ORGdXZno4STArUTRrUGZNNFVlTU1HNmhDWml6SzRPc3ZSNWVnVEJQcDhZbGpjcWFkNlk0RTlmckNPdmtZYjlUcDIreUhoYVNUUTRJQno5TytEM1RsMnpmaUxOc0dETnBlSVBJd3BGbkQvT05XQ01KVTRvY3BpOElJZFZnOHV2a2JzTHpqaWE4N0wyMGh0U25KdGNVMDEvcDlYdjNtM0htL0JtTURMQUFBQUFFbEZUa1N1UW1DQykgMCAwIG5vLXJlcGVhdH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja193cmFwe21hcmdpbi1ib3R0b206MDttYXJnaW4tdG9wOi0xMnB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2NhbGxiYWNrX3dyYXAgc2VsZWN0e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2NhbGxiYWNrX3dyYXAgLmxhd3llcl9iYWxsb29uX3dyYXB7d2lkdGg6MTAwJTttYXgtd2lkdGg6aW5oZXJpdDtib3JkZXI6MDtiYWNrZ3JvdW5kOjA7cGFkZGluZzowIDEwJX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja193cmFwIC5sbmt3dF90aW1lX2xpbmUsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfd3JhcCAubG5rd3RfbmlwcGxlX2xhd3llciwjbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jYWxsYmFja193cmFwIC5sYXd5ZXJfYmFsbG9vbl93cmFwOmFmdGVye2Rpc3BsYXk6bm9uZX0jbG5rd3RfY2xlYXJfYWxsICNsbmt3dF9jc3NfY2FsbGZvcm1fc3RlcDIgLnN1Y2Nlc3NfbGVhZF9zZW5ke21hcmdpbjozMHB4IGF1dG99I2xua3d0X2NsZWFyX2FsbCAjbG5rd3RfY3NzX2NhbGxmb3JtX3N0ZXAyIC53aWRnZXRfdGhhbmt5b3VwYWdlX3RleHR7dGV4dC1hbGlnbjpjZW50ZXJ9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdHJ5X215X2Fza3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjE4cHg7LW1vei1ib3JkZXItcmFkaXVzOjE4cHg7Ym9yZGVyLXJhZGl1czoxOHB4O3BhZGRpbmc6OHB4IDIzcHg7bWFyZ2luOjEwcHggMDtmb250LXNpemU6MTJweDtjb2xvcjojMDAwO2JvcmRlcjoxcHggc29saWQgI2RkZGNkNztiYWNrZ3JvdW5kLWNvbG9yOiNmZmYhaW1wb3J0YW50O2N1cnNvcjpwb2ludGVyO2ZvbnQtd2VpZ2h0OjYwMDt6LWluZGV4OjA7b3ZlcmZsb3c6aGlkZGVufSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19iZWxse3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MjBweDt3aWR0aDoyOXB4O2hlaWdodDoyOXB4O2xpbmUtaGVpZ2h0OjM0cHg7bWFyZ2luOi0xNXB4IDAgMDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC4zKTt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnM7dHJhbnNmb3JtOnNjYWxlKDApfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2ljb25fYmVsbHt3aWR0aDoxM3B4O2hlaWdodDoxNHB4O2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBUENBWUFBQUE3MXBWS0FBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0Z1FZQnh3Zm1VV1B0QUFBQUIxcFZGaDBRMjl0YldWdWRBQUFBQUFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJrTG1VSEFBQUFxRWxFUVZRb3o3V1NzUTZDTUJSRkQ0UU5ONWo3SXpnYVYwWSt3TVRmc0t0ZjFjU1ppUi9RdUxLeVh3ZlJOS2FGTW5qRzNwNzMydGRDQU90Y0lXbTB6aFZzUVZJcmFkQ2JRVktYS25ZSzA2WElmVVR1VStRcElrK2gvZmwzU05ibVFCbXBXODU1dEd1bFphcG9aMkMvY3F0RExNZ2szVmM2ajBBV092SkphWngveFViYmFENXVBZFRBemF0bmdOMjhEdkFBbmw1ZUwwM2RTTHA0YjI2Mi91K2pwS3VrbG4veEFtWXZNT2Y0MlkreEFBQUFBRWxGVGtTdVFtQ0MpIDAgMCBuby1yZXBlYXQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxJTstbW96LXRyYW5zZm9ybS1vcmlnaW46NTAlIDElOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxJTstby10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSAxJTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO21hcmdpbjotN3B4IDAgMCAtN3B4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19iZWxsX25vdGlme3Bvc2l0aW9uOmFic29sdXRlO3RvcDotNHB4O3JpZ2h0Oi00cHg7d2lkdGg6MTNweDtoZWlnaHQ6MTNweDtsaW5lLWhlaWdodDoxM3B4Oy13ZWJraXQtYm9yZGVyLXJhZGl1czo1MCU7LW1vei1ib3JkZXItcmFkaXVzOjUwJTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXI6MXB4IHNvbGlkICNmZmY7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBMEFBQUFPQ0FZQUFBRDBmNWJTQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRnUVlCem80LzVHNSt3QUFBQjFwVkZoMFEyOXRiV1Z1ZEFBQUFBQUFRM0psWVhSbFpDQjNhWFJvSUVkSlRWQmtMbVVIQUFBQWgwbEVRVlFvejUyU3NRMkRRQXhGdjFBYTBBMlJraDNvV1lFS1pZSXJtQUEyUVV4Q1E4a0FkQ3hCLzlKUW9KT1BoSHVOSmR1dnNMNmxFOEFCSGxpQjQ2d2VjTElBR3U1cFFxRTFsbFpnRDNydFZRcnBobmwrQWIweGM1YTBBeFZRUnlRdlNWbHczbHZTb2pnZlMvcEZtU0p0S2RKMEorV1NDcU0vL2h0c05PQm5INUg4ZTAvNUFvQ0FKMUdOeTl4U0FBQUFBRWxGVGtTdVFtQ0MpIDAgMCBuby1yZXBlYXQ7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyAuMnM7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgLjJzOy1tb3otdHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIC4ycywtbW96LXRyYW5zZm9ybSAuMnMgLjJzOy1vLXRyYW5zaXRpb246dHJhbnNmb3JtIC4ycyAuMnMsLW8tdHJhbnNmb3JtIC4ycyAuMnM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4ycyAuMnMsLW1vei10cmFuc2Zvcm0gLjJzIC4ycywtby10cmFuc2Zvcm0gLjJzIC4yczstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTstbW96LXRyYW5zZm9ybTpzY2FsZSgwKTstbXMtdHJhbnNmb3JtOnNjYWxlKDApOy1vLXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX2JlbGxfc2hvd3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbW96LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpOy1vLXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX2JlbGxfc2hvdyAubG5rd3RfaWNvbl9iZWxsey13ZWJraXQtYW5pbWF0aW9uOnJpbmcgMnMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7LW1vei1hbmltYXRpb246cmluZyAycyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTstby1hbmltYXRpb246cmluZyAycyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTthbmltYXRpb246cmluZyAycyAycyBlYXNlLWluLW91dCBpbmZpbml0ZX0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jc3NfYmVsbF9zaG93IC5sbmt3dF9jc3NfYmVsbF9ub3RpZnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbW96LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpOy1vLXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyey1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50Oy1tcy1vdmVyZmxvdy1zdHlsZTpub25lfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpeyNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lcntvdmVyZmxvdzphdXRvIWltcG9ydGFudH19I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyLnBzLWFjdGl2ZS14ID4gLnBzLXNjcm9sbGJhci14LXJhaWwsI2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyLnBzLWFjdGl2ZS15ID4gLnBzLXNjcm9sbGJhci15LXJhaWx7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fSNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lci5wcy1pbi1zY3JvbGxpbmd7cG9pbnRlci1ldmVudHM6bm9uZX0jbG5rd3RfY2xlYXJfYWxsIC5wcy1jb250YWluZXIucHMtaW4tc2Nyb2xsaW5nLnBzLXggPiAucHMtc2Nyb2xsYmFyLXgtcmFpbHtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7b3BhY2l0eTouOX0jbG5rd3RfY2xlYXJfYWxsIC5wcy1jb250YWluZXIucHMtaW4tc2Nyb2xsaW5nLnBzLXggPiAucHMtc2Nyb2xsYmFyLXgtcmFpbCA+IC5wcy1zY3JvbGxiYXIteHtiYWNrZ3JvdW5kLWNvbG9yOiM5OTl9I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyLnBzLWluLXNjcm9sbGluZy5wcy15ID4gLnBzLXNjcm9sbGJhci15LXJhaWx7YmFja2dyb3VuZC1jb2xvcjojZWVlO29wYWNpdHk6Ljl9I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyLnBzLWluLXNjcm9sbGluZy5wcy15ID4gLnBzLXNjcm9sbGJhci15LXJhaWwgPiAucHMtc2Nyb2xsYmFyLXl7YmFja2dyb3VuZC1jb2xvcjojOTk5fSNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lciA+IC5wcy1zY3JvbGxiYXIteC1yYWlse2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LWJvcmRlci1yYWRpdXM6NHB4Oy1tb3otYm9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyLXJhZGl1czo0cHg7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsb3BhY2l0eSAuMnMgbGluZWFyOy1tb3otdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsb3BhY2l0eSAuMnMgbGluZWFyOy1vLXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLG9wYWNpdHkgLjJzIGxpbmVhcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcixvcGFjaXR5IC4ycyBsaW5lYXI7Ym90dG9tOjNweDtoZWlnaHQ6OHB4fSNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lciA+IC5wcy1zY3JvbGxiYXIteC1yYWlsID4gLnBzLXNjcm9sbGJhci14e3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6I2FhYTstd2Via2l0LWJvcmRlci1yYWRpdXM6NHB4Oy1tb3otYm9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcjstbW96LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyOy1vLXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyO2JvdHRvbTowO2hlaWdodDo4cHh9I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyID4gLnBzLXNjcm9sbGJhci15LXJhaWx7ZGlzcGxheTpub25lO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtYm9yZGVyLXJhZGl1czo0cHg7LW1vei1ib3JkZXItcmFkaXVzOjRweDtib3JkZXItcmFkaXVzOjRweDtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcixvcGFjaXR5IC4ycyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcixvcGFjaXR5IC4ycyBsaW5lYXI7LW8tdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsb3BhY2l0eSAuMnMgbGluZWFyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLG9wYWNpdHkgLjJzIGxpbmVhcjtyaWdodDozcHg7d2lkdGg6OHB4fSNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lciA+IC5wcy1zY3JvbGxiYXIteS1yYWlsID4gLnBzLXNjcm9sbGJhci15e3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6I2FhYTstd2Via2l0LWJvcmRlci1yYWRpdXM6NHB4Oy1tb3otYm9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcjstbW96LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyOy1vLXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyO3JpZ2h0OjA7d2lkdGg6OHB4fSNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lcjpob3Zlci5wcy1pbi1zY3JvbGxpbmd7cG9pbnRlci1ldmVudHM6bm9uZX0jbG5rd3RfY2xlYXJfYWxsIC5wcy1jb250YWluZXI6aG92ZXIucHMtaW4tc2Nyb2xsaW5nLnBzLXggPiAucHMtc2Nyb2xsYmFyLXgtcmFpbHtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7b3BhY2l0eTouOX0jbG5rd3RfY2xlYXJfYWxsIC5wcy1jb250YWluZXI6aG92ZXIucHMtaW4tc2Nyb2xsaW5nLnBzLXggPiAucHMtc2Nyb2xsYmFyLXgtcmFpbCA+IC5wcy1zY3JvbGxiYXIteHtiYWNrZ3JvdW5kLWNvbG9yOiM5OTl9I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyOmhvdmVyLnBzLWluLXNjcm9sbGluZy5wcy15ID4gLnBzLXNjcm9sbGJhci15LXJhaWx7YmFja2dyb3VuZC1jb2xvcjojZWVlO29wYWNpdHk6Ljl9I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyOmhvdmVyLnBzLWluLXNjcm9sbGluZy5wcy15ID4gLnBzLXNjcm9sbGJhci15LXJhaWwgPiAucHMtc2Nyb2xsYmFyLXl7YmFja2dyb3VuZC1jb2xvcjojOTk5fSNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lcjpob3ZlciA+IC5wcy1zY3JvbGxiYXIteC1yYWlsLCNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lcjpob3ZlciA+IC5wcy1zY3JvbGxiYXIteS1yYWlse29wYWNpdHk6LjZ9I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyOmhvdmVyID4gLnBzLXNjcm9sbGJhci14LXJhaWw6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWVlO29wYWNpdHk6Ljl9I2xua3d0X2NsZWFyX2FsbCAucHMtY29udGFpbmVyOmhvdmVyID4gLnBzLXNjcm9sbGJhci14LXJhaWw6aG92ZXIgPiAucHMtc2Nyb2xsYmFyLXh7YmFja2dyb3VuZC1jb2xvcjojOTk5fSNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lcjpob3ZlciA+IC5wcy1zY3JvbGxiYXIteS1yYWlsOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2VlZTtvcGFjaXR5Oi45fSNsbmt3dF9jbGVhcl9hbGwgLnBzLWNvbnRhaW5lcjpob3ZlciA+IC5wcy1zY3JvbGxiYXIteS1yYWlsOmhvdmVyID4gLnBzLXNjcm9sbGJhci15e2JhY2tncm91bmQtY29sb3I6Izk5OX0jbG5rd3RfY2xlYXJfYWxsIC5sb2FkZXItaW5uZXIuYmFsbC1wdWxzZS1zeW5je2JhY2tncm91bmQ6bm9uZX0jbG5rd3RfY2xlYXJfYWxsIC5iYWxsLXB1bHNlLXN5bmN7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxNXB4IDAgMTBweH0jbG5rd3RfY2xlYXJfYWxsIC5iYWxsLXB1bHNlLXN5bmMgPiBkaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmFja2dyb3VuZC1jb2xvcjojZGRkY2Q3O3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjEwMCU7LW1vei1ib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLXJhZGl1czoxMDAlO21hcmdpbjowIDJweH0jbG5rd3RfY2xlYXJfYWxsIC5iYWxsLXJvdGF0ZSwjbG5rd3RfY2xlYXJfYWxsIC5iYWxsLXJvdGF0ZSA+IGRpdntwb3NpdGlvbjpyZWxhdGl2ZX0jbG5rd3RfY2xlYXJfYWxsIC5iYWxsLXB1bHNlLXN5bmMgPiBkaXY6bnRoLWNoaWxkKDApey13ZWJraXQtYW5pbWF0aW9uOmJhbGwtcHVsc2Utc3luYyAuOHMgMCBpbmZpbml0ZSBlYXNlLWluLW91dDstbW96LWFuaW1hdGlvbjpiYWxsLXB1bHNlLXN5bmMgLjhzIDAgaW5maW5pdGUgZWFzZS1pbi1vdXQ7LW8tYW5pbWF0aW9uOmJhbGwtcHVsc2Utc3luYyAuOHMgMCBpbmZpbml0ZSBlYXNlLWluLW91dDthbmltYXRpb246YmFsbC1wdWxzZS1zeW5jIC44cyAwIGluZmluaXRlIGVhc2UtaW4tb3V0fSNsbmt3dF9jbGVhcl9hbGwgLmJhbGwtcHVsc2Utc3luYyA+IGRpdjpudGgtY2hpbGQoMSl7LXdlYmtpdC1hbmltYXRpb246YmFsbC1wdWxzZS1zeW5jIC44cyAuMDdzIGluZmluaXRlIGVhc2UtaW4tb3V0Oy1tb3otYW5pbWF0aW9uOmJhbGwtcHVsc2Utc3luYyAuOHMgLjA3cyBpbmZpbml0ZSBlYXNlLWluLW91dDstby1hbmltYXRpb246YmFsbC1wdWxzZS1zeW5jIC44cyAuMDdzIGluZmluaXRlIGVhc2UtaW4tb3V0O2FuaW1hdGlvbjpiYWxsLXB1bHNlLXN5bmMgLjhzIC4wN3MgaW5maW5pdGUgZWFzZS1pbi1vdXR9I2xua3d0X2NsZWFyX2FsbCAuYmFsbC1wdWxzZS1zeW5jID4gZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbjpiYWxsLXB1bHNlLXN5bmMgLjhzIC4xNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7LW1vei1hbmltYXRpb246YmFsbC1wdWxzZS1zeW5jIC44cyAuMTRzIGluZmluaXRlIGVhc2UtaW4tb3V0Oy1vLWFuaW1hdGlvbjpiYWxsLXB1bHNlLXN5bmMgLjhzIC4xNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7YW5pbWF0aW9uOmJhbGwtcHVsc2Utc3luYyAuOHMgLjE0cyBpbmZpbml0ZSBlYXNlLWluLW91dH0jbG5rd3RfY2xlYXJfYWxsIC5iYWxsLXB1bHNlLXN5bmMgPiBkaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uOmJhbGwtcHVsc2Utc3luYyAuOHMgLjIxcyBpbmZpbml0ZSBlYXNlLWluLW91dDstbW96LWFuaW1hdGlvbjpiYWxsLXB1bHNlLXN5bmMgLjhzIC4yMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7LW8tYW5pbWF0aW9uOmJhbGwtcHVsc2Utc3luYyAuOHMgLjIxcyBpbmZpbml0ZSBlYXNlLWluLW91dDthbmltYXRpb246YmFsbC1wdWxzZS1zeW5jIC44cyAuMjFzIGluZmluaXRlIGVhc2UtaW4tb3V0fSNsbmt3dF9jbGVhcl9hbGwgLmJhbGwtcHVsc2Utc3luYyA+IGRpdnstd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDstbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDstby1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RofSNsbmt3dF9jbGVhcl9hbGwgLmxhd3llcl9iYWxsb29uX3dyYXAudXNlcl9tc2cgLmxud3QtbXNnW2NvbnRlbnRlZGl0YWJsZT0idHJ1ZSJde3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mjstd2Via2l0LWJvcmRlci1yYWRpdXM6MTNweDstbW96LWJvcmRlci1yYWRpdXM6MTNweDtib3JkZXItcmFkaXVzOjEzcHg7b3V0bGluZTowOy13ZWJraXQtYm94LXNoYWRvdzowIDAgMTBweCAxcHggIzQ0OEZGRjstbW96LWJveC1zaGFkb3c6MCAwIDEwcHggMXB4ICM0NDhGRkY7Ym94LXNoYWRvdzowIDAgMTBweCAxcHggIzQ0OEZGRjttYXJnaW46LTEycHggLTE1cHg7cGFkZGluZzoxMHB4IDE1cHh9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX3Bob3RvX2Zyb250OmJlZm9yZXtjb250ZW50OicnO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTQwJTtoZWlnaHQ6MTAwJTt0b3A6MTIwJTtsZWZ0Oi0yMCU7b3BhY2l0eTouNjtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgyNTUsMjU1LDI1NSwwKSwjZmZmIDQwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuNikgNjAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMGRlZykgdHJhbnNsYXRlWigwKTstbW96LXRyYW5zZm9ybTpyb3RhdGUoMjBkZWcpIHRyYW5zbGF0ZVooMCk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMjBkZWcpIHRyYW5zbGF0ZVooMCk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgyMGRlZykgdHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06cm90YXRlKDIwZGVnKSB0cmFuc2xhdGVaKDApOy13ZWJraXQtYW5pbWF0aW9uOmF2YS1ibGljayAxMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsMC4zLDEsMC43KTstbW96LWFuaW1hdGlvbjphdmEtYmxpY2sgMTBzIGluZmluaXRlIGN1YmljLWJlemllcigwLDAuMywxLDAuNyk7LW1zLWFuaW1hdGlvbjphdmEtYmxpY2sgMTBzIGluZmluaXRlIGN1YmljLWJlemllcigwLDAuMywxLDAuNyk7LW8tYW5pbWF0aW9uOmF2YS1ibGljayAxMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsMC4zLDEsMC43KTthbmltYXRpb246YXZhLWJsaWNrIDEwcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwwLjMsMSwwLjcpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX1ALXdlYmtpdC1rZXlmcmFtZXMgYXZhLWJsaWNrezAle3RvcDoxMjAlfTc1JXt0b3A6MTIwJX04MCV7dG9wOi0xMjAlfTEwMCV7dG9wOi0xMjAlfX1ALW1vei1rZXlmcmFtZXMgYXZhLWJsaWNrezAle3RvcDoxMjAlfTc1JXt0b3A6MTIwJX04MCV7dG9wOi0xMjAlfTEwMCV7dG9wOi0xMjAlfX1ALW1zLWtleWZyYW1lcyBhdmEtYmxpY2t7MCV7dG9wOjEyMCV9NzUle3RvcDoxMjAlfTgwJXt0b3A6LTEyMCV9MTAwJXt0b3A6LTEyMCV9MCV7dG9wOjEyMCV9NzUle3RvcDoxMjAlfTgwJXt0b3A6LTEyMCV9MTAwJXt0b3A6LTEyMCV9fUAtby1rZXlmcmFtZXMgYXZhLWJsaWNrezAle3RvcDoxMjAlfTc1JXt0b3A6MTIwJX04MCV7dG9wOi0xMjAlfTEwMCV7dG9wOi0xMjAlfX1Aa2V5ZnJhbWVzIGF2YS1ibGlja3swJXt0b3A6MTIwJX03NSV7dG9wOjEyMCV9ODAle3RvcDotMTIwJX0xMDAle3RvcDotMTIwJX19QC13ZWJraXQta2V5ZnJhbWVzIHJpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEwZGVnKX0xMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xOGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMThkZWcpfTE1JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTRkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTRkZWcpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEyZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMmRlZyl9MjUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMGRlZyl9MzAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKX0zNSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDhkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOGRlZyl9NDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfX1ALW1vei1rZXlmcmFtZXMgcmluZ3swJXstbW96LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX01JXstbW96LXRyYW5zZm9ybTpyb3RhdGUoMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTBkZWcpfTEwJXstbW96LXRyYW5zZm9ybTpyb3RhdGUoLTE4ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xOGRlZyl9MTUley1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxNGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxNGRlZyl9MjAley1tb3otdHJhbnNmb3JtOnJvdGF0ZSgtMTJkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEyZGVnKX0yNSV7LW1vei10cmFuc2Zvcm06cm90YXRlKDEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEwZGVnKX0zMCV7LW1vei10cmFuc2Zvcm06cm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpfTM1JXstbW96LXRyYW5zZm9ybTpyb3RhdGUoOGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg4ZGVnKX00MCV7LW1vei10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9fUAtby1rZXlmcmFtZXMgcmluZ3swJXstby10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9NSV7LW8tdHJhbnNmb3JtOnJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMGRlZyl9MTAley1vLXRyYW5zZm9ybTpyb3RhdGUoLTE4ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xOGRlZyl9MTUley1vLXRyYW5zZm9ybTpyb3RhdGUoMTRkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTRkZWcpfTIwJXstby10cmFuc2Zvcm06cm90YXRlKC0xMmRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTJkZWcpfTI1JXstby10cmFuc2Zvcm06cm90YXRlKDEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEwZGVnKX0zMCV7LW8tdHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKX0zNSV7LW8tdHJhbnNmb3JtOnJvdGF0ZSg4ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDhkZWcpfTQwJXstby10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9fUBrZXlmcmFtZXMgcmluZ3swJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7LW1vei10cmFuc2Zvcm06cm90YXRlKDApOy1vLXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTBkZWcpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxMGRlZyk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMGRlZyl9MTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMThkZWcpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSgtMThkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoLTE4ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xOGRlZyl9MTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxNGRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlKDE0ZGVnKTstby10cmFuc2Zvcm06cm90YXRlKDE0ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE0ZGVnKX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMmRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlKC0xMmRlZyk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgtMTJkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEyZGVnKX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEwZGVnKTstbW96LXRyYW5zZm9ybTpyb3RhdGUoMTBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTBkZWcpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTstbW96LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTstby10cmFuc2Zvcm06cm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpfTM1JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOGRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlKDhkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoOGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg4ZGVnKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSgwKTstby10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXB1bHNlLXN5bmN7MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpfTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfX1ALW1vei1rZXlmcmFtZXMgYmFsbC1wdWxzZS1zeW5jezMzJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpfTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9fUAtby1rZXlmcmFtZXMgYmFsbC1wdWxzZS1zeW5jezMzJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KTstby10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTstby10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9fUBrZXlmcmFtZXMgYmFsbC1wdWxzZS1zeW5jezMzJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpfTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgTE9BRElOR3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjUpOy1tcy10cmFuc2Zvcm06c2NhbGUoMC41KTt0cmFuc2Zvcm06c2NhbGUoMC41KX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjUpOy1tcy10cmFuc2Zvcm06c2NhbGUoMC41KTt0cmFuc2Zvcm06c2NhbGUoMC41KX19QC1tb3ota2V5ZnJhbWVzIExPQURJTkd7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC41KTstbXMtdHJhbnNmb3JtOnNjYWxlKDAuNSk7LW1vei10cmFuc2Zvcm06c2NhbGUoMC41KTt0cmFuc2Zvcm06c2NhbGUoMC41KX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTstbW96LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjUpOy1tcy10cmFuc2Zvcm06c2NhbGUoMC41KTstbW96LXRyYW5zZm9ybTpzY2FsZSgwLjUpO3RyYW5zZm9ybTpzY2FsZSgwLjUpfX1ALW8ta2V5ZnJhbWVzIExPQURJTkd7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC41KTstbXMtdHJhbnNmb3JtOnNjYWxlKDAuNSk7LW8tdHJhbnNmb3JtOnNjYWxlKDAuNSk7dHJhbnNmb3JtOnNjYWxlKDAuNSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7LW8tdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuNSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgwLjUpOy1vLXRyYW5zZm9ybTpzY2FsZSgwLjUpO3RyYW5zZm9ybTpzY2FsZSgwLjUpfX1Aa2V5ZnJhbWVzIExPQURJTkd7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC41KTstbXMtdHJhbnNmb3JtOnNjYWxlKDAuNSk7LW1vei10cmFuc2Zvcm06c2NhbGUoMC41KTstby10cmFuc2Zvcm06c2NhbGUoMC41KTt0cmFuc2Zvcm06c2NhbGUoMC41KX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTstbW96LXRyYW5zZm9ybTpzY2FsZSgxKTstby10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC41KTstbXMtdHJhbnNmb3JtOnNjYWxlKDAuNSk7LW1vei10cmFuc2Zvcm06c2NhbGUoMC41KTstby10cmFuc2Zvcm06c2NhbGUoMC41KTt0cmFuc2Zvcm06c2NhbGUoMC41KX19QC13ZWJraXQta2V5ZnJhbWVzIHZyb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC1tb3ota2V5ZnJhbWVzIHZyb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC1vLWtleWZyYW1lcyB2cm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstby10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHZyb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19taW5pbWl6ZXtvcGFjaXR5OjE7LW1zLWZpbHRlcjpub25lO2ZpbHRlcjpub25lOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzeS1pbjstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc3ktaW47LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzeS1pbjstbXMtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzeS1pbjt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXN5LWlufSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19ob3ZlciAubG5rd3RfY3NzX21pbmltaXple29wYWNpdHk6MDstbXMtZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApO2ZpbHRlcjphbHBoYShvcGFjaXR5PTApfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2JvZHkgLmxua3d0X3BvcnRsZXRfYm9keXstd2Via2l0LXRyYW5zaXRpb246aGVpZ2h0IC4yczstbW96LXRyYW5zaXRpb246aGVpZ2h0IC4yczstby10cmFuc2l0aW9uOmhlaWdodCAuMnM7dHJhbnNpdGlvbjpoZWlnaHQgLjJzfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2JvZHkubHdfbWluaW1pemVkIC5sbmt3dF9wb3J0bGV0X2JvZHl7aGVpZ2h0OjB9QC13ZWJraXQta2V5ZnJhbWVzIGF2YS1ibGlja3swJXt0b3A6MTIwJX03NSV7dG9wOjEyMCV9ODAle3RvcDotMTIwJX0xMDAle3RvcDotMTIwJX19QC1tb3ota2V5ZnJhbWVzIGF2YS1ibGlja3swJXt0b3A6MTIwJX03NSV7dG9wOjEyMCV9ODAle3RvcDotMTIwJX0xMDAle3RvcDotMTIwJX19QC1tcy1rZXlmcmFtZXMgYXZhLWJsaWNrezAle3RvcDoxMjAlfTc1JXt0b3A6MTIwJX04MCV7dG9wOi0xMjAlfTEwMCV7dG9wOi0xMjAlfX1ALW1zLWtleWZyYW1lcyBhdmEtYmxpY2t7MCV7dG9wOjEyMCV9NzUle3RvcDoxMjAlfTgwJXt0b3A6LTEyMCV9MTAwJXt0b3A6LTEyMCV9fUAtby1rZXlmcmFtZXMgYXZhLWJsaWNrezAle3RvcDoxMjAlfTc1JXt0b3A6MTIwJX04MCV7dG9wOi0xMjAlfTEwMCV7dG9wOi0xMjAlfX1Aa2V5ZnJhbWVzIGF2YS1ibGlja3swJXt0b3A6MTIwJX03NSV7dG9wOjEyMCV9ODAle3RvcDotMTIwJX0xMDAle3RvcDotMTIwJX19I2xua3d0X2NsZWFyX2FsbCAubGF3eWVyX2JhbGxvb25fd3JhcCAubG53dC1tc2cubXNnLW5vLWh0bWwsI2xua3d0X2NsZWFyX2FsbCAubGF3eWVyX2JhbGxvb25fd3JhcCAubG53dC1tc2cubXNnLW5vLWh0bWxbZGF0YS1ibG9jay1tZXNzYWdlPSJ0cnVlIl0sI2xua3d0X2NsZWFyX2FsbCAubGF3eWVyX2JhbGxvb25fd3JhcCAubG53dC1tc2cgLmxud3QtbXNnLCNsbmt3dF9jbGVhcl9hbGwgLmxfa2Etd2lkZ2V0LXdpdGhvdXQtaHRtbCAubGF3eWVyX2JhbGxvb25fd3JhcCAubG53dC1tc2csI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY2FsbGJhY2tfdGl0bGUsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfdGhhbmtzX3RleHQsI2xua3d0X2NsZWFyX2FsbCAubHdwLW1vZGFsX3dyYXAgLmx3cC1tb2RhbF93aW5kb3cgLmx3cC1tb2RhbF9zdWJ0aXRsZXt3aGl0ZS1zcGFjZTpwcmUtd3JhcH0jbG5rd3RfY2xlYXJfYWxsIC5sYXd5ZXJfYmFsbG9vbl93cmFwIC5sbnd0LW1zZ1tkYXRhLWJsb2NrLW1lc3NhZ2U9InRydWUiXSwjbG5rd3RfY2xlYXJfYWxsIC5sYXd5ZXJfYmFsbG9vbl93cmFwIC5sbnd0LW1zZy5tc2ctd2l0aC1odG1se3doaXRlLXNwYWNlOm5vcm1hbH0jbG5rd3RfY2xlYXJfYWxsIC5wcy1jb250YWluZXIucHMtdGhlbWUtZGVmYXVsdHt3aWR0aDphdXRvIWltcG9ydGFudH0ubHd2X2FuaW1hdGVke2FuaW1hdGlvbi1kdXJhdGlvbjoxczthbmltYXRpb24tZmlsbC1tb2RlOmJvdGh9QGtleWZyYW1lcyBsd3ZfYm91bmNlSW5MZWZ0e2Zyb20sNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC4yMTUsMC42MTAsMC4zNTUsMS4wMDApfTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTMwMDBweCwwLDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDI1cHgsMCwwKX03NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1cHgsMCwwKX10b3t0cmFuc2Zvcm06bm9uZX19Lmx3dl9ib3VuY2VJbkxlZnR7YW5pbWF0aW9uLW5hbWU6bHd2X2JvdW5jZUluTGVmdH1Aa2V5ZnJhbWVzIGx3dl9ib3VuY2VJbkRvd257ZnJvbSw2MCUsNzUlLDkwJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjIxNSwwLjYxMCwwLjM1NSwxLjAwMCl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApfXRve3RyYW5zZm9ybTpub25lfX0ubHd2X2JvdW5jZUluRG93bnthbmltYXRpb24tbmFtZTpsd3ZfYm91bmNlSW5Eb3dufUBrZXlmcmFtZXMgbHd2X3NsaWRlSW5Eb3due2Zyb217dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9fS5sd3Zfc2xpZGVJbkRvd257YW5pbWF0aW9uLW5hbWU6bHd2X3NsaWRlSW5Eb3dufSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2JvZHl7cGFkZGluZy10b3A6NHB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X3BvcnRsZXRfaGVhZHttaW4taGVpZ2h0OjYwcHg7bWFyZ2luLWJvdHRvbTo0cHg7cGFkZGluZy10b3A6NnB4fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X3BvcnRsZXRfaGVhZDpiZWZvcmUsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfaGVhZF9ob3Zlcl9pdGVtOmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDowO2hlaWdodDoxMDAlOy13ZWJraXQtYm9yZGVyLXJhZGl1czoycHg7LW1vei1ib3JkZXItcmFkaXVzOjJweDtib3JkZXItcmFkaXVzOjJweDstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZCAuMnMsd2lkdGggLjNzIWltcG9ydGFudDstbW96LXRyYW5zaXRpb246YmFja2dyb3VuZCAuMnMsd2lkdGggLjNzIWltcG9ydGFudDstby10cmFuc2l0aW9uOmJhY2tncm91bmQgLjJzLHdpZHRoIC4zcyFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4ycyx3aWR0aCAuM3MhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19ob3Zlcl9tb2R1bGVfYWN0aXZlIC5sbmt3dF9wb3J0bGV0X2hlYWQ6aG92ZXI6YmVmb3JlLCNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2hlYWRfaG92ZXJfaXRlbTpob3ZlcjpiZWZvcmV7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEpfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2xhd3llcl9waG90b3t0b3A6NXB4Oy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3MhaW1wb3J0YW50O3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjNzIWltcG9ydGFudDstbW96LXRyYW5zaXRpb246dHJhbnNmb3JtIC4zcywtbW96LXRyYW5zZm9ybSAuM3MhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb246dHJhbnNmb3JtIC4zcywtby10cmFuc2Zvcm0gLjNzIWltcG9ydGFudDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MhaW1wb3J0YW50O3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcywtd2Via2l0LXRyYW5zZm9ybSAuM3MsLW1vei10cmFuc2Zvcm0gLjNzLC1vLXRyYW5zZm9ybSAuM3MhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2xhd3llcl9waG90byBpbWcsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX3Bob3RvX3dyYXAgaW1ne21heC13aWR0aDoxMDAlIWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jc3NfaG92ZXJfbW9kdWxle21heC1oZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC10cmFuc2l0aW9uOm1heC1oZWlnaHQgLjJzIGVhc2UtaW4tb3V0Oy1tb3otdHJhbnNpdGlvbjptYXgtaGVpZ2h0IC4ycyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOm1heC1oZWlnaHQgLjJzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246bWF4LWhlaWdodCAuMnMgZWFzZS1pbi1vdXR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfaGVhZF9ob3Zlcl9pdGVte21pbi1oZWlnaHQ6NjBweDtwYWRkaW5nLXRvcDo2cHg7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjcwcHg7Y29sb3I6Izk3YTdiZDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX2hvdmVyX21vZHVsZSAubG5rd3RfaGVhZF9ob3Zlcl9pdGVte29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwcHgpIWltcG9ydGFudDstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwcHgpIWltcG9ydGFudDstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTBweCkhaW1wb3J0YW50Oy1vLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwcHgpIWltcG9ydGFudDt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MHB4KSFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjVzLC13ZWJraXQtdHJhbnNmb3JtIC40cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IC41cywtd2Via2l0LXRyYW5zZm9ybSAuNHMhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjRzLG9wYWNpdHkgLjVzLC1tb3otdHJhbnNmb3JtIC40cyFpbXBvcnRhbnQ7LW8tdHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjRzLG9wYWNpdHkgLjVzLC1vLXRyYW5zZm9ybSAuNHMhaW1wb3J0YW50O3RyYW5zaXRpb246dHJhbnNmb3JtIC40cyxvcGFjaXR5IC41cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjRzLG9wYWNpdHkgLjVzLC13ZWJraXQtdHJhbnNmb3JtIC40cywtbW96LXRyYW5zZm9ybSAuNHMsLW8tdHJhbnNmb3JtIC40cyFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfaGVhZF9ob3Zlcl9pdGVtOmhvdmVyIC5sbmt3dF9sYXd5ZXJfcGhvdG9fd3JhcHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSFpbXBvcnRhbnQ7LW1vei10cmFuc2Zvcm06c2NhbGUoMSkhaW1wb3J0YW50Oy1tcy10cmFuc2Zvcm06c2NhbGUoMSkhaW1wb3J0YW50Oy1vLXRyYW5zZm9ybTpzY2FsZSgxKSFpbXBvcnRhbnQ7dHJhbnNmb3JtOnNjYWxlKDEpIWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jc3NfaG92ZXJfbW9kdWxlOmhvdmVyIH4gLmxua3d0X3BvcnRsZXRfaGVhZCAubG5rd3RfbGF3eWVyX3Bob3Rvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42NSkhaW1wb3J0YW50Oy1tb3otdHJhbnNmb3JtOnNjYWxlKC42NSkhaW1wb3J0YW50Oy1tcy10cmFuc2Zvcm06c2NhbGUoLjY1KSFpbXBvcnRhbnQ7LW8tdHJhbnNmb3JtOnNjYWxlKC42NSkhaW1wb3J0YW50O3RyYW5zZm9ybTpzY2FsZSguNjUpIWltcG9ydGFudH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9sYXd5ZXJfcGhvdG9fd3JhcHtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxMHB4O3RvcDo1cHg7aGVpZ2h0OjQ4cHg7d2lkdGg6NDhweDstd2Via2l0LWJvcmRlci1yYWRpdXM6NTAlOy1tb3otYm9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY1KSFpbXBvcnRhbnQ7LW1vei10cmFuc2Zvcm06c2NhbGUoLjY1KSFpbXBvcnRhbnQ7LW1zLXRyYW5zZm9ybTpzY2FsZSguNjUpIWltcG9ydGFudDstby10cmFuc2Zvcm06c2NhbGUoLjY1KSFpbXBvcnRhbnQ7dHJhbnNmb3JtOnNjYWxlKC42NSkhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3MhaW1wb3J0YW50O3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjNzIWltcG9ydGFudDstbW96LXRyYW5zaXRpb246dHJhbnNmb3JtIC4zcywtbW96LXRyYW5zZm9ybSAuM3MhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb246dHJhbnNmb3JtIC4zcywtby10cmFuc2Zvcm0gLjNzIWltcG9ydGFudDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MhaW1wb3J0YW50O3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcywtd2Via2l0LXRyYW5zZm9ybSAuM3MsLW1vei10cmFuc2Zvcm0gLjNzLC1vLXRyYW5zZm9ybSAuM3MhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19ob3Zlcl9tb2R1bGVfYWN0aXZlIC5sbmt3dF9jc3NfaG92ZXJfbW9kdWxle21heC1oZWlnaHQ6MTIwcHg7LXdlYmtpdC10cmFuc2l0aW9uOm1heC1oZWlnaHQgLjJzIGVhc2UtaW47LW1vei10cmFuc2l0aW9uOm1heC1oZWlnaHQgLjJzIGVhc2UtaW47LW8tdHJhbnNpdGlvbjptYXgtaGVpZ2h0IC4ycyBlYXNlLWluO3RyYW5zaXRpb246bWF4LWhlaWdodCAuMnMgZWFzZS1pbn0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9jc3NfaG92ZXJfbW9kdWxlX2FjdGl2ZSAubG5rd3RfaGVhZF9ob3Zlcl9pdGVte29wYWNpdHk6MSFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSFpbXBvcnRhbnQ7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSFpbXBvcnRhbnQ7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIWltcG9ydGFudDstby10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSFpbXBvcnRhbnQ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC41cywtd2Via2l0LXRyYW5zZm9ybSAuM3MgLjJzIWltcG9ydGFudDt0cmFuc2l0aW9uOm9wYWNpdHkgLjVzLC13ZWJraXQtdHJhbnNmb3JtIC4zcyAuMnMhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIC4ycyxvcGFjaXR5IC41cywtbW96LXRyYW5zZm9ybSAuM3MgLjJzIWltcG9ydGFudDstby10cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgLjJzLG9wYWNpdHkgLjVzLC1vLXRyYW5zZm9ybSAuM3MgLjJzIWltcG9ydGFudDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgLjJzLG9wYWNpdHkgLjVzIWltcG9ydGFudDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgLjJzLG9wYWNpdHkgLjVzLC13ZWJraXQtdHJhbnNmb3JtIC4zcyAuMnMsLW1vei10cmFuc2Zvcm0gLjNzIC4ycywtby10cmFuc2Zvcm0gLjNzIC4ycyFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX2hvdmVyX21vZHVsZV9hY3RpdmUgLmxua3d0X2hlYWRfaG92ZXJfaXRlbTpudGgtbGFzdC1vZi10eXBlKDIpey13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTouM3MhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbi1kZWxheTouM3MhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb24tZGVsYXk6LjNzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5Oi4zcyFpbXBvcnRhbnR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX2hvdmVyOmJlZm9yZXtkaXNwbGF5Om5vbmV9I2xua3d0X2NsZWFyX2FsbC5sbmt3dF9ib2R5LCNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19ob3ZlcnttYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2hvdmVyX3RpdGxle3BhZGRpbmc6N3B4IDAgNXB4O2NvbG9yOiNmZmY7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1zaXplOjE1cHg7Zm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsIWltcG9ydGFudDtsaW5lLWhlaWdodDoxfSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2hvdmVyX3RleHR7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MTtmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2Nzc19taW5pbWl6ZXt0b3A6MjBweH0jbG5rd3RfY2xlYXJfYWxsIC5sbmt3dF9tZXRpZXJfdGl0bGUsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX25hbWUsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfaG92ZXJfdGl0bGUsI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfaG92ZXJfdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9I2xua3d0X2NsZWFyX2FsbCAubG5rd3Qtc3ViX2VkaXQ6aG92ZXIgLmxua3d0LW1pbmktcGVuc2lse2JhY2tncm91bmQtcG9zaXRpb246MCBib3R0b219I2xua3d0X2NsZWFyX2FsbCAubG5rd3QtbWluaS1wZW5zaWx7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjhweDtoZWlnaHQ6OHB4O21hcmdpbi1yaWdodDo0cHg7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFRQ0FJQUFBQ2s2S2txQUFBQkMwbEVRVlFZbFYyUHZVckRZQmlGdndzTVRnNWVnVjZCdllVNEtMcXA0R1FIUVFmQlVyQ2ZKRXVqTmEyS2tHSmpJYVpKaVZKb2lLS3BEVW42T1BTSHhET2U5M0RlNXdnS3lyTE10bTNQOHdCUmRPTTROZ3hEU3VuN3ZsaTVydXQydTkzUmFOUnV0eDNIRVVDZTUwRVFXSllscGRSMVBVbVNSZFY0UE83MWVwcW1OYVFjdU01c05nTkVGRVh6N0hYakpoaTZxNWZDTk0wd0RKdk4yK0dnWHlRVVVzcDdzL1A5RlZHV1NOTjBPdm1aOS80bW5HaGNkU2p0bUtaOFJHd2VvYWpVSDVlSFNjS2x5VUdkMWl1VkttY0dBc2h5ZEl1OUdvckt4ajZmOGJMcTZZM0RCdXU3S0NvWExiSWNRTHdNRjFsRnBmWlFvTm8rNWRsbDY1anp1ekx1Mmc2Vkt2MzNmelA0QXhZL1ZvNnhjWEY1QUFBQUFFbEZUa1N1UW1DQ0FBPT0pIDAgMCBuby1yZXBlYXR9I2xua3d0X2NsZWFyX2FsbCAubG5rd3RfbGF3eWVyX3Bob3RvLnJlbW92ZV90cmFuc2Zvcm0sI2xua3d0X2NsZWFyX2FsbCAubG5rd3RfY3NzX2hvdmVyX21vZHVsZTpob3ZlciB+IC5sbmt3dF9wb3J0bGV0X2hlYWQgLmxua3d0X2xhd3llcl9waG90by5yZW1vdmVfdHJhbnNmb3Jtey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpIWltcG9ydGFudDstbW96LXRyYW5zZm9ybTpzY2FsZSgxKSFpbXBvcnRhbnQ7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKSFpbXBvcnRhbnQ7LW8tdHJhbnNmb3JtOnNjYWxlKDEpIWltcG9ydGFudDt0cmFuc2Zvcm06c2NhbGUoMSkhaW1wb3J0YW50fSNsbmt3dF9jbGVhcl9hbGwgLmxua3d0X2xhd3llcl9waG90b193cmFwOmJlZm9yZXtjb250ZW50OicnO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTQwJTtoZWlnaHQ6MTAwJTt0b3A6MTIwJTtsZWZ0Oi0yMCU7b3BhY2l0eTouNjtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgyNTUsMjU1LDI1NSwwKSwjZmZmIDQwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuNikgNjAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMGRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlKDIwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgyMGRlZyk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgyMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyMGRlZyk7LXdlYmtpdC1hbmltYXRpb246YXZhLWJsaWNrIDEwcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwwLjMsMSwwLjcpOy1tb3otYW5pbWF0aW9uOmF2YS1ibGljayAxMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsMC4zLDEsMC43KTstbXMtYW5pbWF0aW9uOmF2YS1ibGljayAxMHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsMC4zLDEsMC43KTstby1hbmltYXRpb246YXZhLWJsaWNrIDEwcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwwLjMsMSwwLjcpO2FuaW1hdGlvbjphdmEtYmxpY2sgMTBzIGluZmluaXRlIGN1YmljLWJlemllcigwLDAuMywxLDAuNyl9QC13ZWJraXQta2V5ZnJhbWVzIGF2YS1ibGlja3swJXt0b3A6MTIwJX03NSV7dG9wOjEyMCV9ODAle3RvcDotMTIwJX0xMDAle3RvcDotMTIwJX19QC1tb3ota2V5ZnJhbWVzIGF2YS1ibGlja3swJXt0b3A6MTIwJX03NSV7dG9wOjEyMCV9ODAle3RvcDotMTIwJX0xMDAle3RvcDotMTIwJX19QC1tcy1rZXlmcmFtZXMgYXZhLWJsaWNrezAle3RvcDoxMjAlfTc1JXt0b3A6MTIwJX04MCV7dG9wOi0xMjAlfTEwMCV7dG9wOi0xMjAlfX1ALW1zLWtleWZyYW1lcyBhdmEtYmxpY2t7MCV7dG9wOjEyMCV9NzUle3RvcDoxMjAlfTgwJXt0b3A6LTEyMCV9MTAwJXt0b3A6LTEyMCV9fUAtby1rZXlmcmFtZXMgYXZhLWJsaWNrezAle3RvcDoxMjAlfTc1JXt0b3A6MTIwJX04MCV7dG9wOi0xMjAlfTEwMCV7dG9wOi0xMjAlfX1Aa2V5ZnJhbWVzIGF2YS1ibGlja3swJXt0b3A6MTIwJX03NSV7dG9wOjEyMCV9ODAle3RvcDotMTIwJX0xMDAle3RvcDotMTIwJX19",
        CssHotButton: 'QGtleWZyYW1lcyBsbmttYl9zd2luZ3swJXt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX0zNSV7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVooMCl9NDYle3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApfTUwJXt0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlWigwKX05NiV7dHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZVooMCl9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBiZ19jb2xvcnswJXtiYWNrZ3JvdW5kOiM3ODhjYTQ7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoNjUsMTA1LDIyNSwwLjUpLDAgMTBweCAxNXB4IDAgcmdiYSg3Niw5MSwxMDksMC4yKSwwIDE1cHggMzBweCAwIHJnYmEoNDQsNTMsNjQsMC4zKX02JXtiYWNrZ3JvdW5kOiM3ODhjYTQ7Ym94LXNoYWRvdzowIDAgMCA1MHB4IHJnYmEoNjUsMTA1LDIyNSwwKSwwIDEwcHggMTVweCAwIHJnYmEoNzYsOTEsMTA5LDAuMiksMCAxNXB4IDMwcHggMCByZ2JhKDQ0LDUzLDY0LDAuMyl9NDYle2JhY2tncm91bmQ6Izc4OGNhNDtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSg2NSwxMDUsMjI1LDApLDAgMTBweCAxNXB4IDAgcmdiYSg3Niw5MSwxMDksMC4yKSwwIDE1cHggMzBweCAwIHJnYmEoNDQsNTMsNjQsMC4zKX01MCV7YmFja2dyb3VuZDojMjFjNjE1O2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDMzLDE5OCwyMSwwLjUpLDAgMTBweCAxNXB4IDAgcmdiYSg3Niw5MSwxMDksMC4yKSwwIDE1cHggMzBweCAwIHJnYmEoNDQsNTMsNjQsMC4zKX01NiV7YmFja2dyb3VuZDojMjFjNjE1O2JveC1zaGFkb3c6MCAwIDAgNTBweCByZ2JhKDMzLDE5OCwyMSwwKSwwIDEwcHggMTVweCAwIHJnYmEoNzYsOTEsMTA5LDAuMiksMCAxNXB4IDMwcHggMCByZ2JhKDQ0LDUzLDY0LDAuMyl9OTYle2JhY2tncm91bmQ6IzIxYzYxNTtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgzMywxOTgsMjEsMCksMCAxMHB4IDE1cHggMCByZ2JhKDc2LDkxLDEwOSwwLjIpLDAgMTVweCAzMHB4IDAgcmdiYSg0NCw1Myw2NCwwLjMpfTEwMCV7YmFja2dyb3VuZDojNzg4Y2E0O2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDY1LDEwNSwyMjUsMCksMCAxMHB4IDE1cHggMCByZ2JhKDc2LDkxLDEwOSwwLjIpLDAgMTVweCAzMHB4IDAgcmdiYSg0NCw1Myw2NCwwLjMpfX1Aa2V5ZnJhbWVzIGxua21iX3N3aW5nMnswJXt0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlWigwKX00NiV7dHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZVooMCl9NTAle3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApfTk2JXt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX0xMDAle3RyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIHdyYXBJbkFuaW1hdGlvbnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgzMHB4KTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgY2FsbEljb1Nob3d7MTAwJXstbXMtdHJhbnNmb3JtOnNjYWxlKDAuOTUpO3RyYW5zZm9ybTpzY2FsZSgwLjk1KTtib3gtc2hhZG93OjAgM3B4IDJweCByZ2JhKDAsMCwwLDAuMyl9fUBrZXlmcmFtZXMgd3JhcE91dEFuaW1hdGlvbnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVaKDApO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDMwcHgpIHRyYW5zbGF0ZVooMCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGltYWdlSW5Nb2J7ZnJvbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX19I2xua21iX2NsZWFyX21vYntwb3NpdGlvbjppbml0aWFsO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnM7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7dGFibGUtbGF5b3V0OmF1dG87LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5Om5vbmV9I2xua21iX2NsZWFyX21vYi5pc19sb2FkZWR7ZGlzcGxheTpibG9ja30jbG5rbWJfY2xlYXJfbW9iICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtZmFtaWx5OidSb2JvdG8nLCdIZWx2ZXRpY2EgTmV1ZScsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjMwMDt0YWJsZS1sYXlvdXQ6YXV0b30jbG5rbWJfY2xlYXJfbW9iICogaW1ne3BhZGRpbmctYm90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0jbG5rbWJfY2xlYXJfbW9iIC5sbmttYl9waG90b3t2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5OmJsb2NrO3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHg7cG9zaXRpb246Zml4ZWQ7Ym9yZGVyLXJhZGl1czo1MCU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO2JvdHRvbTozMHB4O3JpZ2h0OjMwcHg7cGFkZGluZzowO2N1cnNvcjpwb2ludGVyO2JveC1zaGFkb3c6MCAxMHB4IDE1cHggMCByZ2JhKDc2LDkxLDEwOSwwLjIpLDAgMTVweCAzMHB4IDAgcmdiYSg0NCw1Myw2NCwwLjMpO3otaW5kZXg6OTk5OTt1c2VyLXNlbGVjdDpub25lO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xcyxib3gtc2hhZG93IC4xczstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjFzLGJveC1zaGFkb3cgLjFzO3dpbGwtY2hhbmdlOmF1dG87cG9pbnRlci1ldmVudHM6YWxsfSNsbmttYl9jbGVhcl9tb2IuaXNfbG9hZGVkIC5sbmttYl9waG90b3t2aXNpYmlsaXR5OnZpc2libGU7ei1pbmRleDo5OTk5fSNsbmttYl9jbGVhcl9tb2IgLmxua21iX3R1YmV7d2lkdGg6NjRweDtoZWlnaHQ6NjRweDtwb3NpdGlvbjpmaXhlZDtib3JkZXItcmFkaXVzOjUwJTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7Ym90dG9tOjMwcHg7cmlnaHQ6MTA0cHg7cGFkZGluZzowO2N1cnNvcjpwb2ludGVyO3otaW5kZXg6OTk5OTt1c2VyLXNlbGVjdDpub25lO3RyYW5zZm9ybTpzY2FsZSgwKTtib3gtc2hhZG93Om5vbmU7bGluZS1oZWlnaHQ6NjVweDt3aWxsLWNoYW5nZTphdXRvO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6bm9uZX0jbG5rbWJfY2xlYXJfbW9iIC5sbmttYl90dWJlIGltZ3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cG9zaXRpb246cmVsYXRpdmU7dG9wOi0ycHh9I2xua21iX2NsZWFyX21vYiAubG5rbWJfcGhvdG86YWN0aXZley1tcy10cmFuc2Zvcm06c2NhbGUoMC45NSk7dHJhbnNmb3JtOnNjYWxlKDAuOTUpO2JveC1zaGFkb3c6MCAzcHggMnB4IHJnYmEoMCwwLDAsMC4zKX0jbG5rbWJfY2xlYXJfbW9iIC5sbmttYl9waG90byBpbWd7d2lsbC1jaGFuZ2U6YXV0b30jbG5rbWJfY2xlYXJfbW9iIC5sbmttYl9waG90byAubG5rbWJfbGF3X2ltZ19iZWZve2JhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCd2NtVnpaWEoyWlVGemNHVmpkRkpoZEdsdlBTSjRUV2xrV1UxcFpDSWdkMmxrZEdnOUlqSXlMalF6SWlCb1pXbG5hSFE5SWpJeUxqTXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lESXlMalF6SURJeUxqTXhNaUkrQ2lBZ1BHUmxabk0rQ2lBZ0lDQThjM1I1YkdVK0NpQWdJQ0FnSUM1amJITXRNU0I3Q2lBZ0lDQWdJQ0FnWm1sc2JEb2dJMlptWmpzS0lDQWdJQ0FnSUNCbWFXeHNMWEoxYkdVNklHVjJaVzV2WkdRN0NpQWdJQ0FnSUgwS0lDQWdJRHd2YzNSNWJHVStDaUFnUEM5a1pXWnpQZ29nSUR4d1lYUm9JR1E5SWsweU1TNDVNeklzTVRjdU5qVXdJRXd4T0M0ME5qZ3NNVFF1TVRrMUlFTXhOeTQzTnpnc01UTXVOVEV3SURFMkxqWXpOaXd4TXk0MU16QWdNVFV1T1RJeUxERTBMakkwTWlCTU1UUXVNVGMzTERFMUxqazRNeUJETVRRdU1EWTNMREUxTGpreU1pQXhNeTQ1TlRNc01UVXVPRFU1SURFekxqZ3pNeXd4TlM0M09URWdRekV5TGpjek1Td3hOUzR4T0RNZ01URXVNakl5TERFMExqTTBPQ0E1TGpZek5Td3hNaTQzTmpRZ1F6Z3VNRFEwTERFeExqRTNOeUEzTGpJd05pdzVMalkzTUNBMkxqVTVOQ3c0TGpVM01DQkROaTQxTWprc09DNDBOVFFnTmk0ME5qY3NPQzR6TkRFZ05pNDBNRFlzT0M0eU16VWdURGN1TlRjM0xEY3VNRFk0SUV3NExqRTFNeXcyTGpRNU15QkRPQzQ0Tmpnc05TNDNPREFnT0M0NE9EZ3NOQzQyTkRFZ09DNHhPVGtzTXk0NU5UUWdURFF1TnpNMUxEQXVORGs0SUVNMExqQTBOeXd0TUM0eE9EZ2dNaTQ1TURRc0xUQXVNVFkzSURJdU1UZzVMREF1TlRRMklFd3hMakl4TXl3eExqVXlOU0JNTVM0eU5EQXNNUzQxTlRJZ1F6QXVPVEV5TERFdU9UWTRJREF1TmpNNUxESXVORFE1SURBdU5ETTFMREl1T1RZM0lFTXdMakkwT0N3ekxqUTJNQ0F3TGpFek1Td3pMamt6TVNBd0xqQTNOeXcwTGpRd01pQkRMVEF1TXpnd0xEZ3VNVGcwSURFdU16VXpMREV4TGpZME1DQTJMakExTlN3eE5pNHpNekFnUXpFeUxqVTFOU3d5TWk0NE1USWdNVGN1TnprekxESXlMak15TWlBeE9DNHdNVGtzTWpJdU1qazRJRU14T0M0MU1URXNNakl1TWpRd0lERTRMams0TXl3eU1pNHhNaklnTVRrdU5EWXlMREl4TGprek55QkRNVGt1T1RjM0xESXhMamN6TmlBeU1DNDBOVGtzTWpFdU5EWTBJREl3TGpnM05pd3lNUzR4TXpnZ1RESXdMamc1Tnl3eU1TNHhOVGNnVERJeExqZzROaXd5TUM0eE9URWdRekl5TGpZd01Dd3hPUzQwTnpjZ01qSXVOakl3TERFNExqTXpPQ0F5TVM0NU16SXNNVGN1TmpVd0lGb2lJR05zWVhOelBTSmpiSE10TVNJdlBnbzhMM04yWno0PSkgNTAlIDUwJSBuby1yZXBlYXQ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3JkZXItcmFkaXVzOjUwJTtsZWZ0OjA7LW1zLXRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGVaKDApfSNsbmttYl9jbGVhcl9tb2IgLmxua21iX3Bob3RvIGltZ3tkaXNwbGF5OmJsb2NrOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7bWFyZ2luOjAgYXV0bzt3aWR0aDoxMDAlO3dpbGwtY2hhbmdlOnRyYW5zZm9ybTtib3JkZXItcmFkaXVzOjUwJTtoZWlnaHQ6YXV0byFpbXBvcnRhbnR9I2xua21iX2NsZWFyX21vYiAubG5rbWJfcGhvdG8gLmxua21iX2xhd19pbWdfd3Jwey1tcy10cmFuc2Zvcm06c2NhbGUzZCgxKSB0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTpzY2FsZTNkKDEpIHRyYW5zbGF0ZVooMCk7dHJhbnNpdGlvbjphbGwgLjFzIC4yc30jbG5rbWJfY2xlYXJfbW9iIDpmb2N1c3tvdXRsaW5lOm5vbmUhaW1wb3J0YW50fUBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCl7I2xua21iX2NsZWFyX21vYiAubG5rbWJfdHViZSwjbG5rbWJfY2xlYXJfbW9iIC5sbmttYl9waG90b3tib3R0b206MjBweH19QG1lZGlhIChtYXgtd2lkdGg6IDQ3OXB4KXsjbG5rbWJfY2xlYXJfbW9iIC5sbmttYl90dWJle3JpZ2h0Ojk0cHh9fS5sbmttYl9waG90by5sbmttYl9zd2luZyAubG5rbWJfbGF3X2ltZ19iZWZvLC5sbmttYl9waG90by5sbmttYl9zd2luZyAubG5rbWJfbGF3X2ltZ193cnB7LW1zLXRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246YWxsIC4xc30ubG5rbWJfcGhvdG8ubG5rbWJfYW5pbWF0ZS5sbmttYl9zd2luZ3thbmltYXRpb24tZHVyYXRpb246OHM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLW5hbWU6YmdfY29sb3I7YW5pbWF0aW9uLWRlbGF5Oi4yc30ubG5rbWJfcGhvdG8ubG5rbWJfYW5pbWF0ZS5sbmttYl9zd2luZyAubG5rbWJfbGF3X2ltZ19iZWZve2FuaW1hdGlvbi1kdXJhdGlvbjo4czthbmltYXRpb24tZGVsYXk6LjJzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1uYW1lOmxua21iX3N3aW5nMn0ubG5rbWJfcGhvdG8ubG5rbWJfYW5pbWF0ZS5sbmttYl9zd2luZyAubG5rbWJfbGF3X2ltZ193cnB7YW5pbWF0aW9uLWR1cmF0aW9uOjhzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kZWxheTouMnM7YW5pbWF0aW9uLW5hbWU6bG5rbWJfc3dpbmc7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVooMCk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjFzfS5sbmttYl9sYXdfaW1nX3dycHstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSkgdHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06c2NhbGUzZCgxKSB0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246YWxsIC4xcyAuMnN9I2xua21iX2NsZWFyX21vYi5sbmttYl9idG5faGlkZGVuIC5jbG9zZV9mc2xpZGUgc3Zne3dpZHRoOjE0cHg7ZmlsbDojN2Y3ZjdmO2hlaWdodDoxNHB4fSNsbmttYl9jbGVhcl9tb2Iub24tZGV2aWNlIC5sbmttYl9waG90b3tyaWdodDoxMHB4IWltcG9ydGFudH0jbG5rbWJfY2xlYXJfbW9ie2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O3Bvc2l0aW9uOmZpeGVkIWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudDt3aWR0aDoxMDAlIWltcG9ydGFudDtoZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6VmVueW9vLU9wZW4tU2FucyxzYW5zLXNlcmlmIWltcG9ydGFudDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUzZCgxLDEsMSkhaW1wb3J0YW50Oy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZTNkKDEsMSwxKSFpbXBvcnRhbnQ7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZTNkKDEsMSwxKSFpbXBvcnRhbnQ7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUzZCgxLDEsMSkhaW1wb3J0YW50O3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUzZCgxLDEsMSkhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDAhaW1wb3J0YW50Oy1tb3otdHJhbnNmb3JtLW9yaWdpbjowIDAhaW1wb3J0YW50Oy1vLXRyYW5zZm9ybS1vcmlnaW46MCAwIWltcG9ydGFudDstbXMtdHJhbnNmb3JtLW9yaWdpbjowIDAhaW1wb3J0YW50O3RyYW5zZm9ybS1vcmlnaW46MCAwIWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnQ7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCFpbXBvcnRhbnQ7LW1zLXRyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQhaW1wb3J0YW50O3RyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQhaW1wb3J0YW50O29wYWNpdHk6MCFpbXBvcnRhbnQ7LW1zLWZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKSFpbXBvcnRhbnQ7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MCkhaW1wb3J0YW50O2NvbG9yOiM1NTUhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmUhaW1wb3J0YW50O3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5LGJhY2tncm91bmQtY29sb3IhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZSFpbXBvcnRhbnQ7LW1vei11c2VyLXNlbGVjdDpub25lIWltcG9ydGFudDstbXMtdXNlci1zZWxlY3Q6bm9uZSFpbXBvcnRhbnQ7dXNlci1zZWxlY3Q6bm9uZSFpbXBvcnRhbnQ7Ym94LXNpemluZzpib3JkZXItYm94IWltcG9ydGFudDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudDstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaCFpbXBvcnRhbnR9I2xua21iX2NsZWFyX21vYi5pc19sb2FkZWR7b3BhY2l0eToxIWltcG9ydGFudDstbXMtZmlsdGVyOm5vbmUhaW1wb3J0YW50O2ZpbHRlcjpub25lIWltcG9ydGFudDt6LWluZGV4Ojk5OTk5OCFpbXBvcnRhbnR9Lmxua21iX2NvbnRhaW5lcntoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCU7b3ZlcmZsb3c6YXV0b30jbG5rbWJfY2xlYXJfbW9iLmxua21iX2ZpeGVke3RvcDppbml0aWFsIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnR9I2xua21iX2NsZWFyX21vYi5sbmttYl9maXhlZCAubG5rbWJfcGhvdG97cmlnaHQ6M3Z3O2JvdHRvbTozMHB4fUBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpeyNsbmttYl9jbGVhcl9tb2IubG5rbWJfZml4ZWQgLmxua21iX3Bob3Rve3dpZHRoOjh2dztoZWlnaHQ6OHZ3fX1AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7I2xua21iX2NsZWFyX21vYi5sbmttYl9maXhlZCAubG5rbWJfcGhvdG97d2lkdGg6OHZoO2hlaWdodDo4dmh9fUBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpeyNsbmttYl9jbGVhcl9tb2IubG5rbWJfZml4ZWQgLmxua21iX3Bob3Rve3dpZHRoOjE3dmg7aGVpZ2h0OjE3dmh9fUBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi1kZXZpY2UtaGVpZ2h0OiA3MDBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKXsjbG5rbWJfY2xlYXJfbW9iLmxua21iX2ZpeGVkIC5sbmttYl9waG90b3t3aWR0aDo4dmg7aGVpZ2h0Ojh2aH19QG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1MDBweCl7I2xua21iX2NsZWFyX21vYi5sbmttYl9maXhlZCAubG5rbWJfcGhvdG97d2lkdGg6MTd2dztoZWlnaHQ6MTd2d319QG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDUwMHB4KXsjbG5rbWJfY2xlYXJfbW9iLmxua21iX2ZpeGVkIC5sbmttYl9waG90b3t3aWR0aDoxN3ZoO2hlaWdodDoxN3ZofX0jbG5rbWJfY2xlYXJfbW9iLmxua21iX2ZpeGVkIC5sbmttYl9waG90bzpiZWZvcmV7YmFja2dyb3VuZC1zaXplOjMwJSAzMCV9aHRtbC5wdl93aWRnZXRfb3BlbmVkIGJvZHl7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O3Bvc2l0aW9uOmZpeGVkIWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudDt3aWR0aDoxMDAlIWltcG9ydGFudDtoZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDttaW4td2lkdGg6MTAwJSFpbXBvcnRhbnQ7bWluLWhlaWdodDoxMDAlIWltcG9ydGFudDttYXgtd2lkdGg6MTAwJSFpbXBvcnRhbnQ7bWF4LWhlaWdodDoxMDAlIWltcG9ydGFudH0=',
    };

    /*
     * ==================================================================
     * Барахолка мелких функций
     */

    function hasCss(e, css) {
        return e.classList.contains(css);
    }

    function htmlspecialchars(str) {
        return ('' + str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function IsFamily(papa, kind) {
        var x = kind;
        while (x.parentElement)
            if (x.parentElement === papa) return !0;
            else x = x.parentElement;
        return !1;
    }

    function attr(e, name, val) {
        if (typeof val === 'undefined') return e.getAttribute(name);
        return e.setAttribute(name, val);
    }

    var _ds = '' + [] + '<div class="lnkwt_';

    _l.$ = function (sel, r) {
        r = cy.wrapNode.querySelector(sel);
        if (r)
            r.show = function () {
                r.style.display = "block"
            },
                r.hide = function () {
                    r.style.display = "none"
                };
        return r;
    };
    _l.rndSleep = function (ms) {
        ms = Math.random() * 20 + new Date().getTime();
        while (new Date() < ms) ;
    };
    _l.getPortletItem = function () {
        cy.bodyNode = cy.bodyNode || _l.$('div.lnkwt_portlet_body');
        return cy.bodyNode;
    };
    _l.setPortlet = function (html) {
        cy.bodyNode = cy.bodyNode || _l.$('div.lnkwt_portlet_body');
        cy.bodyNode.innerHTML = html;
        _l.onScrollHook();
    };
    _l.getPortlet = function () {
        cy.bodyNode = cy.bodyNode || _l.$('div.lnkwt_portlet_body');
        return cy.bodyNode.innerHTML;
    };

    _l.on = function (func, node) {
        node = node || cy.wrapNode;
        if (document.addEventListener)
            return function (e) {
                return node.addEventListener(e, func, false);
            };
        return function (e) {
            node.attachEvent("on" + e, func);
        }
    };

    _l.onPhoneMask = function (selector) {
        if (_l.onPhoneMaskSet) if (~_l.onPhoneMaskSet.indexOf(selector)) return;
        else _l.onPhoneMaskSet.push(selector);
        else _l.onPhoneMaskSet = [selector];

        function phone2int(str) {
            if (!str)
                return '';
            var i = 0, res = '', s, ln;
            for (ln = str.length; i < ln; i++) s = str[i], res += s >= '0' && s <= '9' ? s : '';

            if (+res[0] === 7) res = res.substring(1);
            if (+res[0] !== 9) return '9';
            return res.substr(0, 10);
        }

        function int2phone(str, res) {
            str = str || '';
            res = '+7  ( ';
            for (var i = 0, ln = str.length, s; i < 10; i++) {
                s = i < ln ? str[i] : !i ? '9' : '  ';
                if (~[0, 1, 2, 4, 5, 7, 9].indexOf(i)) res += s;
                else switch (i) {
                    case 3:
                        res += ' ) ' + s;
                        break;
                    case 6:
                    case 8:
                        res += ' - ' + s;
                        break
                }
            }
            return res;
        }

        function setCaret(item, pos) {
            if (!item.value.length)
                return;
            var xlat = {
                0: 7,
                1: 7,
                2: 8,
                3: 12,
                4: 13,
                5: 14,
                6: 17,
                7: 19,
                8: 22,
                9: 24
            }[pos];
            pos = xlat === undefined ? item.value.length : xlat;

            if (item.setSelectionRange)
                item.focus(),
                    item.setSelectionRange(pos, pos + 2);
            else if (typeof item.createTextRange !== 'undefined') {
                var range = item.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos + 2);
                range.moveStart('character', pos);
                range.select();
            }
        }

        function localEventMaskPhone(e) {
            var targ = e.target, i, n, arr = [];
            for (i = 0, n = _l.onPhoneMaskSet.length; i < n; i++) arr.push(cy.wrapNode.querySelector(_l.onPhoneMaskSet[i]));
            if (~arr.indexOf(targ)) {
                targ.hasAttribute('data-numberphone') || attr(targ, 'data-numberphone', '');
                targ.hasAttribute('data-rawphone') || attr(targ, 'data-rawphone', '');

                var hidInpt = attr(targ, 'data-numberphone'),
                    rawInput = targ.value,
                    showinput = phone2int(rawInput);

                if (e.type === 'focus' || e.type === 'focusin') {
                    if (hidInpt === '')
                        rawInput = int2phone(''), targ.value = rawInput;

                    setCaret(targ, showinput.length);
                    attr(targ, 'data-rawphone', rawInput);
                    attr(targ, 'data-numberphone', hidInpt);
                    return;
                }
                if (e.type === 'blur' || e.type === 'focusout') {
                    targ.value = int2phone(hidInpt);
                    attr(targ, 'data-rawphone', rawInput);
                    attr(targ, 'data-numberphone', hidInpt);
                    return;
                }
                if (e.type === 'keydown' && targ.tagName === 'INPUT' && e.keyCode === 8) {//backspace
                    hidInpt = hidInpt ? hidInpt.substr(0, hidInpt.length - 1) : '',
                        rawInput = int2phone(hidInpt), targ.value = rawInput;
                    setCaret(targ, rawInput.length);
                    attr(targ, 'data-rawphone', rawInput);
                    attr(targ, 'data-numberphone', hidInpt);
                    return;
                }
                if (e.type === 'input') {
                    if (targ.getAttribute('data-rawphone') !== rawInput)
                        hidInpt = phone2int(rawInput),
                            rawInput = int2phone(hidInpt), targ.value = rawInput;

                    setCaret(targ, showinput.length);
                    attr(targ, 'data-rawphone', rawInput);
                    attr(targ, 'data-numberphone', hidInpt);

                }
            }
        }

        if (document.addEventListener) {
            cy.wrapNode.addEventListener('focus', localEventMaskPhone, true);
            cy.wrapNode.addEventListener('blur', localEventMaskPhone, true);
            cy.wrapNode.addEventListener('input', localEventMaskPhone, false);
            cy.wrapNode.addEventListener('keydown', localEventMaskPhone, false);
        } else {
            ['input', 'focusin', 'focusout', 'keydown'].forEach(_l.on(localEventMaskPhone));
        }
    };

    /*
     * ===========================================================================================
     * Всякие мигалки для Анимации
     *
     */
    _l.showNotify = function () {
        if (!cy.notifyNode) {
            var s = document.createElement("div");
            s.classList.add("lnkwt_css_notify");
            s.style.cursor = "pointer";
            s.innerHTML = _l.txts['topNotify'];
            cy.wrapNode.insertBefore(s, cy.wrapNode.firstChild);
            cy.notifyNode = s;
        }
        cy.notifyNode.style.display = "block";
        setTimeout(function () {
            cy.notifyNode.style.display = "none";
        }, 5000);
    };
    /*
     * верхняя часть при свернутом виджете
     */

    _l.addHover = function () {
        if (cy.hoverNode)
            return;
        var s = _l.$('div.lnkwt_css_hover_module');
        s.innerHTML = '' + _ds + 'head_hover_item" style="display:none" data-goal="chat">' +
            _ds + 'lawyer_photo_wrap"> <img src="' + _l.params['photo'] + '"> </div>' +
            _ds + 'hover_title lnkwt_chat_law">' + _l.params['fio'] + '</div>' +
            _ds + 'hover_text lnkwt_chat_law">' + _l.params['metier'] + '</div>' +
            '</div>' +
            _ds + 'head_hover_item" data-goal="callback" >' +
            _ds + 'lawyer_photo_wrap"><img src="' + _l.resorces.callpng + '"></div>' +
            _ds + 'hover_title">' + _l.txts['callbackMatier'] + '</div>' +
            _ds + 'hover_text">' + _l.txts['callbackFio'] + '</div>' +
            '</div>';
        cy.hoverNode = s;
        // назначим обработчик, срабатывающий на свернутом окне.

        ['mouseout', 'pointerout', 'MSPointerOut', 'mouseover', 'pointerover'].forEach(_l.on(
            function (event) {
                if (cy.main_robot in {
                    1: 1,
                    3: 1
                } && hasCss(cy.wrapNode, 'lnkwt_css_hover_module_active')) {
                    var top = 0, left = 0, right = 0, bottom = 0, meth, elem, obj;
                    try {
                        meth = cy.wrapNode.getBoundingClientRect;
                    } catch (ex) {
                        meth = false;
                    }
                    if (meth)
                        obj = cy.wrapNode.getBoundingClientRect(),
                            top = obj.top, left = obj.left, right = obj.right, bottom = obj.bottom;
                    else {
                        elem = cy.wrapNode;
                        while (elem) {
                            top = top + parseInt(elem.offsetTop);
                            left = left + parseInt(elem.offsetLeft);
                            elem = elem.offsetParent
                        }
                        right = left + 344;
                        bottom = top + (
                            window.getComputedStyle ? parseInt(window.getComputedStyle(cy.wrapNode, null).height) :
                                (typeof cy.wrapNode.currentStyle.height !== 'undefined' ? parseInt(cy.wrapNode.currentStyle.height) : 130));
                    }
                    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom)
                        cy.wrapNode.classList.remove('lnkwt_css_hover_module_active');
                }
            }));
    };

    _l.openWidget = function () {
        _l.$('div.lnkwt_css_hover_module').hide();
        _l.$('div.lnkwt_wrap_footer').show();
        _l.$('div.lnkwt_css_minimize').show();
        _l.getPortletItem().style.height = '360px';
    };

    _l.closeWidget = function () {
        _l.$('div.lnkwt_wrap_footer').hide();
        _l.$('div.lnkwt_css_minimize').hide();
        _l.getPortletItem().style.height = '0';
        _l.$('div.lnkwt_css_hover_module').show();
    };

    _l.onPulseBall = function (a) {
        if (a = _l.$('div.lnkwt_mark_insert_before'))
            a.innerHTML = '<div class="lnkwt-mark-writetext">\n' +
                '<div class="loader-inner ball-pulse-sync"><div></div><div></div><div></div></div>\n' +
                _ds + 'time_line l_ka_msg_typemessage">Подождите, вам пишут сообщение</div>\n' +
                '</div>';
        _l.onScrollHook();
    };
    _l.offPulseBall = function (a) {
        if (a = _l.$('div.lnkwt_mark_insert_before'))
            a.innerHTML = '';
        _l.onScrollHook();
    };

    /*
     * ===================================================================
     * Вся анимация
     */

    _l.startPulsarTimeHover = function () {

        var flipper = {
            now: 'chat',
            contender: 'callback',
            chat: {
                lnkwt_metier_txt: _l.params['metier'],
                lnkwt_lawyer_name: _l.params['fio'],
            },
            callback: {
                lnkwt_metier_txt: _l.txts['callbackMatier'],
                lnkwt_lawyer_name: _l.txts['callbackFio'],
                'lnkwt_hover_title.lnkwt_chat_law': _l.params['fio'],
                'lnkwt_hover_text.lnkwt_chat_law': _l.params['metier'],
            }
        };
        cy.funcFlip = function (x) {
            if (!(x === 'chat' || x === 'callback') || x === flipper.now) return;
            flipper.contender = x;
            var m, zip = ".lnkwt_head_hover_item[data-goal=",
                now = _l.$(zip + flipper.now + "]"),
                contender = _l.$(zip + flipper.contender + "]");
            contender.hide();
            now.show();
            flipper.now = flipper.contender;
            m = _l.$('.lnkwt_portlet_head');
            m.removeAttribute('data-goal');
            attr(m, 'data-goal', flipper.now);

            _l.$('.lnkwt_lawyer_photo').classList.toggle('lnkwt_css_photo_flipped');
            for (var i in flipper[flipper.now])
                _l.$('.' + i).innerHTML = flipper[flipper.now][i];

        };

        var prom = new Promise(function (resolve, reject) {
            setInterval(gluk, 4000);
            var old_main_robot = cy.main_robot;

            function gluk() {
                if (old_main_robot === 3 && old_main_robot === cy.main_robot)
                    cy.funcFlip(flipper.now === 'chat' ? 'callback' : 'chat');
                else {
                    cy.main_robot === 2 && cy.funcFlip('chat');
                    cy.main_robot === 4 && cy.funcFlip('callback');
                }

                old_main_robot = cy.main_robot;
                for (var el, when, i = 0, ct = Date.now(), coll = cy.wrapNode.querySelectorAll('.lnkwt_time_line[data-time]'); i < coll.length; i++) {
                    el = coll[i], when = attr(el, 'data-time');
                    if (when && ct - when > 65000) {
                        var wdt = new Date(+when), fh = '' + wdt.getHours(), fm = '' + wdt.getMinutes();
                        fh = fh.length < 2 ? '0' + fh : fh;
                        fm = fm.length < 2 ? '0' + fm : fm;
                        el.innerHTML = 'Отправлено в ' + fh + ':' + fm;
                        el.removeAttribute('data-time');
                    }
                }
            }

        });
        prom.then(null, Function('err', "console.log('Сбой в системном пульсаре :' + err)"));
    };

    _l.beginAnimate = function () {
        if (cy.semaphoreAnimation)
            return;
        if (_l.$('#_lnkwt_callback')) {
            cy.contentChat = ' ';
            cy.semaphoreAnimation = 0;
            cy.AnimCompleted = !1;
            return;
        }
        _l.rndSleep();
        cy.semaphoreAnimation++;
        if (cy.semaphoreAnimation > 1)
            return; // переменная замок - 2 участника - снижаем вероятность одновременного исполнения
        //  _l_.setPortlet(''); так как addBodyChat уже это делает
        _l.openWidget();
        _l.addBodyChat();

        var prom = new Promise(function (resolve, reject, i) {
            i = 0;
            gluk();

            function gluk() {
                if (!_l.$('#_lnkwt_chat')) {
                    reject();
                    return;
                }
                switch (i) {
                    case 0:
                        if (cy.AnimCompleted) {
                            resolve();
                            return;
                        }
                        _l.onPulseBall();
                        break;
                    case 5:
                        _l.offPulseBall();
                        if (cy.AnimCompleted) {
                            resolve();
                            return;
                        }
                        _l.addBalloon(_l.txts['firstMsg']);
                        break;
                    case 8:
                        if (cy.AnimCompleted) {
                            resolve();
                            return;
                        }
                        if (('' + _l.txts['secondMsg']).length === 0) {// Выходим если не задана 2 строка
                            resolve();
                            return;
                        }
                        _l.onPulseBall();
                        break;
                    case 12:
                        _l.offPulseBall();
                        cy.AnimCompleted || _l.addBalloon(_l.txts['secondMsg']);
                        resolve();
                        return;
                }
                i++;
                i < 13 && setTimeout(gluk, 1000);
            }
        });

        prom.then(function () {
            cy.contentChat = _l.getPortlet();
            cy.AnimCompleted = !0;
            _l.setMainRobot(2);
        }, function () {
            cy.contentChat = '';
            cy.semaphoreAnimation = 0;
            cy.AnimCompleted = !1
        });
    };


    _l.finalAnimate = function () {
        if (cy.semaphoreAnimEnd)
            return;
        if (_l.$('#_lnkwt_callback')) {
            cy.contentChat = '';
            cy.semaphoreAnimEnd = 0;
            return;
        }
        _l.rndSleep();
        cy.semaphoreAnimEnd++;
        if (cy.semaphoreAnimEnd > 1)
            return;

        var prom = new Promise(function (resolve, reject, i) {
            i = 0;
            gluk();

            function gluk() {
                if (!_l.$('#_lnkwt_chat')) {
                    reject();
                    return;
                }
                switch (i) {
                    case 1:
                        _l.onPulseBall();
                        break;
                    case 4:
                        _l.offPulseBall();
                        _l.addBalloon(_l.txts['msgAnsByPhone']);
                        break;
                    case 6:
                        _l.addFinalBalloon();
                        resolve();
                        return;
                }
                i++;
                i < 13 && setTimeout(gluk, 1000);
            }
        });

        prom.then(function () {
            cy.contentChat = _l.getPortlet();
            cy.semaphoreAnimEnd = 99;
        }, function () {
            cy.semaphoreAnimEnd = 0;
        });
    };

    /*
     * ===============================================================
     * Конструкторы HTML кода
     *
     */

    _l.addFirstHtml = function (testmode, s, t) {
        s = document.createElement("div");
        t = document.getElementsByTagName("body")[0];
        s.id = "lnkwt_clear_all";
        t.appendChild(s);
        cy.rootNode = s;
        ['change', 'input', 'click', 'keydown',
            'focusin', 'focusout', 'scroll',
            'mousedown', 'mouseup', 'mousemove', 'mouseout', 'mouseover',
            'pointerover', 'pointerout', 'MSPointerOut'].forEach(_l.on(function (e) {
            e.stopPropagation()
        }, s)); // с виджета всплытия events нет
        s.innerHTML = '' + _ds + 'body widget_style3d_box_shadow lnkwt_portlet" ' +
            'style =" background-color: ' + _l.params['widget_color'] + '; ' + (_l.params['left'] ? 'left: 20px !important;' : '') + '">' +
            _ds + 'css_hover_module"></div>' +
            _ds + 'portlet_head"  data-goal="chat">' +
            _ds + 'lawyer_photo">' +
            _ds + 'css_photo_flipper">' +
            _ds + 'css_photo_front"><img src="' + _l.params['photo'] + '"></div>' +
            _ds + 'css_photo_back"><img  src="' + _l.resorces.callpng + '"> </div>' +
            '</div>' +
            '</div>' +
            _ds + 'metier_title">' + _ds + 'metier_txt">' + _l.params['metier'] + '</div></div>' +
            _ds + 'lawyer_name">' + _l.params['fio'] + '</div>' +
            _ds + 'css_minimize" style="display: none"></div>' +
            _ds + 'css_bell">' +
            _ds + 'icon_bell"></div>' +
            _ds + 'css_bell_notif"></div>' +
            '</div>' +
            '</div>' +
            _ds + 'portlet_body" style = "height: 0"></div>' +
            _ds + 'wrap_footer" style="display:none;">' +
            _ds + 'ads_footer">' +
            _ds + 'ads_wrap">' +
            _ds + 'ads_footer_txt" style="display: block;">Виджет для сайта Leadinka</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        cy.wrapNode = cy.rootNode.firstChild;
        _l.getPortletItem();
        _l.addHover();
        _l.onMainEvent();
        testmode || _l.setMainRobot(1);
    };

    _l.addBodyChat = function () {
        _l.setPortlet('<div id="_lnkwt_chat" style="display: block; position: static;">' +
            _ds + 'scroll ps-container ps-theme-default" style="height: 308px;">' +
            _ds + 'chat_list">' + _ds + 'mark_insert_before"></div></div>' +
            '<div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px; height: 12px;">' +
            '<div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>' +
            "</div>" +
            '</div>' +
            _ds + 'wrap_of_textarea">' +
            _ds + 'style_shaker lnkwt_user_balloon lnkwt_style_shaker_none">' +
            '<textarea class="lnkwt_textarea_class" placeholder="Введите ваше сообщение"></textarea>' +
            _ds + 'css_send" style="background-color: ' + _l.params['widget_color'] + '; border-color: ' + _l.params['widget_color'] + ';">' +
            _ds + 'css_send_arrow"></div>' +
            '</div>' +
            '</div>' +
            "</div>" +
            "</div>");
        ['input'].forEach(_l.on(
            function (e) {
                if (hasCss(e.target, 'lnkwt_textarea_class')) {
                    var t = '' + e.target.value, foo = _l.$('div.lnkwt_wrap_footer .lnkwt_ads_footer'),
                        tl = ' !important; outline: 0px none currentcolor;';
                    if (t.length < 5)
                        e.target.style.cssText = 'height: 37px' + tl,
                            _l.initFooter(foo);
                    else
                        e.target.style.cssText = 'height: 80px' + tl,
                            foo.innerHTML = '<div style = "vertical-align: baseline; display: inline-block;margin-right: 0px;color: #FFFFFF; font-size: 10px;">' +
                                'Нажмите Ctrl-Enter, чтобы отправить сообщение</div>';
                }
            }));
    };
    _l.initFooter = function (foo) {
        foo.innerHTML = _ds + 'ads_wrap">' + _ds + 'ads_footer_txt" style="display: block;">Виджет для сайта Leadinka</div></div>';
    };
    _l.addBodyCallback = function () {
        _l.setPortlet('<div id="_lnkwt_callback" style=" position: static;">' +
            _ds + 'scroll ps-container ps-theme-default" style="height: 360px;">' +
            _ds + 'chat_list">' +
            _ds + 'balloon l_ka-widget-message-block l_ka-widget-message-me lnkwt_callback_wrap" style="display: block !important;">' +
            '<div class="lawyer_balloon_wrap">' +
            '<div class="lnwt-msg msg-with-html" data-block-message="true">' +
            '<div id="lnkwt_css_callform_step1">' +
            _ds + 'callback_title" style="font-weight: bold;font-size: 14px">Выберите время и оставьте номер телефона, мы вам перезвоним.</div>' +
            _ds + 'css_order_control_row">' +
            _ds + 'callback_date_short">' +
            '<select class="lnkwt_callback_control" data-form-field="callform_when_date">' +
            '<option>Сегодня</option><option>Завтра</option>' +
            '</select>' +
            _ds + 'icon_date_callback"></div>' +
            _ds + 'css_arrow_down"></div>' +
            '</div>' +
            _ds + 'callback_date_full">' +
            '<select class="lnkwt_callback_control" data-form-field="callform_when_time"></select>' +
            _ds + 'css_arrow_down"></div>' +
            '</div>' +
            '</div>' +
            _ds + 'callback_field">' +
            '<input class="lnkwt_callback_control" placeholder="Телефон" data-form-field="callform_phone" data-necessary="true" maxlength="40" type="text">' +
            _ds + 'icon_phone"></div>' +
            '</div>' +
            _ds + 'callback_field">' +
            '<input class="lnkwt_callback_control" placeholder="Имя" data-form-field="callform_first_last_name" maxlength="50" type="text">' +
            _ds + 'icon_username"></div>' +
            '</div>' +
            _ds + 'send_callback" id="lnkwt_css_callform_sendrequest">Жду звонка</div>' +
            _ds + 'element_center">' +
            _ds + 'callback_return">' +
            _ds + 'dop_icon_return2chat"></div>Вернуться к чату' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div id="lnkwt_css_callform_step2" style="display:none;">' +
            '<div class="success_lead_send"></div>' +
            '<div class="widget_thankyoupage_text">Спасибо, что обратились к нам. В ближайшее время мы свяжемся с вами.</div>' +
            '</div>' +
            '</div>' +
            _ds + 'nipple_lawyer"></div>' +
            '</div>' +
            _ds + 'time_line" data-time="' + Date.now() + '">Только что</div>' +
            '</div>' +
            _ds + 'mark_insert_before"></div>' +
            '</div>' +
            '</div>' +
            '</div>');

        var sel_opt, addOpt = function (it) {
            sel_opt += '<option value="' + it + '">' + it + '</option>'
        }, fill = function (i) {
            i = +i;
            for (var fr, to; i < 23; i++) {
                fr = '' + i;
                fr = fr.length < 2 ? '0' + fr : fr;
                to = i + 1;
                to = '' + to;
                to = to.length < 2 ? '0' + to : to;
                addOpt(fr + ':00 - ' + to + ':00');
            }
            addOpt('23:00 - 23:59');
            _l.$('select.lnkwt_callback_control[data-form-field=callform_when_time]').innerHTML = sel_opt;
        };
        sel_opt = '';
        addOpt('Сейчас');
        fill((new Date(Date.now())).getHours() + 1);
        cy.contentCallBack = _l.getPortlet();

        ['change'].forEach(_l.on(
            function (event) {
                if (event.target.getAttribute('data-form-field') === 'callform_when_date') {
                    var i = 7;
                    sel_opt = '';
                    if ((event.target.options[event.target.selectedIndex]).value === 'Сегодня')
                        addOpt('Сейчас'),
                            i = (new Date(Date.now())).getHours() + 1;
                    fill(i);
                }
            }));
        _l.onPhoneMask('.lnkwt_callback_control[data-form-field=callform_phone]');
    };


    _l.addBalloon = function (txt, s) {
        if (!_l.$('#_lnkwt_chat'))
            return;
        for (var ob, i = 0, n = cy.arr_ballons.length; i < n; i++) {
            ob = cy.arr_ballons[i];
            if (ob.t === 'lb' && ob.m === txt) return;
        }

        s = document.createElement("div");
        _l.$('div.lnkwt_chat_list').insertBefore(s, _l.$('div.lnkwt_mark_insert_before'));
        s.innerHTML = '' + _ds + 'balloon">' +
            '<div class="lawyer_balloon_wrap">' +
            '<div class="lnwt-msg msg-no-html" data-block-message="true">' + txt + '</div>' + _ds + 'nipple_lawyer"></div>' +
            '</div>' +
            _ds + 'time_line" data-time="' + Date.now() + '">Только что</div>' +
            '</div>';
        _l.onScrollHook();
        cy.arr_ballons.push({t: 'lb', m: txt});
        _l.saveParam();
    };
    _l.addBalloonError = function (txt, s, v) {
        s = document.createElement("div");
        v = _l.$('div.lnkwt_mark_insert_before');
        v.parentElement.insertBefore(s, v);
        s.style.margin = "20px 0";
        s.innerHTML = _ds + 'balloon">' +
            '<div class="lawyer_balloon_wrap">' +
            '<div class="lnwt-msg msg-no-html" data-block-message="true"  style = "color:red;">' + txt + '</div>' + _ds + 'nipple_lawyer"></div>' +
            '</div>' +
            _ds + 'time_line" data-time="' + Date.now() + '">Только что</div>' +
            '</div>';
        _l.onScrollHook();
    };
    _l.addThanksBallon = function (s) {
        s = document.createElement("div");
        _l.$('div.lnkwt_chat_list').insertBefore(s, _l.$('div.lnkwt_mark_insert_before'));
        s.innerHTML = _ds + 'balloon">' +
            '<div class="lawyer_balloon_wrap">' +
            '<div class="lnwt-msg" style="width: 241px;">' +
            '<div class="success_lead_send"></div>' +
            _ds + 'thanks_text">Спасибо, что обратились к нам. В ближайшее время мы свяжемся с вами.</div>' +
            '<div style="text-align: center; margin-top: 10px;">' +
            _ds + 'try_my_ask" data-widget-button="repeat">Спросить снова</div>' +
            '</div>' +
            '</div>' +
            _ds + 'nipple_lawyer"></div>' +
            '</div>' +
            _ds + 'time_line" data-time="' + Date.now() + '">Только что</div>' +
            '</div>';
        _l.$('#lnkwtFinalBalloon').hide();
        _l.onScrollHook();
        cy.arr_ballons.push({t: 'sb', m: ''});
        _l.saveParam();
    };
    _l.addUserBallon = function (s) {
        s = document.createElement("div");
        _l.$('div.lnkwt_chat_list').insertBefore(s, _l.$('div.lnkwt_mark_insert_before'));

        s.innerHTML = _ds + 'balloon lnkwt_user_balloon" style="">' +
            '<div class="lawyer_balloon_wrap user_msg">' +
            '<div class="lnwt-msg msg-no-html">' + cy.msg + '</div>' +
            _ds + 'nipple_user"></div>' +
            '<div class="lnkwt-sub_edit" data-contenteditable="true"><div class="lnkwt-mini-pensil"></div>Редактировать</div>' +
            '</div>' +
            '</div>';
        _l.onScrollHook();
        cy.arr_ballons.push({t: 'ub'});
        _l.saveParam();
    };

    _l.addFinalBalloon = function () {
        if (!_l.$('#_lnkwt_chat'))
            return;
        var s = document.createElement("div");
        _l.$('div.lnkwt_chat_list').insertBefore(s, _l.$('div.lnkwt_mark_insert_before'));
        s.innerHTML = _ds + 'balloon" id="lnkwtFinalBalloon">' +
            '<div class="lawyer_balloon_wrap">' +
            _ds + 'callback_title" style="font-weight: bold;font-size: 14px">Оставьте свои контактные данные, и мы ответим на ваш вопрос.</div>' +
            _ds + 'css_order_control_row">' +
            _ds + 'callback_field">' +
            '<input class="lnkwt_callback_control" placeholder="Телефон" data-form-field="callform_phone" data-necessary="true" maxlength="40" type="text">' +
            _ds + 'icon_phone"></div>' +
            '</div>' +
            _ds + 'callback_field">' +
            '<input class="lnkwt_callback_control" placeholder="Имя" data-form-field="callform_first_last_name" maxlength="50" type="text">' +
            _ds + 'icon_username"></div>' +
            '</div>' +
            _ds + 'callback_field" >' +
            '<input class="lnkwt_callback_control" placeholder="Город" data-form-field="region" maxlength="50" type="text">' +
            _ds + 'icon_city"></div>' +
            '</div>' +
            '</div>' + //msg-from
            _ds + 'send_callback" id="lnkwt_css_chatform_sendrequest">Отправить</div>' + _ds + 'nipple_lawyer"></div>' +
            '</div>' +
            '</div>';
        _l.onPhoneMask('.lnkwt_callback_control[data-form-field=callform_phone]');
        _l.onScrollHook();
        cy.arr_ballons.push({t: 'fb'});
        _l.saveParam();
    };


    /*
     * ====================================================
     * Хуки
     */

    _l.ScrollFunc = function (e) {
        var sN;
        if (!(sN = _l.$('.lnkwt_chat_list'))) return;
        var l_scrol = sN.parentElement.scrollTop,
            barPos = sN.scrollHeight > portH ? (portH - barH) * l_scrol / (sN.scrollHeight - portH) : 0;

        _l.$('.ps-scrollbar-y').style.top = '' + Math.floor(barPos) + 'px';
        _l.$('.ps-scrollbar-y-rail').style.top = '' + Math.floor(l_scrol) + 'px';

    };
    _l.onScrollHook = function () {
        var rel = _l.$('.ps-scrollbar-y-rail'), sN = _l.$('.lnkwt_chat_list');

        if (!rel || !sN || sN.scrollHeight <= portH) {
            if (cy.papaScroll) {
                if (document.addEventListener)
                    cy.papaScroll.removeEventListener('scroll', _l.ScrollFunc);
                else
                    cy.papaScroll.detachEvent("onscroll", _l.ScrollFunc);
                cy.papaScroll = null;
            }
            rel && rel.hide();
            return;
        }
        sN.scrollIntoView(false);

        var relSt = rel.style, papaScroll = sN.parentElement, scrolled = papaScroll.scrollTop;
        relSt.height = '' + portH + 'px', relSt.right = '3px', relSt.top = '' + Math.floor(scrolled) + 'px', relSt.display = 'block';
        _l.$('.ps-scrollbar-y').style.height = '' + barH + 'px';
        _l.$('.lnkwt_scroll.ps-container').style.height = '' + portH + 'px';

        cy.papaScroll = papaScroll;
        ['scroll'].forEach(_l.on(_l.ScrollFunc, cy.papaScroll));
    };


    _l.onMainEvent = function () {
        var statusdown = 0; // скроллер
        ['mousedown', 'mouseup', 'mouseout', 'mousemove'].forEach(_l.on(function (e) {
            if (e.type === 'mouseout' || e.type === 'mouseup') {
                statusdown && doScroll(e.screenY - statusdown, e, 1);
                statusdown = 0;
                return;
            }
            if (statusdown && e.type == 'mousemove')
                doScroll(e.screenY - statusdown, e, 1),
                    statusdown = e.screenY;
            if (e.type === 'mousedown' && hasCss(e.target, 'ps-scrollbar-y')) statusdown = e.screenY;

        }));

        if (cy.wrapNode.addEventListener)
            if ('onwheel' in document) // IE9+, FF17+, Ch31+
                cy.wrapNode.addEventListener("wheel", onWheel);
            else if ('onmousewheel' in document)    // устаревший вариант события
                cy.wrapNode.addEventListener("mousewheel", onWheel);
            else                // Firefox < 17
                cy.wrapNode.addEventListener("MozMousePixelScroll", onWheel);
        else  // IE8-
            cy.wrapNode.attachEvent("onmousewheel", onWheel);

        function onWheel(e) {
            e = e || window.event;
            doScroll(e.deltaY || e.detail || e.wheelDelta, e);
        }

        function doScroll(delta, e, mode) {
            var sN, val = 0;
            if (!(sN = _l.$('.lnkwt_chat_list'))) return;
            var scrolled = sN.parentElement.scrollTop;
            mode = mode ? Math.abs(delta) : 20;
            if (scrolled <= sN.scrollHeight - portH) val = mode;
            sN.parentElement.scrollBy(0, delta > 0 ? val : -mode);
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        }

        //=====================================

        ['click', 'mouseover', 'pointerover', 'keydown'].forEach(_l.on(
            function (e) {
                var targ = e.target, type = e.type;
                if (cy.main_robot in {1: 1, 3: 3}) {
                    if (type === 'mouseover' || 'pointerover' === type) {
                        hasCss(targ, 'lnkwt_portlet_head') && !hasCss(cy.wrapNode, 'lnkwt_css_hover_module_active')
                        && cy.wrapNode.classList.add('lnkwt_css_hover_module_active');
                        return;
                    }
                    if (type === 'click') {
                        var goal = null;
                        for (var x = targ; x; x = x.parentElement)
                            if (x.hasAttribute('data-goal')) {
                                goal = attr(x, 'data-goal');
                                break;
                            }
                        goal === 'chat' && _l.setMainRobot(2) || goal === 'callback' && _l.setMainRobot(4);
                        return;
                    }
                }
                if (type === 'keydown') {
                    if (e.ctrlKey && e.keyCode == 13 && targ.tagName === 'TEXTAREA') {
                        validateSend();
                        return
                    }

                    if (e.keyCode in {13: 0, 27: 0} && attr(targ, 'contenteditable') === 'true') {
                        var el = _l.$('.lawyer_balloon_wrap.user_msg .lnwt-msg'), msg = el.textContent;
                        el.removeAttribute('contenteditable');
                        cy.msg = htmlspecialchars(msg);
                        _l.saveParam();
                        return;
                    }
                }


                if (type === 'click') {

                    if (cy.main_robot in {
                            1: 1,
                            2: 2,
                            4: 4
                        } &&
                        (!cy.semaphoreAnimEnd || cy.semaphoreAnimEnd > 90) &&
                        (hasCss(targ, 'lnkwt_css_minimize')
                            || hasCss(targ, 'lnkwt_metier_txt')
                            || hasCss(targ, 'lnkwt_metier_title')
                        )) {
                        _l.setMainRobot(3);
                        return;
                    }
                    if (hasCss(targ, 'lnkwt-sub_edit') || hasCss(targ, 'lnkwt-mini-pensil')) {
                        _l.$('.lnkwt-sub_edit').hide();
                        _l.$('.lawyer_balloon_wrap.user_msg .lnwt-msg').setAttribute('contenteditable', 'true');
                        return
                    }

                    if (hasCss(targ, 'lnkwt_callback_return') || hasCss(targ.parentElement, 'lnkwt_callback_return')) {
                        _l.setMainRobot(2);
                        return;
                    }

                    if (hasCss(targ, 'lnkwt_ads_wrap') || hasCss(targ, 'lnkwt_ads_footer_txt'))
                        window.location.href = 'http://leadinka.com';

                    if (hasCss(targ, 'lnkwt_css_send_arrow') || hasCss(targ, 'lnkwt_css_send')) {
                        validateSend();
                        return;
                    }
                    if (targ.id === 'lnkwt_css_callform_sendrequest') {
                        _l.sendCallBack();
                        return;
                    }
                    if (targ.id === 'lnkwt_css_chatform_sendrequest') {
                        _l.sendChat();
                        return;
                    }

                    if (hasCss(targ, 'lnkwt_try_my_ask') && attr(targ, 'data-widget-button') === "repeat") {
                        cy.main_robot = 2;
                        _l.setPortlet('');
                        cy.contentChat = '';
                        cy.semaphoreAnimation = 0;
                        cy.AnimCompleted = 0;
                        cy.semaphoreAnimEnd = 0;
                        cy.msg = '';
                        cy.arr_ballons = [];
                        _l.saveParam();
                        _l.beginAnimate();

                    }
                }

                function validateSend() {
                    var t = _l.$('textarea.lnkwt_textarea_class'), msg = t.value;
                    if (!msg.length)
                        return;
                    if (msg.length < 5) {
                        var an = _l.$('div.lnkwt_css_send'), bn = _l.$('div.lnkwt_css_send_arrow'), st = an.style;
                        bn.classList.remove('lnkwt_css_send_arrow');
                        bn.classList.add('lnkwt_css_send_backarrow');
                        st.opacity = '0.7', st.width = '26px', st.height = '26px', st.right = '40px';
                        setTimeout(function () {
                            st.opacity = '1', st.right = '10px', st.width = '21px', st.height = '21px';
                            bn.classList.remove('lnkwt_css_send_backarrow');
                            bn.classList.add('lnkwt_css_send_arrow');
                        }, 700);
                        return;
                    }
                    _l.takeMsg(t);

                }
            }
            )
        )
    };


    _l.sendCallBack = function () {
        var zip = '' + [] + '.lnkwt_callback_control[data-form-field=callform_',
            PhoneField = _l.$(zip + 'phone]'),
            rawPhone = '' + attr(PhoneField, 'data-numberphone');
        if (rawPhone.length < 10) {
            PhoneField.style.cssText = 'color: red !important';
            setTimeout(function () {
                PhoneField.style.cssText = ''
            }, 2000);
            return;
        }
        var name = _l.$(zip + 'first_last_name]').value,
            timeItem = _l.$('select' + zip + 'when_time]'),
            dateItem = _l.$('select' + zip + 'when_date]'),
            msg = 'Перезвоните мне ' + dateItem.options[dateItem.selectedIndex].value + ' ' + timeItem.options[timeItem.selectedIndex].value +
                ' (' + (Math.random() * 99999).toString().substring(0, 5) + ')',
            phone = PhoneField.value,
            data = {
                'token': _l.params['token'],
                'text': msg,
                'name': htmlspecialchars(name),
                'town': 'Россия',
                'phone': phone
            };


        _l.ajax({
            type: "POST",
            url: leedurl,
            data: data,
            dataType: 'json',
            beforeSend: function () {
                _l.onPulseBall();
            },
            success: function (q) {
                _l.offPulseBall();
                if ('success' in q)
                    _l.$('#lnkwt_css_callform_step1').hide(),
                        _l.$('#lnkwt_css_callform_step2').show();
                else
                    _l.addBalloonError(_l.txts['netErr']);
                if (typeof _l.params['counter'] === 'function') (_l.params['counter'])('Callback');
            },
            error: function () {
                _l.offPulseBall();
                _l.addBalloonError(_l.txts['netErr']);
            }
        });
    };

    _l.sendChat = function () {
        var zip = '' + [] + '.lnkwt_callback_control[data-form-field=callform_',
            PhoneField = _l.$(zip + 'phone]'),
            rawPhone = '' + attr(PhoneField, 'data-numberphone');
        if (rawPhone.length < 10) {
            PhoneField.style.cssText = 'color: red !important';
            setTimeout(function () {
                PhoneField.style.cssText = ''
            }, 2000);
            return;
        }

        var name = _l.$(zip + 'first_last_name]').value,
            phone = PhoneField.value,
            city = _l.$('.lnkwt_callback_control[data-form-field=region]').value,
            data = {
                'token': _l.params['token'],
                'text': cy.msg,
                'name': htmlspecialchars(name),
                'town': 'Россия, ' + city,
                'phone': phone
            };
        _l.ajax({
            type: "POST",
            url: leedurl,
            data: data,
            dataType: 'json',
            beforeSend: function () {
                _l.onPulseBall();
            },
            success: function (q) {
                _l.offPulseBall();
                if ('success' in q)
                    _l.addThanksBallon();
                else
                    _l.addBalloonError(_l.txts['netErr']);
                if (typeof _l.params['counter'] === 'function') (_l.params['counter'])('Chat');
            },
            error: function () {
                _l.offPulseBall();
                _l.addBalloonError(_l.txts['netErr']);
            }
        });
    };


    _l.takeMsg = function (t) {
        cy.msg = htmlspecialchars(t.value); // _t_.saveParam(); - уже есть при добавлении баллона
        cy.AnimCompleted = !0;
        _l.$('.lnkwt_wrap_of_textarea').hide();
        _l.initFooter(_l.$('div.lnkwt_wrap_footer .lnkwt_ads_footer'));
        _l.addUserBallon();
        _l.finalAnimate();
    };

    /*
     * ====================================================
     * Логика работы
     */

    /*
     0: 'Запуск - init + time_out',
     1: 'Свернуто - без анимации',
     2: 'Развернуто - chat',
     3: 'Свернуто с анимацией',
     4: 'Развернуто - callBack'
     **/
    _l.setMainRobot = function (newval) {
        if (!+newval) {
            /* if (document.createStyleSheet)
                 document.createStyleSheet('/main.css');
             else {
                 var s = document.createElement("link"), t = document.getElementsByTagName("head")[0];
                 s.rel = "stylesheet", s.href = '/main.css', s.type = 'text/css';
                 s.media = 'all', t.appendChild(s);
             }*/


            cy.main_robot = 0;
            _l.saveParam();
            setTimeout(_l.addFirstHtml, _l.params['timeout4Start']);

        } else switch (newval + 10 * cy.main_robot) {

            case 1:  //01 - start Animation
                cy.main_robot = 1;
                _l.saveParam();
                _l.startPulsarTimeHover();
                setTimeout(_l.beginAnimate, _l.params['timeout4LawyerAnimate']);
                return;
            case 12: // открытие chat не дожидаясь анимации
                cy.main_robot = 2;
                _l.saveParam();
                if (!cy.AnimCompleted)
                    _l.beginAnimate();
                return;
            case 14: // открытие callback не дожидаясь анимации
                cy.semaphoreAnimation = 99;
                cy.main_robot = 4;
                _l.saveParam();
                _l.addBodyCallback();
                _l.openWidget();
                return;
            case 23: // Сворачивание чата
                cy.contentChat = _l.getPortlet();
                cy.main_robot = 3;
                _l.saveParam();
                _l.closeWidget();
                cy.wrapNode.classList.remove('lnkwt_css_hover_module_active');
                _l.showNotify();
                return;
            case 24: // Переход из чата в callback - нет такой функции
                cy.contentChat = _l.getPortlet();
                cy.main_robot = 4;
                _l.saveParam();
                if (cy.contentCallBack)
                    _l.setPortlet(cy.contentCallBack);
                else
                    _l.addBodyCallback();
                return;
            case 32: // разворачивание из свернутого в chat
                cy.main_robot = 2;
                _l.saveParam();
                _l.openWidget();
                if (cy.AnimCompleted)
                    _l.setPortlet(cy.contentChat);
                else
                    _l.setPortlet(''), cy.semaphoreAnimation = 0, _l.beginAnimate();
                return;
            case 34: // разворачивание из свернутого в callback
                cy.main_robot = 4;
                _l.openWidget();
                if (cy.contentCallBack)
                    _l.setPortlet(cy.contentCallBack);
                else
                    _l.addBodyCallback();
                return;
            case 42: // Переход из callback в chat
                cy.contentCallBack = _l.getPortlet();
                cy.main_robot = 2;
                _l.saveParam();
                if (cy.AnimCompleted)
                    _l.setPortlet(cy.contentChat);
                else
                    _l.setPortlet(''), cy.semaphoreAnimation = 0, _l.beginAnimate();
                return;

            case 43: // Сворачивание чата
                cy.contentCallBack = _l.getPortlet();
                cy.main_robot = 3;
                _l.saveParam();
                _l.closeWidget();
                cy.wrapNode.classList.remove('lnkwt_css_hover_module_active');
                _l.showNotify();
                return;
        }

    };
    this.ajax = function (param) {

        var prom = new Promise(function (resolve, reject) {
            var rez = [], pack, xhr = null, i;
            for (i in param.data) rez.push(encodeURIComponent(i) + "=" + encodeURIComponent(param.data[i]));
            pack = rez.join("&");

            if (typeof XMLHttpRequest !== "undefined") {
                xhr = new XMLHttpRequest();
                xhr.open(param.type ? param.type : 'POST', param.url, true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onload = function () {
                    if (this.status === 200)
                        resolve(this.response);
                    else {
                        var error = new Error(this.statusText);
                        error.code = this.status;
                        reject(error);
                    }
                };
                xhr.onerror = function () {
                    reject(new Error("Network Error"));
                };


            } else if (window.ActiveXObject) { // для Internet Explorer (all versions)
                ["MSXML2.XMLHttp.5.0",
                    "MSXML2.XMLHttp.4.0",
                    "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp",
                    "Microsoft.XMLHttp"
                ].forEach(function (el) {
                    if (xhr) return;
                    try {
                        xhr = new ActiveXObject(el);
                    } catch (o) {
                    }
                });
                if (!xhr) {
                    reject(new Error("No XHR"));
                    return;
                }

                xhr.open(param.type ? param.type : 'POST', param.url, true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (_l.status === 200)
                            resolve(this.response);
                        else {
                            var error = new Error(this.statusText);
                            error.code = this.status;
                            reject(error);
                        }
                    }
                };
            }
            param.beforeSend && param.beforeSend();
            xhr.send(pack);
        });
        prom.then(function (val) {
            try {
                param.success(JSON.parse(val));
            } catch (o) {
                // param.error(new Error("JSON parse Error"));
                console.log('TODO JSON Parse');//TODO
                param.success({success: 'todo'});
            }
        }, param.error);
    };
    _l.saveParam = (function () {
        if (sessionStorage) {
            try {
                return function () {
                    sessionStorage.setItem('lnkwtStatus', JSON.stringify({
                        robot: cy.main_robot,
                        ballon: cy.arr_ballons,
                        msg: cy.msg
                    }))
                };
            } catch (e) {

            }
            return function () {
            };
        }
    })();
    _l.isMobile = function () {
        var e = !1;
        return function (t) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
        }(navigator.userAgent || navigator.vendor || t.opera),
            e ? 1 : 0
    };
    _l.addFork = function (s, t) {
        s = document.createElement("div");
        t = document.getElementsByTagName("body")[0];
        t.appendChild(s);


        s.innerHTML = '<div id="lnmt_root" style="visibility:visible;opacity:1;"><div class="lm-wrap"><div class="lm-navi"><a href="JavaScript:void(0);" style="float:left;" data-button="back"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 306 306"\n' +
            '                     style="float:left;enable-background:new 0 0 306 306;" xml:space="preserve"><g><g id="chevron-left"><polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 "></polygon></g></g></svg></a><a href="JavaScript:void(0);" style="float:right;" data-button="close"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 357 357"\n' +
            'style="float:right;enable-background:new 0 0 357 357;" xml:space="preserve"><g><g id="close"><polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"></polygon></g></g></svg></a></div><div class="lm-block" data-step="launcher" style="max-width:100%;"><div class="lm-msg-head"><div class="lm_is_I" style="max-width:130px;"><div style="width:130px;height:130px;margin:0 auto;border-radius:50%;overflow:hidden;"><img class="lawyer_photo" alt=""></div></div></div><div class="lm-portlet_head"><div class="lm-h3">У вас есть вопрос или Вам нужна помощь?</div><div class="lm-h4 mib">Я могу быстро помочь вам онлайн или по телефону.</div></div><div style="width:100%;"><div class="lm-btn miw btn-2-chat miw" data-nextstep="chat">Задать вопрос</div><a class="lm-btn miw btn-2-callback miw2" data-nextstep="call" href="JavaScript:void(0);">Заказать звонок</a></div></div><div class="lm-block" data-step="chat"><div class="lm-msg-head"><div class="lm_is_I"><img class="lawyer_photo" alt=""></div><h3 class="txt_sub_img mib"> Напишите ваш вопрос и я вам помогу.</h3></div><div class="time_zone_select"></div><div class="lm-textarea-wraper"><textarea data-minlength="10" data-name="question" class="lm-msg"placeholder="Пример вопроса: Добрый день! Подскажите, пожалуйста, как правильно составить претензию?"></textarea></div><div style="width:100%;"><div class="lm-promise">Получить ответ в ближайшее время</div><div class="lm-btn miwh miw" data-nextstep="contact">Отправить</div></div></div><div class="lm-block" data-step="contact"><div class="lm-portlet_head"><div class="lm-wrap-photo"><img class="lawyer_photo" alt=""></div><h3 class="lm-h3">Спасибо. Ваш вопрос принят.</h3><p class="lm-h4">Оставьте ваши контактные данные.</p></div><div class="lm-portlet"><div class="lm-field phone_input"><i></i> <input type="tel" class="lm_field" data-name="phone" value="" placeholder="Телефон *"></div><div class="lm-field name_input"><i></i> <input type="text" class="lm_field" data-name="name" data-minlength="2" value=""placeholder="Имя "></div><div class="lm-field city_input" style="margin-bottom:7px;"><i></i><input type="text" class="lm_field" data-name="region" value="" placeholder="Город "></div><div class="asterisk">*<span style="font-size:12px;"> Обязательное поле</span></div></div><div class="lm-btn miwh miw" data-nextstep="thank_you">Отправить</div><div class="lm_agreement_block">Нажимая на "Отправить", вы даете <br><div class="mobwid_user_agreement " data-nextstep="agreement" data-element="button"data-validation="false" style="text-decoration:underline;cursor:pointer;">согласие на обработку своих персональных данных</div></div></div><div class="lm-block" data-step="call"><div class="lm-portlet_head"><div class="lm-wrap-photo"><img class="lawyer_photo" alt=""></div><h3 class="lm-h3">Хотите мы вам позвоним?</h3><p class="lm-h4">Введите ваши контактные данные, мы свяжемся с вами в ближайшее время.</p></div><div class="lm-portlet"><div class="lm-field time_zone_select"><i></i></div><div class="lm-field phone_input"><i></i><input type="tel" class="lm_field" data-name="phone" value="" placeholder="Телефон *"></div><div class="lm-field name_input"><i></i><input type="text" class="lm_field" data-name="name" data-minlength="2" value="" placeholder="Имя "></div><div class="lm-field city_input" style="margin-bottom:7px;"><i></i> <input type="text" class="lm_field" data-name="region" value="" placeholder="Город " autocomplete="off"></div><div class="asterisk">*<span style="font-size:12px;"> Обязательное поле</span></div></div><div class="lm-btn miwh miw" data-nextstep="thank_you">Отправить</div><div class="lm_agreement_block">Нажимая на "Отправить", вы даете <br><div class="mobwid_user_agreement " data-nextstep="agreement" data-element="button"\n' +
            'style="text-decoration:underline;cursor:pointer;">согласие на обработку своих персональных данных</div></div></div><div class="lm-block" data-step="agreement">Настоящее Пользовательское соглашение является публичным документом администратора сайта SITES далее– Администратор) и определяет порядок использования посетителями (далее - Посетитель) сайта SITES,принадлежащего Администратору, и обработки, хранения и иного использования информации, получаемойАдминистратором от Посетителя на сайте Администратора. Администратор сайта может изменить в любой моментданное Пользовательское соглашение без уведомления Посетителя сайта. <br> <br>1. Посетитель сайта, оставляя какую-либо информацию, относящуюся прямо или косвенно к определенному илиопределяемому физическому лицу (далее - Персональные данные), подтверждает, что ознакомился с даннымПользовательским соглашением и согласен с ним. <br>2. В отношении всех сообщаемых Персональных данных Посетитель дает Администратору полное согласие на ихобработку. <br>3. Администратор сайта гарантирует Посетителю, что обработка и хранение поступивших Персональных данныхПосетителя будет осуществляться в соответствии с положениями Федерального закона от 27.06.2006 № 152-ФЗ «Оперсональных данных». <br>4. Посетитель сайта понимает и соглашается с тем, что предоставление Администратору какой-либо информации,не имеющей никакого отношения к целям сайта, запрещено. Такой информацией может являться информация,касающаяся состояния здоровья, интимной жизни, национальности, религии, политических, философских и иныхубеждений Посетителя, а равно и информация, которая является коммерческой, банковской и иной тайнойПосетителя сайта. <br>5. Администратор гарантирует Посетителю, что использует Персональные данные, поступившие от Посетителя,исключительно в целях, ограниченных маркетинговыми, рекламными, информационными целями Администратора, атакже для анализа и исследования Посетителей сайта, а также в целях предоставления ему товаров и услугнепосредственно находящихся, либо нет, на сайте Администратора. <br>6. Посетитель в соответствии с ч. 1 ст. 18 Федерального закона «О рекламе» дает Администратору свое согласиена получение сообщений рекламного характера по указанным контактным данным. <br>7. Посетитель самостоятельно несёт ответственность за нарушение законодательства при использовании сайтаАдминистратора. <br>8. Администратор не несет никакой ответственности в случае нарушения законодательства Посетителем, в томчисле, не гарантирует, что содержимое сайта соответствует целям Посетителя сайта. <br>9. Посетитель сайта несет самостоятельно ответственность в случае, если были нарушены права и законныеинтересы третьих лиц, при Использовании сайта Администр атора, Посетителем. <br>10. Администратор вправе запретить использование сайта Посетителю, если на то есть законные основания.</div><div class="lm-block" data-step="thank_you"><div class="lm-bye"><h3 class="txt_sub_img mib">Спасибо, что обратились к нам.</h3><p class="lm-beat mib">В ближайшее время мы свяжемся с вами!</p></div><a href="JavaScript:void(0);" class="lm-btn lm-btn-exit miw" data-nextstep="exit" >Закрыть</a></div></div></div>';

        try {
            if (typeof document.activeElement.scrollIntoViewIfNeeded === "function")
                window.addEventListener("resize", function () {
                    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")
                        window.setTimeout(function () {
                            document.activeElement.scrollIntoViewIfNeeded()
                        }, 0);
                });

        } catch (e) {
        }

        _l.$$ = function (sel, r) {
            r = s.querySelector(sel);
            if (r)
                r.show = function () {
                    r.classList.add('step-on')
                },
                    r.hide = function () {
                        r.classList.remove('step-on')
                    };
            return r;
        };
        cy.fork = {};
        cy.fork['launcher'] = _l.$$('div.lm-block[data-step=launcher]');
        cy.fork['chat'] = _l.$$('div.lm-block[data-step=chat]');
        cy.fork['contact'] = _l.$$('div.lm-block[data-step=contact]');
        cy.fork['call'] = _l.$$('div.lm-block[data-step=call]');
        cy.fork['agreement'] = _l.$$('div.lm-block[data-step=agreement]');
        cy.fork['thank_you'] = _l.$$('div.lm-block[data-step=thank_you]');
        cy.wrapFork = s.querySelector('div.lm-wrap');
        cy.wrapNode = cy.wrapFork;
        _l.onPhoneMaskSet = [], _l.history = [];

        var tst = _l.$$('div.lm-block[data-step=agreement]');
        tst.innerHTML = tst.innerHTML.replace(/SITES/g, location.hostname);
        for (var arr = cy.wrapFork.getElementsByClassName('miw'), i = 0, n = arr.length; i < n; i++) {
            arr[i].style.backgroundColor = _l.params['widget_color'], tst = arr[i].style.backgroundColor;
        }

        //"пересчет цвета на более светлый и желтый
        tst = tst.slice(4, -1).split(', ');

        var h = 0, s = 0, r = parseInt(tst[0], 10) / 255, g = parseInt(tst[1], 10) / 255,
            b = parseInt(tst[2], 10) / 255,
            Cmax = Math.max(r, g, b), Cmin = Math.min(r, g, b), l = (Cmax + Cmin) / 2, d = Cmax - Cmin;

        if (Cmax !== Cmin) {
            s = l > 0.5 ? d / (2 - Cmax - Cmin) : d / (Cmax + Cmin);

            switch (Cmax) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        l *= 100, s *= 100, h *= 359, l = Math.min(100, l + 15); //45 - желтый
        h -= 45;
        tst = Math.max(0, (h > 180 ? 360 - h : h) - 20);
        h = h > 180 ? 360 - tst : tst;
        h = (h + 45) % 359;// возврат шкалы
        cy.wrapFork.querySelector('.miw2').style.backgroundColor = 'hsl(' + h + ',' + s + '%,' + l + '%)';


        var timeicon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="20" height="20" viewBox="0 0 20 20"><defs><style>' +
            '.cls-1 {fill: hsl(' + h + ',' + s + '%,' + l + '%);fill-rule: evenodd;}' +
            '</style></defs>' +
            '<path d="M10.000,20.000 C4.500,20.000 -0.000,15.500 -0.000,10.000 C-0.000,4.500 4.500,0.000 10.000,0.000 C15.500,0.000 20.000,4.500 20.000,10.000 C20.000,15.500 15.500,20.000 10.000,20.000 ZM10.000,2.000 C5.600,2.000 2.000,5.600 2.000,10.000 C2.000,14.400 5.600,18.000 10.000,18.000 C14.400,18.000 18.000,14.400 18.000,10.000 C18.000,5.600 14.400,2.000 10.000,2.000 ZM9.000,11.000 L9.000,5.000 L10.500,5.000 L10.500,10.200 L15.000,12.900 L14.200,14.200 L9.000,11.000 Z" class="cls-1"/>' +
            '</svg>';

        var styleTag = document.getElementById("mobilecss"),
            sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet,
            rules = sheet.cssRules ? sheet.cssRules : sheet.rules;
        for (var i = 0, n = rules.length; i < n; i++)
            if (rules[i]) {
                if (rules[i].selectorText === '.lm-portlet_head .lm-wrap-photo::before, .lm-msg-head .lm-wrap-photo::before') {
                    rules[i].style.backgroundColor = 'hsl(' + h + ',' + s + '%,' + l + '%)';
                    //break;
                }
                if (rules[i].selectorText === '.lm-promise') {
                    rules[i].style.backgroundImage = "url('data:image/svg+xml;utf-8," + timeicon + "')";
                    rules[i].style.backgroundPosition = '0 50%';
                    rules[i].style.backgroundRepeat = 'no-repeat';

                }
            }

        for (var arr = cy.wrapFork.getElementsByClassName('lawyer_photo'), i = 0, n = arr.length; i < n; i++) {
            arr[i].setAttribute('src', _l.params['photo']);
        }

        _l.onPhoneMask('div[data-step=contact] .lm_field[data-name=phone]');
        _l.onPhoneMask('div[data-step=call] .lm_field[data-name=phone]');

        _l.sendCallBack = function (resolve, reject) {
            var zip = 'div[data-step=call] .lm_field[data-name=',
                PhoneField = _l.$(zip + 'phone]'),
                rawPhone = '' + PhoneField.getAttribute('data-numberphone');
            if (rawPhone.length < 10) {
                PhoneField.style.cssText = 'color: red !important';
                setTimeout(function () {
                    PhoneField.style.cssText = ''
                }, 2000);
                if (typeof reject === 'function') reject()
                return;
            }
            var name = _l.$(zip + 'name]').value,
                region = _l.$(zip + 'region]').value,
                msg = 'Перезвоните мне ' +
                    ' (' + (Math.random() * 99999).toString().substring(0, 5) + ')',
                phone = PhoneField.value,
                data = {
                    'token': _l.params['token'],
                    'text': msg,
                    'name': htmlspecialchars(name),
                    'town': 'Россия,' + region,
                    'phone': phone
                };


            _l.ajax({
                type: "POST",
                url: leedurl,
                data: data,
                dataType: 'json',
                beforeSend: function () {
                },
                success: function (q) {
                    if ('success' in q)
                        if (typeof resolve === 'function') resolve();
                        else if (typeof reject === 'function') reject();
                    if (typeof _l.params['counter'] === 'function') (_l.params['counter'])('Callback');
                },
                error: reject
            });

        };

        _l.sendChat = function (resolve, reject) {
            var zip = 'div[data-step=contact] .lm_field[data-name=',
                PhoneField = _l.$(zip + 'phone]'),
                rawPhone = '' + PhoneField.getAttribute('data-numberphone');
            if (rawPhone.length < 10) {
                PhoneField.style.cssText = 'color: red !important';
                setTimeout(function () {
                    PhoneField.style.cssText = ''
                }, 2000);
                if (typeof reject === 'function') reject()
                return;
            }

            var name = _l.$(zip + 'name]').value,
                phone = PhoneField.value,
                city = _l.$(zip + 'region]').value,
                txt = _l.$('div.lm-textarea-wraper textarea').value,
                data = {
                    'token': _l.params['token'],
                    'text': htmlspecialchars(txt),
                    'name': htmlspecialchars(name),
                    'town': 'Россия, ' + city,
                    'phone': phone
                };
            _l.ajax({
                type: "POST",
                url: leedurl,
                data: data,
                dataType: 'json',
                beforeSend: function () {
                },
                success: function (q) {
                    if ('success' in q)
                        if (typeof resolve === 'function') resolve();
                        else if (typeof reject === 'function') reject();
                    if (typeof _l.params['counter'] === 'function') (_l.params['counter'])('Callback');
                },
                error: reject
            });
        };

        ///====================================
        function hooker(e) {
            var targ = e.target, where, tst;
            if (IsFamily(cy.wrapFork.querySelector('a[data-button=close]'), targ)) {
                //alert('Выходим');
                _l.hideFrame();
                return
            }
            if (IsFamily(cy.wrapFork.querySelector('a[data-button=back]'), targ)) {
                if (_l.history.length > 1) {
                    _l.history.pop();
                    where = _l.history[_l.history.length - 1];
                    for (var m in cy.fork) (cy.fork[m]).hide();
                    (cy.fork[where]).show();
                } else {
                    // alert('Выходим');
                    _l.hideFrame();
                }
                return
            }

            if (hasCss(targ, 'lm-btn')) {
                where = targ.hasAttribute('data-nextstep') ? targ.getAttribute('data-nextstep') : null;

                if (!where) {
                    alert('Не указан шаг Далее!!!');
                    return
                }
                if (where === 'exit') {
                    // alert('Выходим');
                    _l.hideFrame();
                    return
                }

                if (where === 'thank_you') {// отправка
                    if (IsFamily(cy.fork['call'], targ)) {
                        _l.sendCallBack(function () {
                            do {
                                _l.history.pop();// первый всегда текущий
                                tst = _l.history[_l.history.length - 1];
                            } while (tst !== 'launcher');
                            tst = cy.fork['launcher'].querySelector('.btn-2-callback');
                            tst && tst.setAttribute('data-nextstep', 'thank_you');
                            if (cy.fork[where]) {
                                for (var m in cy.fork) (cy.fork[m]).hide();
                                (cy.fork[where]).show();
                                _l.history.push(where);
                            }
                        });
                        return
                    }
                    if (IsFamily(cy.fork['contact'], targ)) {
                        _l.sendChat(function () {
                            do {
                                _l.history.pop();// первый всегда текущий
                                tst = _l.history[_l.history.length - 1];
                            } while (tst !== 'launcher');
                            tst = cy.fork['launcher'].querySelector('.btn-2-chat');
                            tst && tst.setAttribute('data-nextstep', 'thank_you');
                            if (cy.fork[where]) {
                                for (var m in cy.fork) (cy.fork[m]).hide();
                                (cy.fork[where]).show();
                                _l.history.push(where);
                            }
                        });
                        return;
                    }
                }

                if (cy.fork[where]) {
                    for (var m in cy.fork) (cy.fork[m]).hide();
                    (cy.fork[where]).show();
                    _l.history.push(where);
                }
            }

        }

        cy.wrapFork.addEventListener('click', hooker, false);
        // document.body.addEventListener('click',function(a){console.log('frama');},true);


        cy.fork['launcher'].show();
        _l.history.push('launcher');

    };


    _l.hideFrame = function () {
        parent['leadinkawgtnew']['pHideFrame']();

    };
    _l['pHideFrame'] = function () {
        cy.rframe.style.cssText = 'z-index: -999998 !important; border: none !important;position: fixed !important;top: 0 !important; left: 0 !important; ' +
            'opacity:0;overflow: hidden !important; pointer-events: none !important;';
        _l.$('div.lnkmb_btn').show();
    };


    _l.addMobile = function (s) {
        s = document.getElementById('lnkmb_clear_mob');
        s.innerHTML = '<div class="lnkmb_container">' +
            '<div class="lnkmb_btn" style="pointer-events:auto;">' +
            '<a class="lnkmb_tube" href="#" style="background-color:' + _l.params['widget_color'] + ';">' +
            '<img src="' + _l.resorces.call_ic_svg + '" alt="">' +
            '</a>' +
            '<div class="lnkmb_photo lnkmb_animate lnkmb_swing" style="background-color:#788ca4; '
            + (_l.params['mobileLeft'] ? 'left: 10px !important;' : '') + '">' +
            '<div class="lnkmb_law_img_befo"></div>' +
            '<div class="lnkmb_law_img_wrp">' +
            '<img class="lnkmb_law_img " src="' + _l.params['photo'] + '" alt="">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="i4frame">' +
            '<iframe class="lnmb_iframe" src="about:blank" ' +
            'srcdoc="<html><head></head>' +
            '<body><script async src=\'' + _l.params['script'] + '\'></script></body></html>" ' +
            'style="z-index: -999998 !important; border: none !important;' +
            'position: fixed !important;' +
            'top: 0 !important; left: 0 !important; opacity:0; ' +
            'overflow: hidden !important; pointer-events: none !important;"' +
            '</iframe>' +
            '</div>' +
            '</div>';
        cy.wrapNode = s.firstChild;
        cy.rframe = cy.wrapNode.querySelector('iframe.lnmb_iframe');
        _l.on(function (e) {
                cy.rframe.style.cssText = 'margin: 0px !important; display: block !important; ' +
                    'z-index: 999999 !important; border: none !important;' +
                    'padding: 0 !important; position: fixed !important;' +
                    'top: 0 !important; left: 0 !important; opacity:1;' +
                    'width: 100% !important; height: 100% !important;' +
                    'overflow: hidden !important; min-width: 100% !important;' +
                    'min-height: 100% !important; max-width: 100% !important;' +
                    'max-height: 100% !important; pointer-events: auto !important;';

                _l.$('div.lnkmb_btn').hide();
            },
            _l.$('div.lnkmb_btn'))('click');
    };
    _l['init'] = function (prm) {

        if (Array.isArray(prm['showin'])) {
            _l.ajax({
                type: "GET",
                url: 'https://api.ipify.org?format=json',
                data: {},
                dataType: 'json',
                beforeSend: function () {
                },
                success: function (data) {
                    var iparr = data.ip.split('.'),
                        hexip = ((iparr[0] * 256 + iparr[1]) * 256 + iparr[2]) * 256 + iparr[3];
                    for (var i = 0, n = prm.showin.length; i < n; i++) {
                        if (hexip >= prm.showin[i].a && hexip <= prm.showin[i].b) {
                            _l['subini'](prm);
                            break;
                        }
                    }
                },
                error: function () {
                    _l['subini'](prm);
                },
            });
        } else {
            _l['subini'](prm);
        }
    };
    _l['subini'] = function (prm) {

        _l.txts = prm['txts'];
        _l.params = prm['params'];
        if (window !== top) {
            if (typeof top['leadinkawgtnew'] === 'undefined') {
                console.log('Попытка взлома скрипта');
                return;
            }
            leedurl = _l.Base64.decode('aHR0cHM6Ly9pbnRlbGxlY3Qtb25lLnJ1L2FwaS9hZGQ=');//https
            var svparams, s = document.createElement("style"), t = document.getElementsByTagName("head")[0];
            s.innerHTML = _l.Base64.decode(_l.resorces.CssFork);
            s.id = "mobilecss";
            s.type = 'text/css';
            t.appendChild(s);
            _l.addFork();
        } else if (_l.isMobile()) {
            var svparams, s = document.createElement("style"), t = document.getElementsByTagName("head")[0];
            s.innerHTML = _l.Base64.decode(_l.resorces.CssHotButton);
            s.type = 'text/css';
            t.appendChild(s);

            s = document.createElement("div");
            s.id = "lnkmb_clear_mob";
            s.className = "is_loaded lnkmb_fixed on-device";
            t = document.getElementsByTagName("body")[0];
            // Начинаем отсчет времени от готовности DOM
            t.appendChild(s);
            setTimeout(function () {
                _l.addMobile();
            }, 2000);

        } else {
            leedurl = _l.Base64.decode('aHR0cHM6Ly9pbnRlbGxlY3Qtb25lLnJ1L2FwaS9hZGQ=');
            var svparams, s = document.createElement("style"), t = document.getElementsByTagName("head")[0];
            s.innerHTML = _l.Base64.decode(_l.resorces.CssDesktop);
            s.type = 'text/css';
            t.appendChild(s);
            if (sessionStorage) {
                try {
                    svparams = JSON.parse(sessionStorage.getItem('lnkwtStatus'));
                    if (typeof svparams.robot !== 'undefined') {
                        var robot = +svparams.robot;
                        cy.msg = '';
                        if (robot > 1 && typeof svparams.ballon !== 'undefined' && Array.isArray(svparams.ballon)) {

                            var x = 0, y = 0, ob, i, n, z;
                            for (i = 0, n = svparams.ballon.length; i < n; i++) {
                                ob = svparams.ballon[i];
                                if (ob.t === 'lb') x++;
                                else if (ob.t in {sb: 0, ub: 0, fb: 0} || x > 1) {
                                    y++;
                                    break;
                                }
                            }
                            if (y) {
                                if (typeof svparams.msg !== 'undefined') cy.msg = htmlspecialchars(svparams.msg);
                                _l.addFirstHtml(true);
                                cy.semaphoreAnimation = 1;
                                _l.addBodyChat();
                                x = 0, y = 0;
                                z = 0;
                                for (i = 0, n = svparams.ballon.length; i < n; i++) {
                                    ob = svparams.ballon[i];
                                    if (ob.t === 'lb') _l.addBalloon(ob.m);
                                    if (ob.t === 'sb') {
                                        _l.addThanksBallon();
                                        z++
                                    }
                                    if (ob.t === 'ub') {
                                        _l.addUserBallon();
                                        x++
                                    }
                                    if (ob.t === 'fb') {
                                        _l.addFinalBalloon();
                                        y++;
                                        z++
                                    }
                                }
                                if (x && !y) {
                                    _l.addFinalBalloon();
                                    z++
                                }
                                z && _l.$('.lnkwt_wrap_of_textarea').hide();
                                cy.arr_ballons = svparams.ballon;
                                cy.contentChat = _l.getPortlet();
                                cy.AnimCompleted = !0;
                                _l.startPulsarTimeHover();
                                cy.main_robot = 3;
                                _l.setMainRobot(robot);
                                return;
                            }
                            if (robot === 3) {
                                cy.arr_ballons = [];

                                _l.addFirstHtml(true);
                                cy.semaphoreAnimation = 1;
                                _l.addBodyChat();
                                cy.contentChat = _l.getPortlet();
                                cy.AnimCompleted = !0;
                                _l.startPulsarTimeHover();
                                cy.AnimCompleted = !0;
                                _l.addBalloon(_l.txts['firstMsg']);
                                cy.AnimCompleted = !0;
                                _l.addBalloon(_l.txts['secondMsg']);
                                cy.main_robot = 3;
                                _l.closeWidget();
                                cy.wrapNode.classList.remove('lnkwt_css_hover_module_active');
                                cy.contentChat = _l.getPortlet();
                                return;
                            }
                        }
                    }
                }
                catch
                    (exception_var) {
                }
            }
            cy.arr_ballons = [];
            sessionStorage.setItem('lnkwtStatus', null);
            _l.setMainRobot(0);
        }
    };
}


/*
 * ========================================================
 * init
 */


leadinkawgtnew.init(
    {
        txts: {
            secondMsg: 'Напишите, что вас интересует, и я вам обязательно помогу!',
            firstMsg: 'Здравствуйте! У вас есть вопрос или вам нужна помощь юриста? <br/>Мы консультируем бесплатно!',
            topNotify: "Если возникнут вопросы, или нужна будет\n помощь, обращайтесь, я вам помогу",
            callbackMatier: 'Закажите звонок!',
            callbackFio: 'Мы перезвоним в удобное время.',
            msgAnsByPhone: 'Давайте я вам отвечу детально по телефону. Так будет намного быстрее.',
            netErr: "Сетевая ошибка. Повторите.",
        },
        params: {
            fio: 'Дмитрий Романович (Москва)', // Имя отчество юриста
            metier: 'Юрист - консультант', // должность юриста
            widget_color: 'rgb(49, 64, 240)', // цвет рамки
            timeout4Start: 2000, // время до появления окна
            timeout4LawyerAnimate: 8000, // время срабатывания нетерпежки Юриста от появления окна
            left: 0,
            mobileLeft: 0,
            script: '/leadinkawgt.js',
            counter: function (ChatOrCallback) {
            },
            token: 'q9YYF9bK_njGmGm2U_x6TNCCDvsfqkRk',
            photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhg=='
        }
    });
