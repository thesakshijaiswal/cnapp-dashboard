import NotFoundImg from "../assets/not-found.svg";
import { useSelector } from "react-redux";

const NotFound = () => {
  const { searchTerm } = useSelector((state) => state.widgets);
  return (
    <div className="mt-28 flex flex-col items-center justify-center text-center text-gray-500 italic">
      <div>
        <img
          src={NotFoundImg}
          alt="No Search Results"
          className="h-96 w-full"
        />
      </div>
      No results found for "{searchTerm}"
    </div>
  );
};

export default NotFound;
