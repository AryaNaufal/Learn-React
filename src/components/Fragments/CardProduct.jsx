import Button from "../Elements/Button";

/* Nested Component */
const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 my-2 rounded-lg shadow mx-3">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <a href="">
      <img src={image} alt="" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = ({ name, children }) => {
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl fobold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button variant="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
