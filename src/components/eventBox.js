import { FaRegCalendarAlt } from 'react-icons/fa'
import './eventBox.css'
import stroke from '../res/stroke.svg'

function EventBox(props) {
    return (<>
        <div className="w-full flex flex-row flex-wrap">
        <span className='text-2xl icon'><FaRegCalendarAlt></FaRegCalendarAlt></span>
            <div className='iconText'>
                <p className='font-bold'>18 August 6:00PM</p>
                <div style={{flexBasis: "100%"}}></div> 
                <p className='eventSubtitle'>to <span className='font-bold'>19 August 1:00PM</span> UTC +10</p>
            </div>
            <img className='stroke' src={stroke} alt=""/>
        </div>
    </>);
}

export default EventBox