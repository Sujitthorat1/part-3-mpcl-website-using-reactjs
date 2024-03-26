import React from "react";
import styles from './SubBanner.module.css';

const SubBanner = ({ heading, subHeading, img }) => {

    return (
        <>
            <div className={`${styles.imgbox} overflow-hidden`} style={{ backgroundImage: `url(${img})` }}>
                <div className={styles.center}>
                    <p data-aos='fade-up' className={styles.head}>{heading}</p>
                    <p data-aos='fade-up' className={styles.subHead}>{subHeading}</p>
                </div>
            </div>

        </>
    );
};

export default SubBanner;
