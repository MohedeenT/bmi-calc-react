import { calculateBmi } from "../common/calculateBmi"
export const Form =(props)=>{

  const {height, weight, setHeight, setWeight, setResult} = props

    return (<form>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            value={height}
            onChange={(e)=>{
              e.preventDefault()
              setHeight( e.target.value)}
            }
            id="height"
            type="text"
            className="form-control"
            placeholder="Cm"
          ></input>
        </div>

        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            value={weight}
            onChange={(e)=>{
              setWeight( e.target.value)

            }}
            id="weight"
            type="text"
            className="form-control"
            placeholder="Kg"
          ></input>
        </div>

        <button
         className="btn btn-success w-100"
         onClick={(e)=>{
          e.preventDefault()
          const result = calculateBmi(height,weight)
          setResult(result);
         }}
         >
          Calculate
          </button>
      </form>)
}