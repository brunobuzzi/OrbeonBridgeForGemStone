other
renderEditDashboardIconOn: html
   | jQueryId |

	jQueryId := self renderJQueryPopupCompositeOn: html width: 350 height: 395 composite: WAExistingDashboardPopupComponent title: 'Edit Dashboard' domainObject: selectedLateralItem
	 arguments: #().

	html div class: 'float-right margin-left-5px'; with: [
		html anchor 
					class: 'cursor-pointer';
					onClick: (html jQuery id: jQueryId) dialog open;
						with: [html image url: (SEWAFIconLibrary / #actionsdocumentedit24Png); 
												title: ('Edit Dashboard' translateIn: self session); 
												altText: ('Edit Dashboard' translateIn: self session) ]
	]