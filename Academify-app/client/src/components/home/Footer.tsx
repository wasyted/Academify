'use client'

import Image from "next/image"
import { useCopyToClipboard } from "@/hooks/customHooks"

export default function Footer(){
  const [copiedText, copy] = useCopyToClipboard()
  
  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
      })
      .catch(error => {
        console.error('Failed to copy!', error)
      })
  }

  return(
    <div className="relative items-start justify-center md:place-content-center p-4 bg-blue-600 dark:bg-black/50 sm:min-h-72 grid grid-cols-2 mt-24 ">

      <div className="absolute bottom-full left-12 md:left-28 lg:left-42 xl:left-72 w-full max-w-32">
        <Image width={3000} height={3000} src={'/young-businesswoman-pointing-fingers-down-3d-cartoon-illustration-png.png'} alt='Image'></Image>
      </div>
      <div className="flex items-start justify-center flex-col gap-4 p-4 max-w-md mx-auto">
        <h1 className="text-2xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-white to-zinc-200">Academify</h1>
        <p className="text-md text-zinc-200">
          Academify is a prototype of an online learning platform featuring course creation and subscription, progress tracking and recommendations.
        </p>
        <p className="text-md text-zinc-200">
          It is a fullstack project designed by Matías Wasyluk and developed with Next.js, Express.js and MongoDB.
        </p>
        <div className="flex items-center justify-start md:justify-center gap-2 flex-wrap">
          <button className="transition bg-gradient-to-tr from-zinc-50 to-zinc-50 w-32 py-1.5 rounded-full text-black font-bold hover:from-blue-500 hover:to-blue-400 active:from-sky-600 active:to-sky-400">
            View code
          </button>
          <button className="transition bg-gradient-to-tr from-zinc-50 to-zinc-50 w-40 py-1.5 rounded-full text-black font-bold hover:from-blue-500 hover:to-blue-400 active:from-sky-600 active:to-sky-400">
            See other projects
          </button>
        </div>
      </div>
      <div className="flex items-start justify-start flex-col gap-4 p-4 w-full max-w-md mx-auto">
        <h1 className="text-2xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-white to-zinc-200">Useful Links</h1>
        <ul className="text-lg max-w-2xl text-zinc-200">
          <li>
            <a href="/" target="_self" rel="noopener noreferrer">Home</a>
          </li>
          <li>
            <a href="/dashboard" target="_self" rel="noopener noreferrer">Dashboard</a>
          </li>
          <li>
            <a href="/browse-courses" target="_self" rel="noopener noreferrer">Browse courses</a>
          </li>
          <li>
            <a href="/get-started" target="_self" rel="noopener noreferrer">Get started</a>
          </li>
          <li>
            <a href="/help" target="_self" rel="noopener noreferrer">Help</a>
          </li>
          <li>
            <a href="/faq" target="_self" rel="noopener noreferrer">FAQ</a>
          </li>
          <li>
            <a href="/legal" target="_self" rel="noopener noreferrer">Legal</a>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block"></div>
      <div className="flex items-start justify-start flex-col gap-4 p-4 w-full max-w-md mx-auto">
        <h1 className="text-2xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-white to-zinc-200">About Matías Wasyluk</h1>
        <ul className="text-lg max-w-2xl text-zinc-200">
          <li>
            <a href="https://matiaswasyluk.vercel.app/resume" target="_blank" rel="noopener noreferrer">Resume ↗</a>
          </li>
          <li>
            <a href="https://matiaswasyluk.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio ↗</a>
          </li>
          <a href="https://wa.me/+5491135628327?text=Hi%2C%20i%27m%20coming%20from%20the%20Academify%20project%2C%20i%20want%20to%20inquire%20with%20you." target="_blank" rel="noopener noreferrer" className='relative' >
            +54 911 3562-8327 
            <span
            className="text-zinc-400 dark:text-zinc-500">
              // WhatsApp
            </span>
            <span className="absolute bottom-0 left-full w-max ml-2">
              { copiedText != null ? <p className="text-pink-400">copied to clipboard!</p> : ''}
            </span>
          </a>
          <li>
            <a href="mailto:matiasezequielwasyluk@gmail.com" target="_blank" rel="noopener noreferrer">matiasezequielwasyluk@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/wasyted" target="_blank" rel="noopener noreferrer">My Github ↗</a>
          </li>
        </ul>
      </div>
      {/* <div className="flex items-start justify-start flex-col gap-4 p-4 max-w-md mx-auto col-span-2 md:col-span-1">
        <h1 className="text-2xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-white to-zinc-200">From anywhere, anytime.</h1>
        <p className="text-md max-w-2xl text-zinc-200">
          Sign-up and create or subscribe to the courses. You can learn anything: from everyday tasks like cooking or carpentry to complex topics like math and physics. We have a comprehensive program for creators in which you can monetize your subscriptions and earn by teaching.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="transition bg-gradient-to-tr from-zinc-50 to-zinc-50 w-40 py-1.5 rounded-full text-black font-bold hover:from-blue-500 hover:to-blue-400 active:from-sky-600 active:to-sky-400">
            Get started
          </button>
        </div>
      </div> */}
    </div>
  )
}