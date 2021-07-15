import { checkWin } from "../src/Game";


describe("checkWin", () => {
    let game;

       it("should return true for horizontal", () => {
        game = {
            grid: [
                    [0,0,1,1,1,1,0],
                    [0,0,0,2,2,2,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]
            ],
            activeRow: 0,
            activeCol: 5
        };
        
        expect(checkWin(game)).toEqual(true)
    });

    it("should return false for horizontal", () => {
        game = {
            grid: [
                    [0,0,1,1,1,0,0],
                    [0,0,0,2,2,2,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]
            ],
            activeRow: 0,
            activeCol: 4
        };
        
        expect(checkWin(game)).toEqual(false)
    });

    it("should return true for vertical", () => {
        game = {
            grid: [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,2,0,0,0],
                    [0,0,0,2,0,0,0],
                    [0,0,0,2,0,1,0],
                    [0,0,0,2,1,1,0]
            ],
            activeRow: 3,
            activeCol: 3
        };
        
        expect(checkWin(game)).toEqual(true)
    });

        it("should return false for vertical", () => {
        game = {
            grid: [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,1,0,0,0],
                    [0,0,0,2,0,0,0],
                    [0,0,0,2,0,1,0],
                    [0,0,0,2,1,1,0]
            ],
            activeRow: 3,
            activeCol: 3
        };
        
        expect(checkWin(game)).toEqual(false)
    });

    it("should return true for diagonal - 1", () => {
        game = {
            grid: [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,1,2,0,0,0],
                    [0,0,2,1,0,0,0],
                    [0,0,1,2,1,1,0],
                    [0,0,2,2,1,1,0]
            ],
            activeRow: 3,
            activeCol: 2
        };
        
        expect(checkWin(game)).toEqual(true)
    });

        it("should return true for diagonal - 2", () => {
        game = {
            grid: [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,2,2,0,2,0],
                    [0,0,0,1,2,0,0],
                    [0,0,0,2,1,1,0],
                    [0,0,2,2,1,1,0]
            ],
            activeRow: 3,
            activeCol: 5
        };
        
        expect(checkWin(game)).toEqual(true)
    });

    it("should return false for diagonal", () => {
        game = {
            grid: [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,2,2,0,0,0],
                    [0,0,0,1,0,0,0],
                    [0,0,0,2,1,1,0],
                    [0,0,0,2,1,1,0]
            ],
            activeRow: 3,
            activeCol: 2
        };
        
        expect(checkWin(game)).toEqual(false)
    });


})