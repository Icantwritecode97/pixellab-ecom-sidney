import { css } from '@emotion/css';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';

const black = '#101010';
const white = '#fff';
const gray = '#f2f2f2';

export const Layout = ({ children }) => {
  const gridCss = css`
    display: grid;
    grid-template-areas:
      'header'
      'main-area';
    grid-template-rows: 60px 1fr;

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
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const mainAreaCss = css`
    grid-area: main-area;
  `;

  const footerCss = css`
    background-color: ${gray};
    padding: 0 16px;
  `;

  return (
    <div className={gridCss}>
      <header className={headerCss}>
        <FaApple size="32"></FaApple>

        <CgMenu size="32"></CgMenu>
      </header>

      <div className={mainAreaCss}>
        {children}
        <footer className={footerCss}>x</footer>
      </div>
    </div>
  );
};
