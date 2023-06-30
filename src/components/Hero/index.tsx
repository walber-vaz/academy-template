import hero from '../../assets/hero.png';
import Container from '../Container';
import Menu from '../Menu';

export default function Hero(): JSX.Element {
  return (
    <section
      className='hero'
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='hero__overlay'></div>
      <Menu />
      <Container>
        <div className='hero__content'>
          <h1 className='hero__title'>
            <span className='hero__title-desc'>Pronto para treinar</span>
            <span className='hero__subtitle-desc'>seu corpo e mente?</span>
          </h1>
          <p className='hero__description'>
            O treinamento na academia é uma abordagem estruturada e disciplinada
            do exercício físico que se concentra na força, resistência e
            melhoria geral do condicionamento físico.
          </p>
          <button className='hero__button'>Matricule-se agora</button>
        </div>
      </Container>
    </section>
  );
}
