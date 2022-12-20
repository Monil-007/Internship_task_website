const express = require('express');
const fetch = require('node-fetch');
const Crypt = require('../Models/schemas.js');



const APIHandler = async (req, res) => {
    const data = await fetch('https://api.wazirx.com/api/v2/tickers');
    const jsonData = await data.json();
    // const strData = jsonData.stringify();
    //console.log(jsonData.btcinr);
    // for (let i = 0; i < 3; i++) {
    //     console.log(jsonData[i]);
    // }
    const platforms = [];
    const lasttraded = [];
    const bsprice = [];
    const difference = [];
    const savings = [];
    Object.keys(jsonData).forEach(key => {
        platforms.push(key);
        lasttraded.push(jsonData[key].last);
        const buyPrice = Math.round(jsonData[key].buy);
        const sellPrice = Math.round(jsonData[key].sell);
        bsprice.push(`${buyPrice} / ₹${sellPrice}`);
        const diff = Math.round(sellPrice - buyPrice) * 100;
        const diffPerct = 100 - (buyPrice * 100 / sellPrice);
        difference.push(diffPerct);
        savings.push(diff);
    })
    const finalData = []
    for (let i = 0; i < 5; i++) {
        //console.log(`${platforms[i]} - ${lasttraded[i]} - ${bsprice[i]} - ${difference[i]} - ${savings[i]}]`);
        // console.log("inside loop")
        latestCryptoStats = await Crypt.create({
            'platform': platforms[i],
            'lastTraded': lasttraded[i],
            'buySellPrice': bsprice[i],
            'Difference': difference[i],
            'Savings': savings[i]
        })
        finalData[i] = {
            'platform': platforms[i],
            'lastTraded': lasttraded[i],
            'buySellPrice': bsprice[i],
            'Difference': difference[i],
            'Savings': savings[i]
        }
    }

    //SAVING THE GIVEN FIELDS IN DATABASE:
    latestCryptoStats.save((err) => { if (err) { console.log("schema error occurred!!") } });


    res.send(finalData);
}

module.exports = { APIHandler };