const api = new ApiService('https://pokeapi.co/api/v2')
const main = document.getElementById('main')

// api.getTenPoke()
Poke.getPoke()


document.getElementById('a').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('a button')
    
})


document.getElementById('c').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('c button')
})
