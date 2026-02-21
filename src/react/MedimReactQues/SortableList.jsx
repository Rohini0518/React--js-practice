import React, { useState, useCallback } from 'react';
import "../../css/mediumReact/SortableList.css"; 

const SortableList = () => {
 
  return (
    <div className="sortable-list-container">
      <h3>Sortable List</h3>
      <input
        type="text"
        placeholder="Add a new item"
      />
      <button>Add Item</button>

      <div>
        <button>Sort Ascending</button>
        <button>Sort Descending</button>
      </div>
     <div className="list-items">
     </div>
    </div>
  );
};

export default SortableList;
