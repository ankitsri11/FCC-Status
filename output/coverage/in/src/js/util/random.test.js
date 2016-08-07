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
if (! _$jscoverage['util/random.test.js']) {
  _$jscoverage['util/random.test.js'] = [];
  _$jscoverage['util/random.test.js'][2] = 0;
  _$jscoverage['util/random.test.js'][5] = 0;
  _$jscoverage['util/random.test.js'][7] = 0;
  _$jscoverage['util/random.test.js'][10] = 0;
  _$jscoverage['util/random.test.js'][14] = 0;
  _$jscoverage['util/random.test.js'][15] = 0;
  _$jscoverage['util/random.test.js'][16] = 0;
  _$jscoverage['util/random.test.js'][17] = 0;
}
_$jscoverage['util/random.test.js'].source = ["<span class=\"c\">/*jshint undef:false, strict:false*/</span> <span class=\"c\">// Note: to avoid having to write QUnit.module, etc</span>","require<span class=\"k\">([</span>","    <span class=\"s\">'util/random'</span>","<span class=\"k\">],</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    module<span class=\"k\">(</span><span class=\"s\">'util.random'</span><span class=\"k\">,</span> <span class=\"k\">{</span>","        setup<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            sinon<span class=\"k\">.</span>stub<span class=\"k\">(</span>Math<span class=\"k\">,</span> <span class=\"s\">'random'</span><span class=\"k\">).</span>returns<span class=\"k\">(</span><span class=\"s\">0.85</span><span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        teardown<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            Math<span class=\"k\">.</span>random<span class=\"k\">.</span>restore<span class=\"k\">();</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","","    test<span class=\"k\">(</span><span class=\"s\">'randomBelow'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        equal<span class=\"k\">(</span>Math<span class=\"k\">.</span>randomBelow<span class=\"k\">(</span><span class=\"s\">6</span><span class=\"k\">),</span> <span class=\"s\">5</span><span class=\"k\">,</span> <span class=\"s\">'6'</span><span class=\"k\">);</span>","        equal<span class=\"k\">(</span>Math<span class=\"k\">.</span>randomBelow<span class=\"k\">(</span><span class=\"s\">1</span><span class=\"k\">),</span> <span class=\"s\">0</span><span class=\"k\">,</span> <span class=\"s\">'1'</span><span class=\"k\">);</span>","        throws<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span> Math<span class=\"k\">.</span>randomBelow<span class=\"k\">(</span><span class=\"s\">0</span><span class=\"k\">);</span> <span class=\"k\">}</span><span class=\"k\">,</span> <span class=\"s\">'invalid argument: 0'</span><span class=\"k\">,</span> <span class=\"s\">'0'</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['util/random.test.js'][2]++;
require(["util/random"], (function () {
  _$jscoverage['util/random.test.js'][5]++;
  module("util.random", {setup: (function () {
  _$jscoverage['util/random.test.js'][7]++;
  sinon.stub(Math, "random").returns(0.84999999999999998);
}), teardown: (function () {
  _$jscoverage['util/random.test.js'][10]++;
  Math.random.restore();
})});
  _$jscoverage['util/random.test.js'][14]++;
  test("randomBelow", (function () {
  _$jscoverage['util/random.test.js'][15]++;
  equal(Math.randomBelow(6), 5, "6");
  _$jscoverage['util/random.test.js'][16]++;
  equal(Math.randomBelow(1), 0, "1");
  _$jscoverage['util/random.test.js'][17]++;
  throws((function () {
  _$jscoverage['util/random.test.js'][17]++;
  Math.randomBelow(0);
}), "invalid argument: 0", "0");
}));
}));
