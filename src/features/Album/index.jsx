import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: '1',
            name: 'Giai điệu chữa lành',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/6/1/1061db36adbc2ce56d0a62fa215301bd.jpg'
        },
        
        {
            id: '2',
            name: 'Acoustic Ký Ức',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/f/f/8/bff88f5ab647e1f2242067b24df02f2a.jpg'
        },
        {
            id: '3',
            name: 'Nhạc Lofi Chill Gây Nghiện',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg'
        }
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList = {albumList}/>
        </div>
        
    );
}

export default AlbumFeature;
