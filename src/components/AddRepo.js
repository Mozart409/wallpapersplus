import React from "react";

import cydia from "../images/cydia7.png";
import zebra from "../images/zebra.png";

function AddRepo() {
  return (
    <div className="my-8">
      <h2 className="text-2xl text-center">Add our repo to your favorite package manager</h2>
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <a
            className=""
            target="_blank"
            href="cydia://url/https://cydia.saurik.com/api/share#?source=https://mozart409.github.io/repo/"
          >
            <figure>
              <img src={cydia} className="w-16 float-left "></img>
            </figure>
            <p className="float-left p-2 text-xl">Add to Cydia</p>
          </a>
        </div>
        <div className="w-1/2">
          <a
            className=""
            target="_blank"
            href="zbra://sources/add/https://mozart409.github.io/repo/"
          >
            <figure>
              <img
                src={zebra}
                className="w-16 float-right border-2 border-gray-700 border-solid rounded-lg hover:border-dashed"
              ></img>
            </figure>
            <p className="float-right p-2 text-xl">Add to Zebra</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AddRepo;
