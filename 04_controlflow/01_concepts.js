/*Let's talk about JEC (JAVASCRIPT EXECUTION CONTEXT)
-> GLOBAL EC
-> FUNCTION EC
-> EVAL EC 

JAVASCRIPT code executes in two phases 
1) Memory Creation phase or Creation phase 
2) Execution phase 

-------------------- Steps of Execution -------------------------------
# Whatever the code is , it will be 1st execute in Global execution and located in (this) 
# In the memory phase all the variables got collected and just stored , initially all the variables will assign undefined value . 
#In the execution phase all the variable will get their original values ,
if there is a function in your program then whenever the function called it will create a box called new executional context which contains (new environment variable + Execution thread) 
-> Cycle gets repeated the times when function gets called . after the prodcess it gets deleted .*/
