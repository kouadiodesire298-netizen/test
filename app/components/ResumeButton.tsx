"use client";

import React from "react";

const ResumeButton = () => {
  return (
    <a 
      href="/desire.pdf" 
      download="CV_Desire.pdf"
      className="bg-[#915eff] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold"
    >
      Download Resume
    </a>
  );
};

export default ResumeButton;