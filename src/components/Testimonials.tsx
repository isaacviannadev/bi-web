'use client';
import { CardStack } from './ui/card-stack';

export default function Testimonials() {
  const testimonials = [
    {
      id: 0,
      name: 'Vitor',
      designation: 'Jardim Botânico/DF',
      content: (
        <p>
          Encontrei a Camila, em outro local em que ela trabalhava com
          iluminação e a contratei agora pela empresa dela para cuidar de outra
          fase da minha iluminação. Me senti acolhido em todo o processo de
          atendimento e <strong>indicaria os serviços com certeza.</strong>
        </p>
      ),
    },
    {
      id: 1,
      name: 'Hugo Affonso',
      designation: 'Sudoeste/DF',
      content: (
        <p>
          Camila é muito atenciosa, os materiais são bem especificados. Ela
          estudou o projeto de iluminação e propôs soluções para melhorar o
          custo-benefício. <strong>Interagiu com o engenheiro</strong>{' '}
          responsável pela obra e indicou profissionais. Houve suporte pós-venda
          dentro do esperado.
        </p>
      ),
    },
    {
      id: 2,
      name: 'Tatiana Murta',
      designation: 'Lago Norte/DF',
      content: (
        <p>
          Além de ser muito técnica, é muito humana. Confio todos os meus
          projetos de iluminação a ela que sempre agrega valor às minhas ideias
          e potencializa os resultados. Durante os atendimentos,{' '}
          <strong>me senti ouvida, cuidada e compreendida!</strong>
        </p>
      ),
    },
  ];

  return (
    <section id='testimonials' className='bg-brand-white min-h-[70vh] flex '>
      <div className='container flex flex-col justify-center items-center'>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold text-brand-gray-500'>
            Depoimentos de quem já passou por aqui
          </h1>
        </header>
        <div className='w-[40rem] flex justify-center p-12'>
          <CardStack items={testimonials} />
        </div>
      </div>
    </section>
  );
}
