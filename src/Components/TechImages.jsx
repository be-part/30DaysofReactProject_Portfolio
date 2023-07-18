const TechImages = () => {

  const images = [require("../assets/images/html_logo.png"), require("../assets/images/css_logo.png"), require("../assets/images/react_logo.png")];
  
  const techsImages = images.map((image) => (
    <li className='images' key={image}>
      <img src={image} alt="" />
    </li>
  ));

  return (
    <div >
      <p className='text'><span className='bold'>Front End Technologies</span></p>
      <ul className='images-list'>{techsImages}</ul>
    </div>
  );
};

export default TechImages;
