import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 500),
    []
  );

  const onChangeInput = (event: any) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
          stroke="#E4E4E4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        className={styles.input}
        onChange={onChangeInput}
        placeholder="Поиск пиццы ..."
      />
      {value && (
        <img
          onClick={() => onClickClear()}
          className={styles.clear}
          src="/img/close.svg"
          alt="close icon"
        />
      )}
    </div>
  );
};

export default Search;
