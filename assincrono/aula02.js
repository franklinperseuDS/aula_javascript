/**
 * Apis e fetch
 */

/**
 *  API = application programming interface 
 * intermedia os resultados do back-end com o que vai vir pro front-end
 */

/**
 * FETCH 
 * 
 * fetch retorna um await
 */

/** Exemplo 01 sintaxe */
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

/** Exemplo 02 get */

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache'
})
    .then(response => response.json())
    .then(json => console.log(json))


/** Exemplo 03 post */

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))