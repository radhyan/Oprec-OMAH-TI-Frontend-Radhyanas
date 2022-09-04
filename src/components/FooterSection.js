import React from 'react'
import Link from './Link'

import './FooterSection.css'

function FooterSection(props) {
    return (
        <div className='footerContainer'>
            <div className='footer1'>
                <h2 className='footerTitle header'>
                    {props.section1}
                </h2>
                <Link 
                link='About'
                />
                <Link 
                link='Contact'
                />
                <Link 
                link='Enrollment'
                />
                <Link 
                link='Cookie Policy'
                />
                <Link 
                link='Terms andConditions'
                />
                <Link 
                link='Privacy Policy'
                />
            </div>
            <div className='footer2'>
                <h2 className='footerTitle header'>
                    {props.section2}
                </h2>
                <Link 
                link='Facebook'
                />
                <Link 
                link='Instagram'
                />
                <Link 
                link='Twitter'
                />
            </div>
            <div className='verticalLine' />
            <div className='subscription'>
            <h3 className='sub-heading'>
            Subscribe to Gadjah Mada University’s 
            <br />digital newsletter for your daily digest 
            <br />of essential news, directly to your inbox.
            </h3>
            <button className='subscribe'>
                SUBSCRIBE
            </button>
            </div>
            <div className='verticalLine' />
            <div className='information'>
                <h3 className='sub-heading'>
                Gadjah Mada University’s content platforms can help 
                <br />you reach an informed cultural and
                <br />creative professionals. 
                <br />
                <br />For more information, contact: <br />
                <span className='email'>
                    placeholder@mail.ugm.ac.id
                </span>
                </h3>
            </div>
        </div>
    )
}

export default FooterSection