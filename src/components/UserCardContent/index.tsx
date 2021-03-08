import React, { FC } from 'react';

interface Props {
  name: string | null,
  surname: string | null,
  age: string | null,
  url: string | null,
}

const UserCardContent: FC<Props> = ({
  name,
  surname,
  age,
  url,
}) => (
  <div className="userCard_row">
    <div className="userCard__avatar">
      <img src={url || undefined} alt="user avatar" />
    </div>
    <div className="userCard__rightContentContainer">
      <span>Name: {name}</span>
      <span>Surname: {surname}</span>
      <span>Age: {age}</span>
    </div>
  </div>
);

export default UserCardContent;
