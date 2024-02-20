import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Sign In Page</h1>
      <button onClick={() => handleLogin()}>Sign In</button>
      <p>
        Dont Have an Account? <Link href={`/auth/register`}>Sign Up Here</Link>
      </p>
    </div>
  );
};

export default LoginViews;
