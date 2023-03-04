import React from 'react';
import "./Channel.css"

const Channel = () => {
    return (
        <div className="channel">

                <div className="channel__inner">

                    <div className="channel__item">

                        <img className="channel__img"
                             src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/fragment-of-colorized-one-hundred-u-s-dollar-bill-100-u-s-d-pop-art-serge-averbukh.jpg" alt="img"/>

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
    );
};

export default Channel;