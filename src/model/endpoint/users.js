import  urlUsers  from './index';

const endpointUsers = urlUsers;

const endpointGetUsers= (user) =>
  `${endpointUsers}/${user}`;
  
export default endpointGetUsers;
