import React from 'react';
import history from './history/History'

import GradeComponentItemNumber from './GradeComponentItemNumber'

export default class AssignmentItem extends React.Component
{
	render()
	{
		var createGradeComponentItemNumber = function(item)
		{
			return <GradeComponentItemNumber GradeComponentName={item} />
		};

		var GradeComponentID="#" + this.props.Type;

		var PanelStyle=
		{
			margin:50
		}
		
		return (
			<div  style={PanelStyle} className="panel-group" role="tablist">
				<div className="panel panel-default">
					<div className="panel-heading" role="tab" id="collapseListGroupHeading1">
							<h4 className="panel-title">
								<a className="collapsed" data-toggle="collapse" href={GradeComponentID} aria-expanded="false" aria-controls="collapseListGroup1">{this.props.Type}</a>
							</h4>
						</div>
						<div id={this.props.Type} className="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
							<ul className="list-group">
									{this.props.subcomponents.map(createGradeComponentItemNumber)}
							</ul>
					</div>
				</div>
		</div>
		);
	}
}

