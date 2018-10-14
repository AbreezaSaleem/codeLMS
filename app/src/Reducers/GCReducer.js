import { ACTIVE_ASSIGNMENT } from '../Actions/GCActions'

export const activeAssignment = (state = false, action) => // state should NOT be false by default :(
{
	console.log(action.type)
	switch (action.type) 
	{
		case ACTIVE_ASSIGNMENT:
			return Object.assign({}, state, 
			{
				activeAssignment: action.activeAssignment
			})
		default:
			return state;
	}
}