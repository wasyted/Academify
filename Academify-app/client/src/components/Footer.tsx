export default function Footer(){
  return(
    <div className="items-start justify-center p-4 bg-blue-600 sm:min-h-72 grid grid-cols-3 mt-24">
      <div className="flex items-start justify-center flex-col gap-4 p-4 ">
        <h1 className="text-2xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-white to-zinc-200">Academify</h1>
        <p className="text-md text-zinc-200">
          Academify is a prototype of an online learning platform featuring course creation and subscription, progress tracking and recommendations.
        </p>
        <p className="text-md text-zinc-200">
          It is a fullstack project designed by Matías Wasyluk and developed with Next.js, Express.js and MongoDB.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="transition bg-gradient-to-tr from-zinc-50 to-zinc-50 w-32 py-1.5 rounded-full text-black font-bold hover:from-blue-500 hover:to-blue-400 active:from-sky-600 active:to-sky-400">
            View code
          </button>
          <button className="transition bg-gradient-to-tr from-zinc-50 to-zinc-50 w-40 py-1.5 rounded-full text-black font-bold hover:from-blue-500 hover:to-blue-400 active:from-sky-600 active:to-sky-400">
            See other projects
          </button>
        </div>
      </div>
      <div className="flex items-start justify-center flex-col gap-4 p-4 ">
        <h1 className="text-2xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-white to-zinc-200">Useful Links.</h1>
        <ul className="text-lg max-w-2xl text-zinc-200">
          <li>Home</li>
          <li>Dashboard</li>
          <li>Browse Courses</li>
          <li>Get started</li>
          <li>FAQ</li>
          <li>Help</li>
          <li>Legal</li>
        </ul>
      </div>
      <div className="flex items-start justify-center flex-col gap-4 p-4 ">
        <h1 className="text-2xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-white to-zinc-200">From anywhere, anytime.</h1>
        <p className="text-md max-w-2xl text-zinc-200">
          Sign-up and create or subscribe to the courses. You can learn anything: from everyday tasks like cooking or carpentry to complex topics like math and physics. We have a comprehensive program for creators in which you can monetize your subscriptions and earn by teaching.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="transition bg-gradient-to-tr from-zinc-50 to-zinc-50 w-40 py-1.5 rounded-full text-black font-bold hover:from-blue-500 hover:to-blue-400 active:from-sky-600 active:to-sky-400">
            Get started
          </button>
        </div>
      </div>
    </div>
  )
}