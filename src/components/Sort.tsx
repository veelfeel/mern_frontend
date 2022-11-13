import React from 'react';
import { setSort } from '../redux/filters/slice';
import { SortEnum } from '../redux/filters/types';
import { useAppDispatch, useAppSelector } from '../redux/store';

type SortItem = {
  name: string;
  sortProperty: SortEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

const sortNames: SortItem[] = [
  { name: 'По умолчанию', sortProperty: SortEnum.DEFAULT },
  { name: 'Сначала популярные', sortProperty: SortEnum.RATING_DESC },
  { name: 'Сначала недорогие', sortProperty: SortEnum.PRICE_ASC },
  { name: 'Сначала дорогие', sortProperty: SortEnum.PRICE_DESC },
];

export const Sort: React.FC = () => {
  const [openSort, setOpenSort] = React.useState(false);

  const sortRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const nameSort = useAppSelector((state) => state.filters.sort);

  const onClickNameSort = (obj: SortItem) => {
    setOpenSort(false);
    dispatch(setSort(obj));
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpenSort(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="category-head">
      <div className="category-sort__group">
        <span className="category-sort__text">Сортировка:</span>
        <div className="select-group">
          <div onClick={() => setOpenSort(!openSort)} className="select-parent">
            <div className="select-child-main">{nameSort.name}</div>
            <button className="select__item-btn">
              <span className="select__item-btn-bar"></span>
              <span className="select__item-btn-bar"></span>
            </button>
          </div>
          {openSort && (
            <div className="select-parent-menu">
              <ul>
                {sortNames.map((obj, i) => (
                  <li key={i} onClick={() => onClickNameSort(obj)} className="select-child">
                    {obj.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="category__filter">
        <img className="category__filter-icon" src="images/icons/filter.svg" alt="filter" />
        <div className="category__filter-text">Фильтры</div>
      </div>
      <div className="category__view-buttons">
        <button data-view="grid" className="category__button-grid">
          <div className="category__button-item-grid"></div>
          <div className="category__button-item-grid"></div>
          <div className="category__button-item-grid"></div>
          <div className="category__button-item-grid"></div>
        </button>
        <button data-view="list" className="category__button-list">
          <div className="category__button-item-list"></div>
          <div className="category__button-item-list"></div>
        </button>
      </div>
    </div>
  );
};
