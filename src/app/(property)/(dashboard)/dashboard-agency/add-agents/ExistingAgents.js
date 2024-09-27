"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import SelectAgents from "./SelectAgents";
import { useState } from "react";
import Select from "react-select";

const agentData = [
  {
    id: 1,
    title: "Name1",
    imageSrc: "/images/listings/list-1.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "Pending",
  },
  {
    id: 2,
    title: "Name2",
    imageSrc: "/images/listings/list-2.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "Active",
  },
  {
    id: 3,
    title: "Name3",
    imageSrc: "/images/listings/list-3.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "InActive",
  },
  {
    id: 4,
    title: "Name4",
    imageSrc: "/images/listings/list-4.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "Pending",
  },
  {
    id: 5,
    title: "Name5",
    imageSrc: "/images/listings/list-5.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "Active",
  },
];

const ExistingAgents = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const options = agentData.map((agent) => ({
    value: agent.title,
    label: agent.title,
    image: agent.imageSrc,
    email: agent.email,
    contact: agent.contact,
  }));

  const handleChange = (selectedOption) => {
    setSelectedAgent(selectedOption);
  };

  return (
    <>
      <table className="table-style3 table at-savesearch">
        <thead className="t-head">
          <tr>
            <th scope="col">Select Agents</th>
            <th
              style={{
                width: "80%",
                position: "relative",
                left: "-50px",
              }}
              scope="col"
              id="select-div"
            >
              <Select
                options={options}
                value={selectedAgent}
                onChange={handleChange}
                menuPortalTarget={
                  typeof window !== "undefined" ? document.body : undefined
                }
              />
            </th>
          </tr>
        </thead>
        {/* <tbody className="t-body" id="t-body">
        {agentData.map((property) => (
          <tr key={property.id}>
            <th scope="row">
              <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                <div className="list-thumb">
                  <Image
                    width={110}
                    height={94}
                    className="w-100"
                    src={property.imageSrc}
                    alt="property"
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                  <div className="h6 list-title">
                    <Link href={`/single-v1/${property.id}`}>
                      {property.title}
                    </Link>
                  </div>
                  <p className="list-text mb-0">{property.email}</p>
                  <div className="list-price">
                    <a href="#">{property.contact}</a>
                  </div>
                </div>
              </div>
            </th>
          </tr>
        ))}
      </tbody> */}
        <tbody className="t-body" id="t-body">
          {selectedAgent ? ( // Only render if an agent is selected
            <tr style={{ borderColor: "white" }}>
              <th scope="row">
                <div
                  className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0"
                  style={{
                    position: "absolute",
                    left: "0",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <div className="list-thumb">
                    <Image
                      width={110}
                      height={94}
                      className="w-100"
                      src={selectedAgent.image}
                      // Access imageSrc using selectedAgent.value
                      alt="property"
                    />
                  </div>
                  <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                    <div className="h6 list-title">
                      <Link href={`/single-v1/${selectedAgent.value}`}>
                        {/* Access title using selectedAgent.value */}
                        {selectedAgent.label} {/* Display the selected label */}
                      </Link>
                    </div>
                    <p className="list-text mb-0">{selectedAgent.email}</p>
                    <div className="list-price">
                      <a href="#">{selectedAgent.contact}</a>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          ) : (
            <tr>
              <th
                scope="row"
                style={{
                  position: "absolute",
                  width: "100%",
                }}
              >
                No agent selected
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ExistingAgents;
