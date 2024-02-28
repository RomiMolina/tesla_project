import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import ModelY from './assets/modelY.png'
import ModelX from './assets/Homepage-Model-X-Desktop-LHD.png'
import Model3 from './assets/model3.png'
import ModelS from './assets/ModelS.png'
import ModelCyber from './assets/modelCyber.png'
import HousePanel from './assets/housePanel.png'
import RoofPanel from './assets/solarRoof.png'
import Powerwall from './assets/powerwall.png'
import Acc from './assets/acc.png'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__itemsContainer'>
        <Item 
        title='Model Y'
        desc='From $31,890*'
        descLink=''
        backgroundImg={ModelY}
        leftBtnText='Shop Available'
        leftBtnLink=''
        rightBtnText='Demo Drive'
        rightBtnLink=''
        twoButtons='true'
        first
        />
       
          <Item 
        title='Model 3'
        desc='Lease starting at $329/mo*'
        descLink=''
        backgroundImg={Model3}
        leftBtnText='Custom Order'
        leftBtnLink=''
        rightBtnText='Demo Drive'
        rightBtnLink=''
        twoButtons='true'
        />
          <Item 
        title='Model X'
        desc='From $68,590*'
        descLink=''
        backgroundImg={ModelX}
        leftBtnText='Shop Available'
        leftBtnLink=''
        rightBtnText='Demo Drive'
        rightBtnLink=''
        twoButtons='true'
    
        />
         <Item 
        title='Model S'
        desc='From $71,090*'
        descLink=''
        backgroundImg={ModelS}
        leftBtnText='Custom Order'
        leftBtnLink=''
        rightBtnText='Demo Drive'
        rightBtnLink=''
        twoButtons='true'
        />
         <Item 
        title=''
        desc=''
        descLink=''
        backgroundImg={ModelCyber}
        leftBtnText='Order Now'
        leftBtnLink=''
        rightBtnText='Learn More'
        rightBtnLink=''
        twoButtons='true'
        />
   
      <Item 
        title='Solar Panels'
        desc='Schedule a Virtual Consultation'
        descLink=''
        backgroundImg={HousePanel}
        leftBtnText='Order Now'
        leftBtnLink=''
        rightBtnText='Learn More'
        rightBtnLink=''
        twoButtons='true'
        />
    <Item 
        title='Solar Roof'
        desc='Produce Clean Energy From Your Roof'
        descLink=''
        backgroundImg={RoofPanel}
        leftBtnText='Order Now'
        leftBtnLink=''
        rightBtnText='Learn More'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item 
        title='Powerwall'
        desc=''
        descLink=''
        backgroundImg={Powerwall}
        leftBtnText='Order Now'
        leftBtnLink=''
        rightBtnText='Learn More'
        rightBtnLink=''
        twoButtons='true'
        />
 <Item 
        title='Accessories'
        desc=''
        descLink=''
        backgroundImg={Acc}
        leftBtnText='Shop Now'
        leftBtnLink=''
        rightBtnText='Learn More'
        rightBtnLink=''
        twoButtons='false'
        />
    </div>
    </div>
  );
}

export default App;
