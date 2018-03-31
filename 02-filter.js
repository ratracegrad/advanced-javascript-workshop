/*
Array.prototype.filter()

Given the following array: accounts

Write the function filterAccounts() which will take the array
and select only the accounts with balance greater than $100,000.

You only want to change the addresses with zipcode of 30328
*/
let accounts = [
    { 
        'number': '0001',
        'balance': 11555
    },
    { 
        'number': '0002',
        'balance': 115
    },
    { 
        'number': '0003',
        'balance': 1155523
    },
    { 
        'number': '0004',
        'balance': 11555
    },
    { 
        'number': '0005',
        'balance': 11555
    },
    { 
        'number': '0006',
        'balance': 11555
    },
    { 
        'number': '0007',
        'balance': 115555
    },
    { 
        'number': '0008',
        'balance': 555
    },
]
function filterAccounts(arr) {
    // you code goes below


    return newArr;
}


// IGNORE CODE BELOW. IT WILL TEST YOUR CODE. DO NOT CHANGE
let temp = filterAccounts(accounts);
console.log(temp);