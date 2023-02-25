import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import React from 'react';

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            enteredNumber: ''
        };
    }
    render () {
        // setEnteredNumber] = useState('')

        const submitHandler = (event) => {
            event.preventDefault()
            this.props.onInput(this.state.enteredNumber);
            // setEnteredNumber('')
            this.setState({ enteredNumber : "" })
        }

        const numberInputHandler = (event) => {
            // setEnteredNumber(event.target.value)
            this.setState({ enteredNumber : event.target.value })
            console.log(this.state.enteredNumber)
        }
        return(
            <form onSubmit={submitHandler}>
                <Stack spacing={2} direction="row">
                    <TextField
                    label="Enter a number: "
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                    value={this.state.enteredNumber || ''}
                    type='number'
                    onChange={numberInputHandler}
                    />
                    <Button variant="outlined" type='submit'>Show Table</Button>
                </Stack>
            </form>
        )
    }
}