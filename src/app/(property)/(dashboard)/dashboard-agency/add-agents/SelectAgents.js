"use client";
import Image from "next/image";
import Link from "next/link";
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

const SelectAgents = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const options = agentData.map((agent) => ({
    value: agent.title,
    label: agent.title,
  }));

  const handleChange = (selectedOption) => {
    setSelectedAgent(selectedOption);
  };
  return (
    <Select options={options} value={selectedAgent} onChange={handleChange} />
  );
};

export default SelectAgents;
