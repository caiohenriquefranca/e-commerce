import { X } from "lucide-react";


export function Header() {
  return (
    <header>
      <div className=" flex justify-center items-center bg-black py-3">
        <p className="text-white/90 text-xs">
          Sign up and get 20% off to your first order.
        </p>
        <a
          href=""
          className="text-white text-xs ml-1 underline hover:text-white/80"
        >
          Sign Up Now
        </a>
        <div className="flex justify-end ">
          <X className="text-white text-xs" />
        </div>
      </div>
      <div className="bg-white justify-between items-center py-10">
        <div className="ml-52">
          <a href="" className="text-4xl font-black">shop.co</a>
        </div>
    
      </div>
    </header>
  );
}
