const Card = (props) => {
  return (
    <div className="card flex vertical">
      <img src={props.img} alt="data" />
      <div className="flex vertical cardContent gap-mm">
        <div className="flex vertical gap-sm">
          <div className="font-sm">{props.brand}</div>
          <div className="font-xm fontW-xm title">{props.title}</div>
        </div>
        <p className="desc">{props.desc}</p>
        <div className="flex spaceBtw">
          <div>
            <span className="fontW-xm">Price:</span>
            {props.price}
          </div>
          <div>
            <span className="fontW-xm">Rating:</span>
            {props.rating}
          </div>
          <div>
            <span className="fontW-xm">Stock:</span>
            {props.stock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
