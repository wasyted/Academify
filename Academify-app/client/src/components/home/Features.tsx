import Image from "next/image"
export default function Features(){
  return(
    <div className="relative flex items-center justify-center flex-col mt-16 mb-16 max-w-6xl mx-auto gap-6">
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full mx-auto opacity-25 overflow-hidden">
        <Image width={3000} height={2000} src={'/AdobeStock_572628086.png'} alt='Image'></Image>
      </div>
      <h1 className="text-3xl max-w-lg font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 relative dark:from-white dark:to-zinc-100">Why choose us</h1>
      <div className="grid items-center justify-center grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 w-full mt-3 relative z-index-10">
        <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-certificate-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100 text-lg text-center">Certification</p>
          <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700 dark:text-zinc-200">
              We offer certification for completing our courses with referall validation from our teachers.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-atom-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100 text-lg text-center">Wide range of possibilities</p>
          <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700 dark:text-zinc-200">
              Our courses nucleate a wide range of categories, from traditional sciences to everyday skills.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-globe-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100 text-lg text-center">Available worldwide</p>
          <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700 dark:text-zinc-200">
              Our CDN works lightning fast all around the globe.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-certificate-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100 text-lg text-center">Certification</p>
          <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700 dark:text-zinc-200">
              We offer online certification for full courses.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-certificate-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100 text-lg text-center">Certification</p>
          <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
          <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700 dark:text-zinc-200">
              We offer online certification for full courses.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col sm:min-h-64 w-full p-2 rounded-2xl border mx-auto shadow-md bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg">
          <div className="w-full max-w-24">
            <Image width={3000} height={3000} src={'/3d-illustration-of-blue-certificate-png.png'} alt='Image'></Image>
          </div>
          <p className="font-black bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100 text-lg text-center">Certification</p>
          <div className="flex items-start justify-center flex-col gap-4 max-w-lg">
            <p className="text-sm sm:text-md text-center rounded-md sm:p-2 text-zinc-700 dark:text-zinc-200">
              We offer online certification for full courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

