subclass responsibility
renderItemDescriptionTitleOn: html

	html output: selectedLateralItem reportName.

	self renderDeleteChartIconOn: html.

	self renderAddToExistingDashboardIconOn: html.

	self renderAddToNewDashboardIconOn: html.