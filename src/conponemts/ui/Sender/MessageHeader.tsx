import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const MessageHeader = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-white">
      <div className=" flex gap-2">
        <div className="size-12 rounded-full bg-slate-400 flex items-center justify-center">
          <p className="text-2xl">RH</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">MD Sahidul islam </h3>
          <p className="text-gray-600">jun 16 </p>
        </div>
      </div>
      <div className="flex gap-6 items-center ">
        <FaSearch className="size-4 text-gray-600" />
        <FaPhoneAlt className="size-4 text-gray-600" />
        <HiDotsVertical className="size-4 text-gray-600" />
      </div>
    </div>
    );
};

export default MessageHeader;