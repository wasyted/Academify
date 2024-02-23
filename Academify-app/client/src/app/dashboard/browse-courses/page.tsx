import Header from "@/components/dashboard/DashboardHeader";
import UserCard from "@/components/dashboard/UserCard";
import CourseCard from "@/components/browser/CourseCard";
import Footer from "../../../components/home/Footer";
import SideMenu from "@/components/dashboard/SideMenu";
import SearchBar from "@/components/browser/SearchBar";
import Categories from "@/components/browser/Categories";

export default function Home() {
  return (
    <main className="relative">
      {/* <SideMenu></SideMenu> */}
      <Header></Header>
      <div className="min-h-screen w-full p-2">
        <div className="text-center mt-24 w-full">
          <h1 className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800">
            Browse courses:
          </h1>
          <h2>
            Type in the search bar or navigate to discover new courses
          </h2>
        </div>

        <div className="flex items-center justify-center mx-auto mt-5">
          <SearchBar></SearchBar>
        </div>
        <div className="flex items-center justify-center mt-5">
          <Categories></Categories>
        </div>
        <div className="text-center mt-8 w-full">
          <hr className="mb-5 max-w-lg mx-auto" />
        </div>
        <div className="grid place-items-center sm:gap-8 mx-auto xl:grid-cols-3 sm:grid-cols-2 mt-10 max-w-6xl sm:p-4">
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
