import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import gallery from './gallery.css';
import GalleryImage from './GalleryImage.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch(this.props.location);
  }

  fetch(location) {
    axios.get(`/api/images/${location}`)
      .then((data) => this.setState({ images: data.data }))
      .catch((err) => console.log(err));
  }

  render() {
    let length = this.state.images.length;
    let div = (<div> </div>);
    let images;
    if (length > 0) {
      images = (length >= 5 ? this.state.images.slice(0, 5) : this.state.images);
      div = images.map((image) => <GalleryImage image={image} length={images.length} />);
    }

    return (
      <div className={gallery.container}>
        <div className={gallery.flex}>
          <div className={gallery.grid}>
            {div}
            {this.state.images.length
              ? <button type="submit" className={gallery.showAll}>Show all photos</button>
              : (<div> </div>)}
          </div>
        </div>
      </div>
    );
  }
}

let location = '1';

ReactDOM.render(
  <Gallery location={location} />,
  document.getElementById('carousel'),
);
