

// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import Breadcrum from "../Commponents/Breadcrum.jsx/Breadcrum";
// import { ShopContext } from "../Context/ShopContext"
// import ProductDisplay from "../Commponents/ProductDisplay.jsx/ProductDisplay";
// import DescriptionBox from "../Commponents/DescriptionBox/DescriptionBox";
// import RelatedProducts from "../Commponents/RelatedProducts/RelatedProducts";

// const Product = () => {
//   const { all_product } = useContext(ShopContext);
//   const { productId } = useParams();
//   const product = all_product.find((e) => e.id === Number(productId));

//   return (
//     <div>
//       <Breadcrum product={product} />
//       <ProductDisplay product={product} />
//       <DescriptionBox />
//       <RelatedProducts/>
//     </div>
//   );
// };

// export default Product;



import { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Commponents/Breadcrum.jsx/Breadcrum";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Commponents/ProductDisplay.jsx/ProductDisplay";
import DescriptionBox from "../Commponents/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Commponents/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={{ ...product, id: product.id.toString() }} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
