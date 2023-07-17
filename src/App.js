import './App.css';
import Navbar from './Components/Navbar';
import Prenavbar from './Components/Prenavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Slider from './Components/Slider';
import Data from './data/data.json'
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import Starproducts from './Components/Starproducts';
import HotaccessoriesMenus from './Components/HotaccessoriesMenus';
import Hotaccessories from './Components/Hotaccessories';
import ProductReviews from './Components/ProductReviews';
import Videos from './Components/Videos';
import Footer from './Components/Footer';
import Navoptions from './Components/Navoptions';



function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Navoptions miPhones={Data.miPhones} redmiPhones={Data.redmiPhones} tv={Data.tv} laptop={Data.laptop} fitnessAndLifeStyle={Data.fitnessAndLifeStyle} home={Data.home} accessories={Data.accessories} audio={Data.audio} />
      <Slider start={Data.banner.start} />
      <Offers offer={Data.offer} />
      <Heading text="STAR PTODUCTS" />
      <Starproducts starproducts={Data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotaccessoriesMenus />

      <Route exact path="/music">
        <Hotaccessories music={Data.hotAccessories.music} musicCover={Data.hotAccessoriesCover.music} />
      </Route>

      <Route exact path="/smartDevices">
        <Hotaccessories smartDevices={Data.hotAccessories.smartDevice} SmartDeviceCover={Data.hotAccessoriesCover.smartDevice} />
      </Route>

      <Route exact path="/home">
        <Hotaccessories home={Data.hotAccessories.home} homeCover={Data.hotAccessoriesCover.home} />
      </Route>

      <Route exact path="/lifestyle">
        <Hotaccessories lifestyle={Data.hotAccessories.lifeStyle} lifestyleCover={Data.hotAccessoriesCover.lifeStyle} />
      </Route>

      <Route exact path="/mobileAccessories">
        <Hotaccessories mobileAccessories={Data.hotAccessories.mobileAccessories} mobileAccessoriesCover={Data.hotAccessoriesCover.mobileAccessories} />
      </Route>

      <Heading text="PRODUCT REVIEWS" />

      <ProductReviews ProductReviews={Data.productReviews} />

      <Heading text="VIDEOS" />

      <Videos videos={Data.videos} />

      <Footer footer={Data.footer} />














    </Router>
  );
}

export default App;
