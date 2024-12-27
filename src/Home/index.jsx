
import { Header,Attraction,OurStory,OurMenu,UpcomingEvents } from "./components"

export default function HomePage(){
    return <div className="landscape:px-14 w-screen text-white bg-slate-950 min-h-[100vh] overflow-x-hidden">
                <Header/>
                <Attraction/>
                <OurStory/>
                <OurMenu/>
                <UpcomingEvents/>
    </div>
}