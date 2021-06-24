import { css } from "@emotion/css";

const Header = (props) => {
	return (
		<h2 className={css`
		text-align: center;
		height: 40px;
		line-height: 40px;
		background-color: #313131;
		color: white;
		margin: 0;`}
		>{props.title}</h2>
	)
}

export default Header;