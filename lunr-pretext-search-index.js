var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-jamovi",
  "level": "1",
  "url": "ch-jamovi.html",
  "type": "Chapter",
  "number": "1",
  "title": "Software: Jamovi",
  "body": " Software: Jamovi   Welcome to the class! This initial chapter will serve as a guide to getting started with the software that we'll be using for these labs, and eventually for your project.     "
},
{
  "id": "ch-datasets",
  "level": "1",
  "url": "ch-datasets.html",
  "type": "Chapter",
  "number": "2",
  "title": "Data Sets",
  "body": " Data Sets   We start with the data documentation. This will serve as a helpful reference as you work with different data sets, but also as a way of deciding which data set you would like to use for your project.  Each section will include:   A link to download the data set in multiple formats.    A brief description of what the data set is about and where it came from.    A data dictionary, with details about each variable (or column) in the data set.        "
},
{
  "id": "ch-labassignments",
  "level": "1",
  "url": "ch-labassignments.html",
  "type": "Chapter",
  "number": "3",
  "title": "Lab Assignments",
  "body": " Lab Assignments   Each of the lab assignments for this course are listed below.     "
},
{
  "id": "ch-projectdetails",
  "level": "1",
  "url": "ch-projectdetails.html",
  "type": "Chapter",
  "number": "4",
  "title": "Project Parts and Details",
  "body": " Project Parts and Details   Each of the project part submissions are described here.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
