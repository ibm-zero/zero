import 'leaflet/dist/leaflet.css';
import { Icon, InlineIcon } from '@iconify/react';
import { useHistory } from 'react-router-dom';

import clockIcon from '@iconify/icons-mdi-light/clock'
import arrowLeftCircle from '../assets/images/back-btn.png';

export function Profile() {
    const history = useHistory();
    function handleBack() {
        history.push('/home');
      }
    return (
        <div className='container'>
            <h1> <Icon icon={clockIcon}/> under construction</h1>
            <button className='back-btn' onClick={handleBack}>
                <img src={arrowLeftCircle} alt='back' />
            </button>
        </div>
    );
}