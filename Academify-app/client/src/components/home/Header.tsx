import Image from "next/image"
import GetStartedButton from "../buttons/GetStartedButton"

export default function Header(){
  return(
    <header className="sticky z-50 top-2 sm:top-4 left-0 right-0 z-index-50 flex items-center justify-between max-w-4xl xl:max-w-6xl mx-3 lg:mx-auto px-4 py-2 bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg rounded-full border">
      <div className="max-w-8">
        <Image className="w-full" width={538} height={132} src={'/Academifyhat-logo.png'} alt='logo'></Image>
      </div>
      <div>
        <GetStartedButton></GetStartedButton>
      </div>
    </header>
  )
}