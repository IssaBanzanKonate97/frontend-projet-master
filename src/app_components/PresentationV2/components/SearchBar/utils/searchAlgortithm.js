const searchAlgortithm = (inSearchText, data) => {
  const searchText = new String(inSearchText).trim().toLowerCase();

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchText) ||
      item.practitioner.toLowerCase().includes(searchText) ||
      item.establishment.toLowerCase().includes(searchText)
    );
  });

  return filteredData;
};

export default searchAlgortithm;
