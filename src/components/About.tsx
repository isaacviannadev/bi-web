import Image from 'next/image';
import Camila from '../../assets/camila.jpg';

export default function About() {
  return (
    <section
      id='about'
      className='min-h-[92vh] p-10 md:p-16 lg:py-28 flex justify-center bg-brand-white'
    >
      <div className='container w-auto flex flex-col lg:flex-row items-center'>
        <div className='relative mb-8  md:mr-8'>
          <Image
            src={Camila}
            alt='foto da proprietária em pé em fundo bege e roupa preta, sorrindo e de braços cruzados'
            width={300}
            className='relative bg-fixed rounded-lg md:rounded-xl shadow-shape'
          />
        </div>
        <div className='max-w-custom-600 opacity-80'>
          <h1 className='text-3xl text-brand-gray-500 font-bold mb-4'>
            Quem somos
          </h1>
          <p className='text-base mb-4'>Entre. Sinta... A luz é sua!</p>
          <p className='text-lg mb-4'>
            Há mais de dez anos, sob o olhar sensível da designer Camila de
            Lelis, a luz própria de cada cliente é exteriorizada em ambientes
            que reluzem personalidade e essência.
          </p>
          <p className='text-lg mb-4'>
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
