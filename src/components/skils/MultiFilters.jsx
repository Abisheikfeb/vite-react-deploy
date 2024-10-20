import React, { useEffect, useState } from "react"
import { items } from "./items"
import './Menu.css'


export default function MultiFilters() {
  
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["LANGUAGES", "FRAME WORK", "VERSION CONTROL", "DATABASE",];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([ selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    
    <div>
      <div id="services" className="SKILS">
        <h1>MY SKILS</h1>
      </div>
      <div className='container'>
        {filters.map((category, idx) => (
          
          < button
            onClick={() => handleFilterButtonClick(category)}
            className={`buttons ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
            >
            {category}
           
          </button>
         
        ))}
      </div>
    
     
      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <img src={item.images} alt="" className="image" />
            <p className="category">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="para">
       
      
      <div className="pp">
        <h1 className="heading">Technical skills</h1>
        <p > &#9733;These include knowledge of programming languages</p>
        <p > &#9733;Developers often use Git, an open-source application that allows to program code</p>
        <p > &#9733; software development landscape is constantly changing with new technologies</p>
      </div>
      </div>
    </div>
  )}
