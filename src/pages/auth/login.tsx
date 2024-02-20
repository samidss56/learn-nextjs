import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  
  const loginHandler = () => {
    push("/product");
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={loginHandler}>Sign In</button>
      <p>
        Dont Have an Account? <Link href={`/auth/register`}>Sign Up Here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
