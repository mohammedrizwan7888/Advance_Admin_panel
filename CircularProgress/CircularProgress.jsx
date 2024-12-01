import "./CircularProgress.css";

const CircularProgress = ({ value, offset, color }) => {
    return (
        <div className="circular-progress">
            <div className="details">
                <h1>{value}</h1>
                <p>%</p>
            </div>
            <svg>
                {/* Background gray circle */}
                <circle 
                    cx="55" 
                    cy="55" 
                    r="50" 
                    className="svg-circle" 
                    style={{ 
                        stroke: color, 
                        strokeDashoffset: offset 
                    }} 
                />
            </svg>
        </div>
    );
}

export default CircularProgress;
