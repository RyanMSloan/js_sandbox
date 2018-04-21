// app.js

/*********************************************
 * Storage Controller
 * 
 * Discription - 
 ********************************************/
const StorageCtrl = (function() {

  // Public Methods
  return {
    storeItem: function(item) {
      let items = [];
      if(localStorage.getItem('items') === null) {
        items.push(item);
        // set to LS
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        // set to LS
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItems: function() {
      let items = [];
      if(localStorage.getItem('items') !== null) {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItem: function(updatedItem) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if(updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });
      // set back to LS
      localStorage.setItem('items', JSON.stringify(items));
    },
    removeItem: function(id) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if(id === item.id) {
          items.splice(index, 1);
        }
      });
      // set back to LS
      localStorage.setItem('items', JSON.stringify(items));
    },
    removeAllItems: function() {
      localStorage.removeItem('items');
    }
  }
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
    // items: [
    //   // {id: 0, name: 'Steak Dinner', calories: 1300},
    //   // {id: 1, name: 'Bacon Cheese Burger w/ Fries', calories: 1800},
    //   // {id: 2, name: 'Ice Cream', calories: 800}
    // ],
    items: StorageCtrl.getItems(),
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
    updateItem: function(name, calories) {
      calories = parseInt(calories); // cals to number
      let updatedItem = null;
      data.items.forEach(item => {
        if(item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          updatedItem = item;
        }
      });

      return updatedItem;
    },
    deleteItem: function(id) {
      // get all ids
      const ids = data.items.map(item => {
        return item.id;
      });
      // get index
      const index = ids.indexOf(id);
      // remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function() {
      data.items = [];
      data.currentItem = null;
      data.totalCalories = 0;
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
    clearBtn: '.clear-btn',
    itemList: '#item-list',
    listItems: '#item-list li',
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
    updateListItem: function(item) {
      let listItems = document.querySelectorAll(uiElements.listItems);
      // convert node list into array
      listItems = Array.from(listItems);
      // console.log(listItems);
      listItems.forEach(li => {
        const itemId = li.getAttribute('id');

        if(itemId === `item-${item.id}`) {
          document.querySelector(`#${itemId}`).innerHTML = `
            <strong>${item.name}: </strong><em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
          `;
        }
      });
    },
    deleteListItem: function(id) {
      const itemId = `#item-${id}`;
      document.querySelector(itemId).remove();
    },
    removeAllListItems: function() {
      // get node list of items
      let listItems = document.querySelectorAll(uiElements.listItems);
      // convert node list to array
      listItems = Array.from(listItems);

      listItems.forEach(item => {
        item.remove();
      });

      // // hide list border
      // document.querySelector(uiElements.itemList).style.display = 'none';
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
    hideList: function() {
      document.querySelector(uiElements.itemList).style.display = 'none';
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
const App = (function(ItemCtrl, StorageCtrl, UICtrl) {
  // Load event listeners
  const loadEventListeners = function() {
    const uiElements = UICtrl.getUIElements();
    // Disable enter key
    document.addEventListener('keypress', (e) => {
      if(e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    // Clear all btn listener
    document.querySelector(uiElements.clearBtn).addEventListener('click', clearAllItems);
    // Add item btn listener
    document.querySelector(uiElements.addBtn).addEventListener('click', itemAddSubmit);
    // Edit item btn listener
    document.querySelector(uiElements.itemList).addEventListener('click', itemEditClick);
    // Update item btn listener
    document.querySelector(uiElements.updateBtn).addEventListener('click', itemUpdateSubmit);
    // Delete item btn listener
    document.querySelector(uiElements.deleteBtn).addEventListener('click', itemDeleteSubmit);
    // Cancel and clear btn listener
    document.querySelector(uiElements.cancelBtn).addEventListener('click', cancel);
  }

  // Clear all data
  const clearAllItems = function(e) {
    // clear all items from data structure
    ItemCtrl.clearAllItems();
    // remove items from ui
    UICtrl.removeAllListItems();
    // Add total to UI
    UICtrl.showTotalCalories('0');
    // Remove all items from LS
    StorageCtrl.removeAllItems();
    // hide list
    UICtrl.hideList();
    // console.log('clearall');
    e.preventDefault();
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

      // Store in localstorage
      StorageCtrl.storeItem(newItem);

      // Clear input fields
      UICtrl.clearInputFields();
    } else {
      console.log('ERROR: input error handing not implimented');
    }

    // keeps page from reloading after submit
    e.preventDefault();
  }

  // Edit item - from edit state
  const itemEditClick = function(e) {
    if(e.target.classList.contains('edit-item')) {
      // get list item id (item-0, item-1)
      const itemClassId = e.target.parentNode.parentNode.id;
      const itemClassIdArr = itemClassId.split('-');
      const itemId = parseInt(itemClassIdArr[1]);
      
      // get item by id and set to data.currentItem
      //const itemToEdit = 
      ItemCtrl.getItemById(itemId);
      // set item to form inputs
      UICtrl.setItemToForm();
      // Show edit state
      UICtrl.showEditState();
    }

    e.preventDefault();
  }

  // Edit item submit
  const itemUpdateSubmit = function(e) {
    // get input vals
    const input = UICtrl.getItemInput();
    // update item in data structure
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    // Update UI with updated data
    UICtrl.updateListItem(updatedItem);

    // Total Calories
    const totalCaloies = ItemCtrl.getTotalCalories();
    // Add total to UI
    UICtrl.showTotalCalories(totalCaloies);

    // Update local storage
    StorageCtrl.updateItem(updatedItem);

    // clear inputs and hide edit state
    UICtrl.hideEditState();

    e.preventDefault();
  }

  // Delete item submit
  const itemDeleteSubmit = function(e) {
    // get current item
    const currentItem = ItemCtrl.getCurrentItem();

    // delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Total Calories
    const totalCaloies = ItemCtrl.getTotalCalories();
    // Add total to UI
    UICtrl.showTotalCalories(totalCaloies);

    // Delete item from local storage
    StorageCtrl.removeItem(currentItem.id);

    // clear inputs and hide edit state
    UICtrl.hideEditState();

    e.preventDefault();
  }

  // Cancel
  const cancel = function(e) {
    UICtrl.hideEditState();
    
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
        UICtrl.hideList();
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

})(ItemCtrl, StorageCtrl, UICtrl);



// Init ////////////////////////////////////////
App.init();