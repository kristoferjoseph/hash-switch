#hash-switch
Object hash based switch pattern.
This lib is made give you the same functionality as a `switch` statement but with a cleaner API.

###Compare:
```js
switch(expression) {
  case 'one':
    return 'ONE';
  break;
  case 'two':
    return 'TWO';
  break;
  default:
    return 'DEFAULT';
  break;
}
```

###To:
```js
hs({
  'one':function(){ return 'ONE' },
  'two':function(){ return 'TWO' }
},
function() { return 'DEFAULT' })
```
For me the second example is a much more familiar syntax and meshes with my other JavaScript more naturally.

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
hs('three', 'FOUR') //THREE FOUR
hs('nope') //DEFAULT
```
