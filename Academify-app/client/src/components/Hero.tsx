import Image from "next/image"
export default function Hero(){
  return(
    <main>
      <div className="flex items-center justify-center mt-24 mb-12 p-4 max-w-6xl mx-auto flex-wrap">
        <div className="flex items-start justify-center flex-col gap-4 p-4 ">
          <h1 className="text-4xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800">Begin teaching and learning online now with Academify</h1>
          <p className="text-lg max-w-lg rounded-md text-zinc-700">
            Users from all around the world are already in for the Academify experience. Get started and join our community of teachers and students and get your online certification!
          </p>
          <div className="flex items-center justify-center gap-2">
            <button className="border shadow transition bg-gradient-to-tr hover:from-blue-500 hover:to-blue-400 w-40 py-1.5 rounded-full text-white font-bold from-blue-600 to-blue-600 active:from-sky-600 active:to-sky-400">
              Get started
            </button>
            <p className="text-zinc-700">or</p>
            <button className="bg-gradient-to-tr from-zinc-500 to-zinc-400 hover:from-zinc-400 hover:to-zinc-300 active:from-zinc-600 active:to-zinc-400 py-1 rounded-full text-white px-4">
              Try as guest
            </button>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <Image width={1920} height={1920} src={'/cute-boy-fall-with-many-books-cartoon-3d-icon-illustration-people-education-icon-concept-png.webp'} alt='Image'></Image>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap max-w-5xl mx-auto px-4 py-4 sm:rounded-full sm:border mt-2">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-2 w-full sm:flex-1 mt-3 sm:mt-0">
          <p className="text-6xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-600">
            +10k
          </p>
          <p className="text-lg max-w-lg rounded-md text-zinc-700">
            Users
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-2 w-full sm:flex-1 mt-3 sm:mt-0">
          <hr></hr>
          <p className="text-6xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-600">
            +500
          </p>
          <p className="text-lg max-w-lg rounded-md text-zinc-700">
            Creators
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-2 w-full sm:flex-1 mt-3 sm:mt-0">
          <p className="text-6xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 to-blue-600">
            +10
          </p>
          <p className="text-lg max-w-lg rounded-md text-zinc-700">
            Countrys
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 mb-16 p-4 max-w-5xl mx-auto flex-wrap">
        <div className="w-full max-w-48 self-start ">
          <Image width={2603} height={1885} src={'/thumbs-up.png'} alt='Image'></Image>
        </div>
        <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
          <h1 className="text-3xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800">Who we are?</h1>
          <p className="text-md max-w-lg rounded-md text-zinc-700">
          Academify is an online learning platform that offers a wide range of courses taught by experts in various fields. Whether you're looking to improve   your skills, advance your career, or explore new interests, Academify has something for everyone.
          </p>
        </div>
      </div>
      <div className="relative flex items-center justify-center flex-col mt-16 mb-16 p-4 max-w-6xl mx-auto gap-6">
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full mx-auto opacity-25 overflow-hidden">
          <Image width={3000} height={2000} src={'/AdobeStock_572628086.png'} alt='Image'></Image>
        </div>
        <h1 className="text-3xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 relative">Why choose us</h1>
        <div className="grid items-center justify-center grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 w-full mt-3 relative z-index-10">
        <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-certificate-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 text-lg text-center">Certification</p>
            <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700">
                We offer certification for completing our courses with referall validation from our teachers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-atom-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 text-lg text-center">Wide range of possibilities</p>
            <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
              <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700">
                Our courses nucleate a wide range of categories for online courses. From traditional sciences to everyday skills.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-globe-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 text-lg text-center">Available worldwide</p>
            <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700">
                Our teachers and students come from all over the world as courses get automatically translated via our Academify Translate Tool.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-certificate-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 text-lg text-center">Certification</p>
            <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700">
                We offer online certification for full courses.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-certificate-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 text-lg text-center">Certification</p>
            <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700">
                We offer online certification for full courses.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-certificate-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 text-lg text-center">Certification</p>
            <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700">
                We offer online certification for full courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}