var catalog = {"City":"Cathair","Loading":"\u00c1 Lucht\u00fa"," \"PM":" \"PM","About":"Maidir Leis","Asia":"An \u00c1ise","Oceania":"An Aig\u00e9ine"," \"AM":" \"AM","Europe":"An Eoraip","South America":"Meirice\u00e1 Theas","World Map":"L\u00e9arsc\u00e1il an Domhain","Firefox 4 Download Stats":"Staitistic\u00ed \u00cdosluchtaithe Firefox 4","show my current location":"taispe\u00e1in mo shu\u00edomh reatha","Region":"R\u00e9igi\u00fan","zoom in":"s\u00fam\u00e1il isteach","Sector Chart":"P\u00edchairt","Country":"T\u00edr","Total Downloads":"L\u00edon Ioml\u00e1n \u00cdosluchtuithe","North America":"Meirice\u00e1 Thuaidh","zoom out":"s\u00fam\u00e1il amach","Africa":"An Afraic","Antarctica":"An Antartaice","Get Firefox":"Faigh Firefox","Continent":"M\u00f3r-Roinn"},
    _timefmt = "HH:mm",
    _group = ",",
    _numfmt = "#,##0.###";
var gettext = function(s) {
  return s in catalog ? catalog[s] : s;
};
var numberfmt = function(n) {
  var s = "" + n, len = s.length, rv = new Array(len + ~~((len - 1) / 3));
  for (var i = rv.length - 1, j = s.length - 1, k = 0; j >= 0; j--, k++) {
    if (k > 0 && k % 3 == 0) {
      rv[i--] = _group;
    }
    rv[i--] = s[j];
  }
  return rv.join('');
};
var timefmt = function(d) {
  // a = AM/PM
  // h = 12 hour clock
  // H = 24 hour clock
  var rv = [], hour = d.getHours(), minute = d.getMinutes(), num, fmt;
  for (var i = 0, ii = _timefmt.length; i < ii; i++) {
    fmt = _timefmt[i];
    if (fmt == "h" || fmt == "H" || fmt == "m") {
      if (fmt == "m") {
        num = minute;
      } else {
        num = fmt == "h" ? hour % 12 : hour;
      }
      if (_timefmt[i + 1] == fmt) {
        i++;
        rv.push(num < 10 ? "0" + num : num);
      } else {
        rv.push(num);
      }
    } else if (fmt != "a") {
      rv.push(fmt);
    }
  }
  return rv.join('');
}
