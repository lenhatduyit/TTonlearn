import React, { useState } from "react";
import "../Css/product.css";

const Sidebar = () => {
  // State to track the checked checkboxes
  const [checkedCategories, setCheckedCategories] = useState({
    bakedGoods: false,
    coffee: false,
  });
  const [checkedDietary, setCheckedDietary] = useState({
    ecoFriendly: false,
    glutenFree: false,
  });
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredCategories, setFilteredCategories] = useState(Object.keys(checkedCategories));

  const handleCategoryChange = (event) => {
    setCheckedCategories({
      ...checkedCategories,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDietaryChange = (event) => {
    setCheckedDietary({
      ...checkedDietary,
      [event.target.name]: event.target.checked,
    });
  };

  // Hàm ẩn/hiện danh sách bộ lọc
  const toggleFilterVisibility = (event) => {
    const ul = event.target.nextElementSibling;
    if (ul) {
      ul.style.display = ul.style.display === "none" || ul.style.display === "" ? "block" : "none";
    } else {
      console.error("Cannot find the next sibling element for toggling visibility.");
    }
  };

  // Clear all checkboxes
  const clearAllFilters = () => {
    setCheckedCategories({
      bakedGoods: false,
      coffee: false,
    });
    setCheckedDietary({
      ecoFriendly: false,
      glutenFree: false,
    });
    setSearchQuery(""); // Clear search query
    setFilteredCategories(Object.keys(checkedCategories)); // Reset filtered categories
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle Enter key press to filter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      filterCategories(searchQuery);
    }
  };

  // Filter categories based on search query
  const filterCategories = (query) => {
    const filtered = Object.keys(checkedCategories).filter((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <aside className="sidebar">
      {/* <div className="search-container">
        <i className="fas fa-search icon-search"></i>
        <input
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="clear-filters">
        <a href="#" className="clear-filters" onClick={clearAllFilters}>
          Clear all
        </a>
      </div>
      <div className="filter">
        <h3 onClick={toggleFilterVisibility}>
          Categories <i className="fas fa-chevron-down icon-arr"></i>
        </h3>
        <ul>
          {filteredCategories.map((category) => (
            <li key={category}>
              <label>
                <input
                  type="checkbox"
                  name={category}
                  checked={checkedCategories[category]}
                  onChange={handleCategoryChange}
                />{" "}
                {category.charAt(0).toUpperCase() + category.slice(1)} (8)
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter">
        <h3 onClick={toggleFilterVisibility}>
          Dietary <i className="fas fa-chevron-down icon-arr"></i>
        </h3>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                name="ecoFriendly"
                checked={checkedDietary.ecoFriendly}
                onChange={handleDietaryChange}
              />{" "}
              Eco Friendly (2)
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="glutenFree"
                checked={checkedDietary.glutenFree}
                onChange={handleDietaryChange}
              />{" "}
              Gluten Free (4)
            </label>
          </li>
        </ul>
      </div> */}
    </aside>
  );
};

export default Sidebar;
