"use client";
import styles from "./index.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { passwordState } from "@/state/recoilState";

import { useIsUserMatch } from "@/hooks/useIsUserMatch";
import { PostTextbox } from "@/features/inputs/post/PostTextbox/";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import { ActionButton } from "@/features/layout/PrimaryButton/ActionButton";

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
      <p className={styles.userEdit}>
        <NavigationButton href={`/posts/edit/${recipeId}`}>
          編集
        </NavigationButton>
      </p>
    );
  }

  // ゲストで登録したレシピの場合
  // if (recipeUserId === null) {
  //   return (
  //     <div className={styles.guestEdit}>
  //       <dl className={styles.inputContainer}>
  //         <dt className={styles.inputTitle}>
  //           <span className={styles.inputTitle__text}>
  //             編集パスワード
  //             <span className={styles.inputTitle__text__small}>
  //               （半角英数字）
  //             </span>
  //           </span>
  //         </dt>
  //         <dd className={styles.inputDesc}>
  //           <PostTextbox
  //             id="password"
  //             value={inputRecipePassword}
  //             name="password"
  //             placeholder="例）1234"
  //             onChange={onChangeInputRecipePassword}
  //           />
  //         </dd>
  //       </dl>
  //       {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
  //       <p className={styles.guestEditButton}>
  //         <ActionButton onClick={handleEditClick}>編集</ActionButton>
  //       </p>
  //     </div>
  //   );
  // }

  //どちらでもない場合は非表示
  return null;
};
