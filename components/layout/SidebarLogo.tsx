import { useRouter } from "next/router"
import { BsHeart, BsHeartFill } from "react-icons/bs";

const SidebarLogo = () => {
    const router = useRouter();
  return (
    <div onClick={()=>router.push("/")} className="
    rounded-full
    h-14
    w-14
    ml-3
    p-4
    flex
    items-center
    justify-center
    hover:bg-indigo-500
    hover:opacity-10
    cursor-pointer
    transition
    ">
        <p>Niin4k</p>
        {/* <BsHeartFill size={20} /> */}
    </div>
  )
}

export default SidebarLogo