import './Analytics.css'

import {

    BarChart,
    XAxis,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    YAxis,
    Legend,
    Bar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
    

} from "recharts";



const Analytics = ({ chart_i, chart_ii , chart_iii, title, value, illustration}) => {

    const data = [
        {
            "name": "Sept",
            "Followers": 4000,
            "Earnings": 2400
        },
        {
            "name": "Oct",
            "Followers": 3000,
            "Earnings": 1398
        },
        {
            "name": "Nov",
            "Followers": 2000,
            "Earnings": 9800
        },
        {
            "name": "Dec",
            "Followers": 2780,
            "Earnings": 3908
        }

    ];
    const data02 = [
        {
            
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
           
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
       
    ]
    const data03 = [
        {
          "subject": "Math",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "Chinese",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "English",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Geography",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "History",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ]
          
    return (
        <div className="analytics">
            {chart_i &&(
                <>
                    <header>
                        <span className="followers"> Subscribe:</span>
                        <span className="earnings"> Earnings:</span>
                    </header>

                    <BarChart width={215} height={180} data={data}>
                        <CartesianGrid strokeDasharray="100 10" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Followers" fill="#8884d8" />
                        <Bar dataKey="Earnings" fill="#82ca9d" />
                    </BarChart>
                </>)}

            {chart_ii && (
                <LineChart width={200} height={185} data={data02}
                    margin={{ top: 10, right: 10}}>
                    <YAxis/>
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            )}
            {chart_iii && (
               <RadarChart outerRadius={60} width={430} height={245} data={data03}>
               <PolarGrid />
               <PolarAngleAxis dataKey="subject" />
               <PolarRadiusAxis angle={30} domain={[0, 150]} />
               <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
               <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
               <Legend />
             </RadarChart>
            )}

            {title && (
                <>
                <h1 className="title">{title}</h1>
                <h2 className="value">{value}</h2>
                <h2 className="extra-text">
                    people are loving your content
                    <br />
                    🙌🎉
                </h2>

                <img src={illustration} alt="illus" className="illustration" />
                </>
            )}
        </div>
    )
}

export default Analytics;
