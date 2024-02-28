export default function InterestsForm(){
  return(
    <div className="mt-10 sm:mt-0 min-h-screen p-4 flex items-center sm:justify-center flex-col gap-y-4">
      <h1 className="text-center text-3xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100">What are your interests?</h1>
      <form action="" method="post" className="max-w-lg">
        <div className="flex items-center gap-4 flex-col w-full max-w-md mb-5">
          <p>Select one or more:</p>
          <div className="flex items-center sm:justify-start justify-center gap-4 flex-wrap">
            <label htmlFor="programming" className="flex items-center justify-center gap-x-2 border border-blue-600 shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 px-4 py-1 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400 focus:ring focus:ring-black">Programming
              <input type="checkbox" name="programming" id="programming" />
            </label>
            <label htmlFor="design" className="flex items-center justify-center gap-x-2 border border-indigo-600 shadow transition bg-gradient-to-tr hover:from-indigo-500 hover:to-indigo-400 px-4 py-1 rounded-full text-white font-bold from-indigo-600 to-indigo-600 active:from-indigo-600 active:to-indigo-400 focus:ring focus:ring-black">Design
              <input type="checkbox" name="design" id="design" />
            </label>
            <label htmlFor="business" className="flex items-center justify-center gap-x-2 border border-orange-600 shadow transition bg-gradient-to-tr hover:from-orange-500 hover:to-orange-400 px-4 py-1 rounded-full text-white font-bold from-orange-600 to-orange-600 active:from-orange-600 active:to-orange-400 focus:ring focus:ring-black">Business
              <input type="checkbox" name="business" id="business" />
            </label>
            <label htmlFor="languages" className="flex items-center justify-center gap-x-2 border border-yellow-600 shadow transition bg-gradient-to-tr hover:from-yellow-500 hover:to-yellow-400 px-4 py-1 rounded-full text-white font-bold from-yellow-500 to-yellow-500 active:from-yellow-600 active:to-yellow-400 focus:ring focus:ring-black">Languages
              <input type="checkbox" name="languages" id="languages" />
            </label>
            <label htmlFor="cooking" className="flex items-center justify-center gap-x-2 border border-red-600 shadow transition bg-gradient-to-tr hover:from-red-500 hover:to-red-400 px-4 py-1 rounded-full text-white font-bold from-red-500 to-red-500 active:from-red-600 active:to-red-400 focus:ring focus:ring-black">Cooking
              <input type="checkbox" name="cooking" id="cooking" />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4 mb-5 w-full">
          <button className="shadow w-40 py-1.5 rounded-full font-bold from-blue-600 to-blue-400 dark:from-zinc-50 dark:to-zinc-200 dark:text-black border dark:border-white shadow transition bg-gradient-to-tr dark:hover:from-white dark:hover:to-white hover:from-blue-500 hover:to-blue-400 text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400" type="submit">Confirm interests</button>
          <a href="/login" className=""> Maybe later</a>
        </div>
      </form>
    </div>
  )
}