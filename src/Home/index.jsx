
import { Header,Attraction,OurStory,OurMenu,UpcomingEvents,BestIngredients,Reservation,Footer} from "./components"

export default function HomePage(){
    return <div id="homePage" className="px-8 lg:px-14 w-screen text-white bg-slate-950 relative overflow-x-hidden">
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