
import Navbar from "./components/Navbar";
import HomePage from "./home/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}
