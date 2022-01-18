import { KeyValue, KeysByRow, LetterStatus, getWidth } from "../constants/keyboard";
import { KeyboardKey } from "./keyboardKey";

type Props = {
    onDelete: () => void;
    onEnter: () => void;
    onLetter: (value: string) => void;
}

export const Keyboard = (props : Props) => {
    const onClick = (value : KeyValue) => {
        if (value === "ENTER") {
            return props.onEnter();
        }
        if (value === "DELETE") {
            return props.onDelete();
        }
        return props.onLetter(value);
    }

    const renderKeyboard = () => {
        return KeysByRow.map((row, i) => {
            return (<div className={"flex justify-center mb-1"} >{
                row.map(keyValue => {
                    return (<KeyboardKey value={keyValue} width={getWidth(keyValue)} onClick={onClick}>{keyValue}</KeyboardKey>);
                })}
            </div>);
        })
    };

    return (
        <div>{renderKeyboard()}</div>
    );


}