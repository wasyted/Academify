import Image from "next/image"

export default function Contact(){
  return(
    <div className="flex items-center justify-center mt-24 mb-12 p-4 max-w-6xl mx-auto flex-wrap bg-white dark:bg-gray-600/75 dark:border-gray-600/75 rounded-xl sm:min-h-96 shadow-lg">
      <div className="flex items-start justify-center flex-col gap-4 p-4 ">
        <h1 className="text-4xl max-w-md font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100">From anywhere, anytime.</h1>
        <p className="text-lg max-w-xl text-zinc-700 dark:text-zinc-200">
          Sign-up and create or subscribe to the courses. You can learn anything: from everyday tasks like cooking or carpentry to complex topics like math and physics. We have a comprehensive program for creators in which you can monetize your subscriptions and earn by teaching.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="border dark:border-blue-600 shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 w-40 py-1.5 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400">
            Get started
          </button>
        </div>
      </div>
      <div className="w-full max-w-xs">
        <Image width={3000} height={3000} src={'/cute-girl-sit-crossed-legs-hold-laptop-studying-at-home-excited-learn-new-information-studying-via-internet-contact-language-teacher-videocall-lesson-png.png'} alt='Image'></Image>
      </div>
    </div>
  )
}