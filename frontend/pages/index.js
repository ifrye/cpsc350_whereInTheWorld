import React from "react";
import {getInfo} from '../lib/utils.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={search: ""};
  }

  async handleSearch(evt){
    this.setState({search: evt.target.value});
    const food = await getInfo(this.state.search);
    this.setState({food});
  }

  render() {
    return (
            <div style={{ margin: "auto auto", width: "100%", textAlign: "center", padding: "0 px" }}>
            
              <div style={{backgroundImage: `url("https://image.freepik.com/free-photo/different-raw-vegetable-blue-wooden-table_23-2147953583.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize:"cover",
                  width: "100%", textAlign: "center", padding: "0 px", height: "250px"}}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>Nutrition Information Search</h1>

              </div>

              <h2>Food Search</h2>

              <p><input type='text' value={this.state.search} onChange={this.handleSearch.bind(this)}/></p>

              {this.state.food && this.state.search != "" ? <div>
                  <br />

                  <table>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Kcal</th> 
                        <th>Protein (g)</th>
                        <th>Fat (g)</th>
                        <th>Carbohydrates (g)</th>
                      </tr>
                      </thead>
                    <tbody>
                      {this.state.food.rows.map((item, key) =>
                        <tr key={item.description}>
                          <td>{item.description}</td>
                          <td>{item.kcal}</td>
                          <td>{item.protein_g}</td>
                          <td>{item.fa_sat_g + item.fa_mono_g + item.fa_poly_g}</td>
                          <td>{item.carbohydrate_g}</td>
                        </tr>
                        )}
                      
                    </tbody>
                  </table>


              </div> : null}

              


              <style jsx>{`
                  h1{
                    color:black; 
                    font-family: "Arial";
                    margin: "auto auto"; 
                    width: 100%;
                    display: inline; 
                    textAlign: "center";
                    padding: "0 px";
                  }

                  h2,
                  a{
                    font-family: "Arial";
                    textAlign: "center";
                    color: black;
                    margin:"auto auto";
                    padding:"9px";
                  }

                  .h3{
                    font-family: "Arial";
                    textAlign: center;
                    color: black;
                  }

                  .p{
                    font-family: "Arial";
                    textAlign: center;
                    color: black;
                  }

                  .button-style{
                    margin: auto auto;
                    cursor: pointer;
                    background-color: green;
                    color: #ffffff;
                    width: 100px;
                    font-family: "Arial";
                  }

                  .description {
                    font-family: "Arial";
                    font-size: "10px";
                  }
                  
                  a {
                    text-decoration: underline;
                    color: green;
                  }

                  a:hover {
                    opacity: 0.6;
                  }
                  table {
                    font-family: arial, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                  }

                  td, th {
                    border: 1px solid #ffffff;
                    text-align: left;
                    padding: 8px;
                  }

                  tr:nth-child(even) {
                    background-color: #dddddd;
                  }
              `}</style>
            </div>
    );
  }
}

export default Home;
