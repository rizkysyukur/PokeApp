import { css } from "@emotion/css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="row">
			<div className="column">
				<Link to="/">
					<button className={css`
                    background-color: #30A7D7;
                    width: 100%;
                    border-radius: 5px;
                    color: white;
                    height: 30px;
                    margin: 5px 10px 10px 0;
                    border: none`}
					>POKEMON LIST</button>
				</Link>

			</div>
			<div className="column">
				<Link to="/my-pokemon">
					<button className={css`
                    background-color: #30A7D7;
                    width: 100%;
                    border-radius: 5px;
                    color: white;
                    height: 30px;
                    margin: 5px 10px 10px 0px;
                    border: none`}
					>MY POKEMON</button>
				</Link>
			</div>
		</div>

	)
}

export default Navbar;