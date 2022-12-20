import React from "react";
import { useEffect } from "react";
import '../DisplayTable/displayTable.css'
import { useState } from "react";




const DispayTable = () => {
    var dataAPI = [];
    let jsonData = [];
    //var [js1, setjs1] = useState([]);
    let propertiesOfData = ['platform', 'lastTraded', 'buySellPrice', 'Difference', 'Savings'];
    var [json1, setjson1] = useState([]);
    var [json2, setjson2] = useState([]);
    var [json3, setjson3] = useState([]);
    var [json4, setjson4] = useState([]);
    var [json5, setjson5] = useState([]);
    var [color1, setColor1] = useState('#5dc7c2');
    var [color2, setColor2] = useState('#da5757');
    var [color3, setColor3] = useState('#5dc7c2');
    var [color4, setColor4] = useState('#da5757');
    var [color5, setColor5] = useState('#5dc7c2');
    var [sign1, setSign1] = useState(false);
    var [sign2, setSign2] = useState(false);
    var [sign3, setSign3] = useState(false);
    var [sign4, setSign4] = useState(false);
    var [sign5, setSign5] = useState(false);
    var [symbol1, setSymbol1] = useState(false);
    var [symbol2, setSymbol2] = useState(false);
    var [symbol3, setSymbol3] = useState(false);
    var [symbol4, setSymbol4] = useState(false);
    var [symbol5, setSymbol5] = useState(false);
    var [penalty2, setPenalty2] = useState(0);
    var [penalty3, setPenalty3] = useState(0);
    const calcDiff1 = () => {
        if (json1[3] < 0) {
            setColor1('#da5757');
            setSign1(true);
            setSymbol1(true);
        }
        else {
            setColor1('#5dc7c2');
            setSymbol1(false);
        }
        //return json1[3].toFixed(2);
    }
    const calcDiff2 = () => {
        if (json2[3] <= 0) {
            setColor2('#da5757');
            setSign2(true);
            setSymbol2(true);
        }
        else {
            setColor2('#5dc7c2');
            setSymbol2(false);
        }
        //return json1[3].toFixed(2);
    }
    const calcDiff3 = () => {
        if (json3[3] <= 0) {
            setColor3('#da5757');
            setSign3(true);
            setSymbol3(true);
        }
        else {
            setColor3('#5dc7c2');
            setSymbol3(false);
        }
        //return json1[3].toFixed(2);
    }
    const calcDiff4 = () => {
        if (json4[3] <= 0) {
            setColor4('#da5757');
            setSign4(true);
            setSymbol4(true);
        }
        else {
            setColor4('#5dc7c2');
            setSymbol4(false);
        }
        //return json1[3].toFixed(2);
    }
    const calcDiff5 = () => {
        if (json5[3] < 0) {
            setColor5('#da5757');
            setSign5(true);
            setSymbol5(true);
        }
        else {
            setColor5('#5dc7c2');
            setSymbol5(false);

        }
        //return json1[3].toFixed(2);
    }

    let [x, setX] = useState(0);
    useEffect(() => {
        async function fetchData() {
            console.log("haa bhaii aa gya yaha, radhe radhe!")
            await fetch(`http://localhost:9000/api`)
                .then((response) => response.json())
                .then((actualData) => { dataAPI = actualData; });
            console.log("madhav ", dataAPI[0]);
            jsonData = [];
            for (let i = 0; i < 5; i++) {
                let temp = [];
                for (let j = 0; j < 5; j++) {
                    temp.push(dataAPI[i][`${propertiesOfData[j]}`]);
                }
                jsonData.push(temp);
            }
            // setjs1(jsonData);
            setjson1(jsonData[0]);
            setjson2(jsonData[1]);
            setjson3(jsonData[2]);
            setjson4(jsonData[3]);
            setjson5(jsonData[4]);


        }
        fetchData();


    }, [])
    //console.log(json1);
    setInterval(() => {
        calcDiff1();
        calcDiff2();
        calcDiff3();
        calcDiff4();
        calcDiff5();
    }, 1000);

    return <>


        <div className='table2'><table clasName="table" >
            <thead>
                <tr>
                    <div className="rowhead">
                        <th scope="col">#</th>
                        <th scope="col">Platform</th>
                        <th scope="col">Last Traded prize</th>
                        <th scope="col">Buy / SellPrice</th>
                        <th scope="col">Difference</th>
                        <th scope="col">Savings</th>
                    </div>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <div className="r1">
                        <th scope="row">1</th>
                        <td> WazirX</td>
                        <td>₹{Math.round(json1[1])}</td>
                        <td>₹{json1[2]}</td>

                        <td className="r13" style={{ color: `${color1}` }}>{sign1 ? "-" : " "}{
                            Math.round(json1[3] * 100) / 100
                        }%</td>
                        <td className="r14" style={{ color: `${color1}` }}>{symbol1 ? "▼" : "▲"}₹{
                            Math.round(Math.round(json1[4] * 100) / 100) / 100
                        }</td>
                    </div>

                </tr>
                <tr>
                    <div className="r2">
                        <th scope="row">2</th>
                        <td > Bitbins</td>
                        <td className="r21">₹{json2[1]}</td>
                        <td className="r22">₹{json2[2]}</td>
                        {calcDiff2}
                        <td className="r23" style={{ color: `${color2}` }}>{sign2 ? "-" : " "}{
                            Math.round(json2[3] * 100) / 100
                        }%</td>
                        <td className="r24" style={{ color: `${color2}` }}>{symbol2 ? "▼" : "▲"}₹{
                            Math.round(json2[4] * 100) / 100
                        }</td>
                    </div>

                </tr>
                <tr>
                    <div className="r3">
                        <th scope="row">3</th>
                        <td >Colodox</td>
                        <td className="r31">₹{Math.round(json3[1])}</td>
                        <td className="r32">₹{json3[2]}</td>
                        {calcDiff3}
                        <td className="r33" style={{ color: `${color3}` }}>{sign3 ? "-" : " "}{
                            Math.round(json3[3] * 100) / 100
                        }%</td>
                        <td className="r34" style={{ color: `${color3}` }}>{symbol3 ? "▼" : "▲"}₹{
                            Math.round(json3[4] * 100) / 100
                        }</td>
                    </div>
                </tr>
                <tr>
                    <div className="r4">
                        <th scope="row">4</th>
                        <td >Zebpay</td>
                        <td className="r41">₹{Math.round(json4[1])}</td>
                        <td className="r42">₹{json4[2]}</td>
                        {calcDiff4}
                        <td className="r43" style={{ color: `${color4}` }}>-{
                            Math.round(json4[3] * 100) / 100 + 1
                        }%</td>
                        <td className="r44" style={{ color: `${color4}` }}>▼₹{
                            Math.round(json4[4] * 100) / 100 + 3
                        }</td>
                    </div>
                </tr>
                <tr>
                    <div className="r5">
                        <th scope="row">5</th>
                        <td >CoinDCX</td>
                        <td className="r51">₹{Math.round(json5[1])}</td>
                        <td className="r52">₹{json5[2]}</td>
                        {calcDiff5}
                        <td className="r53" style={{ color: `${color5}` }}>{sign5 ? "-" : " "}{
                            Math.round(json5[3] * 100) / 100
                        }%</td>
                        <td className="r54" style={{ color: `${color5}` }}>{symbol5 ? "▼" : "▲"}₹{
                            Math.round(json5[4] * 100) / 100
                        }</td>
                    </div>
                </tr>
            </tbody>
        </table></div>
    </>

}

export default DispayTable;