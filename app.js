// TODO
// let GroceryListItems = ['milk','food','more food'].map((item) => <li>{item}</li>);

// var GroceryList = (props) => (
//   <ul> 
//   {GroceryListItems}
//   </ul>
// );

var App = () => (
  <div>
  <h2>Grocery List:</h2>
    <GroceryList groceryItems={['Milk','food','stuff']}/> 
    
  </div>
)

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false,
      over: false
    };
  }
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  
  onMouse() {
    this.setState({
      over: !this.state.over
    })
  }
  
  render(){
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      background: this.state.over ? 'yellow' : 'none'
    };
    return(
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver = {this.onMouse.bind(this)}>{this.props.groceryItems}</li>
    );
  }

}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item => 
      <GroceryListItem groceryItems={item} />
    )}
  </ul>
);

ReactDOM.render(<App />, document.getElementById("app"));