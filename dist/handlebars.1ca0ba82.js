// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/handlebars.js":[function(require,module,exports) {
var list = document.getElementById("list");
var FillTemplate = function FillTemplate() {
  var data = {
    tours: [{
      img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/390/webp_original/1-6.11.webp",
      title: "Величний Стамбул",
      description: ""
    }, {
      img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/953/webp_original/24-29.10.webp",
      title: "Відпустка на Буковелі в Карпатах",
      description: "Друзі, запрошуємо в крутезну відпустку в самому серці Карпат - Буковелі! Незабутній драйвовий відпочинок на 5 днів в обіймах краси гірської природи. Ми зібрали найтоповіші та найцікавіші локації Карпат"
    }, {
      img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/835/webp_original/п.webp",
      title: "Незвідана Румунія",
      description: "Вихідні у Трансильванії! Нас чекають екскурсії містами Румунії: Брашов та Сибіу. А також, познайомимось з містичною Румунією в замках Бран, Пелеш та Кантакузино, дізнаємось історії та міфи про Графа Дракулу, та ще безліч цікавого. Хутчіш бронюй місце і вирушай в захоплюючий вікенд разом з командою Бомба-Тур"
    }, {
      img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/495/webp_original/9-12.11.webp",
      title: "Вікенд у Відні",
      description: "Запрошуємо Вас у незабутню подорож до Європи. Розпочнемо наш тур зі знайомства із містом Краків. Побачимо замок Вавель і район Казімєж. Також ми завітаємо до Відня, де відвідаємо палац Шенбрунн та штрудель-шоу. Гайда з нами за враженнями! "
    }, {
      img: "https://img.poehalisnami.ua/static/hotels/egipet/sharm-el-shejjkh/h343/orig/booking343_1343_637739528890200579.jpg",
      title: "Royal Albatros Moderna",
      description: "Готель Royal Albatros Moderna на узбережжі затоки Набк Бей. До послуг гостей піщаний пляж з кораловим рифом, кілька басейнів, водні гірки, spa-центр, тренажерний зал, анімаційні програми протягом дня та ввечері. Готель відмінно підійде для сімейного та молодіжного відпочинку."
    }, {
      img: "https://img.poehalisnami.ua/static/hotels/egipet/sharm-el-shejjkh/h343/orig/booking343_1343_637739528890200579.jpg",
      title: "Albatros Beach Club Abu Soma",
      description: "Готель Royal Albatros Moderna на узбережжі затоки Набк Бей. До послуг гостей піщаний пляж з кораловим рифом, кілька басейнів, водні гірки, spa-центр, тренажерний зал, анімаційні програми протягом дня та ввечері. Готель відмінно підійде для сімейного та молодіжного відпочинку."
    }, {
      img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/869/webp_original/5-9.webp",
      title: "Серце Нідерландів - Амстердам",
      description: "Амстердам - місто свободи, викликів та насиченого життя! Ми запускаємо захоплюючий вікенд в столицю Нідерландів! Познайомимося з колоритом Амстера, відвідаємо найпопулярніші локації, завітаємо у справжнє родовище традицій країни - містечко Заансе-Сханс та Волендам."
    }, {
      img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/525/webp_original/9-12.11.webp",
      title: "Усі секрети праги",
      description: "Запрошуємо в подорож до столиці Чехії. У нашому турі ми пізнаємо Прагу з усіх ракурсів: проникнемось атмосферою міста під час оглядової екскурсії, насолодимося панорамою з висоти Празького граду та помилуємось краєвидами з палуби кораблика, що неспішно рухається по Влтаві. "
    }]
  };
  var template = Handlebars.compile(document.getElementById("template").innerHTML);
  var filled = template(data);
  list.innerHTML = filled;
};
FillTemplate();
},{}],"C:/Users/Admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64881" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/Admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/handlebars.js"], null)
//# sourceMappingURL=/handlebars.1ca0ba82.js.map