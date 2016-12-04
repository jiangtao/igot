'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.completion = completion;

var _rc = require('./utils/rc');

var _rc2 = _interopRequireDefault(_rc);

var _output = require('./utils/output');

var _output2 = _interopRequireDefault(_output);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function* completion(op, key, val) {
    let vars = (yield (0, _rc2.default)('chef')).data;

    if (op === 'get' && key) {
        (0, _output2.default)([vars[key], '']);
    }

    if (op === 'set' && key && val) {
        if (key === 'registry' && val[val.length - 1] !== '/') {
            val += '/';
        }

        yield (0, _rc2.default)('chef', Object.assign({}, vars, { [key]: val }));
    }
}