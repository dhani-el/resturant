
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