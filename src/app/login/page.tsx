import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.scss";

export default async function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.pageTitle__title}>ログイン画面</h1>

        <div>
          <div>
            {/* <input placeholder="ユーザーID"  value=""> */}
            {/* <button type="button" disabled="">ログイン</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
