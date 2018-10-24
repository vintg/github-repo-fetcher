import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  retrieve(){
    $.get('/repos', success => {
      console.log(success);
      this.setState({repos: success});
    });
  }

  componentDidMount(){

  }

  search (term) {
    console.log(`username ${term} was searched`);
    $.post('/repos', {username: term});
    this.retrieve();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));