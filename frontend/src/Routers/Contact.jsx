import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Footer from '../Component/Footer';
import Wer from '../Wer';
import ContactForm from '../Component/ContactForm';
function Contact (){
    return(
        <>
         
         <Navbar/>
       <Hero 
            cName="hero-about"
            heroImg="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnxlbnwwfHwwfHx8MA%3D%3D"
            title="Contact"
            button="hide"
         />
          <ContactForm />
         <Wer/>
         <Footer/>
         
        </>
    )
}

export default Contact ;