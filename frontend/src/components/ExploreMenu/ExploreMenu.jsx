import React, { useRef, useState, useEffect } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ExploreMenu = ({ category, setCategory }) => {
  const scrollRef = useRef();
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const checkScroll = () => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    setShowScrollButtons(scrollEl.scrollWidth > scrollEl.clientWidth);
  };

  const scroll = (direction) => {
    const scrollAmount = 150;
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= scrollAmount;
    } else {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      <div className="scroll-wrapper">
        {showScrollButtons && (
          <button className="scroll-btn left" onClick={() => scroll('left')}>
            <FaChevronLeft />
          </button>
        )}

        <div className="explore-menu-list" ref={scrollRef}>
          {menu_list.map((item, index) => (
            <div
              key={index}
              className='explore-menu-list-item'
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>

        {showScrollButtons && (
          <button className="scroll-btn right" onClick={() => scroll('right')}>
            <FaChevronRight />
          </button>
        )}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;










// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({category,setCategory}) => {

//   return (
//     <div className='explore-menu' id='explore-menu'>
//         <h1>Explore our menu</h1>
//         <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satistfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
//         <div className="explore-menu-list">
//           {menu_list.map((item,index)=>{
//             return (
//                 <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
//                 <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
//                     <p>{item.menu_name}</p>
//                 </div>
//             )
//           })}
//         </div>
//         <hr />
//     </div>
//   )
// }

// export default ExploreMenu