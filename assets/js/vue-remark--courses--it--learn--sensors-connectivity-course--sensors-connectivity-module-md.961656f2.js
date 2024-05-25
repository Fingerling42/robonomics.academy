(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--it--learn--sensors-connectivity-course--sensors-connectivity-module-md"],{

/***/ "H9s+":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"3ec475f9-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=template&id=b908ee76& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"Nei seguenti articoli, imparerai di più sul modulo di connettività dei sensori. Dopo di che, potrai unirti all'hosting della nostra Rete di Sensori Decentralizzata o creare la tua mappa dei sensori.\")]),_c('h2',{attrs:{\"id\":\"informazioni-sulla-connettività-dei-sensori\"}},[_c('a',{attrs:{\"href\":\"#informazioni-sulla-connettivit%C3%A0-dei-sensori\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Informazioni sulla connettività dei sensori\")]),_c('p',[_vm._v(\"La Rete di Sensori Decentralizzata utilizza il modulo \"),_c('code',{pre:true},[_vm._v(\"sensors-connectivity\")]),_vm._v(\" in Python (\"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/sensors-connectivity\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"codice sorgente\")]),_vm._v(\"). Questo modulo permette a qualsiasi utente di avviare il proprio server per ricevere dati dai sensori e elaborarli ulteriormente. Al momento, gli sviluppatori hanno lanciato diversi server del genere e qualsiasi sensore può inviare dati a essi. L'avvio di server multipli evita la perdita di dati in caso di problemi con uno di essi, poiché i sensori passeranno da un server non funzionante a uno funzionante. Fondamentalmente, puoi pensare al modulo di connettività dei sensori come a una scatola nera con un ingresso (dati del sensore) e molti uscite.\")]),_c('LessonImages',{attrs:{\"figure\":\"\",\"figureCaption\":\"Module architecture\",\"src\":\"sensors-connectivity-course/lesson-4-1.png\",\"alt\":\"Module architecture\"}}),_c('p',[_vm._v(\"Il modulo di connettività dei sensori è un insieme di stazioni (stazione_1, stazione_2 ... stazione_n), che ricevono vari dati, inclusi dati dai sensori tramite protocollo HTTP. Possono anche essere sensori collegati al computer tramite USB o qualsiasi altra fonte di dati. I dati ricevuti dalle stazioni vengono elaborati dal modulo e passati ai feeder (feeder_1, feeder_2 ... feeder_n). I feeder inviano i dati elaborati all'utente; nel nostro caso i dati vengono inviati al canale IPFS decentralizzato. \")]),_c('p',[_vm._v(\"Una mappa della \"),_c('a',{attrs:{\"href\":\"https://sensors.robonomics.network/#/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Rete di Sensori Decentralizzata\")]),_vm._v(\" è un'applicazione decentralizzata (dapp) in esecuzione sul computer. Legge i dati dal canale IPFS e li visualizza sulla mappa. Non c'è una connessione diretta tra il server che raccoglie i dati dai sensori e la mappa che l'utente vede; i dati vengono trasferiti tra loro tramite IPFS pubsub, il che riduce il carico sui server. \")]),_c('p',[_vm._v(\"Inoltre, di tanto in tanto, un file con i dati dell'ultimo periodo di tempo viene memorizzato in IPFS, e un hash di questi dati viene quindi registrato sulla blockchain. Poiché IPFS è una rete basata sui contenuti, memorizzare i dati al suo interno garantisce che qualsiasi modifica ai dati non passi inosservata, poiché l'indirizzo del file necessario contiene un hash del suo contenuto, che cambierà con qualsiasi modifica ai dati. La blockchain viene utilizzata per passare l'hash all'utente, che può usarlo per ottenere i dati necessari da IPFS (questo avviene quando si richiede la cronologia della mappa).\")]),_c('h2',{attrs:{\"id\":\"configurazione-del-modulo-per-linux\"}},[_c('a',{attrs:{\"href\":\"#configurazione-del-modulo-per-linux\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Configurazione del modulo per Linux\")]),_c('p',[_c('strong',[_vm._v(\"Prerequisiti e Installazione\")])]),_c('List',{attrs:{\"type\":\"numbers\"}},[_c('li',[_c('p',[_vm._v(\"Per compilare il modulo \"),_c('code',{pre:true},[_vm._v(\"sensors-connectivity\")]),_vm._v(\" è necessario installare il demone IPFS con una versione non superiore a \"),_c('code',{pre:true},[_vm._v(\"0.8.x\")]),_vm._v(\". Presumendo che tu stia lavorando su Linux, esegui quanto segue (per la versione \"),_c('code',{pre:true},[_vm._v(\"0.8.0\")]),_vm._v(\"):\")]),_c('LessonCodeWrapper',{attrs:{\"codeClass\":\"big-code\",\"language\":\"bash\"}},[_vm._v(\"wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz\\ntar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz\\ncd go-ipfs\\nsudo bash install.sh\\nipfs init\")])],1),_c('li',[_c('p',[_vm._v(\"Installare il pacchetto con gli strumenti di sviluppo \"),_c('code',{pre:true},[_vm._v(\"python3-dev\")]),_vm._v(\" e l'installatore di pacchetti per Python \"),_c('code',{pre:true},[_vm._v(\"pip\")]),_vm._v(\":\")]),_c('LessonCodeWrapper',{attrs:{\"codeClass\":\"long-code\",\"language\":\"bash\"}},[_vm._v(\"sudo apt install python3-dev python3-pip\")])],1),_c('li',[_c('p',[_vm._v(\"Installare il modulo come un pacchetto PyPI:\")]),_c('LessonCodeWrapper',{attrs:{\"codeClass\":\"long-code\",\"language\":\"bash\"}},[_vm._v(\"pip3 install sensors-connectivity\")]),_c('p',[_vm._v(\"Se si vede il seguente avviso: \")]),_c('LessonCodeWrapper',{attrs:{\"codeClass\":\"big-code\",\"language\":\"bash\"}},[_vm._v(\"WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.\\nConsider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.\")]),_c('p',[_vm._v(\"Eseguire il comando successivo:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"cd ~\\nexport PATH=\\\"/usr/local/bin:$PATH\\\"\\nsource .profile\")])],1)]),_c('h2',{attrs:{\"id\":\"configurazione\"}},[_c('a',{attrs:{\"href\":\"#configurazione\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Configurazione\")]),_c('List',{attrs:{\"type\":\"numbers\"}},[_c('li',[_c('p',[_vm._v(\"Creare una directory per il file di configurazione e il file del database ovunque si desideri. Questo database salverà gli hash IPFS dei dati del sensore, il timestamp e lo stato del servizio:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"cd ~\\nmkdir sensors_connectivity\\ncd sensors_connectivity\\ntouch database.db\")]),_c('RoboAcademyNote',{attrs:{\"type\":\"okay\",\"title\":\"INFO\"}},[_vm._v(\"\\nIl nome del file del database può essere qualsiasi, ma l'estensione deve essere \"),_c('code',[_vm._v(\".db\")])])],1),_c('li',[_c('p',[_vm._v(\"Creare il file di configurazione nella stessa directory:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"touch my_config.json\")])],1),_c('li',[_c('p',[_vm._v(\"Copiare e incollare quanto segue nel file e inserire il percorso completo del file del database nel campo db_path. Questa configurazione sarà sufficiente per ottenere i dati dei sensori tramite HTTP e inviarli alla mappa Robonomics:\")]),_c('LessonCodeWrapper',{attrs:{\"codeClass\":\"big-code\",\"language\":\"json\"}},[_vm._v(\"{\\n   \\\"general\\\": {\\n      \\\"publish_interval\\\": 30,\\n      \\\"db_path\\\": \\\"\"),_vm._v(\"/PATH/TO/DATABASE>\\\"\\n   },\\n   \\\"comstation\\\": {\\n      \\\"enable\\\": false,\\n      \\\"port\\\": \\\"/dev/\"),_vm._v(\"/PATH/TO/BOARD>\\\",\\n      \\\"work_period\\\": 300,\\n      \\\"geo\\\": \\\"00.000000,00.000000\\\",\\n      \\\"public_key\\\": \\\"\\\"\\n   },\\n   \\\"httpstation\\\": {\\n      \\\"enable\\\": true,\\n      \\\"port\\\": 8001\\n   },\\n   \\\"mqttstation\\\": {\\n      \\\"enable\\\": false,\\n      \\\"host\\\": \\\"localhost\\\",\\n      \\\"port\\\": 1883,\\n      \\\"topic\\\": \\\"/freertos_mqtt_robonomics_example/#\\\",\\n      \\\"username\\\": \\\"\\\",\\n      \\\"password\\\": \\\"\\\"\\n   },\\n   \\\"robonomics\\\": {\\n      \\\"enable\\\": true,\\n      \\\"ipfs_provider\\\": \\\"/ip4/127.0.0.1/tcp/5001/http\\\",\\n      \\\"ipfs_topic\\\": \\\"airalab.lighthouse.5.robonomics.eth\\\"\\n   },\\n   \\\"datalog\\\": {\\n      \\\"enable\\\": false,\\n      \\\"suri\\\": \\\"\\\",\\n      \\\"dump_interval\\\": 60,\\n      \\\"temporal_username\\\": \\\"\\\",\\n      \\\"temporal_password\\\": \\\"\\\",\\n      \\\"pinata_api\\\": \\\"\\\",\\n      \\\"pinata_secret\\\": \\\"\\\"\\n   },\\n   \\\"dev\\\": {\\n      \\\"sentry\\\": \\\"\\\"\\n   },\\n   \\\"frontier\\\": {\\n      \\\"enable\\\": false,\\n      \\\"suri\\\": \\\"\\\"\\n   },\\n   \\\"trackagro\\\": {\\n      \\\"enable\\\": false,\\n      \\\"token\\\": \\\"\\\"\\n   }\\n}\")])],1)]),_c('h2',{attrs:{\"id\":\"avvio\"}},[_c('a',{attrs:{\"href\":\"#avvio\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Avvio\")]),_c('List',{attrs:{\"type\":\"numbers\"}},[_c('li',[_c('p',[_vm._v(\"Avviare il demone IPFS:\")]),_c('LessonCodeWrapper',{attrs:{\"codeCLass\":\"big-code\",\"language\":\"bash\"}},[_vm._v(\"ipfs daemon --enable-pubsub-experiment\")])],1),_c('li',[_c('p',[_vm._v(\"Dopo aver impostato la configurazione, eseguire il servizio con il percorso del file di configurazione in un'altra finestra del terminale:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"sensors_connectivity \\\"path/to/your/config/file”\")])],1),_c('li',[_c('p',[_vm._v(\"Vedrai i log nel terminale (verranno inoltre aggiunti a \"),_c('code',{pre:true},[_vm._v(\"~/.logs\")]),_vm._v(\"). Esempio:\")]),_c('LessonCodeWrapper',{attrs:{\"codeClass\":\"big-code\",\"language\":\"bash\"}},[_vm._v(\"$ sensors_connectivity test.json\\n2022-09-02 14:08:48,408 - INFO - Getting data from the stations...\\n2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]\\n2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...\\n2022-09-02 14:08:48,411 - INFO - Checking data base...\\n2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...\\n2022-09-02 14:09:18,410 - INFO - Getting data from the stations...\\n2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]\\n2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...\\n2022-09-02 14:09:48,412 - INFO - Getting data from the stations...\\n2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]\\n2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...\\n2022-09-02 14:10:18,413 - INFO - Getting data from the stations...\")])],1)]),_c('h2',{attrs:{\"id\":\"post-installazione\"}},[_c('a',{attrs:{\"href\":\"#post-installazione\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Post-installazione\")]),_c('p',[_vm._v(\"Per connettere il tuo modulo \"),_c('code',{pre:true},[_vm._v(\"sensors-connectivity\")]),_vm._v(\" alla nostra Rete di Sensori Decentralizzata e vedere i tuoi dati sulla mappa, devi inviare il tuo ID IPFS a \"),_c('a',{attrs:{\"href\":\"mailto:vm@multi-agent.io\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"vm@multi-agent.io\")]),_vm._v(\" o \"),_c('a',{attrs:{\"href\":\"mailto:ping@airalab.org\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"ping@airalab.org\")]),_vm._v(\". Aggiungeremo il tuo ID a una lista di controllo degli accessi.\")]),_c('p',[_vm._v(\"Ottieni il tuo ID IPFS con il seguente comando dopo aver avviato il demone IPFS:\")]),_c('LessonCodeWrapper',{attrs:{\"codeClass\":\"big-code\",\"language\":\"bash\"}},[_vm._v(\"$ ipfs id\\n{\\n\\t\\\"ID\\\": \\\"QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP\\\",\\n\\t\\\"PublicKey\\\": \\\"CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...\\n    ...\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%223ec475f9-vue-loader-template%22%7D!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "MfiO":
/*!**********************************************************************************************************************************************!*\
  !*** ./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-module.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"vsPu\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?");

/***/ }),

/***/ "NtWm":
/*!*************************************************************************************!*\
  !*** ./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sensors_connectivity_module_md_vue_type_template_id_b908ee76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensors-connectivity-module.md?vue&type=template&id=b908ee76& */ \"Q3mj\");\n/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"7uw+\");\n/* harmony import */ var _sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensors-connectivity-module.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"qQOy\");\n/* harmony import */ var _sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensors-connectivity-module.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"MfiO\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _sensors_connectivity_module_md_vue_type_template_id_b908ee76___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sensors_connectivity_module_md_vue_type_template_id_b908ee76___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?");

/***/ }),

/***/ "Q3mj":
/*!********************************************************************************************************************!*\
  !*** ./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=template&id=b908ee76& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_template_id_b908ee76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"3ec475f9-vue-loader-template\"}!../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-module.md?vue&type=template&id=b908ee76& */ \"H9s+\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_template_id_b908ee76___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_template_id_b908ee76___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?");

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

/***/ "qQOy":
/*!*****************************************************************************************************************************************!*\
  !*** ./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-module.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"y1h/\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?");

/***/ }),

/***/ "vsPu":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lezione n. 4, modulo di connettività dei sensori\",\n  \"description\": \"MODULO DI CONNETTIVITÀ DEI SENSORI\",\n  \"lessonNumber\": 4,\n  \"metaOptions\": [\"Imparare\", \"Connettività dei sensori e Rete decentralizzata di sensori\"],\n  \"defaultName\": \"Sensors Connectivity & Decentralized Sensors Network\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "y1h/":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/it/learn/sensors-connectivity-course/sensors-connectivity-module.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);