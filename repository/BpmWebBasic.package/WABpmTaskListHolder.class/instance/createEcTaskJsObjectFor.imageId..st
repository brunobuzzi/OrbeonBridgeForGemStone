render transitions
createEcTaskJsObjectFor: elementId imageId: imageId

	^JSExpandCollapseElement new
		ecElementId: elementId;
		expandStyleOptions: (Dictionary new at: 'height' put: '60%'; yourself);
		collapseStyleOptions: (Dictionary new at: 'height' put: self defaultCollapseStyle; yourself);
		storageName: elementId;
		imageId: imageId;
		imageTitle: ('Expand/Collapse' translateIn: self session);
		expandIcon: '../files/SEWAFIconLibrary/arrowsdowncircular16Png';
		collapseIcon: '../files/SEWAFIconLibrary/arrowsupcircular16Png';
		yourself