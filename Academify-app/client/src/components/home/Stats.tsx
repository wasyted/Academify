export default function Stats(){
  return(
    <div className="flex items-center justify-between flex-wrap max-w-5xl mx-auto bg-white/75 dark:bg-transparent px-4 py-4 rounded-full sm:border mt-2">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-2 sm:w-full sm:flex-1">
        <p className="text-5xl sm:text-6xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-600 dark:from-blue-600 dark:to-blue-500">
          +23k
        </p>
        <p className="text-lg max-w-lg rounded-md text-zinc-700 dark:text-zinc-200">
          Users
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-2 sm:w-full sm:flex-1">
        <p className="text-5xl sm:text-6xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-600 dark:from-blue-600 dark:to-blue-500">
          +150
        </p>
        <p className="text-lg max-w-lg rounded-md text-zinc-700 dark:text-zinc-200">
          Instructors
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-2 sm:w-full sm:flex-1">
        <p className="text-5xl sm:text-6xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-600 dark:from-blue-600 dark:to-blue-500">
          +9
        </p>
        <p className="text-lg max-w-lg rounded-md text-zinc-700 dark:text-zinc-200">
          Countries
        </p>
      </div>
    </div>
  )
}

