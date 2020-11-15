(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      users: [],
      activeConfirm: false,
      usuarioBorrar: 0
    };
  },
  methods: {
    borrarUsuario: function borrarUsuario(id) {
      this.usuarioBorrar = id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm",
        text: 'Desea borrar el usuario con id:' + id,
        accept: this.confirmarBorrado
      });
    },
    confirmarBorrado: function confirmarBorrado() {
      var _this = this;

      console.log("borramos el usuario:" + this.usuarioBorrar);
      var url = '/api/v1/admin/users/delete';
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
        id: this.usuarioBorrar
      }).then(function (response) {
        console.log(response.data); //this.users = []

        _this.getListarUsuarios();
      });
    },
    getListarUsuarios: function getListarUsuarios() {
      var _this2 = this;

      var url = '/api/v1/admin/users/index';
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
        //console.log(response.data)
        _this2.users = response.data.users;
      });
    },
    cambiarEstado: function cambiarEstado(id) {
      var _this3 = this;

      console.log("Cambiar id:" + id);
      var url = '/api/v1/admin/users/changeStatus';
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
        params: {
          id: id
        }
      }).then(function (response) {
        console.log(response.data); //this.users = []

        _this3.getListarUsuarios();
      });
    }
  },
  mounted: function mounted() {
    this.getListarUsuarios();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { title: "Lista de usuarios" } },
    [
      _c(
        "template",
        { slot: "actions" },
        [
          _c(
            "router-link",
            { attrs: { to: "/users/create" } },
            [
              _c("vs-button", { attrs: { color: "primary", type: "filled" } }, [
                _vm._v("Crear nuevo")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: {
            "max-items": "5",
            pagination: "",
            search: "",
            data: _vm.users
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr },
                    [
                      _c("vs-td", { attrs: { data: data[indextr].email } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].email) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].username } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].username) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].firstName } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].firstName) +
                              " " +
                              _vm._s(data[indextr].lastName) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].active } },
                        [
                          _c(
                            "vs-switch",
                            {
                              attrs: { color: "success" },
                              on: {
                                click: function($event) {
                                  return _vm.cambiarEstado(data[indextr].id)
                                }
                              },
                              model: {
                                value: data[indextr].active,
                                callback: function($$v) {
                                  _vm.$set(data[indextr], "active", $$v)
                                },
                                expression: "data[indextr].active"
                              }
                            },
                            [
                              _c(
                                "span",
                                { attrs: { slot: "on" }, slot: "on" },
                                [_vm._v("On")]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { attrs: { slot: "off" }, slot: "off" },
                                [_vm._v("Off")]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-td", [
                        _c(
                          "div",
                          { staticClass: "btn-group" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "users-edit",
                                    params: { id: data[indextr].id }
                                  }
                                }
                              },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    attrs: { color: "warning", type: "filled" }
                                  },
                                  [_vm._v("Editar")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                attrs: { color: "danger", type: "filled" },
                                on: {
                                  click: function($event) {
                                    return _vm.borrarUsuario(data[indextr].id)
                                  }
                                }
                              },
                              [_vm._v("Borrar")]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                })
              }
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", { attrs: { "sort-key": "email" } }, [
                _vm._v("\n                Email\n            ")
              ]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("\n                Username\n            ")]),
              _vm._v(" "),
              _c("vs-th", [
                _vm._v("\n                Nombre completo\n            ")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "active" } }, [
                _vm._v("\n                Activo\n            ")
              ]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("\n                Acciones\n            ")])
            ],
            1
          )
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/users/Users.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/users/Users.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=489dfb87& */ "./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/src/views/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/users/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/users/Users.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/users/Users.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=489dfb87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Users.vue?vue&type=template&id=489dfb87&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_489dfb87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);