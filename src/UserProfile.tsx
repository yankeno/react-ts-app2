import { FC } from "react";
import { User } from "./User";

type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>name</dt>
      <dd>{user.name}</dd>
      <dt>hobbies</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
