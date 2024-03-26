// Import necessary dependencies and styles
import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery-core.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import './galleryComponent.scss'
import { Link } from 'react-router-dom';
// Import your images
const imageUrls = [
    {
        src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-06.jpg', alt: 'Meeting with NVIDIA team'
    },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-07.jpg', alt: "" },
    { scr: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-08.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-09.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-16.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-17.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-01.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-02.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-03.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-04.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-05.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-10.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-11.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-12.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-13.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-14.jpg', alt: "" },
    { src: 'https://www.mpcl.in/wp-content/uploads/2020/05/gallery-img-15.jpg', alt: "" },

    // Add more image URLs as needed
];

// Create a functional component
const GalleryComponents = () => {
    return (
        <div className='mainGallerySection '>
 
            <div className='galleryContainer '>
                {/* Use LightGallery component */}
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                    {/* Map through the image URLs and render them in one column */}
                    {imageUrls.map((image, index) => {
                        return (
                            <a href={image.src} key={index}>
                                <img alt={image.alt} src={image.src} />
                            </a>
                        )
                    })}
                </LightGallery>
            </div>
        </div>
    );
};

export default GalleryComponents;


/*import WSPGallery from './Gallery';
import './galleryComponent.scss'

const GalleryComponents = () => {

    const galleryImages = [
        {
            img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },


    ]

    return (
        <div className="component">
            <br />
            <div>
                <strong>Responsive Photo Gallery (No External Library) in React JS</strong>
            </div>
            <br /><br />

            <WSPGallery
                galleryImages={galleryImages}
            />

            <br /><br />
            <div>- WebStylePress -</div>
        </div>
    );
}

export default GalleryComponents;
*/
