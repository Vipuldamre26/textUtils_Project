import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useRef, useEffect, useState } from 'react';

const Navbar = () => {


    let button = useRef();
    let circle = useRef();


    // useEffect(() => {
        
    //     if (circle.current) {
    //         circle.current.style.backgroundColor = "white";
    //         console.log(circle.current.innerText);
    //     }
    //     if (button.current) {
    //         button.current.style.backgroundColor = "black";
    //     }
    // }, []);


    // let toggle = false;

    const changeMode = () => {
        if (!toggle) {
            circle.current.classList.add("dark-mode");
            circle.current.style.backgroundColor = "black";
            button.current.style.backgroundColor = "white";

            toggle = true;
        }
        else {
            circle.current.classList.remove("dark-mode");
            circle.current.style.backgroundColor = "white";
            button.current.style.backgroundColor = "black";
            toggle = false;
        }

    }




    return (
        <div className='navbar'>
            <div className='nav-left'>
                <h2>TextUtils</h2>
                <ul>
                    <li>
                        <NavLink className='link' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to='/about'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* <div className='nav-right'>
                <div onClick={changeMode} ref={button} className="btn">
                    <div ref={circle} className="circle"></div>
                </div>
                <p>Enable dark Mode</p>
            </div> */}
        </div>
    )
}

export default Navbar;