'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take a value as an argument 
 * and return value unchanged.
 * 
 * @param {Value} value: value to be taken and returned unchanged.
 * @return {Value} value: returns argument given unchanged.
 * 
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;
 
 
 
/**
 * typeOf: Designed to test a value for its type of and return accordingly.
 * 
 * @param {Value} value: the value that was given as 
 * an argument to be test for its type of.
 * @return {String} datatype: returns the typeof value 
 * first test if value is not an object than return its regular typeof value
 * if value is array returns 'array'
 * if value is null returns 'null'
 * if value is Date returns 'date'
 * else value must be an object and returns 'object'
 * 
 */
function typeOf(value) {
    if (typeof value !== 'object') {
        return typeof value;
    } 
    else if(Array.isArray(value)) {
        return 'array';
    }
    else if (value === null) {
        return 'null';
    }
    else if(value instanceof Date) {
        return 'date';
    }
    else {
        return 'object';
    }
}
module.exports.typeOf = typeOf;



/**
 * first: Designed to return the first number of items of an array.
 * 
 * @param {Array} array: The Array used to find the first number of items in itself.
 * @param {Number} number: The number that will be given to see from which first 
 * number of items it should return.
 * @return {Array} array: Returns an array of the first number of items or
 * Returns an empty array if array is undefined or if number is negative or
 * Returns the first element of the array if number is undefined or number is not a number.
 * 
 */
function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if ( !number || isNaN(number)) {
        return array[0];
    }
    if (number > array.length) {
        return array;
    }
    return array.slice(0, number);
}
module.exports.first = first;



/**
 * last: Designed to return the last number of items of an array.
 * 
 * @param {Array} array: The Array used to find the lasst number of items in itself.
 * @param {Number} number: The number that will be given to see from which last 
 * number of items it should return.
 * @return {Array} array: Returns an array of the last number of items or
 * Returns an empty array if array is undefined or if number is negative or
 * Returns the last element of the array if number is undefined or number is not a number.
 * 
 */
 function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if ( !number || isNaN(number)) {
        return array[array.length - 1];
    }
    if (number > array.length) {
        return array;
    }
    return array.slice(-number);
 }
 module.exports.last = last;
 
 
 
/**
 * indexOf: Designed to loop over a an array and find the first occurance of value.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {DataType} value: The value of which index should be given.
 * @return {Number} number: The values index inside the array.
 * 
 */
function indexOf(array, value) {
    let index = null ;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            index = 1;
            i = array.length;
        }
    }
    if (index === null) {
        return -1;
    }
    else {
        return index;
    }
}
module.exports.indexOf = indexOf;



/**
 * contains: Designed to see if an array contains a given value.
 * 
 * @param {Array} array: The array used to see if it contains a given. value
 * @param {Datatype} value: The value to be search for inside the array.
 * 
 * @return {Boolean} boolean: returns true if it is in the array false if not.
 * 
 */
 function contains(array, value) {
    return array.includes(value) ? true : false;   
 }
 module.exports.contains = contains;
 
 
 
 /**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Collection} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * 
 */
function each(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



 /**
 * unique: Designed to loop over an Array,
 * and adds elements to a new aray if they are not seen before
 * 
 * @param {Array} array: The array over which to iterate.
 * @return {Array} array: Returns an array with no duplicates
 * 
 */
function unique(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (indexOf(newArray, array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.unique = unique;



 /**
 * filter: Designed to loop over a collection, Array or Object, and apply the 
 * action Function to each value in the collection. returns a new array filled with 
 * elements that passed the callback function as true.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array
 * @return {Array} array: Returns an array from which calling the function returned true.
 * 
 */
 function filter(array, func) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;   
 }
 module.exports.filter = filter;
 
 
 
 /**
 * reject: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. returns a new array filled with 
 * elements that passed the callback function as false.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array.
 * @return {Array} array: Returns an array from which calling the function returned false.
 * 
 */
 function reject(array, func) {
    var trues = filter(array, func);
    var falses = [];
    for (var i = 0; i < array.length; i++) {
        if (!trues.includes(array[i])) {
            falses.push(array[i]);
        }
    }
    return falses;  
 }
 module.exports.reject = reject;
 
 
 
 /**
 * partition: Designed to loop over an array, and call a function, 
 * returns a new array with two sub arrays, 
 * one with values that are truthy the other falsey
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array.
 * @return {Array} array: Returns an array with two sub arrays,
 * one with truthy values, one with falsey values.
 * 
 */
 function partition(array, func) {
    var trueArray = filter(array, func);
    var falseArray = reject(array, func);
    var finalArray = [trueArray, falseArray];
    return finalArray;    
 }
 module.exports.partition = partition;
 
 
 
  /**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * returns a newly modified array.
 * 
 * @param {Collection} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection.
 * @return {Array} array: Returns an array of modified data 
 * depending on the callback functions condition.
 * 
 */
 function map(collection, func) {
    var newArray = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            newArray.push(func(collection[i], i, collection));
        }
    } 
    else {
        for (var key in collection) {
            newArray.push(func(collection[key], key, collection));
        }   
    }
    return newArray;    
 }
 module.exports.map = map;
 
 
 
 /**
 * pluck: iterates through an <array> of objects, and for a given <property>, returns an array with the value of <property>
 * for each <array> object.
 * 
 * @param: {Array} array: an array of objects to iterate through
 * @param: {String} prop: a property to search for in each array object
 * @return: {Array} array: an array containing the values of the given property in each object of the array
 * 
 */
 
 function pluck(array, prop) {
    return  map(array, obj => obj[prop]);
 }
module.exports.pluck = pluck;



/**
 * every: takes a collection and function. 
 * if the function parameter is undefined, if any element of collecton is falsey, return false. otherwise,
 * if all collection elements are truthy, return true.
 * else, call the function on every element of the given collection. if any element passed through the function
 * returns false, return false. otherwise, if all elements return true, return true.
 * 
 * @param {Collection} collection: a collection to iterate through with the given function
 * @param {Function} func: a function/test to run on given collection elements
 * 
 * @return {Boolean} boolean: Returns true if there are no falsey elements in collection or no false returns from function,
 * returns false if there are any falsey elements in collection or false returns from function
 * 
 */
 function every(collection, func){
    let arr = [];
    if(!func){
        return contains(filter(collection, Boolean), true);
    }
    each(collection, function(element,iteratee,collection){
        arr.push(func(element,iteratee,collection));
    });
    return !contains(arr, false);
 }
 module.exports.every = every;



 /**
 * some: takes a collection and function. 
 * if the function parameter is undefined, if any element of collecton is truthy, return true. otherwise,
 * if all collection elements are falsey, return false.
 * else, call the function on every element of the given collection. if any element passed through the function
 * returns true, return true. otherwise, if all elements return false, return false.
 * 
 * @param {Collection} collection: a collection to iterate through with the given function
 * @param {Function} func: a function/test to run on given collection elements
 * 
 * @return {Boolean} boolean: Returns true if there are any truthy elements in collection or any true returns from function,
 * retursn false if there are no truthy elements in collection or no true returns from function
 * 
 */
 function some(collection, func) {
    let arr = [];
    if(!func){
        return contains(filter(collection, Boolean), true);
    }
    each(collection, function(element,iteratee,collection){
        arr.push(func(element,iteratee,collection));
    });
    return contains(arr, true);
 }
 module.exports.some = some;
 
 
 
 /**
 * reduce: iterates through an array with a function. if seed is not provided, use first index of array as seed 
 * and continue to next element, using function with seed/previous value and next array element. use return value of function
 * as next seed/previous value.
 * if seed is provided, use seed as previous value, run function through array as above.
 * return final value of function as return result.
 * 
 * @param {Array} array: an array of elements to iterate through with function
 * @param {Function} func: a function to perform on array elements (and seed)
 * @param {Datatype} seed: Any datatype an optional starting value to use with first array element when function is first called
 * @return {Datatype} value: The result of running a function on a starting parameter, the first array element, 
 * then the next array element with the return result, etc.
 * 
 */
 function reduce(array, func, seed) {
    if (seed !== undefined) {
        let last = seed;
        for (var i = 0; i < array.length; i++) {
            last = func(last, array[i], i);
            }
            return last;
    } else {
        let last = array[0];
        for (var i = 1; i < array.length; i++) {
            last = func(last, array[i], i); 
        }
        return last;
    }
 }
 module.exports.reduce = reduce;
 
 
 
/**
 * extend: takes an undefined number of objects and turns them into an array (rest parameter).
 * loop through array of objects and copy key-value pairs from following objects to first object.
 * return first object.
 * 
 * @param {Object} object1: the first original object to contain all other objects key value pairs and its own.
 * @param {Array} ...args: array of objects formed from all objects put into parameters.
 * @return {Object} object1: an object with copies of all key-value pairs from all objects put into parameters.
 * 
  */
 function extend(object1, ...args) {
    for (var i = 0; i < args.length; i++) {
        for (var key in args[i]) {
            object1[key] = args[i][key];
        }
    }
    return object1;   
 }
 module.exports.extend = extend;