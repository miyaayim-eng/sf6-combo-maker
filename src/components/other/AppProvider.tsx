"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export const AppProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
