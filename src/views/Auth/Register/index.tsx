import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Register.module.css";

const RegisterViews = () => {
  const { push } = useRouter();

  const handleRegister = () => {
    push("/auth/login");
  };
  return (
    <div className={styles.register}>
      <h1>Sign Up Page</h1>
      <button onClick={() => handleRegister()}>Sign Up</button>
      <p>
        Have an Account? <Link href={`/auth/login`}>Sign In Here</Link>
      </p>
    </div>
  );
};

export default RegisterViews;
