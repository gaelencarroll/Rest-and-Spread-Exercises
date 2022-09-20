// before rest was invented
function sum() {
    const args = Array.from(arguments);
    return args.reduce((sum,val) => {
        return sum + val;
    })
}

const max = function(){
    const args = Array.from(arguments);
    return args.reduce((max,currVal) => {
        return currVal > max ? currVal : max;
    });
};

// rest operator 
function sum2(...nums){
    return nums.reduce((sum,n) => sum + n);
}

const sumAll = (...values) => {
    if(!values.length) return undefined;
    return values.reduce((sum,n) => sum + n);
}

function makeFamily(parent1, parent2, ...kids){
    return {
        parents: [parent1,parent2],
        children: kids.length ? kids : 0
    };
};

const filterByType = (type, ...vals) => {
    return vals.filter((v) => typeof v === type)
}
//filterByType('string',23,45,true,false,0,'hello','bye',undefined)


// spread operator
const nums = [4,5,88,123,0.92,34];
Math.max(nums); //NaN
Math.max(...nums); //123

const filterByType2 = (type, ...vals) => {
    return vals.filter((v) => typeof v === type)
}

const things = [23,45,true,false,0,'hello','bye',undefined];
filterByType2('string',...things);

console.log(...'HELLO');
console.log('H','E','L','L','O');

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];
const paletteCopy0 = palette; //does not work 
const paletteCopy = ['sky blue',...palette, 'grass green'];

const greenTeas = ['matcha','snow jasmine'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice','marshmallow root'];
const coffees = ['guatemala red cat','snow leopard blend'];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];
const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Grey'];

const vowels = 'aeiou';
const vowelArr = [...vowels,'sometimes y'];


const tea = {
    type : 'oolong',
    name : 'winter sprout',
    origin : 'taiwan'
};

const tea2 = {...tea};
const teaTin = {...tea, price : 22.99};
const newTea = {...tea, name : 'golden frost'};
const newTea2 = { name : 'golden frost',...tea};
const teaData = {
    steepTime : '30s',
    brewTemp : '175',
    origin : 'Japan'
}
const fullTea = {...tea, ...teaData}