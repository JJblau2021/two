/**
 * TagGroup
 * @returns
 */
import './index.css';

const TagGroup = ({ options, value, onChange, multi }) => {
  const onTagItemClick = (tagValue) => {
    if (!onChange) {
      return;
    }
    if (!value) {
      return onChange([tagValue]);
    }
    if (value.includes(tagValue)) {
      return onChange(value.filter((oldValue) => oldValue !== tagValue));
    }
    if (multi) {
      return onChange([...value, tagValue]);
    }
    onChange([tagValue]);
  };
  const renderTagItem = ({ label, value: tagValue }) => {
    const checked = value && value.includes(tagValue);
    return (
      <div
        key={tagValue}
        className={['tag', checked ? 'checked' : ''].join(' ')}
        onClick={() => {
          onTagItemClick(tagValue);
        }}
      >
        {label}
      </div>
    );
  };
  return <div className="tag__group__wrap">{options?.map(renderTagItem)}</div>;
};

export default TagGroup;
