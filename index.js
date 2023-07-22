
function checkrow(board,row,col)
{
    let flag=true;
    let ele=board[row][col];
    for(let i=0;i<9;i++)
    {
        if(board[row][i]==ele&&i!=col)
        {
            flag=false;
            break;
        }
    }
    return flag;
}
function checkcol(board,row,col)
{
    let flag=true;
    let ele=board[row][col];
    for(let i=0;i<9;i++)
    {
        if(board[i][col]==ele&&i!=row)
        {
            flag=false;
            break;
        }
    }
    return flag;
}
function checkboard(board,row,col)
{
    const srow=row-row%3;
    const scol=col-col%3;
    const ele=board[row][col];
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(board[srow+i][scol+j]==ele&&((row!=srow+i)||(col!=scol+j)))
            return false;
        }
    }
    return true;
}
function checkvalidity(board,row,col)
{
    if(board[row][col]=='.')
    return  true;
    if(checkrow(board,row,col)&&checkcol(board,row,col)&&checkboard(board,row,col))
    return true;
    return false;
}
const solve=function(board,row,col)
{
    if(row==9)
        return true;
    if(col==9)
      return solve(board,row+1,0);
    if(board[row][col]!='.')
       return solve(board,row,col+1);
    
    for(let i=0;i<9;i++)
    {
        board[row][col]=(i+1).toString();
        if(checkvalidity(board,row,col)==true)
        {
            if(solve(board,row,col+1)==true)
            return true;
        }
        board[row][col]='.'
    }
    return false;

}
var precheckvalidity = function(board)
{
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            if(checkvalidity(board,i,j)==false)
            return false;
        }
    }
    return true;
} 
var solveSudoku = function(board) 
{
    if(precheckvalidity(board)==false)
    return false;
    return solve(board,0,0);    
};