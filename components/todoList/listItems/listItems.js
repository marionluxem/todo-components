function listItems() {
    let ctrl = this;

    this.items = [
        {
          text:'Walk the Dog',
          completed: false
        },
        {
          text:'Go to the store',
          completed: true
        },
        {
          text:'Get gas',
          completed: false
        },
        {
          text:'Wash the car',
          completed: false
        }
      ];

      ctrl.getItemIndex = function(item){
        for (let index = 0; index < ctrl.items.length; index++) {
            const element = ctrl.items[index];

            if ( element.text === item.text)
             return index;
            
        }
      }

      ctrl.remove = function(item) {

        let index = ctrl.getItemIndex(item);

        ctrl.items.splice(index, 1);
      };

      ctrl.edit = function(edit, item) {
        let index = ctrl.getItemIndex(item);

        ctrl.items[index].text = edit;

      }
      // | filter:search:strict
};

angular
  .module('todoApp')
  .component('listItems',     
    {
        template: `
            <h2> Todo </h2>
            <ol>
                <list-item
                ng-repeat="item in $ctrl.items"
                item = "item"
                remove-task = "$ctrl.remove(item)"
                edit="$ctrl.edit(edit, item)"
                ></list-item>
            </ol>
        `,
        controller: listItems
    }
  );