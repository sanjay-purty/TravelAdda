import DestinationData from "./DestinationData";
import"./DestiStyle.css"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"
import img9 from "../assets/img9.jpg"
import img10 from "../assets/img10.jpg"

const Destination = () =>{

    return(
         <div className="destination">
                <h1>Popular Destinations</h1>
                 <p>Tour give you the opportunity to see a lot, within a time frames</p>

            <DestinationData 
                classname="first-des"
                heading="Taal Volcano, Batangas"
                text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside 
                                        an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is 
                                        easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar 
                                        environment found on an active volcano, including volcanic rocks and steam vents. The hike can be 
                                        dusty and hot, so plan for 
                                        an early morning trip, and then unwind with some bulalo before heading back home!"
                img2={img2}
                img3={img3}
            /> 
             <DestinationData 
              classname="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text=" If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
                img2={img4}
                img3={img5}
            /> 
 
                 
        </div>
    );
};

export default Destination;