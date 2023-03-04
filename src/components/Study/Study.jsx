import React, {useEffect, useState} from 'react';
import Channel from "../Channel/Channel";

import "./Study.css"
import {Link} from "react-router-dom";
import ButtonCategory from "../../UI/ButtonCategory/ButtonCategory";

import puzzle from "../../assets/puzzle.png"
import CardItem from "../../UI/CardItem/CardItem";
import ContinueCardItem from "../../UI/ContinueCardItem/ContinueCardItem";
import CardList from "../../UI/CardList/CardList";

const cards = [
    {
        isBuy: true,
        to: "/course/1",
        src: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
        type: "Курсы",
        name: "Курс",
        description: "Тест по английскому языку Present Simple Passive",
        exp: "+1500",
        content: <ContinueCardItem />
    },
    {
        isBuy: true,
        to: "/quiz",
        src: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
        type: "Квизы",
        name: "Квиз",
        description: "Тест по английскому языку Present Simple Passive",
        exp: "+15",
        content: "5 вопросов"
    },
    {
        isBuy: false,
        to: "/course/2",
        src: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
        type: "Курсы",
        name: "Курс",
        description: "Тест по английскому языку Present Simple Passive",
        exp: "+1500",
        content: "399 $"
    },
    {
        isBuy: true,
        to: "/quiz",
        src: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
        type: "Квизы",
        name: "Квиз",
        description: "Тест по английскому языку Present Simple Passive",
        exp: "+15",
        content: "5 вопросов"
    },
]

const buttons = [
    {
        title: "Квизы и курсы от",
        name: "Все"
    },
    {
        title: "Квизы от",
        name: "Квизы"
    },
    {
        title: "Курсы от",
        name: "Курсы"
    },
]

const Study = ({ title, sort, category }) => {

    const [titleCurrent, setTitleCurrent] = useState()
    const [clickButton, setClickButton] = useState(0)
    const [cardsCurrent, setCardsCurrent] = useState(cards)

    const onClickCategory = (index, category, categoryTitle) => {
        setClickButton(index)
        setTitleCurrent(categoryTitle)
        if (category.toLowerCase() !== "все") {
            const newCards = cards.filter(card => card.type.toLowerCase() === category.toLowerCase())
            setCardsCurrent(newCards)
        } else {
            setCardsCurrent(cards)
        }
    }

    useEffect(() => {
        onClickCategory(sort, category)
        setTitleCurrent(title)
        console.log("Отработал!")
    }, [sort, category])


    return (
        <div className="study">
            <div className="container">
                <div className="study__inner">

                    <div className="study__title">
                        <img
                            className="study__title-img"
                            src={puzzle}
                            alt="image"/>
                        {titleCurrent}
                    </div>

                    <Channel remove={'remove'} />

                    <div className="study__categories">
                        {buttons.map((btn, index) =>
                            <ButtonCategory
                                key={index}
                                onClick={() => onClickCategory(index, btn.name, btn.title)}
                                active={clickButton === index ? "active" : ""}>
                                {btn.name}
                            </ButtonCategory>
                        )}
                    </div>

                    <CardList>
                        {cardsCurrent.map((card, index) =>
                            <CardItem
                                key={index}
                                isBuy={card.isBuy}
                                to={card.to}
                                src={card.src}
                                name={card.name}
                                description={card.description}
                                exp={card.exp}
                                content={card.content}
                            />
                        )}
                    </CardList>

                </div>
            </div>
        </div>
    );
};

export default Study;