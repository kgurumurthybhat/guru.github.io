import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
class PictureFlow extends React.Component {

  render() {

    const images = [
      {
        original: 'images/sports/img1.jpg',
        thumbnail: 'images/sports/img1.jpg',

      },
      {
        original: 'images/sports/img2.jpg',
        thumbnail: 'images/sports/img2.jpg',

      },
      {
        original: 'images/sports/img3.jpg',
        thumbnail: 'images/sports/img3.jpg',

      },
      {
        original: 'images/sports/img4.jpg',
        thumbnail: 'images/sports/img4.jpg',

      },
      {
        original: 'images/sports/img5.jpg',
        thumbnail: 'images/sports/img5.jpg',

      },
      {
        original: 'images/sports/img6.jpg',
        thumbnail: 'images/sports/img6.jpg',

      },
      {
        original: 'images/sports/img7.jpg',
        thumbnail: 'images/sports/img7.jpg',

      },
      {
        original: 'images/sports/img8.jpg',
        thumbnail: 'images/sports/img8.jpg',

      },
      {
        original: 'images/sports/img9.jpg',
        thumbnail: 'images/sports/img9.jpg',

      },
      {
        original: 'images/sports/img10.jpg',
        thumbnail: 'images/sports/img10.jpg',

      },
      {
        original: 'images/sports/img11.jpg',
        thumbnail: 'images/sports/img11.jpg',

      }, 
      {
        original: 'images/sports/img12.jpg',
        thumbnail: 'images/sports/img12.jpg',

      }, 
      {
        original: 'images/sports/img13.jpg',
        thumbnail: 'images/sports/img13.jpg',

      },
      {
        original: 'images/sports/img14.jpg',
        thumbnail: 'images/sports/img14.jpg',
       
      },
      {
        original: 'images/sports/img15.jpg',
        thumbnail: 'images/sports/img15.jpg',
       
      },
      {
        original: 'images/sports/img16.jpg',
        thumbnail: 'images/sports/img16.jpg',

      }, 
    ]

    return (
      <section>
        <div className="row">
          <ImageGallery items={images} autoPlay={true} />
        </div>
      </section>
    );
  }

}
export default PictureFlow;
