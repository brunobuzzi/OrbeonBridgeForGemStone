search area
renderSwitchWindowOn: html

	html div id: 'top-search-switch-icon'; with: [
		html anchor 
			callback: [searchPanelName := (searchPanelName = #search) ifTrue: [#categories] ifFalse: [#search]];
			with: [
				html div with: [
					html image url: (SEWAFIconLibrary / #ezswitchuser16Png); 
						altText: ('Switch Window' translateIn: self session); 
						title: ('Switch Window' translateIn: self session).
				].
		].
	].