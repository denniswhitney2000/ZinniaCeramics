window.grunticon = function (a) {
    if (a && 3 === a.length) {
        var b = window,
        c = !(!b.document.createElementNS || !b.document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect || !document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1') || window.opera && -1 === navigator.userAgent.indexOf('Chrome')),
        d = function (d) {
            var e = b.document.createElement('link'),
            f = b.document.getElementsByTagName('script')[0];
            e.rel = 'stylesheet',
            e.href = a[d && c ? 0 : d ? 1 : 2],
            f.parentNode.insertBefore(e, f)
        },
        e = new b.Image;
        e.onerror = function () {
            d(!1)
        },
        e.onload = function () {
            d(1 === e.width && 1 === e.height)
        },
        e.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
    }
},
grunticon([data_svg_url,
data_png_url,
data_fallback_url]),

/*
!function (a) {
    var b = 'data-ab-color',
    c = 'data-ab-parent',
    d = 'data-ab-css-background',
    e = 'ab-color-found',
    f = {
        selector: '[data-adaptive-background="1"]',
        parent: null,
        normalizeTextColor: !1,
        normalizedTextColors: {
            light: '#fff',
            dark: '#000'
        },
        lumaClasses: {
            light: 'ab-light',
            dark: 'ab-dark'
        }
    };
    !function (a) {
        'use strict';
        var b = function () {
            return document.createElement('canvas').getContext('2d')
        },
        c = function (a, c) {
            var d = new Image,
            e = a.src || a;
            'data:' !== e.substring(0, 5) && (d.crossOrigin = 'Anonymous'),
            d.onload = function () {
                var a = b();
                a.drawImage(d, 0, 0);
                var e = a.getImageData(0, 0, d.width, d.height);
                c && c(e.data)
            },
            d.src = e
        },
        d = function (a) {
            return ['rgb(',
            a,
            ')'].join('')
        },
        e = function (a) {
            return a.map(function (a) {
                return d(a.name)
            })
        },
        f = 5,
        g = 10,
        h = {
        };
        h.colors = function (a, b, h) {
            c(a, function (a) {
                for (var c = a.length, i = {
                }, j = '', k = [
                ], l = {
                    dominant: {
                    name: '',
                    count: 0
                },
                    palette: Array.apply(null, Array(h || g)).map(Boolean).map(function () {
                    return {
                    name: '0,0,0',
                    count: 0
                }
                })
                }, m = 0; c > m;) {
                    if (k[0] = a[m], k[1] = a[m + 1], k[2] = a[m + 2], j = k.join(','), i[j] = j in i ? i[j] + 1 : 1, '0,0,0' !== j && '255,255,255' !== j) {
                        var n = i[j];
                        n > l.dominant.count ? (l.dominant.name = j, l.dominant.count = n) : l.palette.some(function (a) {
                            return n > a.count ? (a.name = j, a.count = n, !0) : void 0
                        })
                    }
                    m += 4 * f
                }
                b && b({
                    dominant: d(l.dominant.name),
                    palette: e(l.palette)
                })
            })
        },
        a.RGBaster = a.RGBaster || h
    }(window),
    a.adaptiveBackground = {
        run: function (g) {
            var h = a.extend({
            }, f, g);
            a(h.selector).each(function () {
                var f = a(this),
                g = function () {
                    var a = i() ? j() : f[0];
                    RGBaster.colors(a, function (a) {
                        f.attr(b, a.dominant),
                        f.trigger(e, {
                            color: a.dominant,
                            palette: a.palette
                        })
                    }, 20)
                },
                i = function () {
                    return f.attr(d)
                },
                j = function () {
                    return f.css('background-image').replace('url(', '').replace(')', '')
                };
                f.on(e, function (a, b) {
                    var d,
                    e = b;
                    d = i() ? f : f.attr(c) ? f.parents(f.attr(c)) : h.parent ? f.parents(h.parent) : f.parent(),
                    d.css({
                        backgroundColor: b.color
                    });
                    var g = function () {
                        var a = e.color.match(/\d+/g);
                        return (299 * a[0] + 587 * a[1] + 114 * a[2]) / 1000
                    },
                    j = function (a) {
                        return g(a) >= 128 ? h.normalizedTextColors.dark : h.normalizedTextColors.light
                    },
                    k = function (a) {
                        return g(a) <= 128 ? h.lumaClasses.dark : h.lumaClasses.light
                    };
                    h.normalizeTextColor && d.css({
                        color: j(b.color)
                    }),
                    d.addClass(k(b.color))
                }),
                g()
            })
        }
    }
}(jQuery),

*/

function (a) {
    function b(a) {
        return a.replace(/(:|\.)/g, '\\$1')
    }
    var c = '1.4.13',
    d = {
    },
    e = {
        exclude: [
        ],
        excludeWithin: [
        ],
        offset: 0,
        direction: 'top',
        scrollElement: null,
        scrollTarget: null,
        beforeScroll: function () {
        },
        afterScroll: function () {
        },
        easing: 'swing',
        speed: 400,
        autoCoefficent: 2,
        preventDefault: !0
    },
    f = function (b) {
        var c = [
        ],
        d = !1,
        e = b.dir && 'left' == b.dir ? 'scrollLeft' : 'scrollTop';
        return this.each(function () {
            if (this != document && this != window) {
                var b = a(this);
                b[e]() > 0 ? c.push(this) : (b[e](1), d = b[e]() > 0, d && c.push(this), b[e](0))
            }
        }),
        c.length || this.each(function () {
            'BODY' === this.nodeName && (c = [
              this
            ])
        }),
        'first' === b.el && c.length > 1 && (c = [
          c[0]
        ]),
        c
    };
    a.fn.extend({
        scrollable: function (a) {
            var b = f.call(this, {
                dir: a
            });
            return this.pushStack(b)
        },
        firstScrollable: function (a) {
            var b = f.call(this, {
                el: 'first',
                dir: a
            });
            return this.pushStack(b)
        },
        smoothScroll: function (c, d) {
            if (c = c || {
            }, 'options' === c) return d ? this.each(function () {
                var b = a(this),
                c = a.extend(b.data('ssOpts') || {
                }, d);
                a(this).data('ssOpts', c)
            }) : this.first().data('ssOpts');
            var e = a.extend({
            }, a.fn.smoothScroll.defaults, c),
            f = a.smoothScroll.filterPath(location.pathname);
            return this.unbind('click.smoothscroll').bind('click.smoothscroll', function (c) {
                var d = this,
                g = a(this),
                h = a.extend({
                }, e, g.data('ssOpts') || {
                }),
                i = e.exclude,
                j = h.excludeWithin,
                k = 0,
                l = 0,
                m = !0,
                n = {
                },
                o = location.hostname === d.hostname || !d.hostname,
                p = h.scrollTarget || (a.smoothScroll.filterPath(d.pathname) || f) === f,
                q = b(d.hash);
                if (h.scrollTarget || o && p && q) {
                    for (; m && i.length > k;) g.is(b(i[k++])) && (m = !1);
                    for (; m && j.length > l;) g.closest(j[l++]).length && (m = !1)
                } else m = !1;
                m && (h.preventDefault && c.preventDefault(), a.extend(n, h, {
                    scrollTarget: h.scrollTarget || q,
                    link: d
                }), a.smoothScroll(n))
            }),
            this
        }
    }),
    a.smoothScroll = function (b, c) {
        if ('options' === b && 'object' == typeof c) return a.extend(d, c);
        var e,
        f,
        g,
        h,
        i = 0,
        j = 'offset',
        k = 'scrollTop',
        l = {
        },
        m = {
        };
        'number' == typeof b ? (e = a.extend({
            link: null
        }, a.fn.smoothScroll.defaults, d), g = b) : (e = a.extend({
            link: null
        }, a.fn.smoothScroll.defaults, b || {
        }, d), e.scrollElement && (j = 'position', 'static' == e.scrollElement.css('position') && e.scrollElement.css('position', 'relative'))),
        k = 'left' == e.direction ? 'scrollLeft' : k,
        e.scrollElement ? (f = e.scrollElement, /^(?:HTML|BODY)$/.test(f[0].nodeName) || (i = f[k]())) : f = a('html, body').firstScrollable(e.direction),
        e.beforeScroll.call(f, e),
        g = 'number' == typeof b ? b : c || a(e.scrollTarget)[j]() && a(e.scrollTarget)[j]()[e.direction] || 0,
        l[k] = g + i + e.offset,
        h = e.speed,
        'auto' === h && (h = l[k] || f.scrollTop(), h /= e.autoCoefficent),
        m = {
            duration: h,
            easing: e.easing,
            complete: function () {
                e.afterScroll.call(e.link, e)
            }
        },
        e.step && (m.step = e.step),
        f.length ? f.stop().animate(l, m) : e.afterScroll.call(e.link, e)
    },
    a.smoothScroll.version = c,
    a.smoothScroll.filterPath = function (a) {
        return a.replace(/^\//, '').replace(/(?:index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '')
    },
    a.fn.smoothScroll.defaults = e
}(jQuery),

function (a, b) {
    'use strict';
    var c = 500,
    d = 'sqrt',
    e = 1,
    f = 'data-menu-top',
    g = 'data-menu-offset',
    h = b.skrollr,
    i = b.history,
    j = !!i.pushState,
    k = function (b) {
        return 'A' === b.tagName ? b : b === a ? !1 : k(b.parentNode)
    },
    l = function (a) {
        if (1 === a.which || 0 === a.button) {
            var b = k(a.target);
            b && m(b) && a.preventDefault()
        }
    },
    m = function (b, c) {
        var d = b.getAttribute('href');
        if (!/^#/.test(d)) return !1;
        var e,
        h;
        if (h = t ? t(b) : b.getAttribute(f), null !== h) e = /p$/.test(h) ? h.slice(0, -1) / 100 * a.documentElement.clientHeight : +h * u;
        else {
            var k = a.getElementById(d.substr(1));
            if (!k) return !1;
            e = p.relativeToAbsolute(k, 'top', 'top');
            var l = k.getAttribute(g);
            null !== l && (e += +l)
        }
        return j && !c && i.pushState({
            top: e
        }, '', d),
        s && !c ? p.animateTo(e, {
            duration: r(p.getScrollTop(), e),
            easing: q
        }) : o(function () {
            p.setScrollTop(e)
        }),
        !0
    },
    n = function () {
        if (b.location.hash && a.querySelector) {
            var c = a.querySelector('a[href="' + b.location.hash + '"]');
            c && m(c, !0)
        }
    },
    o = function (a) {
        b.setTimeout(a, 1)
    };
    h.menu = {
    },
    h.menu.init = function (f, g) {
        p = f,
        g = g || {
        },
        q = g.easing || d,
        s = g.animate !== !1,
        r = g.duration || c,
        t = g.handleLink,
        u = g.scale || e,
        'number' == typeof r && (r = function (a) {
            return function () {
                return a
            }
        }(r)),
        h.addEvent(a, 'click', l),
        j && h.addEvent(b, 'popstate', function (a) {
            var b = a.state || {
            },
            c = b.top || 0;
            o(function () {
                p.setScrollTop(c)
            })
        }, !1),
        n()
    };
    var p,
    q,
    r,
    s,
    t,
    u;
    o(function () {
        b.location.hash && b.scrollTo(0, 0)
    })
}(document, window),

function (a, b, c) {
    'use strict';
    function d(c) {
        if (e = b.documentElement, f = b.body, S(), gb = this, c = c || {
        }, lb = c.constants || {
        }, c.easing) for (var d in c.easing) V[d] = c.easing[d];
        sb = c.edgeStrategy || 'set',
        jb = {
            beforerender: c.beforerender,
            render: c.render
        },
        kb = c.forceHeight !== !1,
        kb && (Ib = c.scale || 1),
        mb = c.mobileDeceleration || y,
        ob = c.smoothScrolling !== !1,
        pb = c.smoothScrollingDuration || z,
        qb = {
            targetTop: gb.getScrollTop()
        },
        Qb = (c.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(),
        Qb ? (ib = b.getElementById('skrollr-body'), ib && fb(), W(), Cb(e, [
          s,
          v
        ], [
          t
        ])) : Cb(e, [
          s,
          u
        ], [
          t
        ]),
        gb.refresh(),
        vb(a, 'resize orientationchange', function () {
            var a = e.clientWidth,
            b = e.clientHeight;
            (b !== Nb || a !== Mb) && (Nb = b, Mb = a, Ob = !0)
        });
        var g = T();
        return function h() {
            Z(),
            ub = g(h)
        }(),
        gb
    }
    var e,
    f,
    g = a.skrollr = {
        get: function () {
            return gb
        },
        init: function (a) {
            return gb || new d(a)
        },
        VERSION: '0.6.21'
    },
    h = Object.prototype.hasOwnProperty,
    i = a.Math,
    j = a.getComputedStyle,
    k = 'touchstart',
    l = 'touchmove',
    m = 'touchcancel',
    n = 'touchend',
    o = 'skrollable',
    p = o + '-before',
    q = o + '-between',
    r = o + '-after',
    s = 'skrollr',
    t = 'no-' + s,
    u = s + '-desktop',
    v = s + '-mobile',
    w = 'linear',
    x = 1000,
    y = 0.004,
    z = 200,
    A = 'start',
    B = 'end',
    C = 'center',
    D = 'bottom',
    E = '___skrollable_id',
    F = /^(?:input|textarea|button|select)$/i,
    G = /^\s+|\s+$/g,
    H = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    I = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    J = /^([a-z\-]+)\[(\w+)\]$/,
    K = /-([a-z])/g,
    L = function (a, b) {
        return b.toUpperCase()
    },
    M = /[\-+]?[\d]*\.?[\d]+/g,
    N = /\{\?\}/g,
    O = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    P = /[a-z\-]+-gradient/g,
    Q = '',
    R = '',
    S = function () {
        var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (j) {
            var b = j(f, null);
            for (var d in b) if (Q = d.match(a) || +d == d && b[d].match(a)) break;
            if (!Q) return Q = R = '',
            c;
            Q = Q[0],
            '-' === Q.slice(0, 1) ? (R = Q, Q = {
                '-webkit-': 'webkit',
                '-moz-': 'Moz',
                '-ms-': 'ms',
                '-o-': 'O'
            }
            [
              Q
            ]) : R = '-' + Q.toLowerCase() + '-'
        }
    },
    T = function () {
        var b = a.requestAnimationFrame || a[Q.toLowerCase() + 'RequestAnimationFrame'],
        c = Fb();
        return (Qb || !b) && (b = function (b) {
            var d = Fb() - c,
            e = i.max(0, 1000 / 60 - d);
            return a.setTimeout(function () {
                c = Fb(),
                b()
            }, e)
        }),
        b
    },
    U = function () {
        var b = a.cancelAnimationFrame || a[Q.toLowerCase() + 'CancelAnimationFrame'];
        return (Qb || !b) && (b = function (b) {
            return a.clearTimeout(b)
        }),
        b
    },
    V = {
        begin: function () {
            return 0
        },
        end: function () {
            return 1
        },
        linear: function (a) {
            return a
        },
        quadratic: function (a) {
            return a * a
        },
        cubic: function (a) {
            return a * a * a
        },
        swing: function (a) {
            return -i.cos(a * i.PI) / 2 + 0.5
        },
        sqrt: function (a) {
            return i.sqrt(a)
        },
        outCubic: function (a) {
            return i.pow(a - 1, 3) + 1
        },
        bounce: function (a) {
            var b;
            if (0.5083 >= a) b = 3;
            else if (0.8489 >= a) b = 9;
            else if (0.96208 >= a) b = 27;
            else {
                if (!(0.99981 >= a)) return 1;
                b = 91
            }
            return 1 - i.abs(3 * i.cos(1.028 * a * b) / b)
        }
    };
    d.prototype.refresh = function (a) {
        var d,
        e,
        f = !1;
        for (a === c ? (f = !0, hb = [
        ], Pb = 0, a = b.getElementsByTagName('*')) : a = [
        ].concat(a), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
            h = g,
            i = [
            ],
            j = ob,
            k = sb;
            if (g.attributes) {
                for (var l = 0, m = g.attributes.length; m > l; l++) {
                    var n = g.attributes[l];
                    if ('data-anchor-target' !== n.name) if ('data-smooth-scrolling' !== n.name) if ('data-edge-strategy' !== n.name) {
                        var p = n.name.match(H);
                        if (null !== p) {
                            var q = {
                                props: n.value,
                                element: g
                            };
                            i.push(q);
                            var r = p[1];
                            r && (q.constant = r.substr(1));
                            var s = p[2];
                            /p$/.test(s) ? (q.isPercentage = !0, q.offset = (0 | s.slice(0, -1)) / 100) : q.offset = 0 | s;
                            var t = p[3],
                            u = p[4] || t;
                            t && t !== A && t !== B ? (q.mode = 'relative', q.anchors = [
                              t,
                              u
                            ]) : (q.mode = 'absolute', t === B ? q.isEnd = !0 : q.isPercentage || (q.offset = q.offset * Ib))
                        }
                    } else k = n.value;
                    else j = 'off' !== n.value;
                    else if (h = b.querySelector(n.value), null === h) throw 'Unable to find anchor target "' + n.value + '"'
                }
                if (i.length) {
                    var v,
                    w,
                    x;
                    !f && E in g ? (x = g[E], v = hb[x].styleAttr, w = hb[x].classAttr) : (x = g[E] = Pb++, v = g.style.cssText, w = Bb(g)),
                    hb[x] = {
                        element: g,
                        styleAttr: v,
                        classAttr: w,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k
                    },
                    Cb(g, [
                      o
                    ], [
                    ])
                }
            }
        }
        for (yb(), d = 0, e = a.length; e > d; d++) {
            var y = hb[a[d][E]];
            y !== c && ($(y), ab(y))
        }
        return gb
    },
    d.prototype.relativeToAbsolute = function (a, b, c) {
        var d = e.clientHeight,
        f = a.getBoundingClientRect(),
        g = f.top,
        h = f.bottom - f.top;
        return b === D ? g -= d : b === C && (g -= d / 2),
        c === D ? g += h : c === C && (g += h / 2),
        g += gb.getScrollTop(),
        0 | g + 0.5
    },
    d.prototype.animateTo = function (a, b) {
        b = b || {
        };
        var d = Fb(),
        e = gb.getScrollTop();
        return nb = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: b.duration || x,
            startTime: d,
            endTime: d + (b.duration || x),
            easing: V[b.easing || w],
            done: b.done
        },
        nb.topDiff || (nb.done && nb.done.call(gb, !1), nb = c),
        gb
    },
    d.prototype.stopAnimateTo = function () {
        nb && nb.done && nb.done.call(gb, !0),
        nb = c
    },
    d.prototype.isAnimatingTo = function () {
        return !!nb
    },
    d.prototype.setScrollTop = function (b, c) {
        return rb = c === !0,
        Qb ? Rb = i.min(i.max(b, 0), Hb) : a.scrollTo(0, b),
        gb
    },
    d.prototype.getScrollTop = function () {
        return Qb ? Rb : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    },
    d.prototype.getMaxScrollTop = function () {
        return Hb
    },
    d.prototype.on = function (a, b) {
        return jb[a] = b,
        gb
    },
    d.prototype.off = function (a) {
        return delete jb[a],
        gb
    },
    d.prototype.destroy = function () {
        var a = U();
        a(ub),
        xb(),
        Cb(e, [
          t
        ], [
          s,
          u,
          v
        ]);
        for (var b = 0, d = hb.length; d > b; b++) eb(hb[b].element);
        e.style.overflow = f.style.overflow = 'auto',
        e.style.height = f.style.height = 'auto',
        ib && g.setStyle(ib, 'transform', 'none'),
        gb = c,
        ib = c,
        jb = c,
        kb = c,
        Hb = 0,
        Ib = 1,
        lb = c,
        mb = c,
        Jb = 'down',
        Kb = -1,
        Mb = 0,
        Nb = 0,
        Ob = !1,
        nb = c,
        ob = c,
        pb = c,
        qb = c,
        rb = c,
        Pb = 0,
        sb = c,
        Qb = !1,
        Rb = 0,
        tb = c
    };
    var W = function () {
        var d,
        g,
        h,
        j,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v;
        vb(e, [
          k,
          l,
          m,
          n
        ].join(' '), function (a) {
            var e = a.changedTouches[0];
            for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
            switch (o = e.clientY, p = e.clientX, t = a.timeStamp, F.test(j.tagName) || a.preventDefault(), a.type) {
                case k:
                    d && d.blur(),
                    gb.stopAnimateTo(),
                    d = j,
                    g = q = o,
                    h = p,
                    s = t;
                    break;
                case l:
                    F.test(j.tagName) && b.activeElement !== j && a.preventDefault(),
                    r = o - q,
                    v = t - u,
                    gb.setScrollTop(Rb - r, !0),
                    q = o,
                    u = t;
                    break;
                default:
                case m:
                case n:
                    var f = g - o,
                    w = h - p,
                    x = w * w + f * f;
                    if (49 > x) {
                        if (!F.test(d.tagName)) {
                            d.focus();
                            var y = b.createEvent('MouseEvents');
                            y.initMouseEvent('click', !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null),
                            d.dispatchEvent(y)
                        }
                        return
                    }
                    d = c;
                    var z = r / v;
                    z = i.max(i.min(z, 3), -3);
                    var A = i.abs(z / mb),
                    B = z * A + 0.5 * mb * A * A,
                    C = gb.getScrollTop() - B,
                    D = 0;
                    C > Hb ? (D = (Hb - C) / B, C = Hb) : 0 > C && (D = -C / B, C = 0),
                    A *= 1 - D,
                    gb.animateTo(0 | C + 0.5, {
                        easing: 'outCubic',
                        duration: A
                    })
            }
        }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = 'hidden'
    },
    X = function () {
        var a,
        b,
        c,
        d,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n = e.clientHeight,
        o = zb();
        for (j = 0, k = hb.length; k > j; j++) for (a = hb[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f],
        l = h.offset,
        m = o[h.constant] || 0,
        h.frame = l,
        h.isPercentage && (l *= n, h.frame = l),
        'relative' === h.mode && (eb(b), h.frame = gb.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, eb(b, !0)),
        h.frame += m,
        kb && !h.isEnd && h.frame > Hb && (Hb = h.frame);
        for (Hb = i.max(Hb, Ab()), j = 0, k = hb.length; k > j; j++) {
            for (a = hb[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f],
            m = o[h.constant] || 0,
            h.isEnd && (h.frame = Hb - h.offset + m);
            a.keyFrames.sort(Gb)
        }
    },
    Y = function (a, b) {
        for (var c = 0, d = hb.length; d > c; c++) {
            var e,
            f,
            i = hb[c],
            j = i.element,
            k = i.smoothScrolling ? a : b,
            l = i.keyFrames,
            m = l[0].frame,
            n = l[l.length - 1].frame,
            s = m > k,
            t = k > n,
            u = l[s ? 0 : l.length - 1];
            if (s || t) {
                if (s && -1 === i.edge || t && 1 === i.edge) continue;
                switch (Cb(j, [
                    s ? p : r
                ], [
                    p,
                    q,
                    r
                ]), i.edge = s ? -1 : 1, i.edgeStrategy) {
                    case 'reset':
                        eb(j);
                        continue;
                    case 'ease':
                        k = u.frame;
                        break;
                    default:
                    case 'set':
                        var v = u.props;
                        for (e in v) h.call(v, e) && (f = db(v[e].value), g.setStyle(j, e, f));
                        continue
                }
            } else 0 !== i.edge && (Cb(j, [
              o,
              q
            ], [
              p,
              r
            ]), i.edge = 0);
            for (var w = 0, x = l.length - 1; x > w; w++) if (k >= l[w].frame && l[w + 1].frame >= k) {
                var y = l[w],
                z = l[w + 1];
                for (e in y.props) if (h.call(y.props, e)) {
                    var A = (k - y.frame) / (z.frame - y.frame);
                    A = y.props[e].easing(A),
                    f = cb(y.props[e].value, z.props[e].value, A),
                    f = db(f),
                    g.setStyle(j, e, f)
                }
                break
            }
        }
    },
    Z = function () {
        Ob && (Ob = !1, yb());
        var a,
        b,
        d = gb.getScrollTop(),
        e = Fb();
        if (nb) e >= nb.endTime ? (d = nb.targetTop, a = nb.done, nb = c) : (b = nb.easing((e - nb.startTime) / nb.duration), d = 0 | nb.startTop + b * nb.topDiff),
        gb.setScrollTop(d, !0);
        else if (!rb) {
            var f = qb.targetTop - d;
            f && (qb = {
                startTop: Kb,
                topDiff: d - Kb,
                targetTop: d,
                startTime: Lb,
                endTime: Lb + pb
            }),
            qb.endTime >= e && (b = V.sqrt((e - qb.startTime) / pb), d = 0 | qb.startTop + b * qb.topDiff)
        }
        if (Qb && ib && g.setStyle(ib, 'transform', 'translate(0, ' + -Rb + 'px) ' + tb), rb || Kb !== d) {
            Jb = d > Kb ? 'down' : Kb > d ? 'up' : Jb,
            rb = !1;
            var h = {
                curTop: d,
                lastTop: Kb,
                maxTop: Hb,
                direction: Jb
            },
            i = jb.beforerender && jb.beforerender.call(gb, h);
            i !== !1 && (Y(d, gb.getScrollTop()), Kb = d, jb.render && jb.render.call(gb, h)),
            a && a.call(gb, !1)
        }
        Lb = e
    },
    $ = function (a) {
        for (var b = 0, c = a.keyFrames.length; c > b; b++) {
            for (var d, e, f, g, h = a.keyFrames[b], i = {
            }; null !== (g = I.exec(h.props)) ;) f = g[1],
            e = g[2],
            d = f.match(J),
            null !== d ? (f = d[1], d = d[2]) : d = w,
            e = e.indexOf('!') ? _(e) : [
              e.slice(1)
            ],
            i[f] = {
                value: e,
                easing: V[d]
            };
            h.props = i
        }
    },
    _ = function (a) {
        var b = [
        ];
        return O.lastIndex = 0,
        a = a.replace(O, function (a) {
            return a.replace(M, function (a) {
                return 100 * (a / 255) + '%'
            })
        }),
        R && (P.lastIndex = 0, a = a.replace(P, function (a) {
            return R + a
        })),
        a = a.replace(M, function (a) {
            return b.push(+a),
            '{?}'
        }),
        b.unshift(a),
        b
    },
    ab = function (a) {
        var b,
        c,
        d = {
        };
        for (b = 0, c = a.keyFrames.length; c > b; b++) bb(a.keyFrames[b], d);
        for (d = {
        }, b = a.keyFrames.length - 1; b >= 0; b--) bb(a.keyFrames[b], d)
    },
    bb = function (a, b) {
        var c;
        for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
        for (c in a.props) b[c] = a.props[c]
    },
    cb = function (a, b, c) {
        var d,
        e = a.length;
        if (e !== b.length) throw 'Can\'t interpolate between "' + a[0] + '" and "' + b[0] + '"';
        var f = [
          a[0]
        ];
        for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
        return f
    },
    db = function (a) {
        var b = 1;
        return N.lastIndex = 0,
        a[0].replace(N, function () {
            return a[b++]
        })
    },
    eb = function (a, b) {
        a = [
        ].concat(a);
        for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e],
        c = hb[d[E]],
        c && (b ? (d.style.cssText = c.dirtyStyleAttr, Cb(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Bb(d), d.style.cssText = c.styleAttr, Cb(d, c.classAttr)))
    },
    fb = function () {
        tb = 'translateZ(0)',
        g.setStyle(ib, 'transform', tb);
        var a = j(ib),
        b = a.getPropertyValue('transform'),
        c = a.getPropertyValue(R + 'transform'),
        d = b && 'none' !== b || c && 'none' !== c;
        d || (tb = '')
    };
    g.setStyle = function (a, b, c) {
        var d = a.style;
        if (b = b.replace(K, L).replace('-', ''), 'zIndex' === b) d[b] = isNaN(c) ? c : '' + (0 | c);
        else if ('float' === b) d.styleFloat = d.cssFloat = c;
        else try {
            Q && (d[Q + b.slice(0, 1).toUpperCase() + b.slice(1)] = c),
            d[b] = c
        } catch (e) {
        }
    };
    var gb,
    hb,
    ib,
    jb,
    kb,
    lb,
    mb,
    nb,
    ob,
    pb,
    qb,
    rb,
    sb,
    tb,
    ub,
    vb = g.addEvent = function (b, c, d) {
        var e = function (b) {
            return b = b || a.event,
            b.target || (b.target = b.srcElement),
            b.preventDefault || (b.preventDefault = function () {
                b.returnValue = !1
            }),
            d.call(this, b)
        };
        c = c.split(' ');
        for (var f, g = 0, h = c.length; h > g; g++) f = c[g],
        b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent('on' + f, e),
        Sb.push({
            element: b,
            name: f,
            listener: d
        })
    },
    wb = g.removeEvent = function (a, b, c) {
        b = b.split(' ');
        for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent('on' + b[d], c)
    },
    xb = function () {
        for (var a, b = 0, c = Sb.length; c > b; b++) a = Sb[b],
        wb(a.element, a.name, a.listener);
        Sb = [
        ]
    },
    yb = function () {
        var a = gb.getScrollTop();
        Hb = 0,
        kb && !Qb && (f.style.height = 'auto'),
        X(),
        kb && !Qb && (f.style.height = Hb + e.clientHeight + 'px'),
        Qb ? gb.setScrollTop(i.min(gb.getScrollTop(), Hb)) : gb.setScrollTop(a, !0),
        rb = !0
    },
    zb = function () {
        var a,
        b,
        c = e.clientHeight,
        d = {
        };
        for (a in lb) b = lb[a],
        'function' == typeof b ? b = b.call(gb) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c),
        d[a] = b;
        return d
    },
    Ab = function () {
        var a = ib && ib.offsetHeight || 0,
        b = i.max(a, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight);
        return b - e.clientHeight
    },
    Bb = function (b) {
        var c = 'className';
        return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = 'baseVal'),
        b[c]
    },
    Cb = function (b, d, e) {
        var f = 'className';
        if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = 'baseVal'), e === c) return b[f] = d,
        c;
        for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Eb(g).replace(Eb(e[h]), ' ');
        g = Db(g);
        for (var j = 0, k = d.length; k > j; j++) -1 === Eb(g).indexOf(Eb(d[j])) && (g += ' ' + d[j]);
        b[f] = Db(g)
    },
    Db = function (a) {
        return a.replace(G, '')
    },
    Eb = function (a) {
        return ' ' + a + ' '
    },
    Fb = Date.now || function () {
        return +new Date
    },
    Gb = function (a, b) {
        return a.frame - b.frame
    },
    Hb = 0,
    Ib = 1,
    Jb = 'down',
    Kb = -1,
    Lb = Fb(),
    Mb = 0,
    Nb = 0,
    Ob = !1,
    Pb = 0,
    Qb = !1,
    Rb = 0,
    Sb = [
    ]
}(window, document),

function () {
    var a = [
    ].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1
    },
    b = [
    ].slice;
    !function (a, b) {
        return 'function' == typeof define && define.amd ? define('waypoints', [
          'jquery'
        ], function (c) {
            return b(c, a)
        }) : b(a.jQuery, a)
    }(this, function (c, d) {
        var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t;
        return e = c(d),
        l = a.call(d, 'ontouchstart') >= 0,
        h = {
            horizontal: {
            },
            vertical: {
            }
        },
        i = 1,
        k = {
        },
        j = 'waypoints-context-id',
        o = 'resize.waypoints',
        p = 'scroll.waypoints',
        q = 1,
        r = 'waypoints-waypoint-ids',
        s = 'waypoint',
        t = 'waypoints',
        f = function () {
            function a(a) {
                var b = this;
                this.$element = a,
                this.element = a[0],
                this.didResize = !1,
                this.didScroll = !1,
                this.id = 'context' + i++,
                this.oldScroll = {
                    x: a.scrollLeft(),
                    y: a.scrollTop()
                },
                this.waypoints = {
                    horizontal: {
                    },
                    vertical: {
                    }
                },
                a.data(j, this.id),
                k[this.id] = this,
                a.bind(p, function () {
                    var a;
                    return b.didScroll || l ? void 0 : (b.didScroll = !0, a = function () {
                        return b.doScroll(),
                        b.didScroll = !1
                    }, d.setTimeout(a, c[t].settings.scrollThrottle))
                }),
                a.bind(o, function () {
                    var a;
                    return b.didResize ? void 0 : (b.didResize = !0, a = function () {
                        return c[t]('refresh'),
                        b.didResize = !1
                    }, d.setTimeout(a, c[t].settings.resizeThrottle))
                })
            }
            return a.prototype.doScroll = function () {
                var a,
                b = this;
                return a = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: 'right',
                        backward: 'left'
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: 'down',
                        backward: 'up'
                    }
                },
                !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]('refresh'),
                c.each(a, function (a, d) {
                    var e,
                    f,
                    g;
                    return g = [
                    ],
                    f = d.newScroll > d.oldScroll,
                    e = f ? d.forward : d.backward,
                    c.each(b.waypoints[a], function (a, b) {
                        var c,
                        e;
                        return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
                    }),
                    g.sort(function (a, b) {
                        return a.offset - b.offset
                    }),
                    f || g.reverse(),
                    c.each(g, function (a, b) {
                        return b.options.continuous || a === g.length - 1 ? b.trigger([e]) : void 0
                    })
                }),
                this.oldScroll = {
                    x: a.horizontal.newScroll,
                    y: a.vertical.newScroll
                }
            },
            a.prototype.refresh = function () {
                var a,
                b,
                d,
                e = this;
                return d = c.isWindow(this.element),
                b = this.$element.offset(),
                this.doScroll(),
                a = {
                    horizontal: {
                        contextOffset: d ? 0 : b.left,
                        contextScroll: d ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: 'right',
                        backward: 'left',
                        offsetProp: 'left'
                    },
                    vertical: {
                        contextOffset: d ? 0 : b.top,
                        contextScroll: d ? 0 : this.oldScroll.y,
                        contextDimension: d ? c[t]('viewportHeight') : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: 'down',
                        backward: 'up',
                        offsetProp: 'top'
                    }
                },
                c.each(a, function (a, b) {
                    return c.each(e.waypoints[a], function (a, d) {
                        var e,
                        f,
                        g,
                        h,
                        i;
                        return e = d.options.offset,
                        g = d.offset,
                        f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp],
                        c.isFunction(e) ? e = e.apply(d.element) : 'string' == typeof e && (e = parseFloat(e), d.options.offset.indexOf('%') > -1 && (e = Math.ceil(b.contextDimension * e / 100))),
                        d.offset = f - b.contextOffset + b.contextScroll - e,
                        d.options.onlyOnScroll && null != g || !d.enabled ? void 0 : null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
                    })
                })
            },
            a.prototype.checkEmpty = function () {
                return c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([o,
                p].join(' ')), delete k[this.id]) : void 0
            },
            a
        }(),
        g = function () {
            function a(a, b, d) {
                var e,
                f;
                d = c.extend({
                }, c.fn[s].defaults, d),
                'bottom-in-view' === d.offset && (d.offset = function () {
                    var a;
                    return a = c[t]('viewportHeight'),
                    c.isWindow(b.element) || (a = b.$element.height()),
                    a - c(this).outerHeight()
                }),
                this.$element = a,
                this.element = a[0],
                this.axis = d.horizontal ? 'horizontal' : 'vertical',
                this.callback = d.handler,
                this.context = b,
                this.enabled = d.enabled,
                this.id = 'waypoints' + q++,
                this.offset = null,
                this.options = d,
                b.waypoints[this.axis][this.id] = this,
                h[this.axis][this.id] = this,
                e = null != (f = a.data(r)) ? f : [
                ],
                e.push(this.id),
                a.data(r, e)
            }
            return a.prototype.trigger = function (a) {
                return this.enabled ? (null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0) : void 0
            },
            a.prototype.disable = function () {
                return this.enabled = !1
            },
            a.prototype.enable = function () {
                return this.context.refresh(),
                this.enabled = !0
            },
            a.prototype.destroy = function () {
                return delete h[this.axis][this.id],
                delete this.context.waypoints[this.axis][this.id],
                this.context.checkEmpty()
            },
            a.getWaypointsByElement = function (a) {
                var b,
                d;
                return (d = c(a).data(r)) ? (b = c.extend({
                }, h.horizontal, h.vertical), c.map(d, function (a) {
                    return b[a]
                })) : [
                ]
            },
            a
        }(),
        n = {
            init: function (a, b) {
                var d;
                return null == b && (b = {
                }),
                null == (d = b.handler) && (b.handler = a),
                this.each(function () {
                    var a,
                    d,
                    e,
                    h;
                    return a = c(this),
                    e = null != (h = b.context) ? h : c.fn[s].defaults.context,
                    c.isWindow(e) || (e = a.closest(e)),
                    e = c(e),
                    d = k[e.data(j)],
                    d || (d = new f(e)),
                    new g(a, d, b)
                }),
                c[t]('refresh'),
                this
            },
            disable: function () {
                return n._invoke(this, 'disable')
            },
            enable: function () {
                return n._invoke(this, 'enable')
            },
            destroy: function () {
                return n._invoke(this, 'destroy')
            },
            prev: function (a, b) {
                return n._traverse.call(this, a, b, function (a, b, c) {
                    return b > 0 ? a.push(c[b - 1]) : void 0
                })
            },
            next: function (a, b) {
                return n._traverse.call(this, a, b, function (a, b, c) {
                    return b < c.length - 1 ? a.push(c[b + 1]) : void 0
                })
            },
            _traverse: function (a, b, e) {
                var f,
                g;
                return null == a && (a = 'vertical'),
                null == b && (b = d),
                g = m.aggregate(b),
                f = [
                ],
                this.each(function () {
                    var b;
                    return b = c.inArray(this, g[a]),
                    e(f, b, g[a])
                }),
                this.pushStack(f)
            },
            _invoke: function (a, b) {
                return a.each(function () {
                    var a;
                    return a = g.getWaypointsByElement(this),
                    c.each(a, function (a, c) {
                        return c[b](),
                        !0
                    })
                }),
                this
            }
        },
        c.fn[s] = function () {
            var a,
            d;
            return d = arguments[0],
            a = 2 <= arguments.length ? b.call(arguments, 1) : [
            ],
            n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [
              null,
              d
            ]) : c.error(d ? 'The ' + d + ' method does not exist in jQuery Waypoints.' : 'jQuery Waypoints needs a callback function or handler option.')
        },
        c.fn[s].defaults = {
            context: d,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        },
        m = {
            refresh: function () {
                return c.each(k, function (a, b) {
                    return b.refresh()
                })
            },
            viewportHeight: function () {
                var a;
                return null != (a = d.innerHeight) ? a : e.height()
            },
            aggregate: function (a) {
                var b,
                d,
                e;
                return b = h,
                a && (b = null != (e = k[c(a).data(j)]) ? e.waypoints : void 0),
                b ? (d = {
                    horizontal: [
                    ],
                    vertical: [
                    ]
                }, c.each(d, function (a, e) {
                    return c.each(b[a], function (a, b) {
                        return e.push(b)
                    }),
                    e.sort(function (a, b) {
                        return a.offset - b.offset
                    }),
                    d[a] = c.map(e, function (a) {
                        return a.element
                    }),
                    d[a] = c.unique(d[a])
                }), d) : [
                ]
            },
            above: function (a) {
                return null == a && (a = d),
                m._filter(a, 'vertical', function (a, b) {
                    return b.offset <= a.oldScroll.y
                })
            },
            below: function (a) {
                return null == a && (a = d),
                m._filter(a, 'vertical', function (a, b) {
                    return b.offset > a.oldScroll.y
                })
            },
            left: function (a) {
                return null == a && (a = d),
                m._filter(a, 'horizontal', function (a, b) {
                    return b.offset <= a.oldScroll.x
                })
            },
            right: function (a) {
                return null == a && (a = d),
                m._filter(a, 'horizontal', function (a, b) {
                    return b.offset > a.oldScroll.x
                })
            },
            enable: function () {
                return m._invoke('enable')
            },
            disable: function () {
                return m._invoke('disable')
            },
            destroy: function () {
                return m._invoke('destroy')
            },
            extendFn: function (a, b) {
                return n[a] = b
            },
            _invoke: function (a) {
                var b;
                return b = c.extend({
                }, h.vertical, h.horizontal),
                c.each(b, function (b, c) {
                    return c[a](),
                    !0
                })
            },
            _filter: function (a, b, d) {
                var e,
                f;
                return (e = k[c(a).data(j)]) ? (f = [
                ], c.each(e.waypoints[b], function (a, b) {
                    return d(e, b) ? f.push(b) : void 0
                }), f.sort(function (a, b) {
                    return a.offset - b.offset
                }), c.map(f, function (a) {
                    return a.element
                })) : [
                ]
            }
        },
        c[t] = function () {
            var a,
            c;
            return c = arguments[0],
            a = 2 <= arguments.length ? b.call(arguments, 1) : [
            ],
            m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
        },
        c[t].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        },
        e.load(function () {
            return c[t]('refresh')
        })
    })
}.call(this);


var fullpageintro = {
    init: function () {
        function a() {
            $('#intro .overlay').addClass('fade')
        }
        $('#intro').height($(window).height()),
        setTimeout(a, 500)
    }
},
parralax = {
    init: function () {
        if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) $('#about').waypoint(function () {
            $('nav').css('position', 'fixed'),
            $('nav').css('top', '0')
        }, {
        });
        else {
            skrollr.init({
                forceHeight: !1
            })
        }
    }
},
waypointsnav = {
    init: function () {
        $('#about').waypoint(function () {
            $('#nav').toggleClass('fixed');
            var a = $(this).attr('id');
            $('li.menu-item').removeClass('current'),
            $('a[href$="' + a + '"]').parent().addClass('current')
        }, {
            offset: '-1'
        }),
        $('#shop, #imprints').waypoint(function (a) {
            if ('down' === a) {
                var b = $(this).attr('id');
                $('li.menu-item').removeClass('current'),
                $('a[href$="' + b + '"]').parent().addClass('current')
            }
        }, {
            offset: '65'
        }).waypoint(function (a) {
            if ('up' === a) {
                var b = $(this).attr('id');
                $('li.menu-item').removeClass('current'),
                $('a[href$="' + b + '"]').parent().addClass('current')
            }
        }, {
            offset: '0'
        }),
        $('#contact').waypoint(function () {
            var a = $(this).attr('id');
            $('li.menu-item').removeClass('current'),
            $('a[href$="' + a + '"]').parent().addClass('current')
        }, {
            offset: '100%'
        })
    }
},
sidenav = {
    init: function () {
        $('.menu li a').smoothScroll({
            offset: -65
        }),
        $('.menu li.about a').smoothScroll({
            offset: 0
        }),
        $('.menu li a').click(function () {
            $('.menu li').removeClass('current'),
            $(this).parent().addClass('current'),
            $('#nav').removeClass('open')
        }),
        $('.menu-trigger').click(function () {
            return sidenav.togglemenu(),
            !1
        })
    },
    togglemenu: function () {
        var a = $('#nav');
        a.find('ul.menu').show(),
        setTimeout(function () {
            a.hasClass('open') ? (a.toggleClass('closed'), setTimeout(function () {
                a.find('ul.menu').hide(),
                a.removeClass('open'),
                a.removeClass('closed')
            }, 300)) : a.toggleClass('open')
        }, 50)
    }
},
scrolldown = {
    init: function () {
        $('.scroll-down-btn').smoothScroll({
            offset: 0
        }),
        $('.imprints-btn').smoothScroll({
            offset: -100
        })
    }
},
count = 0,
loops = 0,
increase = !0,
scrolldownindicator = {
    init: function () {
        function a() {
            $('.scroll-down-indicator span').eq(count).animate({
                opacity: increase
            }, 100, 'linear', function () {
                count += 1,
                3 == count && (count = 0, loops++, increase = increase ? !1 : !0),
                2 > loops ? a() : (loops = 0, setTimeout(function () {
                    a()
                }, 4000))
            })
        }
        setTimeout(function () {
            a()
        }, 2500)
    }
},

locations = {

    config: function (loc) {
        var a = {
            zoom: 12,
            center: new google.maps.LatLng(loc[0], loc[1]),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var b = new google.maps.Map(document.getElementById('map-canvas'), a)
    },

    init: function () {
        var loc = locations.getfirstlocation()

        if (!/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
            google.maps.event.addDomListener(window, 'load', locations.config(loc))
        }

        $('a.location').hover(locations.on, locations.off),

        $('a.location').click(function (a) {
            event.preventDefault(a)
        })
    },

    getfirstlocation: function () {
        var l = [];
        var ls = document.getElementById('locations');
        var ll = ls.querySelectorAll('li');
        if (ll[0].getAttribute('data-latlon') != null) {
            l = ll[0].getAttribute('data-latlon').split(",");
        }
        return l;
    },

    on: function () {
        $('.overlay').toggleClass('fade');
        $('.overlay').parent().toggleClass('fade-parent');

        // Hide the other locations
        //var id = $(this).parent().attr("id");
        //locations.styler(id, 'opacity', '0.1');

        // Get the current map for display
        var loc = $(this).parent().attr("data-latlon").split(",");
        if (!/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
            google.maps.event.addDomListener(window, 'load', locations.config(loc))
        }
    },

    off: function () {
        $('.overlay').parent().toggleClass('fade-parent')
        $('.overlay').toggleClass('fade');
    },
},


flickrgallery = {

    config: function () {

        var sixthirty = {
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 240,
            slideMargin: 2,
            ticker: true,
            speed: 85000
        };

        var sevensixtyseven = {
            minSlides: 2,
            maxSlides: 3,
            slideWidth: 240,
            slideMargin: 5,
            ticker: true,
            speed: 65000
        };

        var max = {
            minSlides: 2,
            maxSlides: 3,
            slideWidth: 240,
            slideMargin: 5,
            ticker: true,
            speed: 65000
        };

        var width = $(window).width();

        // Debug element
        //console.log("Flickr gallery width:>" + width);

        if (width <= 630) return sixthirty
        else if (width <= 767) return sevensixtyseven
        else return max;

    },

    init: function () {
        user_id = '31808274@N07';
        flickrURL = 'http://api.flickr.com/services/feeds/photos_public.gne?id=' + user_id + '&lang=en-us&format=json&jsoncallback=?';
        $('#flickrgallery').empty();
        $.getJSON(flickrURL, function (data) {
            $.each(data.items, function (i, item) {
                // _m = medium img, _b = large; remove the replace function if you want the standard small images
                //$("<img/>").attr("src", item.media.m.replace("_m", "_z"))
                $("<img/>").attr("src", item.media.m)
                    //.attr("title", "<div class='flickrtitle'>" + item.title + "</div>")
                    .appendTo("#flickrgallery")
                    .wrap("<li><a href='" + item.link + "' target='_blank'></a></li>");
            });
        });
    },

    start: function () {
        var fg = $('.flickrgallery').bxSlider(flickrgallery.config()); // Initialize the Flickr ticker gallery
        $('#fgwrapper').removeClass("hideme"); // Turn on the gallery
        return fg;
    }

    // TODO: Add flickr size matrix and src update
},


etsyslider = {

    api_key: '9eagsiapj818mhonlg3nr032',

    offset: 0,

    begin: 2,

    chunk: 5,

    count: 0,

    url: "https://openapi.etsy.com/v2/shops/zinniadesignstc/listings/active.js",

    query: "includes=Images(url_170x135,url_570xN)&fields=listing_id,title,price,description,url",

    getdata: function (l,o) {
        $.ajax({
            type: 'GET',
            url: etsyslider.url,
            data: etsyslider.query + "&api_key=" + etsyslider.api_key + "&offset=" + o + "&limit=" + l,
            async: false,
            jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (data) {
                if (data.ok) {
                    if (data.count > 0) {

                        // Save the batch count
                        etsyslider.count += l;

                        // Append info to the etsyslider
                        $.each(data.results, function (i, item) {
                            $("<img/>")
                                .attr("class", "etsyimage")
                                .attr("src", item.Images[0].url_570xN)
                                .attr("title", "<div class='etsytitle'>" + item.title.substring(0, 35) + "</div><div class='etsyprice'>$" + item.price + "</div>")
                                .appendTo("#etsyslider")
                                .wrap("<li><a href='" + item.url + "'></a></li>");
                        });

                        // generate bxslider
                        if ( es == null ) {
                            es = $('.etsyslider').bxSlider(etsyslider.config());
                        }
                        // Or reload it
                        else {
                            es.reloadSlider(etsyslider.config())
                        }

                    } else {
                        $('<p>No results.</p>').appendTo('#etsyslider');
                    }
                } else {
                    $('#etsyslider').empty();
                    console.log("---ERROR---\n" + data.error);
                    alert("---ERROR---\n" + data.error);
                }
            }
        });
    },

    config: function () {

        var start = (es == null) ? 0 : es.getCurrentSlide();

        var max = {
            mode: 'fade',
            captions: true,
            slideWidth: 570,
            pager: false,
            adaptiveHeight: true,
            preloadImages: 'all',
            startSlide: start,
            onSlideAfter: function ($es, oldIndex, newIndex) {
                var offset = newIndex + 1;
                if (offset == etsyslider.count) {
                    etsyslider.getdata(etsyslider.chunk, offset);
                }
            }
        };

        var sixohtwo = {
            mode: 'fade',
            captions: true,
            slideWidth: 480,
            pager: false,
            adaptiveHeight: true,
            preloadImages: 'all',
            startSlide: start,
            onSlideAfter: function ($es, oldIndex, newIndex) {
                var offset = newIndex + 1;
                if (offset == etsyslider.count) {
                    etsyslider.getdata(etsyslider.chunk, offset);
                }
            }
        };



        // Debug statement
        var width = $(window).width();
        console.log("Etsy width:>" + width);

        if (width <= 602) return sixohtwo
        else return max;

    },

    init: function () {
        $('.etsyslider').empty();
    }

};

$(function () {
    fullpageintro.init(),
    waypointsnav.init(),
    parralax.init(),
    sidenav.init(),
    scrolldownindicator.init(),
    scrolldown.init(),
    flickrgallery.init(),
    etsyslider.init(),
    locations.init();
});


var es;

$(window).load(function () {

    // Start the flickr gallery
    var fg = flickrgallery.start();


    // Initialize the Etsy Slider
    etsyslider.getdata(etsyslider.begin, etsyslider.offset);

    // Turn on the slider
    $('.etsyslider').removeClass("hideme");

    // Add resize event
    $(window).resize(function () {
        fg.reloadSlider(flickrgallery.config())
        es.reloadSlider(etsyslider.config())
    });

});

$("#locationsort").click(function () {

    if (geoPosition.init()) {
        geoPosition.getCurrentPosition(geoSuccess, geoError);
    }

    function geoSuccess(p) {
        // Grab current position
        var latlon = new LatLon(p.coords.latitude, p.coords.longitude);

        var locations = document.getElementById('locations');
        var locationList = locations.querySelectorAll('li');
        var locationArray = Array.prototype.slice.call(locationList, 0);

        locationArray.sort(function (a, b) {
            var locA = a.getAttribute('data-latlon').split(',');
            var locB = b.getAttribute('data-latlon').split(',');

            distA = latlon.distanceTo(new LatLon(Number(locA[0]), Number(locA[1])));
            distB = latlon.distanceTo(new LatLon(Number(locB[0]), Number(locB[1])));
            return distA - distB;
        });

        //Reorder the list
        locations.innerHTML = "";
        locationArray.forEach(function (el) {
            locations.appendChild(el);
        });
    }

    function geoError() {
        alert("Could not find you!");
    }

});