import React from 'react';
import loader from "../../../assets/images/loader.svg";
import style from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={style.main}>
            <img src={loader} alt="Loading..."/>
        </div>
    );
};

export default Preloader;