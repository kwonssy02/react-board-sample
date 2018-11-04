import React, { Component } from 'react';
import ContentRow from 'components/ContentRow';
import ContentCol from 'components/ContentCol';
import ContentCard from 'components/ContentCard';
import { Table } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { Heart, Activity, User, Database } from 'react-feather';

class Home extends Component {
    render() {
        return (
            <div>
                <ContentRow>
                    <ContentCol xl={3} lg={3} md={6} sm={6} xs={12}>
                        <ContentCard inverse backgroundColor='#e06377' borderColor='#c83349'>
                            <span style={{fontSize:'1.5rem'}}>9,482</span>
                            <span style={{fontSize:'1rem'}}>{' '}HITS</span>
                            <br/>
                            <Heart size={19}/>{'  '}
                            <span style={{fontSize:'1rem'}}>
                                Today 
                            </span>
                        </ContentCard>
                    </ContentCol>
                    <ContentCol xl={3} lg={3} md={6} sm={6} xs={12}>
                        <ContentCard inverse backgroundColor='#8B9DC3' borderColor='#3B5998'>
                            <span style={{fontSize:'1.5rem'}}>940</span>
                            <span style={{fontSize:'1rem'}}>{' '}Users</span>
                            <br/>
                            <User size={19}/>{'  '}
                            <span style={{fontSize:'1rem'}}>
                                Welcome 
                            </span>
                        </ContentCard>
                    </ContentCol>
                    <ContentCol xl={3} lg={3} md={6} sm={6} xs={12}>
                        <ContentCard inverse backgroundColor='#339AED' borderColor='#3B5998'>
                            <span style={{fontSize:'1.5rem'}}>50</span>
                            <span style={{fontSize:'1rem'}}>{' '}%</span>
                            <br/>
                            <Activity size={19}/>{'  '}
                            <span style={{fontSize:'1rem'}}>
                                Progress 
                            </span>
                        </ContentCard>
                    </ContentCol>
                    <ContentCol xl={3} lg={3} md={6} sm={6} xs={12}>
                        <ContentCard inverse backgroundColor='#34A853' borderColor='#A4C639'>
                            <span style={{fontSize:'1.5rem'}}>940</span>
                            <span style={{fontSize:'1rem'}}>{' '}KB</span>
                            <br/>
                            <Database size={19}/>{'  '}
                            <span style={{fontSize:'1rem'}}>
                                Database 
                            </span>
                        </ContentCard>
                    </ContentCol>
                </ContentRow>
                <ContentRow>
                    <ContentCol xl={8} lg={8} md={8} sm={12} xs={12}>
                        <ContentCard title="Sales Chart">
                            <Line
                                data={{
                                    labels: [
                                        "January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June",
                                        "July"
                                    ],
                                    datasets: [
                                        {
                                            label: "First dataset",
                                            data: [
                                                20, 4, 8, 5, 15, 5, 9
                                            ],
                                            // fill: false,
                                            // backgroundColor: '#b7d7e8',
                                            borderColor: '#87bdd8',
                                            borderWidth: 2,
                                            pointBackgroundColor: '#87bdd8',
                                            pointBorderColor: '#fff',
                                            pointBorderWidth: 1
                                        },
                                        {
                                            label: "Second dataset",
                                            data: [
                                                8, 2, 15, 9, 6, 5, 1
                                            ],
                                            // fill: false,
                                            // backgroundColor: '#e06377',
                                            borderColor: '#c83349',
                                            borderWidth: 2,
                                            pointBackgroundColor: '#c83349',
                                            pointBorderColor: '#fff',
                                            pointBorderWidth: 1
                                        }
                                    ]
                                }}
                                
                                options={{
                                    responsive: true,
                                    scales: {
                                        xAxes: [
                                            {
                                                display: true,
                                                scaleLabel: {
                                                    show: true,
                                                    labelString: 'Month'
                                                }
                                            }
                                        ],
                                        yAxes: [
                                            {
                                                display: true,
                                                scaleLabel: {
                                                    show: true,
                                                    labelString: 'Value'
                                                },
                                                ticks: {
                                                    suggestedMin: 0,
                                                    suggestedMax: 10
                                                }
                                            }
                                        ]
                                    }
                                }}

                                // legend={false}
                            />
                        </ContentCard>
                    </ContentCol>
                    <ContentCol xl={4} lg={4} md={4} sm={12} xs={12}>
                        <ContentCard title="Bordered Table">
                            <Table bordered responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Car</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>kwonssy02</td>
                                        <td>Tom</td>
                                        <td>28</td>
                                        <td>Santafe</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>johnf</td>
                                        <td>John Doson</td>
                                        <td>23</td>
                                        <td>Tucson</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>watchApple</td>
                                        <td>Steve</td>
                                        <td>50</td>
                                        <td>Avante</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>sin</td>
                                        <td>Gang</td>
                                        <td>12</td>
                                        <td>Sorento</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </ContentCard>
                    </ContentCol>
                </ContentRow>
            </div>
        );
    }
}

export default Home;