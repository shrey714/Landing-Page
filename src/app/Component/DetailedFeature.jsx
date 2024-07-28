import React from "react";
import Image from "next/image";
import { easeIn, motion, useAnimate } from "framer-motion";
import { useEffect,useState } from "react";

function DetailedFeature({ image, title, description }) {
  const [scope, animate] = useAnimate();
const [exiting, setExiting] = useState(false);
const [displayedTitle, setDisplayedTitle] = useState(title);
useEffect(() => {
    if (exiting) {
      animate(scope.current, { opacity: 0, transform: ['translateX(0%)', 'translate(100%)'] }, { duration: 0.2,ease:"easeIn"})
        .then(() => {
          setDisplayedTitle(title);
          setExiting(false);
          animate(scope.current, { opacity: 1, transform: ['translateX(-100%)', 'translate(0%)'] }, { duration: 0.2,ease:"easeIn" });
        });
    } else {
      animate(scope.current, { opacity: 1, transform: ['translateX(-100%)', 'translate(0%)'] }, { duration: 0.2,ease:"easeIn" });
    }
  }, [exiting]);

  useEffect(() => {
    setExiting(true);
  }, [title]);

  return (
    <motion.div
      ref={scope}
      className="flex-col sm:flex sm:flex-row justify-evenly mt-6 bg-gray-300 rounded-xl p-4 m-6"
    >
      <div className="p-4">
        <Image
          src={image}
          width={120}
          height={120}
          alt="Picture of the author"
          className="m-auto"
        />
      </div>
      <div>
        <h1 className="card-title justify-center p-2">{title}</h1>
        <h1 className="p2">{description}</h1>
      </div>
    </motion.div>
  );
}

export default DetailedFeature;
