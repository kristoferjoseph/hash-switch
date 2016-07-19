var DEFAULT_CALLBACK = 'DEFAULT_CALLBACK'

module.exports = function(actions, defaultCallback){
  var hash = {}
  hash[DEFAULT_CALLBACK] = defaultCallback || function() {}  
  if (actions) {
    Object.keys(actions).forEach(function(action) {
      if (typeof action === 'string' &&
          typeof actions[action] === 'function') {
        hash[action] = actions[action]
      } else {
        throw Error('Actions Object requires string keys and function values')
      }
    })
  }
  return function(action) {
     if (typeof action === 'string') {
       var args = [].slice.call(arguments, 1)
       return (hash[action] || hash[DEFAULT_CALLBACK]).apply(this, args)
     } else {
       throw Error('requires an action string')
     }
  }
}

