export default function Contact(){
  return(
    <div className="flex items-center justify-center mt-24 mb-12 p-4 max-w-4xl mx-auto flex-wrap bg-white rounded-xl sm:min-h-96 shadow-lg">
      <div className="flex items-start justify-center flex-col gap-4 p-4 ">
        <h1 className="text-4xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800">From anywhere, anytime.</h1>
        <p className="text-lg max-w-2xl text-zinc-700">
          Sign-up and create or subscribe to the courses. You can learn anything: from everyday tasks like cooking or carpentry to complex topics like math and physics. We have a comprehensive program for creators in which you can monetize your subscriptions and earn by teaching.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="border shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 w-40 py-1.5 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400">
            Get started
          </button>
        </div>
      </div>
    </div>
  )
}