(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--es--learn--feecc-course--feecc-workbench-deployment-md"],{

/***/ "3lnT":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/es/learn/feecc-course/feecc-workbench-deployment.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/es/learn/feecc-course/feecc-workbench-deployment.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "BSCO":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"3ec475f9-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/es/learn/feecc-course/feecc-workbench-deployment.md?vue&type=template&id=9e5ab574& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('RoboAcademyText',{attrs:{\"fWeight\":\"500\"}},[_vm._v(\"\\nEn esta lección, aprenderá cómo implementar usted mismo los componentes necesarios de Feecc Engineer Workbench.\\n\")]),_c('p',[_vm._v(\"Entre los componentes:\")]),_c('ul',[_c('li',[_vm._v(\"Demonio del Banco de Trabajo\")]),_c('li',[_vm._v(\"Interfaz del Banco de Trabajo\")]),_c('li',[_vm._v(\"Puerta de enlace IPFS\")]),_c('li',[_vm._v(\"Demonio del Lector HID\")])]),_c('p',[_vm._v(\"Todos los componentes se inician usando \"),_c('a',{attrs:{\"href\":\"https://docs.docker.com/engine/install/ubuntu/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Docker\")]),_vm._v(\" y \"),_c('a',{attrs:{\"href\":\"https://docs.docker.com/compose/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Docker compose\")]),_vm._v(\", asegúrese de tener ellos instalados.\")]),_c('h2',{attrs:{\"id\":\"preparación-del-software\"}},[_c('a',{attrs:{\"href\":\"#preparaci%C3%B3n-del-software\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Preparación del software\")]),_c('ol',[_c('li',[_c('p',[_vm._v(\"Los componentes de Feecc utilizan la base de datos \"),_c('a',{attrs:{\"href\":\"https://www.mongodb.com/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"MongoDB\")]),_vm._v(\" para almacenar y acceder a los datos. Antes de usar Feecc, necesitas implementar MongoDB de la manera que te resulte conveniente. Aquí tienes algunas opciones de implementación: \"),_c('a',{attrs:{\"href\":\"https://www.mongodb.com/try/download/community\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"usando tu propio servidor\")]),_vm._v(\", \"),_c('a',{attrs:{\"href\":\"https://www.mongodb.com/atlas\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"base de datos en la nube en Atlas\")]),_vm._v(\" (gratis), \"),_c('a',{attrs:{\"href\":\"https://www.digitalocean.com/products/managed-databases-mongodb\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"base de datos en la nube en DigitalOcean\")]),_vm._v(\" (pago). \")]),_c('p',[_vm._v(\"En cualquier caso, necesitas obtener tu URI de conexión a MongoDB, que deberás ingresar como el valor de la variable \"),_c('code',{pre:true},[_vm._v(\"MONGODB_URI\")]),_vm._v(\" para todos los componentes del sistema.\")])]),_c('li',[_c('p',[_vm._v(\"Si deseas aprovechar el almacenamiento confiable y transparente de datos de tu sistema de producción, necesitas crear una cuenta en Robonomics. Para hacerlo, utiliza las instrucciones disponibles en el siguiente enlace: \"),_c('a',{attrs:{\"href\":\"https://wiki.robonomics.network/docs/create-account-in-dapp/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"https://wiki.robonomics.network/docs/create-account-in-dapp/\")])]),_c('p',[_vm._v(\"Necesitas guardar la frase semilla de la cuenta ya que se utilizará más adelante en la variable \"),_c('code',{pre:true},[_vm._v(\"ROBONOMICS_ACCOUNT_SEED\")]),_vm._v(\".\")])])]),_c('h2',{attrs:{\"id\":\"preparación-del-banco-de-trabajo\"}},[_c('a',{attrs:{\"href\":\"#preparaci%C3%B3n-del-banco-de-trabajo\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Preparación del Banco de Trabajo\")]),_c('p',[_vm._v(\"Antes de comenzar, conecta todo el equipo necesario al ordenador o servidor:\")]),_c('ul',[_c('li',[_vm._v(\"impresora de etiquetas mediante USB\")]),_c('li',[_vm._v(\"lectores de RFID/códigos de barras mediante USB\")]),_c('li',[_vm._v(\"cámara IP a través de enrutador PoE/conmutador de red\")]),_c('li',[_vm._v(\"monitor con teclado y ratón o pantalla táctil mediante USB y HDMI/VGA (opcional)\")])]),_c('h2',{attrs:{\"id\":\"iniciando-el-demonio-del-lector-hid\"}},[_c('a',{attrs:{\"href\":\"#iniciando-el-demonio-del-lector-hid\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Iniciando el Demonio del Lector HID\")]),_c('ol',[_c('li',[_vm._v(\"Clonar el repositorio:\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git\\ncd feecc-hid-reader-daemon\\n\")]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_vm._v(\"Inicie el demonio:\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo docker-compose up -d --build\\n\")]),_c('h2',{attrs:{\"id\":\"iniciando-el-demonio-del-banco-de-trabajo\"}},[_c('a',{attrs:{\"href\":\"#iniciando-el-demonio-del-banco-de-trabajo\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Iniciando el Demonio del Banco de Trabajo\")]),_c('ol',[_c('li',[_vm._v(\"Clona el repositorio:\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git\\ncd feecc-workbench-daemon\\n\")]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Configure el demonio según sus necesidades utilizando el archivo \"),_c('code',{pre:true},[_vm._v(\"docker-compose.yml\")]),_vm._v(\". El archivo contiene varias variables de entorno:\")]),_c('ul',[_c('li',[_vm._v(\"Configuración de MongoDB;\")]),_c('li',[_vm._v(\"Configuración de Robonomics;\")]),_c('li',[_vm._v(\"Configuración de IPFS;\")]),_c('li',[_vm._v(\"parámetros de impresora;\")]),_c('li',[_vm._v(\"parámetros de cámara;\")]),_c('li',[_vm._v(\"parámetros de lectores de RFID / códigos de barras.\")])]),_c('p',[_vm._v(\"La lista completa de variables está disponible en el \"),_c('a',{attrs:{\"href\":\"https://github.com/Multi-Agent-io/feecc-workbench-daemon\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"repositorio\")]),_vm._v(\" del demonio. Los siguientes parámetros son obligatorios:\")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v(\"MONGODB_URI\")]),_vm._v(\": tu URI de conexión a MongoDB;\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"MONGODB_DB_NAME\")]),_vm._v(\": un nombre de base de datos de MongoDB;\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"WORKBENCH_NUMBER\")]),_vm._v(\": número de banco de trabajo del empleado.\")])])]),_c('li',[_c('p',[_vm._v(\"Inicie el demonio:\")])])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo docker-compose up -d --build\\n\")]),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Verifique su funcionalidad. Vaya al navegador y abra la página \"),_c('code',{pre:true},[_vm._v(\"http://127.0.0.1:5000/docs\")]),_vm._v(\", que debería contener documentación sobre la interfaz de API REST del sistema. Si la página no está disponible, entonces el servidor no se inició correctamente. Verifique los registros dentro del contenedor en busca de errores, corríjalos y repita los pasos de compilación y ejecución.\")])]),_c('h2',{attrs:{\"id\":\"lanzamiento-de-la-puerta-de-enlace-ipfs\"}},[_c('a',{attrs:{\"href\":\"#lanzamiento-de-la-puerta-de-enlace-ipfs\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Lanzamiento de la Puerta de enlace IPFS\")]),_c('ol',[_c('li',[_vm._v(\"Clona el repositorio:\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git\\n\")]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Configure el microservicio según sus necesidades utilizando el archivo \"),_c('code',{pre:true},[_vm._v(\"docker-compose.yml\")]),_vm._v(\". El archivo contiene variables de entorno para la conexión con MongoDB, Robonomics y Pinata. La lista completa de variables está disponible en el \"),_c('a',{attrs:{\"href\":\"https://github.com/Multi-Agent-io/feecc-ipfs-gateway\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"repositorio\")]),_vm._v(\" de la puerta de enlace.\")])]),_c('li',[_c('p',[_vm._v(\"Lanzar el microservicio:\")])])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo docker-compose up -d --build\\n\")]),_c('h2',{attrs:{\"id\":\"lanzamiento-del-frontend-del-banco-de-trabajo\"}},[_c('a',{attrs:{\"href\":\"#lanzamiento-del-frontend-del-banco-de-trabajo\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Lanzamiento del Frontend del Banco de Trabajo\")]),_c('ol',[_c('li',[_vm._v(\"Clona el repositorio:\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git\\n\")]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Ir al directorio \"),_c('code',{pre:true},[_vm._v(\"configs\")]),_vm._v(\" y configurar el servicio frontend según sus necesidades utilizando el archivo \"),_c('code',{pre:true},[_vm._v(\"config.json\")]),_vm._v(\". Los siguientes parámetros son particularmente importantes:\")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v(\"socket\")]),_vm._v(\" — insertar aquí la dirección del Demonio del Banco de Trabajo;\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"interface_language\")]),_vm._v(\" — idioma de la interfaz, opciones disponibles \"),_c('code',{pre:true},[_vm._v(\"en\")]),_vm._v(\" y \"),_c('code',{pre:true},[_vm._v(\"ru\")]),_vm._v(\";\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"dev_show_reducers\")]),_vm._v(\" — habilitar/deshabilitar el modo desarrollador;\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"pulling_period\")]),_vm._v(\" — período de recepción de datos del backend en milisegundos;\")])])]),_c('li',[_c('p',[_vm._v(\"Lanzar el contenedor frontend:\")])])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo docker-compose up -d --build\\n\")]),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Verificar su funcionalidad. Ir al navegador y abrir la página \"),_c('code',{pre:true},[_vm._v(\"http://localhost:3000\")]),_vm._v(\", debería ver una página de autorización.\")])]),_c('RoboAcademyText',{attrs:{\"fWeight\":\"500\"}},[_vm._v(\"\\nEn la próxima lección, revisaremos el servicio de Análisis de Feecc.\\n\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./courses/es/learn/feecc-course/feecc-workbench-deployment.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%223ec475f9-vue-loader-template%22%7D!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Bbtd":
/*!*************************************************************************************************************************!*\
  !*** ./courses/es/learn/feecc-course/feecc-workbench-deployment.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-deployment.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"3lnT\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/es/learn/feecc-course/feecc-workbench-deployment.md?");

/***/ }),

/***/ "GtXs":
/*!****************************************************************************************************!*\
  !*** ./courses/es/learn/feecc-course/feecc-workbench-deployment.md?vue&type=template&id=9e5ab574& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_template_id_9e5ab574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"3ec475f9-vue-loader-template\"}!../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-deployment.md?vue&type=template&id=9e5ab574& */ \"BSCO\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_template_id_9e5ab574___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_template_id_9e5ab574___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/es/learn/feecc-course/feecc-workbench-deployment.md?");

/***/ }),

/***/ "HHI3":
/*!******************************************************************************************************************************!*\
  !*** ./courses/es/learn/feecc-course/feecc-workbench-deployment.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-deployment.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"i3aq\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/es/learn/feecc-course/feecc-workbench-deployment.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "i3aq":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/es/learn/feecc-course/feecc-workbench-deployment.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Implementación del Banco de Trabajo del Ingeniero\",\n  \"description\": \"Este curso trata sobre conocer el sistema Feecc y todos sus componentes.\",\n  \"metaOptions\": [\"Aprender\", \"Acostumbrarse a Feecc\"],\n  \"defaultName\": \"Getting Used to Feecc\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/es/learn/feecc-course/feecc-workbench-deployment.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "iPRY":
/*!*********************************************************************!*\
  !*** ./courses/es/learn/feecc-course/feecc-workbench-deployment.md ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feecc_workbench_deployment_md_vue_type_template_id_9e5ab574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feecc-workbench-deployment.md?vue&type=template&id=9e5ab574& */ \"GtXs\");\n/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"7uw+\");\n/* harmony import */ var _feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feecc-workbench-deployment.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"Bbtd\");\n/* harmony import */ var _feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feecc-workbench-deployment.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"HHI3\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _feecc_workbench_deployment_md_vue_type_template_id_9e5ab574___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _feecc_workbench_deployment_md_vue_type_template_id_9e5ab574___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/es/learn/feecc-course/feecc-workbench-deployment.md?");

/***/ })

}]);