
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

export function OurStory(){
    return <div className="w-full h-screen relative flex items-center justify-center">
        {/* background overlaped image */}
                <img src={rodo} className="absolute w-[18%] z-0 top-[4%] left-6" />
                <div className="w-[85%] h-[70%] flex z-10 relative ">
                    <img src={our_story_dish} className="h-[100%] "  />
                    <div className="w-[50%] bg-white relative text-black p-16 flex flex-col gap-4 justify-center items-start">
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
                <div className="flex w-[50%] gap-12 items-center">
                    <div className="w-[40%] flex flex-col items-end">
                        <p className="font-bonheur text-xl text-orange-300 ">Discover</p>
                        <p className="font-noto text-3xl font-extrabold">Our Menu</p>
                    </div>
                    <div className="w-[60%]">
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
    return <div className={`flex ${(direction === "rev") ? "flex-row-reverse":"flex-row"} gap-16 items-center w-[70%] `}>
                <img src={image} className="w-[35%]"/>
                <div className="w-[40%]">
                    <p className="font-bonheur text-3xl text-orange-300 m-0">{title}</p>
                    <p className="text-[0.6rem] font-inter font-light">{summary || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad adipisci corrupti totam, nobis alias reprehenderit delectus error dolores! Voluptatem, ipsum accusamus. Recusandae quod molestiae aliquam."}</p>
                </div>
    </div>
}

export function UpcomingEvents(){
    return <div className="w-full h-screen relative flex items-center justify-center">
                <img src={rodo} className="absolute w-[18%] z-0 top-[4%] left-[40%]" />
                <div className="w-[85%] h-[70%] flex z-10 relative ">
                    <img src={our_story_dish} className="h-[100%] "  />
                    <div className="w-[50%] bg-white relative text-black p-16 flex flex-col gap-4 justify-center items-start">
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
                <img src={tomato}  className="absolute w-[10%] z-0 bottom-[8%] left-[30%]" />
    </div>
}

export function BestIngredients(){
    return <div className="flex flex-col items-center w-full h-screen">
                        <div className="flex flex-col items-center w-[70%]">
                            <p className="font-bonheur text-orange-300 text-2xl">Discover</p>
                            <p className="font-noto text-4xl font-extrabold">The Best Ingredients</p>
                            <p className=" pt-4 font-inter text- font-extralight text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, error tempore delectus earum officia ipsam, tempora mollitia minus ratione reprehenderit praesentium numquam deleniti inventore reiciendis molestias commodi non sint sapiente? Repudiandae deleniti perferendis ullam ex!</p>
                        </div>
                        <img src={ingredients} className="h-[65%] pt-6"/>
    </div>
}