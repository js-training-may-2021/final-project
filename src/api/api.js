import axios from "axios";

// значально пробовал с аксиос, хотел изменять данные с db.json, аксиосами так брать данные в дургих компонентах, 
// сделать здесь axios.create и вынести туда какой то instance

export const getPokemons = () => {
    // axios.get(`http://localhost:8000/pokemons?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
    return axios.get(`http://localhost:8000/pokemons`)
}

