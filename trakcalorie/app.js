// app.js

/*********************************************
 * Storage Controller
 * 
 * Discription - 
 ********************************************/
const StorageCtrl = (function() {

})();



/*********************************************
 * Item Controller
 * 
 * Discription - 
 ********************************************/
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1300},
      {id: 1, name: 'Bacon Cheese Burger w/ Fries', calories: 1800},
      {id: 2, name: 'Ice Cream', calories: 800}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Return - Makes public
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  }
})();



/*********************************************
 * UI Controller
 * 
 * Discription - 
 ********************************************/
const UICtrl = (function() {
  // Const - vars
  const uiElements = {
    itemList: 'item-list'
  }

  // Return - Makes public
  return {
    populateItemList: function(items) {
      let html = '';
      items.forEach(item => {
        html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong><em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
          </li>
        `;
      });
      document.getElementById(uiElements.itemList).innerHTML = html;
    }
  }
})();



/*********************************************
 * App Controller
 * 
 * Discription - 
 ********************************************/
const App = (function(ItemCtrl, UICtrl) {
  
  // Return - Makes public
  return {
    init: function() {
      // Fetch items from Data Controller
      const items = ItemCtrl.getItems();
     
      // Pass items result to UI Controller
      UICtrl.populateItemList(items);
      
    }
  }

})(ItemCtrl, UICtrl);



// Init ////////////////////////////////////////
App.init();