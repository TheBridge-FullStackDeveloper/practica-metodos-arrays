const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//* FOREACH

// forEach pintar el nombre de las companies
companies.forEach((company)=> console.log(company.name))

//* FILTER

// Pintar las edades que cumplan la mayoría de edad
const ages18 = ages.filter(age => age >= 18)
console.log(ages18)

// Pintar las companies que tienen la categoría Retail
const companiesWithCategoryRetail = companies.filter(company => company.category =="Retail")
console.log(companiesWithCategoryRetail)
// Pintar las companies que empezarón en los 90 o en adelante
const companiesEighties = companies.filter(company =>company.start >= 1990)
console.log(companiesEighties)

//* MAP

// Crear Array con los nombres de las companies
const companiesName = companies.map(company => company.name)
console.log(companiesName)
// Crear Array con los nombres y categorias de las companies
const companiesNameAndCategory = companies.map(company => {
 const newCompany= {
  name:company.name,
  category:company.category
 }
 return newCompany
})

console.log(companiesNameAndCategory)

//* REDUCE

//sumar todas las edades
const sumAges = ages.reduce((a,b)=>a+b,0)
console.log(sumAges)
