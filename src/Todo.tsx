import { FC } from "react";
import { TodoType } from "./types/todo";

export const Todo: FC<Omit<TodoType, "id">> = (
  /**
   * Omit を用いることで特定の型から必要な項目のみを指定して
   * import することができる
   * Omit を用いることで特定の型から不要な項目以外を指定して
   * import することができる
   */
  props: Omit<TodoType, "id">
) => {
  /* 必須ではないパラメータには初期値を設定しておく */
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザ:${userId})`}</p>;
};
