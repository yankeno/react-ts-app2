import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

/**
 * FC: Function Component
 * -> 関数コンポーネントであることを表す型
 */
export const Text: FC<Props> = (props: Props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>text</p>;
};
