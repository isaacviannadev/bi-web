export default function Services() {
  return (
    <section
      id='services'
      className='section min-h-[80vh] bg-brand-gray-50 w-full flex flex-col justify-center items-center '
    >
      <div className='container py-16 px-8 lg:px-28 gap-3 flex flex-col items-center'>
        <header className='mb-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-brand-gray-500'>
            Serviços
          </h1>
        </header>

        <div className='w-full p-6 md:p-8 lg:p-10 bg-brand-white bg-opacity-80 shadow-shape rounded-2xl'>
          <div className='flex flex-col gap-3 w-full'>
            <h1 className='text-lg md:text-xl font-semibold text-brand-gray-500'>
              Projetos de Iluminação
            </h1>
            <ul className='pl-6 space-y-2'>
              <li className='text-brand-gray-500 relative text-sm md:text-base leading-tightest before:absolute before:top-2 before:left-[-1.25rem] before:w-2 before:h-2 before:bg-brand-orange before:rounded-full'>
                Associa qualidade técnica ao design, apresentando soluções
                eficientes e compatíveis com a utilização de cada ambiente,
                possibilitando a composição de espaços viáveis e aconchegantes
                em projetos personalizados que alinham as necessidades aos
                sonhos e ao orçamento de cada cliente.
              </li>
              <li className='text-brand-gray-500 relative text-sm md:text-base leading-tightest before:absolute before:top-2 before:left-[-1.25rem] before:w-2 before:h-2 before:bg-brand-orange before:rounded-full'>
                Especifica e fornece luminárias e lâmpadas adequadas a
                utilização de cada espaço, otimizando as atividades nele
                realizadas. Através de reuniões online, marcadas previamente,
                apresentamos o pré projeto para aprovação dos clientes.
              </li>
              <li className='text-brand-gray-500 relative text-sm md:text-base leading-tightest before:absolute before:top-2 before:left-[-1.25rem] before:w-2 before:h-2 before:bg-brand-orange before:rounded-full'>
                Em seguida, damos andamento ao projeto executivo de iluminação,
                composto por três etapas fundamentais.
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full px-10 py-6 bg-brand-white bg-opacity-80 shadow-shape rounded-2xl'>
          <div className='flex flex-col gap-3 w-full'>
            <h1 className='text-lg md:text-xl font-semibold text-brand-gray-500'>
              Consultoria
            </h1>
            <ul className='pl-6 space-y-2'>
              <li className='text-brand-gray-500 relative text-sm md:text-base leading-tightest before:absolute before:top-2 before:left-[-1.25rem] before:w-2 before:h-2 before:bg-brand-orange before:rounded-full'>
                Este serviço poderá ser prestado de forma presencial ou on-line;
              </li>
              <li className='text-brand-gray-500 relative text-sm md:text-base leading-tightest before:absolute before:top-2 before:left-[-1.25rem] before:w-2 before:h-2 before:bg-brand-orange before:rounded-full'>
                Voltada ao cliente que não precisa de projeto, mas deseja
                orientação para compra e instalação de luminárias; cálculos
                específicos; economia e modernização dos ambientes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
