import React, { useEffect, useState } from "react";
import {Progress} from "@material-tailwind/react"

const LiveUpdate = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, [candidates]);Progress


  return (
    <div className="w-[507px] h-fit border-2 border-[#CECECE]">
      <div className="border-b-2 border-b-[#CECECE]">
        <p className="text-center text-[20px] font-[700] py-[24px]">
          Live Update
        </p>
      </div>

      <div>
         { candidates.map((candidate)=>(
          <div key={candidate._id} className=" border-b-2 border-b-[#CECECE] mt-5 mb-2 p-5 last:border-none flex flex-row gap-8">
            <img src={candidate.imgUrl} alt="candidate profile" className="rounded-full  w-14 h-14" />
            <div className="relative">
                <p className="text-[20px] font-[400]">{candidate.names}</p>
                <Progress className="w-[200px] h-[10px] mt-4" color= {candidate.votes < 50 ? 'red' : 'green'} value={candidate.votes} variant="filled" />
                <p className="absolute top-0 right-0 mt-5 ">{candidate.votes}%</p>
            </div>
          </div>
         ))}
      </div>
    </div>
  );
};

export default LiveUpdate;
