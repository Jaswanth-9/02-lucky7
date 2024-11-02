import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";

export default function LuckyN( numDice = 2, goal = 7){
    const [dice, setDice] = useState(getRolls(numDice));
    return(
        <div>
            <Dice dice = {dice}/>
        </div>
    )
}