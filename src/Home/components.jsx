
import steakDish1 from "../assets/dish15.png"
import steakBg from "../assets/bgCombination.png"
import wine from "../assets/wine.png"
import topleftImg from "../assets/toptomato.png"
import bottom from "../assets/bottomtomatoandmushroom.png"


const navLinks = [
    // home aboutus menu events contact reservation 
    {
        url:"/",
        title:"Home"
    },
    {
        url:"/aboutus",
        title:"About Us"
    },
    {
        url:"/menu",
        title:"Menu"
    },
    {
        url:"/events",
        title:"Events"
    },
    {
        url:"/contact",
        title:"Contact"
    },
    {
        url:"/reservation",
        title:"Reservation"
    },
]

export function Header(){
    return <div className="flex w-full justify-between py-4 items-center">
                <Logo/>
                <NavLinks links={navLinks}/>
    </div>
}

export function Logo(){
    return <div className=" text-yellow-300">
                    <p className="font-blacksword text-4xl">Steakhouse</p>
    </div>
}

export function NavLinks({links=[]}){
    return <div className="flex w-[50%] justify-between">
                    {
                        links.map(link=>{
                            return <a href={link.url} className="text-sm font-inter font-normal">{link.title}</a>
                        })
                    }
    </div>
}

export function Attraction(){
    return <div className="w-full h-[80vh] flex items-center">
                    <AttractionText/>
                    <AttractionImage image={steakDish1} />
    </div>
}


function AttractionText(){
    return <div className="flex flex-col justify-start w-[40%] gap-8 ">
                <p className="text-6xl font-extrabold font-noto">
                    A Premium And Authentic Steakhouse
                </p>
                <button className="w-fit border-white border-solid border-[0.02rem] py-2 px-3 font-noto font-bold text-sm">
                    Book A Table
                </button>
            </div>
}

function AttractionImage({image}){
    return <div className="w-[60%] h-full flex relative justify-center items-center ">
                <img src={wine} className=" absolute xl:h-[65%]  xl:right-[25%]"/>
                <img src={topleftImg} className=" absolute xl:h-[30%]  xl:left-[-10%] xl:top-0"/>
                <img src={bottom} className=" absolute xl:h-[30%]  xl:left-[-12%] xl:bottom-[20%]"/>
                <div className="xl:w-[90%] xl:h-[90%] flex items-center ">
                    <img src={image} className="h-full w-auto rotate-[160deg] "/>
                </div>
            </div>
}