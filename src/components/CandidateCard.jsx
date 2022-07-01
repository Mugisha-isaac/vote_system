import React, { useEffect, useState } from "react";

const CandidateCard = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, [candidates]);


  return (
    <div className="ml-[214px] flex flex-row gap-20 mt-5 w-[50%]">
      {candidates.map((candidate) => (
        <div key={candidate._id} className=" w-60 h-80 border-2 border-[#CECECE] relative">
            <img src={candidate.imgUrl} alt="candidate profile" className=" object-cover  rounded-full w-28 h-28 mx-auto absolute top-[9.72%] left-[18.75%] right-[26.47%] bottom-[47.5%]" />
             <p className="absolute top-[55.92%] left-[17.13%] right-[11.48%] bottom-[38.04%] text-[20px] whitespace-pre ">{candidate.names}</p>
             <p className="absolute top-[65.24%] right-[28.7%] left-[30.74%] bottom-[28.72%] py-[24px] text-[#636262] font-[400]">{candidate.votes} votes</p>
             <button className="absolute top-[77.83%] left-[16.53%] right-[17.33%] bottom-[8.06%] bg-[#0089ED] mt-4 text-white font-bold focus:outline-none active:bg-blue-900 focus:ring focus:ring-blue-300">Vote</button>
        </div>
      ))}
    </div>
  );
};
export default CandidateCard;
