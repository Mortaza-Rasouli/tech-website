import Category from "../components/home/Category";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import SalesSection from "../components/home/SalesSection";

export default function Home() {
  return (
    <>
      <main className="min-[330px]:max-[481px]:px-6">
        <Header />
        <Hero />
        <Category />
        <SalesSection />
      </main>
    </>
  );
}
