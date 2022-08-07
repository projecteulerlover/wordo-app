import { KeyValue, KeysByRow, LetterStatus, getWidth } from "../constants/keyboard";
import { KeyboardKey } from "./keyboardKey";
import { useEffect } from "react";

type Props = {
    onDelete: () => void;
    onEnter: () => void;
    onLetter: (value: string) => void;
}

export const Keyboard = (props: Props) => {
    const onClick = (value: KeyValue) => {
        if (value === "ENTER") {
            return props.onEnter();
        }
        if (value === "DELETE") {
            return props.onDelete();
        }
        return props.onLetter(value);
    }

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.code === "Enter") {
                props.onEnter();
            } else if (e.code === "Backspace") {
                props.onDelete();
            } else {
                const key = e.key.toUpperCase()
                if (key.length === 1 && key >= 'A' && key <= 'Z') {
                    props.onLetter(key);
                }
            }
        }
        window.addEventListener('keyup', listener)
        return () => {
            window.removeEventListener('keyup', listener);
        }
    }, [props])

    const renderKeyboard = () => {
        return KeysByRow.map((row, i) => {
            return (<div key={i} className={"flex justify-center mb-1"} >{
                row.map((keyValue, j) => {
                    return (<
                        KeyboardKey key={j} 
                        value={keyValue} 
                        width={getWidth(keyValue)} 
                        onClick={onClick}>
                            {keyValue === "DELETE" ? "⌫" : keyValue === "ENTER" ? "→" : keyValue}
                        </KeyboardKey>);
                })}
            </div>);
        })
    };

    return (
        <div>{renderKeyboard()}</div>
    );


}