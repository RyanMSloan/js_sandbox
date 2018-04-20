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
      // {id: 0, name: 'Steak Dinner', calories: 1300},
      // {id: 1, name: 'Bacon Cheese Burger w/ Fries', calories: 1800},
      // {id: 2, name: 'Ice Cream', calories: 800}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Return - Makes public
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, calories) {
      // Make new Id
      let newId;
      if(data.items.length > 0) {
        newId = data.items.length;
      } else {
        newId = 0;
      }
      // Calories to number
      calories = parseInt(calories);
      // Create new item
      newItem = new Item(newId, name, calories);
      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id) {
      let found = null;
      data.items.forEach(item => {
        if(item.id === id) {
          found = item;
        }
      });
      // set found to current in data
      data.currentItem = found;
      // return for ui population
      return found;
    },
    getCurrentItem: function() {
      return data.currentItem;
    },
    getTotalCalories: function() {
      let totalCalories = 0;
      data.items.forEach(item => {
        totalCalories += item.calories;
      });
      data.totalCalories = totalCalories;
      return data.totalCalories;
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
    itemList: '#item-list',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCaloies: '.total-calories',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    cancelBtn: '.cancel-btn',
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
      document.querySelector(uiElements.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(uiElements.itemNameInput).value,
        calories: document.querySelector(uiElements.itemCaloriesInput).value
      }
    },
    addListItem: function(item) {
      // Show item list if not currently shown 
      if(document.querySelector(uiElements.itemList).style.display === 'none') {
        document.querySelector(uiElements.itemList).style.display = 'block'
      }
      // Create li element
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `
        <strong>${item.name}: </strong><em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      `;
      // Insert item
      document.querySelector(uiElements.itemList).insertAdjacentElement('beforeend', li);
    },
    showTotalCalories: function(calories) {
      document.querySelector(uiElements.totalCaloies).textContent = calories;
    },
    clearInputFields: function() {
      document.querySelector(uiElements.itemNameInput).value = '';
      document.querySelector(uiElements.itemCaloriesInput).value = '';
    },
    showEditState: function() {
      document.querySelector(uiElements.updateBtn).style.display = 'inline';
      document.querySelector(uiElements.deleteBtn).style.display = 'inline';
      document.querySelector(uiElements.cancelBtn).style.display = 'inline';
      document.querySelector(uiElements.addBtn).style.display = 'none';
    },
    hideEditState: function() {
      // Hide/clear Edit state
      UICtrl.clearInputFields();
      document.querySelector(uiElements.updateBtn).style.display = 'none';
      document.querySelector(uiElements.deleteBtn).style.display = 'none';
      document.querySelector(uiElements.cancelBtn).style.display = 'none';
      document.querySelector(uiElements.addBtn).style.display = 'inline';
    },
    setItemToForm: function() {
      document.querySelector(uiElements.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(uiElements.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
    },
    getUIElements: function() {
      return uiElements;
    }
  }
})();



/*********************************************
 * App Controller
 * 
 * Discription - 
 ********************************************/
const App = (function(ItemCtrl, UICtrl) {
  // Load event listeners
  const loadEventListeners = function() {
    const uiElements = UICtrl.getUIElements();
    // Add item btn listener
    document.querySelector(uiElements.addBtn).addEventListener('click', itemAddSubmit);
    // Edit item btn listener
    document.querySelector(uiElements.itemList).addEventListener('click', itemEditClick);
    // Update item btn listener
    document.querySelector(uiElements.updateBtn).addEventListener('click', itemUpdateSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e) {
    // Get form innputs from ui controller
    const input = UICtrl.getItemInput();
    // Validate input values
    if(input.name !== '' && input.calories > 0) {
      // Add new item
      const newItem = ItemCtrl.addItem(input.name, input.calories );
      // Add new item to UI list
      UICtrl.addListItem(newItem);
      
      // Total Calories
      const totalCaloies = ItemCtrl.getTotalCalories();
      // Add total to UI
      UICtrl.showTotalCalories(totalCaloies);

      // Clear input fields
      UICtrl.clearInputFields();
    } else {
      console.log('ERROR: input error handing not implimented');
    }

    // keeps page from reloading after submit
    e.preventDefault();
  }

  // Update item submit
  const itemEditClick = function(e) {
    if(e.target.classList.contains('edit-item')) {
      // get list item id (item-0, item-1)
      const itemClassId = e.target.parentNode.parentNode.id;
      const itemClassIdArr = itemClassId.split('-');
      const itemId = parseInt(itemClassIdArr[1]);
      
      // get item by id
      const itemToEdit = ItemCtrl.getItemById(itemId);
      // set item to form inputs
      UICtrl.setItemToForm();
      // Show edit state
      UICtrl.showEditState();

      //console.log(itemToEdit);
    }

    e.preventDefault();
  }

  const itemUpdateSubmit = function(e) {
    console.log('Update');

    e.preventDefault();
  }

  // Return - Makes public
  return {
    init: function() {
      // init state - edit hidden
      UICtrl.hideEditState();

      // Fetch items from Data Controller
      const items = ItemCtrl.getItems();
      if(items.length === 0) {
        // hide list if items list empty
        document.querySelector(UICtrl.getUIElements().itemList).style.display = 'none';
      } else {
        // Pass items result to UI Controller
        UICtrl.populateItemList(items);
        
        // Total Calories
        const totalCaloies = ItemCtrl.getTotalCalories();
        // Add total to UI
        UICtrl.showTotalCalories(totalCaloies);
      }
      
      // Load event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);



// Init ////////////////////////////////////////
App.init();