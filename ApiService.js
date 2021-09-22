class ApiService {
    constructor(api) {
        this.api = api

    }

    getTenPoke = () => fetch(this.api + '/pokemon?limit=10').then(resp=> resp.json())

}