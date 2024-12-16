import IntroSection from '../components/IntroSection';
import Hero from '../components/Hero';
import CustomersSection from '../components/Customers';
import Testimonials from '@/components/testimonials';
import Explore from '@/components/Explore';

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <CustomersSection />
      <Testimonials />
      <Explore />
    </>
  );
}
