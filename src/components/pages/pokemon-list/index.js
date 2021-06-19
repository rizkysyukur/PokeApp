import logo from '../../../logo.svg';
import { css, cx } from '@emotion/css'

export default function PokemonList() {
  return (
    <div className="gallery">
			<img src={logo} className="App-logo" alt="logo" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <div
        className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
      >
        Hover to change color.
      </div> */}
    </div>
  );
}
