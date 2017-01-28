import React from 'react';

const dateLocaleOptions = ['ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }];
const timeLocaleOptions = ['ru-RU', { hour12: false }];

const Item = ({ card, datetime }) => (
  <li className="linkItem">
    <a href={card.href}>{card.caption}</a>
    <span className="date">{(new Date(datetime)).toLocaleDateString(...dateLocaleOptions)}</span>
    <span className="time">{(new Date(datetime)).toLocaleTimeString(...timeLocaleOptions)}</span>
    <div>{card.description}</div>
  </li>
);

export default Item;
