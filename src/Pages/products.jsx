import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu 1",
    price: 1000000,
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
    consequuntur aperiam error ipsam nesciunt odio delectus soluta
    voluptatum corporis nam quos, cumque culpa, dolore deserunt quis
    optio, fugiat ad!`,
  },
  {
    id: 2,
    name: "Sepatu 2",
    price: 2000000,
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
    consequuntur aperiam error ipsam nesciunt odio delectus soluta
    voluptatum corporis nam quos, cumque culpa, dolore deserunt quis
    optio, fugiat ad!`,
  },
  {
    id: 3,
    name: "Sepatu 3",
    price: 2000000,
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
    consequuntur aperiam error ipsam nesciunt odio delectus soluta
    voluptatum corporis nam quos, cumque culpa, dolore deserunt quis
    optio, fugiat ad!`,
  },
  {
    id: 4,
    name: "Sepatu 4",
    price: 2000000,
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
    consequuntur aperiam error ipsam nesciunt odio delectus soluta
    voluptatum corporis nam quos, cumque culpa, dolore deserunt quis
    optio, fugiat ad!`,
  },
];

const email = localStorage.getItem("email");
const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="bg-red-600 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start py-5">
        <div className="w-full md:w-full flex justify-center flex-wrap order-2 md:order-1">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>

        <div className="w-full order-1 md:order-2 overflow-scroll text-xs">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
