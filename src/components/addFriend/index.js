import React, { useState } from 'react';
import './styles.scss';
import { Button, TextField } from '@material-ui/core';

const AddFriend = (props) => {
    const { add } = props;

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        add(inputValue);
        setInputValue('');
    }

    return (
        <div className="add-friend-container">
            <form>
                <TextField id="outlined-basic" placeholder="Name" variant="outlined" name="friendName" value={inputValue} onChange={event => setInputValue(event.target.value)} /> <br />
                <Button  variant="contained" color="secondary" type="submit" onClick={handleSubmit}>Add Friend</Button>
            </form>
        </div>
    )
}


export default AddFriend;
