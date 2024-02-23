export default function CourseCard(){
  return(
    <div className="flex items-start justify-between border bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 w-full max-w-xl p-4 sm:px-6 rounded-lg shadow-md min-h-24">
      <p className="font-bold text-md">
        CourseTitle
      </p>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-zinc-700 dark:text-zinc-300 font-bold text-md">
          Completed: 50%
        </p>
        <div className="flex gap-x-2">
        <button className="shadow rounded-lg border text-black px-2 w-24 bg-white dark:bg-zinc-50/25 dark:text-white dark:border-zinc-50/25 border">
            Overview
          </button>
          <button className="shadow rounded-lg border text-black px-2 w-24 bg-white dark:bg-zinc-50/25 dark:text-white dark:border-zinc-50/25 border">
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}