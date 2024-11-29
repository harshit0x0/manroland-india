import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" >
          Manroland
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
