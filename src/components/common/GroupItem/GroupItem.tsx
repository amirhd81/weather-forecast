import React, { CSSProperties } from "react";
import classes from "./GroupItem.module.css";

interface GroupItemProps<T> {
  items: T[];
  itemComponent: (item: T, itemStyle: CSSProperties, i?: number) => JSX.Element;
  row: number;
  containerClassName?: string;
  margin?: number;
  width: number;
  percentage?: boolean;
}

export const GroupItem = <T extends object>(props: GroupItemProps<T>) => {
  const {
    items,
    itemComponent,
    row,
    containerClassName,
    margin,
    width,
    percentage,
  } = props;

  const itemStyle = {
    width: `${(width - (row - 1) * (margin || 10)) / row}px`,
    marginRight: margin ? `${margin}px` : "10px",
  };

  const itemStyleWithPercentage = {
    width: `${(width - (row - 1) * (margin || 2)) / row}%`,
    marginRight: margin ? `${margin}%` : "2%",
  };

  const noMargin = {
    width: `${(width - (row - 1) * (margin || 10)) / row}px`,
    marginRight: 0,
  };

  const noMarginWithPercentage = {
    width: `${(width - (row - 1) * (margin || 2)) / row}%`,
    marginRight: 0,
  };

  return (
    <div
      style={{
        width: percentage ? `${width}%` : `${width}px`,
      }}
      className={[classes.ItemsContainer, containerClassName].join(" ")}
    >
      {items.map((item, i) => {
        return itemComponent(
          item,
          (i + 1) % row === 0
            ? percentage
              ? noMarginWithPercentage
              : noMargin
            : percentage
            ? itemStyleWithPercentage
            : itemStyle,
          i
        );
      })}
    </div>
  );
};
