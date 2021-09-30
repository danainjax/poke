class Poke {
    static all = []
    constructor(poke) {
        this.data = poke
        this.constructor.all.push(this)
    }


   static renderIndex = () => {
    //    const {name, url} = this
        this.all.forEach((poke) => {
            const pokeP = document.createElement('p')
            main.append(pokeP)
            pokeP.innerHTML = `
            <h2>${poke.data.name}</h2>
            `

            
    })
}

    


 static getPoke () {
    api.getTenPoke().then(pokeJSON => {
        const pokes = pokeJSON.results
        console.log (pokes)
        pokes.forEach((poke) => new Poke(poke));
            this.renderIndex()
            this.renderLetter()
           
    })
    }

    static renderLetter = () => {
        
        
        document.getElementById('b').addEventListener('click', (e) => {
            e.preventDefault()
            const bPoke = Poke.all.filter(poke => poke.data.name.startsWith('b')) 
            console.log(bPoke)
            main.innerHTML = ""
            bPoke.forEach (poke => {
                
                const div = document.createElement('div')
                console.log(poke.data.name)
                main.append(div)
                div.innerHTML += `<p>${poke.data.name}</p>`
            })
           
            })
       
    }

}
    
 


 



