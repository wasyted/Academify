'use client'

import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import connectToServer from "./services/connectToServer";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataFromServer , setDataFromServer] = useState('')
  async function fetchData() {
    try {
      const data = await connectToServer('http://127.0.0.1:3000/users');
      console.log('Data from server:', data);
      setDataFromServer(data);
      // Handle data
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }
  }
  function handleClick(){
    fetchData();
  }

  return (
    <main className="relative bg-white dark:bg-gradient-to-tr dark:from-gray-900 dark:to-slate-900 text-black dark:text-white">
      <Header></Header>
      <div className="p-4">
        <Hero></Hero>
        <button onClick={handleClick}>
          Click to fetch data: {dataFromServer}
        </button>
        <Stats></Stats>
        <About></About>
        <Features></Features>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </main>
  );
}
