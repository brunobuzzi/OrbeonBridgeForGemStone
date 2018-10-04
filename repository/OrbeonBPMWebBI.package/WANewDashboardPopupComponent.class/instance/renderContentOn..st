other
renderContentOn: html

	html div "class: 'jquery-dialog-yes-no';" with: [
		html form 
			with: [
				html fieldSet with: [
					html legend: ('New Dashboard' translateFor: self session user).
					html label for: 'dashboardName'; with: ('Dashboard Name' translateFor: self session user).
					html textInput id: 'dashboardName'; callback: [:value | self addValue: value named: 'dashboardName']; class: 'display-block'. 
					html label for: 'description'; with: ('Description' translateFor: self session user).
					html textArea id: 'description'; callback: [:value | self addValue: value named: 'description']; class: 'display-block'.
					self renderIsActiveCheckboxOn: html.
					self renderIsPrivateCheckboxOn: html.
				].
				html fieldSet with: [
					html legend: ('Recursion Options' translateFor: self session user).
					self renderRecursionComboOn: html.
					self renderHasFixedDatesCheckboxOn: html.
					self renderModifyStartDateOnUpdateCheckboxOn: html.
				].
				html button 
					callback: [self createDashboard];
					with: ('Create' translateFor: self session user).
			]
	]