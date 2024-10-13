"use client";
import styles from "./index.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { passwordState } from "@/state/recoilState";

import Link from "next/link";
import { useIsUserMatch } from "@/hooks/useIsUserMatch";
import { InputText } from "@/features/InputText";

export const EditButton = ({
  recipeId,
  recipeUserId,
  recipePassword,
}: {
  recipeId: number;
  recipeUserId: string | null;
  recipePassword: string | null;
}) => {
  // console.log(useIsUserMatch(recipeUserId));

  const [inputRecipePassword, setInputRecipePassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [password, setPassword] = useRecoilState(passwordState);
  const router = useRouter();

  const onChangeInputRecipePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputRecipePassword(e.target.value);
  };

  const handleEditClick = () => {
    if (inputRecipePassword === recipePassword) {
      setPassword(inputRecipePassword);
      router.push(`/posts/edit/${recipeId}`);
    } else {
      setErrorMessage("パスワードが一致しません");
    }

    // console.log("");
    // console.log("recipePassword の型:", typeof recipePassword);
    // console.log("recipePassword の値:", recipePassword);
    // console.log("inputRecipePassword の型:", typeof inputRecipePassword);
    // console.log("inputRecipePassword の値:", inputRecipePassword);
    // console.log("");
  };

  // アカウントにログインしている場合
  if (useIsUserMatch(recipeUserId ?? "")) {
    return (
      <p>
        <Link href={`/posts/edit/${recipeId}`}>
          アカウントが一致した場合の編集
        </Link>
      </p>
    );
  }

  // ゲストで登録したレシピの場合
  if (recipeUserId === null) {
    return (
      <div>
        <div>
          <label htmlFor="password" className={styles.label}>
            パスワード（半角英数字）
          </label>
          <div className={styles.inputBox}>
            <InputText
              id="password"
              value={inputRecipePassword}
              name="password"
              placeholder="例）1234"
              onChange={onChangeInputRecipePassword}
            />
          </div>
        </div>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <button onClick={handleEditClick}>
          ゲストで登録したレシピのパスワードが一致した場合の編集
        </button>
      </div>
    );
  }

  //どちらでもない場合は非表示
  return null;
};
