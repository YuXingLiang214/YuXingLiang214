import {
  a as w,
  a9 as V,
  bU as $,
  ax as N,
  v as E,
  bG as P,
  aa as g,
  d as O,
  ab as z,
  e as R,
  ac as j,
  T as G,
  a7 as x,
  aB as Z,
  Z as _,
  G as A,
  bt as b,
  a6 as L,
  ah as I,
  i as q,
  bV as D
} from './index-fa93e99f.js'
function F(t) {
  let e
  const l = w(!1),
    n = V({ ...t, originalPosition: '', originalOverflow: '', visible: !1 })
  function a(s) {
    n.text = s
  }
  function o() {
    const s = n.parent,
      r = d.ns
    if (!s.vLoadingAddClassList) {
      let c = s.getAttribute('loading-number')
      ;(c = Number.parseInt(c) - 1),
        c
          ? s.setAttribute('loading-number', c.toString())
          : (x(s, r.bm('parent', 'relative')),
            s.removeAttribute('loading-number')),
        x(s, r.bm('parent', 'hidden'))
    }
    i(), m.unmount()
  }
  function i() {
    var s, r
    ;(r = (s = d.$el) == null ? void 0 : s.parentNode) == null ||
      r.removeChild(d.$el)
  }
  function v() {
    var s
    ;(t.beforeClose && !t.beforeClose()) ||
      ((l.value = !0),
      clearTimeout(e),
      (e = window.setTimeout(f, 400)),
      (n.visible = !1),
      (s = t.closed) == null || s.call(t))
  }
  function f() {
    if (!l.value) return
    const s = n.parent
    ;(l.value = !1), (s.vLoadingAddClassList = void 0), o()
  }
  const u = E({
      name: 'ElLoading',
      setup(s, { expose: r }) {
        const { ns: c, zIndex: B } = P('loading')
        return (
          r({ ns: c, zIndex: B }),
          () => {
            const C = n.spinner || n.svg,
              S = g(
                'svg',
                {
                  class: 'circular',
                  viewBox: n.svgViewBox ? n.svgViewBox : '0 0 50 50',
                  ...(C ? { innerHTML: C } : {})
                },
                [
                  g('circle', {
                    class: 'path',
                    cx: '25',
                    cy: '25',
                    r: '20',
                    fill: 'none'
                  })
                ]
              ),
              T = n.text ? g('p', { class: c.b('text') }, [n.text]) : void 0
            return g(
              G,
              { name: c.b('fade'), onAfterLeave: f },
              {
                default: O(() => [
                  z(
                    R(
                      'div',
                      {
                        style: { backgroundColor: n.background || '' },
                        class: [
                          c.b('mask'),
                          n.customClass,
                          n.fullscreen ? 'is-fullscreen' : ''
                        ]
                      },
                      [g('div', { class: c.b('spinner') }, [S, T])]
                    ),
                    [[j, n.visible]]
                  )
                ])
              }
            )
          }
        )
      }
    }),
    m = $(u),
    d = m.mount(document.createElement('div'))
  return {
    ...N(n),
    setText: a,
    removeElLoadingChild: i,
    close: v,
    handleAfterLeave: f,
    vm: d,
    get $el() {
      return d.$el
    }
  }
}
let p
const H = function (t = {}) {
    if (!Z) return
    const e = K(t)
    if (e.fullscreen && p) return p
    const l = F({
      ...e,
      closed: () => {
        var a
        ;(a = e.closed) == null || a.call(e), e.fullscreen && (p = void 0)
      }
    })
    M(e, e.parent, l),
      h(e, e.parent, l),
      (e.parent.vLoadingAddClassList = () => h(e, e.parent, l))
    let n = e.parent.getAttribute('loading-number')
    return (
      n ? (n = `${Number.parseInt(n) + 1}`) : (n = '1'),
      e.parent.setAttribute('loading-number', n),
      e.parent.appendChild(l.$el),
      _(() => (l.visible.value = e.visible)),
      e.fullscreen && (p = l),
      l
    )
  },
  K = (t) => {
    var e, l, n, a
    let o
    return (
      A(t.target)
        ? (o =
            (e = document.querySelector(t.target)) != null ? e : document.body)
        : (o = t.target || document.body),
      {
        parent: o === document.body || t.body ? document.body : o,
        background: t.background || '',
        svg: t.svg || '',
        svgViewBox: t.svgViewBox || '',
        spinner: t.spinner || !1,
        text: t.text || '',
        fullscreen:
          o === document.body && ((l = t.fullscreen) != null ? l : !0),
        lock: (n = t.lock) != null ? n : !1,
        customClass: t.customClass || '',
        visible: (a = t.visible) != null ? a : !0,
        target: o
      }
    )
  },
  M = async (t, e, l) => {
    const { nextZIndex: n } = l.vm.zIndex || l.vm._.exposed.zIndex,
      a = {}
    if (t.fullscreen)
      (l.originalPosition.value = b(document.body, 'position')),
        (l.originalOverflow.value = b(document.body, 'overflow')),
        (a.zIndex = n())
    else if (t.parent === document.body) {
      ;(l.originalPosition.value = b(document.body, 'position')), await _()
      for (const o of ['top', 'left']) {
        const i = o === 'top' ? 'scrollTop' : 'scrollLeft'
        a[o] = `${
          t.target.getBoundingClientRect()[o] +
          document.body[i] +
          document.documentElement[i] -
          Number.parseInt(b(document.body, `margin-${o}`), 10)
        }px`
      }
      for (const o of ['height', 'width'])
        a[o] = `${t.target.getBoundingClientRect()[o]}px`
    } else l.originalPosition.value = b(e, 'position')
    for (const [o, i] of Object.entries(a)) l.$el.style[o] = i
  },
  h = (t, e, l) => {
    const n = l.vm.ns || l.vm._.exposed.ns
    ;['absolute', 'fixed', 'sticky'].includes(l.originalPosition.value)
      ? x(e, n.bm('parent', 'relative'))
      : L(e, n.bm('parent', 'relative')),
      t.fullscreen && t.lock
        ? L(e, n.bm('parent', 'hidden'))
        : x(e, n.bm('parent', 'hidden'))
  },
  y = Symbol('ElLoading'),
  k = (t, e) => {
    var l, n, a, o
    const i = e.instance,
      v = (s) => (I(e.value) ? e.value[s] : void 0),
      f = (s) => {
        const r = (A(s) && (i == null ? void 0 : i[s])) || s
        return r && w(r)
      },
      u = (s) => f(v(s) || t.getAttribute(`element-loading-${D(s)}`)),
      m = (l = v('fullscreen')) != null ? l : e.modifiers.fullscreen,
      d = {
        text: u('text'),
        svg: u('svg'),
        svgViewBox: u('svgViewBox'),
        spinner: u('spinner'),
        background: u('background'),
        customClass: u('customClass'),
        fullscreen: m,
        target: (n = v('target')) != null ? n : m ? void 0 : t,
        body: (a = v('body')) != null ? a : e.modifiers.body,
        lock: (o = v('lock')) != null ? o : e.modifiers.lock
      }
    t[y] = { options: d, instance: H(d) }
  },
  U = (t, e) => {
    for (const l of Object.keys(e)) q(e[l]) && (e[l].value = t[l])
  },
  J = {
    mounted(t, e) {
      e.value && k(t, e)
    },
    updated(t, e) {
      const l = t[y]
      e.oldValue !== e.value &&
        (e.value && !e.oldValue
          ? k(t, e)
          : e.value && e.oldValue
          ? I(e.value) && U(e.value, l.options)
          : l == null || l.instance.close())
    },
    unmounted(t) {
      var e
      ;(e = t[y]) == null || e.instance.close()
    }
  }
export { J as v }
