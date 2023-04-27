//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let a = input_ar1[0];
        let b = input_ar1[1];
        let obj = new Solution();
        let res = obj.lcmAndGcd(a, b);
        if(res && res.length == 2)
            console.log(res[0] + " " + res[1]);
        
    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
*/
  function gcd(a ,b){
      if(b==0) return a;
      
      return gcd(b , a%b);
  }
class Solution{
    lcmAndGcd(a, b){
        //code here
        let x = gcd(a , b);
        let lcm = (a*b)/x;
        
        let ans = []
        
        ans[0] = lcm
        ans[1] = x
        
        return ans
    }
}
