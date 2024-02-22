export default function SearchBar(){
  return(
    <label htmlFor="searchCourse" className="flex items-center justify-center w-full max-w-4xl border px-4 py-4 sm:px-6 rounded-lg shadow-md bg-white text-black">
      <input className="flex items-center justify-between bg-white text-black w-full " type={'text'} name='searchCourse' id='searchCourse' placeholder="Start typing to search..." defaultValue={''} minLength={3} maxLength={1000}>
      </input>
      <p>🔍</p>
    </label>
  )
}