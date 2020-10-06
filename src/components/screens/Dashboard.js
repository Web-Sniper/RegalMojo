import React from 'react'
import { Line, Bar,Radar } from 'react-chartjs-2';
import DashboardNav from '../DashboardNav'


const Dashboard = () => {
    
    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may'],
        datasets: [
            {
                label: "",
                data: [1, 2, 2, 5, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    }


    const option = {
        scales: {
            yAxes: [{
                stacked: false,
                ticks: {
                    min: 0,
                    max: 6,
                    stepSize: 1
                }
            }]
        },

    }

    const option2 = {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        scales: {
            yAxes: [{
                stacked: false,
                ticks: {
                    min: 0,
                    max: 6,
                    stepSize: 1
                }
            }]
        },
        maintainAspectRatio: false,
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)',
                align: 'start'
            }
        }
    }

    return (
        
        <div>
            <DashboardNav />,
            <div className="row">
                <div className="mycard1 left">
                    <div className="card congrats #7e57c2 deep-purple lighten-1" style={{color: "white"}}>
                        <img src="https://www.iconfinder.com/data/icons/flat-game-ui-buttons-icons-1/512/17-512.png"
                            className="circle responsive-img "
                            style={{ height: "100px", width: "100px", marginTop: "10px", boxShadow: "5px 5px 15px rgb(26, 4, 44)" }}
                        />
                        <h4 className="center">Congratulations John,</h4>
                        <p className="center">We have done 57.6% more sales today. Check your new badge in your profile.</p>
                        <br />
                    </div>
                </div>

                <div className="mycard2 left">
                    <div className="card charts">
                        <div>
                            <i className="material-icons" style={{ borderRadius: "20px", boxShadow: "0px 3px 5px", padding: "10px" }}>people</i>
                        </div>
                        <div>
                            <h5 style={{ fontWeight: "bold" }}>92.6K</h5>
                            <p>Subscriber Gained</p>
                        </div>
                        <Line data={data} options={option} className="line" />
                    </div>
                </div>

                <div className="mycard2 left">
                    <div className="card charts ">
                        <div>
                            <i className="material-icons" style={{ borderRadius: "20px", boxShadow: "0px 3px 5px", padding: "10px" }}>apps</i>
                        </div>
                        <div>
                            <h5 style={{ fontWeight: "bold" }}>92.6K</h5>
                            <p>Orders Recieved</p>
                        </div>
                        <Line data={data} options={option} className="line" />
                    </div>
                </div>
            </div>,


            <div className="row">

                <div className="mycard3 left" style={{ height: "max-content" }}>
                    <div className="card bar">
                        <div className="row">

                            <div className="col s6">
                                <h5 style={{ fontWeight: "bold" }}>2.7K</h5>
                                <p>Avg Sessions</p>
                                <p><i style={{color:"#00cc99"}}>+5.2%</i> vs last 7 days.</p><br />
                                <a className="waves-effect waves-light btn #7e57c2 deep-purple lighten-1" style={{ width: "100%", marginTop: "50px" }}>View Details</a>
                            </div>
                            <div className="col s6" >

                                <Bar data={data} options={option2} height={250} className="line" />
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col s6">
                                <div>Goal: $10000000</div>
                                <div className="progress #ede7f6 deep-purple lighten-5">
                                    <div className="determinate #7e57c2 deep-purple lighten-1" style={{ width: "50%" }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div>Users: 1000K</div>
                                <div className="progress #fff3e0 orange lighten-5">
                                    <div className="determinate #ff9800 orange" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s6">
                            <   div>Retention: 90%</div>
                                <div className="progress #ede7f6 deep-purple lighten-5">
                                    <div className="determinate #7e57c2 deep-purple lighten-1" style={{ width: "50%" }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div>Duration: 1yr</div>
                                <div className="progress #fff3e0 orange lighten-5">
                                    <div className="determinate #ff9800 orange" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="mycard3 left">
                    <div className="card bar">
                        <div>
                            <h5>Support Tracker</h5>
                        </div>
                        <div>
                            <h5 style={{ fontWeight: "bold" }}>163</h5>
                            <p>Tickets</p>
                        </div>
                        <Radar data={data} options={option} className="line" />
                    </div>
                </div>
            </div>
            
        </div>
        
        
        







    )
}

export default Dashboard