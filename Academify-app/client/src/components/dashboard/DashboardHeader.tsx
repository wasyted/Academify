import Image from "next/image"

export default function Header(){
  return(
    <header className="fixed z-50 top-0 left-0 right-0 z-index-50 flex items-center justify-between px-4 py-2 bg-white/75 backdrop-blur-lg border">
      <div className="flex items-center justify-between mx-auto max-w-6xl w-full">
        <a href="/" className="max-w-28">
          <Image className="w-full" width={538} height={132} src={'/Academify-logo.png'} alt='logo'></Image>
        </a>
        <div className="sm:hidden flex gap-2 flex-1 justify-start items-center">
          <button className="text-2xl font-bold">
            ≡
          </button>
        </div>
        <div className="flex-1">
          <ul className="flex items-center justify-end">
            <li className="pr-4"><a href="/dashboard">Dashboard</a></li>
            <li className="px-4 border-l"><a href="/dashboard/browse-courses">Browse courses</a></li>
            <li className="px-4 border-l"><a href="">Help</a></li>
            <li className="pl-4 border-l text-lg">🔔</li>
            <li className="border text-center ml-4 p-1 rounded-full w-10 text-xl bg-zinc-200">👤</li>
          </ul>
        </div>
      </div>
    </header>
  )
}