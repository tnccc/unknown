import classes from '@/styles/color_list.module.scss';
type Items = {
  colorItems: {
    id: number;
    value: string;
  }[];
  styles?: any;
  checkedBoxIds: number[];
  stockColors: string[];
  colorName?: any;
  onChangeBoxId(id: number): void;
};

export const ColorList = ({
  colorItems,
  styles,
  checkedBoxIds,
  stockColors,
  colorName,
  onChangeBoxId,
}: Items) => {
  const selectHandler = (id: number) => {
    onChangeBoxId(id);
  };

  const inStockMatchingColor = (item: any) => {
    return !stockColors?.includes(item);
  };

  const isColorAvailable = () => {
    return colorItems.some((item) => item.value.includes(colorName?.[0]));
  };

  return (
    <>
      <div className={classes.color_list}>
        <div className={classes.heading}>Color</div>
        <div className={classes.container}>
          {isColorAvailable() ? (
            colorItems.map((item) => (
              <button
                key={item.id}
                className={`${classes[item.value]}
                  ${checkedBoxIds?.includes(item.id) ? classes.selected : ''}
                  ${
                    checkedBoxIds.includes(item.id) && item.id === 3
                      ? classes.selected_gray
                      : ''
                  }
                  ${inStockMatchingColor(item.value) ? classes.disabled : ''}
                `}
                onClick={() => selectHandler(item.id)}
                disabled={inStockMatchingColor(item.value)}
              />
            ))
          ) : (
            <div className={classes.color_name}>
              {colorName?.join('').toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
