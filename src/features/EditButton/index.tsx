"use client";

import Link from "next/link";
import { useIsUserMatch } from "@/hooks/useIsUserMatch";

export const EditButton = ({ recipeId, recipeUserId }) => {
  // console.log(useIsUserMatch(recipeUserId));

  if (useIsUserMatch(recipeUserId)) {
    return (
      <p>
        <Link href={`/posts/edit/${recipeId}`}>編集</Link>
      </p>
    );
  }
};
