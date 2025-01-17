"use client";

import Banner from "@/Components/Banner";
import Carousel from "@/Components/Carousel";
import Header from "@/Components/Header";
import React, { useState } from "react";

const page = () => {
  const [marks, setMarks] = useState(50);
  return (
    <>
      <Banner />
    </>
  );
};
export default page;
