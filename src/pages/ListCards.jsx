import {useState, useEffect} from "react";
import axios from "axios";
import Flashcard from "../components/Flashcard"
import { useAtom } from "jotai";
import flashcardAtom from "../atom/FlashcardAtom"

export default function ListCards() {
    const [flashcards, setFlashcards] = useAtom(flashcardAtom);
    const [showBack, setShowBack] = useState(false);

    useEffect(() => {
        // when we refer to any images, or static files, React will look
        // for it in the public folder
        const fetchData = async () => {
            const response = await axios.get("./flashcards.json")
            setFlashcards(response.data);
        }
        fetchData();

    }, [])

    return <>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Manage Flashcards</h2>
            <button className="btn btn-success">Add New</button>
            <button className="btn btn-primary" onClick={() => setShowBack(!showBack)}>Toggle Back</button>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                flashcards.map(card => (
                    <div className="col" key={card.id}>
                        <Flashcard front={card.front}
                            back={card.back}
                            showBack={showBack}
                        />
                    </div>
                )
                )
            }

        </div>
    </>
}