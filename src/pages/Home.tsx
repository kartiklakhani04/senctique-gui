import React from "react";
import {Link} from "react-router-dom";
import {TbTruckDelivery} from "react-icons/tb";
import {RiSecurePaymentFill} from "react-icons/ri";
import {BiSupport} from "react-icons/bi";
import {GrBackTen} from "react-icons/gr";
import styles from "../styles/Home.module.css";
import banner from "../assets/a.webp";
import sideImage from "../assets/sideImage.jpg";
import Bestsell from "../components/Bestsell.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <div className={styles.topcontainer}>
                <img src={banner} alt="Banner" className={styles.banner}/>
                <div className={styles.overlay1}></div>
                <h1 className={styles.heading}>Elevate Your Essence</h1>
                <p className={styles.desc}>
                    Discover a world of captivating fragrances designed to awaken your
                    senses and elevate your essence. Indulge in luxurious, long-lasting
                    scents that reflect your personality and leave a memorable impression.
                    Experience the perfect blend of elegance, sophistication, and timeless
                    allure.
                </p>
            </div>

            <div className={styles.horizontalContainer}>
                {[
                    {
                        title: "Men's Perfumes",
                        path: "/shop/men",
                        image:
                            "https://hips.hearstapps.com/hmg-prod/images/f094-sauvage-eau-forte-24-p06e-pack-ingredient-l4-f39-66bcb885a1660.jpg?crop=0.737xw:1.00xh;0.122xw,0&resize=1200:*",
                    },
                    {
                        title: "Women's Perfumes",
                        path: "/shop/women",
                        image:
                            "https://media.parfumo.com/perfume_imagery/95/958076-madame-cherie-caline_1200.jpg",
                    },
                    {
                        title: "Unisex Perfumes",
                        path: "/shop/unisex",
                        image:
                            "https://m.media-amazon.com/images/I/61oPlPaUzAL._AC_SL1350_.jpg",
                    },
                    {
                        title: "Luxury Perfumes",
                        path: "/shop/luxury",
                        image:
                            "https://sdcdn.io/tf/tf_sku_TCFC01_2000x2000_1.png?height=700px&width=700px",
                    },
                ].map(({title, path, image}, index) => (
                    <div key={index} className={styles.box}>
                        <Link to={path} className={styles.link}>
                            <div className={styles.imageContainer}>
                                <img src={image} alt={title} className={styles.image}/>
                                <div className={styles.overlay}></div>
                                <div className={styles.imageText}>{title}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <Bestsell/>
            <div className={styles.container}>
                <img
                    src={sideImage}
                    alt="Declaration by Cartier"
                    className={styles.sideImage}
                />
                <div className={styles.textContainer}>
                    <h3>Ignite your sense</h3>
                    <p className={styles.description}>
                        Declaration by Cartier is a refined fragrance, known for its
                        sophisticated blend of fresh citrus and warm spices. Its elegant
                        woody base offers a charismatic touch, symbolizing confidence and
                        individuality. Ideal for those who value timeless elegance,
                        Déclaration expresses personality effortlessly, making it the
                        perfect fragrance choice for individuals seeking distinction and
                        style in everyday moments.
                    </p>
                </div>
            </div>

            <div className={styles.featureContainer}>
                <div className={styles.featureBox}>
                    <div className={styles.iconContainer}>
                        <TbTruckDelivery size={40}/>
                    </div>
                    <div>
                        <p className={styles.mainText}>FREE SHIPPING</p>
                        <small>All orders over £150</small>
                    </div>
                </div>
                <div className={styles.featureBox}>
                    <div className={styles.iconContainer}>
                        <RiSecurePaymentFill size={40}/>
                    </div>
                    <div>
                        <p className={styles.mainText}>QUICK PAYMENT</p>
                        <small>100% secure payment</small>
                    </div>
                </div>
                <div className={styles.featureBox}>
                    <div className={styles.iconContainer}>
                        <GrBackTen size={40}/>
                    </div>
                    <div>
                        <p className={styles.mainText}>FREE RETURNS</p>
                        <small>Money back in 30 days</small>
                    </div>
                </div>
                <div className={styles.featureBox}>
                    <div className={styles.iconContainer}>
                        <BiSupport size={40}/>
                    </div>
                    <div>
                        <p className={styles.mainText}>24/7 SUPPORT</p>
                        <small>Get Quick Support</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
