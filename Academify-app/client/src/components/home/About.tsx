import Image from "next/image"
export default function About(){
  return(
    <div className="flex items-center justify-center mt-16 mb-16 p-4 max-w-5xl mx-auto flex-wrap-reverse">
      <div className="w-full max-w-64 self-start mb-5 sm:mb-0 sm:mr-5">
        <Image width={1920} height={1920} src={'/student-waving-hand-3d-illustration-chartoon-character-cute-boy-png.png'} alt='Image'></Image>
      </div>
      <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
        <h1 className="text-3xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100">Who we are?</h1>
        <p className="text-md max-w-lg rounded-md text-zinc-700 dark:text-zinc-200 mb-3">
          Academify is an online learning platform that offers a wide range of courses taught by experts in various fields. Whether you're looking to improve   your skills, advance your career, or explore new interests, Academify has something for everyone.
        </p>
      </div>
    </div>
  )
}
