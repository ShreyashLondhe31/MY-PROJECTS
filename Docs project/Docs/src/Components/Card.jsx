import { FaFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "motion/react";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className=" relative flex-shrink-0 w-60 h-72 bg-zinc-900/50 rounded-[40px] text-white px-8 py-10 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 ">{data.desc}</p>
      <div className="absolute footer w-full  bottom-0 left-0">
        <div className="flex items-center justify-between py-4 px-8">
          <h5>{data.fileSize}</h5>
          <span>
            {data.close ? <IoIosCloseCircleOutline /> : <FaCloudDownloadAlt />}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full h-10 bg-${data.tag.tagColor}-600 flex items-center justify-center`}
          >
            <h3 className="text-sm  ">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};
export default Card;
