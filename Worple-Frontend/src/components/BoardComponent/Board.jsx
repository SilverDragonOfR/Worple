import "./Board.css"
import Box from "../BoxComponent/Box.jsx"

function Board({boxActive, grid, notPresent, presentNoPosition, correctPosition}) {

    var currentlyActive = [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]]
    currentlyActive[boxActive[0]][boxActive[1]] = true

    return(
        <div className="board-outer">
            <div className="board-inner">
                <Box id="box00" value={grid[0][0]} currentlyActive={currentlyActive[0][0]} notPresent={notPresent[0][0]} presentNoPosition={presentNoPosition[0][0]} correctPosition={correctPosition[0][0]} />
                <Box id="box01" value={grid[0][1]} currentlyActive={currentlyActive[0][1]} notPresent={notPresent[0][1]} presentNoPosition={presentNoPosition[0][1]} correctPosition={correctPosition[0][1]} />
                <Box id="box02" value={grid[0][2]} currentlyActive={currentlyActive[0][2]} notPresent={notPresent[0][2]} presentNoPosition={presentNoPosition[0][2]} correctPosition={correctPosition[0][2]} />
                <Box id="box03" value={grid[0][3]} currentlyActive={currentlyActive[0][3]} notPresent={notPresent[0][3]} presentNoPosition={presentNoPosition[0][3]} correctPosition={correctPosition[0][3]} />
                <Box id="box04" value={grid[0][4]} currentlyActive={currentlyActive[0][4]} notPresent={notPresent[0][4]} presentNoPosition={presentNoPosition[0][4]} correctPosition={correctPosition[0][4]} />

                <Box id="box10" value={grid[1][0]} currentlyActive={currentlyActive[1][0]} notPresent={notPresent[1][0]} presentNoPosition={presentNoPosition[1][0]} correctPosition={correctPosition[1][0]} />
                <Box id="box11" value={grid[1][1]} currentlyActive={currentlyActive[1][1]} notPresent={notPresent[1][1]} presentNoPosition={presentNoPosition[1][1]} correctPosition={correctPosition[1][1]} />
                <Box id="box12" value={grid[1][2]} currentlyActive={currentlyActive[1][2]} notPresent={notPresent[1][2]} presentNoPosition={presentNoPosition[1][2]} correctPosition={correctPosition[1][2]} />
                <Box id="box13" value={grid[1][3]} currentlyActive={currentlyActive[1][3]} notPresent={notPresent[1][3]} presentNoPosition={presentNoPosition[1][3]} correctPosition={correctPosition[1][3]} />
                <Box id="box14" value={grid[1][4]} currentlyActive={currentlyActive[1][4]} notPresent={notPresent[1][4]} presentNoPosition={presentNoPosition[1][4]} correctPosition={correctPosition[1][4]} />

                <Box id="box20" value={grid[2][0]} currentlyActive={currentlyActive[2][0]} notPresent={notPresent[2][0]} presentNoPosition={presentNoPosition[2][0]} correctPosition={correctPosition[2][0]} />
                <Box id="box21" value={grid[2][1]} currentlyActive={currentlyActive[2][1]} notPresent={notPresent[2][1]} presentNoPosition={presentNoPosition[2][1]} correctPosition={correctPosition[2][1]} />
                <Box id="box22" value={grid[2][2]} currentlyActive={currentlyActive[2][2]} notPresent={notPresent[2][2]} presentNoPosition={presentNoPosition[2][2]} correctPosition={correctPosition[2][2]} />
                <Box id="box23" value={grid[2][3]} currentlyActive={currentlyActive[2][3]} notPresent={notPresent[2][3]} presentNoPosition={presentNoPosition[2][3]} correctPosition={correctPosition[2][3]} />
                <Box id="box24" value={grid[2][4]} currentlyActive={currentlyActive[2][4]} notPresent={notPresent[2][4]} presentNoPosition={presentNoPosition[2][4]} correctPosition={correctPosition[2][4]} />

                <Box id="box30" value={grid[3][0]} currentlyActive={currentlyActive[3][0]} notPresent={notPresent[3][0]} presentNoPosition={presentNoPosition[3][0]} correctPosition={correctPosition[3][0]} />
                <Box id="box31" value={grid[3][1]} currentlyActive={currentlyActive[3][1]} notPresent={notPresent[3][1]} presentNoPosition={presentNoPosition[3][1]} correctPosition={correctPosition[3][1]} />
                <Box id="box32" value={grid[3][2]} currentlyActive={currentlyActive[3][2]} notPresent={notPresent[3][2]} presentNoPosition={presentNoPosition[3][2]} correctPosition={correctPosition[3][2]} />
                <Box id="box33" value={grid[3][3]} currentlyActive={currentlyActive[3][3]} notPresent={notPresent[3][3]} presentNoPosition={presentNoPosition[3][3]} correctPosition={correctPosition[3][3]} />
                <Box id="box34" value={grid[3][4]} currentlyActive={currentlyActive[3][4]} notPresent={notPresent[3][4]} presentNoPosition={presentNoPosition[3][4]} correctPosition={correctPosition[3][4]} />

                <Box id="box40" value={grid[4][0]} currentlyActive={currentlyActive[4][0]} notPresent={notPresent[4][0]} presentNoPosition={presentNoPosition[4][0]} correctPosition={correctPosition[4][0]} />
                <Box id="box41" value={grid[4][1]} currentlyActive={currentlyActive[4][1]} notPresent={notPresent[4][1]} presentNoPosition={presentNoPosition[4][1]} correctPosition={correctPosition[4][1]} />
                <Box id="box42" value={grid[4][2]} currentlyActive={currentlyActive[4][2]} notPresent={notPresent[4][2]} presentNoPosition={presentNoPosition[4][2]} correctPosition={correctPosition[4][2]} />
                <Box id="box43" value={grid[4][3]} currentlyActive={currentlyActive[4][3]} notPresent={notPresent[4][3]} presentNoPosition={presentNoPosition[4][3]} correctPosition={correctPosition[4][3]} />
                <Box id="box44" value={grid[4][4]} currentlyActive={currentlyActive[4][4]} notPresent={notPresent[4][4]} presentNoPosition={presentNoPosition[4][4]} correctPosition={correctPosition[4][4]} />

                <Box id="box50" value={grid[5][0]} currentlyActive={currentlyActive[5][0]} notPresent={notPresent[5][0]} presentNoPosition={presentNoPosition[5][0]} correctPosition={correctPosition[5][0]} />
                <Box id="box51" value={grid[5][1]} currentlyActive={currentlyActive[5][1]} notPresent={notPresent[5][1]} presentNoPosition={presentNoPosition[5][1]} correctPosition={correctPosition[5][1]} />
                <Box id="box52" value={grid[5][2]} currentlyActive={currentlyActive[5][2]} notPresent={notPresent[5][2]} presentNoPosition={presentNoPosition[5][2]} correctPosition={correctPosition[5][2]} />
                <Box id="box53" value={grid[5][3]} currentlyActive={currentlyActive[5][3]} notPresent={notPresent[5][3]} presentNoPosition={presentNoPosition[5][3]} correctPosition={correctPosition[5][3]} />
                <Box id="box54" value={grid[5][4]} currentlyActive={currentlyActive[5][4]} notPresent={notPresent[5][4]} presentNoPosition={presentNoPosition[5][4]} correctPosition={correctPosition[5][4]} />
            </div>
        </div>
    )
}

export default Board