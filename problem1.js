
const mobile = {
    brand : 'black',
    price : 23000,
    color: 'black',
    camera: '12 mega px'
}
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    // console.log(key)
    console.log(key, ":",  mobile[key]);
}