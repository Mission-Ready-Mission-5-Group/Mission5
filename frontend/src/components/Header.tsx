const Header = () => {
  return (
    <header className="p-2 lg:p-4 bg-white text-black">
      <div className="navbar navbar-brand">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white"
            >
              <li>
                <a>Landlords</a>
              </li>
              <li>
                <a>Tenants</a>
              </li>
              <li>
                <a>Sales</a>
              </li>
              <li>
                <a>About us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              src="https://metronz.co.nz/wp-content/uploads/2023/09/logo-600x6000-1.svg"
              width={180}
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Landlords</a>
            </li>
            <li>
              <a>Tenants</a>
            </li>
            <li>
              <a>Sales</a>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-sm">
          <a>Log in</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
