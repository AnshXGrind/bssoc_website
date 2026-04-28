"use client";

import React, { useState, useEffect } from "react";
import CinematicLoader from "@/components/CinematicLoader";
import Navbar from "@/components/layout/Navbar";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("bssoc_loader");
    if (seen) setLoading(false);
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("bssoc_loader", "true");
    setLoading(false);
  };

  return (
    <>
      {loading && <CinematicLoader onFinish={handleFinish} />}
      {!loading && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}
