import ArrowFunctions from "./arrow-functions"
import ES5Functions from "./es5-functions"
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters"
import ImpliedReturns from "./implied-returns"

function WorkingWithFunctions() {
    return (
        <div>
            <h1>Working With Functions</h1>
            <ES5Functions />
            <ArrowFunctions />
            <ImpliedReturns />
            <FunctionParenthesisAndParameters />
        </div>
    )
}
export default WorkingWithFunctions