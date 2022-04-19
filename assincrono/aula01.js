/**
 * Promises
 * 
 *  pode ser resolved ou rejected
 * 
 * 3 estados da promise
 * 
 * 1 peding
 * 2 fulfilled
 * 3 reject
 */


/**
 * Exmplo 01 -  estrutura
 */
// const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve('Resolvida');
//     }, 2000);
//     });

// await myPromise
//         .then((result) => result + ' passando pelo then')
//         .then((result) => result + ' e agora acabou')
        // .catch((err) => console.log(err.message));

/**
 *  Exemplo 02 - await async 
*/

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
            window.setTimeout(() => {
                resolve('Resolvida');
            }, 2000);
    });



    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou')
        .catch((err) => console.log(err.message));
    return resolved

}


await resolvePromise();