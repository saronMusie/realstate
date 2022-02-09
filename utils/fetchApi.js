import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '9398ca019fmsh91b6d5972c9cc80p1116f4jsnb15cb7114bd4'
         }
    });

    return data;
}