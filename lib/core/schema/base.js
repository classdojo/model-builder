// Generated by CoffeeScript 1.4.0
(function() {
  var Base;

  Base = (function() {

    function Base() {}

    Base._r = {};

    Base._r.has = {};

    Base._r.has.many = [];

    Base._r.has.one = [];

    Base._r.belongs_to = {};

    Base._r.belongs_to.many = [];

    Base._r.belongs_to.one = [];

    Base.hasMany = function(Model) {
      console.log("MANNY WOOOO");
      return this._r.has.many.push(Model);
    };

    Base.hasOne = function(Model) {
      return this._r.has.one.push(Model);
    };

    Base.belongs_to_many = function(Model) {
      return this._r.belongs_to.many.push(Model);
    };

    Base.belongs_to_one = function() {
      return this._r.belongs_to.one.push(Model);
    };

    Base._get_r = function() {
      return this._r;
    };

    return Base;

  })();

  module.exports = Base;

}).call(this);