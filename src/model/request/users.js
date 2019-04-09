import serviceGet from '../service/index';
import endpointGetUsers from '../endpoint/users';
import responseUsers from '../response/users';

const requestEndpointGetUsers = async (users) => {
    const response = await serviceGet(
        endpointGetUsers(users))
        return await responseUsers(response)
}

export default requestEndpointGetUsers;