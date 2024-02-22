export default function UserCard(){
  return(
    <div className="flex items-center justify-between border bg-white text-black w-full max-w-md p-4 sm:px-6 rounded-lg shadow-md min-h-24">
      <p className="font-bold text-md">
        UserName
      </p>
      <p className="text-zinc-700 font-bold text-md">
        Your stats
      </p>
    </div>
  )
}