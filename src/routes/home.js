import '../styles/home.css';
import landingImage from '../res/landingImage.svg'


const Home = () => {
  return (
    <div className="App">
        <div className="appContent">
        <p className="font-bold text-4xl w-3/4 hero">
          Imagine if <span className="special">Snapchat</span> <br /> had events
        </p>
        <p className="font-light text-base subHero">
        Easily host and share events with your friends across any social media.
        </p>
        <img className="w-2/4" src={landingImage} alt=""/>
        <a href="/create" className="home-button w-3/5 font-bold text-base">🎉 Create my event</a>
    </div>
    </div>
  )
};

export default Home;