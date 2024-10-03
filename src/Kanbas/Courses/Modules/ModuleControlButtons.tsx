import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="fs-5" />
    </div>
  );
}
