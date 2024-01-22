const NamesList = ({ currentName }) => {
  return (
    <div className="pagination-container">
      <h3>Day 4: Pagination Component</h3>
      {currentName.map((d) => {
        return (
          <ul key={d.id}>
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
