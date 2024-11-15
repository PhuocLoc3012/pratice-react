import React from "react";
import PropTypes from "prop-types";
import './styles.scss'
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album(props) {
  const { album } = props;
  return (
    //dấu __: quan hệ cha con, -- chỉ trạng thái
    <div className="album album--active album-special">
      <div className="album__thumbnail album__thumbnail--active">
        <img className="album__image" src={album.thumbnaiUrl} alt=""/>
        <p>{album.name}</p>
      </div>
    </div>
  );
}

export default Album;
