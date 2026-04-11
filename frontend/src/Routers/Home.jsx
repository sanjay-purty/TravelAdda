import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Destination from '../Component/Destination';
import Trip from '../Component/Trip';
import Footer from '../Component/Footer';
function Home (){
    return(
        <>
        <Navbar/>
         <Hero 
            cName="hero"
            heroImg="  https://www.pigsflycheap.com/wp-content/uploads/2020/11/Best-AirBNB-Adventures.jpg"
            title="Your Journey Your Story"
            text="Choose your Favourit Destination."
            buttonText="Travel Plan"
            url="/"
            button="show"
         />
         <Destination/>
         <Trip/>
         <Footer/>
        </>
    );
}

export default Home;