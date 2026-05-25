const assert = require('assert'); 
 
function greet(name) { 
    return `Hello, ${name}!`; 
} 
 
try { 
    assert.strictEqual(greet("World"), "Hello, World!"); 
    console.log(" Test passed!"); 
    process.exit(0); 
} catch (error) { 
    console.error(" Test failed:", error); 
    process.exit(1); 
} 
