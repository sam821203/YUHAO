function makeRandom(e, t) {
  if (typeof e !== "object") {
    return false;
  }
  this.obj = e;
  if (t === undefined) {
    return this.init();
  } else if (typeof t === "object") {
    return this.initNoRepeat(t);
  } else if (typeof t !== "object") {
  }
}
makeRandom.prototype.sum = function (e) {
  var t = this.obj;
  var a = 0;
  for (var n in t) {
    a += t[n][e];
  }
  if (typeof a === "number") return a;
};
makeRandom.prototype.init = function () {
  var e = null;
  var t = this.obj;
  var a = this.sum("p");
  for (var n in t) {
    var r = Math.random() * a;
    if (r <= t[n].p) {
      e = t[n];
      if (typeof t[n].r !== "undefined" && t[n].r === 0) {
        t[n].p = 0;
      }
      break;
    } else {
      a -= t[n].p;
    }
  }
  return e;
};
makeRandom.prototype.initNoRepeat = function (e) {
  var t = null;
  var a = this.obj;
  var n = this.sum("p");
  for (var r in a) {
    var o = Math.random() * n;
    if (o <= a[r].p && !e[a[r].i]) {
      e[a[r].i] = true;
      t = a[r];
      a[r].p = 0;
      break;
    } else {
      n -= a[r].p;
    }
  }
  return t;
};
function setRandomData(e, t) {
  var a = [];
  if (typeof t !== "undefined") {
    var n = {};
    for (var r = 0; r < e; r++) {
      var o = new makeRandom(obj, n);
      a.push(o);
    }
  } else {
    for (var r = 0; r < e; r++) {
      var o = new makeRandom(obj);
      a.push(o);
    }
  }
  return a;
}
function removeData() {
  var e = document.getElementById("check");
  var t = document.getElementById("dataScript");
  var a = document.getElementById("controller");
  document.body.removeChild(e);
  document.body.removeChild(t);
  document.body.removeChild(a);
}
function loadObjData() {
  var e = setInterval(function () {
    if (typeof obj !== "undefined") {
      finalCard = setRandomData(1, true);
      clearInterval(e);
    }
  }, 100);
}
var finalCard;
loadObjData();
