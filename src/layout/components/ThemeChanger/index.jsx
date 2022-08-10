/**
 * ThemeChanger
 * @returns
 */
import { useLocaleState } from '@/hooks';
import { useEffect } from 'react';
const ThemeChanger = ({ themes }) => {
  const [curTheme, setCurTheme] = useLocaleState('theme', {
    defaultValue: themes[0],
  });
  useEffect(() => {
    const rootClassList = document.getElementById('root').classList;
    rootClassList.add(curTheme.name);

    return () => {
      rootClassList.remove(curTheme.name);
    };
  }, [curTheme]);
  const onThemeChange = (theme) => {
    setCurTheme(theme);
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
