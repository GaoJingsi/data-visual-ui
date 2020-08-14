import { pushScopeId, popScopeId, openBlock, createBlock, toDisplayString, withScopeId, createVNode, ref, computed, onMounted, getCurrentInstance, renderSlot } from 'vue';
import crypto from 'crypto';

var script = {
  name: 'test',

  setup() {
    return {
      testData: 'test'
    };
  }

};

const _withId = /*#__PURE__*/withScopeId("data-v-7cc4288f");

pushScopeId("data-v-7cc4288f");
const _hoisted_1 = { class: "container" };
popScopeId();

const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, toDisplayString(_ctx.testData), 1 /* TEXT */))
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".container[data-v-7cc4288f] {\n  color: red;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-7cc4288f";
script.__file = "src/components/Test/Test.vue";

function Test (Vue) {
  Vue.component(script.name, script);
}

var script$1 = {
  name: 'icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    style: {
      type: Object,
      default: {}
    },
    clazz: {
      type: Array || Object,
      default: []
    }
  },

  setup(ctx) {
    const iconId = `#${ctx.prefix}${ctx.name}`;
    return {
      iconId
    };
  }

};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-38d2d0ef");

pushScopeId("data-v-38d2d0ef");
const _hoisted_1$1 = { class: "icon-container" };
const _hoisted_2 = { class: "icon" };
popScopeId();

const render$1 = /*#__PURE__*/_withId$1(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$1, [
    createVNode("div", {
      class: ["icon-wrapper", _ctx.clazz],
      style: _ctx.style
    }, [
      (openBlock(), createBlock("svg", _hoisted_2, [
        createVNode("use", { href: _ctx.iconId }, null, 8 /* PROPS */, ["href"])
      ]))
    ], 6 /* CLASS, STYLE */)
  ]))
});

var css_248z$1 = ".icon-wrapper[data-v-38d2d0ef] {\n  display: inline-block;\n}\n.icon-wrapper[data-v-38d2d0ef] .icon {\n  width: 100%;\n  height: 100%;\n  fill: currentColor;\n}";
styleInject(css_248z$1);

var css_248z$2 = ".icon-container {\n  display: inline-block;\n}";
styleInject(css_248z$2);

script$1.render = render$1;
script$1.__scopeId = "data-v-38d2d0ef";
script$1.__file = "src/components/Icon/Icon.vue";

function Icon (Vue) {
  Vue.component(script$1.name, script$1);
}

const rnds8 = new Uint8Array(16);
function rng() {
  return crypto.randomFillSync(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var script$2 = {
  name: 'flyBox',

  setup() {
    const uuid = v4({
      random: [0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36]
    }); // const uuid = uuidv4()

    let width = ref(0);
    let height = ref(0);
    let path = computed(() => `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`);
    let rectId = `rect-${uuid}`;
    let radialGradientId = `radialGradient-${uuid}`;
    let starMaskId = `starMask-${uuid}`;
    onMounted(() => {
      const instance = getCurrentInstance();
      width.value = instance.ctx.$refs.container.clientWidth;
      height.value = instance.ctx.$refs.container.clientHeight;
    });
    return {
      path,
      rectId,
      radialGradientId,
      starMaskId
    };
  }

};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-513cc2e2");

pushScopeId("data-v-513cc2e2");
const _hoisted_1$2 = {
  class: "container",
  ref: "container"
};
const _hoisted_2$1 = { class: "fly-box" };
const _hoisted_3 = /*#__PURE__*/createVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/createVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1 /* HOISTED */);
const _hoisted_5 = { class: "content-container" };
popScopeId();

const render$2 = /*#__PURE__*/_withId$2(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$2, [
    (openBlock(), createBlock("svg", _hoisted_2$1, [
      createVNode("defs", null, [
        createVNode("path", {
          id: _ctx.rectId,
          d: _ctx.path
        }, null, 8 /* PROPS */, ["id", "d"]),
        createVNode("radialGradient", {
          id: _ctx.radialGradientId,
          cx: "50%",
          cy: "50%",
          fx: "100%",
          fy: "50%",
          r: "50%"
        }, [
          _hoisted_3,
          _hoisted_4
        ], 8 /* PROPS */, ["id"]),
        createVNode("mask", {
          id: `${_ctx.starMaskId}`
        }, [
          createVNode("circle", {
            r: "50",
            cx: "5",
            cy: "5",
            fill: `url(#${_ctx.radialGradientId})`
          }, [
            createVNode("animateMotion", {
              path: _ctx.path,
              dur: "3s",
              repeatCount: "indefinite",
              rotate: "auto"
            }, null, 8 /* PROPS */, ["path"])
          ], 8 /* PROPS */, ["fill"])
        ], 8 /* PROPS */, ["id"])
      ]),
      createVNode("use", {
        href: `#${_ctx.rectId}`,
        stroke: "#000000",
        "stroke-width": "1",
        fill: "none"
      }, null, 8 /* PROPS */, ["href"]),
      createVNode("use", {
        href: `#${_ctx.rectId}`,
        stroke: "#09f",
        "stroke-width": "3",
        fill: "none",
        mask: `url(#${_ctx.starMaskId})`
      }, null, 8 /* PROPS */, ["href", "mask"])
    ])),
    createVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 512 /* NEED_PATCH */))
});

var css_248z$3 = ".container[data-v-513cc2e2] {\n  position: relative;\n}\n.container[data-v-513cc2e2] .fly-box {\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.container[data-v-513cc2e2] .content-container {\n  width: auto;\n  height: 100%;\n  padding: 10px;\n}";
styleInject(css_248z$3);

script$2.render = render$2;
script$2.__scopeId = "data-v-513cc2e2";
script$2.__file = "src/components/FlyBox/FlyBox.vue";

function FlyBox (Vue) {
  Vue.component(script$2.name, script$2);
}

function index (Vue) {
  Vue.use(Test);
  Vue.use(Icon);
  Vue.use(FlyBox);
}

export default index;
