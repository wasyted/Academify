import Image from "next/image"

export default function Header(){
  return(
    <header className="fixed z-50 top-0 left-0 right-0 z-index-50 flex items-center justify-between max-w-5xl mx-auto px-4 py-2 bg-white/75 backdrop-blur-lg rounded-full border mt-2">
      <div className="max-w-8">
        <Image className="w-full" width={538} height={132} src={'/Academifyhat-logo.png'} alt='logo'></Image>
      </div>
      <div>
        <button className="border shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 w-40 py-1.5 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400">
            Get started
        </button>
      </div>
    </header>
  )
}