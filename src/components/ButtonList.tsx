import { useState } from 'react';
import classes from '@/styles/button_list.module.scss'
import { CommonSelectButton } from './common/CommonSelectButton'

type Props = {
  heading: string;
  buttonItems: any;
  styles?: React.CSSProperties;
  selectedItemId?: number[] // 子コンポーネントからのemitを受けて、配列に追加/削除
}

export const ButtonList = ({heading ,buttonItems, styles}: Props) => {
  const test = (message: string) => console.log(message)
  // const [selected, setSelected] = useState()
  // const test = (id: number) => {
  //   const exist = selectedItemId.includes(id);
  //   // emitされてきたIDが既に選択済みだった場合は配列から削除
  //   if (exist) {
  //     selectedItemId = selectedItemId.filter(itemId !== id);
  //   }
  //   // emitされてきたIDが未選択だった場合には配列についか
  //   if (!exist) {
  //     selectedItemId.push(id);
  //   }
  // }

  // const isSelected = (id) => selectedItemId.includes(id);
  return (
    <>
      <div
        className={classes.button_list}
        style={styles}
      >
        <div className={classes.heading}>{heading}</div>
        <div className={classes.container}>
          {/* 下位のコンポーネントにはselected */}
          {/* <CommonSelectButton 
            selected={isSelected(item.id)}
            buttonItems={buttonItems}
          /> */}
          <CommonSelectButton 
            callback={test}
          />
        </div>
      </div>
    </>
  )
}