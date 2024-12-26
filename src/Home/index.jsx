
import { Header,Attraction } from "./components"

export default function HomePage(){
    return <div className="landscape:px-14 w-screen text-white bg-black min-h-[100vh] overflow-x-hidden">
                <Header/>
                <Attraction/>
    </div>
}