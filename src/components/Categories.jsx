import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ activeCategory, items, onClickCategory }) => {
  const onSelectItem = (index) => {
    onClickCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeCategory === null ? 'active' : ''}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={activeCategory === index ? 'active' : ''}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
