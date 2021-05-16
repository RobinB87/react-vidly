const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }: any) => {
  return (
    <ul className="list-group">
      {items.map((item: any) => (
        <li
          key={item[valueProperty]}
          className={item === selectedItem ? "list-group-item active" : "list-group-item"}
          onClick={() => onItemSelect(item)}>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
