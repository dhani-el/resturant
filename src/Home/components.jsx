
import steakDish1 from "../assets/dish15.png"
import steakBg from "../assets/bgCombination.png"
import wine from "../assets/wine.png"
import topleftImg from "../assets/toptomato.png"
import bottom from "../assets/bottomtomatoandmushroom.png"
import rodo from "../assets/rodo.png"
import tomato from "../assets/halftomato.png"
import our_story_dish from "../assets/ourstory.jpeg"
import herb from "../assets/herb2.png"
import whitedish from "../assets/whitedish1.png"
import dish13 from "../assets/dish13.png"
import dish11 from "../assets/dish11.png"
import dish4 from "../assets/dish4.png"
import spoon from "../assets/spoon.png"
import ingredients from "../assets/ingredients.jpg"
import fillinresturant from "../assets/fillinresturant.jpeg"
import { useState } from "react"
import { CloseCircle, HambergerMenu } from "iconsax-react"

const navLinks = [
    {
        url:"/",
        title:"Home"
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
        url:"/aboutus",
        title:"About Us"
    },
    {
        url:"/reservation",
        title:"Reservation"
    },
]
export function Header(){

    const [OpenDrawer,setOpenDrawer] = useState(false);

    function openDrawer(){
        document.getElementById("homePage").style.overflow = "hidden"
        document.getElementById("root").style.overflow = "hidden"
        document.body.style.overflow = "hidden"
        setOpenDrawer(()=>true);
    }
    function closeDrawer(){
        document.getElementById("homePage").style.overflow = "visible"
        document.getElementById("root").style.overflow = "visible"
        document.body.style.overflow = "visible"
        setOpenDrawer(()=>false);
    }

    return <div className="flex w-full gap-10 lg:gap-0 lg:justify-between py-8 lg:py-4 items-center">
                <HambergerMenu onClick={openDrawer} className="lg:hidden" />
                <Logo/>
                <NavLinks links={navLinks}/>
                <DrawerNav links={navLinks} shouldOpen={OpenDrawer} closeFunction={closeDrawer}/>
    </div>
}
export function Logo(){
    return <div className=" text-yellow-300 ">
                    <p className="font-blacksword text-2xl lg:text-4xl">Steakhouse</p>
    </div>
}
export function NavLinks({links=[]}){
    return <div className="hidden lg:flex w-[50%] justify-between">
                    {
                        links.map(link=>{
                            return <a href={link.url} className="text-sm font-inter font-normal">{link.title}</a>
                        })
                    }
    </div>
}
function DrawerNav({links=[],shouldOpen,closeFunction}){
    return <div className={`p-4 w-screen h-screen absolute top-0 ${shouldOpen ?"left-[0vw]":"left-[110vw]"} bg-slate-950 font-noto text-2xl font-semibold z-50 flex flex-col justify-evenly items-center justi lg:hidden`}>
                <div onClick={closeFunction} className="self-end flex text-yellow-300 gap-2 items-center font-inter">
                   <p>CLOSE </p> <CloseCircle className="w-[2.5rem] h-[2.5rem] self-end"/>
                </div>
                {
                    links.map(aLink=>{
                                return <a href={aLink.url}>{aLink.title}</a>
                    })
                }
    </div>
}
export function Attraction(){
    return <div className="w-full h-[70vh] justify-center landscape:h-[80vh] flex flex-col md:flex-row md:justify-start items-center ">
                    <AttractionText/>
                    <AttractionImage image={steakDish1} />
    </div>
}
function AttractionText(){
    return <div className="flex flex-col justify-start items-center md:items-start w-full md:w-[40%] gap-8 ">
                <p className="text-3xl md:text-6xl font-extrabold font-noto">
                    A Premium And Authentic Steakhouse
                </p>
                <button className="w-fit border-white border-solid border-[0.02rem] py-2 px-3 font-noto font-bold text-sm">
                    Book A Table
                </button>
            </div>
}
function AttractionImage({image}){
    return <div className="pt-8 md:pt-0 w-full md:w-[60%] md:h-full flex md:flex-row relative justify-center items-center ">
                <img src={wine} className=" absolute h-[70%] md:h-[65%] right-0  md:right-[25%]"/>
                <img src={topleftImg} className=" absolute h-[30%] left-0 top-0 md:h-[30%]  md:left-[-10%] md:top-0"/>
                <img src={bottom} className=" absolute h-[30%] md:h-[30%] left-0 bottom-[10%] md:left-[-12%] md:bottom-[20%]"/>
                <div className=" w-full md:w-[90%] md:h-[90%] flex items-center justify-center md:justify-start ">
                    <img src={image} className="w-[60%] h-auto md:h-full md:w-auto rotate-[160deg] "/>
                </div>
            </div>
}
export function OurStory(){
    return <div className="w-full pt-16 md:pt-0 md:h-screen relative flex items-center justify-center">
                <img src={rodo} className="absolute w-[18%] z-0 top-[4%] left-[-5%] md:top-[4%] md:left-6" />
                <div className="w-full h-full md:w-[85%] md:h-[70%] flex flex-col-reverse md:flex-row z-10 relative ">
                    <img src={our_story_dish} className="w-[100%] md:h-[100%] md:w-auto "  />
                    <div className="md:w-[50%] bg-white relative text-black p-8 md:p-16 flex flex-col gap-4 justify-center items-start">
                        <div>
                            <p className="font-bonheur text-orange-300 text-2xl">Discover</p>
                            <p className="font-noto text-4xl font-extrabold">Our Story</p>
                        </div>
                        <p className="font-inter text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, error tempore delectus earum officia ipsam, tempora mollitia minus ratione reprehenderit praesentium numquam deleniti inventore reiciendis molestias commodi non sint sapiente? Repudiandae deleniti perferendis ullam ex!</p>
                        <button className="font-inter text-orange-300 text-sm font-light">
                            More About Us 
                        </button>
                        <img src={herb} className="h-[35%] absolute bottom-[-10%] right-[-5%] rotate-[270deg]"/>
                    </div>
                </div>
                <img src={tomato}  className="absolute w-[10%] z-0 bottom-[8%] left-[10%]" />
    </div>
}
export function OurMenu(){
    return <div className="w-full flex flex-col items-center">
                <div className="flex flex-col w-full md:flex-row md:w-[50%] gap-6 md:gap-12 items-center">
                    <div className="w-full items-center md:w-[40%] flex flex-col md:items-end">
                        <p className="font-bonheur text-xl text-orange-300 ">Discover</p>
                        <p className="font-noto text-3xl font-extrabold">Our Menu</p>
                    </div>
                    <div className="md:w-[60%]">
                        <p className="text-[0.6rem] font-inter font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad adipisci corrupti totam, nobis alias reprehenderit delectus error dolores! Voluptatem, ipsum accusamus. Recusandae quod molestiae aliquam.</p>
                    </div>
                </div>
                <ADish title={"Appetizer"} summary={""} image={whitedish} />
                <ADish direction={"rev"} title={"Main Dish"} summary={""} image={dish11} />
                <ADish title={"Side Dish"} summary={""} image={dish13} />
                <ADish direction={"rev"} title={"Desert"} summary={""} image={dish4} />
    </div>
}
function ADish({direction,title,summary,image}){
    return <div className={`pb-6 flex ${(direction === "rev") ? "md:flex-row-reverse flex-col":"flex-col md:flex-row"} gap-9 md:gap-16 items-center md:w-[70%] `}>
                <img src={image} className="w-[75%] md:w-[35%]"/>
                <div className="w-[75%] md:w-[40%]">
                    <p className="font-bonheur text-3xl text-orange-300 m-0">{title}</p>
                    <p className="text-[0.6rem] font-inter font-light">{summary || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad adipisci corrupti totam, nobis alias reprehenderit delectus error dolores! Voluptatem, ipsum accusamus. Recusandae quod molestiae aliquam."}</p>
                </div>
    </div>
}
export function UpcomingEvents(){
    return <div className="w-full pt-16 md:pt-0 md:h-screen relative flex items-center justify-center">
                <img src={rodo} className="absolute w-[18%] z-0 top-[4%] left-[-5%] md:top-[4%] md:left-6" />
                <div className="w-full h-full md:w-[85%] md:h-[70%] flex flex-col-reverse md:flex-row z-10 relative ">
                    <img src={our_story_dish} className="w-[100%] md:h-[100%] md:w-auto "  />
                    <div className="md:w-[50%] bg-white relative text-black p-8 md:p-16 flex flex-col gap-4 justify-center items-start">
                        <div>
                            <p className="font-bonheur text-orange-300 text-2xl">Discover</p>
                            <p className="font-noto text-4xl font-extrabold">Upcoming Events</p>
                        </div>
                        <p className="font-inter text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, error tempore delectus earum officia ipsam, tempora mollitia minus ratione reprehenderit</p>
                        <div className="flex flex-col items-end w-full">
                            <p className="text-sm font-bold">Barbecue Party</p>
                            <p className="text-sm font-light">December 26 | Lunch Time | Casual</p>
                        </div>
                        <button className="font-inter text-orange-300 text-sm font-light">
                            More Events
                        </button>
                        <img src={spoon} className="h-[40%] absolute bottom-[-20%] right-[-20%] rotate-[245deg]"/>
                    </div>
                </div>
                <img src={tomato}  className="absolute w-[10%] z-0 bottom-[8%] left-[10%]" />
    </div>
}
export function BestIngredients(){
    return <div className="flex flex-col items-center w-full md:h-screen">
                        <div className="flex flex-col items-center md:w-[70%]">
                            <p className="font-bonheur text-orange-300 text-2xl">Discover</p>
                            <p className="font-noto text-3xl md:text-4xl font-extrabold">The Best Ingredients</p>
                            <p className=" pt-4 font-inter text-sm md:text-base font-extralight text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, error tempore delectus earum officia ipsam, tempora mollitia minus ratione reprehenderit praesentium numquam deleniti inventore reiciendis molestias commodi non sint sapiente? Repudiandae deleniti perferendis ullam ex!</p>
                        </div>
                        <img src={ingredients} className="w-full md:w-auto md:h-[65%] pt-6"/>
    </div>
}
export function Reservation(){
    return <div className="w-full h-[90vh] overflow-hidden relative">
                <img className="w-full z-0 " src={fillinresturant} />
                <div className="w-full h-full absolute top-0 left-0 z-10 bg-black opacity-30">

                </div>
                <div className="w-full h-full absolute top-0 z-20 left-0 flex gap-16 flex-col items-center justify-center">
                    <div>
                        <p className="text-center font-bonheur text-2xl">Reservation</p>
                        <p className="text-center font-noto font-extrabold text-4xl">Book Your Table</p>
                    </div>
                    <button className="w-fit border-white border-solid border-[0.02rem] py-2 px-3 font-noto font-bold text-sm">
                        Online Booking
                    </button>
                </div>
    </div>
}
export function Footer(){
    return <div className="p-12  w-full flex justify-between items-center">
                <div className="w-[25%] pt-8 flex flex-col ">
                    <p className="text-yellow-300 " >Location</p>
                    <p className="text-noto font-light w-[60%] pt-4" >5,mufutau shobola ogba lagos,Nigeria</p>
                </div>
                <div className="w-[25%] pt-8">
                    <p className="text-yellow-300" >Working Hours</p>
                    <p className=" pt-4" >Monday - Thursday</p>
                    <p className=" " >Friday </p>
                    <p className=" " >Saturday - Sunday</p>
                </div>
                <div className="h-full flex flex-col justify-center items-center">
                    <p className="font-bonheur text-4xl text-yellow-300 ">SteakHouse</p>
                    <p className="pt-4">eloh.daniel@gmail.com</p>
                </div>
            </div>
}