import React from 'react'

const Header = () => {
  return (
    <div className=''>
      <div>
        <div>
          <img src="" alt="logo" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>corporate partnership</li>
            <select name="explore universities" id="">
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