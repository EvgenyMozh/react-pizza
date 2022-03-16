import React, { useState } from "react";

const Categories = React.memo(function Categories ({ items, onClickItem })  {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const onSelectItem = (index) => {
    setActiveCategory(index);
    onClickItem(index)
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
})

export default Categories;
