import React from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const onclickCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === 0 ? 'active' : ''}
          onClick={() => onclickCategory(0)}
        >
          Все
        </li>
        <li
          className={activeCategory === 1 ? 'active' : ''}
          onClick={() => onclickCategory(1)}
        >
          Мясные
        </li>
        <li
          className={activeCategory === 2 ? 'active' : ''}
          onClick={() => onclickCategory(2)}
        >
          Вегетарианская
        </li>
        <li
          className={activeCategory === 3 ? 'active' : ''}
          onClick={() => onclickCategory(3)}
        >
          Гриль
        </li>
        <li
          className={activeCategory === 4 ? 'active' : ''}
          onClick={() => onclickCategory(4)}
        >
          Острые
        </li>
        <li
          className={activeCategory === 5 ? 'active' : ''}
          onClick={() => onclickCategory(5)}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
}

export default Categories;
