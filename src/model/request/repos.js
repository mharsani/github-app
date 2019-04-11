import serviceGet from "../service/index";
import endpointGetListRepos from "../endpoint/repos";
import responseRepos from "../response/repos";

const requestEndpointGetRepos = async user => {
  const response = await serviceGet(endpointGetListRepos(user));
  return responseRepos(response);
};

export default requestEndpointGetRepos;
