import ReactSpeedometer from "react-d3-speedometer";
import './speedometer.scss';

interface SpeedoMeterValues {
    maxWords: number;
    actualPoint: number;
}
export default function Speedometer(props: SpeedoMeterValues){
   console.log(props.actualPoint, props.maxWords)
   let counter = (1000/props.maxWords) * props.actualPoint;
    return(
        <div className="speedometer"> 
        <ReactSpeedometer
          segmentColors={["firebrick", "tomato", "gold", "limegreen", "green"]}
          minValue={0}
          maxValue={1000}
          value={counter}
          currentValueText="Words"
        customSegmentLabels={[
        {
            text: "",
            color: "white",
            
        },
        {
            text: "",
            color: "white",
        },
        {
            text: "",
            color: "white",
            fontSize: "19px",
        },
        {
            text: "",
            color: "white",
        },
        {
            text: "",
            color: "white",
        },
        ]}
    />
      </div>
    )
}