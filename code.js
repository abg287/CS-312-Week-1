function main()
   {
       
    var play1Val, play2Val;
    var h1 = getQuery( "h1" );
    var img1 = getQuery( ".img1" );
    var img2 = getQuery( ".img2" );
        
    // get players values
    play1Val = getRandBetween( 1, 6 );
    play2Val = getRandBetween( 1, 6 );
    
    // display dice
    img1.src = getImg( play1Val )
    img2.src = getImg( play2Val );
       
    // get result
    if ( play1Val > play2Val )
       {
           
        h1.innerHTML = "🚩 Player 1 Wins!";
           
       }
       
    else if ( play1Val < play2Val )
       {
           
        h1.innerHTML = "Player 2 Wins! 🚩";
        
       }
       
    else
       {
           
        h1.innerHTML = "Draw";
           
       }

   }

// gets query
function getQuery( qry ) 
   {
  
    // returns query
    return document.querySelector( qry );
        
   }

// gets a random number from 1 to 6
function getRandBetween( low, high ) 
   {
  
    // returns random number
    return Math.floor( Math.random() * high ) + low;
        
   }

// gets dice image
function getImg( num ) 
   {
  
    // returns image path
    return "images/dice" + num + ".png";
        
   }

main();