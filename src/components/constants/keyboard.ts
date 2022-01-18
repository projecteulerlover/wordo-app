export type LetterStatus = "absent" | "appears" | "correct";

export type LetterValue =
    | "Q" | "W" | "E" | "R" | "T" | "Y" | "U" | "I" | "O" | "P"
    | "A" | "S" | "D" | "F" | "G" | "H" | "J" | "K" | "L"
    | "ENTER" | "Z" | "X" | "C" | "V" | "B" | "N" | "M" | "DELETE";

export type KeyValue = LetterValue | "ENTER" | "DELETE";

export const KeysByRow: Array<Array<KeyValue>>  = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"]
];

const kLetterWidth = 43.6;
const kActionWidth = 65.4;

export const getWidth = (value : KeyValue) => {
    switch (value) {
        case "DELETE":
        case "ENTER":
            return kActionWidth;
        default:
            return kLetterWidth;
    }
}