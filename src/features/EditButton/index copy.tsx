"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/state/recoilState";

export const EditButton = ({ recipeId, recipeUserId }) => {
  const user = useRecoilValue(userState);
  const [isHydrated, setIsHydrated] = useState(false);
  // console.log("recipeId => ", recipeId);
  // console.log("recipeId => ", recipeId);

  // クライアントサイドでのみレンダリングするためのフラグを設定
  useEffect(() => {
    setIsHydrated(true);
  }, [user]);

  // サーバーサイドでの不一致を防ぐため、クライアントサイドのみで表示
  if (!isHydrated) {
    return null;
  }

  if (user.id === recipeUserId) {
    return (
      <p>
        <Link href={`/posts/edit/${recipeId}`}>編集</Link>
      </p>
    );
  }
};
