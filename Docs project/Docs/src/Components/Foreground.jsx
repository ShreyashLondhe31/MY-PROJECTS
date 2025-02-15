import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Color of the sky is blue",
      fileSize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "The cat sat on the mat.",
      fileSize: "2.5kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "A quick brown fox jumps over the lazy dog.",
      fileSize: "1.2mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full z-[3] flex gap-8 p-5 flex-wrap  "
    >
      {data.map((item, idx) => (
        <Card data={item} reference={ref} key={idx} />
      ))}
    </div>
  );
};
export default Foreground;
