/**
 * HeaderSearch
 * @returns
 */
import { MIcon } from '@/components';
import { useEffect, memo } from 'react';

const HeaderSearch = ({ onSearch }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  console.log('render');
  const onSearchBtnClick = () => {
    onSearch && onSearch('search');
  };
  const onKeyDown = (e) => {
    if (e.metaKey && e.key === 'k') {
      onSearchBtnClick();
    }
  };

  return (
    <button
      className="flex items-center p-2 text-gray-400 hover:text-gray-500 bg-white rounded-lg border border-pink-500 border-opacity-20 hover:border-opacity-100"
      onClick={onSearchBtnClick}
    >
      <MIcon icon="search" />
      <span className="mx-2">快速搜索一切</span>
      <div className="border border-gray-300 flex items-center px-1.5 py-0.5 rounded-md text-sm text-gray-400">
        <MIcon icon="keyboard_command_key" className="text-base" />K
      </div>
    </button>
  );
};

export default memo(HeaderSearch);
