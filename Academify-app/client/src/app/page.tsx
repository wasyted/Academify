import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-gradient-to-tr dark:from-gray-900 dark:to-slate-900 text-black dark:text-white">
      <Header></Header>
      <div className="p-4">
        <Hero></Hero>
        <Stats></Stats>
        <About></About>
        <Features></Features>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </main>
  );
}
