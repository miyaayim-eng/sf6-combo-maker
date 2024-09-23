// import { getUser } from "./action";
import { getLoginUser } from "@/utils/getLoginUser";

import styles from "./index.module.scss";

export const CurrentUser = async () => {
  // const [currentUser, setcurrentUser] = useState("");

  // // セッションがあるときだけ現在ログインしているユーザーを取得する
  // if (data.session !== null) {
  //   // supabaseに用意されている現在ログインしているユーザーを取得する関数
  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();
  //   // currentUserにユーザーのメールアドレスを格納
  //   setcurrentUser(user.email);
  // }

  // // HeaderコンポーネントがレンダリングされたときにgetCurrentUser関数が実行される
  // useEffect(() => {
  //   getCurrentUser();
  // }, []);

  // const test = getUser();
  const test = getLoginUser();

  return (
    <>
      {/* <div>
        {currentUser ? (
          // サーバーサイドとクライアントサイドでレンダーされる内容が違うときにエラーがでないようにする
          <p suppressHydrationWarning={true}>
            {currentUser} でログインしています。
          </p>
        ) : (
          <p suppressHydrationWarning={true}>ログインしていません。</p>
        )}
      </div> */}

      <p>{test}でログイン中</p>
    </>
  );
};
