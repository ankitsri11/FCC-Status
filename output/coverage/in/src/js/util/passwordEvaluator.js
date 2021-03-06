/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['util/passwordEvaluator.js']) {
  _$jscoverage['util/passwordEvaluator.js'] = [];
  _$jscoverage['util/passwordEvaluator.js'][2] = 0;
  _$jscoverage['util/passwordEvaluator.js'][4] = 0;
  _$jscoverage['util/passwordEvaluator.js'][6] = 0;
  _$jscoverage['util/passwordEvaluator.js'][8] = 0;
  _$jscoverage['util/passwordEvaluator.js'][9] = 0;
  _$jscoverage['util/passwordEvaluator.js'][10] = 0;
  _$jscoverage['util/passwordEvaluator.js'][12] = 0;
  _$jscoverage['util/passwordEvaluator.js'][13] = 0;
  _$jscoverage['util/passwordEvaluator.js'][15] = 0;
  _$jscoverage['util/passwordEvaluator.js'][16] = 0;
  _$jscoverage['util/passwordEvaluator.js'][17] = 0;
  _$jscoverage['util/passwordEvaluator.js'][18] = 0;
  _$jscoverage['util/passwordEvaluator.js'][19] = 0;
  _$jscoverage['util/passwordEvaluator.js'][20] = 0;
  _$jscoverage['util/passwordEvaluator.js'][21] = 0;
  _$jscoverage['util/passwordEvaluator.js'][22] = 0;
  _$jscoverage['util/passwordEvaluator.js'][23] = 0;
  _$jscoverage['util/passwordEvaluator.js'][25] = 0;
  _$jscoverage['util/passwordEvaluator.js'][26] = 0;
  _$jscoverage['util/passwordEvaluator.js'][28] = 0;
  _$jscoverage['util/passwordEvaluator.js'][29] = 0;
  _$jscoverage['util/passwordEvaluator.js'][30] = 0;
  _$jscoverage['util/passwordEvaluator.js'][31] = 0;
  _$jscoverage['util/passwordEvaluator.js'][33] = 0;
}
_$jscoverage['util/passwordEvaluator.js'].source = ["<span class=\"c\">/*global define*/</span>","define<span class=\"k\">([</span>","<span class=\"k\">],</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"s\">'use strict'</span><span class=\"k\">;</span>","","    <span class=\"k\">return</span> <span class=\"k\">{</span>","        strength<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>password<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> result <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span> digitCount<span class=\"k\">,</span> alphaCount<span class=\"k\">,</span> specialCount<span class=\"k\">,</span> categoryCount<span class=\"k\">,</span> lowerCount<span class=\"k\">,</span> upperCount<span class=\"k\">;</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>password<span class=\"k\">.</span>length <span class=\"k\">&gt;</span> <span class=\"s\">4</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                result <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>password<span class=\"k\">.</span>length <span class=\"k\">&gt;</span> <span class=\"s\">8</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                result <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            digitCount <span class=\"k\">=</span> <span class=\"k\">(</span>password<span class=\"k\">.</span>match<span class=\"k\">(</span><span class=\"s\">/\\d/g</span><span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"k\">[]).</span>length<span class=\"k\">;</span>","            alphaCount <span class=\"k\">=</span> <span class=\"k\">(</span>password<span class=\"k\">.</span>match<span class=\"k\">(</span><span class=\"s\">/[a-zA-Z]/g</span><span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"k\">[]).</span>length<span class=\"k\">;</span>","            specialCount <span class=\"k\">=</span> password<span class=\"k\">.</span>length <span class=\"k\">-</span> digitCount <span class=\"k\">-</span> alphaCount<span class=\"k\">;</span>","            categoryCount <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>digitCount <span class=\"k\">&gt;</span> <span class=\"s\">0</span><span class=\"k\">)</span> <span class=\"k\">{</span> categoryCount <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span> <span class=\"k\">}</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>alphaCount <span class=\"k\">&gt;</span> <span class=\"s\">0</span><span class=\"k\">)</span> <span class=\"k\">{</span> categoryCount <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span> <span class=\"k\">}</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>specialCount <span class=\"k\">&gt;</span> <span class=\"s\">0</span><span class=\"k\">)</span> <span class=\"k\">{</span> categoryCount <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span> <span class=\"k\">}</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>categoryCount <span class=\"k\">&gt;</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                result <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>categoryCount <span class=\"k\">&gt;</span> <span class=\"s\">2</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                result <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            lowerCount <span class=\"k\">=</span> <span class=\"k\">(</span>password<span class=\"k\">.</span>match<span class=\"k\">(</span><span class=\"s\">/[a-z]/g</span><span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"k\">[]).</span>length<span class=\"k\">;</span>","            upperCount <span class=\"k\">=</span> <span class=\"k\">(</span>password<span class=\"k\">.</span>match<span class=\"k\">(</span><span class=\"s\">/[A-Z]/g</span><span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"k\">[]).</span>length<span class=\"k\">;</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>lowerCount <span class=\"k\">&gt;</span> <span class=\"s\">0</span> <span class=\"k\">&amp;&amp;</span> upperCount <span class=\"k\">&gt;</span> <span class=\"s\">0</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                result <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            <span class=\"k\">return</span> result<span class=\"k\">;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['util/passwordEvaluator.js'][2]++;
define([], (function () {
  _$jscoverage['util/passwordEvaluator.js'][4]++;
  "use strict";
  _$jscoverage['util/passwordEvaluator.js'][6]++;
  return ({strength: (function (password) {
  _$jscoverage['util/passwordEvaluator.js'][8]++;
  var result = 0, digitCount, alphaCount, specialCount, categoryCount, lowerCount, upperCount;
  _$jscoverage['util/passwordEvaluator.js'][9]++;
  if ((password.length > 4)) {
    _$jscoverage['util/passwordEvaluator.js'][10]++;
    result += 1;
  }
  _$jscoverage['util/passwordEvaluator.js'][12]++;
  if ((password.length > 8)) {
    _$jscoverage['util/passwordEvaluator.js'][13]++;
    result += 1;
  }
  _$jscoverage['util/passwordEvaluator.js'][15]++;
  digitCount = (password.match(/\d/g) || []).length;
  _$jscoverage['util/passwordEvaluator.js'][16]++;
  alphaCount = (password.match(/[a-zA-Z]/g) || []).length;
  _$jscoverage['util/passwordEvaluator.js'][17]++;
  specialCount = (password.length - digitCount - alphaCount);
  _$jscoverage['util/passwordEvaluator.js'][18]++;
  categoryCount = 0;
  _$jscoverage['util/passwordEvaluator.js'][19]++;
  if ((digitCount > 0)) {
    _$jscoverage['util/passwordEvaluator.js'][19]++;
    categoryCount += 1;
  }
  _$jscoverage['util/passwordEvaluator.js'][20]++;
  if ((alphaCount > 0)) {
    _$jscoverage['util/passwordEvaluator.js'][20]++;
    categoryCount += 1;
  }
  _$jscoverage['util/passwordEvaluator.js'][21]++;
  if ((specialCount > 0)) {
    _$jscoverage['util/passwordEvaluator.js'][21]++;
    categoryCount += 1;
  }
  _$jscoverage['util/passwordEvaluator.js'][22]++;
  if ((categoryCount > 1)) {
    _$jscoverage['util/passwordEvaluator.js'][23]++;
    result += 1;
  }
  _$jscoverage['util/passwordEvaluator.js'][25]++;
  if ((categoryCount > 2)) {
    _$jscoverage['util/passwordEvaluator.js'][26]++;
    result += 1;
  }
  _$jscoverage['util/passwordEvaluator.js'][28]++;
  lowerCount = (password.match(/[a-z]/g) || []).length;
  _$jscoverage['util/passwordEvaluator.js'][29]++;
  upperCount = (password.match(/[A-Z]/g) || []).length;
  _$jscoverage['util/passwordEvaluator.js'][30]++;
  if (((lowerCount > 0) && (upperCount > 0))) {
    _$jscoverage['util/passwordEvaluator.js'][31]++;
    result += 1;
  }
  _$jscoverage['util/passwordEvaluator.js'][33]++;
  return result;
})});
}));
