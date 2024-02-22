export default function SideMenu(){
  return(
    <nav className="flex items-start flex-col justify-start sm:p-4 absolute top-0 left-0 h-full bg-blue-600 backdrop-blur-lg w-72">
      <h1 className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-white to-zinc-100">
        Side Menu
      </h1>
      <ul className="w-full rounded-lg sm:p-4 mt-3">
        <li className="bg-white w-full rounded-md sm:px-4 mt-3">Hello</li>
        <li className="bg-white w-full rounded-md sm:px-4 mt-3">World</li>
        <li className="bg-white w-full rounded-md sm:px-4 mt-3">Hello</li>
      </ul>
    </nav>
  )
}