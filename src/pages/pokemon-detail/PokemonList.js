import { css } from '@emotion/css'

const PokemonList = () => {
    const pokeCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <>
            <h2 className={css`
            text-align: center;
            height: 40px;
            line-height: 40px;
            background-color: #313131;
            color: white;
            margin: 0;`}
            > POKEMON LIST </h2>
            <div className="row">
                <div className="column">
                    <button className={css`
                    background-color: #30A7D7;
                    width: 100%;
                    border-radius: 5px;
                    color: white;
                    height: 30px;
                    margin: 5px 10px 10px 0;
                    border: none`}
                    >POKEMON LIST</button>
                </div>
                <div className="column">
                    <button className={css`
                    background-color: #30A7D7;
                    width: 100%;
                    border-radius: 5px;
                    color: white;
                    height: 30px;
                    margin: 5px 10px 10px 0px;
                    border: none`}
                    >MY POKEMON</button>
                </div>
            </div>
            <div className="row">
                {pokeCard.map(item => {
                    return (
                        <div className="column">
                            <img className={css`
                            border-radius: 5px; 
                            width: 95%; 
                            background-color: #EEEEEE;`} 
                            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/295.png" />
                            <h3 className={css`
                            margin: 0 auto;
                            background-color: #A4ACAF;
                            border-radius: 5px;
                            width: 90%;
                            padding: 4px;
                            color: #222222;
                            `}>Exploud</h3>
                            <h5 className={css`
                            margin: 5px auto 20px auto;
                            background-color: #EED535;
                            border-radius: 5px;
                            width: 90%;
                            padding: 4px;
                            `}>Owned Total: 100</h5>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PokemonList;