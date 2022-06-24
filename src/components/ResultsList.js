import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
	return (
		<View style={styles.containerStyle}>
			{results.length > 0 ? (
				<Text style={styles.titleStyle}>{title}</Text>
			) : null}

			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={() => results.id}
				renderItem={({ item }) => {
					return <ResultsDetail result={item} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5,
	},
	containerStyle: {
		marginBottom: 10,
	},
});

export default ResultsList;
