function Experince({ exp }) {
  return (
    <div className="flex flex-col gap-3">
      {/* DATE */}
      <div className="flex items-center gap-2 relative z-10">
        <div className="w-2 aspect-square rounded-full bg-primary-purple"></div>
        <div className="border border-primary-purple rounded-sm px-1 ">
          <p className="text-sm text-primary-purple">{exp.date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 pl-4">
        {/* job title */}
        <h1 className="font-bold">{exp.job}</h1>
        <p className="text-sm text-gray-300 dark:text-gray-500 ">
          {exp.company}
        </p>
        <p className="text-[15px] text-gray-300 dark:text-gray-500 ">
          {exp.desc.map((d, index) => {
            return (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 aspect-square shrink-0 mt-2 rounded-full bg-gray-300"></div>
                <p>{d}</p>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default Experince;
