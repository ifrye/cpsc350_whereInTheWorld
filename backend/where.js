const express = require("express");
const bodyParser = require("body-parser");
const Cors = require("cors");
const app = express();

app.set("port", 8080);
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Cors());

const Pool = require("pg").Pool;
const config = {
	host: "localhost",
	user: "new",
	password: "newpass",
	database: "world"
};

const pool = new Pool(config);

app.get("/hello", (req, res) => {
	res.json("Hello World");
});

//GET returning food by description
app.get("/api", async (req, res) => {
	try {
		const template = "SELECT city.name as City, city.population AS Population, country.name AS country From city join country ON city.countrycode = country.code WHERE city.name ilike $1 LIMIT 25";
		const response = await pool.query(template, [`%${req.query.q}%`]);
		if(response.rowCount != 0){
			res.json({type: "city", results: response});
		}else{
			const template2 = "SELECT country.name, country.continent, country.population, country.headofstate, countrylanguage.language from country join countrylanguage ON country.code = countrylanguage.countrycode WHERE country.name ilike $1 AND isofficial = 'T' LIMIT 25";
			const response2 = await pool.query(template2, [`%${req.query.q}%`]);
			res.json({type: "country", results: response2});
		}
		
	} catch (err) {
		res.json({ status: "error" });
		console.log(err);
	}
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}`);
});


