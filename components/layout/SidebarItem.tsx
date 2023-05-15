import { IconType } from "react-icons";

interface SidebarItemProps{
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({label,href,icon:Icon,onClick}) => {
  return (
    <div className="flex items-center">
        <div className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-opacity-10 cursor-pointer lg:hidden'>
            <Icon size={20} color="black" />
        </div>
        <div className="relative hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-opacity-10 cursor-pointer">
        <Icon size={20} color="black" />
        <p>
            {label}
        </p>
        </div>
    </div>
  )
}

export default SidebarItem