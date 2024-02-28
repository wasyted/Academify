import Image from "next/image"
export default function Hero(){
  return(
    <main>
      <div className="flex items-center justify-center pt-12 mb-12 p-4 max-w-6xl mx-auto flex-wrap">
        <div className="flex items-start justify-center flex-col gap-4 p-4 ">
          <h1 className="text-4xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100">Begin teaching and learning online now with Academify</h1>
          <p className="text-lg max-w-lg rounded-md text-zinc-700 dark:text-zinc-200">
            Users from all around the world are already in for the Academify experience. Get started and join our community of teachers and students and get your online certification!
          </p>
          <div className="flex items-center justify-center gap-2">
            <button className="border dark:border-blue-600 shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 px-4 sm:px-0 sm:w-40 py-1.5 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400">
              Get started
            </button>
            <p className="text-zinc-700 dark:text-zinc-300">or</p>
            <button className="bg-gradient-to-tr from-zinc-500 to-zinc-400 hover:from-zinc-400 hover:to-zinc-300 active:from-zinc-600 active:to-zinc-400 py-1 rounded-full text-white px-2 sm:px-4">
              Try as guest
            </button>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <Image width={1920} height={1920} src={'/cute-boy-fall-with-many-books-cartoon-3d-icon-illustration-people-education-icon-concept-png.webp'} alt='Image'></Image>
        </div>
      </div>
    </main>
  )
}