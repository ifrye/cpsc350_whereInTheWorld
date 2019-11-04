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
	database: "food_nutrition"
};

const pool = new Pool(config);

app.get("/hello", (req, res) => {
	res.json("Hello World");
});

//GET returning food by description
app.get("/api", async (req, res) => {
	try {
		const template = "SELECT description,kcal,protein_g,lipid_total_g,carbohydrate_g,fa_sat_g,fa_mono_g,fa_poly_g FROM entries WHERE description ilike $1 LIMIT 25";
		const response = await pool.query(template, [`%${req.query.q}%`]);
		res.json(response);
		} catch (err) {
			res.json({ status: "error" });
			console.log(err);
		}
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}`);
});


