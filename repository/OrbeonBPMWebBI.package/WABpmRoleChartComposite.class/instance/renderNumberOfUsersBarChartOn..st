other
renderNumberOfUsersBarChartOn: html

	report := BpmFrontOfficeRole reportNumberOfUsersDistributionFor: self getApplicationName.
	report name: ('Users Distribution per Role (', report getTotalValue printString, ')');
		description: 'Scope: Application Role [', self getApplicationName,']';
		seriesName: 'Users';
		xTitle: 'Role Name';
		yTitle: 'Number of Users'. 

	self renderBarChartDistribution: report on: html