import { css } from '@emotion/css';

const black = '#101010';
const white = '#fff';

export const Layout = ({ children }) => {
  const gridCss = css`
    display: grid;
    grid-template-areas:
      'header'
      'main-area';
    grid-template-rows: 40px 1fr;

    @media (min-width: 1024px) {
      grid-template-areas:
        'header main-area'
        'header main-area';
      grid-template-columns: 80px 1fr;
      grid-template-rows: 1fr;
      height: 100vh;
    }
  `;

  const headerCss = css`
    background-color: ${black};
    color: ${white};
    grid-area: header;
  `;

  const mainAreaCss = css`
    grid-area: main-area;
  `;

  return (
    <div className={gridCss}>
      <header className={headerCss}>x</header>

      <div className={mainAreaCss}>
        {children}
        <footer>x</footer>
      </div>
    </div>
  );
};
