import { NavLink } from "react-router-dom";
import '../custome.css';

const Header = () => {
  return (
    <div className=' w-[100vw] max-w-[1450px]  flex justify-center  fixed  mt-6 uppercase z-50 '>
      <div className=' h-20 p-4 w-[90%] flex items-center justify-between rounded-full shadow-2xl backdrop-blur-3xl'>
        <div className=' w-16'>
          <NavLink to={'/'}>
            <img
              src="https://udemygo.com/wp-content/uploads/2025/03/UDEMYGO-e1742794575684.png"
              alt="logo"
              className='cursor-pointer'
            />
          </NavLink>
        </div>
        <div>
          <ul className='hidden lg:flex items-center space-x-1 bg-gray-200 py-3 px-2 rounded-full text-lg font-semibold'>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-full transition-all ${
                    isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white cursor-pointer'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/about'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-full transition-all ${
                    isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white cursor-pointer'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/corporatepartnership'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-full transition-all ${
                    isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white cursor-pointer'
                  }`
                }
              >
                Corporate Partnership
              </NavLink>
            </li>
            <li>
            <li>
  <select
    name="explore universities"
    className="cursor-pointer bg-gray-200 rounded-full px-3 py-1 hover:bg-black hover:text-white transition-all"
    onChange={(e) => {
      if (e.target.value) window.location.href = e.target.value;
    }}
  >
    <option value="/UniversityCatalog">University Catalog</option>
    <option value="/CourseCatalog">Course Catalog</option>
  </select>
</li>

            </li>
            <li>
              <NavLink
                to={'/contact'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-full transition-all ${
                    isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white cursor-pointer'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='relative  cursor-pointer flex justify-center items-center'>
          <div className="custome-bg"></div>
          <button className="bg-black text-white text-sm rounded-full px-4 py-3 hover:bg-gray-800 transition-all">
            WhatsApp Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
