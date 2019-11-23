require ("isomorphic-fetch");
import BPromise from "bluebird";

function getPlace(place){
	return fetch(`http://localhost:8080/api?q=${place}`).then(function(resp){
		return resp.json();
	})
}

function handleError(error){
	console.warn(error);
	return null;
};

module.exports = {
	getInfo: function(place){
		return getPlace(place).catch(handleError);
	}
};