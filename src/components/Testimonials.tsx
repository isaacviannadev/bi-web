import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export default function Testimonials() {
  return (
    <section id='testimonials' className='bg-brand-white py-'>
      <div className='container flex flex-col items-center'>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold text-brand-gray-500'>
            Depoimentos de quem já passou por aqui
          </h1>
        </header>
        <div className='w-[40rem] flex justify-center p-12'>
          <Carousel className='w-full shadow-shape rounded-2xl max-w-4xl'>
            <CarouselContent className='flex justify-center space-x-4'>
              <CarouselItem className='flex justify-center'>
                <div className='p-6 bg-brand-white bg-opacity-80'>
                  <div className='flex flex-col gap-3'>
                    <blockquote className='mb-4'>
                      <p className='text-gray-700 text-sm leading-tight'>
                        <span className='text-brand-orange text-2xl inline'>
                          &ldquo;
                        </span>
                        Encontrei a Camila, em outro local em que ela trabalhava
                        com iluminação e a contratei agora pela empresa dela
                        para cuidar de outra fase da minha iluminação. Me senti
                        acolhido em todo o processo de atendimento e indicaria
                        os serviços com certeza.
                      </p>
                    </blockquote>
                    <cite className='text-brand-gray-500 text-xs'>
                      Vitor - Jardim Botânico/DF
                    </cite>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='flex justify-center'>
                <div className='p-6 bg-brand-white bg-opacity-80'>
                  <div className='flex flex-col gap-3'>
                    <blockquote className='mb-4'>
                      <p className='text-gray-700 text-sm leading-tight'>
                        <span className='text-brand-orange text-2xl inline'>
                          &ldquo;
                        </span>
                        Camila é muito atenciosa, os materiais são bem
                        especificados. Ela estudou o projeto de iluminação e
                        propôs soluções para melhorar o custo-benefício.
                        Interagiu com o engenheiro responsável pela obra e
                        indicou profissionais. Houve suporte pós-venda dentro do
                        esperado.
                      </p>
                    </blockquote>
                    <cite className='text-brand-gray-500 text-xs'>
                      Hugo Affonso - Sudoeste/DF
                    </cite>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='flex justify-center'>
                <div className='p-6 bg-brand-white bg-opacity-80'>
                  <div className='flex flex-col gap-3'>
                    <blockquote className='mb-4'>
                      <p className='text-gray-700 text-sm leading-tight'>
                        <span className='text-brand-orange text-2xl inline'>
                          &ldquo;
                        </span>
                        Além de ser muito técnica é muito humana. Confio todos
                        os meus projetos de iluminação a ela que sempre agrega
                        valor às minhas ideias e potencializa os resultados.
                        Durante os atendimentos, me senti ouvida, cuidada e
                        compreendida!
                      </p>
                    </blockquote>
                    <cite className='text-brand-gray-500 text-xs'>
                      Tatiana Murta - Lago Norte/DF
                    </cite>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
