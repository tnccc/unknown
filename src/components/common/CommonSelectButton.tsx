import classes from '@/styles/common/select_button.module.scss';

type Props = {
  label: string;
  isSelected: boolean;
  isSizeMatch: boolean;
  onSelect: () => void;
};

export const CommonSelectButton = ({
  label,
  isSelected,
  isSizeMatch,
  onSelect,
}: Props) => {
  return (
    <>
      <button
        className={`
          ${classes.select_button}
          ${isSelected ? classes.selected : ''}
          ${isSizeMatch ? classes.disable : ''}
        `}
        onClick={onSelect}
        disabled={isSizeMatch}
      >
        {label}
      </button>
    </>
  );
};
