function listItem() {
  let ctrl = this;
  ctrl.openForm = ( ) => {
    ctrl.open =! ctrl.open;
  }
};

angular
  .module('todoApp')
  .component('listItem', {
    template: `
    <li data-ng-animate="'animate'">
    <label >
            <span ng-class="{ completed: $ctrl.item.completed }"><a class="complete" ng-if="!$ctrl.item.completed" href="#" data-ng-click="$ctrl.item.completed = !$ctrl.item.completed" >Complete</a>
    {{ $ctrl.item.text }} </span>
    <!-- bonus: need to fix edit so it does not complete to do -->
    <div ng-if="$ctrl.open">
    <input ng-model="edit" placeholder="edit task">
    </input>
    <button ng-click="$ctrl.edit({edit: edit, item: $ctrl.item})"> Submit </button>
    </div>
    
    <a class="edit" ng-click="$ctrl.openForm()">Edit</a>
    <button class="remove-btn" ng-click="$ctrl.removeTask({item: $ctrl.item})">X</button>

        </label>
    </li>
`,
    controller: listItem,
    bindings: {
        item: "<",
        removeTask: "&",
        edit: "&",
    }  
  });
  
