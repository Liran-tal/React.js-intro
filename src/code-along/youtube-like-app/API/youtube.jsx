import axios from "axios";


const KEY = 'AIzaSyCypUPpRNX71P7YAYmNYK_9OfrIuXmjYD0';

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		type: 'video',
		key: KEY,
	}
});