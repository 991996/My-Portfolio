// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Title from "../Title";
import { Link } from "lucide-react";
import { works } from "@/data/Data";

export default function Works() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? works : works.filter((w) => w.category === filter);

  return (
    <section
      id="works"
      className=" relative xl:h-144 bg-primary-black dark:bg-primary-light 
      rounded-md xl:rounded-l-none py-6 overflow-y-auto"
    >
      {/* Content about */}
      <div className="flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <Title title="Works" />
          {/* Filters */}
          <div className="flex gap-4 pr-4 md:pr-8">
            {["all", "website", "store", "landingPage"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer hover:text-primary-purple duration-300
                md:text-lg  capitalize ${
                  filter === cat ? "text-primary-purple" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <hr className="border-white/20 dark:border-black/20" />

        {/* Gallery */}
        <div className="grid md:grid-cols-2 gap-x-6 px-8">
          <AnimatePresence>
            {filtered.map((work) => {
              // تحديد عدد صفوف حسب حجم الصورة
              let rowSpanClass = "";
              if (work.size === 1) rowSpanClass = "md:row-span-1"; // فيديو
              if (work.size === 2) rowSpanClass = "md:row-span-2"; // مربع
              if (work.size === 3) rowSpanClass = "md:row-span-3"; // عمودي طويل
              return (
                <motion.a
                  key={work.id}
                  layout
                  href={work.link}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`overflow-hidden group ${rowSpanClass}`}
                >
                  <div
                    className={`relative overflow-hidden w-[90%] sm:w-[60%] mx-auto md:w-full ${
                      work.size === 1
                        ? "aspect-video"
                        : work.size === 2
                        ? "aspect-square"
                        : "aspect-[2.5/3]"
                    } `}
                  >
                    <img
                      src={work.img}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 duration-300  "
                    />
                    {/* overlay */}
                    <div
                      className=" absolute inset-0 bg-linear-to-br from-primary-purple/30 opacity-0 group-hover:opacity-100
         flex justify-center items-center text-gray-100"
                    >
                      <Link size={30} strokeWidth={4} />
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-bold text-xl group-hover:text-primary-purple duration-300">
                      {work.title}
                    </p>
                    <p className="text-gray-500 capitalize">{work.category}</p>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
