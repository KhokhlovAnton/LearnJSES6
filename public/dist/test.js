'use strict';
'use  strict';
//  средство  еsб:  блок  "левых"  объявлений

var sentences = [{ subject: 'JS', verb: 'is', object: 'awesome' }, { subject: 'Long', verb: 'live', object: 'the King' }];
// средство  еsб:  деструктуризация  объекта
function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  // средство  еsб:  строки  ша блона
  console.log('${subject}  ${verb}  ${object}');
};
// средство  еsб:  for ..o f
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;

    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

;