/*
1. JSON stands for JavaScript Object Notation
2. It is used to send the data from Server to the client or to fetch the data from API
3. Json format starts with a curly braces , means its also an object...but not exactly like an object
    as Object can also contains methods and expressions but JSON should be strictly in key value pairs
4. IN JSOn, key should be string only whereas value can be String,Number,boolean,Array,Null,Object but
    cannot have functions and expression unlike Objects in JS.
5. It is just used to Represent Data.
6. Json gets stored into .json File (can also be stored into .js file also).
7. Think of it like an Array of Objects [{},{},{}] where data is stored in JSON Format only i.e. Key-Value

*/
[
{
    "Name" : "Sumit",
    "age" : 27,
    "address" : {
        "street" : "2nd Street",
        "city" : "delhi",
        "pincode" : "110094"
    },
    "PhoneNos" : [9540004643,987654345]
},
{
    "Name" : "Sharma",
    "age": 28,
    "address" : {
        "street" : "3rd Street",
        "city" : "Noida",
        "pincode" : "110032"
    },
    "PhoneNos" : [987654356,876545679]
}
]