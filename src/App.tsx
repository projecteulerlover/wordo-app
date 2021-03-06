import { useState } from "react"
import { createModuleResolutionCache } from "typescript"
import { Keyboard} from "./components/keyboard/keyboard"

function App() {
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState("");
  
    const onLetter = (value: string) => {
      if (currentGuess.length < 5) {
        setCurrentGuess(`${currentGuess}${value}`);
      }
    };
  
    const onDelete = () => {
      setCurrentGuess(currentGuess.slice(0, -1));
    };
  
    const onEnter = () => {
      // TODO: check if the current guess is in the words list
      if (currentGuess.length === 5 && guesses.length < 6) {
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