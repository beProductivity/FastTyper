import '../Technicbanner/technicbanner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faFire, faNewspaper, faHatWizard } from '@fortawesome/free-solid-svg-icons';
export default function Technicbanner()
{
    return(
    <div className="tech-banner">
        <div className='btn'><FontAwesomeIcon icon={faFire}/> &nbsp; Change mode</div>
        <div className='btn'><FontAwesomeIcon icon={faGear}/> &nbsp; Theme & settings</div>
        <div className='btn'><FontAwesomeIcon icon={faHatWizard}/> &nbsp; Daily challenge</div>
        <div className='btn'><FontAwesomeIcon icon={faNewspaper}/> &nbsp; News</div>
    </div>)
}


/* 
Change mode
Settings
News
Daily challenge */