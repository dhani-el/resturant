
import steakDish1 from "../assets/dish15.png"
import steakBg from "../assets/bgCombination.png"
import salt from "../assets/salt2.png"
import salt2 from "../assets/salt1.png"
import salt3 from "../assets/salt3.png"
import blackpepper from "../assets/blackpepper2.png"
import tomatospoon from "../assets/tomatospoon.png"
import herb1 from "../assets/herb3.png"
import herb2 from "../assets/herb5.png"
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
import { useEffect, useState,useRef } from "react"
import { CloseCircle, HambergerMenu } from "iconsax-react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

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
        document.getElementById("homePage").style.overflowY = "hidden"
        document.getElementById("root").style.overflowY = "hidden"
        document.body.style.overflowY = "hidden"
        setOpenDrawer(()=>true);
    }
    function closeDrawer(){
        document.getElementById("homePage").style.overflowY = "visible"
        document.getElementById("root").style.overflowY = "visible"
        document.body.style.overflowY = "visible"
        setOpenDrawer(()=>false);
    }

    return <div className="z-10  flex w-full gap-10 lg:gap-0 lg:justify-between py-8 lg:py-4 items-center overflow-x-hidden">
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
    return <div className={`overflow-hidden p-4 w-screen h-screen absolute top-0 ${shouldOpen ?"left-[0rem]":"left-[110vw]"} bg-slate-950 font-noto text-2xl font-semibold z-50 flex flex-col justify-evenly items-center lg:hidden`}>
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
    return <div id="attraction" className="z-0 w-full h-fit justify-center landscape:h-[80vh] flex flex-col lg:flex-row lg:justify-start items-center ">
                    <AttractionText/>
                    <AttractionImage image={steakDish1} />
    </div>
}
function AttractionText(){
    return <div className=" flex flex-col justify-start items-center lg:items-start w-full lg:w-[40%] gap-8 ">
                <p className="text-3xl md:text-6xl font-extrabold font-noto">
                    A Premium And Authentic Steakhouse
                </p>
                <button className="w-fit border-white border-solid border-[0.02rem] py-2 px-3 font-noto font-bold text-sm">
                    Book A Table
                </button>
            </div>
}
function AttractionImage({image}){
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger) ;
        const timeline = gsap.timeline()
        timeline.to(["#pan","#topleft","#wine","#bottom"],{
            scrollTrigger:{
                trigger:"#attraction",
                start:"top top",
                end:"center top",
                scrub:1,
            },
            y:"-100px",
            duration:0.5,
            ease:"sine.inOut",
            stagger:0.3
        })
    })

    return <div id="attraction" className="pt-8 md:pt-0 w-full md:w-[60%] md:h-full flex md:flex-row relative justify-center items-center ">
                <img id="wine" src={tomatospoon} className=" absolute h-[70%] md:h-[65%] right-0 md:right-[-15%] lg:top-[-2%] lg:rotate-[20deg] lg:right-[10%]"/>
                <img id="wine" src={herb1} className=" absolute h-[70%] md:h-[35%] right-0 md:right-[-15%] lg:right-[25%] lg:rotate-[20deg] "/>
                <img id="wine" src={salt} className=" absolute h-[70%] md:h-[65%] right-0 md:right-[-15%] lg:right-[45%] lg:top-0"/>
                <img id="wine" src={blackpepper} className=" absolute h-[70%] md:h-[35%] right-0 md:right-[-15%] lg:right-[55%] lg:bottom-28"/>
                <img id="topleft" src={topleftImg} className=" absolute h-[30%] left-0 top-0 md:h-[30%]  md:left-[-10%] md:top-0"/>
                <img id="bottom" src={bottom} className=" absolute h-[30%] md:h-[30%] left-0 bottom-[10%] md:left-[-20%] lg:left-[-12%] md:bottom-[20%]"/>
                <div className=" w-full md:w-[90%] md:h-[90%] flex items-center justify-center md:justify-start ">
                    <img id = "pan" src={image}  className="w-[60%] h-auto md:h-full md:w-auto rotate-[160deg] "/>
                </div>
            </div>
}
export function OurStory(){

    useGSAP(()=>{
        gsap.to("#topsalt",{
            scrollTrigger:{
                trigger:"#topsalt",
                start:"top 50%",
                scrub:1,
            },
            y:"-50px",
            scale:"1.2"
        })
    })

    return <div id="ourStory" className="z-0 w-full  pt-16 lg:pt-0 lg:h-screen relative flex items-center justify-center">
                <img id="topsalt" src={salt2} className="absolute w-[18%] z-0 top-[4%] rotate-45 left-[-5%] md:top-[2%] md:left-[3rem] lg:top-[6%] lg:left-6" />
                <div className="w-full h-full md:w-[70%] lg:w-[85%] lg:h-[70%] flex flex-col-reverse lg:flex-row z-10 relative ">
                    <img src={our_story_dish} className="w-[100%] lg:h-[100%] lg:w-auto "  />
                    <div className="lg:w-[50%] bg-white relative text-black p-8 md:p-16 flex flex-col gap-4 justify-center items-start">
                        <div>
                            <p className="font-bonheur text-orange-300 text-2xl">Discover</p>
                            <p className="font-noto text-4xl font-extrabold">Our Story</p>
                        </div>
                        <p className="font-inter text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, error tempore delectus earum officia ipsam, tempora mollitia minus ratione reprehenderit praesentium numquam deleniti inventore reiciendis molestias commodi non sint sapiente? Repudiandae deleniti perferendis ullam ex!</p>
                        <button className="font-inter text-orange-300 text-sm font-light">
                            More About Us 
                        </button>
                        <img src={herb2} className="h-[40%] absolute bottom-[-10%] right-[-8%] rotate-[45deg]"/>
                    </div>
                </div>
                <img src={salt}  className="absolute w-[35%] z-0 bottom-[5%] left-[10%] rotate-90" />
    </div>
}
export function OurMenu(){
    return <div className="z-0 w-full flex flex-col items-center">
                <div className="flex flex-col w-full lg:flex-row lg:w-[50%] gap-6 lg:gap-12 items-center">
                    <div className="w-full items-center lg:w-[40%] flex flex-col lg:items-end">
                        <p className="font-bonheur text-xl text-orange-300 ">Discover</p>
                        <p className="font-noto text-3xl font-extrabold">Our Menu</p>
                    </div>
                    <div className="md:w-[80%] md:text-center lg:w-[60%]">
                        <p className="text-[0.6rem] font-inter font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad adipisci corrupti totam, nobis alias reprehenderit delectus error dolores! Voluptatem, ipsum accusamus. Recusandae quod molestiae aliquam.</p>
                    </div>
                </div>
                <ADish id={"dish1"}  title={"Appetizer"} summary={""} image={whitedish} />
                <ADish id={"dish2"}  direction={"rev"} title={"Main Dish"} summary={""} image={dish11} />
                <ADish id={"dish3"}  title={"Side Dish"} summary={""} image={dish13} />
                <ADish id={"dish4"}  direction={"rev"} title={"Desert"} summary={""} image={dish4} />
    </div>
}
function ADish({direction,title,summary,image,id}){


    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`#${id}`,{
            scrollTrigger:{
                trigger:`#${id}`,
                start:"top 65%",
                scrub:1
            },
            rotate:"45deg",
            duration:1,
            ease:"power1.inOut"
        })
    },[id])

    return <div className={`px-0 md:px-8 lg:px-0 pb-6 flex ${(direction === "rev") ? "lg:flex-row-reverse flex-col":"flex-col lg:flex-row"} gap-9 md:gap-0 lg:gap-16 items-center lg:w-[70%] `}>
                <div className={`w-[75%] md:w-[50%] lg:w-[35%] ${(direction === "rev") ? "self-end":"self-start"} lg:self-center relative`}>
                    <img src={(direction === "rev") ? tomato : herb1} className={`absolute ${(direction === "rev") ?"w-[20%] bottom-0 right-0":"w-[28%] bottom-0 left-[-5%] rotate-[310deg]"} `}/>
                    <img src={salt3} className={`absolute w-[200%] h-auto   ${(direction === "rev") ? "left-[-70%] bottom-[-40%] rotate-[155deg]":"left-[70%] bottom-[-50%] rotate-45"}`}/>
                    <img src={salt2} className="absolute w-[120%] h-[100%] rotate-45  "/>
                    <img id={`${id}`} src={image} className={`w-[100%]`}/>
                </div>
                <div className={` z-10 px-0 md:px-4 lg:px-0 w-[75%] ${(direction === "rev") ? "self-start":"self-end"} lg:self-center md:w-[50%] lg:w-[40%]`}>
                    <p className="font-bonheur text-3xl text-orange-300 m-0">{title}</p>
                    <p className="text-[0.6rem] font-inter font-light">{summary || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad adipisci corrupti totam, nobis alias reprehenderit delectus error dolores! Voluptatem, ipsum accusamus. Recusandae quod molestiae aliquam."}</p>
                </div>
    </div>
}
export function UpcomingEvents(){
    return <div className="z-0 w-full  pt-16 lg:pt-0 lg:h-screen relative flex items-center justify-center">
                <img src={salt} className="absolute w-[18%] z-0 top-[4%] left-[-5%] md:top-[2%] md:left-[3rem] lg:top-[4%] lg:left-6" />
                <div className="w-full h-full md:w-[70%] lg:w-[85%] lg:h-[70%] flex flex-col-reverse lg:flex-row z-10 relative">
                    <img src={our_story_dish} className="w-[100%] lg:h-[100%] lg:w-auto "  />
                    <div className="lg:w-[50%] bg-white relative text-black p-8 md:p-16 flex flex-col gap-4 justify-center items-start">
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
                <img src={salt2}  className="absolute w-[35%] z-0 bottom-[5%] left-[10%] rotate-90" />

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
    return <div className="w-full lg:h-[90vh] overflow-hidden relative">
                <img className="w-full z-0 " src={fillinresturant} />
                <div className="w-full h-full absolute top-0 left-0 z-10 bg-black opacity-30">

                </div>
                <div className="w-full h-full absolute top-0 z-20 left-0 flex gap-8 md:gap-16 flex-col items-center justify-center">
                    <div>
                        <p className="text-center font-bonheur text-2xl">Reservation</p>
                        <p className="text-center font-noto font-extrabold text-2xl md:text-4xl">Book Your Table</p>
                    </div>
                    <button className="w-fit border-white border-solid border-[0.02rem] py-2 px-3 font-noto font-bold text-sm">
                        Online Booking
                    </button>
                </div>
    </div>
}
export function Footer(){
    return <div className="md:p-12  w-full flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-[25%] pt-8 flex flex-col items-center justify-center">
                    <p className="text-yellow-300 " >Location</p>
                    <p className="text-noto font-light w-[60%] pt-4" >5,mufutau shobola ogba lagos,Nigeria</p>
                </div>
                <div className="md:w-[25%] pt-8">
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