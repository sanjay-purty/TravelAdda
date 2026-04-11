import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Footer from '../Component/Footer';
import Trip from '../Component/Trip';
function Service (){
    return(
        <>
         <Navbar/>
            <Hero 
            cName="hero-about"
            heroImg="https://www.alibinali.com/wp-content/uploads/2020/01/Travel1-scaled.jpg"
            title="Service"
            button="hide"
         />
           <Trip/>
         <Footer/>
        </>
    )
}

export default Service;