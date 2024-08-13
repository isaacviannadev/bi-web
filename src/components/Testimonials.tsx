'use client';

import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Encontrei a Camila em outro local em que ela trabalhava com iluminação e a contratei agora pela empresa dela para cuidar de outra fase da minha iluminação. Me senti acolhido em todo o processo de atendimento e indicaria os serviços com certeza.',
      name: 'Vitor',
      title: 'Jardim Botânico/DF',
    },
    {
      quote:
        'Camila é muito atenciosa, os materiais são bem especificados. Ela estudou o projeto de iluminação e propôs soluções para melhorar o custo-benefício. Interagiu com o engenheiro responsável pela obra e indicou profissionais. Houve suporte pós-venda dentro do esperado.',
      name: 'Hugo Affonso',
      title: 'Sudoeste/DF',
    },
    {
      quote:
        'Além de ser muito técnica, é muito humana. Confio todos os meus projetos de iluminação a ela que sempre agrega valor às minhas ideias e potencializa os resultados. Durante os atendimentos, me senti ouvida, cuidada e compreendida!',
      name: 'Tatiana Murta',
      title: 'Lago Norte/DF',
    },
  ];

  return (
    <section id='testimonials' className='bg-brand-white min-h-[70vh] flex'>
      <div className='container flex flex-col justify-center items-center'>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold text-brand-gray-500'>
            Depoimentos de quem já passou por aqui
          </h1>
        </header>
        <div className='w-full flex justify-center p-6'>
          <InfiniteMovingCards
            items={testimonials}
            direction='left'
            speed='slow'
            pauseOnHover={true}
            className='my-custom-class'
          />
        </div>
      </div>
    </section>
  );
}
