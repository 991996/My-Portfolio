import CircularProgress from "./CircularProgress";

export default function CodingItem({ item }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      {/* <CircularProgress progress={item.number} /> */}
      {/* ICON */}
      <div className="flex justify-center items-center  text-primary-purple">
        {item.icon}
      </div>

      <p>{item.name}</p>
    </div>
  );
}
