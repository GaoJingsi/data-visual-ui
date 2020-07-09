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

    function index (Vue) {
      Vue.use(Test);
    }

    return index;

})));
