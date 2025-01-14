import { X } from "lucide-react"

export function Header() {
    return(
        <header>
            <div className=" flex justify-center items-center bg-black px-9 py-5">
                <p className="text-white/90 text-xs">Sign up and get 20% off to your first order.</p>
                <a href="" className="text-white text-xs ml-1 underline hover:text-white/80">Sign Up Now</a>
                <X className="text-white justify-end"/>
            </div>  
        </header>
    )
}