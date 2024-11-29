import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-40 px-44 text-center bg-primary text-white">
        <h2 className="text-4xl font-bold mb-8">Pioneering Printing Excellence</h2>
        <p className='px-44'>
          We are a leading provider of high-quality printing services for both
          individuals and businesses in India. Our team of experienced professionals is
          dedicated to delivering exceptional results that meet your unique needs.
        </p>
      </section>


      <section className="py-12 px-1">
        <h2 className="text-3xl font-bold text-center my-6">Explore Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <ProductCard
            title="Roland 700"
            description="A state-of-the-art printing machine for high-quality outputs."
            image="/images/Roland700.png"
          />
          <ProductCard
            title="Roland 900"
            description="A large-format printing machine designed for industrial needs."
            image="/images/Roland900.png"
          />
        </div>
      </section>
    </>
  );
}
