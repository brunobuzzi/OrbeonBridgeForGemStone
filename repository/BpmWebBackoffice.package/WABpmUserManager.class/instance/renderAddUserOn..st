other
renderAddUserOn: html
   | jQueryId |

	jQueryId := self renderJQueryPopupCompositeOn: html width: 350 height: 250 composite: self defaultNewUserPopupComponent title: 'Create User' domainObject: nil arguments: #().

	html div class: 'float-right margin-right-5px margin-top-5px'; with: [
		html anchor 
					class: 'cursor-pointer';
					onClick: (html jQuery id: jQueryId) dialog open;
						with: [html image url: (SEWAFIconLibrary / #add24Png); 
												title: ('Add User' translateIn: self session); 
												altText: ('Add User' translateIn: self session) ]
	]