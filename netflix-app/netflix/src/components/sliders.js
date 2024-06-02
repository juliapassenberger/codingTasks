// Component for dynamic sliders

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './sliders.css';


// Definition of the break points for the carousel slider (required for imported component)
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    desktopFull: {
        breakpoint: { max: 1110, min: 464 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 797, min: 0 },
        items: 3
    }
};


// Component to display slider carousels
function DynamicSlider({ sliderRows }) {

    return (

        <div className="dynamic-slider">

            {/* Iterate through the passed slider data array that holds objects containing the title and image links for the individual items for the carousel */}
            {sliderRows.map((row, id) => (
                // Return the container that holds the individual carousels on the page
                <div className="parent">
                    <h2 id={sliderRows.id}>{row.title}</h2>

                    {/* Imported carousel component with different settings */}
                    <Carousel
                        className='car'
                        responsive={responsive}
                        infinite={true}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        renderButtonGroupOutside={true}
                    >


                        {/* Iterate through the image links inside the slider data array for each carousel */}
                        {row.slides.map((picURL, picIndex) => (
                            // Display the images as elements in the carousel
                            <div className="sliderItem">
                                <img alt={row.title} src={picURL}></img>
                            </div>

                        ))}

                    </Carousel>

                </div>
            )
            )
            }
        </div >
    )
}

export default DynamicSlider;


