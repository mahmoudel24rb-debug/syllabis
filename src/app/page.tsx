import { client } from "@/sanity/client";
import { SERVICES_QUERY } from "@/sanity/queries";

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosBand from "./components/LogosBand";
import Services from "./components/Services";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const services = await client.fetch<Service[]>(
    SERVICES_QUERY,
    {},
    options
  );

  return (
    <>
      <Navbar />
      <Hero />
      <LogosBand />
      <Services services={services} />
      <Testimonial />
      <About />
      <FAQ />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
