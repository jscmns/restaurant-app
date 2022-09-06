import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const SingleResult = ({ result }) => {
	return (
		<View>
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.rating} stars, {result.review_count} reviews
			</Text>
			<Image style={styles.image} source={{ uri: result.image_url }} />
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 250,
		height: 120,
		borderRadius: 4
	},
	name: {
		fontWeight: "bold"
	}
});

export default SingleResult;
