import Camila from '../../assets/camila.jpg'; // Imagem importada
import { ParallaxImage } from './ui/direction-aware-hover';

export default function About() {
  return (
    <section
      id='about'
      className='min-h-[96vh] px-36 flex items-center bg-brand-white overflow-hidden'
    >
      <div className='container w-auto flex flex-col md:flex-row items-center'>
        <div className='relative pb-36 mb-8 md:mb-0 md:mr-8'>
          <ParallaxImage src={Camila} />
        </div>
        <div className='max-w-[600px] opacity-80'>
          <h1 className='text-3xl text-brand-gray-500 font-bold mb-4'>
            Quem somos
          </h1>
          <p className='text-base mb-4'>Entre. Sinta... A luz é sua!</p>
          <p className='text-base leading-tightest mb-4'>
            Há mais de dez anos, sob o olhar sensível da designer Camila de
            Lelis, a luz própria de cada cliente é exteriorizada em ambientes
            que reluzem personalidade e essência.
          </p>
          <p className='text-base leading-tightest mb-4'>
            Mais que iluminar, a Brasília Iluminação possibilita que os efeitos
            e sensações da luz sejam irradiados, criando, assim, emoções,
            trazendo aconchego, despertando vidas e sonhos, relaxando mentes e
            almas, clareando e contornando ideias que se materializam no acender
            de luzes.
          </p>
        </div>
      </div>
    </section>
  );
}
