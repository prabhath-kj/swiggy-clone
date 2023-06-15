"use client"


const Tittle = () => (
  //   <Link className="Link" to="/">
  <h1 id="tittle" key="h1" className="font-extrabold text-4xl text-amber-300">
    FOODII
  </h1>
  //   </Link>
);

const Navbar = () => {
  return (
    <div className="flex justify-around py-5 bg-transparent border-s-violet-800 shadow-lg">
      <Tittle />
      <div className="">
        <ul className="flex space-x-4">
          {/* <Link className="Link" to="/"> */}
          <li>Login</li>
          {/* </Link> */}
          {/* <Link className="Link" to="/"> */}
          <li>Home</li>
          {/* </Link> */}
          {/* <Link className="Link" to="/about"> */}
          <li>About</li>
          {/* </Link> */}
          {/* <Link className="Link" to="/"> */}
          <li>Cart</li>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
