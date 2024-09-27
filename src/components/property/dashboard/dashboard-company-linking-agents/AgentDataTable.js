"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const agentData = [
  {
    id: 1,
    title: "Name",
    imageSrc: "/images/listings/list-1.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "Pending",
  },
  {
    id: 2,
    title: "Name",
    imageSrc: "/images/listings/list-2.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "Active",
  },
  {
    id: 3,
    title: "Name",
    imageSrc: "/images/listings/list-3.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "InActive",
  },
  {
    id: 4,
    title: "Name",
    imageSrc: "/images/listings/list-4.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "Pending",
  },
  {
    id: 5,
    title: "Name",
    imageSrc: "/images/listings/list-5.jpg",
    email: "example@google.com",
    contact: "+92-000-0000",
    datePublished: "December 31, 2022",
    status: "Active",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "pending-style style1";
    case "Active":
      return "pending-style style2";
    case "InActive":
      return "pending-style style3";
    default:
      return "";
  }
};

const AgentDataTable = () => {
  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Agents</th>
          <th scope="col">Status</th>
          <th scope="col">Joining Data</th>
          {/* <th scope="col">View</th> */}
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className="t-body">
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
            {/* <td className="vam">{property.datePublished}</td> */}
            <td className="vam">
              <span className={getStatusStyle(property.status)}>
                {property.status}
              </span>
            </td>
            <td className="vam">{property.datePublished}</td>
            <td className="vam">
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${property.id}`}
                >
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${property.id}`}
                >
                  <span className="flaticon-bin" />
                </button>

                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edi"
                />
                <ReactTooltip
                  id={`delete-${property.id}`}
                  place="top"
                  content="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AgentDataTable;
