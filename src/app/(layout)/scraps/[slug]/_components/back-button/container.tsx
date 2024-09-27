"use client";

import { useEffect, useState } from "react";
import { BackButton as BackButtonPresentation } from "./presentation";

export const BackButton = () => {
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    setReferrer(window.document.referrer);
  }, []);

  return <BackButtonPresentation href={referrer} />;
};
