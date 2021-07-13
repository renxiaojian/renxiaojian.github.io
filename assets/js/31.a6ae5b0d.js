(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{446:function(s,n,t){"use strict";t.r(n);var a=t(21),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-题目"}},[s._v("#")]),s._v(" 1 题目")]),s._v(" "),t("p",[s._v("给定两个字符串str1和str2,输出两个字符串的最长公共子串\n题目保证str1和str2的最长公共子串存在且唯一。")]),s._v(" "),t("p",[t("strong",[s._v("示例")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('输入："1AB2345CD","12345EF"\n返回值："2345"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2-题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-题解"}},[s._v("#")]),s._v(" 2 题解")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/**\n * longest common substring\n * @param str1 string字符串 the string\n * @param str2 string字符串 the string\n * @return string字符串\n */\nfunction LCS( str1 ,  str2 ) {\n    // write code here\n  if(str1.length > str2.length){\n    [str1, str2] = [str2, str1]\n  }\n  let len = str1.length\n  let res = ''\n  let maxLen = 0\n  for(let i=0; i<len; i++){\n    let tempStr = str1.slice(i - maxLen, i + 1)\n    if(str2.indexOf(tempStr) != -1){\n      res = tempStr\n      maxLen++\n    }\n  }\n  return res\n}\nmodule.exports = {\n    LCS : LCS\n};\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);