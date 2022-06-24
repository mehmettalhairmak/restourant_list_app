import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer otLo8iGSzy3HqIlTUQWE1XXsYjryECc4PqEsCN8FPnbEBq6JfCDRG6Jjf7lb49BM43asuEkouN8CdHNoiGICYGVKkJJXUN2eFJNE6fK6m3k11hdWfFue5cGktHu0YnYx",
	},
});
