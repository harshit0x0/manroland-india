import Link from 'next/link';
// import RedUnderline from './ui/redUnderline';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" >
          Manroland
        </Link>
        <nav>
          <ul className="flex text-sm space-x-6">
            <li className='group'><Link href="/">Home</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/about">About</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/products">Products</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
            <li className='group'><Link href="/contact">Contact</Link>
              <div className={`w-0 group-hover:w-full h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
