export default function Categories(){
  return(
    <header className="flex items-center justify-between max-w-6xl mx-auto px-4 py-2 bg-white/75 backdrop-blur-lg rounded-full border mt-2">
      <div className="flex items-center justify-center gap-2">
        <p className="transition bg-white px-4 py-1.5 rounded-full text-black font-bold max-w-min focus:ring focus:ring-black">
          Categories:
        </p>
        <button className="border shadow transition bg-gradient-to-tr hover:from-green-500 hover:to-green-400 px-4 py-1 rounded-full text-white font-bold from-green-600 to-green-600 active:from-green-600 active:to-green-400 focus:ring focus:ring-black">
          Free <span className="rounded-full bg-zinc-50/50 px-1.5">x</span>
        </button>
        <button className="border shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 px-4 py-1 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400 focus:ring focus:ring-black">
          Tech 
        </button>
        <button className="border shadow transition bg-gradient-to-tr hover:from-indigo-500 hover:to-indigo-400 px-4 py-1 rounded-full text-white font-bold from-indigo-600 to-indigo-600 active:from-indigo-600 active:to-indigo-400 focus:ring focus:ring-black">
          Media <span className="rounded-full bg-zinc-50/50 px-1.5">x</span>
        </button>
        <button className="border shadow transition bg-gradient-to-tr hover:from-orange-500 hover:to-orange-400 px-4 py-1 rounded-full text-white font-bold from-orange-600 to-orange-600 active:from-orange-600 active:to-orange-400 focus:ring focus:ring-black">
          Science <span className="rounded-full bg-zinc-50/50 px-1.5">x</span>
        </button>
        <button className="border shadow transition bg-gradient-to-tr hover:from-yellow-500 hover:to-yellow-400 px-4 py-1 rounded-full text-white font-bold from-yellow-500 to-yellow-500 active:from-yellow-600 active:to-yellow-400 focus:ring focus:ring-black">
          Cooking
        </button>
      </div>
    </header>
  )
}