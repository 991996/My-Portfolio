export default function Title({ title }) {
  return (
    <>
      <div className=" relative">
        <div
          className=" absolute left-5 w-8 aspect-square bg-linear-to-br to-75% 
    from-primary-purple/80 to-transparent rounded-full"
        ></div>
        <h1 className="text-xl font-bold px-8">{title}</h1>
      </div>
      <hr className="border-white/20 dark:border-black/20" />
    </>
  );
}
