!(function (e) {
  function t(t) {
    for (
      var r, i, l = t[0], s = t[1], c = t[2], u = 0, m = [];
      u < l.length;
      u++
    )
      (i = l[u]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && m.push(a[i][0]),
        (a[i] = 0)
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
    for (d && d(t); m.length;) m.shift()()
    return o.push.apply(o, c || []), n()
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, l = 1; l < n.length; l++) {
        var s = n[l]
        0 !== a[s] && (r = !1)
      }
      r && (o.splice(t--, 1), (e = i((i.s = n[0]))))
    }
    return e
  }
  var r = {},
    a = { 0: 0 },
    o = []
  function i(t) {
    if (r[t]) return r[t].exports
    var n = (r[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
  }
  ; (i.m = e),
    (i.c = r),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (i.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (i.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t]
            }.bind(null, r)
          )
      return n
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
            return e.default
          }
          : function () {
            return e
          }
      return i.d(t, 'a', t), t
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (i.p = '')
  var l = (window.webpackJsonp = window.webpackJsonp || []),
    s = l.push.bind(l)
    ; (l.push = t), (l = l.slice())
  for (var c = 0; c < l.length; c++) t(l[c])
  var d = s
  o.push([5, 1]), n()
})([
  ,
  ,
  function (e, t, n) { },
  ,
  function (e, t) {
    ; (Number.isNaN =
      Number.isNaN ||
      function (e) {
        return 'number' == typeof e && isNaN(e)
      }),
      String.prototype.repeat ||
      (String.prototype.repeat = function (e) {
        'use strict'
        if (null == this)
          throw new TypeError("can't convert " + this + ' to object')
        var t = '' + this
        if (((e = +e) != e && (e = 0), e < 0))
          throw new RangeError('repeat count must be non-negative')
        if (e == 1 / 0)
          throw new RangeError('repeat count must be less than infinity')
        if (((e = Math.floor(e)), 0 == t.length || 0 == e)) return ''
        if (t.length * e >= 1 << 28)
          throw new RangeError(
            'repeat count must not overflow maximum string size'
          )
        var n = t.length * e
        for (e = Math.floor(Math.log(e) / Math.log(2)); e;) (t += t), e--
        return (t += t.substring(0, n - t.length))
      })
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    n(2)
    var r = n(1),
      a = n.n(r)
    n(3), n(4)
    function o(e, t) {
      return /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
        navigator.userAgent
      )
        ? e
        : t
    }
    function i() {
      var e = (e || navigator.userAgent).toLowerCase(),
        t = e.match(/android\s([0-9\.]*)/i)
      return t ? t[1] : void 0
    }
    function l(e) {
      return document.body.clientWidth >= e
    }
    function s(e, t) {
      t = t || 1
      var n = e + ' .swiper-slide'
      return document.querySelectorAll(n).length > t
    }
    function c(e, t, n, r) {
      var a =
        /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
          navigator.userAgent
        )
          ? t
          : l(e)
            ? n
            : r
      return r || (r = n), a
    }
    function d() {
      var e = 0
      return (
        void 0 !== window.pageYOffset
          ? (e = window.pageYOffset)
          : void 0 !== document.compatMode &&
            'BackCompat' != document.compatMode
            ? (e = document.documentElement.scrollTop)
            : void 0 !== document.body && (e = document.body.scrollTop),
        e
      )
    }
    function u(e, t) {
      return 'object' != typeof e
        ? (t && console.error(t), !1)
        : (!Array.isArray(e) && null !== e) || (t && console.error(t), !1)
    }
    function m(e, t, n, r) {
      var a = [],
        o = typeof e
      return (
        'undefined' === o
          ? t && a.push(t)
          : 'string' === o
            ? (r && a.push(t), a.push(e))
            : Array.isArray(e)
              ? (r && a.push(t),
                e.forEach(function (e) {
                  a.push(e)
                }))
              : n && console.error(n),
        a
      )
    }
    function p(e) {
      var t =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      return t ? t(e) : e()
    }
    !(function () {
      if (
        -1 == navigator.appName.indexOf('Internet Explorer') ||
        -1 != navigator.appVersion.indexOf('MSIE 1')
      )
        return !1
      var e = -1 == location.href.indexOf('u-mall')
      alert(
        (e ? '東森會員' : '森森會員') +
        '您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。'
      )
    })()
    !(function (e) {
      if (
        !(function (e) {
          return (
            !!i && ('string' == typeof i() ? parseInt(i(), 10) < e : void 0)
          )
        })(e)
      )
        return !1
      alert('請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。')
    })(5)
    function f(e, t, n) {
      ; (t = t || 0), (n = n || 0.5)
      if (
        (function (e, t, n) {
          ; (t = t || 0), (n = n || t || 0)
          var r =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight,
            a =
              (e.getBoundingClientRect() && e.getBoundingClientRect().top) <=
              r + t,
            o = e.getBoundingClientRect() && e.getBoundingClientRect().bottom
          return a && o + n >= 0
        })((e = e))
      ) {
        var r =
          (window.innerHeight - e.getBoundingClientRect().top - t) /
          window.innerHeight /
          n
        return r < 0 ? (r = 0) : r > 1 && (r = 1), r
      }
    }
    function y(e, t) {
      var n = { top: e || 0, left: t || 0, behavior: 'smooth' },
        r = 'scrollBehavior' in document.documentElement.style
      if (window.jQuery)
        $('html,body')
          .stop()
          .animate({ scrollTop: n.top, scrollLeft: n.left }, 500)
      else if (r) window.scrollTo(n)
      else {
        var a = function () {
          ; (window.scrollX == n.left && window.scrollY == n.top) ||
            setTimeout(function () {
              window.scrollTo(window.scrollX - 100, window.scrollY - 100), a()
            }, 0)
        }
        a()
      }
    }
    ; ((w = document.createElement('button')).id = 'fixedGoTop'),
      w.classList.add('go-top'),
      w.classList.add('js--go-top'),
      (w.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><linearGradient id="Gradient" x1="48" y1="5" x2="0" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0" offset="0"/><stop stop-color="#fff" stop-opacity="0.5" offset="1"/></linearGradient></defs><circle cx="24" cy="24" r="23" fill="transparent" stroke-width="1" stroke="url(#Gradient)"/><path fill="#fff" d="M23.5 15h.018c.31.004.618.102.875.296l.117.099 6.752 6.307a.75.75 0 0 1-.937 1.166l-.087-.07-5.988-5.594V30.25a.75.75 0 0 1-1.493.102l-.007-.102V17.204l-5.988 5.594a.75.75 0 0 1-.978.04l-.082-.076a.75.75 0 0 1-.04-.978l.076-.082 6.752-6.307c.277-.26.635-.391.993-.395H12z"/></svg>'),
      document.body.appendChild(w),
      window.addEventListener('load', b),
      window.addEventListener('load', S),
      window.addEventListener('resize', S),
      Array.apply(null, document.querySelectorAll('a[href^="#"]')).forEach(
        function (e) {
          e.addEventListener('click', function (e) {
            var t,
              n = document.querySelector(this.getAttribute('href'))
            if (
              (t =
                n ||
                document.querySelector(
                  '[data-title=' + this.getAttribute('href').split('#')[1] + ']'
                ))
            ) {
              e.preventDefault()
              var r = document.getElementById('progressBar')
                ? document.getElementById('progressBar').clientHeight + 4
                : 0,
                a = document.getElementById('navSub')
                  ? document.getElementById('navSub').clientHeight
                  : 0,
                o = a > 0 ? a : r
              y(t.offsetTop - o)
            }
          })
        }
      ),
      (v = document.body),
      (h = document.createElement('div')),
      (g = document.createElement('div')),
      (h.id = 'progressBarWrap'),
      (h.style.opacity = 0),
      (h.style.position = 'fixed'),
      (h.style.zIndex = 200),
      (h.style.top = 0),
      (h.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'),
      (h.style.width = '100%'),
      (h.style.height = '0.5vh'),
      (g.style.backgroundColor = '#cc1e05'),
      (g.style.backgroundImage =
        'linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)'),
      (g.style.height = '100%'),
      (g.id = 'progressBar'),
      h.appendChild(g),
      v.insertBefore(h, v.firstChild),
      d(),
      document.addEventListener('DOMContentLoaded', function () {
        var e, t
          ; (e = Array.apply(null, document.querySelectorAll('#progressBar'))),
            (t = 0),
            e.length > 1 &&
            e.forEach(function (e) {
              var n = e.parentNode
              'progressBarWrap' === n.id
                ? ++t > 1 && n.parentNode.removeChild(n)
                : n.parentNode.removeChild(n)
            })
      }),
      window.addEventListener('load', function () {
        p(T)
      }),
      window.addEventListener('scroll', function () {
        p(T)
      })
    var v,
      h,
      g,
      w,
      L = !1
    function b() {
      Array.apply(null, document.querySelectorAll('.js--go-top')).forEach(
        function (e) {
          e.addEventListener('click', E)
        }
      )
    }
    function E(e) {
      e.preventDefault(), y(0)
    }
    function S() {
      var e = document.body.clientWidth,
        t = document.getElementById('navGoTop'),
        n = document.getElementById('fixedGoTop')
      t && e >= 1260
        ? (n.style.display = 'none')
        : window.addEventListener('scroll', A)
    }
    function A() {
      var e = document.getElementById('fixedGoTop')
      window.scrollY >= 300
        ? e.classList.add('is-visible')
        : e.classList.remove('is-visible')
    }
    function T() {
      var e,
        t,
        n,
        r = document.getElementById('progressBarWrap')
        ; (document.getElementById('progressBar').style.width =
          ((e = d()),
            (t = document.body.scrollHeight - window.innerHeight),
            (n = document.body.clientWidth),
            parseInt((e / t) * n) + 'px')),
          L ? (r.style.opacity = 1) : (L = !0)
    }
    var C = n(0),
      I = n.n(C)
    function B(e) {
      return Math.floor(Math.random() * e)
    }
    function N(e, t) {
      t = t || 'siblingRandomCheckNowIndex'
      for (var n = B(e); n === window[t];) n = B(e)
      return (window[t] = n), n
    }
    var k, M
    setInterval(function () {
      var e, t
        ; (e = Array.apply(
          null,
          document.querySelectorAll('.promo__block .promo__item')
        )),
          (t = N(e.length)),
          e.forEach(function (e) {
            e.classList.remove('sand-flash-shake')
          }),
          e[t].classList.add('sand-flash-shake')
    }, 2200),
      o(window.addEventListener('load', _), _),
      _(),
      (k = document.getElementById('changeEventLink')),
      (M = c(
        960,
        'etmall://open?pgid=45&url=https%3A%2F%2Fwww.surveycake.com%2Fs%2FAzzry',
        'https://www.surveycake.com/s/Azzry',
        'https://www.surveycake.com/s/Azzry'
      )),
      (k.href = M)
    function _() {
      document
        .querySelectorAll('.container--promo-event')
        .forEach(function (e) {
          var t = e.querySelectorAll('.swiper-slide').length
          return new I.a(e, {
            autoplay: {
              delay: 1800 + Math.floor(500 * Math.random()),
              disableOnInteraction: !1
            },
            grabCursor: !0,
            init: t > 1,
            slidesPerView: 1,
            speed: 500 + Math.floor(200 * Math.random())
          })
        })
    }
    function x(e) {
      if (void 0 === e) return console.error('沒有資料來源')
    }
    function P(e) {
      return e ? (u(e, '客製化設定請用物件表示'), e) : {}
    }
    function z(e, t, n, r) {
      r = void 0 === r || r
      var a,
        o,
        i = P(t)
      if ((r && x(e), 'string' == typeof e || 'number' == typeof e)) {
        var l = Number(e)
        isNaN(l) || 0 === l
          ? (console.log(e), console.error('銷編數值有誤'))
          : (a = { productNumber: l })
      } else {
        u(e, '資料格式不正確')
        var s = i.productNumberKey || 'productNumber'
        if ('string' == typeof e[s] || 'number' == typeof e[s]) {
          l = Number(e[s])
          isNaN(l) || 0 === l
            ? (console.log(e), console.error('銷編數值有誤'))
            : (a = e)
        } else if (e[s]) console.log(e), console.error('銷編格式錯誤')
        else {
          var c = i.nameKey || 'name',
            d = i.textKey || 'text',
            m = i.priceKey || 'price'
          e[c] && (e[d] || e[m])
            ? (a = e)
            : (console.log(e),
              console.error('無銷編的話品名與價格/促銷字兩者都要填'))
        }
      }
      if (((o = n), Array.isArray(o) || u(o))) {
        var p = []
        return (
          n.forEach(function (e) {
            'function' == typeof e
              ? p.push(n(a, i))
              : console.error('callback並非函式')
          }),
          p
        )
      }
      if ('function' == typeof n) return n(a, i)
      console.error('callback並非函式')
    }
    function O(e, t) {
      return z(e, t, q, !1)
    }
    function q(e, t) {
      var n,
        r,
        a,
        o,
        i = t.productNumberKey || 'productNumber',
        l = t.webLinkKey || 'webLink',
        s = t.mobileLinkKey || 'mobileLink',
        d = t.appLinkKey || 'appLink',
        u = t.titleKey || 'name'
      if (e[l]) (n = e[l]), (r = e[s] ? e[s] : n), (a = e[d] ? e[d] : r)
      else if (e[i]) {
        ; (n = 'https://www.etmall.com.tw/i/' + e.productNumber),
          (r = 'https://m.etmall.com.tw/Product/' + e.productNumber),
          (a = 'etmall://open?pgid=1&gd=' + e.productNumber)
      } else
        console.error('網址填寫錯誤：沒有網址來源，客製連結至少要填web網址')
      return (o = e[u] || ''), [c(960, a, n, r), o]
    }
    function D(e, t) {
      return z(e, t, H, !1)
    }
    function H(e, t) {
      var n,
        r = t.productNumberKey || 'productNumber',
        a = t.imgSrcKey || 'imgSrc',
        o = t.altKey || 'name'
      if (e[a]) n = e[a]
      else if (e[r]) {
        var i = t.imgSizeBreakpoint || 768,
          s = t.imgSizeWebSize || 'XL',
          c = t.imgSizeMobileSize || 'L',
          d = '-1_' + (l(i) ? s : c) + '.jpg',
          u = e[r]
        n =
          'https://media.etmall.com.tw/NXimg/00' +
          u.toString().slice(0, 4) +
          '/' +
          u +
          '/' +
          u +
          d
      } else console.error('圖片來源填寫錯誤：未指定銷售編號或是圖片來源')
      return [n, e[o] ? e[o] : '']
    }
    function j(e, t) {
      return z(e, t, W, !1)
    }
    function W(e, t) {
      var n = t.productNumberKey || 'productNumber',
        r = document.createElement('custom'),
        a = document.createElement('custom')
      return (
        r.setAttribute('tag', 'GOOD_NAME'),
        r.setAttribute('goodid', e[n]),
        a.setAttribute('tag', 'GOOD_SALEPRC'),
        a.setAttribute('goodid', e[n]),
        [r, a]
      )
    }
    function X(e, t) {
      var n,
        r = P(t),
        a = r.namekey || 'name',
        o = r.pricekey || 'price',
        i = r.textkey || 'text'
      if (((n = e[a] || ''), e[i])) var l = !0
      return [
        n,
        l
          ? e[i]
          : Number.prototype.toLocaleString
            ? isNaN(Number(e[o]))
              ? e[o] || ''
              : Number(e[o]).toLocaleString() || ''
            : e[o] || ''
      ]
    }
    function R(e, t) {
      var n,
        r,
        a = (t = t || {}).namekey || 'name',
        o = t.pricekey || 'price',
        i = t.textkey || 'text',
        l = document.createElement('span'),
        s = document.createElement('span'),
        c = !1,
        d = void 0 === t.isAutoSync ? 'auto' : t.isAutoSync
      if (!1 === d || 'false' === d || 'none' === d)
        var u = void 0 !== t.isNameAutoSync && t.isNameAutoSync,
          m = void 0 !== t.isPriceAutoSync && t.isPriceAutoSync
      return (
        'auto' === d
          ? (e[a] ? ((l.innerHTML = X(e, t)[0]), (n = l)) : (n = j(e, t)[0]),
            e[i] && (c = !0),
            e[i] || e[o]
              ? ((s.innerHTML = X(e, t)[1]), (r = s))
              : (s.appendChild(j(e, t)[1]), (r = s)))
          : 'all' === d
            ? ((n = j(e, t)[0]), s.appendChild(j(e, t)[1]), (r = s))
            : !1 === d || 'false' === d || 'none' === d
              ? (u
                ? (n = j(e, t)[0])
                : e[a]
                  ? ((l.innerHTML = X(e, t)[0]), (n = l))
                  : console.error('設定手動填name卻沒有找到來源'),
                m
                  ? (s.appendChild(j(e, t)[1]), (r = s))
                  : (e[i] && (c = !0),
                    e[i] || e[o]
                      ? ((s.innerHTML = X(e, t)[1]), (r = s))
                      : console.error('設定手動填text/price卻沒有找到來源')),
                u ||
                m ||
                (e[a]
                  ? ((l.innerHTML = X(e, t)[0]), (n = l))
                  : console.error('設定手動填name卻沒有找到來源'),
                  e[i] && (c = !0),
                  e[i] || e[o]
                    ? ((s.innerHTML = X(e, t)[1]), (r = s))
                    : console.error('設定手動填text/price卻沒有找到來源')))
              : console.error('isAutoSync設定錯誤'),
        [n, r, c]
      )
    }
    function U(e, t) {
      x(e)
      var n = (t = t || {}).outerTag || 'li',
        r = void 0 !== t.isLazyLoad && t.isLazyLoad,
        a = void 0 === t.isSlider || t.isSlider
      if (a) {
        var o = t.sliderClass,
          i = void 0 === t.isSliderLazyLoad || t.isSliderLazyLoad,
          l = m(o, 'swiper-slide', 'sliderClass格式不正確', !0)
        if (i) {
          var s = t.sliderImgLazyLoadClass,
            c = t.sliderLazyLoadIndicatorClass,
            d = m(s, null, 'sliderImgLazyLoadClass格式不正確', !0),
            u = m(c, null, 'sliderLazyLoadIndicatorClass格式不正確', !0)
            ;['swiper-lazy'].forEach(function (e) {
              d.push(e)
            }),
              ['swiper-lazy-preloader', 'swiper-lazy-preloader-black'].forEach(
                function (e) {
                  u.push(e)
                }
              )
        } else if (r) {
          var p = t.imgLazyLoadClass,
            f = t.lazyLoadIndicatorSrc || '1x1_low.png',
            y = m(p, null, 'imgLazyLoadClass格式不正確', !0)
          y.push('lazyload')
        }
      }
      var v = document.createElement('img')
      if (i || r) {
        var h = document.createElement('div')
          ; (v.dataset.src = D(e, t)[0]), (v.alt = '')
      } else (v.src = D(e, t)[0]), (v.alt = D(e, t)[1])
      i
        ? (d.forEach(function (e) {
          v.classList.add(e)
        }),
          u.forEach(function (e) {
            h.classList.add(e)
          }))
        : r &&
        (y.forEach(function (e) {
          v.classList.add(e)
        }),
          (v.src = f))
      var g = document.createElement(n),
        w = m(t.outerClass),
        L = a ? l : w
      Array.isArray(L) &&
        L.forEach(function (e) {
          g.classList.add(e)
        })
      var b,
        E,
        S = document.createElement('a')
        ; (S.href = O(e, t)[0]),
          (S.title = O(e, t)[1]),
          (b = R(e, t)[0]),
          (E = R(e, t)[1])
      var A = R(e, t)[2],
        T = document.createElement('div'),
        C = document.createElement('div'),
        I = document.createElement('div'),
        B = document.createElement('div'),
        N = document.createElement('div'),
        k = document.createElement('div')
      if (
        (T.classList.add('product'),
          T.classList.add('product--dynamic'),
          C.classList.add('product__block'),
          I.classList.add('product__img'),
          B.classList.add('product__text'),
          N.classList.add('product__name'),
          k.classList.add('product__price'),
          I.appendChild(v),
          i && I.appendChild(h),
          N.appendChild(b),
          A)
      )
        k.appendChild(E)
      else {
        var M = document.createElement('span')
          ; (M.innerHTML = '$'), k.appendChild(M), k.appendChild(E)
      }
      if (
        (B.appendChild(N),
          B.appendChild(k),
          C.appendChild(I),
          C.appendChild(B),
          S.appendChild(C),
          T.appendChild(S),
          g.appendChild(T),
          r)
      )
        return g
      return (
        v.addEventListener('error', function () {
          g.style.display = 'none'
        }),
        g
      )
    }
    Array.apply(null, document.querySelectorAll('.js--changeLink')).forEach(
      function (e) {
        var t = c(
          960,
          'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FTaskActivity&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86',
          'https://www.etmall.com.tw/member/taskActivity',
          'https://m.etmall.com.tw/member/taskActivity'
        )
        e.href = t
      }
    )
    function Y(e, t, n) {
      var r = new Date(e),
        a = new Date(e).getTime(),
        o = [],
        i = 0
      for (n = n || 1; i < t;) {
        var l = r.setTime(a + parseInt(i * n * 24 * 60 * 60 * 1e3))
        o.push(new Date(l)), i++
      }
      return o
    }
    function V(e, t, n, r, a) {
      if (!e) return !1
      var o = !1,
        i = 0
      n = n || 1e3
      if (Array.isArray(r)) {
        if (
          ('string' === (r[0], !1) &&
            console.error('請輸入window的物件名稱(string)'),
            'function' == typeof r[1])
        )
          var l = r[1]
        var s = r[2] || !1
        o = !0
      }
      var c = K(function () {
        o &&
          ((window[r[0]] = (function (e, t) {
            var n = new Date().getTime(),
              r = new Date(e).getTime(),
              a = ((t = t || !1), r - n),
              o = Math.floor(a / 10),
              i = Math.floor(a / 1e3),
              l = Math.floor(i / 60),
              s = Math.floor(l / 60),
              c = Math.floor(s / 24)
              ; (s %= 24), (l %= 60), (i %= 60), (o %= 100), t || (s += 24 * c)
            return a <= 0
              ? {
                day: '00',
                dayTens: '0',
                dayUnits: '0',
                hour: '00',
                hourTens: '0',
                hourUnits: '0',
                min: '00',
                minTens: '0',
                minUnits: '0',
                sec: '00',
                secTens: '0',
                secUnits: '0',
                micro: '00',
                microTens: '0',
                microUnits: '0'
              }
              : isNaN(a)
                ? console.error('countDownTime is NaN，找不到目標時間')
                : {
                  day: c < 10 ? '0' + c : c.toString(),
                  dayTens: parseInt((c % 100) / 10).toString(),
                  dayUnits: parseInt(c % 10).toString(),
                  hour: s < 10 ? '0' + s : s.toString(),
                  hourTens: parseInt((s % 100) / 10).toString(),
                  hourUnits: parseInt(s % 10).toString(),
                  min: l < 10 ? '0' + l : l.toString(),
                  minTens: parseInt((l % 100) / 10).toString(),
                  minUnits: parseInt(l % 10).toString(),
                  sec: i < 10 ? '0' + i : i.toString(),
                  secTens: parseInt((i % 100) / 10).toString(),
                  secUnits: parseInt(i % 10).toString(),
                  micro: o < 10 ? '0' + o : o.toString(),
                  microTens: parseInt((o % 100) / 10).toString(),
                  microUnits: parseInt(o % 10).toString()
                }
          })(e[i], s)),
            'function' == typeof l && l()),
          (function () {
            var n = new Date().getTime()
            if (new Date(e[i]).getTime() - n <= 0) {
              if ('function' == typeof t) t(i)
              else if (Array.isArray(t))
                for (var r = t.length, a = 0; r > 0;) t[a](i), a++, r--
              i++
            }
          })(),
          i > e.length - 1 && (a && a(), clearInterval(c))
      }, n)
    }
    function K(e, t) {
      var n,
        r = 1,
        a = ((t = t || 1e3), (e = e || void 0), new Date().getTime())
      return (
        (function o(i) {
          var l = setTimeout(function () {
            var n = new Date().getTime() - (a + r * t)
            'function' == typeof e
              ? e()
              : void 0 !== e && console.error('callback不是函數'),
              r++,
              o(t - n)
          }, i)
          return (n = l)
        })(t),
        n
      )
    }
    var F = {
      oneDay: Y('2023/06/25 00:00', 27),
      oneDayNine: Y('2023/06/25 09:00', 27)
    }
    function G(e, t, n) {
      n = n || 'active'
      e.forEach(function (e) {
        e.classList.remove(n)
      }),
        e[t].classList.add(n)
    }
    var J, Q, Z, ee, te
      ; (ee = F.oneDay),
        (te = new Date()),
        ee.forEach(function (e, t, n) {
          if (te < e) return !1
          if (t != n.length - 1) {
            if (!(te < n[t + 1])) return !1
            re(t), ae(t)
          } else re(t), ae(t)
        }),
        (J = document.getElementById('decorDynamicSliderLeft')),
        (Q = document.getElementById('titleDynamicSlider')),
        (Z = document.getElementById('decorDynamicSliderRight')),
        window.addEventListener('scroll', function () {
          var e = f(J, 0, 0.45),
            t = f(Q, 0, 0.3),
            n = f(Z, 0, 0.45),
            r = 250 + -250 * e,
            a = 250 + -250 * n,
            o = 1 * e,
            i = 1 * t,
            l = 1 * n
            ; (J.style.transform =
              'translateX(' +
              r / 2 +
              '%) translateY(' +
              r / 5 +
              '%) scale(' +
              o +
              ')'),
              (Q.style.transform = 'scale(' + i + ')'),
              (Z.style.transform =
                'translateX(-' +
                a +
                '%) translateY(' +
                a / 2.5 +
                '%) scale(' +
                l +
                ')'),
              (J.style.opacity = o),
              (Q.style.opacity = i),
              (Z.style.opacity = l),
              1 === e
                ? (J.classList.add('active'), Z.classList.add('active'))
                : (J.classList.remove('active'), Z.classList.remove('active'))
        })
    function ne(e) {
      ; (e = e || 0),
        new I.a('#dynamicSliderSection', {
          grabCursor: !0,
          init: s('#dynamicSliderSection', 3),
          initialSlide: e + 1,
          lazy: { loadPrevNext: !0 },
          centeredSlides: !0,
          slidesPerView: 3,
          spaceBetween: '1.5%',
          speed: 600,
          watchSlidesProgress: !0,
          watchSlidesVisibility: !0
        })
    }
    function re(e) {
      e = e || 0
      var t = document.querySelector('#dynamicSliderSection .swiper-wrapper'),
        n = new Date('2023/06/25 00:00'),
        r = n.getMonth() + 1,
        a = n.getDate()
      dataDynamicSlider.forEach(function (e) {
        var n = document.createElement('div'),
          o = document.createElement('div'),
          i = document.createElement('div')
        o.classList.add('date__month'),
          i.classList.add('date__number'),
          n.classList.add('date__item'),
          n.classList.add('date__item--daily'),
          (o.innerHTML = r + '/'),
          (i.innerHTML = a),
          a++,
          n.appendChild(o),
          n.appendChild(i)
        var l = U(e)
        l.appendChild(n), t.appendChild(l)
      }),
        o(
          window.addEventListener('load', function () {
            ne(e)
          }),
          function () {
            ne(e)
          }
        )
    }
    function ae(e) {
      Array.apply(null, document.querySelectorAll('.product--dynamic'))[
        e
      ].classList.add('today')
    }
    function oe(e, t, n) {
      ; (e = e || {}), (t = t || {})
      if (Array.isArray(n))
        var r = n[0] ? n[0] : 'productNumber',
          a = n[1] ? n[1] : 'webLink',
          o = n[2] ? n[2] : 'mobileLink',
          i = n[3] ? n[3] : 'appLink',
          l = n[4] ? n[4] : 'linkTitle'
      else
        (r = 'productNumber'),
          (a = 'webLink'),
          (o = 'mobileLink'),
          (i = 'appLink'),
          (l = 'linkTitle')
      if (e.hasOwnProperty(r) && 'number' == typeof e[r])
        var s = 'https://www.etmall.com.tw/i/' + e[r],
          d = 'https://m.etmall.com.tw/Product/' + e[r],
          u = 'etmall://open?pgid=1&gd=' + e[r]
      else
        (s = e[a] ? e[a] : 'javascript:void(0)'),
          (d = e[o] ? e[o] : 'javascript:void(0)'),
          (u = e[i] ? e[i] : 'javascript:void(0)')
          ; (t.href = c(960, u, s, d)), e.hasOwnProperty(l) && (t.title = e[l])
    }
    function ie(e, t, n, r) {
      ; (e = e || {}), (t = t || !1)
      if (Array.isArray(n)) {
        var a = n[2] ? n[2] : 'name',
          o = n[3] ? n[3] : 'price',
          i = n[4] ? n[4] : 'text',
          s = n[5] ? n[5] : 'swiper-slide'
        if (t)
          var c = n[6] ? n[6] : 'swiper-lazy',
            d = n[7] ? n[7][0] : 'swiper-lazy-preloader',
            u = n[7] ? n[7][1] : 'swiper-lazy-preloader-black'
      } else {
        ; (a = 'name'), (o = 'price'), (i = 'text'), (s = 'swiper-slide')
        if (t)
          (c = 'swiper-lazy'),
            (d = 'swiper-lazy-preloader'),
            (u = 'swiper-lazy-preloader-black')
      }
      r = r || [, , , , 'name']
      if (e.hasOwnProperty(i) && !e.hasOwnProperty(o)) var m = !0
      var p = document.createElement('li'),
        f = document.createElement('a'),
        y = document.createElement('img'),
        v = document.createElement('span'),
        h = document.createElement('span')
      oe(e, f, r),
        (function (e, t, n, r, a) {
          if (((e = e || {}), (t = t || {}), (n = n || !1), Array.isArray(a))) {
            var o = a[0] ? a[0] : 'productNumber',
              i = a[1] ? a[1] : 'imgSrc'
            if (!n) var s = a[2] ? a[2] : 'imgAlt'
          } else {
            ; (o = 'productNumber'), (i = 'imgSrc')
            if (!n) s = 'name'
          }
          if (Array.isArray(r))
            var c = r[0] ? r[0] : 768,
              d = r[1] ? r[1] : 'XL',
              u = r[2] ? r[2] : 'L'
          else (c = 768), (d = 'XL'), (u = 'L')
          if (
            e.hasOwnProperty(o) &&
            'number' == typeof e[o] &&
            !e.hasOwnProperty(i)
          )
            var m = '-1_' + (l(c) ? d : u) + '.jpg',
              p = e[o],
              f =
                'https://media.etmall.com.tw/NXimg/00' +
                p.toString().slice(0, 4) +
                '/' +
                p +
                '/' +
                p +
                m
          else if (e.hasOwnProperty(i)) f = e[i]
          else console.error('未指定銷售編號或是圖片來源')
          n
            ? (t.dataset.src = f)
            : ((t.src = f), e.hasOwnProperty(s) && (t.alt = e[s]))
        })(e, y, t),
        t && y.classList.add(c),
        (v.innerHTML = e[a]),
        (h.innerHTML = m
          ? e[i]
          : Number.prototype.toLocaleString
            ? isNaN(Number(e[o]))
              ? e[o]
              : Number(e[o]).toLocaleString()
            : e[o]),
        p.classList.add(s)
      var g = document.createElement('div'),
        w = document.createElement('div'),
        L = document.createElement('div'),
        b = document.createElement('div')
      if (
        (g.classList.add('product'),
          g.classList.add('product--dynamic'),
          w.classList.add('product__img'),
          L.classList.add('product__name'),
          b.classList.add('product__price'),
          w.appendChild(y),
          L.appendChild(v),
          (b.innerHTML = m ? '<span></span>' : '<span>$</span>'),
          b.appendChild(h),
          t)
      ) {
        var E = document.createElement('div')
        E.classList.add(d), E.classList.add(u), w.appendChild(E)
      }
      if (
        (f.appendChild(w),
          f.appendChild(L),
          f.appendChild(b),
          g.appendChild(f),
          p.appendChild(g),
          t)
      )
        return p
      return (
        y.addEventListener('error', function () {
          p.style.display = 'none'
        }),
        p
      )
    }
    var le, se, ce, de
      ; (function () {
        var e = document.getElementById('tabBox'),
          t = Array.apply(null, e.querySelectorAll('.tab__item')),
          n = document.getElementById('tabContentBlock'),
          r = Array.apply(null, n.querySelectorAll('.content__box'))
        if (t.length !== r.length)
          return console.error('Tab Item數量與Content Box數量不符'), !1
            ; (function () {
              if (
                !(
                  dataTab1 &&
                  dataTab2 &&
                  dataTab3 &&
                  dataTab4 &&
                  dataTab5 &&
                  dataTab6
                )
              )
                return !1
              var e = [dataTab1, dataTab2, dataTab3, dataTab4, dataTab5, dataTab6]
              Array.apply(
                null,
                document.querySelectorAll('#tabContentBlock .item__wrap')
              ).forEach(function (t, n) {
                e[n].forEach(function (e) {
                  var n = ie(e)
                  t.appendChild(n)
                })
              })
            })(),
              t.forEach(function (e, n) {
                e.addEventListener('click', function () {
                  ue(t, n), ue(r, n)
                })
              })
      })(),
        (le = document.getElementById('decorTabSectionSwan')),
        (se = document.getElementById('decorTabSectionLeft')),
        (ce = document.getElementById('decorTabSectionRight')),
        (de = document.getElementById('decorTabSectionBall')),
        window.addEventListener('scroll', function () {
          var e = f(le, 0, 0.5),
            t = 100 + -100 * e,
            n = 1 * e
            ; (le.style.transform =
              ' translateX(' +
              t +
              '%) translateY(' +
              t / 5 +
              '%) scale(' +
              n +
              ')'),
              (le.style.opacity = n),
              (se.style.transform =
                ' translateX(' +
                t +
                '%) translateY(' +
                t / 5 +
                '%) scale(' +
                n +
                ')'),
              (se.style.opacity = n),
              (ce.style.transform =
                ' translateX(-' +
                t +
                '%) translateY(' +
                t / 5 +
                '%) scale(' +
                n +
                ')'),
              (ce.style.opacity = n),
              (de.style.transform =
                ' translateX(-' +
                t +
                '%) translateY(' +
                t / 5 +
                '%) scale(' +
                n +
                ')'),
              (de.style.opacity = n),
              1 === e
                ? (le.classList.add('active'),
                  se.classList.add('active'),
                  ce.classList.add('active'),
                  de.classList.add('active'))
                : (le.classList.remove('active'),
                  se.classList.remove('active'),
                  ce.classList.remove('active'),
                  de.classList.remove('active'))
        })
    function ue(e, t) {
      e.forEach(function (e) {
        e.classList.remove('active')
      }),
        e[t].classList.add('active')
    }
    setInterval(function () {
      var e, t, n, r
        ; (e = Array.apply(null, document.querySelectorAll('#w3m3Wrap a'))),
          (n = N(
            (t = ['active', 'active']).length,
            'siblingRandomCheckW3M3AnimationIndex'
          )),
          (r = N(e.length)),
          e.forEach(function (e) {
            t.forEach(function (t) {
              e.classList.remove(t)
            })
          }),
          e[r].classList.add(t[n])
    }, 4500),
      (function () {
        document.getElementById('decorEventW3M3right')
        var e = document.getElementById('titleEventW3m3')
        window.addEventListener('scroll', function () {
          var t = f(e, 0, 0.5),
            n = 1 * t
          e.style.transform = ' scale(' + n + ')'
        })
      })()
    var me, pe
    o(window.addEventListener('load', fe), fe),
      (me = document.getElementById('decorBnSlider')),
      (pe = document.getElementById('decorBnSlider2')),
      window.addEventListener('scroll', function () {
        var e = f(me, 0, 0.5),
          t = 100 + -100 * e
          ; (me.style.transform = 'translateY(' + t + '%)'),
            (pe.style.transform = 'translateY(' + t + '%)'),
            (me.style.transformOrigin = 'bottom'),
            (pe.style.transformOrigin = 'bottom'),
            1 === e
              ? (me.classList.add('active'), pe.classList.add('active'))
              : (me.classList.remove('active'), pe.classList.remove('active'))
      })
    function fe() {
      return new I.a('#sliderBn', {
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        grabCursor: !0,
        initialSlide: Math.floor(
          Math.random() *
          document.querySelectorAll('#sliderBn .swiper-slide').length
        ),
        lazy: { loadPrevNext: !0 },
        loop: !0,
        pagination: { el: '#sliderBnPager', type: 'bullets', clickable: !0 },
        slidesPerView: 3,
        spaceBetween: '1%',
        speed: 600
      })
    }
    var ye = function () {
      e = setInterval(function () {
        'undefined' != typeof finalCard &&
          (clearInterval(e),
            (function (e) {
              var t = finalCard
              console.log(t)
              var n = document.getElementById('popUpWrap'),
                r = new Date().getTime(),
                a = n.querySelector('a'),
                o = n.querySelector('img')
              t[0].s
                ? (o.src = t[0].s + '.png?' + r)
                : (o.src = t[0].i + '.png?' + r),
                t[0].c && (a.dataset.copy = t[0].c),
                oe(t[0], a, ['n', 'w', 'm', 'a']),
                'function' == typeof e && e()
            })())
      }, 100)
      var e
    }
    var ve, he, ge, we, Le, be, Ee
      ; (ve = 0),
        (he = Math.floor(Se(2, 5))),
        (ge = Math.floor(Se(2, 5))),
        (we = Math.floor(Se(5, 10))),
        (Le = he + ge),
        (be = Le + we),
        (Ee = document.getElementById('snowManWrap')),
        Ee.addEventListener('click', function () {
          ve++
          var e = Array.apply(null, document.querySelectorAll('.snow-man'))
          ve == he
            ? (e[0].classList.add('hide'), e[1].classList.remove('hide'))
            : ve == Le
              ? (e[1].classList.add('hide'), e[2].classList.remove('hide'))
              : ve == be
                ? (e[2].classList.add('hide'),
                  e[3].classList.remove('hide'),
                  ye(),
                  setTimeout(function () {
                    var e, t
                      ; (e = document.querySelector('#popUpWrap')),
                        (t = document.querySelector('#popUpWrap a')),
                        e.classList.add('active'),
                        t.classList.add('disabled')
                  }, 500))
                : (Ee.classList.add('shakeX'),
                  setTimeout(function () {
                    Ee.classList.remove('shakeX')
                  }, 100))
        })
    function Se(e, t) {
      return Math.random() * (t - e) + e
    }
    var Ae, Te
    new I.a('#promoSliderSecItem', {
      autoplay: { delay: 2200, disableOnInteraction: !1 },
      initialSlide: Math.floor(
        Math.random() *
        document.querySelectorAll('#promoSliderItem .swiper-slide').length
      ),
      centeredSlides: !0,
      lazy: { loadPrevNext: !0 },
      loop: !0,
      perspective: !0,
      slidesPerView: 3,
      speed: 600,
      watchSlidesProgress: !0,
      watchSlidesVisibility: !0
    }),
      (Ae = document.getElementById('promoSliderSecLeft')),
      (Te = document.getElementById('promoSliderSecRight')),
      window.addEventListener('scroll', function () {
        var e = f(Ae, 0, 0.6),
          t = 100 + -100 * e,
          n = 1 * e
          ; (Ae.style.transform = 'translateX(' + t / 2 + '%) scale(' + n + ')'),
            (Te.style.transform = 'translateX(-' + t + '%) scale(' + n + ')'),
            1 === e
              ? (Ae.classList.add('active'), Te.classList.add('active'))
              : (Ae.classList.remove('active'), Te.classList.remove('active'))
      })
    new I.a('#promoSliderItem2', {
      autoplay: { delay: 2e3, disableOnInteraction: !1 },
      grabCursor: !0,
      centeredSlides: !0,
      slidesPerView: 'auto',
      initialSlide: Math.floor(
        Math.random() *
        document.querySelectorAll('#promoSliderItem2 .swiper-slide').length
      ),
      lazy: { loadPrevNext: !0 },
      loop: !0,
      perspective: !0,
      slidesPerView: 1,
      spaceBetween: '1%',
      speed: 600,
      watchSlidesProgress: !0,
      watchSlidesVisibility: !0
    }),
      (function () {
        var e = document.getElementById('decorPromoSliderItem'),
          t = document.getElementById('titlePromoSlider2')
        window.addEventListener('scroll', function () {
          var n = f(t, 0, 0.5),
            r = 100 + -100 * n,
            a = 1 * n
            ; (e.style.transform = 'translateX(' + r + '%) scale(' + a + ')'),
              (t.style.transform = ' scale(' + a + ')'),
              1 === n
                ? (e.classList.add('active'), t.classList.add('active'))
                : (e.classList.remove('active'), t.classList.remove('active'))
        })
      })()
      ; (function () {
        if (!dataDailyTime) return !1
        V(F.oneDayNine, [Ce], 100)
      })(),
        K(function () {
          var e = new Date().getHours(),
            t = Array.apply(null, document.querySelectorAll('.product__time'))
          G(t, e >= 9 && e < 15 ? 0 : e >= 15 && e < 22 ? 1 : 2)
        }, 1e3)
    function Ce(e) {
      for (
        var t = document.querySelector('#dailyTime .product__wrap');
        t.firstChild;

      )
        t.removeChild(t.firstChild)
      dataDailyTime[e].forEach(function (e, n) {
        var r = U(e, { outerTag: 'div', isSlider: !1 })
        !(function (e) {
          var t = document.createElement('div')
          t.classList.add('product__time'), e.insertBefore(t, e.firstChild)
        })(r),
          t.appendChild(r)
      })
    }
    document.body.classList.add('js-loading'), new a.a().init()
    document.getElementById('decorBgTop'),
      document.getElementById('decorBgBottom')
    document.addEventListener('scroll', function () {
      window.scrollY >= 250
        ? document.body.classList.add('bg-fixed')
        : document.body.classList.remove('bg-fixed')
    }),
      document.addEventListener('scroll', function () {
        var e = document.querySelector('.bg-web--top')
        window.scrollY >= 250
          ? e.classList.add('bg-fixed')
          : e.classList.remove('bg-fixed')
      })
  }
])
