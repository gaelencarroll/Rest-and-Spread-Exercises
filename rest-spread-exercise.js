function filterOutOdds1() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds = (...nums) => {
    return nums.filter(function(num) {
        return num % 2 === 0
      });
}

//findMin
const findMin = (...nums) => {
    return nums.reduce((min,currVal) => {
        return currVal < min ? currVal : min;
    });
};

//mergeObjects
const mergeObjects = (obj1, obj2) => {
    return {...obj1,...obj2}
}

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr,...args) => {
    const doubles =  args.map((val) => {
        return val * 2;
    })
    return [...arr,...doubles];
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let index = Math.floor(Math.random() * (items.length));
    return [...items.slice(0,index),...items.slice(index+1,items.length)]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1,...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return {...obj, [key] : val}
}
// addKeyVal({name: 'Misha', eyes: 'brown'},'animal','dog')


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}
// removeKey({name: 'Misha', eyes: 'brown'},'name')

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1,...obj2}
}
//combine({name: 'Misha', eyes: 'brown'},{age : 1, animal : 'dog'})

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

// update({name: 'Misha', eyes: 'brown'},'eyes','blue')