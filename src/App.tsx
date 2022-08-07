import { useState } from "react"
import { createModuleResolutionCache } from "typescript"
import { Keyboard } from "./components/keyboard/keyboard"
import { kGuessesSet } from "./components/constants/guesses";
import "./generated_css/output.css"
import { kCandidates, kCandidatesSet } from "./components/constants/candidates";

const kWordLength = 5;
const kGuessAttempts = 6;

function App() {
    console.log("running");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const [word] = useState<string>(kCandidates[Math.floor(Math.random() * kCandidates.length)]);
    console.log("word: " + word);
    const onLetter = (value: string) => {
        if (currentGuess.length < 5) {
            setCurrentGuess(`${currentGuess}${value.toLowerCase()}`);
        } 
    };

    const onDelete = () => {
        setCurrentGuess(currentGuess.slice(0, -1));
    };

    const onEnter = () => {
        if (!kGuessesSet.has(currentGuess) && !kCandidatesSet.has(currentGuess)) {
            return console.error("not a word");
        }
        if (currentGuess.length === kWordLength && guesses.length < kGuessAttempts) {
            if (currentGuess === word) {
                return console.log("You won!");
            }
            setGuesses([...guesses, currentGuess]);
            setCurrentGuess("");
        }
    };
    console.log(currentGuess);
    console.log(guesses);

    return (
        <div>
            <Keyboard onLetter={onLetter} onDelete={onDelete} onEnter={onEnter} />
        </div>
    );
}

export default App