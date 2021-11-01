import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [

    {
        name: "빈지노",
        src: require("../../img/beenzino.jpeg").default
    },
    {
        name: "박재범",
        src: require("../../img/park.jpeg").default
    },
    {
        name: "더콰이엇",
        src: require("../../img/theq.jpeg").default
    },
    {
        name: "지코",
        src: require("../../img/zico.jpeg").default
    }
];



const Game = () => {
    const [foods, setFoods] = useState([])
    const [displays, setDisplays] = useState([])
    const [winners, setWinners] = useState([])




    useEffect(() => {
        items.sort(() => Math.random() - 0.5);

        setFoods(items);
        setDisplays([items[0], items[1]]);

    }, [])


    const clickHandler = (food) => () => {
        if (foods.length <= 2) {
            if (winners.length == 0) {
                setDisplays([food])
            } else {
                let updatedFood = [...winners, food];
                setFoods(updatedFood)
                setDisplays([updatedFood[0], updatedFood[1]])
                setWinners([])
            }

        } else if (foods.length > 2) {
            setWinners([...winners, food])
            setDisplays([foods[2], foods[3]])
            setFoods(foods.slice(2))
        }

    }


    return <FlexBox>
        <h1 className="title">래퍼 이상형 월드컵</h1>
        {displays.map((d) => {
            return (<div className="flex-1" key={d.name} onClick={clickHandler(d)}>
                <img className="food-img" src={d.src}></img>
                <div className="name">{d.name}</div>
            </div>

            )
        })}


    </FlexBox>

};

export default Game;