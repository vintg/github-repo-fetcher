import React from 'react';
import RepoListEntry from './components';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
  <div className="repo-list">
    props.repos.map(repo => <RepoListEntry key= {repo.id} repo={repo}/>
  </div>
)

export default RepoList;