/*
Async and Await
*/
function loadExternalContent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 3000);
    });
}

async function getContent() {
    const text = await loadExternalContent();
    console.log(text);
}

console.log('it will call function');
getContent();
console.log('it called function');