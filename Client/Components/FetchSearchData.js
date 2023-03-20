import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { AtlasContext } from "../App";
import { graphQLQuery } from "../state/product";

const resultsPerQuery = 25;
export const FetchSearchData = ({ RenderComponent, title, term }) => {
  const [productData, setProductData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [errors, setErrors] = React.useState([]);
  const [queryOffset, setQueryOffset] = React.useState(0);
  const token = useContext(AtlasContext);
  term = term.replace(/(\r\n|\n|\r)/gm, "");

  React.useEffect(() => {
    // console.log(term)
    const fetchData = async () => {
      const query = {
        query: `query{
          searchProducts(input:{term: "${term}", limit: ${resultsPerQuery}, offset: ${queryOffset}}){
              _id
              id,
              brand,
              name,
              price,
              price_sign,
              currency,
              image_link,
              product_link,
              website_link,
              description,
              categories,
              product_type,
              tag_list,
              created_at,
              updated_at,
              product_api_url,
              api_featured_image,
              product_colors {
                colour_name
                hex_value
              },
              reviews {
                accessible
                buyAgain
                content
                created_at
                firebaseUser
                title
              }
            }
          }`
      }
      const endpoint = "https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/app/elc-makeup-app-kerwc/graphql";
      const headers = {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      };
      const options = {
        "method": "POST",
        "headers": headers,
        "body": JSON.stringify(query)
      };
      try {
        const response = await fetch(endpoint, options);
        const json = await response.json();
        return json?.data;
      }
      catch (err) {
        console.log(err);
      }
    };

    fetchData().then(d => {
      setProductData(d.searchProducts)
      setLoading(false);
    })
      .catch((err) => {
        console.log(err);
        setErrors((pv) => [...pv, err]);
      });
  }, [term]);
  // if (loading) console.log("loading..")
  if (errors.length) console.log({ errors })
  if (loading)
    return (<View><Text>{"Loading..."}</Text></View>);
  if (errors.length)
    return (<View><Text>Error :(</Text></View>);

  return React.createElement(RenderComponent, { data: productData, title })

};
