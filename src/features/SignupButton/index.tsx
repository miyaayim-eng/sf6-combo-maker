"use client";

import { useTransition } from "react";
import { signup } from "@/utils/supabase/account";

import styles from "./index.module.scss";

export const SignupButton = () => {
  const [isPending, startTransition] = useTransition();

  const handleSignup = async (formData: FormData) => {
    startTransition(async () => {
      try {
        await signup(formData);
      } catch (error) {
        console.error("サインアップエラー:", error);
      }
    });
  };

  return (
    <div>
      <p className={styles.buttonBox}>
        <button
          className={styles.button}
          formAction={handleSignup}
          disabled={isPending}
        >
          {isPending ? "送信中です" : "登録する"}
        </button>
      </p>
      {isPending && <p>登録情報を送信中です、今しばらくお待ちください。</p>}
    </div>
  );
};
