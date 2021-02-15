import { useState, useEffect } from "react";
import { getEmployeeList } from "./utils/API"


// Setting the Search state for employees

class Search extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    error: "",
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployeeList(20, "US")
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
