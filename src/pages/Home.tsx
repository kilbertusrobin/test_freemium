import Hero from "../components/Hero";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

function Home() {   
    return (
        <div className="w-full h-full">
            <Header />
            <div className="w-full relative min-h-screen z-50">
                <Hero />
            </div>
            <div className="text-white relative z-60 w-full mt-[75vh] bg-transparent">
                <Body/>
            </div>
            <div className="w-full relative z-100 bg-[#0b1d26]">
                <Footer/>
            </div>
        </div>
    );
}

export default Home;