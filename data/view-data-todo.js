const a = {
	perspective: {
		levels: [["Sectors", "Subsectors", "Countries"], ["Sectors", "Countries"]],
		countryColorOptions: ["By impact efficiency", "By corruptness"],
		__segmentsToInclude: [],
		__segmentsToExclude: [],
	},
	overview: {
		root: {
			sizeValue: null,
			hue: 0,
			title: "ROOT",
			// eg. sector->subsector->country, country.sizeValue =
			// 	SectorAid{recipient = country, sector = subsector}.amount
			subnodes: [{ //root 1: who_sanittot 	*epi_watsup : "Access to Drinking Water"  - 39
				sizeValue: 13947.39613,
				hue: 0.4,
				title: "Health", // from pdf
				subnodes: [{
					sizeValue: 13947.39613,
					hue: 0.6,
					title: "Total population using basic sanitation services (%)", // from pdf
					subnodes: [],
				}, {
					sizeValue: 13947.39613,
					hue: 0.11,
					title: "Water and Sanitation", // from oecd
					subnodes: [{
						sizeValue: 2599.345,
						hue: 0.11,
						title: "Afghanistan",
						subnodes: [],
					}, {
						sizeValue: 3230.661,
						hue: 0.11,
						title: "Yemen",
						subnodes: [],
					}, {
						sizeValue: 8117.391,
						hue: 0.11,
						title: "Zambia",
						subnodes: [],
					}],
				}],
			}, { // root 2: bl_asyf , obs. multiple categpries, update: bl_asyfm
				sizeValue: 20225.56,
				hue: 0.5,
				title: "Education",
				subnodes: [{
					sizeValue: 20225.56,
					hue: 0.7,
					title: "Average Schooling Years, Female and Male",
					subnodes: [],
				}, {
					sizeValue: 20225.56,
					hue: 0.12,
					title: "Education total", // from oecd
					subnodes: [{
						sizeValue: 12719.19,
						hue: 0.12,
						title: "Afghanistan",
						subnodes: [],
					}, {
						sizeValue: 4101.971,
						hue: 0.12,
						title: "Yemen",
						subnodes: [],
					}, {
						sizeValue: 3404.393,
						hue: 0.12,
						title: "Zambia",
						subnodes: [],
					}],
				}],
			}, { // root 3: *wdi_litrad , wdi_lifexpf 
				sizeValue: null,
				hue: 0.6,
				title: "Afghanistan",
				subnodes: [{
					sizeValue: null,
					hue: 0.8,
					title: "Life expectancy at birth, female (years)",
					subnodes: [],
				}, {
					sizeValue: null,
					hue: 0.13,
					title: "Mosquitooos",
					subnodes: [{
						sizeValue: 34,
						hue: 0.13,
						title: "Afghanistan",
						subnodes: [],
					}, {
						sizeValue: 57,
						hue: 0.13,
						title: "Yemen",
						subnodes: [],
					}, {
						sizeValue: 38,
						hue: 0.13,
						title: "Zambia",
						subnodes: [],
					}],
				}],
			}, { // root 4: wdi_acel
				sizeValue: null,
				hue: 0.7,
				title: "Energy and Infrastructure",
				subnodes: [{
					sizeValue: null,
					hue: 0.9,
					title: "Access to electricity (% of population)",
					subnodes: [],
				}, {
					sizeValue: null,
					hue: 0.14,
					title: "Mosquitooos",
					subnodes: [{
						sizeValue: 34,
						hue: 0.14,
						title: "Afghanistan",
						subnodes: [],
					}, {
						sizeValue: 57,
						hue: 0.14,
						title: "Yemen",
						subnodes: [],
					}, {
						sizeValue: 38,
						hue: 0.14,
						title: "Zambia",
						subnodes: [],
					}],
				}],
			}, { //root 5: wdi_internet
				sizeValue: null,
				hue: 0.8,
				title: "Energy and Infrastructure",
				subnodes: [{
					sizeValue: null,
					hue: 0.10,
					title: "Individuals using the Internet (% of population)",
					subnodes: [],
				}, {
					sizeValue: null,
					hue: 0.15,
					title: "Mosquitooos",
					subnodes: [{
						sizeValue: 34,
						hue: 0.15,
						title: "Afghanistan",
						subnodes: [],
					}, {
						sizeValue: 57,
						hue: 0.15,
						title: "Yemen",
						subnodes: [],
					}, {
						sizeValue: 38,
						hue: 0.15,
						title: "Zambia",
						subnodes: [],
					}],
				}],
			}],
		}
	},
	table: {
		list: [{ // money amount: 2599.345 
			country: "Afghanistan",
			sector: "Health - Water and Sanitation",
			goal: "Total population using basic sanitation services (%)",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.2,
		}, { // amount = 3230.661
			country: "Yemen",
			sector: "Health - Water and Sanitation",
			goal: "Total population using basic sanitation services (%)",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, { // 8117.391
			country: "Zambia",
			sector: "Health - Water and Sanitation",
			goal: "Total population using basic sanitation services (%)",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Afghanistan",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Yemen",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Zambia",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Afghanistan",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Yemen",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Zambia",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Afghanistan",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Yemen",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Zambia",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Afghanistan",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Yemen",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}, {
			country: "Zambia",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}],
	},
}



const fs = require('fs')


fs.writeFileSync('./view-data-example.json', JSON.stringify(a), 'utf-8')




