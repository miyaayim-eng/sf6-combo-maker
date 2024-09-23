"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export const RecoilProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
