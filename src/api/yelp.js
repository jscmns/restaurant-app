import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer qUkbX7ie2QqfvfWg3hBN8FdV2VVqyOc9eY-x2m7U1iKTJHnnFbwavbFLAtYbK4cAcqj0YJMtCQ9hX4fePTW2S6rTLdJnEnlvOijeeElNARKWWL83eqLcDrLxjGIXY3Yx"
	}
});
