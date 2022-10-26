/*
    1.a.) The InnerFunction() is a closure as this function contains the scope of the variables present in the parent function.
    1.b.) The output of the given program is 100 as the inner function is a closure and can access the parent function variables.
*/ 


/* 
    2.) Scope determines the visibility of variables. 
        JavaScript has 3 types of scope:
            *Block scope
            *Function scope
            *Global scope

        
        Closures in the other hand are inner functions which have access to the parent scope.
*/


/* 
    3.) Lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. 
        Nested functions have access to variables declared in their outer scope.

        The closures maintains a reference to the lexical environment in which the name exists. Using this reference it can accecss the outer function variables.

*/

/*
    4.) The output of the given program is:
            3
            3
            3
*/