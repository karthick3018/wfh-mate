const useBreakTimer = require("./useBreakTimer")
// @ponicode
describe("useBreakTimer.default", () => {
    test("0", () => {
        let callFunction = () => {
            useBreakTimer.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
