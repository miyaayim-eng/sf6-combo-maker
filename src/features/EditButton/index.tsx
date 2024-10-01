"use client";

import Link from "next/link";
import { useIsUserMatch } from "@/hooks/useIsUserMatch";

export const EditButton = ({
  recipeId,
  recipeUserId,
}: {
  recipeId: number;
  recipeUserId: string | null;
}) => {
  // console.log(useIsUserMatch(recipeUserId));

  if (useIsUserMatch(recipeUserId ?? "")) {
    return (
      <p>
        <Link href={`/posts/edit/${recipeId}`}>編集</Link>
      </p>
    );
  }

  return null; // ユーザーが一致しない場合は何も表示しない
};
