const language=["Python","C++","Java","Javascript"]
const project=["Hotel Management","Bank Management","Notetaker"]
language.push(project);//by pushing project array in the language we are adding project array as
// a single element of language
console.log(language);


// concat-> it will spread the elements of the array which we are concating to the original array
const main=[1,2,3,4]
const next=[5,6,7,8,9]
// const newArray=main.concat(next,project) we are allowed to concat multiple arrays
const newArray=main.concat(next)
console.log(newArray);


// ... operator -> it can also be used 