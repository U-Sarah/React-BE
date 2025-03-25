
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate()
  const menuItems = [
    { icon: "/dashboard.png", text: "Dashboard" },
    { icon: "/compass.png", text: "Catalog" },
    { icon: "/book.png", text: "Books" },
    { icon: "/users.png", text: "Users" },
    { icon: "/branches.png", text: "Branches" },
  ];
  return (
    <div className="bg-black h-fit min-h-screen w-[222px] max-xl:hidden">
      <div className="flex flex-col items-center justify-center pt-6">
        <img src="/whitelogo.png" alt="" />
        <h1 className="text-white text-3xl font-normal">BookWorm</h1>
        <p className="text-white">LIBRARY</p>
      </div>
      <div className=" pt-4 p-6 ">
        {menuItems.map((item, index) => (
          <div key={index} className="flex gap-5 hover:text-black p-3">
            <img src={item.icon} alt="" />
            <p className="text-white"> {item.text}</p>
          </div>
        ))}
        
          <button className="flex gap-5 p-3 mt-28" onClick={() => navigate("/signup")}>
            <img src="/logout.png" alt="" />
            <span className="text-white">Log Out</span>
          </button>
        
      </div>
    </div>
  );
};

export default SideBar;
