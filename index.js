function introduction(name){
    //introduction(Josh)
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language) {
    //name = "Josh"
    //language = "ember.js"
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`  
}