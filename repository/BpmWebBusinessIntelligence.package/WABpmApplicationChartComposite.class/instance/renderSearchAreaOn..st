search area
renderSearchAreaOn: html

	super renderSearchAreaOn: html.

	html form with: [
		html fieldSet with: [
			html legend class: 'top-search-legend'; 
				with: ('Draw Chart' translateFor: self session user).
			self renderApplicationComboOn: html. 
			self renderDistributionComboOn: html.
			self renderChartTypeComboOn: html.
			self renderShowChartButtonOn: html.
		].
	].

	self renderSaveChartIconOn: html.