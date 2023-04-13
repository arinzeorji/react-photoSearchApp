import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className=" mycard bg-light-green dib bw2 shadow-5  br3 pa3 ma3 grow">
            <img src={`https://robohash.org/${id}?100*100`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>

            </div>
        </div>
    )
}

export default Card;