import React from 'react'
import './Appdownload.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Appdownload = () => {
  return (
    <div className='download'>
        <p>For Better Experience Download Our App <br /> GroceryStore</p>
        <div className="download-platform">
         <FontAwesomeIcon className='icon' icon={faGooglePlay} />
         <FontAwesomeIcon className='icon' icon={faApple} />
        </div>
    </div>
  )
}

export default Appdownload