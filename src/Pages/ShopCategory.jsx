import { useContext } from 'react';
import PropTypes from 'prop-types';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Commponents/Assets/dropdown_icon.png';
import Item from '../Commponents/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.bannner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" style={{ height: '50px' }} />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          console.log(props.category, item.category)
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div> 
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
};

ShopCategory.propTypes = {
  bannner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default ShopCategory;
