import React from "react";
import { StyleSheet, View } from "react-native";

export default function ReviewCard(props) {
  return (
    <View style={styles.ReviewCard}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  ReviewCard: {
    backgroundColor: '#434343',

    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
