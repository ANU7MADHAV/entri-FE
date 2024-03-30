import Navbar from "../components/Navbar";
import Signin from "../components/Signin";

const SigninPage = () => {
  return (
    <div className="h-screen w-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="mb-5 flex h-full w-full items-center justify-center">
        <Signin />
      </main>
    </div>
  );
};

export default SigninPage;
