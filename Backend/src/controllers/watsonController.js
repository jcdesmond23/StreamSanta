import { XMLHttpRequest } from "xmlhttprequest";
import querystring from 'querystring';
import axios from "axios";

const API_KEY = "Eu9AVEAuBnQiSXmU6ONnc2dRInhzPeS-i-LMdlbvqNPd";

export const parseEmotions = async (nluRes) => {
	const key = nluRes.keywords[0];
	const label = key.sentiment.label;
	var emotion = 'sadness';
	var emotionVal = key.emotion.sadness;
	if (key.emotion.joy > emotionVal) {
		emotionVal = key.emotion.joy;
		emotion = 'joy';
	} else if (key.emotion.fear > emotionVal) {
		emotionVal = key.emotion.fear;
		emotion = 'fear';
	} else if (key.emotion.disgust > emotionVal) {
		emotionVal = key.emotion.disgust;
		emotion = 'disgust';
	} else if (key.emotion.anger > emotionVal) {
		emotionVal = key.emotion.anger;
		emotion = 'anger';
	}
	var finalDesc = '';
	switch(label) {
		case 'positive':
			if (emotion === 'joy' || emotion === 'anger') {
				finalDesc = 2;
			} else {
				finalDesc = 1;
			}
			break;
		case 'negative':
			if (emotion === 'joy' || emotion === 'anger') {
				finalDesc = 1;
			} else {
				finalDesc = 0;
			}
			break;
		case 'neutral':
			if (emotion === 'joy' || emotion === 'anger') {
				finalDesc = 2;
			} else {
				finalDesc = 0;
			}
			break;
	}
	return finalDesc;
}

export const watsonNLU = async (bodyText) => {
	try {
		const res = await axios({
			headers: {
				"Content-Type": "application/json",
			},
			method: 'post',
			url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/55be8d53-fa3f-4e57-b1ee-f08a9a4c6566/v1/analyze?version=2019-07-12',
			auth: {
				username: 'apikey',
				password:  'VgHIfKl6YhSE868UP27rZFqaU6YxKr-dIgJppc3p9UeB',
			},
			data: {
				"text": bodyText,
				"features": {
				  "keywords": {
					"emotion": true,
					"sentiment": true,
					"limit": 1
				  }
				}
			},
		});
		const parsedRes = parseEmotions(res.data);
		return parsedRes;
	} catch(error) {
		console.log('------------------------------------');
		console.log(error);
		return error;
	}
};

export const parsePrediction = async (type, genre, country, mood, release, rating, runtime) => {
	const body = {
		"input_data": [
			{
				"fields": [
					"type",
					"US",
					"release_year",
					"rating",
					"runtime",
					"genres",
					"description"
				],
				"values": [
					[
						type,
						country,
						release,
						rating,
						runtime,
						genre,
						mood
					]
				]
			}
		]
	}
	const token = await getToken();
	const finalPredict = await apiPost(token, body);
	return finalPredict;
}

export const getToken = async () => {
	const params = new URLSearchParams();
	params.append('grant_type','urn:ibm:params:oauth:grant-type:apikey');
	params.append('apikey','Eu9AVEAuBnQiSXmU6ONnc2dRInhzPeS-i-LMdlbvqNPd')
	const headers = {
		"Content-Type": "application/x-www-form-urlencoded"
	}
	const token = await axios.post('https://iam.cloud.ibm.com/identity/token', params, headers);
	return token;
}

const apiPost = async (token, body) => {
	const bearer = 'Bearer ' + token.data.access_token;
	const headers = {
		"Content-Type": "application/json",
		"Authorization": bearer,
	};
	try {
		const prediction = await axios.post('https://us-south.ml.cloud.ibm.com/ml/v4/deployments/251dfa9e-7b79-4664-a7ae-4aae84ce2f5e/predictions?version=2022-05-31', body, { headers });
		return prediction;
	} catch(error) {
		console.log(error);
	}
}