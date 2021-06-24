import React from "react";
import {styled} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StandardButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: (props) =>
        props.color === 'bright'
            ? 'linear-gradient(45deg, #ff9a00 30%, #fde378 90%)'
            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: 'none',
    color: 'white',
    width: '100%',
    margin: 8,
    opacity: 1,
    '&:disabled': {
        opacity: '.8',
        background: '#d8d7d7'
    },
    '&:hover':{
        boxShadow: 'none',
        opacity: '0.7',
    }
});

export default StandardButton;