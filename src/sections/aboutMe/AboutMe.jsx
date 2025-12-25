import { myInfo, myServices, about } from "@/data/Data";
import Service from "./component/Service";
import Title from "../Title";

function AboutMe() {
  return (
    <section
      id="about"
      className=" relative xl:h-144 bg-primary-black dark:bg-primary-light 
      rounded-md xl:rounded-l-none py-6 overflow-y-auto"
    >
      {/* Content about */}
      <div className="flex flex-col gap-6">
        <Title title="About Me" />

        <div className="px-8 text-gray-300 dark:text-gray-700 flex flex-col gap-1.5">
          <p className="font-bold">Hello! I'm {myInfo.name}</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos
            minus, expedita corporis voluptate soluta maxime eius corrupti
            minima! Quis!
          </p>
          <div className="mt-3 grid grid-cols-1 xl:grid-cols-2">
            {about.map((a, index) => {
              return (
                <p key={index}>
                  <span className="text-white dark:text-gray-800 uppercase tracking-wide">
                    {a.title}....
                  </span>{" "}
                  {a.value}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Services */}
      <div className="flex flex-col gap-6 mt-10">
        <Title title="My Services" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {myServices.map((s, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === myServices.length - 1
                    ? ""
                    : "border-b md:border-r md:border-b-0"
                } border-white/20 dark:border-black/10 py-6`}
              >
                <Service service={s} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
