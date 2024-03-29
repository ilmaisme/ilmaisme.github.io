! function (t, e) {
    if ("function" == typeof define && define.amd) define(["exports"], e);
    else if ("undefined" != typeof exports) e(exports);
    else {
        var n = {
            exports: {}
        };
        e(n.exports), t.countDown = n.exports
    }
}("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function (t) {
    "use strict";

    function e(t) {
        "@babel/helpers - typeof";
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = function () {
        function t(e) {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.options = {
                cont: null,
                countdown: !0,
                date: {
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                },
                endCallback: null,
                outputFormat: "year|week|day|hour|minute|second",
                outputTranslation: {
                    year: "Years",
                    week: "Weeks",
                    day: "Days",
                    hour: "Hours",
                    minute: "Minutes",
                    second: "Seconds"
                }
            }, this.lastTick = null, this.intervalsBySize = ["year", "week", "day", "hour", "minute", "second"], this.elementClassPrefix = "countDown__", this.interval = null, this.digitConts = {}, this._assignOptions(this.options, e)
        }
        return i(t, [{
            key: "TIMESTAMP_SECOND",
            get: function () {
                return 1e3
            }
        }, {
            key: "TIMESTAMP_MINUTE",
            get: function () {
                return 60 * this.TIMESTAMP_SECOND
            }
        }, {
            key: "TIMESTAMP_HOUR",
            get: function () {
                return 60 * this.TIMESTAMP_MINUTE
            }
        }, {
            key: "TIMESTAMP_DAY",
            get: function () {
                return 24 * this.TIMESTAMP_HOUR
            }
        }, {
            key: "TIMESTAMP_WEEK",
            get: function () {
                return 7 * this.TIMESTAMP_DAY
            }
        }, {
            key: "TIMESTAMP_YEAR",
            get: function () {
                return 365 * this.TIMESTAMP_DAY
            }
        }]), i(t, [{
            key: "start",
            value: function () {
                var t, e, n = this;
                this._fixCompatibility(), t = this._getDate(this.options.date), e = this._prepareTimeByOutputFormat(t), this._writeData(e), this.lastTick = e, this.options.countdown && t.getTime() <= Date.now() ? (this.stop(), "function" == typeof this.options.endCallback && this.options.endCallback()) : this.interval = setInterval(function () {
                    n.options.countdown && t.getTime() <= Date.now() ? (n.stop(), "function" == typeof n.options.endCallback && n.options.endCallback()) : n._updateView(n._prepareTimeByOutputFormat(t))
                }, this.TIMESTAMP_SECOND)
            }
        }, {
            key: "stop",
            value: function () {
                null !== this.interval && clearInterval(this.interval)
            }
        }, {
            key: "_getDate",
            value: function (t) {
                if ("object" === e(t)) {
                    if (t instanceof Date) return t;
                    var n = {
                        day: 0,
                        month: 0,
                        year: 0,
                        hour: 0,
                        minute: 0,
                        second: 0
                    };
                    for (var i in n) n.hasOwnProperty(i) && t.hasOwnProperty(i) && (n[i] = t[i]);
                    return new Date(n.year, n.month > 0 ? n.month - 1 : n.month, n.day, n.hour, n.minute, n.second)
                }
                return "number" == typeof t || "string" == typeof t ? new Date(t) : new Date
            }
        }, {
            key: "_prepareTimeByOutputFormat",
            value: function (t) {
                var e, n, i = this,
                    o = {};
                return e = this.intervalsBySize.filter(function (t) {
                    return -1 !== i.options.outputFormat.split("|").indexOf(t)
                }), n = this.options.countdown ? t.getTime() - Date.now() : Date.now() - t.getTime(), e.forEach(function (t) {
                    var e;
                    if (n > 0) switch (t) {
                        case "year":
                            e = Math.trunc(n / i.TIMESTAMP_YEAR), n -= e * i.TIMESTAMP_YEAR;
                            break;
                        case "week":
                            e = Math.trunc(n / i.TIMESTAMP_WEEK), n -= e * i.TIMESTAMP_WEEK;
                            break;
                        case "day":
                            e = Math.trunc(n / i.TIMESTAMP_DAY), n -= e * i.TIMESTAMP_DAY;
                            break;
                        case "hour":
                            e = Math.trunc(n / i.TIMESTAMP_HOUR), n -= e * i.TIMESTAMP_HOUR;
                            break;
                        case "minute":
                            e = Math.trunc(n / i.TIMESTAMP_MINUTE), n -= e * i.TIMESTAMP_MINUTE;
                            break;
                        case "second":
                            e = Math.trunc(n / i.TIMESTAMP_SECOND), n -= e * i.TIMESTAMP_SECOND
                    } else e = "00";
                    o[t] = (("" + e).length < 2 ? "0" + e : "" + e).split("")
                }), o
            }
        }, {
            key: "_fixCompatibility",
            value: function () {
                Math.trunc = Math.trunc || function (t) {
                    return isNaN(t) ? NaN : t > 0 ? Math.floor(t) : Math.ceil(t)
                }
            }
        }, {
            key: "_writeData",
            value: function (t) {
                var e, n = this,
                    i = '<div class="'.concat(this.elementClassPrefix, 'cont">');
                for (e in t)
                    if (t.hasOwnProperty(e)) {
                        var o = '<div class="'.concat(this.elementClassPrefix, 'interval_basic_cont">\n                                       <div class="').concat(this._getIntervalContCommonClassName(), " ").concat(this._getIntervalContClassName(e), '">');
                        //var a = '<div class="'.concat(this.elementClassPrefix, 'interval_basic_cont_description">\n                                                   ').concat(this.options.outputTranslation[e], "\n                                               </div>");
                        t[e].forEach(function (t, e) {
                            o += '<div class="'.concat(n._getDigitContCommonClassName(), " ").concat(n._getDigitContClassName(e), '">\n                                        ').concat(n._getDigitElementString(t, 0), "\n                                    </div>")
                        }), i += o + "</div>" + "</div>"
                    } this.options.cont.innerHTML = i + "</div>", this.lastTick = t
            }
        }, {
            key: "_getDigitElementString",
            value: function (t, e) {
                return '<div class="'.concat(this.elementClassPrefix, 'digit_last_placeholder">\n                        <div class="').concat(this.elementClassPrefix, 'digit_last_placeholder_inner">\n                            ').concat(e, '\n                        </div>\n                    </div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_new_placeholder">').concat(t, '</div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_last_rotate">').concat(e, '</div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_new_rotate">\n                        <div class="').concat(this.elementClassPrefix, 'digit_new_rotated">\n                            <div class="').concat(this.elementClassPrefix, 'digit_new_rotated_inner">\n                                ').concat(t, "\n                            </div>\n                        </div>\n                    </div>")
            }
        }, {
            key: "_updateView",
            value: function (t) {
                var e = this,
                    n = function (n) {
                        t.hasOwnProperty(n) && t[n].forEach(function (i, o) {
                            null !== e.lastTick && e.lastTick[n][o] !== t[n][o] && (e._getDigitCont(n, o).innerHTML = e._getDigitElementString(t[n][o], e.lastTick[n][o]))
                        })
                    };
                for (var i in t) n(i);
                this.lastTick = t
            }
        }, {
            key: "_getDigitCont",
            value: function (t, e) {
                return this.digitConts["".concat(t, "_").concat(e)] || (this.digitConts["".concat(t, "_").concat(e)] = this.options.cont.querySelector(".".concat(this._getIntervalContClassName(t), " .").concat(this._getDigitContClassName(e)))), this.digitConts["".concat(t, "_").concat(e)]
            }
        }, {
            key: "_getIntervalContClassName",
            value: function (t) {
                return "".concat(this.elementClassPrefix, "interval_cont_").concat(t)
            }
        }, {
            key: "_getIntervalContCommonClassName",
            value: function () {
                return "".concat(this.elementClassPrefix, "interval_cont")
            }
        }, {
            key: "_getDigitContClassName",
            value: function (t) {
                return "".concat(this.elementClassPrefix, "digit_cont_").concat(t)
            }
        }, {
            key: "_getDigitContCommonClassName",
            value: function () {
                return "".concat(this.elementClassPrefix, "digit_cont")
            }
        }, {
            key: "_assignOptions",
            value: function (t, n) {
                for (var i in t) t.hasOwnProperty(i) && n.hasOwnProperty(i) && (null !== t[i] && "object" === e(t[i]) && "object" === e(n[i]) ? this._assignOptions(t[i], n[i]) : t[i] = n[i])
            }
        }]), t
    }();
    t.default = o, "undefined" != typeof window && (window.Countdown = o)
});