import {BsHouseFill,BsBellFill} from "react-icons/bs"
import {FaUser} from "react-icons/fa"
import SidebarLogo from "./SidebarLogo"
import SidebarItem from "./SidebarItem"
import {BiLogOut} from "react-icons/bi"
import SidebarPostButton from "./SiderbarPostButton"

const Sidebar = () => {
    const items = [
        {
            label: "home",
            href: "/",
            icon: BsHouseFill,
        },
        {   
            label: "notification",
            href: "/notification",
            icon: BsBellFill,
        },
        {
            label: "Profile",
            href: "users/123",
            icon: FaUser,
        },
        
    ]
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
            <div className="space-y-2 lg-w-[230px]">
                <SidebarLogo />
                {items.map(({label,href,icon})=>(
                    <SidebarItem 
                        key={href}
                        href={href}
                        label={label}
                        icon={icon}
                    />
                )
                )                    
                }
                <SidebarItem onClick={()=>{}} icon={BiLogOut} label="Logout" />
                <SidebarPostButton  />
            </div>
        </div>
    </div>
  )
}

export default Sidebar