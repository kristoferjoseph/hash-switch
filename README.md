#hash-switch
Object hash based switch pattern

##Install
`npm i hash-switch --save`

##Usage
```js
var hs = require('hash-switch')({
    'one': function() {return 'ONE'},
    'two': function() {return 'TWO'},
    'three': function() {return 'THREE'}
  },
  function(){return 'DEFAULT'}
)

hs('one') //ONE
hs('two') //TWO
hs('three') //THREE
hs('nope') //DEFAULT
```
