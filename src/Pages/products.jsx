import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 1.000.000",
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
    consequuntur aperiam error ipsam nesciunt odio delectus soluta
    voluptatum corporis nam quos, cumque culpa, dolore deserunt quis
    optio, fugiat ad!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp. 1.000.000",
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
    consequuntur aperiam error ipsam nesciunt odio delectus soluta
    voluptatum corporis nam quos, cumque culpa, dolore deserunt quis
    optio, fugiat ad!`,
  },
];

const email = localStorage.getItem("email");
const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="bg-red-600 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;
