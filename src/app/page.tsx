import Category from "./components/layout/Category";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";

export default function Home() {
  return (
    <>
      <main className="min-[330px]:max-[481px]:px-6 items-center">
        <Header />
        <Hero />
        <Category />
      </main>
    </>
  );
}
