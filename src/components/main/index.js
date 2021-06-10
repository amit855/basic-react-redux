import React from 'react';
import AddFriend from '../addFriend';
import DisplayNames from '../displayNames';
import { addFriend } from '../../module/addFriend/actions';
import { connect } from "react-redux";
import { AddFriendSelector } from "../../module/addFriend/selector";
import { Common } from '../../constants/common';
import './styles.scss';

const Main = (props) => {
	const { addFriend, displayFriends, recentFriend } = props;

	// A callBack function which has a name as value from the ADD FRIEND button.
	const add = (value) => {
		addFriend(value); // Update Action.
	}

	return (
		<div className="container">
			<h1>{Common.appHeading}</h1>
			<div className='friend-desc'>
				<DisplayNames displayFriends={displayFriends} recentFriend={recentFriend} />
				<AddFriend add={add} />
			</div>
		</div>
	)
}

// Retrieving value from the reducer
const mapStateToProps = state => {
	return {
		displayFriends: AddFriendSelector.displayFriendList(state),
		recentFriend: state.addFriend.names
	}
};

// It connects a React component to a Redux store
export default connect(
	mapStateToProps,
	{ addFriend } // If multiple actions. One can you mapDispatchToProps
)(Main);