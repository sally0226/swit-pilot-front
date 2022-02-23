import React from 'react';
import { regexDate } from '../../../../utils/regex';
import { DateSpan, NameSpan, Wrapper } from './style';

const dateToKorean = (date) => {
  const matchedDate = date.match(regexDate).groups;
  const dayOrNight = Number(matchedDate.hour) < 12 ? '오전' : '오후';
  const hour = Number(matchedDate.hour) < 12 ? Number(matchedDate.hour) : Number(matchedDate.hour) - 12;
  const minute = Number(matchedDate.minute);
  return `${dayOrNight} ${hour}:${minute}`;
};

const SenderInfo = ({ userName, date }) => {
  return (
    <Wrapper>
      <NameSpan>{userName}</NameSpan>
      <DateSpan>{dateToKorean(date)}</DateSpan>
    </Wrapper>
  );
};

export default SenderInfo;
