// Generated by CoffeeScript 1.6.2
/*
  Class: Node

  Encapsulates
*/


(function() {
  var Node;

  Node = (function() {
    function Node(name, config) {
      this._name = name;
      this._config = config;
      this._edges = {};
      this._edges.parents = [];
      this._edges.children = [];
    }

    Node.prototype.addParentEdge = function(edge) {
      return this._edges.parents.push(edge);
    };

    Node.prototype.addChildEdge = function(edge) {
      return this._edges.children.push(edge);
    };

    Node.prototype.config = function() {
      return console.log("Configuring node..." + this._name);
    };

    Node.prototype.setAlternateName = function(name) {
      return this.__altName = name;
    };

    /*
      Getters
    */


    Node.prototype.__defineGetter__('name', function() {
      return this._name;
    });

    Node.prototype.__defineGetter__('alternateName', function() {
      return this.__altName;
    });

    Node.prototype.__defineGetter__('type', function() {
      return this._config.type;
    });

    Node.prototype.__defineGetter__('schema', function() {
      return this._config.driver.schema;
    });

    Node.prototype.__defineGetter__('isRoot', function() {
      return this._config.meta.root;
    });

    Node.prototype.__defineGetter__('short_name', function() {
      return this._config.meta.short_name;
    });

    Node.prototype.__defineGetter__('configuration', function() {
      return this._config;
    });

    /*
      .children and .parents return an object
      with
        {
          many: [array of many relationship node names],
          one:  [array of one relationship node names]
        }
      if this node has neither many or one relationships
      then NULL is returned.
    */


    Node.prototype.__defineGetter__('children', function() {
      var o;

      if ((this._config.children.one == null) && (this._config.children.many == null)) {
        return null;
      } else {
        o = {
          one: this._config.children.one,
          many: this._config.children.many
        };
        return o;
      }
    });

    Node.prototype.__defineGetter__('parents', function() {
      var o;

      if ((this._config.parents.one == null) && (this._config.parents.many == null)) {
        return null;
      } else {
        o = {
          one: this._config.parents.one,
          many: this._config.parents.many
        };
        return o;
      }
    });

    return Node;

  })();

  module.exports = Node;

}).call(this);
