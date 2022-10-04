import { GoLocation } from 'react-icons/go'
import './eventBox.css'
import stroke from '../res/stroke.svg'


function EventBoxLoc(props) {
    return (<>
        <div className="w-full flex flex-row flex-wrap">
        <span className='text-2xl icon'><GoLocation></GoLocation></span>
            <div className='iconText'>
                <p className='font-bold'>Street Name</p>
                <div style={{flexBasis: "100%"}}></div> 
                <p className='eventSubtitle'>Suburb, State, Postcode</p>
            </div>
            <img className='stroke' src={stroke} alt=""/>
        </div>
    </>);
}

export default EventBoxLoc