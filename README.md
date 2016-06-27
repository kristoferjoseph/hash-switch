#hash-switch
Object hash based switch pattern

##Install
`npm i hash-switch --save`

##Usage
```js
var hs = require('hash-switch')(
  [{
    action:'one',
    callback: function() {return 'ONE'}
  },
  {
    action:'two',
    callback: function() {return 'TWO'}
  },
  {
    action:'three',
    callback: function() {return 'THREE'}
  }],
  function(){return 'DEFAULT'}
)

hs('one')() //ONE
hs('two')() //TWO
hs('three')() //THREE
hs('nope')() //DEFAULT
```
