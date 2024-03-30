import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 shadow">
      <img src={logo} alt="entri logo" className="w-[100px]" />
      <h1>User details</h1>
    </div>
  );
};

export default Navbar;
