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
            document.body.append(pokeP)
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
           
    })
    }
    
}

    
 


 



