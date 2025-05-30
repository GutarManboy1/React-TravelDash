import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { Link } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";
import { redirect } from "react-router";

export async function clientLoader() {
  try {
    const user = await account.get();
    if (!user.$id) return redirect("/");
  } catch (error) {
    console.error("Error getting user:", error);
  }
}
const signIn = () => {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/">
              <img
                src="/assets/icons/logo.svg"
                alt="logo"
                className="size-[30px]"
              />
            </Link>
            <h1 className="text-dark-100 p-28-bold">Trip Planner+</h1>
          </header>

          <article>
            <h2 className="text-center p-28-semibold text-dark-100">
              Start Planning your Next Trip
            </h2>
            <p className="text-gray-100 p-18-regular text-center !leading-7">
              Sign in with Google to Get Started or Continue Your Trip
            </p>
          </article>

          <ButtonComponent
            className="button-class !h-11 !w-full"
            iconCss="e-search-icon"
            type="button"
            onClick={loginWithGoogle}
          >
            <img
              src="/assets/icons/google.svg"
              alt="google"
              className=" size-5"
            />
            <span className="p-18-semibold text-white">
              Sign in with Google
            </span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default signIn;
