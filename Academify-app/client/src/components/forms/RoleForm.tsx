'use client'
import { useState } from "react";

export default function RoleForm(){
  const [ role , getRole ] = useState('');
  return(
    <div className="mt-10 sm:mt-0 min-h-screen p-4 flex items-center sm:justify-center flex-col gap-y-4">
      <h1 className="text-center text-3xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100 mb-5">How will you use Academify?</h1>
      <div className="max-w-lg">
        <div className="flex items-center justify-center gap-4 flex-col w-full max-w-md mb-5">
            <a href="/get-started/sign-up?role=instructor" id="instructor" className="flex items-center justify-center gap-x-2 border font-bold from-zinc-50 to-zinc-200 text-black active:from-blue-600 active:to-blue-400 active:text-white active:border-blue-600 shadow bg-gradient-to-tr hover:border-zinc-200 hover:from-zinc-200 hover:to-zinc-300 px-4 py-1 rounded-full font-bold focus:ring focus:ring-black mb-5 checked:from-zinc-200 checked:to-zinc-300">Instructor: create and manage courses</a>
            <a className="flex items-center justify-center gap-x-2 border font-bold from-zinc-50 to-zinc-200 text-black active:from-blue-600 active:to-blue-400 active:text-white shadow bg-gradient-to-tr hover:border-zinc-200 hover:from-zinc-200 hover:to-zinc-300 px-4 py-1 rounded-full font-bold focus:ring focus:ring-black mb-5 checked:from-zinc-200 checked:to-zinc-300" href="/get-started/sign-up?role=student/sign-up" id="student">Student: subscribe and learn from courses</a>
        </div>
      </div>
    </div>
  )
}