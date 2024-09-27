import banner from '../../assets/projeto2.jpg';
import { FlipWords } from './ui/flip-words';

export default function HomeSection() {
  const words = ['atendimento', 'design', 'Iluminação', 'estilo'];

  return (
    <section
      id='home'
      className='relative z-10 w-full min-h-[95vh] bg-fixed bg-cover  bg-no-repeat lg:bg-cover lg:bg-center'
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div
        id='opacity'
        className='absolute inset-0 bg-brand-black bg-opacity-60 flex items-center '
      >
        <div className='flex justify-center items-center w-full text-brand-gray-50'>
          <div
            id='content'
            className='text-left p-5 lg:max-w-custom-600 max-w-[32rem] lg:ml-36 ml-0'
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance'>
              Uma experiência única em <br />
              <FlipWords
                words={words}
                className='text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance'
              />
              <br />
            </h1>
            <p className='text-sm font-medium md:text-lg mb-6 text-balance'>
              Empresa exclusiva em Brasília, especializada em projetos,
              especificação e revenda de produtos de iluminação.
            </p>
            <a
              href='#contact'
              className='bg-brand-orange font-medium text-sm text-brand-gray-50 px-6 py-2 rounded-full hover:bg-brand-orange-600 transition duration-300'
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
