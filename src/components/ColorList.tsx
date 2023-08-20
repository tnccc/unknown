import classes from '@/styles/color_list.module.scss'
type Items = {
  colorItems: {
    id: number;
    value: string;
  }[];
  styles?: any;
  checkedBoxIds: number[];
  onChangeBoxId(id: number): void;
}

export const ColorList = ({colorItems, styles, checkedBoxIds, onChangeBoxId}: Items) => {
  const selectHandler = (id: number) => {
    onChangeBoxId(id);
  };

  return (
    <>
      <div className={classes.color_list}>
        <div className={classes.heading}>
          Color
        </div>
        <div className={classes.container}>
          {colorItems.map((item: any) => (
            <button
              key={item.id}
              className={
                `${classes[item.value]}
                ${checkedBoxIds?.includes(item.id) ? classes.selected : ''}
                ${checkedBoxIds.includes(item.id) && item.id === 3 ? classes.selected_gray : ''}
                `}
              onClick={() => selectHandler(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  )
}