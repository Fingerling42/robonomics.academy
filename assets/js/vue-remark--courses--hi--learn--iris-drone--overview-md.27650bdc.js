(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--hi--learn--iris-drone--overview-md"],{

/***/ "FgHA":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"3ec475f9-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/hi/learn/iris-drone/overview.md?vue&type=template&id=32209430& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"ड्रोन लेन-देन के बाद चलना शुरू करता है और IPFS में संयोजनों के साथ फ़ाइल स्टोर करता है। नियंत्रण स्क्रिप्ट \"),_c('a',{attrs:{\"href\":\"https://github.com/generalized-intelligence/GAAS\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"GAAS डेमो स्क्रिप्ट\")]),_vm._v(\" पर आधारित है\")])]),_c('div',{staticClass:\"youtube-embed\"},[_c('div',{staticStyle:{\"width\":\"100%\",\"margin\":\"0 auto\"}},[_c('div',{staticStyle:{\"position\":\"relative\",\"padding-bottom\":\"56.25%\",\"padding-top\":\"25px\",\"height\":\"0\"}},[_c('iframe',{staticStyle:{\"position\":\"absolute\",\"top\":\"0\",\"left\":\"0\",\"width\":\"100%\",\"height\":\"100%\"},attrs:{\"src\":\"https://www.youtube-nocookie.com/embed/4CwtGAX1OwM\",\"allow\":\"autoplay; encrypted-media\",\"allowfullscreen\":\"\"}})])])]),_c('br'),_c('h2',{attrs:{\"id\":\"आवश्यकताएँ\"}},[_c('a',{attrs:{\"href\":\"#%E0%A4%86%E0%A4%B5%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A4%95%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%81\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"आवश्यकताएँ\")]),_c('List',[_c('li',[_vm._v(\" नियंत्रण के लिए आवश्यकताएँ:\\n\"),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsudo apt install -y \\\\\\n\\tpython3-pip \\\\\\n\\tninja-build \\\\\\n\\texiftool \\\\\\n\\tpython-argparse \\\\\\n\\tpython-empy \\\\\\n\\tpython-toml \\\\\\n\\tpython-numpy \\\\\\n\\tpython-yaml \\\\\\n\\tpython-dev \\\\\\n\\tpython-pip \\\\\\n\\tninja-build \\\\\\n\\tprotobuf-compiler \\\\\\n\\tlibeigen3-dev \\\\\\n\\tgenromfs\\n\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\npip3 install \\\\\\n\\tpandas \\\\\\n\\tjinja2 \\\\\\n\\tpyserial \\\\\\n\\tcerberus \\\\\\n\\tpyulog \\\\\\n\\tnumpy \\\\\\n\\ttoml \\\\\\n\\tpyquaternion\\n\")])],1),_c('li',{staticClass:\"flex\"},[_c('p',[_vm._v(\"ROS Melodic + Gazebo \"),_c('a',{attrs:{\"href\":\"http://wiki.ros.org/melodic/Installation\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"स्थापना ट्यूटोरियल\")])])]),_c('li',[_vm._v(\"अतिरिक्त पैकेज:\\n\"),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\nsudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller\\nsudo apt-get install python-jinja2\\nsudo apt-get install python-catkin-pkg\\nsudo apt-get install python3-catkin-pkg-modules\\n\")])],1),_c('li',[_vm._v(\"IPFS संस्करण 0.4.22\\n\"),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\nwget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz\\ntar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz\\ncd go-ipfs\\nsudo bash install.sh\\nipfs init\\n\")])],1),_c('li',[_vm._v(\"ipfshttpclient\\n\"),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\npip3 install ipfshttpclient\\n\")])],1),_c('li',{staticClass:\"flex\"},[_c('p',[_vm._v(\"Robonomics नोड (बाइनरी फ़ाइल) (नवीनतम रिलीज \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/robonomics/releases\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"यहाँ\")]),_vm._v(\" से डाउनलोड करें)\")])])]),_c('br'),_c('h2',{attrs:{\"id\":\"पर्यारण-सेटअप\"}},[_c('a',{attrs:{\"href\":\"#%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A4%A3-%E0%A4%B8%E0%A5%87%E0%A4%9F%E0%A4%85%E0%A4%AA\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"पर्यारण सेटअप\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\nsudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras\\nwget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\\nsudo ./install_geographiclib_datasets.sh\\ncd ~/catkin_ws/src\\ngit clone https://github.com/PX4/Firmware.git\\ncd Firmware\\ngit checkout v1.9.0\\nbash ./Tools/setup/ubuntu.sh\\n\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\ncd ~/catkin_ws/src\\ngit clone https://github.com/generalized-intelligence/GAAS.git\\ncp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/\\ncp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/\\ncp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/\\n\")]),_c('p',[_vm._v(\"अपनी \"),_c('code',{pre:true},[_vm._v(\".bashrc\")]),_vm._v(\" फ़ाइल को संशोधित करें, निम्नलिखित पंक्तियों को नीचे जोड़ें:  \")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"json\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\nsource ~/catkin_ws/devel/setup.bash   \\nsource ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default \\nexport GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models \\nexport ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware \\nexport ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo\\nexport GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models\\n\")]),_c('h2',{attrs:{\"id\":\"नियंत्रण-पैकेज-स्थापना\"}},[_c('a',{attrs:{\"href\":\"#%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%A3-%E0%A4%AA%E0%A5%88%E0%A4%95%E0%A5%87%E0%A4%9C-%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%AA%E0%A4%A8%E0%A4%BE\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"नियंत्रण पैकेज स्थापना\")]),_c('p',[_vm._v(\"एक नए टर्मिनल में:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\ncd catkin_ws/src\\ngit clone https://github.com/tubleronchik/robonomics_drone_sim.git\\ncd ..\\ncatkin build\\n\")]),_c('h2',{attrs:{\"id\":\"रोबोनॉमिक्स-नेटवर्क\"}},[_c('a',{attrs:{\"href\":\"#%E0%A4%B0%E0%A5%8B%E0%A4%AC%E0%A5%8B%E0%A4%A8%E0%A5%89%E0%A4%AE%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B8-%E0%A4%A8%E0%A5%87%E0%A4%9F%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%95\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"रोबोनॉमिक्स नेटवर्क\")]),_c('p',[_vm._v(\"स्थानीय रोबोनॉमिक्स नेटवर्क बनाने के लिए रोबोनॉमिक्स बाइनरी फ़ाइल के साथ फ़ोल्डर में जाएं और निम्नलिखित को चलाएं:  \")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\n./robonomics --dev --rpc-cors all\\n\")]),_c('p',[_c('code',{pre:true},[_vm._v(\"config.py\")]),_vm._v(\" में रोबोनोमिक का पथ जोड़ें\")]),_c('LessonImages',{attrs:{\"imageClasses\":\"mb\",\"src\":\"iris-drone/IPFS.jpg\",\"alt\":\"IPFS\"}}),_c('p',[_c('a',{attrs:{\"href\":\"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Robonomics पैराचेन पोर्टल\")]),_vm._v(\" पर जाएं और स्थानीय नोड पर स्विच करें।\")]),_c('LessonImages',{attrs:{\"imageClasses\":\"mb\",\"src\":\"iris-drone/localNode.jpg\",\"alt\":\"localNode\"}}),_c('p',[_c('strong',[_vm._v(\"खाते\")]),_vm._v(\" पर जाएं और \"),_c('strong',[_vm._v(\"DRONE\")]),_vm._v(\" और \"),_c('strong',[_vm._v(\"EMPLOYER\")]),_vm._v(\" खाते बनाएं। खाते के नाम और कुंजियों और \"),_c('strong',[_vm._v(\"robonomics\")]),_vm._v(\" के पथ को \"),_c('code',{pre:true},[_vm._v(\"~/catkin_ws/src/drone_sim/src/config.py\")]),_vm._v(\" में सहेजें। कुछ पैसे खातों में स्थानांतरित करें।\")]),_c('LessonImages',{attrs:{\"imageClasses\":\"mb\",\"src\":\"iris-drone/addingAcc.jpg\",\"alt\":\"accounts\"}}),_c('h2',{attrs:{\"id\":\"नकली-सिमुलेशन-चलाना\"}},[_c('a',{attrs:{\"href\":\"#%E0%A4%A8%E0%A4%95%E0%A4%B2%E0%A5%80-%E0%A4%B8%E0%A4%BF%E0%A4%AE%E0%A5%81%E0%A4%B2%E0%A5%87%E0%A4%B6%E0%A4%A8-%E0%A4%9A%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A4%BE\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"नकली सिमुलेशन चलाना\")]),_c('p',[_vm._v(\"IPFS डेमन चलाएं\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\ncd go-ipfs\\nipfs daemon\\n\")]),_c('p',[_vm._v(\"एक और टर्मिनल में सिमुलेशन लॉन्च करें:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nroslaunch px4 mavros_posix_sitl.launch\\ncd ~/catkin_ws/src/robonomics_drone_sim/src\\npython3 takeoff.py\\n\")]),_c('p',[_vm._v(\"\\\"Waiting for payment\\\" तक प्रतीक्षा करें \")]),_c('LessonImages',{attrs:{\"imageClasses\":\"mb\",\"src\":\"iris-drone/launch.jpg\",\"alt\":\"launch\"}}),_c('p',[_vm._v(\"एक लेनदेन भेजने के लिए एक और विंडो में चलाएं:\\n\"),_c('code',{pre:true},[_vm._v(\"echo \\\"ON\\\" | ./robonomics io write launch -r <drone_addres> -s <employer_key>\")]),_vm._v(\" - जहां \"),_c('strong',[_vm._v(\"<drone_address>\")]),_vm._v(\" और \"),_c('strong',[_vm._v(\"<employer_key>\")]),_vm._v(\" को \"),_c('code',{pre:true},[_vm._v(\"config.py\")]),_vm._v(\" से उचित तरीके से बदल देना चाहिए।\")]),_c('p',[_vm._v(\"IPFS में डेटा भेजने के बाद, \"),_c('a',{attrs:{\"href\":\"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Robonomics Parachain पोर्टल\")]),_vm._v(\" में \"),_c('strong',[_vm._v(\"Chain State\")]),_vm._v(\" पर जाएं। क्वेरी में \"),_c('strong',[_vm._v(\"datalog\")]),_vm._v(\" का चयन करें और \"),_c('code',{pre:true},[_vm._v(\"+\")]),_vm._v(\" बटन का उपयोग करके DRONE datalog जोड़ें।\")]),_c('LessonImages',{attrs:{\"imageClasses\":\"mb\",\"src\":\"iris-drone/datalog.jpg\",\"alt\":\"datalog\"}}),_c('p',[_vm._v(\"आप ऊपर से हैश डालकर \"),_c('code',{pre:true},[_vm._v(\"https://gateway.ipfs.io/ipfs/<hash>\")]),_vm._v(\" चल रहे ड्रोन की टेलीमेट्री पा सकते हैं।\")]),_c('LessonImages',{attrs:{\"imageClasses\":\"mb\",\"src\":\"iris-drone/output.jpg\",\"alt\":\"output\"}}),_c('p',[_vm._v(\"अगले लॉन्च करने से पहले \"),_c('code',{pre:true},[_vm._v(\"db\")]),_vm._v(\" निर्देशिका को हटाना महत्वपूर्ण है।\"),_c('br'),_c('code',{pre:true},[_vm._v(\"rm -rf ~/.local/share/robonomics/chains/dev/db\")])])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./courses/hi/learn/iris-drone/overview.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%223ec475f9-vue-loader-template%22%7D!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Pg/R":
/*!********************************************************************************!*\
  !*** ./courses/hi/learn/iris-drone/overview.md?vue&type=template&id=32209430& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_32209430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"3ec475f9-vue-loader-template\"}!../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=template&id=32209430& */ \"FgHA\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_32209430___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_32209430___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/hi/learn/iris-drone/overview.md?");

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

/***/ "YT8+":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/hi/learn/iris-drone/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"मानवरहित हवाई वाहन कनेक्ट करें\",\n  \"lastUpdate\": \"Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)\",\n  \"description\": \"मानवरहित हवाई वाहन कनेक्ट करें\",\n  \"metaOptions\": [\"सीखना\"],\n  \"defaultName\": \"Connect unmanned aerial vehicle\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/hi/learn/iris-drone/overview.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "jUdY":
/*!**********************************************************************************************************!*\
  !*** ./courses/hi/learn/iris-drone/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"YT8+\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/hi/learn/iris-drone/overview.md?");

/***/ }),

/***/ "k1yU":
/*!*************************************************!*\
  !*** ./courses/hi/learn/iris-drone/overview.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _overview_md_vue_type_template_id_32209430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.md?vue&type=template&id=32209430& */ \"Pg/R\");\n/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"7uw+\");\n/* harmony import */ var _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"uM8y\");\n/* harmony import */ var _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"jUdY\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _overview_md_vue_type_template_id_32209430___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _overview_md_vue_type_template_id_32209430___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/hi/learn/iris-drone/overview.md?");

/***/ }),

/***/ "oflm":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/hi/learn/iris-drone/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/hi/learn/iris-drone/overview.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "uM8y":
/*!*****************************************************************************************************!*\
  !*** ./courses/hi/learn/iris-drone/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"oflm\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/hi/learn/iris-drone/overview.md?");

/***/ })

}]);