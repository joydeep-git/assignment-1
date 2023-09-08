import React, { useState, useEffect } from 'react';

// DATA
import data from "../DATA/DATA.json";

// SCSS
import "../SCSS/WidgetOrderStats.scss";

// COMPONENT
import OrderStat from './OrderStat';

const WidgetOrderStats = () => {
    // STORING ORDER VALUES
    const [orderStats, setOrderStats] = useState(null);

    // STORING ORDER VALUES
    useEffect(() => {
        setOrderStats(data);
    }, []);

    return (
        <div className='WidgetOrderStats'>
            {
                orderStats !== null ?
                    Object.keys(orderStats).map((key, index) => (
                        <OrderStat
                            key={index}
                            statKey={key}
                            value={orderStats[key].value}
                            change={orderStats[key].change}
                            changeType={orderStats[key].changeType}
                        />
                    ))
                    : <p className='message'>... fetching data</p>
            }
        </div>
    )
}

export default WidgetOrderStats;