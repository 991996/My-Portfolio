export default function SubTitle({ title, icon }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div
          className="flex justify-center items-center w-14 aspect-square rounded-full border 
border-primary-purple text-primary-purple"
        >
          {icon}
        </div>
        <p className=" uppercase font-bold text-lg">{title}</p>
      </div>
      <div className="w-full h-px from-white/20 dark:from-black/20 mt-2 bg-linear-to-r"></div>
    </div>
  );
}
