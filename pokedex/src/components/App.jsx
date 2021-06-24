import React, { useState , useEffect}  from 'react';
import { Card, Container, Input, Menu} from 'semantic-ui-react';
import axios from 'axios';

import PokemonCard from '../containers/PokemonCard';
import MenuComponent from '../containers/Menu';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    console.log('fetching')    
    if (fetching) {
      axios.get(`http://localhost:3004/pokemons/?_limit=21&_page=${currentPage}`)
        .then(response => {
          console.log(response)          
          for (let i = 0; i < response.data.length; i++) {
            response.data[i] = Object.assign(response.data[i], {
              image:'./pokemons/' + (response.data[i].id) + '.png'
            });
          }
          setPokemons([...pokemons, ...response.data])
          setCurrentPage(prevState => prevState + 1)    
        })
        .finally(() => setFetching(false));        
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler )
    };
  }, [])
  const closeToBottom = 100
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < closeToBottom) {
      setFetching(true)
    }
  }

  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  
  useEffect(() => {
    setFilteredData(
      pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, pokemons])

  return (
    <Container>
      <MenuComponent />
      <Menu secondary>
        <Menu.Item>        
          <Input
            icon="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          ></Input>
        </Menu.Item>
      </Menu>
      <Card.Group>
        {filteredData.map((pokemon, i) => <PokemonCard key={i} {...pokemon} />)}
      </Card.Group>
    </Container>    
  )
}  

export default App;
