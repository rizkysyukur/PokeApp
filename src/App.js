import './assets/css/styles.css';
import PokemonList from './pages/pokemon-list/PokemonList';
import MyPokemon from './pages/my-pokemon/MyPokemon';
import PokemonDetail from './pages/pokemon-detail/PokemonDetail';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <PokemonList />
                    </Route>
                    <Route path="/my-pokemon">
                        <MyPokemon />
                    </Route>
                    <Route path="/pokemon-detail">
                        <PokemonDetail />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;