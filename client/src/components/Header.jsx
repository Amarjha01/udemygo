import React from 'react'

const Header = () => {
  return (
    <div className='w-full '>
      <div className=' bg-white h-20  flex justify-around items-center  rounded-full  '>
        <div>
          <img src="" alt="logo" />
        </div>
        <div>
          <ul className=' flex space-x-8  bg-gray-200 py-3 px-6 rounded-full'>
            <li>Home</li>
            <li>About</li>
            <li>corporate partnership</li>
            <select name="explore universities" id="">explore universities
              <option value="university Catalog">university Catalog</option>
              <option value="Course Catalog">Course Catalog</option>
            </select>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button>WhatsApp Us</button>
        </div>
      </div>
    </div>
  )
}

export default Header