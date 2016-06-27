var DEFAULT_CALLBACK = 'DEFAULT_CALLBACK'

module.exports = function(actions, defaultCallback){
  var hash = {}
  hash[DEFAULT_CALLBACK] = defaultCallback || function() {}  
  if (actions && actions.length) {
    actions.forEach(function(a) {
      if (
            typeof a === 'object' &&
            a.action &&
            typeof a.action === 'string' &&
            a.callback &&
            typeof a.callback === 'function'
          ) {
        hash[a.action] = a.callback
      } else {
        throw Error("Actions should be an Object with the properties 'action' ( a string constant )  and 'callback' ( a function )")
      }
    })
  }
  return function(action) {
     if (
          action && 
          typeof action === 'string'
        ) {
       return (hash[action] || hash[DEFAULT_CALLBACK])()
     } else {
       throw Error('requires an action string')
     }
  }
}

