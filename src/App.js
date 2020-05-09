import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Spring} from 'react-spring/renderprops'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError: false,
            data:[],
            loading: true

        }
       
    }

async    componentDidMount(){
    await fetch("https://api.covid19api.com/summary")
     .then(res=>{
        
          return   res.json()
     })
     .then(res2=>{
        console.log(res2);
        this.setState({ data: res2.Countries ,loading: false})
    })
     .catch(err=>{
        console.log(err);
     })
     }
     
render() {

  if(this.state.loading){
    return <div>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}><h1 style={load}>😄Loading...</h1></div>}
          </Spring>
            </div>
  }
 
        return (
          
                <div className="App">
                     
                          <div>
                               <div className="col-md-12 text-center">
                       <h1 id="hed"><b>COVID'19 LIVE UPDATES OF THE WORLD</b></h1>
                       </div>
                       
                <div className="bs-example container" data-example-id="striped-table">
                       <table className="table table-striped table-bordered table-hover">
                       
                             <thead>
                                  <tr style={{backgroundColor:'lightGrey',color:'white'}}>
                                   <th>Name Of Countries</th>
                                    <th>Date</th>
                                    <th>New Confirmed</th>
                                     <th>New Deaths</th>
                                      <th>Total Recovered</th>
                                       <th>Total Confirmed </th>
                                       <th>Total Deaths</th>
                                    </tr>
                              </thead>
                                        {
                                          this.state.data.map((newdata,i)=>(
                                            <tbody key={newdata.CountryCode}>
                                               <tr >
                                                <td style={{backgroundColor:'#B833C8',color:'white'}}><b>{newdata.Country}</b></td>
                                                <td style={{backgroundColor:'lightBlue',color:'black'}}>{newdata.Date}</td>
                                                <td style={{backgroundColor:'lightGreen',color:'black'}}>{newdata.NewConfirmed}</td>
                                                <td style={{backgroundColor:'orange',color:'black'}}>{newdata.NewDeaths}</td>
                                                <td style={{backgroundColor:'lightGreen',color:'black'}}>{newdata.TotalRecovered}</td>
                                                <td style={{backgroundColor:'lightBlue',color:'black'}}>{newdata.TotalConfirmed}</td>
                                                <td style={{backgroundColor:'#B833C8',color:'black'}}>{newdata.TotalDeaths}</td>

                                               </tr>
                                             </tbody>
                                             ))
                                         }
                        </table>
                 </div>
                          </div>
                    
                
                         <br></br>                      
                                              
                </div>


           
        )
    }
}

const load={
  fontSize:'50px',
  textAlign:'center',
}
export default App;