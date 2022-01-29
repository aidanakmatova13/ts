import React, {useState} from 'react';
import ClickableButton from "./components/ClickableButton";
import Button from "./components/Button";
import logo from './logo.svg'

const App = () => {
    const [show, setShow] = useState<boolean>(true)
    const [counter, setCounter] = useState<number>(0)

    const handleClick = () => {
      setShow(!show)
    }
    const counterIncrease = () => {
        setCounter(counter+1)
    }
    return (
        <div>
            <img src={logo} alt=""/>
            {
                show &&
                <div>
                    <ClickableButton text="Первая кнопка"/>
                    <ClickableButton text="Вторая кнопка"/>
                </div>
            }
            <Button onClick={handleClick} text={"Скрыть или показать"}/>
            <Button onClick={counterIncrease} text={"Увеличить на 1"}/>
            {counter}
        </div>
    );
};

export default App;