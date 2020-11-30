import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from './../Button';

const PizzaBlock = ({
  id,
  name,
  price,
  imageUrl,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) => {
  const availableTypes = ['Стандарт', 'Тонкое', 'Филадельфия', 'Борт Хот-Дог'];
  const availableSizes = ['Маленькая', 'Средняя', 'Большая'];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      price,
      imageUrl,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => {
                onSelectSize(index);
              }}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
            >
              {size}
            </li>
          ))}
        </ul>
        <ul>
          {availableTypes.map((type) => (
            <li
              key={type}
              onClick={() => {
                onSelectType(type);
              }}
              className={classNames({
                active: activeType === type,
                disabled: !types.includes(type),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {price} <span>грн</span>
        </div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <span>В корзину</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: '----',
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
