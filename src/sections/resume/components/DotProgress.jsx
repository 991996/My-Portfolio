import { FaCircle } from "react-icons/fa";

export default function DotProgress({ value = 1 }) {
  const Dots = [];
  for (let i = 1; i < 11; i++) {
    i <= value
      ? Dots.push(
          <div className="text-primary-purple">
            <FaCircle size={20} />
          </div>
        )
      : Dots.push(
          <div className="text-gray-300">
            <FaCircle size={20} />
          </div>
        );
  }
  return (
    <div className="flex justify-between">
      {Dots.map((d, index) => {
        return <div key={index}>{d}</div>;
      })}
    </div>
  );
}
