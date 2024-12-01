import { useContext } from 'react';
import './Header.css';
import { ThemeContext } from '../../ThemeContext';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { TbMessages } from 'react-icons/tb';
import { IoAnalytics } from 'react-icons/io5';
import { HiOutlineLogout, HiOutlineMoon } from 'react-icons/hi';
import { RiSettingsLine } from 'react-icons/ri';

const Header = () => {
  const{DarkTheme, setDarkTheme} = useContext(ThemeContext)

  function changeTheme (){
    setDarkTheme(!DarkTheme);
  }
  return (
    <header className={`${DarkTheme && "dark" }`}>
      <div className="search-bar">
        <input type="text" placeholder="search..."/>
        <BiSearch className="icon"/>
      </div>

      <div className="tools">
        <AiOutlineUser className="icon"/>
        <TbMessages className="icon"/>
        <IoAnalytics className="icon"/>

        <div className="divider"></div>
          <HiOutlineMoon  className="icon" onClick={changeTheme}/>
          <RiSettingsLine className="icon" />
          <HiOutlineLogout className="icon" />
          <div className="divider"></div>

        <div className="user">
          <img src="https://images.unsplash.com/photo-1479048266730-bbbfa1c246ac?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=formatfit=crop&w=387&q-80"
          alt="" className="profile-img" />
        </div>
      </div>

    </header>
  )
}

export default Header