import Header from "@/components/home/Header";
import RoleForm from "@/components/forms/RoleForm";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-gradient-to-tr dark:from-gray-900 dark:to-slate-900 text-black dark:text-white">
      <Header />
      <RoleForm />
      <Footer />
    </main>
  );
}
