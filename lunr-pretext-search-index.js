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
  "id": "data-AirBnB",
  "level": "1",
  "url": "data-AirBnB.html",
  "type": "Section",
  "number": "2.1",
  "title": "AirBnB Data Set",
  "body": " AirBnB Data Set   This is a reference page to quickly find the data set we'll be using for the labs this semester. As you work through the different labs, you should be saving your jamovi file to reflect the changes we'll make to this data set as we work through it, but you can always download the original data here. Similarly, you can find the data dictionary to get a basic review of what the data set is and what the variables measure.    Download      AirBnB.csv     Alternatively, you can download a jamovi-specific file: AirBnB.omv        Data Dictionary   General Information    Rows:  38199    Columns:  18    Source:  InsideAirBnB.com    Year:  2024      Variable Descriptions    id  AirBnB's unique identifier for the listing. Often, this corresponds with the URL of the listing: https:\/\/www.airbnb\/rooms\/[ID Goes Here]    name  Name of the listing, as set by the host.    host_id  AirBnB's unique identifier for the host. Often, this corresponds with the URL of the host's profile: https:\/\/www.airbnb\/user\/show\/[ID Goes Here]    host_name  Name of the host (typically their first name)    neighbourhood_group  Name of the borough where the listing is located, based on the longitude and latitude.    neighbourhood  Name of the neighbourhood where the listing is located.    latitude  The latitude of the listing, a part of the coordinates to give a precise location.    longitude  The longitude of the listing, a part of the coordinates to give a precise location.    room_type  The type of listing: Entire home\/apt, Hotel room, Private room, or Shared room.    price  The daily price (in USD).    minimum_night  The minimum number of nights required to book the listing, as set by the host.    number_of_reviews  The total number of reviews that the listing has received.    last_review  The date of the latest review, where date is in the format YYYY-MM-DD.    reviewers_per_month  The total number of reviews that the listing has received divided by the total number of months the listing has been posted.    calculated_host_listings_count  The total number of listings the host has in New York City.    availability_365  The number of days that the listing is available in the next year.    number_of_reviews_ltm  The number of reviews that the listing has received in the last 12 months.    license  The license, permit, or registration number.      "
},
{
  "id": "subsec-DictionaryAirBnB-2",
  "level": "2",
  "url": "data-AirBnB.html#subsec-DictionaryAirBnB-2",
  "type": "Table",
  "number": "2.1.1",
  "title": "General Information",
  "body": " General Information    Rows:  38199    Columns:  18    Source:  InsideAirBnB.com    Year:  2024    "
},
{
  "id": "subsec-DictionaryAirBnB-3",
  "level": "2",
  "url": "data-AirBnB.html#subsec-DictionaryAirBnB-3",
  "type": "Table",
  "number": "2.1.2",
  "title": "Variable Descriptions",
  "body": " Variable Descriptions    id  AirBnB's unique identifier for the listing. Often, this corresponds with the URL of the listing: https:\/\/www.airbnb\/rooms\/[ID Goes Here]    name  Name of the listing, as set by the host.    host_id  AirBnB's unique identifier for the host. Often, this corresponds with the URL of the host's profile: https:\/\/www.airbnb\/user\/show\/[ID Goes Here]    host_name  Name of the host (typically their first name)    neighbourhood_group  Name of the borough where the listing is located, based on the longitude and latitude.    neighbourhood  Name of the neighbourhood where the listing is located.    latitude  The latitude of the listing, a part of the coordinates to give a precise location.    longitude  The longitude of the listing, a part of the coordinates to give a precise location.    room_type  The type of listing: Entire home\/apt, Hotel room, Private room, or Shared room.    price  The daily price (in USD).    minimum_night  The minimum number of nights required to book the listing, as set by the host.    number_of_reviews  The total number of reviews that the listing has received.    last_review  The date of the latest review, where date is in the format YYYY-MM-DD.    reviewers_per_month  The total number of reviews that the listing has received divided by the total number of months the listing has been posted.    calculated_host_listings_count  The total number of listings the host has in New York City.    availability_365  The number of days that the listing is available in the next year.    number_of_reviews_ltm  The number of reviews that the listing has received in the last 12 months.    license  The license, permit, or registration number.    "
},
{
  "id": "lab1-introduction",
  "level": "1",
  "url": "lab1-introduction.html",
  "type": "Section",
  "number": "3.1",
  "title": "Lab 1: Introduction to jamovi",
  "body": " Lab 1: Introduction to jamovi   Our first jamovi lab! In this lab, we'll prioritize just getting a handle on what jamovi is, how to navigate it, and do a small amount of data exploration: nothing too much for now, but enough to start getting used to the software.   What You'll Need      jamovi : This is the software we'll be using for the whole semester. It's free and open source and available on (almost) any setup you've got. Visit https:\/\/www.jamovi.org\/download.html to get started on downloading and installing this. You'll need to do this on a computer (laptop, desktop, or chromebook is fine), and please make sure this is something you'll be able to use for the semester.     Data : We're going to mostly work through the same data set all semester in these labs (we might mix it up once or twice). The dataset that we'll use for the labs is a collection of AirBnB data from AirBnB listings in New York City. More information on the data and a link to download can be found in the data dictionary: .        Tasks   Starting jamovi  Once you've downloaded and installed it on whatever computer you are using, go ahead and launch jamovi. You should see a screen similar to the screenshot below.   Screenshot of jamovi, after it opens.   A two pane window display. On the left pane is a blank spreadsheet. On the right pane is a blank document view, with the jamovi logo. Above are various buttons and menus.    Jamovi is a mix of spreadsheet (to hold, organize, and view our data) and analysis (which will appear on the right-most panel as we perform it). For us to use it, we'll need to load up the data set we are working with.  Save the AirBnB.csv file from the page somewhere that is easy to find. In jamovi, open the menu in the top left (the three horizontal bars) and select Open , and then Browse . Locate the .csv file that you downloaded and open it.   Alternatively, you can download the data in the jamovi .omv format, and use that. Whenever we reference the .csv file, you can simply use the .omv file that you downloaded.   Once this is opened, you should see the data in jamovi.   Screenshot of jamovi, with the AirBnB data set opened.   A two pane window display. On the left pane is a spreadhseet with data. On the right pane is a blank document view, with the jamovi logo. Above are various buttons and menus.    You can see that the spreadsheet portion has been filled in with different columns, each representing a variable in the dataset. Each row represents a single observational unit. Each cell (the intersection of a row and column) is the measurement recorded from that unit for that variable.    Exploring Variables  Something to notice is the icon on each variable name in the columns of the spreadsheet. These icons correspond with the types of variables. Sometimes jamovi misinterprets what the variables are, so it's always good to check these. Click on the Variables tab on the top of the screen. You should see a list of all 18 variables. You can add a description to each, which can be helpful for long-term projects, so you don't have to keep looking up what each variable represents. If you double-click on any variable, a menu will pop up on the top with some options. The main thing we'll be concerned with, for now, is Measure type.   For instance, the variable id is labeled as a Continuous, with the Data type listed as Integer. This is clearly a mistake, due to the fact that every observational unit was assigned an ID number. Jamovi has a specific measure type for IDs, so change it from Continuous to ID. As you look through the rest of the variables, you'll see a mix of ID variables, nominal variables, and continuous variables. For categorical variables (nominal or ordinal), you can also see the levels. For an ordinal variable, you can arrange the order of the levels.    Do any other variable types need to be fixed? You'll need to know what these variables actually represent, so now is a great time to read through the data documentation below as well as view the data itself in the spreadsheet view, by clicking on the Data tab.      Pick a variable that jamovi identifies (or that you fix, so that jamovi identifies) as continuous. Explain why this is a continuous variable.      Pick a variable that jamovi identifies (or that you fix, so that jamovi identifies) as nominal. Explain why this is a nominal variable.    You should have a decent idea of what these variables look like and what they are measuring. Let's investigate them a bit more carefully.  Click on the Analyses tab on the top of the screen, and then click on Exploration and then Descriptives . You now have a list of the variables on the left: You can add one or more to the Variables pane to display some summaries and descriptions of the variables. You can change what statistics are displayed in the Statistics menu underneath the list of variables, and you can change the orientation of the table that is displayed by switching the dropdown menu back and forth between Variables across rows and Variables across columns.     How many observations are recorded for the variable number_of_reviews ? How many are missing? What about the number of observations for reviews_per_month ? How many are missing? Explain.    You will also notice that in the bottom Plots menu, you can summarize variables visually with some different options. Feel free to try some of these, although you are not required to create any specific plots yet.    New Variable  Something that you might have noticed is that there's not a comfortable way to handle the last_review variable. This variable is a date, but jamovi labels it as an ID measurement, and there's not really a nice alternative...it's not a continuous measurement: it's ordinal! But we can't just drag and drop every single date to be put in order. Different statistical software will include a date variable type, but jamovi doesn't have this. This isn't a problem for us, and we'll extract some of the information about the date of the most recent review by creating a new variable.  In the Variables tab (at the top of your screen), you'll notice that we have the option to add a new variable. You can either click the Add button on the top, or use the + button near the bottom. Select Computed Variable, and you can either insert it in the list of variables where you've selected or append it to the end (it doesn't really make a difference).  Name your computed variable last_review_year , and in the formula box we'll use the following code. INT(SPLIT(last_review, \"-\", 1)) Here's what it does:   The SPLIT() function does exactly what it says: it splits up some text.    The first input to this function is the name of the variable that we will split. So SPLIT(last_review, is saying that we will divide up the responses to the last_review variable.    The second input to this function is the symbol that we will use to split up these dates. We're going to direct jamovi to split up the dates based on the hyphens, since the dates are in the format YYYY-MM-DD.    The third input tells jamovi which piece to report. We have split these dates into three sections: YYYY, MM, and DD. We are directing jamovi to report the first piece, the year.    Lastly, we wrap this up in the INT() function, which tells jamovi to treat this as if it were an integer. Otherwise, jamovi would treat this as a nominal variable.       What is the median year for the last review? What is the minimum year for the last review?    If, later on, we would like to have information about the month of the most recent review, we can tinker with the code to create a new variable that pulls the 2nd piece from the split up date.    Another New Variable  Let's add one more variable. This one won't be as useful immediately, but will hopefully model some useful ideas for your own project.  We have two variables that we'll look at: price and minimum_nights . Wouldn't it be nice to look at a minimum price? Since the price variable is a measurement of price\/night, we might just multiply price and minimum_nights together.  Create a new calculated variable called minimum_price where the variable is defined by the following formula. price * minimum_nights     What is the average (mean) value of minimum_price ? What is the maximum value?    Hopefully you're feeling pretty confident and familiar with this data set. We'll work with it some more throughout the rest of the lab assignments. As we go, we'll learn a lot about this data set, but we'll also learn some tricks and tools to use on your own data sets as you construct the pieces of your project for the semester.     Save Your Progress  You have made some small changes to this data set (fixing variable types and creating new variables), and it will be helpful to use this in future labs. In the main menu in the top left (the three horizontal bars), you can either Save As a .omv file, or you can Export a .csv file. If you export the .csv file, you will be able to use this data with many other applications (this is a common file storage type for datasets), but you will lose the changes you made to the variable types and descriptions to the variables. The .omv file will retain this information, but is not as common (since it's specific to jamovi). It will definitely be useful, though, as you work on your project.  Choose to Save As a .omv file, and remember where you save it: we'll access this to work on the rest of the labs.   It will likely be useful to set up a folder to organize these labs and your project. Something like:  StatsClass  └── Project  └── Labs  └── AirBnB.csv  └── Lab1.omv      "
},
{
  "id": "fig-jamovi",
  "level": "2",
  "url": "lab1-introduction.html#fig-jamovi",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " Screenshot of jamovi, after it opens.   A two pane window display. On the left pane is a blank spreadsheet. On the right pane is a blank document view, with the jamovi logo. Above are various buttons and menus.   "
},
{
  "id": "subsubsec-StartingJamovi-6",
  "level": "2",
  "url": "lab1-introduction.html#subsubsec-StartingJamovi-6",
  "type": "Note",
  "number": "3.1.2",
  "title": "",
  "body": " Alternatively, you can download the data in the jamovi .omv format, and use that. Whenever we reference the .csv file, you can simply use the .omv file that you downloaded.  "
},
{
  "id": "fig-data",
  "level": "2",
  "url": "lab1-introduction.html#fig-data",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " Screenshot of jamovi, with the AirBnB data set opened.   A two pane window display. On the left pane is a spreadhseet with data. On the right pane is a blank document view, with the jamovi logo. Above are various buttons and menus.   "
},
{
  "id": "subsubsec-ExploringVariables-4",
  "level": "2",
  "url": "lab1-introduction.html#subsubsec-ExploringVariables-4",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "",
  "body": "  Do any other variable types need to be fixed? You'll need to know what these variables actually represent, so now is a great time to read through the data documentation below as well as view the data itself in the spreadsheet view, by clicking on the Data tab.   "
},
{
  "id": "subsubsec-ExploringVariables-5",
  "level": "2",
  "url": "lab1-introduction.html#subsubsec-ExploringVariables-5",
  "type": "Checkpoint",
  "number": "3.1.5",
  "title": "",
  "body": "  Pick a variable that jamovi identifies (or that you fix, so that jamovi identifies) as continuous. Explain why this is a continuous variable.   "
},
{
  "id": "subsubsec-ExploringVariables-6",
  "level": "2",
  "url": "lab1-introduction.html#subsubsec-ExploringVariables-6",
  "type": "Checkpoint",
  "number": "3.1.6",
  "title": "",
  "body": "  Pick a variable that jamovi identifies (or that you fix, so that jamovi identifies) as nominal. Explain why this is a nominal variable.   "
},
{
  "id": "subsubsec-ExploringVariables-9",
  "level": "2",
  "url": "lab1-introduction.html#subsubsec-ExploringVariables-9",
  "type": "Checkpoint",
  "number": "3.1.7",
  "title": "",
  "body": "  How many observations are recorded for the variable number_of_reviews ? How many are missing? What about the number of observations for reviews_per_month ? How many are missing? Explain.   "
},
{
  "id": "subsubsec-NewVariable-5",
  "level": "2",
  "url": "lab1-introduction.html#subsubsec-NewVariable-5",
  "type": "Checkpoint",
  "number": "3.1.8",
  "title": "",
  "body": "  What is the median year for the last review? What is the minimum year for the last review?   "
},
{
  "id": "subsec-AnotherNewVariable-5",
  "level": "2",
  "url": "lab1-introduction.html#subsec-AnotherNewVariable-5",
  "type": "Checkpoint",
  "number": "3.1.9",
  "title": "",
  "body": "  What is the average (mean) value of minimum_price ? What is the maximum value?   "
},
{
  "id": "lab1-introduction-4-4",
  "level": "2",
  "url": "lab1-introduction.html#lab1-introduction-4-4",
  "type": "Note",
  "number": "3.1.10",
  "title": "",
  "body": " It will likely be useful to set up a folder to organize these labs and your project. Something like:  StatsClass  └── Project  └── Labs  └── AirBnB.csv  └── Lab1.omv    "
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
