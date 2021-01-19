# d2l-program-outcomes-picker

[![CI][CI Badge]][CI Workflows]

A Lit Element webcomponent for importing learning outcomes from programs.

## Usage

### Attributes

`registry-id`: The registryId of the course or program to which the outcomes will be imported  
`programs`: A JSON-encoded array of objects with `name` and `registryId` properties, corresponding to the name and registryId of every program that can be imported from  
`lores-endpoint`: The endpoint of the Lores service  
`outcome-term` *(Optional)*: Which lang term to use for outcomes. Valid values are `competencies`, `expectations`, `objectives`, `outcomes`, and `standards`. Default is `standards`  
`no-header` *(Boolean)*: If included, the header (title and close button) will not be rendered.

### Events

The component emits the following events:

`d2l-program-outcomes-picker-cancel`: The close or cancel button was clicked.  
`d2l-program-outcomes-picker-import`: The import was completed successfully. The `detail` property of the event contains an object with the following format:  
```
{
	ObjectivesWithSource: [
		{
			id: <ObjectiveId>,
			source: {
				source_id: <SourceId>,
				source_type: <SourceType>
			}
		},
		...
	],
	ObjectiveTree: [
		{
			id: <ObjectiveId>,
			children: <ObjectiveTree>
		},
		...
	]
}
```

# d2l-asn-outcomes-picker

A Lit Element webcomponent for importing learning outcomes from ASN.

## Usage

### Attributes

`registry-id`: The registryId of the course or program to which the outcomes will be imported  
`lores-endpoint`: The endpoint of the Lores service  
`outcome-term` *(Optional)*: Which lang term to use for outcomes. Valid values are `competencies`, `expectations`, `objectives`, `outcomes`, and `standards`. Default is `standards`  
`no-header` *(Boolean)*: If included, the header (title and close button) will not be rendered.  
`org-unit-id`: The orgUnitId of the course

### Events

The component emits the following events:

`d2l-asn-outcomes-picker-cancel`: The close or cancel button was clicked.  
`d2l-asn-outcomes-picker-import`: The import was completed successfully. Same format as `d2l-program-outcomes-picker-import` above.

<!-- links -->
[CI Badge]: https://github.com/Brightspace/program-outcomes-picker/workflows/CI/badge.svg?branch=master
[CI Workflows]: https://github.com/Brightspace/program-outcomes-picker/actions?query=workflow%3ACI+branch%3Amaster
