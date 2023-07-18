const Home = () => {
  
    return (
     
        <div className='home-wrapper'>
          <h2>About this app</h2>
          <p className="home-info">This app was created as a home for all of the mini React projects and apps I made whilst completing Days 01 - 18 of the 30 Days of React Challenge.</p>
          <p className="home-info">This challenge was created by the user Asabeneh and the repo can be found here: <a href="https://github.com/Asabeneh/30-Days-Of-React"> Original 30 Days of React Repo</a></p>
          <p className="home-info">If you are interested in viewing my work for each separate day of the challenge, you can find my repo here: <a href="https://github.com/be-part/30-Days-Of-React/tree/main/_solutions"> My 30 Days of React Challenge Repo</a></p>
          
          <button className="overlay-open-btn">More Info❔</button>
          <p className="home-info"> If you want more information about each individual app, click this button on the top of each page to find out about why I made that mini app, how it relates to the challenge and what skills I developed when making it.</p>
          
          <p className="home-info">I have found the React challenge an excellent way to consolidate my React skills, develop my terminology understanding and practise problem-solving.</p>
          <p className="home-info">Thank you so much for visiting!</p>
        </div>
    
    );
  };
  
  export default Home;