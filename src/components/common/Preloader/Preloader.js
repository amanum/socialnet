import React from "react";
import preloader from "../../../img/Ripple-1s-200px.svg";
import styles from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={styles.preloaderWrapper}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader