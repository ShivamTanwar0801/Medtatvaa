import CTA from '../components/product/CTA';
import Diagnostics from '../components/product/Diagnostics';
import FAQ from '../components/product/FAQ';
import { Features } from '../components/product/Features';
import Functionality from '../components/product/Functionality';
import Hero from '../components/product/Hero';
import Workflow from '../components/product/Workflow';

const Products = () => {
  return (
    <>
      <Hero />
      <Features />
      <Functionality />
      <Diagnostics/>
      <Workflow/>
      <FAQ/>
      <CTA />
    </>
  );
};

export default Products;
