"use client";

import { FC, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ActionButton } from "@/features/layout/PrimaryButton/ActionButton";

interface BackButtonProps {
  fallbackPath?: string;
}

export const BackButton: FC<BackButtonProps> = ({ fallbackPath = "/" }) => {
  const router = useRouter();

  const onClickGoBack = useCallback(() => {
    // 現在のURLを取得
    const currentUrl = window.location.href;
    // 前のページのURLを取得
    const previousUrl = document.referrer;

    // 前のページのURLが現在のドメインと同じかどうかをチェック
    if (
      previousUrl &&
      new URL(previousUrl).origin === new URL(currentUrl).origin
    ) {
      router.back();
    } else {
      // 同じドメインでない場合は、fallbackPathにリダイレクト
      router.push(fallbackPath);
    }
  }, [router, fallbackPath]);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const previousUrl = typeof document !== "undefined" ? document.referrer : "";

  const buttonText =
    previousUrl && new URL(previousUrl).origin === new URL(currentUrl).origin
      ? "前に戻る"
      : "一覧へもどる";

  return <ActionButton onClick={onClickGoBack}>{buttonText}</ActionButton>;
};
