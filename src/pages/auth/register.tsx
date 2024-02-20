import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ResgisterPage = () => {
  const { push } = useRouter();

  const registerHandler = () => {
    push("/auth/login");
  };
  return (
    <div>
      <h1>Sign Up Page</h1>
      <button onClick={registerHandler}>Sign Up</button>
      <p>
        Have an Account? <Link href={`/auth/login`}>Sign In Here</Link>
      </p>
    </div>
  );
};

export default ResgisterPage;
