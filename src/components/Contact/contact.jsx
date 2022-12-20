import React from 'react'
import '../Contact/contact.css'
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    //console.log("aa gaya contact me, radhe govind");
    const navigate = useNavigate();
    return (
        <div className='contactpage'>
            <div className="navp1">
                <h3 onClick={() => { navigate('/'); }} className="sitename">HODLINFO</h3>
            </div>
            <div className="content">
                <h2>Connect to Telegram</h2>
                <h4>Add bot to your group</h4>
                <p>Manual:</p>
                <p>1.open the telegram app.</p>
                <p>2.open the group you want to add the bot to.</p>
                <p>3.Click on add members in group settings.</p>
                <p>4.Search @HodlInfoBot and click it.</p>
                <p className='linkp1'>Go to: <a href='https://t.me/HodlInfoBot?startgroup=true'>https://t.me/HodlInfoBot?startgroup=true</a></p>
                <h4>Chat with the bot</h4>
                <p>Manual:</p>
                <p>1.open the telegram app.</p>
                <p>2.Click on new message button.</p>
                <p>3.Click on add members in group settings.</p>
                <p>4.Search @HodlInfoBot and click it.</p>
                <p className='linkp2'>Go to: <a href="https://t.me/HodlInfoBot">https://t.me/HodlInfoBot</a></p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
