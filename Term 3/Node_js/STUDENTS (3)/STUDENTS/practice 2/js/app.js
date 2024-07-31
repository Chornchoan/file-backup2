function afterRequest(response) {
	// TODO: display the gender in the DOM
	console.log(response);
  }
  
  let nameToTest = "ronan";
  const GENDER_URL_BASE = "https://api.genderize.io?name=clement";
  const GENDER_URL = GENDER_URL_BASE + nameToTest;
  
  // Request a GET on GENDER_URL to get the data from the JSON
  // Once done, the function afterRequest will be called
  axios.get(GENDER_URL).then(afterRequest);