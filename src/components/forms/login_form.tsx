import { useEffect } from "react";
import { loginUserWithEmailAndPassword, auth } from "../../firebase";
import { SubmitButton } from "../submission_button";
import { CupertinoTextField } from "../contact/CupertinoTextField";
import { useNavigate } from "react-router-dom";

export function LoginForm({ onLogin }: { onLogin: () => void }) {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const t = event.target as any;

        const email = t.email.value;
        const password = t.password.value;

        if (email == undefined || password == undefined) {
          return alert("Please enter your email and password");
        }

        const didLogIn = await loginUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (didLogIn != null) {
          await auth.updateCurrentUser(didLogIn?.user);
          onLogin();
        } else {
          alert("Email or password you entered are invalid!");
        }
      }}
    >
      <div className="sm:flex-row flex gap-4 max-w-lg flex-col">
        <CupertinoTextField
          label={"Email Address"}
          idName={"email"}
          required={true}
          type="email"
        ></CupertinoTextField>
        <CupertinoTextField
          label={"Password"}
          idName={"password"}
          required={true}
          type="password"
        ></CupertinoTextField>
      </div>

      <div className="h-4 md:h-8"></div>

      <SubmitButton onClick={() => {}} label="Login"></SubmitButton>
    </form>
  );
}
