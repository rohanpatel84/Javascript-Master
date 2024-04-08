// koi pn varible ne ana declartion phela run karye and error na aape ane hoisting kevay

// debugger

    console.log(a);

    var a = "rohan"

    //let and const ma temporal dead zone 
    // var ma undefind 


    //function declaration
    function userName() {
        console.log("hi, rohan patel")
    }
    userName();



    // sayhii();  

    // const na case ma error aave che 
    // var ma undefind

    //function Expression
    const sayhii = function() {
        console.log("hello ji")
    }

    sayhii()
