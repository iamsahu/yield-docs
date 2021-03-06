/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	docs: [
		"Introduction",
		{
			type: "doc",
			label: "Frequently Asked Questions",
			id: "faq",
		},
		{
			type: "doc",
			label: "Troubleshooting",
			id: "troubleshooting",
		},
		{
			type: "category",
			label: "Users",
			link: {
				type: "doc",
				id: "users/readme",
			},
			items: [
				"users/borrowing",
				"users/gas_costs",
				"users/lending",
				"users/liquidity",
			],
		},
		{
			type: "category",
			label: "Operations",
			items: [
				{
					type: "autogenerated",
					dirName: "operations",
				},
			],
		},
		{
			type: "category",
			label: "Developers",
			link: {
				type: "doc",
				id: "developers/README",
			},
			items: [
				"developers/smart_contracts_overview",
				"developers/governance",
				"developers/emergencies",
				"developers/addresses",
				{
					type: "category",
					label: "Smart Contracts",
					items: [
						{
							type: "autogenerated",
							dirName: "developers/contracts",
						},
					],
				},
			],
		},
	],
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
