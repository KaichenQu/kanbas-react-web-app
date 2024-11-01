import GreenCheckmark from "./GreenCheckmark";
import { FaPlus, FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function LessonControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && (
        <>
          <FaPencil
            onClick={() => editModule(moduleId)}
            className="text-primary me-3"
          />
          <FaTrash
            className="text-danger me-2 mb-1"
            onClick={() => deleteModule(moduleId)}
          />
          <GreenCheckmark />
          <FaPlus className="fs-5" />
        </>
      )}
    </div>
  );
}
