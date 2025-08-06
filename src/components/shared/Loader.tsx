import { ImSpinner } from "react-icons/im";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ImSpinner className="animate-spin " size={70} />
    </div>
  );
};
