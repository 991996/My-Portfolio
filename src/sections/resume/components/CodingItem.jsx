import CircularProgress from "./CircularProgress";

export default function CodingItem({ item }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <CircularProgress progress={item.number} />
      <p>{item.name}</p>
    </div>
  );
}
