(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--fr--learn--feecc-course--feecc-workbench-deployment-md"],{

/***/ "+USm":
/*!******************************************************************************************************************************!*\
  !*** ./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-deployment.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"mqKW\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?");

/***/ }),

/***/ "0IrL":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"3ec475f9-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?vue&type=template&id=3321a006& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('RoboAcademyText',{attrs:{\"fWeight\":\"500\"}},[_vm._v(\"\\nDans cette leçon, vous apprendrez à déployer vous-même les composants nécessaires de Feecc Engineer Workbench.\\n\")]),_c('p',[_vm._v(\"Parmi les composants:\")]),_c('ul',[_c('li',[_vm._v(\"Démon de l'atelier\")]),_c('li',[_vm._v(\"Interface de l'atelier\")]),_c('li',[_vm._v(\"Passerelle IPFS\")]),_c('li',[_vm._v(\"Démon du lecteur HID\")])]),_c('p',[_vm._v(\"Tous les composants sont lancés à l'aide de \"),_c('a',{attrs:{\"href\":\"https://docs.docker.com/engine/install/ubuntu/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Docker\")]),_vm._v(\" et \"),_c('a',{attrs:{\"href\":\"https://docs.docker.com/compose/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Docker compose\")]),_vm._v(\", assurez-vous d'avoir les installés.\")]),_c('h2',{attrs:{\"id\":\"préparation-du-logiciel\"}},[_c('a',{attrs:{\"href\":\"#pr%C3%A9paration-du-logiciel\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Préparation du logiciel\")]),_c('ol',[_c('li',[_c('p',[_vm._v(\"Les composants de Feecc utilisent la base de données \"),_c('a',{attrs:{\"href\":\"https://www.mongodb.com/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"MongoDB\")]),_vm._v(\" pour stocker et accéder aux données. Avant d'utiliser Feecc, vous devez déployer MongoDB de la manière qui vous convient. Voici quelques options de déploiement: \"),_c('a',{attrs:{\"href\":\"https://www.mongodb.com/try/download/community\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"en utilisant votre propre serveur\")]),_vm._v(\", \"),_c('a',{attrs:{\"href\":\"https://www.mongodb.com/atlas\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"base de données cloud dans Atlas\")]),_vm._v(\" (gratuit), \"),_c('a',{attrs:{\"href\":\"https://www.digitalocean.com/products/managed-databases-mongodb\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"base de données cloud dans DigitalOcean\")]),_vm._v(\" (payant). \")]),_c('p',[_vm._v(\"Dans tous les cas, vous devez obtenir votre URI de connexion à MongoDB, que vous devrez entrer en tant que valeur de la variable \"),_c('code',{pre:true},[_vm._v(\"MONGODB_URI\")]),_vm._v(\" pour tous les composants du système.\")])]),_c('li',[_c('p',[_vm._v(\"Si vous souhaitez profiter d'un stockage fiable et transparent des données de votre système de production, vous devez créer un compte sur Robonomics. Pour ce faire, suivez les instructions disponibles à l'adresse suivante: \"),_c('a',{attrs:{\"href\":\"https://wiki.robonomics.network/docs/create-account-in-dapp/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"https://wiki.robonomics.network/docs/create-account-in-dapp/\")])]),_c('p',[_vm._v(\"Vous devez enregistrer la phrase de récupération du compte car elle sera utilisée ultérieurement dans la variable \"),_c('code',{pre:true},[_vm._v(\"ROBONOMICS_ACCOUNT_SEED\")]),_vm._v(\".\")])])]),_c('h2',{attrs:{\"id\":\"préparation-de-latelier\"}},[_c('a',{attrs:{\"href\":\"#pr%C3%A9paration-de-latelier\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Préparation de l'atelier\")]),_c('p',[_vm._v(\"Avant de commencer, connectez tout l'équipement nécessaire à l'ordinateur ou au serveur:\")]),_c('ul',[_c('li',[_vm._v(\"imprimante d'étiquettes via USB\")]),_c('li',[_vm._v(\"lecteurs RFID / code-barres via USB\")]),_c('li',[_vm._v(\"caméra IP via routeur PoE/commutateur réseau\")]),_c('li',[_vm._v(\"écran avec clavier et souris ou écran tactile via USB et HDMI/VGA (en option)\")])]),_c('h2',{attrs:{\"id\":\"lancement-du-démon-du-lecteur-hid\"}},[_c('a',{attrs:{\"href\":\"#lancement-du-d%C3%A9mon-du-lecteur-hid\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Lancement du démon du lecteur HID\")]),_c('ol',[_c('li',[_vm._v(\"Cloner le dépôt:\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git\\ncd feecc-hid-reader-daemon\\n\")]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_vm._v(\"Lancez le démon:\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo docker-compose up -d --build\\n\")]),_c('h2',{attrs:{\"id\":\"lancement-du-démon-workbench\"}},[_c('a',{attrs:{\"href\":\"#lancement-du-d%C3%A9mon-workbench\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Lancement du démon Workbench\")]),_c('ol',[_c('li',[_vm._v(\"Clonez le référentiel :\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git\\ncd feecc-workbench-daemon\\n\")]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Configurez le démon selon vos besoins en utilisant le fichier \"),_c('code',{pre:true},[_vm._v(\"docker-compose.yml\")]),_vm._v(\". Le fichier contient diverses variables d'environnement:\")]),_c('ul',[_c('li',[_vm._v(\"Configuration de MongoDB;\")]),_c('li',[_vm._v(\"Configuration de Robonomics;\")]),_c('li',[_vm._v(\"Configuration d'IPFS;\")]),_c('li',[_vm._v(\"paramètres de l'imprimante;\")]),_c('li',[_vm._v(\"paramètres de la caméra;\")]),_c('li',[_vm._v(\"paramètres des lecteurs RFID / code-barres.\")])]),_c('p',[_vm._v(\"La liste complète des variables est disponible dans le \"),_c('a',{attrs:{\"href\":\"https://github.com/Multi-Agent-io/feecc-workbench-daemon\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"dépôt\")]),_vm._v(\" du démon. Les paramètres suivants sont obligatoires:\")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v(\"MONGODB_URI\")]),_vm._v(\": votre URI de connexion à MongoDB;\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"MONGODB_DB_NAME\")]),_vm._v(\": un nom de base de données MongoDB;\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"WORKBENCH_NUMBER\")]),_vm._v(\": numéro du poste de travail de l'employé.\")])])]),_c('li',[_c('p',[_vm._v(\"Lancez le démon:\")])])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo docker-compose up -d --build\\n\")]),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Vérifiez sa fonctionnalité. Allez dans le navigateur et ouvrez la page \"),_c('code',{pre:true},[_vm._v(\"http://127.0.0.1:5000/docs\")]),_vm._v(\", qui devrait contenir la documentation sur l'interface API REST du système. Si la page n'est pas disponible, alors le serveur n'est pas démarré correctement. Vérifiez les journaux à l'intérieur du conteneur pour les erreurs, corrigez-les et répétez les étapes de construction et d'exécution.\")])]),_c('h2',{attrs:{\"id\":\"lancement-de-la-passerelle-ipfs\"}},[_c('a',{attrs:{\"href\":\"#lancement-de-la-passerelle-ipfs\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Lancement de la passerelle IPFS\")]),_c('ol',[_c('li',[_vm._v(\"Clonez le référentiel :\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git\\n\")]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Configurez le microservice selon vos besoins en utilisant le fichier \"),_c('code',{pre:true},[_vm._v(\"docker-compose.yml\")]),_vm._v(\". Le fichier contient des variables d'environnement pour la connexion avec MongoDB, Robonomics et Pinata. La liste complète des variables est disponible dans le \"),_c('a',{attrs:{\"href\":\"https://github.com/Multi-Agent-io/feecc-ipfs-gateway\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"dépôt\")]),_vm._v(\" de la passerelle.\")])]),_c('li',[_c('p',[_vm._v(\"Lancez le microservice:\")])])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo docker-compose up -d --build\\n\")]),_c('h2',{attrs:{\"id\":\"lancement-de-linterface-utilisateur-de-workbench\"}},[_c('a',{attrs:{\"href\":\"#lancement-de-linterface-utilisateur-de-workbench\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Lancement de l'interface utilisateur de Workbench\")]),_c('ol',[_c('li',[_vm._v(\"Clonez le référentiel :\")])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git\\n\")]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Allez dans le répertoire \"),_c('code',{pre:true},[_vm._v(\"configs\")]),_vm._v(\" et configurez le service frontend selon vos besoins en utilisant le fichier \"),_c('code',{pre:true},[_vm._v(\"config.json\")]),_vm._v(\". Les paramètres suivants sont particulièrement importants:\")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v(\"socket\")]),_vm._v(\" — insérez l'adresse du démon Workbench ici;\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"interface_language\")]),_vm._v(\" — langue de l'interface, options disponibles \"),_c('code',{pre:true},[_vm._v(\"en\")]),_vm._v(\" et \"),_c('code',{pre:true},[_vm._v(\"ru\")]),_vm._v(\";\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"dev_show_reducers\")]),_vm._v(\" — activation/désactivation du mode développeur;\")]),_c('li',[_c('code',{pre:true},[_vm._v(\"pulling_period\")]),_vm._v(\" — période de réception des données du backend en millisecondes;\")])])]),_c('li',[_c('p',[_vm._v(\"Lancer le conteneur frontend:\")])])]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo docker-compose up -d --build\\n\")]),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Vérifiez sa fonctionnalité. Allez dans le navigateur et ouvrez la page \"),_c('code',{pre:true},[_vm._v(\"http://localhost:3000\")]),_vm._v(\", vous devriez voir une page d'autorisation.\")])]),_c('RoboAcademyText',{attrs:{\"fWeight\":\"500\"}},[_vm._v(\"\\nDans la prochaine leçon, nous passerons en revue le service d'analyse Feecc.\\n\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%223ec475f9-vue-loader-template%22%7D!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "NwLC":
/*!****************************************************************************************************!*\
  !*** ./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?vue&type=template&id=3321a006& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_template_id_3321a006___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"3ec475f9-vue-loader-template\"}!../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-deployment.md?vue&type=template&id=3321a006& */ \"0IrL\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_template_id_3321a006___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_template_id_3321a006___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?");

/***/ }),

/***/ "P4Wb":
/*!*************************************************************************************************************************!*\
  !*** ./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-deployment.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"VZEs\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?");

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

/***/ "VZEs":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "f2kK":
/*!*********************************************************************!*\
  !*** ./courses/fr/learn/feecc-course/feecc-workbench-deployment.md ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feecc_workbench_deployment_md_vue_type_template_id_3321a006___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feecc-workbench-deployment.md?vue&type=template&id=3321a006& */ \"NwLC\");\n/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"7uw+\");\n/* harmony import */ var _feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feecc-workbench-deployment.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"P4Wb\");\n/* harmony import */ var _feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feecc-workbench-deployment.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"+USm\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _feecc_workbench_deployment_md_vue_type_template_id_3321a006___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _feecc_workbench_deployment_md_vue_type_template_id_3321a006___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_feecc_workbench_deployment_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_feecc_workbench_deployment_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?");

/***/ }),

/***/ "mqKW":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Déploiement de l'atelier d'ingénierie\",\n  \"description\": \"Ce cours consiste à découvrir le système Feecc et tous ses composants.\",\n  \"metaOptions\": [\"Apprendre\", \"s'habituer à Feecc\"],\n  \"defaultName\": \"Getting Used to Feecc\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/fr/learn/feecc-course/feecc-workbench-deployment.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);