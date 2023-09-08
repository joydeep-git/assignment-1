import React from 'react';

// SCSS
import "../SCSS/OrderStat.scss";

// REACT-ICONS
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";

const OrderStat = ({ statKey, value, change, changeType }) => {
    return (
        <div className='OrderStat'>

            <div className='top-part'>

                <div>
                    <h3>{statKey}</h3>
                </div>

                <div className={` ${changeType === "inc" ? "green" : "red"}`}>
                    {
                        changeType === "inc" ? <BsArrowUpShort /> : <BsArrowDownShort />
                    }
                    <p>{change}</p>
                </div>
            </div>

            <div className='bottom-part'>
                
                {statKey === "Revenue" ? <FiArrowUpRight className='revenue logo' /> : null}
                {statKey === "Orders" ? <FaShoppingCart className='orders logo' /> : null}
                {statKey === "Dine in" ? <GiKnifeFork className='dinein logo' /> : null}
                {statKey === "Take away" ? <SiBuymeacoffee className='takeaway logo' /> : null}

                <p>{value}</p>
            </div>

        </div>
    )
}

export default OrderStat;