import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
class PictureFlow extends React.Component {

  render() {

    const images = [
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img1.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img1.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img2.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img2.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img3.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img3.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img4.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img4.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img5.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img5.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img6.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img6.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img7.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img7.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img8.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img8.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img9.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img9.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img10.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img10.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img11.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img11.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img12.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img12.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img13.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img13.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img14.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img14.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img15.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img15.jpg',

      },
      {
        original: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img16.jpg',
        thumbnail: 'https://guruweb-image-folder.s3.amazonaws.com/resume/img16.jpg',

      },
    ]

    return (
      <section>
        <div className="row">
          <div className="row eight">
            <ImageGallery items={images} autoPlay={true} thumbnailPosition='top' />
            <h4 style={{ color: "white", padding: "30px" }}>Some pictures from sports field!</h4>
          </div>
        </div>
      </section>
    );
  }

}
export default PictureFlow;

