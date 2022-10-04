import '../styles/create.css';


const Create = () => {
  return (
    <div className="App">
        <div className="App-content">
        <p className="font-bold text-2xl w-3/4 hero">
        🎉 You are <span className="special">moments</span> <br /> away from creating your awesome event! 🎉
        </p>
        <p className="font-light text-base subHero">
        Fill out the details below and we'll take care of the rest!
        </p>
        <form className="w-5/6 form">
            <input className='w-2/5' id='fName' placeholder='Your first name'></input>
            <input className='w-2/5' id='lName' placeholder='Your last name'></input>
            <input className='w-3/5' placeholder='Event title'></input>
            <input className='w-5/6' placeholder='Event address'></input>
            {/* for example only, i know the product is more involved than just this as guest input */}
            <textarea itemType='text' className='w-full' placeholder="a comma seperated list of your event guest's phone numbers"></textarea>
        </form>
        <a href="/event" className="button w-3/5 font-bold text-base">🚀 Send the invitations! 🚀</a>
    </div>
    </div>
  )
};

export default Create;