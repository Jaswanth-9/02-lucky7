import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";

export default function LuckyN( {numDice = 2, goal = 7} ){
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = sum(dice) === goal;
    const reRoll = ()=> setDice(getRolls(numDice));
    return(
        <main className = "LuckyN">
            <h1> Lucky{goal} </h1>
            <h2> {isWinner && "You won the GAME"}</h2>
            <Dice dice={dice} />
            <button onClick={reRoll}> Re-Roll </button>
        </main>
    );
}