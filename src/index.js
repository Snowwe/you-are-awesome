// DO WHATEVER YOU WANT HERE
let count = 0
    , asyncCount = 0;

const createEnumerableProperty = (property) => property;
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, ({
        enumerable: false, get: function () {
            return value;
        }, set: function (newVal) {
            value = newVal;
        }
    }));
    return property;
};
const createProtoMagicObject = () => Function;
const incrementor = () => {
    ++count;
    incrementor.toString = () => count;
    return incrementor;
};
const asyncIncrementor = () => Promise.resolve(++asyncCount);
const createIncrementer = () => {
    var value = 0;
    return {
        next() {
            return {value: ++value, done: false};
        },
        [Symbol.iterator]() {
            return this;
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param)
        }, 1001)
    })
};
const getDeepPropertiesCount = (obj) => {
    const props = Object.keys(obj);
    if (!props) {
        return 0;
    }
    return (
        props.length +
        props.reduce(
            (acc, prop) => (typeof obj[prop] === 'object' ? acc + getDeepPropertiesCount(obj[prop]) : 0),
            0
        )
    );
};
const createSerializedObject = () => null;
const toBuffer = (buff) => buff;
const sortByProto = (arr) => arr.sort();

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;