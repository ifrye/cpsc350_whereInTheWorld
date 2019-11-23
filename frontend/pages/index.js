import React from "react";
import {getInfo} from '../lib/utils.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={search: ""};
  }

  async handleSearch(evt){
    this.setState({search: evt.target.value});
    const place = await getInfo(evt.target.value);
    this.setState({place});
  }

  render() {
    return (
            <div style={{ margin: "auto auto", width: "100%", textAlign: "center", padding: "0 px" }}>
            
              <div style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2017/02/19/15/28/italy-2080072_1280.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize:"cover",
                  width: "100%", textAlign: "center", padding: "0 px", height: "250px"}}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>Search The World</h1>

              </div>

              <h2>Search for a city or country to find out more about it</h2>

              <p><input type='text' value={this.state.search} onChange={this.handleSearch.bind(this)}/></p>

              {'place' in this.state && this.state.search != "" && this.state.place.type == 'city' ? <div>
                  <br />

                  <table>
                    <thead>
                      <tr>
                        <th>City</th>
                        <th>Population</th> 
                        <th>Country</th>
                      </tr>
                      </thead>
                    <tbody>
                      {this.state.place.results.rows.map((item, key) =>
                        <tr>
                          <td>{item.city}</td>
                          <td>{item.population}</td>
                          <td>{item.country}</td>
                        </tr>
                        )}
                      
                    </tbody>
                  </table>


              </div> : null}

              {'place' in this.state && this.state.search != "" && this.state.place.type == 'country' ? <div>
                  <br />

                  <table>
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Continent</th> 
                        <th>Population</th> 
                        <th>Head of State</th>
                        <th>Official Language(s)</th>
                      </tr>
                      </thead>
                    <tbody>
                      {this.state.place.results.rows.map((item, key) =>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.continent}</td>
                          <td>{item.population}</td>
                          <td>{item.headofstate}</td>
                          <td>{item.language}</td>
                        </tr>
                        )}
                      
                    </tbody>
                  </table>


              </div> : null}

              


              <style jsx>{`
                  h1{
                    color:white; 
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
