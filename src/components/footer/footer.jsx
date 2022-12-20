import React from 'react'
import '../footer/footer.css';

const Footer = () => {
    return (
        <div>
            <hr></hr>
            <div className="lastline">
                <div className="copyright">
                    <p>copyright@Monil_Gandhi</p>
                    <p>Hodlinfo.com</p>
                </div>
                <a href="mailto: gandhi.monil288@gmail.com" className='support'>Support</a>
            </div>
            <br></br>

            <button className='install' >Add Hodlinfo to home screen</button>
        </div>
    )
}

export default Footer;
