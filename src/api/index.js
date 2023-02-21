import axios from "axios"

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async (offset = 0) => {
    try {
        const apiResponse = await axios.get(`${API_URL}/pokemon?offset=${offset}`);

        const data = apiResponse.data;
        return data;
    }
    catch (e) {
        console.log(e);
        return "houston, we have a problem"
    }
}


export const getSpecificPokemon = async (name) => {
    try {
        const apiResponse = await axios.get(`${API_URL}/pokemon/${name}`);

        const data = apiResponse.data
        return data;
    }
    catch (e) {
        console.log(e)
        return "houston, we have a problem"
    }
}




// export const getPokeInfo = async (response) => {
//    response.map(async (item) => {
//     // const result = await axios.get(item.url)
//     console.log(item)
//    })
// }

// export const getPokeInfo = async (response) => {
//     response.map(async (item) => {
//         console.log(item.url)
//         const response = await axios.get(`${item.url}`)
//         // console.log(response.data)

//     })
//  }
 