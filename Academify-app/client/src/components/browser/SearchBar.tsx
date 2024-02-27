export default function SearchBar(){
  return(
    <label htmlFor="searchCourse" className="flex items-center justify-center w-full max-w-4xl border dark:border-gray-600/75 overflow-hidden rounded-lg shadow-md">
      <input className="px-4 py-4 flex items-center justify-between w-full focus:outline-none bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg" type={'text'} name='searchCourse' id='searchCourse' placeholder="Start typing to search..." defaultValue={''} minLength={3} maxLength={1000}>
      </input>
      <p className="bg-white/75 dark:bg-gray-600/75 dark:border-gray-600/75 backdrop-blur-lg px-4 py-4 dark:hover:bg-gray-500/75">🔍</p>
    </label>
  )
}