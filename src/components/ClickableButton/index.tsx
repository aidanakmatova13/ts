import React, {FC, useState} from 'react';

interface Props {
    text: string
}

const ClickableButton: FC<Props> = ({text}) => {
    const [counter, setCounter] = useState<number>(0)
    const handleClick = () => {
      setCounter(counter+1)
    }
    return (
        <div>
            <button onClick={handleClick}>{text} - {counter}</button>
        </div>
    );
};

export default ClickableButton;