export default function CourseCard(){
  return(
    <div className="flex items-start justify-between border bg-white text-black w-full max-w-xl p-4 sm:px-6 rounded-lg shadow-md min-h-24">
      <p className="font-bold text-md">
        CourseTitle
      </p>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-zinc-700 font-bold text-md">
          Completed: 50%
        </p>
        <div className="flex gap-x-2">
          <button className="shadow rounded-lg border text-black font-bold px-2 w-24 bg-white">
            Overview
          </button>
          <button className="shadow rounded-lg border text-black font-bold px-2 w-24 bg-white border">
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}