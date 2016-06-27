var test = require('tape')
var hs = require('./')

test('switch should exist', function(t) {
  t.plan(1)
  t.ok(hs)
})

test('should accept minimal arguments', function(t) {
  t.plan(1)
  t.ok(hs([]))
})

test('should call defaultCallback', function(t) {
  t.plan(1)
  var hash = hs({
      'yolo': function() {
        return 'YOLO'
      }
    },
    function() {
      return 'FWEE'
    }
  )
  t.equal(hash('fwee'), 'FWEE')
})

test('should call action callback', function(t) {
  t.plan(1)
  var hash = hs({
      'yolo': function() {
        return 'YOLO'
      }
    },
    function() {
      return 'FWEE'
    }
  )
  t.equal(hash('yolo'), 'YOLO')
})

test('should register multipe action callbacks', function(t) {
  t.plan(4)
  var hash = hs({
      'yolo': function() {
        return 'YOLO'
      },
      'enzo': function() {
        return 'SUP'
      },
      'lazlo': function() {
        return 'DUDE'
      }
    },
    function() {
      return 'FWEE'
    }
  )
  t.equal(hash('yolo'), 'YOLO')
  t.equal(hash('enzo'), 'SUP')
  t.equal(hash('lazlo'), 'DUDE')
  t.equal(hash('foo'), 'FWEE')
})

test.only('should pass function arguments to callback', function(t) {
  t.plan(1)
  var hash = hs({
      'yolo': function(arg1, arg2) {
        return 'YOLO' + ' ' + arg1 + ' ' + arg2
      }
    },
    function() {
      return 'FWEE'
    }
  )
  t.equal(hash('yolo', 'NOLO', 'HOLO'), 'YOLO NOLO HOLO')
})

