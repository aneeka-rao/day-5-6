const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
}
else{
    countries.push("Ethiopia")
    console.log(countries)
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess")
}
else{
    webTechs.push("Sass")
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

console.log(countries.slice(0,10))

if(countries.length%2==1){
    console.log(countries[(countries.length-1)/2])
}
else{
    console.log(countries[(countries.length-1)/2])
    console.log(countries[(countries.length-1)/2-1])
}

if(countries.length%2==1){
    let countries1=[countries.slice(0, (countries.length-1)/2+1)]
    console.log(countries1)
    let countries2=[countries.slice(-((countries.length-1)/2))]
    console.log(countries2)
}
else{
    let countries1=[countries.slice(0, countries.length/2)]
}

function color(){
    let num1=Math.floor(Math.random()*256)
    let num2=Math.floor(Math.random()*256)
    let num3=Math.floor(Math.random()*256)
    document.querySelector("body").style.backgroundColor=`rgb(${num1}, ${num2}, ${num3})`
}
color()