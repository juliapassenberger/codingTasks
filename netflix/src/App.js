import Header from './components/header'
import Nav from './components/navigation';
import DynamicSlider from './components/sliders.js';
import Footer from './components/footer';
import allSliderRows from "./sliderData";


function App(props) {
  return (
    <div className="App">

      <Nav></Nav>
      {/* Passing user object to header component */}
      <Header user={props.user} />
      {/* Passing in data as prop to be displayed in the carousels */}
      <DynamicSlider sliderRows={allSliderRows}></DynamicSlider>
      <Footer></Footer>

    </div>
  );
}

export default App;
