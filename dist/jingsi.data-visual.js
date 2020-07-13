(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
    typeof define === 'function' && define.amd ? define(['vue'], factory) :
    (global = global || self, global.DataVisual = factory(global.Vue));
}(this, (function (vue) { 'use strict';

    //
    //
    //
    //
    var script = {
      name: 'test',

      setup() {
        return {
          testData: 'test'
        };
      }

    };

    const _withId = /*#__PURE__*/vue.withScopeId("data-v-7cc4288f");

    vue.pushScopeId("data-v-7cc4288f");
    const _hoisted_1 = { class: "container" };
    vue.popScopeId();

    const render = /*#__PURE__*/_withId(function render(_ctx, _cache) {
      return (vue.openBlock(), vue.createBlock("div", _hoisted_1, vue.toDisplayString(_ctx.testData), 1 /* TEXT */))
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

    //
    //
    //
    //
    //
    //
    //
    //
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

      setup(ctx, a, b) {
        const iconId = `#${ctx.prefix}${ctx.name}`;
        return {
          iconId
        };
      }

    };

    const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-38d2d0ef");

    vue.pushScopeId("data-v-38d2d0ef");
    const _hoisted_1$1 = { class: "icon" };
    vue.popScopeId();

    const render$1 = /*#__PURE__*/_withId$1(function render(_ctx, _cache) {
      return (vue.openBlock(), vue.createBlock("div", {
        class: ["icon-wrapper", _ctx.clazz],
        style: _ctx.style
      }, [
        (vue.openBlock(), vue.createBlock("svg", _hoisted_1$1, [
          vue.createVNode("use", { href: _ctx.iconId }, null, 8 /* PROPS */, ["href"])
        ]))
      ], 6 /* CLASS, STYLE */))
    });

    var css_248z$1 = ".icon-wrapper[data-v-38d2d0ef] {\n  display: inline-block;\n}\n.icon-wrapper[data-v-38d2d0ef] .icon {\n  width: 100%;\n  height: 100%;\n  fill: currentColor;\n}";
    styleInject(css_248z$1);

    script$1.render = render$1;
    script$1.__scopeId = "data-v-38d2d0ef";
    script$1.__file = "src/components/Icon/Icon.vue";

    function Icon (Vue) {
      Vue.component(script$1.name, script$1);
    }

    function index (Vue) {
      Vue.use(Test);
      Vue.use(Icon);
    }

    return index;

})));
