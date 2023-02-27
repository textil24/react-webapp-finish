import React, {useEffect, useState} from 'react';
import Channel from "../Channel/Channel";

import "./Study.css"
import {Link} from "react-router-dom";
import ButtonCategory from "../../UI/ButtonCategory/ButtonCategory";

import puzzle from "../../assets/puzzle.png"

const cards = [
    {
        to: "/quiz",
        scr: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
        type: "Квизы",
        name: "Квиз",
        description: "Тест по английскому языку Present Simple Passive",
        exp: "+15",
        content: "5 вопросов"
    },
    {
        to: "/course",
        scr: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
        type: "Курсы",
        name: "Курс",
        description: "Тест по английскому языку Present Simple Passive",
        exp: "+1500",
        content: "399 $"
    },
    {
        to: "/quiz",
        scr: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
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

                    <div className="study__list">

                        {cardsCurrent.map((card, index) =>

                            <Link key={index} to={card.to} className="study__item">
                                <div className="study__top">
                                    <img className="study__img"
                                         src={card.scr}
                                         alt="image"/>
                                    <div className="study__name">
                                        {card.name}
                                    </div>
                                    <div className="study__description">
                                        {card.description}
                                    </div>
                                </div>
                                <div className="study__bottom">
                                    <div className="study__bottom-exp">
                                        <span className="study__bottom-exp lightblue">{card.exp}</span>
                                        XP
                                    </div>
                                    <div className="study__bottom-content">
                                        {card.content}
                                    </div>
                                </div>
                            </Link>

                        )}



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Study;