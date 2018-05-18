other
renderProcessDefinitionDistributionPieChartOn: html

	report := BpmProcessDefinition reportProcessDefinitionsQuantityDistribution.	
	report name: ('Distribution of BPM Process Definitions (', report getTotalValue printString, ')');
		description: 'Scope: Global';
		seriesName: 'Definitions';
		xTitle: 'Application Name';
		yTitle: 'Process Definitions'. 

	self renderPieChartDistribution: report on: html.