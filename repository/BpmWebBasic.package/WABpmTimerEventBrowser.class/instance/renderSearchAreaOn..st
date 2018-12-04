search area
renderSearchAreaOn: html

	html form with: [ 
		html fieldSet with: [
			html legend class: 'top-search-legend'; with: ('Search Task' translateFor: self session user).

			html div class: 'top-search-div width-120px'; with: [self renderTimerTypeComboOn: html].
	"		html div class: 'top-search-div'; with: [self renderApplicationComboOn: html].
			html div class: 'top-search-div'; with: [self renderProcessTypeComboOn: html]."

			self renderSearchSubmitButtonOn: html.
		].
	].