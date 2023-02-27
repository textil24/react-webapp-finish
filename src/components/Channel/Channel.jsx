import React from 'react';
import "./Channel.css"

const Channel = ({remove}) => {
    return (
        <div className="channel">
            <div className={`container ${remove}`}>
                <div className="channel__inner">

                    <div className="channel__item">

                        <img className="channel__img" src="https://www.kindpng.com/picc/m/134-1343439_hands-banking-bag-money-comments-white-money-bag.png" alt="img"/>

                        <div className="channel__content">
                            <div className="channel__title">
                                Аналитик В ТГ
                            </div>
                            <div className="channel__subscribers">
                                371 569 подписчиков
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Channel;