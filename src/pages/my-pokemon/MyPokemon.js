import PokeCard from "../../components/poke-card/PokeCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const MyPokemon = () => {
    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const pokeCards = index.map(item => {
        return (
            <div key={item} className="column">
                <PokeCard label1="Ucok" />
            </div>
        )
    })

    return (
        <>
            <Header title="MY POKEMON" />
            <Navbar />
            <div className="row">
                {pokeCards}
            </div>
        </>
    )
}

export default MyPokemon;