export default function Service({ service }) {
  return (
    <div className="flex flex-col gap-2 px-8">
      {/* ICON */}
      <div
        className="flex justify-center items-center w-18 aspect-square rounded-full border 
      border-primary-purple text-primary-purple"
      >
        {service.icon}
      </div>
      <p className="font-bold">{service.title}</p>
      <p className="text-gray-300 dark:text-gray-600">{service.desc}</p>
    </div>
  );
}
