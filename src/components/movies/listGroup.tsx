const ListGroup = (props: any) => {
  const { items, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      {items.map((item: any) => (
        <li key={item[valueProperty]} className="list-group-item" onClick={() => props.onItemSelect(item)}>
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
