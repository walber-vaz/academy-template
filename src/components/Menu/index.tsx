import Container from '../Container';

export default function Menu(): JSX.Element {
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
            <ul className='navbar-menu'>
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
            </ul>
          </nav>
          <a href='#' className='btn-price'>
            Preços
          </a>
        </div>
      </Container>
    </section>
  );
}
