import Image from "next/image"

export default function CourseCard(){
  return(
    <div className="relative flex items-center justify-between flex-col border shadow-purple-600 w-full p-4 sm:px-6 rounded-lg shadow-sm min-h-96 max-w-sm bg-white/75 dark:bg-gray-500/75 dark:border-gray-600/75 backdrop-blur-lg">
      <p className="absolute top-0 right-0 sm:mx-2 my-2 px-2 font-bold text-green-600 dark:bg-white/75 dark:rounded-full">Free</p>
      <div className="w-24 h-24 mb-5">
        <Image alt='palette' width={256} height={256} src={"https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Artist%20palette/3D/artist_palette_3d.png"}></Image>
      </div>
      <div>
        <div className="flex items-center justify-between mb-5">
          <p className="font-bold text-md h-full text:">
            Course Title
          </p>
          <p className="text-zinc-700 font-bold text-md dark:text-zinc-300">
            5 Lessons
          </p>
        </div>
        <p className="text-zinc-700 text-sm mb-5 h-full dark:text-zinc-200">
          This is the course description, it will be a short description of the properties of this course and will aim to catch the user's atention in order to get them to view and subscribe to it.
        </p>
      </div>
      <div className="flex flex-col items-center justify-end h-full gap-2">
        <div className="flex gap-x-2">
          <button className="shadow rounded-lg border text-black font-bold px-2 w-24 bg-white">
            Overview
          </button>
          <button className="shadow rounded-lg border border-blue-600 bg-blue-600 text-white font-bold px-2 w-24 border">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}