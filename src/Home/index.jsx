
import { useEffect } from "react"
import { Header,Attraction,OurStory,OurMenu,UpcomingEvents,BestIngredients,Reservation,Footer} from "./components"
import Lenis from "lenis"
export default function HomePage(){

    useEffect(function(){
        const lenis = new Lenis()
        function raf(time){
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    },[])

    return <div id="homePage" className="px-8 xl:px-14 w-screen text-white bg-black relative overflow-x-hidden">
                <Header/>
                <Attraction/>
                <OurStory/>
                <OurMenu/>
                <UpcomingEvents/>
                <BestIngredients/>
                <Reservation/>
                <Footer/>
    </div>
}