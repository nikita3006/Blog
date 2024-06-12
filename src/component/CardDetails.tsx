import React from "react";

const CardDetails: React.FC<{
  image: string;
  name: string;
  title: string;
  date: number;
}> = (props) => {
  return (
    <div className="  m-4 ">
      <div className=" mt-14  ">
        <img
          src={props.image}
          alt="image1"
          style={{ height: "230px", width: "270px", "border-radius": "10px" }}
        />
      </div>
      <div className=" bg-red-500 rounded-md text-center mt-6">
        <h6>{props.name}</h6>
        <p>{props.title}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default CardDetails;
