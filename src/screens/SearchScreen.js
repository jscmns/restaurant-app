import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = price => {
		return results.filter(result => result.price === price);
	};

	return (
		<View style={styles.background}>
			<Text>Search screen</Text>
			<SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
			<Text>We have found {results.length} results</Text>
			{errorMessage && <Text>{errorMessage}</Text>}
			<ResultsList results={filterResultsByPrice("$")} title="Cost effective" />
			<ResultsList results={filterResultsByPrice("$$")} title="Bit pricier" />
			<ResultsList results={filterResultsByPrice("$$$")} title="Big spender" />
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "white"
	}
});

export default SearchScreen;
