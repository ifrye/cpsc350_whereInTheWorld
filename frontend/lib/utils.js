require ("isomorphic-fetch");
import BPromise from "bluebird";

function getNutrition(foodDesc){
	return fetch(`http://localhost:8080/api?q=${foodDesc}`).then(function(resp){
		return resp.json();
	})
}

function handleError(error){
	console.warn(error);
	return null;
};

module.exports = {
	getInfo: function(food){
		return getNutrition(food).catch(handleError);
	}
};