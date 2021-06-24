import './assets/css/styles.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
// import PokemonList from './pages/pokemon-list/PokemonList';
import MyPokemon from './pages/my-pokemon/MyPokemon';

function App() {
    return (
        <div className="app">
            <Header title="POKEMON LIST" />
            <Navbar />
            {/* <PokemonList /> */}
            <MyPokemon />
        </div>
    );
}

export default App;