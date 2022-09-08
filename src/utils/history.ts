
import { NavigateFunction } from "react-router-dom";


export interface HistoryInterFace {
    navigate: NavigateFunction,
    push: any
}

const History: HistoryInterFace = {
    navigate: ()  => {},
    push: (page: any, ...rest:any) => History.navigate(page, ...rest),
  };
  
export default History;