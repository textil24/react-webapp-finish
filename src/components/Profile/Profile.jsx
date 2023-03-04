import React, {useState} from 'react';
import "./Profile.css"

import user from  "../../assets/user.png"
import ButtonCategory from "../../UI/ButtonCategory/ButtonCategory";
import CardList from "../../UI/CardList/CardList";
import CardItem from "../../UI/CardItem/CardItem";
import ContinueCardItem from "../../UI/ContinueCardItem/ContinueCardItem";

const cards = [
    {
        to: "/course/1",
        src: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
        type: "Курсы",
        name: "Курс",
        description: "Тест по английскому языку Present Simple Passive",
        exp: "+1500",
        content: <ContinueCardItem />
    },
    {
        to: "/course/2",
        src: "https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg",
        type: "Курсы",
        name: "Курс",
        description: "Тест по английскому языку Present Simple Passive",
        exp: "+1500",
        content: "399 $"
    },
]

const buttons = [
    "Все курсы"
]

const Profile = () => {

    const [clickButton, setClickButton] = useState(0)

    return (
        <div className="profile">

                <div className="profile__inner">

                    <div className="profile__user">
                        <div className="container">
                            <div className="profile__user-inner">
                                <div className="profile__user-name">
                                    <img
                                        className="profile__user-img"
                                        src={user}
                                        alt="img"/>
                                    @ilyachapyshev |
                                </div>
                                <div className="profile__user-exp">
                                    <span className="lightblue">99</span> XP️
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="profile__desc">
                            Приглашай друзей и получай <span className="lightblue">+100</span> XP за каждого нового пользователя!
                        </div>

                        <div className="profile__ref">
                            Твоя реферальная ссылка:
                            <a href="https://t.me/domi_bot?ref=123124" className="profile__ref-link">
                                https://t.me/domi_bot?ref=123124
                            </a>
                        </div>

                        <div className="profile__buttons">
                            {buttons.map((btn, index) =>
                                <ButtonCategory
                                    onClick={() => setClickButton(index)}
                                    active={clickButton === index ? "active" : ""}>
                                    {btn}
                                </ButtonCategory>
                            )}
                        </div>

                        <CardList>
                            {cards.map((card, index) =>
                                <CardItem
                                    key={index}
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

export default Profile;