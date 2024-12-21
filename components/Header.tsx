'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import RedUnderline from './ui/redUnderline';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const main = document.querySelector('#main');
    main?.addEventListener('click', () => {
      if (open) {
        setOpen(false);
      }
    });

  })

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <header className="bg-primary text-white shadow py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className='px-4' >
          {/* <Image
            src="/images/logos/manroland-logo.jpg"
            alt="Logo"
            width={100}
            height={600}
            className=""
          /> */}
          <div className="mx-auto flex flex-col my-0 space-y-0 items-end w-fit">
            <div className="text-lg lg:text-2xl p-0  font-bold mb-0">manroland </div>
            <div className="text-sm lg:text-md text-red-600 p-0 font-bold">
              sheetfed
              {/* <span className="text-3xl text-red-100 p-0 font-bold ml-1 mb-1">in</span> */}
            </div>
          </div>
        </Link>
        <nav>
          <ul className={`text-sm  md:flex transistion duration-500 ease-in-out ` +
            (open ? ' flex-col opacity-90 absolute top-0 py-10 px-12 h-screen right-0 space-y-10 bg-white text-black' : ' space-x-6  hidden')}>
            {
              open && (
                <button className="md:hidden flex justify-center w-8 h-8 rounded-full" id="nav-toggle" onClick={toggleOpen}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>)
            }
            <li className='group'><Link href="/">Home</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/about">About</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/products">Products</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/consumables">Consumables</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/services">Services</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/partners">Partners</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/contact">Contact</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
          </ul>
        </nav>
        {
          !open && (
            <button className="md:hidden flex justify-center mx-3 my-auto w-8 h-8 rounded-full" id="nav-toggle" onClick={toggleOpen}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>)
        }
      </div>
    </header>
  );
}
