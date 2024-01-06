const NamesList = ({ currentName }) => {
  console.log(currentName);
  return (
    <div className="pagination-container">
      <h2>Day 4: Pagination Component</h2>
      {currentName.map((d) => {
        return (
          <ul>
            <li>{d.id}.</li>
            <li>{d.name}</li>
            <li>{d.email}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default NamesList;
