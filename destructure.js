const person = {name: 'Jack', age: 27, job: 'facebooker', gfName: 'Jullia', address: 'Mirpur', phone: 01734532535, friends: ['Tom Hancks', 'Tom cruise', 'Jonny']}

const { phone } = person;
const complexObject = {
    name: 'abc',
    info: {
        address: 'Bogura',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address, father);
// console.log(gfName, phone, address);

const friends = ['Amir khan', 'Salman khan', 'Sakib khan', 'Irfan khan', 'Imran khan'];
const [chotofriends, ...rest] = friends
console.log(rest);