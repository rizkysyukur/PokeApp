import { css } from "@emotion/css";

const Navbar = () => {
	return (
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

	)
}

export default Navbar;