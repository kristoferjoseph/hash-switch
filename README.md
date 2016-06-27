#hash-switch
Object hash based switch pattern

##Install
`npm i hash-switch --save`

##Usage
```js
var hs = require('hash-switch')({
    'one': function() {return 'ONE'},
    'two': function() {return 'TWO'},
    /* Extra arguments will be passed to the callback function */
    'three': function(four) {return 'THREE' + ' ' + four}
  },
  function(){return 'DEFAULT'}
)

hs('one') //ONE
hs('two') //TWO
/* You can pass an extra argument to the callback function like so */
hs('three', 'FOUR') //THREE
hs('nope') //DEFAULT
```
