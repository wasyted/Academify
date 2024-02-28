export default function RoleForm(){
  return(
    <div className="mt-10 sm:mt-0 min-h-screen p-4 flex items-center sm:justify-center flex-col gap-y-4">
      <h1 className="text-center text-3xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100 mb-5">How will you use Academify?</h1>
      <form action="" method="post" className="max-w-lg">
        <div className="flex items-center gap-4 flex-col w-full max-w-md mb-5">
          <div className="flex items-center justify-start gap-4 flex-wrap">
            <fieldset>
              <label className="flex items-center justify-center gap-x-2 border font-bold from-zinc-50 to-zinc-200 text-black active:from-blue-600 active:to-blue-400 active:text-white active:border-blue-600 shadow bg-gradient-to-tr hover:from-white hover:to-white px-4 py-1 rounded-full font-bold focus:ring focus:ring-black mb-5 checked:from-zinc-200 checked:to-zinc-300" htmlFor="instructor" >Instructor: create and manage courses
                <input type="radio" name="role" id="instructor"/>
              </label>
              <label className="flex items-center justify-center gap-x-2 border font-bold from-zinc-50 to-zinc-200 text-black active:from-blue-600 active:to-blue-400 active:text-white shadow bg-gradient-to-tr hover:from-white hover:to-white px-4 py-1 rounded-full font-bold focus:ring focus:ring-black mb-5 checked:from-zinc-200 checked:to-zinc-300" htmlFor="student" >Student: subscribe and learn from courses
                <input type="radio" name="role" id="student"/>
              </label>
            </fieldset>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4 mb-5 w-full">
          <button className="border dark:border-blue-600 shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 w-40 py-1.5 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400" type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}