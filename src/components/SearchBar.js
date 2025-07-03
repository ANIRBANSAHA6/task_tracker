import React from 'react';

const SearchBar = ({ searchText, setSearchText }) => {
  const styles = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '20px 0',
    fontSize: '16px',
  };

  return (
    <input
      style={styles}
      type="text"
      placeholder="🔍 Search tasks..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchBar;
