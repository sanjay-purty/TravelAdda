import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import AboutUs from '../Component/AboutUs';
import Footer from '../Component/Footer';
import Signup1 from '../Signup1';

function About (){
    return(
        <>
         <Navbar/>
          <Hero 
            cName="hero-about"
            heroImg="https://images.unsplash.com/photo-1570692111688-be3d16f59c1e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="About"
            button="hide"
         />
         {/* <Signup1/> */}
         <AboutUs/>
         <Footer/>
        </>
    )
}

export default About;