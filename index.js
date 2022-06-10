// code your solution here
function superbowlWin(record){
    const recodResult = record.find( record => record.result === "W" );
    return recodResult? recodResult.year : undefined;
}
