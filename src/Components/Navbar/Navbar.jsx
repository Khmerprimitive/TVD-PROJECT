import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo1.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

//for Navbar transform
const Navbar = () => {
    const [sticky, setSticky]= useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ?setSticky(true) : setSticky(false);
        })
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=> {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img  src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>ទំព័រដើម</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>កម្មវិធីជោគជ័យ</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>ទំនាក់ទំនង</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>វគ្គជោគជ័យ</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>សម្ដីជនបរាជ័យ</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>ប្រាស្រ័យទាក់ទង</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar