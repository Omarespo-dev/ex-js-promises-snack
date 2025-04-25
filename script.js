// 🏆 Snack 1 Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id){

    return new Promise((resolve,reject) => {

        const request =`https://dummyjson.com/posts/${id}`
        
        fetch(request)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(reject)

    })
}

getPostTitle(1)
.then(data => console.log(data))
.catch(err => console.error(err))

// getPostTitle(2)
// .then(data => console.log(data))
// .catch(err => console.error(err))

// getPostTitle(4)
// .then(data => console.log(data))
// .catch(err => console.error(err))





// 🎯 Bonus: Ottieni l'intero post con l'autore

// Crea una funzione getPost(id) che recupera l'intero post.

function getPost(id){
    const promise = new Promise((resolve,reject) => {
        const request =`https://dummyjson.com/posts/${id}`

        fetch(request)
            .then(response => response.json())
            
            .then(post => {
                return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => response.json())
                .then(user => {
                    // Chiave = valore 
                    post.user = user

                    resolve(post)

                })
                .catch(reject)
            })
            .catch(reject)
    })

    return promise
}

getPost(1)
    .then(data => console.log(data))
    .catch(err => console.error(err))





// 🏆 Snack 2

// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado(){
    return new Promise((resolve,reject) => {
        
        const numeroCasuale = Math.floor(Math.random() * 6) + 1;

        setTimeout(() => {
            if(Math.random() < 0.2){
                reject("OPS IL DADO SI E INTASATO")
            }else{
                resolve(numeroCasuale)
            }
        }, 3000);

    })
}

lanciaDado()
    .then(data => console.log(data))
    .catch(err => console.error(err))