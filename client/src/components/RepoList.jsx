import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div className="repo-list" style={{margin:'2em', width:'100%'}}>
   <table>
      <thead>
        <tr>
          <th>Owner</th>
          <th>Repository</th>
          <th>Created</th>
          <th>Last Updated</th>
          <th>Size</th>
          <th>Forks</th>
          <th>Issues</th>
          <th>Followers</th>
          <th>Description</th>
        </tr>
      </thead>
    <tbody>
    {props.repos.map(repo => <RepoListEntry key= {repo.id} repo={repo}/>)}
    </tbody>
   </table>
  </div>
)

export default RepoList;