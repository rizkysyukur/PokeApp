import { css } from "@emotion/css";

const PokeCard = (props) => {
	return (
		<>
			<img className={css`
        border-radius: 5px; 
        width: 95%; 
        background-color: #EEEEEE;
				margin-top: 20px;`}
				src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/295.png" />
			<h3 className={css`
        margin: 0 auto;
        background-color: #A4ACAF;
        border-radius: 5px;
        width: 90%;
        padding: 4px;
        color: #222222;
        `}>{props.label1}</h3>
			{props.label2 && <h5 className={css`
        margin: 5px auto 0 auto;
        background-color: #EED535;
        border-radius: 5px;
        width: 90%;
        padding: 4px;
        `}>Owned Total: {props.label2}</h5>}
		</>
	)
}

export default PokeCard;