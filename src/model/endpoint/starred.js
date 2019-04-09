import  urlUsers  from './index';

const endpointRepoStarred = urlUsers;

const endpointGetListStarred = (user) =>
  `${endpointRepoStarred}/${user}/starred`;
  
export default endpointGetListStarred;
