import {
  codingList,
  experience,
  knowledgeList,
  languagesList,
  myInfo,
} from "@/data/Data";
import { FaBriefcase } from "react-icons/fa6";
import Experince from "./components/Experince";
import Title from "../Title";
import SubTitle from "../SubTitle";
import { FaGraduationCap } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import CodingItem from "./components/CodingItem";
import { TfiMenuAlt } from "react-icons/tfi";
import { Check } from "lucide-react";
// import { FaHtml5 } from "react-icons/fa6";
// import { Progress } from "@/components/ui/progress";
import { FaLanguage } from "react-icons/fa";
import DotProgress from "./components/DotProgress";

function Resume() {
  return (
    <section
      id="resume"
      className=" relative xl:h-144 bg-primary-black dark:bg-primary-light 
      rounded-md xl:rounded-l-none py-6 overflow-y-auto pb-16"
    >
      {/* Content about */}
      <div className="flex flex-col gap-6">
        <Title title="Resume" />

        {/* Education section */}
        <div className="flex flex-col px-8">
          <SubTitle title="Education" icon={<FaGraduationCap size={30} />} />

          {/* Education item */}
          <div className=" relative my-6">
            <div className=" absolute h-full w-px bg-white/20 dark:bg-black/20 top-2 left-0.75"></div>
            <div className="flex flex-col gap-3">
              {/* DATE */}
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-2 aspect-square rounded-full bg-primary-purple"></div>
                <div className="border border-primary-purple rounded-sm px-1 ">
                  <p className="text-sm text-primary-purple">
                    {myInfo.education.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 pl-4">
                {/* job title */}
                <h1 className="font-bold">{myInfo.education.university}</h1>
                <p className="text-sm text-gray-300 dark:text-gray-500 ">
                  {myInfo.education.country}
                </p>
                <p className="text-[15px] text-gray-300 dark:text-gray-500 ">
                  {myInfo.education.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Experience section */}
        <div className="flex flex-col px-8">
          <SubTitle title="Experience" icon={<FaBriefcase size={30} />} />
          {/* Experince items */}
          <div className=" relative grid grid-cols-1 gap-6 my-6">
            <div className=" absolute h-full w-px bg-white/20 dark:bg-black/20 top-2 left-0.75"></div>
            {experience.map((exp, index) => {
              return (
                <div key={index}>
                  <Experince exp={exp} />
                  {experience.length - 1 !== index ? (
                    <div className="ml-1 w-full h-px from-white/20 dark:from-black/20 mt-2 bg-linear-to-r"></div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Skills section */}
        <div className="flex flex-col gap-6">
          <Title title="Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
            {/* CODING */}
            <div className="flex flex-col px-8">
              <SubTitle title="coding" icon={<FaCode size={30} />} />
              <div className="grid grid-cols-2 gap-y-6 w-full py-6">
                {codingList.map((code, index) => {
                  return <CodingItem key={index} item={code} />;
                })}
              </div>
            </div>
            {/* Knowledge */}
            <div className="flex flex-col gap-6 px-8">
              <SubTitle title="Knowledge" icon={<TfiMenuAlt size={30} />} />
              <div className="flex flex-col gap-2">
                {knowledgeList.map((k, index) => {
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="text-primary-purple">
                        <Check size={20} strokeWidth={3.5} />
                      </div>

                      <p>{k}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* FRONT END */}
            {/* <div className="flex flex-col gap-6 px-8">
              <SubTitle title="front-end" icon={<FaHtml5 size={30} />} />
              <div className="flex flex-col gap-6">
                {frontEndList.map((f, index) => {
                  return (
                    <div key={index} className="flex flex-col">
                      <p>{f.name}</p>
                      <Progress
                        value={f.value}
                        className="[&>div]:bg-primary-purple bg-gray-300"
                      />
                    </div>
                  );
                })}
              </div>
            </div> */}
            {/* Languages */}
            <div className="flex flex-col gap-6 px-8">
              <SubTitle title="Languages" icon={<FaLanguage size={30} />} />
              <div className="flex flex-col gap-4">
                {languagesList.map((lang, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-2">
                      <p>{lang.name}</p>
                      {/* <DotProgress value={lang.value} /> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
