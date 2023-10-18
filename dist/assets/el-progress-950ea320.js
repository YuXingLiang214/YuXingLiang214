import {
  m as K,
  t as b,
  v as j,
  x as q,
  y as L,
  bK as Fe,
  bL as ce,
  aF as Le,
  bM as pe,
  at as fe,
  az as me,
  G as ee,
  o as h,
  z as E,
  F as g,
  f as e,
  h as N,
  A,
  D as R,
  ak as W,
  a2 as $,
  c as O,
  d as _,
  B as Re,
  C as I,
  _ as H,
  I as ve,
  bd as ye,
  af as Q,
  bx as S,
  a0 as _e,
  a as ge,
  a5 as Te,
  aI as Ue,
  aJ as he,
  a4 as z,
  e as B,
  bN as Oe,
  bO as De,
  aT as Be,
  bP as Ne,
  O as je,
  ay as Y,
  bQ as te,
  bR as Ae,
  bS as Ie,
  w as se,
  Q as Me,
  N as qe,
  U as ze,
  a1 as ae,
  J as oe
} from './index-fa93e99f.js'
import {
  t as x,
  i as be,
  e as V,
  d as Ke
} from './_plugin-vue_export-helper-3666fca8.js'
import { o as He } from './_baseClone-875524b2.js'
import { i as We } from './isEqual-21c5d1b8.js'
var Ve = 1,
  Ge = 4
function ne(a) {
  return He(a, Ve | Ge)
}
const Xe = K({
    type: {
      type: String,
      default: 'line',
      values: ['line', 'circle', 'dashboard']
    },
    percentage: {
      type: Number,
      default: 0,
      validator: (a) => a >= 0 && a <= 100
    },
    status: {
      type: String,
      default: '',
      values: ['', 'success', 'exception', 'warning']
    },
    indeterminate: { type: Boolean, default: !1 },
    duration: { type: Number, default: 3 },
    strokeWidth: { type: Number, default: 6 },
    strokeLinecap: { type: b(String), default: 'round' },
    textInside: { type: Boolean, default: !1 },
    width: { type: Number, default: 126 },
    showText: { type: Boolean, default: !0 },
    color: { type: b([String, Array, Function]), default: '' },
    striped: Boolean,
    stripedFlow: Boolean,
    format: { type: b(Function), default: (a) => `${a}%` }
  }),
  Je = ['aria-valuenow'],
  Qe = { viewBox: '0 0 100 100' },
  Ye = ['d', 'stroke', 'stroke-linecap', 'stroke-width'],
  Ze = ['d', 'stroke', 'opacity', 'stroke-linecap', 'stroke-width'],
  xe = { key: 0 },
  et = j({ name: 'ElProgress' }),
  tt = j({
    ...et,
    props: Xe,
    setup(a) {
      const t = a,
        s = {
          success: '#13ce66',
          exception: '#ff4949',
          warning: '#e6a23c',
          default: '#20a0ff'
        },
        o = q('progress'),
        f = L(() => ({
          width: `${t.percentage}%`,
          animationDuration: `${t.duration}s`,
          backgroundColor: P(t.percentage)
        })),
        v = L(() => ((t.strokeWidth / t.width) * 100).toFixed(1)),
        m = L(() =>
          ['circle', 'dashboard'].includes(t.type)
            ? Number.parseInt(`${50 - Number.parseFloat(v.value) / 2}`, 10)
            : 0
        ),
        C = L(() => {
          const r = m.value,
            F = t.type === 'dashboard'
          return `
          M 50 50
          m 0 ${F ? '' : '-'}${r}
          a ${r} ${r} 0 1 1 0 ${F ? '-' : ''}${r * 2}
          a ${r} ${r} 0 1 1 0 ${F ? '' : '-'}${r * 2}
          `
        }),
        k = L(() => 2 * Math.PI * m.value),
        c = L(() => (t.type === 'dashboard' ? 0.75 : 1)),
        w = L(() => `${(-1 * k.value * (1 - c.value)) / 2}px`),
        y = L(() => ({
          strokeDasharray: `${k.value * c.value}px, ${k.value}px`,
          strokeDashoffset: w.value
        })),
        l = L(() => ({
          strokeDasharray: `${k.value * c.value * (t.percentage / 100)}px, ${
            k.value
          }px`,
          strokeDashoffset: w.value,
          transition:
            'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s'
        })),
        u = L(() => {
          let r
          return (
            t.color ? (r = P(t.percentage)) : (r = s[t.status] || s.default), r
          )
        }),
        p = L(() =>
          t.status === 'warning'
            ? Fe
            : t.type === 'line'
            ? t.status === 'success'
              ? ce
              : Le
            : t.status === 'success'
            ? pe
            : fe
        ),
        n = L(() =>
          t.type === 'line' ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2
        ),
        d = L(() => t.format(t.percentage))
      function i(r) {
        const F = 100 / r.length
        return r
          .map((T, U) => (ee(T) ? { color: T, percentage: (U + 1) * F } : T))
          .sort((T, U) => T.percentage - U.percentage)
      }
      const P = (r) => {
        var F
        const { color: D } = t
        if (me(D)) return D(r)
        if (ee(D)) return D
        {
          const T = i(D)
          for (const U of T) if (U.percentage > r) return U.color
          return (F = T[T.length - 1]) == null ? void 0 : F.color
        }
      }
      return (r, F) => (
        h(),
        E(
          'div',
          {
            class: g([
              e(o).b(),
              e(o).m(r.type),
              e(o).is(r.status),
              {
                [e(o).m('without-text')]: !r.showText,
                [e(o).m('text-inside')]: r.textInside
              }
            ]),
            role: 'progressbar',
            'aria-valuenow': r.percentage,
            'aria-valuemin': '0',
            'aria-valuemax': '100'
          },
          [
            r.type === 'line'
              ? (h(),
                E(
                  'div',
                  { key: 0, class: g(e(o).b('bar')) },
                  [
                    N(
                      'div',
                      {
                        class: g(e(o).be('bar', 'outer')),
                        style: A({ height: `${r.strokeWidth}px` })
                      },
                      [
                        N(
                          'div',
                          {
                            class: g([
                              e(o).be('bar', 'inner'),
                              {
                                [e(o).bem('bar', 'inner', 'indeterminate')]:
                                  r.indeterminate
                              },
                              {
                                [e(o).bem('bar', 'inner', 'striped')]: r.striped
                              },
                              {
                                [e(o).bem('bar', 'inner', 'striped-flow')]:
                                  r.stripedFlow
                              }
                            ]),
                            style: A(e(f))
                          },
                          [
                            (r.showText || r.$slots.default) && r.textInside
                              ? (h(),
                                E(
                                  'div',
                                  {
                                    key: 0,
                                    class: g(e(o).be('bar', 'innerText'))
                                  },
                                  [
                                    R(
                                      r.$slots,
                                      'default',
                                      { percentage: r.percentage },
                                      () => [N('span', null, W(e(d)), 1)]
                                    )
                                  ],
                                  2
                                ))
                              : $('v-if', !0)
                          ],
                          6
                        )
                      ],
                      6
                    )
                  ],
                  2
                ))
              : (h(),
                E(
                  'div',
                  {
                    key: 1,
                    class: g(e(o).b('circle')),
                    style: A({ height: `${r.width}px`, width: `${r.width}px` })
                  },
                  [
                    (h(),
                    E('svg', Qe, [
                      N(
                        'path',
                        {
                          class: g(e(o).be('circle', 'track')),
                          d: e(C),
                          stroke: `var(${e(o).cssVarName(
                            'fill-color-light'
                          )}, #e5e9f2)`,
                          'stroke-linecap': r.strokeLinecap,
                          'stroke-width': e(v),
                          fill: 'none',
                          style: A(e(y))
                        },
                        null,
                        14,
                        Ye
                      ),
                      N(
                        'path',
                        {
                          class: g(e(o).be('circle', 'path')),
                          d: e(C),
                          stroke: e(u),
                          fill: 'none',
                          opacity: r.percentage ? 1 : 0,
                          'stroke-linecap': r.strokeLinecap,
                          'stroke-width': e(v),
                          style: A(e(l))
                        },
                        null,
                        14,
                        Ze
                      )
                    ]))
                  ],
                  6
                )),
            (r.showText || r.$slots.default) && !r.textInside
              ? (h(),
                E(
                  'div',
                  {
                    key: 2,
                    class: g(e(o).e('text')),
                    style: A({ fontSize: `${e(n)}px` })
                  },
                  [
                    R(r.$slots, 'default', { percentage: r.percentage }, () => [
                      r.status
                        ? (h(),
                          O(
                            e(I),
                            { key: 1 },
                            { default: _(() => [(h(), O(Re(e(p))))]), _: 1 }
                          ))
                        : (h(), E('span', xe, W(e(d)), 1))
                    ])
                  ],
                  6
                ))
              : $('v-if', !0)
          ],
          10,
          Je
        )
      )
    }
  })
var st = H(tt, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue'
  ]
])
const at = ve(st),
  ke = Symbol('uploadContextKey'),
  ot = 'ElUpload'
class nt extends Error {
  constructor(t, s, o, f) {
    super(t),
      (this.name = 'UploadAjaxError'),
      (this.status = s),
      (this.method = o),
      (this.url = f)
  }
}
function re(a, t, s) {
  let o
  return (
    s.response
      ? (o = `${s.response.error || s.response}`)
      : s.responseText
      ? (o = `${s.responseText}`)
      : (o = `fail to ${t.method} ${a} ${s.status}`),
    new nt(o, s.status, t.method, a)
  )
}
function rt(a) {
  const t = a.responseText || a.response
  if (!t) return t
  try {
    return JSON.parse(t)
  } catch {
    return t
  }
}
const lt = (a) => {
    typeof XMLHttpRequest > 'u' && x(ot, 'XMLHttpRequest is undefined')
    const t = new XMLHttpRequest(),
      s = a.action
    t.upload &&
      t.upload.addEventListener('progress', (v) => {
        const m = v
        ;(m.percent = v.total > 0 ? (v.loaded / v.total) * 100 : 0),
          a.onProgress(m)
      })
    const o = new FormData()
    if (a.data)
      for (const [v, m] of Object.entries(a.data))
        ye(m) && m.length ? o.append(v, ...m) : o.append(v, m)
    o.append(a.filename, a.file, a.file.name),
      t.addEventListener('error', () => {
        a.onError(re(s, a, t))
      }),
      t.addEventListener('load', () => {
        if (t.status < 200 || t.status >= 300) return a.onError(re(s, a, t))
        a.onSuccess(rt(t))
      }),
      t.open(a.method, s, !0),
      a.withCredentials && 'withCredentials' in t && (t.withCredentials = !0)
    const f = a.headers || {}
    if (f instanceof Headers) f.forEach((v, m) => t.setRequestHeader(m, v))
    else
      for (const [v, m] of Object.entries(f))
        be(m) || t.setRequestHeader(v, String(m))
    return t.send(o), t
  },
  $e = ['text', 'picture', 'picture-card']
let it = 1
const Z = () => Date.now() + it++,
  we = K({
    action: { type: String, default: '#' },
    headers: { type: b(Object) },
    method: { type: String, default: 'post' },
    data: { type: b([Object, Function, Promise]), default: () => Q({}) },
    multiple: { type: Boolean, default: !1 },
    name: { type: String, default: 'file' },
    drag: { type: Boolean, default: !1 },
    withCredentials: Boolean,
    showFileList: { type: Boolean, default: !0 },
    accept: { type: String, default: '' },
    type: { type: String, default: 'select' },
    fileList: { type: b(Array), default: () => Q([]) },
    autoUpload: { type: Boolean, default: !0 },
    listType: { type: String, values: $e, default: 'text' },
    httpRequest: { type: b(Function), default: lt },
    disabled: Boolean,
    limit: Number
  }),
  ut = K({
    ...we,
    beforeUpload: { type: b(Function), default: S },
    beforeRemove: { type: b(Function) },
    onRemove: { type: b(Function), default: S },
    onChange: { type: b(Function), default: S },
    onPreview: { type: b(Function), default: S },
    onSuccess: { type: b(Function), default: S },
    onProgress: { type: b(Function), default: S },
    onError: { type: b(Function), default: S },
    onExceed: { type: b(Function), default: S }
  }),
  dt = K({
    files: { type: b(Array), default: () => Q([]) },
    disabled: { type: Boolean, default: !1 },
    handlePreview: { type: b(Function), default: S },
    listType: { type: String, values: $e, default: 'text' }
  }),
  ct = { remove: (a) => !!a },
  pt = ['onKeydown'],
  ft = ['src'],
  mt = ['onClick'],
  vt = ['title'],
  yt = ['onClick'],
  gt = ['onClick'],
  ht = j({ name: 'ElUploadList' }),
  bt = j({
    ...ht,
    props: dt,
    emits: ct,
    setup(a, { emit: t }) {
      const { t: s } = _e(),
        o = q('upload'),
        f = q('icon'),
        v = q('list'),
        m = V(),
        C = ge(!1),
        k = (c) => {
          t('remove', c)
        }
      return (c, w) => (
        h(),
        O(
          Ne,
          {
            tag: 'ul',
            class: g([
              e(o).b('list'),
              e(o).bm('list', c.listType),
              e(o).is('disabled', e(m))
            ]),
            name: e(v).b()
          },
          {
            default: _(() => [
              (h(!0),
              E(
                Te,
                null,
                Ue(
                  c.files,
                  (y) => (
                    h(),
                    E(
                      'li',
                      {
                        key: y.uid || y.name,
                        class: g([
                          e(o).be('list', 'item'),
                          e(o).is(y.status),
                          { focusing: C.value }
                        ]),
                        tabindex: '0',
                        onKeydown: he((l) => !e(m) && k(y), ['delete']),
                        onFocus: w[0] || (w[0] = (l) => (C.value = !0)),
                        onBlur: w[1] || (w[1] = (l) => (C.value = !1)),
                        onClick: w[2] || (w[2] = (l) => (C.value = !1))
                      },
                      [
                        R(c.$slots, 'default', { file: y }, () => [
                          c.listType === 'picture' ||
                          (y.status !== 'uploading' &&
                            c.listType === 'picture-card')
                            ? (h(),
                              E(
                                'img',
                                {
                                  key: 0,
                                  class: g(e(o).be('list', 'item-thumbnail')),
                                  src: y.url,
                                  alt: ''
                                },
                                null,
                                10,
                                ft
                              ))
                            : $('v-if', !0),
                          y.status === 'uploading' ||
                          c.listType !== 'picture-card'
                            ? (h(),
                              E(
                                'div',
                                {
                                  key: 1,
                                  class: g(e(o).be('list', 'item-info'))
                                },
                                [
                                  N(
                                    'a',
                                    {
                                      class: g(e(o).be('list', 'item-name')),
                                      onClick: z(
                                        (l) => c.handlePreview(y),
                                        ['prevent']
                                      )
                                    },
                                    [
                                      B(
                                        e(I),
                                        { class: g(e(f).m('document')) },
                                        { default: _(() => [B(e(Oe))]), _: 1 },
                                        8,
                                        ['class']
                                      ),
                                      N(
                                        'span',
                                        {
                                          class: g(
                                            e(o).be('list', 'item-file-name')
                                          ),
                                          title: y.name
                                        },
                                        W(y.name),
                                        11,
                                        vt
                                      )
                                    ],
                                    10,
                                    mt
                                  ),
                                  y.status === 'uploading'
                                    ? (h(),
                                      O(
                                        e(at),
                                        {
                                          key: 0,
                                          type:
                                            c.listType === 'picture-card'
                                              ? 'circle'
                                              : 'line',
                                          'stroke-width':
                                            c.listType === 'picture-card'
                                              ? 6
                                              : 2,
                                          percentage: Number(y.percentage),
                                          style: A(
                                            c.listType === 'picture-card'
                                              ? ''
                                              : 'margin-top: 0.5rem'
                                          )
                                        },
                                        null,
                                        8,
                                        [
                                          'type',
                                          'stroke-width',
                                          'percentage',
                                          'style'
                                        ]
                                      ))
                                    : $('v-if', !0)
                                ],
                                2
                              ))
                            : $('v-if', !0),
                          N(
                            'label',
                            { class: g(e(o).be('list', 'item-status-label')) },
                            [
                              c.listType === 'text'
                                ? (h(),
                                  O(
                                    e(I),
                                    {
                                      key: 0,
                                      class: g([
                                        e(f).m('upload-success'),
                                        e(f).m('circle-check')
                                      ])
                                    },
                                    { default: _(() => [B(e(ce))]), _: 1 },
                                    8,
                                    ['class']
                                  ))
                                : ['picture-card', 'picture'].includes(
                                    c.listType
                                  )
                                ? (h(),
                                  O(
                                    e(I),
                                    {
                                      key: 1,
                                      class: g([
                                        e(f).m('upload-success'),
                                        e(f).m('check')
                                      ])
                                    },
                                    { default: _(() => [B(e(pe))]), _: 1 },
                                    8,
                                    ['class']
                                  ))
                                : $('v-if', !0)
                            ],
                            2
                          ),
                          e(m)
                            ? $('v-if', !0)
                            : (h(),
                              O(
                                e(I),
                                {
                                  key: 2,
                                  class: g(e(f).m('close')),
                                  onClick: (l) => k(y)
                                },
                                { default: _(() => [B(e(fe))]), _: 2 },
                                1032,
                                ['class', 'onClick']
                              )),
                          $(
                            ' Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn'
                          ),
                          $(' This is a bug which needs to be fixed '),
                          $(' TODO: Fix the incorrect navigation interaction '),
                          e(m)
                            ? $('v-if', !0)
                            : (h(),
                              E(
                                'i',
                                { key: 3, class: g(e(f).m('close-tip')) },
                                W(e(s)('el.upload.deleteTip')),
                                3
                              )),
                          c.listType === 'picture-card'
                            ? (h(),
                              E(
                                'span',
                                {
                                  key: 4,
                                  class: g(e(o).be('list', 'item-actions'))
                                },
                                [
                                  N(
                                    'span',
                                    {
                                      class: g(e(o).be('list', 'item-preview')),
                                      onClick: (l) => c.handlePreview(y)
                                    },
                                    [
                                      B(
                                        e(I),
                                        { class: g(e(f).m('zoom-in')) },
                                        { default: _(() => [B(e(De))]), _: 1 },
                                        8,
                                        ['class']
                                      )
                                    ],
                                    10,
                                    yt
                                  ),
                                  e(m)
                                    ? $('v-if', !0)
                                    : (h(),
                                      E(
                                        'span',
                                        {
                                          key: 0,
                                          class: g(
                                            e(o).be('list', 'item-delete')
                                          ),
                                          onClick: (l) => k(y)
                                        },
                                        [
                                          B(
                                            e(I),
                                            { class: g(e(f).m('delete')) },
                                            {
                                              default: _(() => [B(e(Be))]),
                                              _: 1
                                            },
                                            8,
                                            ['class']
                                          )
                                        ],
                                        10,
                                        gt
                                      ))
                                ],
                                2
                              ))
                            : $('v-if', !0)
                        ])
                      ],
                      42,
                      pt
                    )
                  )
                ),
                128
              )),
              R(c.$slots, 'append')
            ]),
            _: 3
          },
          8,
          ['class', 'name']
        )
      )
    }
  })
var le = H(bt, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue'
  ]
])
const kt = K({ disabled: { type: Boolean, default: !1 } }),
  $t = { file: (a) => ye(a) },
  wt = ['onDrop', 'onDragover'],
  Ee = 'ElUploadDrag',
  Et = j({ name: Ee }),
  Ct = j({
    ...Et,
    props: kt,
    emits: $t,
    setup(a, { emit: t }) {
      const s = je(ke)
      s || x(Ee, 'usage: <el-upload><el-upload-dragger /></el-upload>')
      const o = q('upload'),
        f = ge(!1),
        v = V(),
        m = (k) => {
          if (v.value) return
          ;(f.value = !1), k.stopPropagation()
          const c = Array.from(k.dataTransfer.files),
            w = s.accept.value
          if (!w) {
            t('file', c)
            return
          }
          const y = c.filter((l) => {
            const { type: u, name: p } = l,
              n = p.includes('.') ? `.${p.split('.').pop()}` : '',
              d = u.replace(/\/.*$/, '')
            return w
              .split(',')
              .map((i) => i.trim())
              .filter((i) => i)
              .some((i) =>
                i.startsWith('.')
                  ? n === i
                  : /\/\*$/.test(i)
                  ? d === i.replace(/\/\*$/, '')
                  : /^[^/]+\/[^/]+$/.test(i)
                  ? u === i
                  : !1
              )
          })
          t('file', y)
        },
        C = () => {
          v.value || (f.value = !0)
        }
      return (k, c) => (
        h(),
        E(
          'div',
          {
            class: g([e(o).b('dragger'), e(o).is('dragover', f.value)]),
            onDrop: z(m, ['prevent']),
            onDragover: z(C, ['prevent']),
            onDragleave: c[0] || (c[0] = z((w) => (f.value = !1), ['prevent']))
          },
          [R(k.$slots, 'default')],
          42,
          wt
        )
      )
    }
  })
var St = H(Ct, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue'
  ]
])
const Pt = K({
    ...we,
    beforeUpload: { type: b(Function), default: S },
    onRemove: { type: b(Function), default: S },
    onStart: { type: b(Function), default: S },
    onSuccess: { type: b(Function), default: S },
    onProgress: { type: b(Function), default: S },
    onError: { type: b(Function), default: S },
    onExceed: { type: b(Function), default: S }
  }),
  Ft = ['onKeydown'],
  Lt = ['name', 'multiple', 'accept'],
  Rt = j({ name: 'ElUploadContent', inheritAttrs: !1 }),
  _t = j({
    ...Rt,
    props: Pt,
    setup(a, { expose: t }) {
      const s = a,
        o = q('upload'),
        f = V(),
        v = Y({}),
        m = Y(),
        C = (n) => {
          if (n.length === 0) return
          const {
            autoUpload: d,
            limit: i,
            fileList: P,
            multiple: r,
            onStart: F,
            onExceed: D
          } = s
          if (i && P.length + n.length > i) {
            D(n, P)
            return
          }
          r || (n = n.slice(0, 1))
          for (const T of n) {
            const U = T
            ;(U.uid = Z()), F(U), d && k(U)
          }
        },
        k = async (n) => {
          if (((m.value.value = ''), !s.beforeUpload)) return w(n)
          let d,
            i = {}
          try {
            const r = s.data,
              F = s.beforeUpload(n)
            ;(i = te(s.data) ? ne(s.data) : s.data),
              (d = await F),
              te(s.data) && We(r, i) && (i = ne(s.data))
          } catch {
            d = !1
          }
          if (d === !1) {
            s.onRemove(n)
            return
          }
          let P = n
          d instanceof Blob &&
            (d instanceof File
              ? (P = d)
              : (P = new File([d], n.name, { type: n.type }))),
            w(Object.assign(P, { uid: n.uid }), i)
        },
        c = async (n, d) => (me(n) ? n(d) : n),
        w = async (n, d) => {
          const {
            headers: i,
            data: P,
            method: r,
            withCredentials: F,
            name: D,
            action: T,
            onProgress: U,
            onSuccess: Ce,
            onError: Se,
            httpRequest: Pe
          } = s
          try {
            d = await c(d ?? P, n)
          } catch {
            s.onRemove(n)
            return
          }
          const { uid: G } = n,
            X = {
              headers: i || {},
              withCredentials: F,
              file: n,
              data: d,
              method: r,
              filename: D,
              action: T,
              onProgress: (M) => {
                U(M, n)
              },
              onSuccess: (M) => {
                Ce(M, n), delete v.value[G]
              },
              onError: (M) => {
                Se(M, n), delete v.value[G]
              }
            },
            J = Pe(X)
          ;(v.value[G] = J),
            J instanceof Promise && J.then(X.onSuccess, X.onError)
        },
        y = (n) => {
          const d = n.target.files
          d && C(Array.from(d))
        },
        l = () => {
          f.value || ((m.value.value = ''), m.value.click())
        },
        u = () => {
          l()
        }
      return (
        t({
          abort: (n) => {
            Ae(v.value)
              .filter(n ? ([i]) => String(n.uid) === i : () => !0)
              .forEach(([i, P]) => {
                P instanceof XMLHttpRequest && P.abort(), delete v.value[i]
              })
          },
          upload: k
        }),
        (n, d) => (
          h(),
          E(
            'div',
            {
              class: g([e(o).b(), e(o).m(n.listType), e(o).is('drag', n.drag)]),
              tabindex: '0',
              onClick: l,
              onKeydown: he(z(u, ['self']), ['enter', 'space'])
            },
            [
              n.drag
                ? (h(),
                  O(
                    St,
                    { key: 0, disabled: e(f), onFile: C },
                    { default: _(() => [R(n.$slots, 'default')]), _: 3 },
                    8,
                    ['disabled']
                  ))
                : R(n.$slots, 'default', { key: 1 }),
              N(
                'input',
                {
                  ref_key: 'inputRef',
                  ref: m,
                  class: g(e(o).e('input')),
                  name: n.name,
                  multiple: n.multiple,
                  accept: n.accept,
                  type: 'file',
                  onChange: y,
                  onClick: d[0] || (d[0] = z(() => {}, ['stop']))
                },
                null,
                42,
                Lt
              )
            ],
            42,
            Ft
          )
        )
      )
    }
  })
var ie = H(_t, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue'
  ]
])
const ue = 'ElUpload',
  de = (a) => {
    var t
    ;(t = a.url) != null && t.startsWith('blob:') && URL.revokeObjectURL(a.url)
  },
  Tt = (a, t) => {
    const s = Ie(a, 'fileList', void 0, { passive: !0 }),
      o = (l) => s.value.find((u) => u.uid === l.uid)
    function f(l) {
      var u
      ;(u = t.value) == null || u.abort(l)
    }
    function v(l = ['ready', 'uploading', 'success', 'fail']) {
      s.value = s.value.filter((u) => !l.includes(u.status))
    }
    const m = (l, u) => {
        const p = o(u)
        p &&
          (console.error(l),
          (p.status = 'fail'),
          s.value.splice(s.value.indexOf(p), 1),
          a.onError(l, p, s.value),
          a.onChange(p, s.value))
      },
      C = (l, u) => {
        const p = o(u)
        p &&
          (a.onProgress(l, p, s.value),
          (p.status = 'uploading'),
          (p.percentage = Math.round(l.percent)))
      },
      k = (l, u) => {
        const p = o(u)
        p &&
          ((p.status = 'success'),
          (p.response = l),
          a.onSuccess(l, p, s.value),
          a.onChange(p, s.value))
      },
      c = (l) => {
        be(l.uid) && (l.uid = Z())
        const u = {
          name: l.name,
          percentage: 0,
          status: 'ready',
          size: l.size,
          raw: l,
          uid: l.uid
        }
        if (a.listType === 'picture-card' || a.listType === 'picture')
          try {
            u.url = URL.createObjectURL(l)
          } catch (p) {
            Ke(ue, p.message), a.onError(p, u, s.value)
          }
        ;(s.value = [...s.value, u]), a.onChange(u, s.value)
      },
      w = async (l) => {
        const u = l instanceof File ? o(l) : l
        u || x(ue, 'file to be removed not found')
        const p = (n) => {
          f(n)
          const d = s.value
          d.splice(d.indexOf(n), 1), a.onRemove(n, d), de(n)
        }
        a.beforeRemove
          ? (await a.beforeRemove(u, s.value)) !== !1 && p(u)
          : p(u)
      }
    function y() {
      s.value
        .filter(({ status: l }) => l === 'ready')
        .forEach(({ raw: l }) => {
          var u
          return l && ((u = t.value) == null ? void 0 : u.upload(l))
        })
    }
    return (
      se(
        () => a.listType,
        (l) => {
          ;(l !== 'picture-card' && l !== 'picture') ||
            (s.value = s.value.map((u) => {
              const { raw: p, url: n } = u
              if (!n && p)
                try {
                  u.url = URL.createObjectURL(p)
                } catch (d) {
                  a.onError(d, u, s.value)
                }
              return u
            }))
        }
      ),
      se(
        s,
        (l) => {
          for (const u of l)
            u.uid || (u.uid = Z()), u.status || (u.status = 'success')
        },
        { immediate: !0, deep: !0 }
      ),
      {
        uploadFiles: s,
        abort: f,
        clearFiles: v,
        handleError: m,
        handleProgress: C,
        handleStart: c,
        handleSuccess: k,
        handleRemove: w,
        submit: y,
        revokeFileObjectURL: de
      }
    )
  },
  Ut = j({ name: 'ElUpload' }),
  Ot = j({
    ...Ut,
    props: ut,
    setup(a, { expose: t }) {
      const s = a,
        o = V(),
        f = Y(),
        {
          abort: v,
          submit: m,
          clearFiles: C,
          uploadFiles: k,
          handleStart: c,
          handleError: w,
          handleRemove: y,
          handleSuccess: l,
          handleProgress: u,
          revokeFileObjectURL: p
        } = Tt(s, f),
        n = L(() => s.listType === 'picture-card'),
        d = L(() => ({
          ...s,
          fileList: k.value,
          onStart: c,
          onProgress: u,
          onSuccess: l,
          onError: w,
          onRemove: y
        }))
      return (
        Me(() => {
          k.value.forEach(p)
        }),
        qe(ke, { accept: ze(s, 'accept') }),
        t({
          abort: v,
          submit: m,
          clearFiles: C,
          handleStart: c,
          handleRemove: y
        }),
        (i, P) => (
          h(),
          E('div', null, [
            e(n) && i.showFileList
              ? (h(),
                O(
                  le,
                  {
                    key: 0,
                    disabled: e(o),
                    'list-type': i.listType,
                    files: e(k),
                    'handle-preview': i.onPreview,
                    onRemove: e(y)
                  },
                  ae(
                    {
                      append: _(() => [
                        B(
                          ie,
                          oe({ ref_key: 'uploadRef', ref: f }, e(d)),
                          {
                            default: _(() => [
                              i.$slots.trigger
                                ? R(i.$slots, 'trigger', { key: 0 })
                                : $('v-if', !0),
                              !i.$slots.trigger && i.$slots.default
                                ? R(i.$slots, 'default', { key: 1 })
                                : $('v-if', !0)
                            ]),
                            _: 3
                          },
                          16
                        )
                      ]),
                      _: 2
                    },
                    [
                      i.$slots.file
                        ? {
                            name: 'default',
                            fn: _(({ file: r }) => [
                              R(i.$slots, 'file', { file: r })
                            ])
                          }
                        : void 0
                    ]
                  ),
                  1032,
                  [
                    'disabled',
                    'list-type',
                    'files',
                    'handle-preview',
                    'onRemove'
                  ]
                ))
              : $('v-if', !0),
            !e(n) || (e(n) && !i.showFileList)
              ? (h(),
                O(
                  ie,
                  oe({ key: 1, ref_key: 'uploadRef', ref: f }, e(d)),
                  {
                    default: _(() => [
                      i.$slots.trigger
                        ? R(i.$slots, 'trigger', { key: 0 })
                        : $('v-if', !0),
                      !i.$slots.trigger && i.$slots.default
                        ? R(i.$slots, 'default', { key: 1 })
                        : $('v-if', !0)
                    ]),
                    _: 3
                  },
                  16
                ))
              : $('v-if', !0),
            i.$slots.trigger
              ? R(i.$slots, 'default', { key: 2 })
              : $('v-if', !0),
            R(i.$slots, 'tip'),
            !e(n) && i.showFileList
              ? (h(),
                O(
                  le,
                  {
                    key: 3,
                    disabled: e(o),
                    'list-type': i.listType,
                    files: e(k),
                    'handle-preview': i.onPreview,
                    onRemove: e(y)
                  },
                  ae({ _: 2 }, [
                    i.$slots.file
                      ? {
                          name: 'default',
                          fn: _(({ file: r }) => [
                            R(i.$slots, 'file', { file: r })
                          ])
                        }
                      : void 0
                  ]),
                  1032,
                  [
                    'disabled',
                    'list-type',
                    'files',
                    'handle-preview',
                    'onRemove'
                  ]
                ))
              : $('v-if', !0)
          ])
        )
      )
    }
  })
var Dt = H(Ot, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue'
  ]
])
const It = ve(Dt)
export { It as E }
