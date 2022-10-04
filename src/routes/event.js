import '../styles/event.css';
import birthdayCake from '../res/birthdayCake.png'
import EventBox from '../components/eventBox'
import EventBoxLoc from '../components/eventBoxLoc';


const Event = () => {
  return (
    <div className="App">
         <img className="w-full h-[50vh]" src={birthdayCake} alt=""/>
        <div className="App-content-event">
       
            <p className='text-3xl font-bold'>Birthday Bash</p>
            <p className='subHero-event'>Hosted by <span className='font-bold'>Elysia</span></p>
            <EventBox></EventBox>
            <br></br>
            <EventBoxLoc></EventBoxLoc>
        </div>
    </div>
  )
};

export default Event;