import { useState } from 'react';

import Container from '../Container';

export default function Menu(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className='menu'>
      <Container>
        <div className='menu__container'>
          <div className='navbar-brand'>
            <h1 className='menu__title'>
              <span className='menu__logo'>IRON</span>
              <span className='menu__logo--highlight'>FIT</span>
            </h1>
          </div>
          <nav className='navbar'>
            <ul
              className={`navbar-menu
                ${isMenuOpen ? 'navbar-menu-mobile-active' : ''}`}
            >
              <li>
                <a
                  href='#'
                  className={`btn-close
                    ${isMenuOpen ? 'btn-close-active' : ''}`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    onClick={handleMenu}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href='#' className='navbar-link'>
                  Inicio
                </a>
              </li>
              <li>
                <a href='#' className='navbar-link'>
                  Serviços
                </a>
              </li>
              <li>
                <a href='#' className='navbar-link'>
                  Treinadores
                </a>
              </li>
              <li>
                <a href='#' className='navbar-link'>
                  Contato
                </a>
              </li>
              <li>
                <a href='#' className='btn-price-mobile'>
                  Preços
                </a>
              </li>
            </ul>
          </nav>
          <a href='#' className='btn-price'>
            Preços
          </a>
          {/* Mobile menu button */}
          <button className='mobile-menu-button' onClick={handleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-8 w-8'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
