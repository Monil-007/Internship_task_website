import React from 'react'
import '../MajorInfo/MajorInfo.css'

const MajorInfo = () => {
    return (
        <>
            <div className="major1">
                <div className="mins">
                    <div className="minperct">0.48%</div>
                    <div className="mintime">5 min</div>
                </div>
                <div className="hour">
                    <div className="hourperct">1.6%</div>
                    <div className="hourtime">1 Hr</div>
                </div>
                <div className="central">
                    <div className="quote">Best Price to Trade</div>
                    <div className="bestprice">₹ 14,88,564</div>
                    <div className="avgprice">Average BTC/INR net price including commission</div>
                </div>
                <div className="day">
                    <div className="dayperct">8.12%</div>
                    <div className="daytime">1 Day</div>
                </div>
                <div className="days">
                    <div className="daysperct">19.12%</div>
                    <div className="daystime">7 Days</div>
                </div>
            </div>
        </>
    )
}

export default MajorInfo;
