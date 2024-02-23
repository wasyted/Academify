import Header from "@/components/dashboard/DashboardHeader";
import UserCard from "@/components/dashboard/UserCard";
import CourseCard from "@/components/dashboard/CourseCard";
import Footer from "../../components/home/Footer";
import SideMenu from "@/components/dashboard/SideMenu";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-gradient-to-tr dark:from-gray-900 dark:to-slate-900 text-black dark:text-white">
      {/* <SideMenu></SideMenu> */}
      <Header></Header>
      <div className="min-h-screen w-full p-2">
        <div className="text-center mt-24 w-full">
          <h1 className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100">
            Dashboard
          </h1>
          <h2>
            Hi, @username! Welcome back to Academify
          </h2>
        </div>
        <div className="flex items-center justify-center mx-auto mt-5">
          <UserCard></UserCard>
        </div>
        <div className="text-center mt-12 mb-10 w-full">
          <hr className="mb-10 max-w-lg mx-auto" />
          <h1 className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100">
            Active courses
          </h1>
          <h2>
            These are the courses you subscribed to:
          </h2>
        </div>
        <div className="flex items-center justify-center mx-auto mb-10">
          <CourseCard></CourseCard>
        </div>
        <div className="flex items-center justify-center mx-auto mb-10">
          <CourseCard></CourseCard>
        </div>
        <div className="flex items-center justify-center mx-auto mb-10">
          <CourseCard></CourseCard>
        </div>
        <div className="text-center mt-12 mb-10 w-full">
          <hr className="mb-10 max-w-lg mx-auto" />
          <h1 className="text-4xl font-bold bg-gradient-to-tr text-transparent bg-clip-text from-black to-zinc-800 dark:from-white dark:to-zinc-100">
            Created courses
          </h1>
          <h2>
            These are the courses you've created:
          </h2>
        </div>
        <div className="text-center w-full max-w-lg mx-auto mt-5">
          <h2 className="text-zinc-700 dark:text-zinc-300 mb-5">
            Drafts
          </h2>
        </div>
        <div className="flex items-center justify-center mx-auto mb-10">
          <CourseCard></CourseCard>
        </div>
        <div className="text-center w-full max-w-lg mx-auto mt-5">
          <h2 className="text-zinc-700 dark:text-zinc-300 mb-5">
            Published
          </h2>
        </div>
        <div className="flex items-center justify-center mx-auto mb-10">
          <CourseCard></CourseCard>
        </div>
        <div className="flex items-center justify-center mx-auto mb-10">
          <CourseCard></CourseCard>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
