import React from 'react';
import {styles} from "./style";

interface Props {
    onClick: () => void,
    text: string
}

const Button: React.FC<Props> = ({onClick, text}) => {
    return (
        <button style={styles.btn} onClick={onClick}>{text}</button>
    );
};

export default Button;