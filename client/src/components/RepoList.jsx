import React from 'react';
import RepoListEntry from './components';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
  <div className="repo-list">
   <table>
      <thead>
        <tr>
          <th>Owner</th>
          <th>Repository</th>
          <th>Description</th>
          <th>Created</th>
          <th>Last Updated</th>
          <th>Size</th>
          <th>Forks</th>
          <th>Issues</th>
          <th>Followers</th>
        </tr>
      </thead>
    props.repos.map(repo => <RepoListEntry key= {repo.id} repo={repo}/>
   </table>
  </div>
)

export default RepoList;