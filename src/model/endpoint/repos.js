import  urlUsers  from './index';

const endpointRepos = urlUsers;

const endpointGetListRepos = user =>
  `${endpointRepos}/${user}/repos`;
  
export default endpointGetListRepos;
