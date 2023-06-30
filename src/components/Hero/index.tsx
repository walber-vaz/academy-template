import hero from '../../assets/hero.png';
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
      <Menu />
    </section>
  );
}
