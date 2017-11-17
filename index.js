module.exports = function hashswitch (actions, defaultCallback){
  var hash = {}
  hash.DEFAULT_CALLBACK = defaultCallback || function () {}
  actions && Object.keys(actions).forEach(function (action) {
    (('string' === typeof action || 'number' === typeof action) && 'function' === typeof actions[action]) ?
    (hash[action] = actions[action]) :
    console.error(action + ' should be a string or number and ' + actions[action] + ' should be a function.')
  })
  return function exectue (action) {
    !('string' === typeof action || 'number' === typeof action) && console.error(action + ' should be a string or number')
    return (hash[action] || hash.DEFAULT_CALLBACK).apply(this, [].slice.call(arguments, 1))
  }
}
