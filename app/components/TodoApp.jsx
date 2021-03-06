var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SerachTodo = require('SearchTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    showCompleted: false;
    serachText: " ";
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Leave mail on porch'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ]
    };
  },

  handleSearch: function(showCompleted, serachText){
    this.setState({
      showCompleted: showCompleted,
      serachText: serachText
    });
  },

  handleNewTodo: function(text){
    alert("new todo: " +text);
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <SerachTodo onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleNewTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
