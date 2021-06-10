import React from 'react';
import './styles.scss';
import ReactWordcloud from 'react-wordcloud';


const DisplayNames = (props) => {
    const { displayFriends, recentFriend } = props;

    return (
        <div className="display-name-container">
            <h3>Recent Friend : {recentFriend}</h3>
            <ReactWordcloud words={displayFriends} />
        </div>
    )
}


export default DisplayNames;
