
const resultsPerQuery = 25;

export const graphQLQuery = async (token, query) => {

}

export const fetchAllProducts = async (token, resultsIndex) => {
	const query = {
		// "operationName": "Query",
		"query": `query {
			paginationResolver(input: { limit: ${resultsPerQuery}, offset: ${resultsPerQuery * resultsIndex} }) {
				id
				name
			  }
			}`,
		// "variables": {}
	};
	return graphQLQuery(token, query).then(v => {
		// console.log(v)
		return {
			type: resultsIndex == 0 ? "init_fetch" : "fetch_more",
			data: { allProducts: { ...v.paginationResolver }, resultsIndex: resultsIndex + resultsPerQuery }
		}
	}).catch(err => console.log(err));
}

export const initProductState = {
	allProducts: {
		products: {},
		resultsIndex: 0
	},
}

export const productReducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case "init_fetch": {
			return { ...state, ...action.data };
		}
		case "fetch_more": {
			return { ...state, ...action.data };
		}
	}
}
