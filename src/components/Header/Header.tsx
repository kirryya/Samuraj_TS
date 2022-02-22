import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/%D0%9B%D0%95%D0%9D%D0%A2%D0%90_%D0%BB%D0%BE%D0%B3%D0%BE.jpg"
                 alt="Logo"/>
        </header>
    );
};

export default Header;