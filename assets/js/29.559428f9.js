(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{443:function(s,a,n){"use strict";n.r(a);var t=n(21),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-题目"}},[s._v("#")]),s._v(" 1 题目")]),s._v(" "),n("p",[s._v("给定一个数组arr，返回arr的最长无重复元素子数组的长度，无重复指的是所有数字都不相同。\n子数组是连续的，比如[1,3,5,7,9]的子数组有[1,3]，[3,5,7]等等，但是[1,3,7]不是子数组")]),s._v(" "),n("p",[n("strong",[s._v("示例")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：[2,2,3,4,3]\n返回值：3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_2-题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-题解"}},[s._v("#")]),s._v(" 2 题解")]),s._v(" "),n("h3",{attrs:{id:"_2-1-解法一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-解法一"}},[s._v("#")]),s._v(" 2.1 解法一")]),s._v(" "),n("p",[s._v("进行一次遍历，找到每个元素开头的无重复子串的长度，并找到最大的那个。\n如何找到每个元素开头的无重复子串？\n主要是需要进行去重，我这里使用Map")]),s._v(" "),n("ol",[n("li",[s._v("判断当前元素是否在map中，如果不在，则加入map中，子串长度+1")]),s._v(" "),n("li",[s._v("如果当前元素在map中，则说明有重复，此时可以将i进行回溯到检测到重复的位置的下一个，且将当前计数器清空，map清空。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n * \n * @param arr int整型一维数组 the array\n * @return int整型\n */\nfunction maxLength( arr ) {\n    let sum = 0;\n    let maxSum = 0;\n    let map = new Map()\n    for(let i=0;i<arr.length;i++) {\n      if(!map.has(arr[i])){\n        map.set(arr[i],i)\n        sum++\n        maxSum = Math.max(sum,maxSum)\n      } else {\n        sum = 0\n        i = map.get(arr[i])\n        map = new Map()\n      }\n    }\n    return maxSum\n}\nmodule.exports = {\n    maxLength : maxLength\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"_2-1-解法二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-解法二"}},[s._v("#")]),s._v(" 2.1 解法二")]),s._v(" "),n("p",[s._v("双指针：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("map中不存在右指针， 记录当前长度。")])]),s._v(" "),n("li",[n("p",[s._v("map 中存在右指针：\na: map中 右指针位置在左指针的左边，完全不影响，继续记录当前长度\nb. map中 右指针位置在左指针右边，需要重新选取长度。")])]),s._v(" "),n("li",[n("p",[s._v("存右指针到map")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function maxLength( arr ) {\n  if(arr.length===0)  return 0\n  let map = new Map()\n  let left = 0\n  let right = 0\n  let res = 0\n  while( left <= right && right < arr.length) {\n    if(!map.has(arr[right])) {\n      res = Math.max(right-left+1,res)\n    } else {\n      if(map.get(arr[right]) < left){\n        res = Math.max(right-left+1,res)\n      } else {\n        left = map.get(arr[right]) + 1\n      }\n    }\n    map.set(arr[right],right)\n    right++\n  }\n  return res\n}\nmodule.exports = {\n    maxLength : maxLength\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);