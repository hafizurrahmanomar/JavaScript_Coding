// variables naming rules in the below:

/*
    The general rules for constructing names for variables (unique identifiers) are:
    Names can contain letters, digits, underscores, and dollar signs.
    Names are case sensitive (a and A are different variables)
    Reserved words (like JavaScript keywords) cannot be used as names*/
    
// JavaScript  Reserved  keywords:

    /* abstract,arguments,	boolean,	break,byte,	case,	catch,	char,const,	continue,debugger,	default,delete,	do,	double,	else,eval,	false,	final,	finally,float,for,	function,	goto,if,	implements,	in,	instanceof,int,	interface,	let,long,native,	new,	null,	package,private,	protected,	public,	return,
    short,	static,	switch,	synchronized,this,	throw,	throws,	transient,true,	try,typeof,	var,void,	volatile,	while,	with,yield,class,	enum,	export,	extends,import,	super.

*/

/*
Underscore:first_name, last_name,Upper Camel Case (Pascal Case):FirstName, LastName,Lower Camel Case:firstName,lastName
*/

// variable can be declared first and then initialize

// var Name;
// var age;
// var Name,age,Village;
// Name ="Hafiz";
// age = 35;
// Village = "Ruppur";

/* 'var' keyword description */

// 1.Variables defined with 'var'  Redeclare.Variables defined with 'var 'must be Declared before use.

//2.Variables defined with 'var' Reassigned.

// 3.'var' keyword Redeclare a variable inside a block will also redeclare the variable outside the block

var Name = "Hafiz";

Name = "Nyeem";
var Name = "Toha";
var age = 35;
var Village = "Ruppur";

// console.log(Name);
// console.log(age);
// console.log(Village);

console.log("Welcome " + Name);
console.log("My age: " + age);
console.log("My Village: " + Village);

/* 'let' keyword description */

// 1.Variables defined with let cannot be Redeclare but Reassigned.
// 2.Variables defined with let must be Declared before use.
// 3.Variables defined with let have Block Scope.

let presentAddress = "Mymenshing";
presentAddress = "Gazipur";
// let presentAddress = "Dhaka"; // SyntaxError: 'presentAddress' has already been declared
console.log(presentAddress);

/* 'const' keyword description */

// 1.Variables defined with const cannot be Redeclare.

//2.Variables defined with const cannot be Reassigned.

//3.Variables defined with const have Block Scope.

const homeDistrict = "Pabna";
// homeDistrict = "dhaka"
// error
console.log(homeDistrict);

//CaseSensitive
const HomeDistrict ="Dhaka"
console.log(HomeDistrict);
