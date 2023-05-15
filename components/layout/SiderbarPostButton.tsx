import { useRouter } from "next/router"
import { IoMdAdd} from "react-icons/io";

const SiderbarPostButton = () => {
  const router = useRouter();
  return (
    <div onClick={()=>{router.push("/")}}>
        <div className="mt-6 lg:hidden text-white rounded-full aspect-square h-14 flex items-center justify-center bg-black hover:scale-125 hover:bg-opacity-80 transition cursor-pointer">
            <IoMdAdd size={20}   />   
        </div>
        <div className="mt-6 hidden lg:block px-4 py-2 rounded-full text-white bg-black hover:bg-opacity-90 cursor-pointer transition">
          <p className="hidden lg:block text-center text-white text-[20px]">Post</p>
        </div>
    </div>
  )
}

export default SiderbarPostButton