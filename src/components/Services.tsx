import Image from 'next/image';
import blueprint from '../../assets/blueprint.png';
import design from '../../assets/design.png';
import { Separator } from './ui/separator';

export default function Services() {
  return (
    <section
      id='services'
      className='section min-h-[80vh] bg-brand-gray-50 w-full flex flex-col justify-center items-center '
    >
      <div className='container py-16 px-8 lg:px-28 gap-3 flex flex-col items-center'>
        <header className='mb-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-brand-gray-500'>
            Nossos Serviços
          </h1>
        </header>

        <div className='w-full p-6 md:p-8 lg:p-10 bg-brand-white bg-opacity-80 shadow-shape rounded-2xl'>
          <div className='flex flex-col gap-3 w-full'>
            <Image
              className='logo w-16 md:w-28 lg:w-16'
              src={blueprint}
              alt='logo da loja Brasilia Iluminação'
              width={140}
              style={{
                filter: 'invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg)',
              }}
            />

            <h1 className='text-lg md:text-xl font-semibold text-brand-gray-500'>
              Projetos de Iluminação
            </h1>
            <Separator />
            <div className='space-y-2'>
              <p className='text-brand-gray-500 text-sm md:text-base leading-tightest'>
                Associa qualidade técnica ao design, apresentando soluções
                eficientes e compatíveis com a utilização de cada ambiente,
                possibilitando a composição de espaços viáveis e aconchegantes
                em projetos personalizados que alinham as necessidades aos
                sonhos e ao orçamento de cada cliente.
              </p>
              <p className='text-brand-gray-500 text-sm md:text-base leading-tightest'>
                Especifica e fornece luminárias e lâmpadas adequadas a
                utilização de cada espaço, otimizando as atividades nele
                realizadas. Através de reuniões online, marcadas previamente,
                apresentamos o pré projeto para aprovação dos clientes.
              </p>
              <p className='text-brand-gray-500 text-sm md:text-base leading-tightest'>
                Em seguida, damos andamento ao projeto executivo de iluminação,
                composto por três etapas fundamentais.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full px-10 py-6 bg-brand-white bg-opacity-80 shadow-shape rounded-2xl'>
          <div className='flex flex-col gap-3 w-full'>
            <Image
              className='logo w-16 md:w-28 lg:w-16'
              src={design}
              alt='logo da loja Brasilia Iluminação'
              width={140}
              style={{
                filter: 'invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg)', // Ajuste esses valores conforme necessário
              }}
            />
            <h1 className='text-lg md:text-xl font-semibold text-brand-gray-500'>
              Consultoria
            </h1>
            <Separator />
            <div className='space-y-2'>
              <p className='text-brand-gray-500 text-sm md:text-base leading-tightest'>
                Este serviço poderá ser prestado de forma presencial ou on-line;
              </p>
              <p className='text-brand-gray-500 text-sm md:text-base leading-tightest'>
                Voltada ao cliente que não precisa de projeto, mas deseja
                orientação para compra e instalação de luminárias; cálculos
                específicos; economia e modernização dos ambientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
