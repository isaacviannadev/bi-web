'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '../../assets/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id='header'
      className='flex items-center md:py-2 md:px-10 fixed top-0 left-0 z-[100] w-full md:mb-8'
    >
      <div className='w-full flex px-6 justify-between items-center lg:px-16 py-2 md:border md:border-brand-gray-50 shadow-header md:rounded-full bg-brand-white bg-opacity-96'>
        <a className='title' href='#home'>
          <Image
            className='logo w-24 md:w-28 lg:w-36'
            src={logo}
            alt='logo da loja Brasilia Iluminação'
            width={140}
          />
        </a>

        <button
          className='block md:hidden focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            className='w-8 h-8 text-brand-dark'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:hidden flex flex-col space-y-2 text-brand-dark absolute top-full left-0 right-0 bg-brand-white p-4 shadow-md z-50`}
        >
          <a className='cursor-pointer' href='#home'>
            Início
          </a>
          <a className='cursor-pointer' href='#about'>
            Quem somos
          </a>
          <a className='cursor-pointer' href='#services'>
            Serviços
          </a>
          <a className='cursor-pointer' href='#testimonials'>
            Depoimentos
          </a>
          <a className='cursor-pointer' href='#gallery'>
            Projetos
          </a>
          <a className='cursor-pointer' href='#contact'>
            Contato
          </a>
          <a
            className='cursor-pointer text-brand-orange'
            href='https://shop.brasiliailuminacao.com.br/'
          >
            Nossa Loja
          </a>
        </div>

        <div className='hidden md:flex items-center space-x-6 text-brand-dark text-xs lg:text-sm'>
          <a className='cursor-pointer' href='#home'>
            Início
          </a>
          <a className='cursor-pointer' href='#about'>
            Quem somos
          </a>
          <a className='cursor-pointer' href='#services'>
            Serviços
          </a>
          <a className='cursor-pointer' href='#testimonials'>
            Depoimentos
          </a>
          <a className='cursor-pointer' href='#gallery'>
            Projetos
          </a>
          <a className='cursor-pointer' href='#contact'>
            Contato
          </a>
          <a
            className='cursor-pointer text-brand-orange'
            href='https://shop.brasiliailuminacao.com.br/'
          >
            Nossa Loja
          </a>
        </div>
      </div>
    </header>
  );
}
