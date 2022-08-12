import React, { CSSProperties } from "react";
import classes from "./GroupItem.module.css";

interface GroupItemProps<T> {
  items: T[];
  itemComponent: (item: T, itemStyle: CSSProperties, i?: number) => JSX.Element;
  row: number;
  containerClassName?: string;
  margin?: number;
  width: number;
}

export const GroupItem = <T extends object>(props: GroupItemProps<T>) => {
  const { items, itemComponent, row, containerClassName, margin, width } =
    props;


  const itemStyle = {
    width: `${(width - (row - 1) * (margin || 10)) / row}px`,
    marginRight: margin ? `${margin}px` : "10px",
  };

  const noMargin = {
    width: `${(width - (row - 1) * (margin || 10)) / row}px`,
    marginRight: 0,
  };

  return (
    <div
      style={{
        width,
      }}
      className={[classes.ItemsContainer, containerClassName].join(" ")}
    >
      {items.map((item, i) => {
        return itemComponent(
          item,
          (i + 1) % row === 0 ? noMargin : itemStyle,
          i
        );
      })}
    </div>
  );
};
