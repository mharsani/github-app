import serviceGet from '../service/index';
import endpointGetListStarred from '../endpoint/starred';
import responseStarred from '../response/starred';

const requestEndpointGetStarred = async (user) => {
    const response = await serviceGet(
    endpointGetListStarred(user))
    return await responseStarred(response)
}

export default requestEndpointGetStarred;
