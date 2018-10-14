// actions
export const ACTIVE_ASSIGNMENT = 'ACTIVE_ASSIGNMENT'

export function addActiveAssignment(activeAssignment)
{
	return { type: ACTIVE_ASSIGNMENT, activeAssignment }
}