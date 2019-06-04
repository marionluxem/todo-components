function todoList() {

};

angular
  .module('todoApp')
  .component('todoList', {
      controller: todoList,
      template: `
      <section >
      <h1>To-Do List</h1>
      <p>A place to store the things you have to do!</p>

      <input type="search" data-ng-model="search.text" placeholder="Filter Your To Dos">

      <list-items></list-items>

      <form data-ng-submit="save()">
          <input type="text" data-ng-model="addTask" placeholder="Add Your To Do">
          <input type="hidden" data-ng-model="completed" value="">
          <input type="hidden" data-ng-model="index" value="">
          <input type="submit" value="Add" id="add-button">
      </form>
  </section>`
  });

  console.log('test');