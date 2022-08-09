/**
 * ThemeChanger
 * @returns
 */
import { useState } from 'react';
const ThemeChanger = ({ themes }) => {
  const [curTheme, setCurTheme] = useState(themes[0]);
  const onThemeChange = (theme) => {
    setCurTheme(theme);
    const rootClassList = document.getElementById('root').classList;
    rootClassList.remove(curTheme.name);
    rootClassList.add(theme.name);
  };
  const renderThemeItem = (theme) => (
    <div
      key={theme.name}
      className={`w-10 h-10 rounded-full cursor-pointer ${
        curTheme.name === theme.name ? theme.active : theme.bg
      }`}
      onClick={() => onThemeChange(theme)}
    ></div>
  );
  return <div className="p-4 flex gap-4">{themes?.map(renderThemeItem)}</div>;
};

export default ThemeChanger;
