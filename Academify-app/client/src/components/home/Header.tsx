import Image from "next/image"

export default function Header(){
  return(
    <header className="sticky z-50 top-2 sm:top-4 left-0 right-0 z-index-50 flex items-center justify-between max-w-4xl xl:max-w-6xl mx-3 lg:mx-auto px-4 py-2 bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg rounded-full border">
      <div className="max-w-8">
        <Image className="w-full" width={538} height={132} src={'/Academifyhat-logo.png'} alt='logo'></Image>
      </div>
      <div>
        <button className="border dark:border-blue-600 shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 w-40 py-1.5 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400">
          Get started
        </button>
      </div>
    </header>
  )
}