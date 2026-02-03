import { useAtom } from "jotai";
import flashcardAtom from "../atom/FlashcardAtom";

export default function AddCard() {

    const [flashcards, setFlashcards] = useAtom(flashcardAtom);

    return <>
     <h1>Add Card</h1>
     <p>Number of Cards Right Now = {flashcards.length}</p>
    </>
}