import React from 'react';
import './styles.scss';
import ReactWordcloud from 'react-wordcloud';
import { Common } from '../../constants/common';

// Component to display the list of friends
const DisplayNames = (props) => {
    const { displayFriends, recentFriend } = props;

    return (
        <div className="display-name-container">
            <h3>{Common.recentFriend} {recentFriend}</h3>
            <ReactWordcloud words={displayFriends} />
        </div>
    )
}


export default DisplayNames;
