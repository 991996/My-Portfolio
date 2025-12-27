import { ArrowRight } from "lucide-react";
import Title from "../Title";
import MapComponent from "./components/MapComponent";
import { myInfo } from "@/data/Data";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className=" relative xl:h-144 bg-primary-black dark:bg-primary-light 
      rounded-md xl:rounded-l-none py-6 overflow-y-auto"
    >
      {/* Content map */}
      <div className="flex flex-col gap-6">
        <Title title="Get in Touch" />
        <MapComponent />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-8">
          <p>
            <span className=" uppercase">Address: </span>
            {myInfo.address}
          </p>
          <p>
            <span className=" uppercase">Email: </span>
            {myInfo.email}
          </p>
          <p>
            <span className=" uppercase">phone: </span>
            {myInfo.phone}
          </p>
          <p>
            <span className=" uppercase">Freelance: </span>
            Available
          </p>
        </div>
      </div>
      {/* form */}
      <div className="flex flex-col gap-6 mt-8">
        <Title title="Contact Form" />
        <form className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <input
              type="text"
              placeholder="Full Name"
              className="border-b pb-2 border-b-white/20 dark:border-b-black/20
               focus:border-primary-purple dark:focus:border-primary-purple focus:outline-none focus:ring-0
                placeholder:text-gray-300 dark:placeholder:text-gray-500 duration-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-b pb-2 border-b-white/20 dark:border-b-black/20
               focus:border-primary-purple dark:focus:border-primary-purple focus:outline-none focus:ring-0
                placeholder:text-gray-300 dark:placeholder:text-gray-500 duration-300"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className=" col-span-2 border-b pb-2 border-b-white/20 dark:border-b-black/20
               focus:border-primary-purple dark:focus:border-primary-purple focus:outline-none focus:ring-0
                placeholder:text-gray-300 dark:placeholder:text-gray-500 duration-300"
            />
          </div>
          <button
            type="submmit"
            className="flex uppercase my-8 hover:text-primary-purple gap-1 hover:gap-4 
            font-bold items-center duration-300 tracking-wider cursor-pointer"
          >
            send message <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
