import classes from '@/styles/button_list.module.scss';
import { CommonSelectButton } from './common/CommonSelectButton';
import { FC } from 'react';

type Props = {
  heading: string;
  styles?: React.CSSProperties;
  buttonItems: {
    id: number;
    value: string;
  }[];
  sizeStocks: string[];
  checkedBoxIds: number[];
  onChangeBoxId(id: number): void;
};

type ButtonItem = {
  id: number;
  value: string;
};

export const ButtonList: FC<Props> = ({
  heading,
  styles,
  buttonItems,
  checkedBoxIds,
  sizeStocks,
  onChangeBoxId,
}: Props) => {
  const selectHandler = (id: number) => {
    onChangeBoxId(id);
  };

  const isSizeMatch = (item: any) => {
    return !sizeStocks.includes(item);
  };

  return (
    <>
      <div className={classes.button_list} style={styles}>
        <div className={classes.heading}>{heading}</div>
        <div className={classes.container}>
          {buttonItems.map((item: ButtonItem) => (
            <CommonSelectButton
              key={item.id}
              label={item.value}
              isSizeMatch={isSizeMatch(item.value)}
              isSelected={checkedBoxIds?.includes(item.id)}
              onSelect={() => selectHandler(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
