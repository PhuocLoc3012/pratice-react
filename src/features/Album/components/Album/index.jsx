import React from "react";
import PropTypes from "prop-types";
import './styles.scss'
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album(props) {
  const { album } = props;
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnaiUrl} alt=""/>
        <p>{album.name}</p>
      </div>
    </div>
  );
}

export default Album;
