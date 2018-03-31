/*
Array.prototype.map()

Given the following array:
[]

Write the function changeAddress() which will take the array
and change anybody's address that has a zipcode of 30328 to
be the city to Sandy Springs.

You only want to change the addresses with zipcode of 30328
*/
let addresses = [
    { 
        'name': 'Jennifer Bland',
        'address': '11555 Boxford Place',
        'city': 'Alpharetta',
        'zipcode': 30022
    },
    { 
        'name': 'Max Poe',
        'address': '12 Central Avenue',
        'city': 'Alpharetta',
        'zipcode': 30328
    }
]
function changeAddress(arr) {
    // you code goes below
    let newArr = arr.map((item) => {
        if (item.zipcode === 30328) {
            item.city = 'Sandy Springs';
            return item;
        } else {
            return item;
        }
    });

    return newArr;
}


// IGNORE CODE BELOW. IT WILL TEST YOUR CODE. DO NOT CHANGE
console.log('---   BEFORE ----');
console.log(addresses);
let temp = changeAddress(addresses);
console.log(' ----------  AFTER ----------');
console.log(temp);