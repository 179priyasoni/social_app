import React, { useState } from "react";
import S_name from "../../public/assests/S_name.jpg";
import M_name from "../../public/assests/M_name.jpg";
import S1_name from "../../public/assests/S1_name.jpg";
import B_name from "../../public/assests/B_name.png";
import H_name from "../../public/assests/H_name.jpg";
import H1_name from "../../public/assests/H1_name.jpg";
import K_name from "../../public/assests/k_name.jpg";
import S2_name from "../../public/assests/s2.jpg";
import N_name from "../../public/assests/N_name.jpg";
import P_name from "../../public/assests/P_name.jpg";
import D_name from "../../public/assests/D_name.jpg";
import Image from "next/image";

const StoriesData = [
  {
    id: 1,
    userName: "Priya",
    Profile: P_name,
  },
  {
    id: 2,
    userName: "Nishi",
    Profile: N_name,
  },
  {
    id: 3,
    userName: "Sumit",
    Profile: S2_name,
  },
  {
    id: 4,
    userName: "Harsh",
    Profile: H1_name,
  },
  {
    id: 5,
    userName: "Khushal",
    Profile: K_name,
  },
  {
    id: 6,
    userName: "Hitesh",
    Profile: H_name,
  },
  {
    id: 7,
    userName: "Bhavesh",
    Profile: B_name,
  },
  {
    id: 8,
    userName: "Sahil",
    Profile: S_name,
  },
  {
    id: 9,
    userName: "Mihir",
    Profile: M_name,
  },
  {
    id: 10,
    userName: "Sandesh",
    Profile: S1_name,
  },

  {
    id: 11,
    userName: "Dhyan",
    Profile: D_name,
  },
];

function Stories() {
  const [newstoryActiveId, setnewstoryActiveId] = useState(0);
  const [newstoryActive, setnewstoryActive] = useState<boolean>(false);

  const newStoryClicked = (id: number) => {
    console.log(id, "id");
    setnewstoryActiveId(id);
    setnewstoryActive(!newstoryActive);
  };

  return (
    <div className="flex gap-5">
      {StoriesData.map((item, index) => (
        <div className="flex gap-2 " key={index}>
          <div className="flex justify-center items-center gap-2 flex-col ">
            {newstoryActiveId === item.id ? (
              <div className="h-16 w-16 rounded-full flex justify-center items-center border-4 border-primary-100">
                <div className="h-12 w-12">
                  <Image
                    src={item.Profile}
                    alt=""
                    className="h-full w-full rounded-full border"
                  />
                </div>
              </div>
            ) : (
              <div className="h-16 w-16 rounded-full flex justify-center items-center border-4 border-primary-500">
                <div className="h-12 w-12">
                  <Image
                    src={item.Profile}
                    alt=""
                    className="h-full w-full rounded-full border"
                    onClick={() => newStoryClicked(item.id)}
                  />
                </div>
              </div>
            )}
            <div className="max-w-[80px] text-ellipsis overflow-hidden text-white">
              {item.userName}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stories;
