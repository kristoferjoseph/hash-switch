module.exports = function hashswitch (actions, defaultCallback){
  var hash = {}
  hash.DEFAULT_CALLBACK = defaultCallback || function () {}
  actions && Object.keys(actions).forEach(function (action) {
    ('string' === typeof action && 'function' === typeof actions[action]) ?
    (hash[action] = actions[action]) :
    console.log(action + ' should be a string and ' + actions[action] + ' should be a function.')
  })
  return function exectue (action) {
   'string' !== typeof action && console.error(action + ' should be a string')
    return (hash[action] || hash.DEFAULT_CALLBACK).apply(this, [].slice.call(arguments, 1))
  }
}
