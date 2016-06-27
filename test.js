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
  var hash = hs(
        [{
          action: 'yolo',
          callback: function() {
            return 'YOLO'
          }
        }], 
        function(){return 'FWEE'}
      )
  t.equal(hash('fwee'), 'FWEE')
})

test('should call action callback', function(t) {
  t.plan(1)
  var hash = hs(
        [{
          action: 'yolo',
          callback: function() {
            return 'YOLO'
          }
        }], 
        function(){return 'FWEE'}
      )
  t.equal(hash('yolo'), 'YOLO')
})

test('should register multipe action callbacks', function(t) {
  t.plan(4)
  var hash = hs(
        [{
          action: 'yolo',
          callback: function() {
            return 'YOLO'
          }
        },{
          action: 'enzo',
          callback: function() {
            return 'SUP'
          }
        },{
          action: 'lazlo',
          callback: function() {
            return 'DUDE'
          }
        }], 
        function(){return 'FWEE'}
      )
  t.equal(hash('yolo'), 'YOLO')
  t.equal(hash('enzo'), 'SUP')
  t.equal(hash('lazlo'), 'DUDE')
  t.equal(hash('foo'), 'FWEE')
})
