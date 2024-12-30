
import { Header,Attraction,OurStory,OurMenu,UpcomingEvents,BestIngredients,Reservation,Footer} from "./components"

export default function HomePage(){
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