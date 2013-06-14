function Todos(inItems) {
  this.items = inItems || [];
};

Todos.prototype = {
  filters: {
    active: function(inItem) {
      return !inItem.completed;
    },
    completed: function(inItem) {
      return inItem.completed;
    }
  },
  get items() {
    return this._items;
  },
  set items(inItems) {
    this._items = inItems;
    this.itemsChanged();
  },
  get filter() {
    return this._filter;
  },
  set filter(inFilter) {
    this._filter = inFilter;
    this.filterItems();
  },
  itemsChanged: function() {
    this.completedCount = this.items.filter(this.filters.completed).length;
    this.activeCount = this.items.length - this.completedCount;
    this.filterItems();
  },
  filterItems: function() {
    var fn = this.filters[this.filter];
    this.filtered = fn ? this.items.filter(fn) : this.items;
  },
  newItem: function(inTitle) {
    var title = String(inTitle).trim();
    if (title) {
      this.items.push({
        id: this.items.length,
        title: inTitle,
        completed: false
      });
      this.itemsChanged();
    }
  },
  destroyItem: function(inItem) {
    var i = this.items.indexOf(inItem);
    if (i >= 0) {
      this.items.splice(i, 1);
    }
    this.itemsChanged();
  },
  clearItems: function( ){
    this.items = this.items.filter(this.filters.active);
  }
};
