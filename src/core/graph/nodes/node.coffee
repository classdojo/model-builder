###
  Class: Node

  Encapsulates
###

class Node
  constructor: (name, config) ->
    @_name = name
    @_config = config
    @_edges = {}
    @_edges.parents = []
    @_edges.children = []

  addParentEdge: (edge) ->
    @_edges.parents.push edge

  addChildEdge: (edge) ->
    @_edges.children.push edge

  config: () ->
    console.log "Configuring node...#{@_name}"

  setAlternateName: (name) ->
    @__altName = name

  ###
    Getters
  ###

  @::__defineGetter__ 'name', () ->
    return @_name

  @::__defineGetter__ 'alternateName', () ->
    return @__altName

  @::__defineGetter__ 'type', () ->
    return @_config.type

  @::__defineGetter__ 'schema', () ->
    return @_config.driver.schema

  @::__defineGetter__ 'isRoot', () ->
    return @_config.meta.root

  @::__defineGetter__ 'short_name', () ->
    return @_config.meta.short_name

  @::__defineGetter__ 'configuration', () ->
    @_config

  ###
    .children and .parents return an object
    with
      {
        many: [array of many relationship node names],
        one:  [array of one relationship node names]
      }
    if this node has neither many or one relationships
    then NULL is returned.
  ###
  @::__defineGetter__ 'children', () ->
    if not @_config.children.one? and not @_config.children.many?
      return null
    else
      o =
        one:  @_config.children.one
        many: @_config.children.many
      return o
  @::__defineGetter__ 'parents', () ->
    if not @_config.parents.one? and not @_config.parents.many?
      return null
    else
      o =
        one: @_config.parents.one
        many: @_config.parents.many
      return o

module.exports = Node
