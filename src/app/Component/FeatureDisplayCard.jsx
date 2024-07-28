'use client'
import Image from "next/image";
import { useState } from "react";

function FeatureDisplayCard({image,title,setdisplayFeatureNo,id,selected}) {
  return (
    <div className={`p-4 card card-compact ${selected?"bg-blue-300 text-white font-semibold":"bg-base-100"} shadow-xl mx-2`} onClick={()=>{setdisplayFeatureNo(id)}}>
      <Image
          src={image}
          width={120}
          height={120}
          alt="Picture of the author"
        />
        <h1 className={`${selected?"text-lg":""} m-auto`}>{title}</h1>
      </div>
  )
}

export default FeatureDisplayCard
