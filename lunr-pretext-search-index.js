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
  "body": " AirBnB Data Set   This is a reference page to quickly find the data set we'll be using for the labs this semester. As you work through the different labs, you should be saving your jamovi file to reflect the changes we'll make to this data set as we work through it, but you can always download the original data here. Similarly, you can find the data dictionary to get a basic review of what the data set is and what the variables measure.    Download      AirBnB.csv     Alternatively, you can download a jamovi-specific file: AirBnB.omv        Data Dictionary   General Information    Rows:  38199    Columns:  18    Source:  InsideAirBnB.com    Year:  2024      Variable Descriptions     id  AirBnB's unique identifier for the listing. Often, this corresponds with the URL of the listing: https:\/\/www.airbnb\/rooms\/[ID Goes Here]    name  Name of the listing, as set by the host.    host_id  AirBnB's unique identifier for the host. Often, this corresponds with the URL of the host's profile: https:\/\/www.airbnb\/user\/show\/[ID Goes Here]    host_name  Name of the host (typically their first name)    neighbourhood_group  Name of the borough where the listing is located, based on the longitude and latitude.    neighbourhood  Name of the neighbourhood where the listing is located.    latitude  The latitude of the listing, a part of the coordinates to give a precise location.    longitude  The longitude of the listing, a part of the coordinates to give a precise location.    room_type  The type of listing: Entire home\/apt, Hotel room, Private room, or Shared room.    price  The daily price (in USD).    minimum_night  The minimum number of nights required to book the listing, as set by the host.    number_of_reviews  The total number of reviews that the listing has received.    last_review  The date of the latest review, where date is in the format YYYY-MM-DD.    reviewers_per_month  The total number of reviews that the listing has received divided by the total number of months the listing has been posted.    calculated_host_listings_count  The total number of listings the host has in New York City.    availability_365  The number of days that the listing is available in the next year.    number_of_reviews_ltm  The number of reviews that the listing has received in the last 12 months.    license  The license, permit, or registration number.      "
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
  "body": " Variable Descriptions     id  AirBnB's unique identifier for the listing. Often, this corresponds with the URL of the listing: https:\/\/www.airbnb\/rooms\/[ID Goes Here]    name  Name of the listing, as set by the host.    host_id  AirBnB's unique identifier for the host. Often, this corresponds with the URL of the host's profile: https:\/\/www.airbnb\/user\/show\/[ID Goes Here]    host_name  Name of the host (typically their first name)    neighbourhood_group  Name of the borough where the listing is located, based on the longitude and latitude.    neighbourhood  Name of the neighbourhood where the listing is located.    latitude  The latitude of the listing, a part of the coordinates to give a precise location.    longitude  The longitude of the listing, a part of the coordinates to give a precise location.    room_type  The type of listing: Entire home\/apt, Hotel room, Private room, or Shared room.    price  The daily price (in USD).    minimum_night  The minimum number of nights required to book the listing, as set by the host.    number_of_reviews  The total number of reviews that the listing has received.    last_review  The date of the latest review, where date is in the format YYYY-MM-DD.    reviewers_per_month  The total number of reviews that the listing has received divided by the total number of months the listing has been posted.    calculated_host_listings_count  The total number of listings the host has in New York City.    availability_365  The number of days that the listing is available in the next year.    number_of_reviews_ltm  The number of reviews that the listing has received in the last 12 months.    license  The license, permit, or registration number.    "
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
  "id": "lab2-summarizingvariables",
  "level": "1",
  "url": "lab2-summarizingvariables.html",
  "type": "Section",
  "number": "3.2",
  "title": "Lab 2: Summarizing Variables",
  "body": " Lab 2: Summarizing Variables   In this second jamovi lab, we'll work on building some basic summaries (plots and calculations) of variables (both numerical and categorical). This is really one of the first things we should do with a new data set after learning what the variables represent. We'll explore the data by getting to know not only what each variable represents, but also what the different observations look like and how they act as a group.   What You'll Need   Data: : we're going to use the same AirBnB data set from Lab 1, and it might be nice to use the version you saved afterwards. Load that data up by either opening the .csv file or the .omv file that you saved from Lab 1 .     Tasks   We're going to start off small with just getting an idea of how to visualize histograms, boxplots, and different bar graphs, and how to calculate the different summary statistics we might use to talk about the center and variability of a variable. Afterwards, we'll do a bit more data manipulation to get some more interesting plots.    Summarizing Numerical Variables  You've actually already seen how to get some summary statistics, but let's remind you: head over to the Analyses tab and select Exploration and then Descriptives . First, move the price variable into the Variables box, and then under Plots , select Histogram.   Histograms are a great way to visualize and understand the distribution of a numerical variable, but we've seen how the shape can be impacted by the number of bins used to group our data: jamovi tries to choose a reasonable number of bins, but this isn't customizable (unfortunately). That said, these plots are great for exploration, even if we might want to be able to customize them before putting them into an official report.  Anyways, you now have a table of different summary stats (and you can toggle different ones off or on in the Statistics menu) as well as a histogram for the price variable.    Describe the distribution of prices by describing the shape, interpreting a reasonable measure of center as well as a reasonable measure of variability. Notice that the choice of measure of center and variability should depend on the shape.    Note that there are a bunch of missing prices: these represent listings that aren't actually available to book currently, for some reason.    Add the variables latitude and longitude to the Variables box. Why do these histograms look different from the one describing prices? Explain the differences.    In the table of summary statistics, we can see that the mean and median are reported with values rounded. This is an option we can change! In the menu in the top-right, with three dots, you can change the general number format of results. The default is to use 3 significant figures. Change this to 3 decimal places.    You can search coordinates on google maps by writing them in the form latitude, longitude: a search of \"41.692, -87.840\" on google maps will find Moraine Valley Community College's campus. Use the mean latitude and longitude to find the average location of an AirBnB on google maps. Now use the median latitude and longitude. What are the differences in the types of locations you find? Which one do you think would better represent the average location of an AirBnB in New York City? Is there a meaningful difference?      Summarizing Categorical Variables  Let's swap out these numerical variables for some categorical ones. Change the variables we're looking at to room_type . Notice that in the table of descriptive\/summary statistics, there's nothing calculated: of course not, since the responses aren't numbers! Feel free to deselect all of the different calculations in the Statistics menu, although it's still sometimes nice to have the sample size and the number of missing observations in there, just for reference.  Now, select the Frequency tables option (right under the Variables and Split by windows). This option is only available to nominal and ordinal variables (you can see the little icons for them), and should give you a quick display of the frequency (counts) and proportion (% of Total) for each level of the room_type variable. In the Plots menu, you can select Bar plot to visualize this distribution.    Which room types are most common? Describe the distribution of different room types in words.    Add neighborhood_group to the Variables window.    Which neighborhoods are most popular for hosting an AirBnB? Describe the proportions for each borough.    The default bar plots are very basic, but there are more options available in jamovi by installing a Module. Click on the Modules button in the top right of your screen, and select jamovi library. You should see the following popup.   The jamovi Modules menu.   A menu showing different jamovi modules, including scatr, Rj, and jpower. Each has a description and a button to Install. There is a scrollbar, indicating that there are more. There is a search bar on the top.    This is where we can manage different add-ons for jamovi to accomplish specific tasks. In the search bar, search for surveymv , a module that \"Generates summary plots for your survey data.\" Click Install , and then cluck the up arrow in the top right to close the menu. You'll now have a new option to select in the Exploration menu called Survey Plots . Select it now.  This should look familiar: you can drag your variables into a Variables window, and there are two menus with different plot options (one menu for categorical variables and one for continuous variables). Using the different options, replicate this plot (without the Example watermark, of course).   Example plot to replicate.   A plot labeled neighbourhood_group. The plot is a bar with 4 different sections: a small red one labeled 3%, a larger green one labeled 37%, a similarly sized yellow one labeled 44%, a smaller grey one labeled 15%, and a tiny blue one labeled 1%. These are, in order, representative of Bronx, Brooklyn, Manhattan, Queens, and Staten Island.    You can save your plots in a couple of different ways: if you right click on the picture of it, there is an option to copy the image. In my experience, this is a bit buggy, and the image doesn't always paste (I think it depends on what program you're pasting it into, but I don't know). You can also export the image, where you get different options to save it as a .pdf file or a .png image file. Save your graph as a .png file.    Upload your plot in the Lab Submission assignment!      Adding a Filter  Let's say that we only want to look at active AirBnB listings: ones that have been reviewed in 2023 or 2024 (the most recent year in this dataset). Luckily you have already created a last_review_year variable! (If you need to re-create it, go back to the instructions from Lab 1 ).  Click on the Data tab on the top of your screen, and you'll notice that one of the buttons near the top is for Filters . We'll create a filter, where the rule is last_review_year >= 2023 . This will only keep the rows in our data set where the value for the last_review_year variable is greater than, or equal to, 2023. So really this is just selecting the listings that were reviewed in 2023 or 2024.   Active filter, showing only the listings with recent reviews.   The jamovi spreadsheet view, with a small window above it showing the filter for last_review_year from 2023 larger. The spreadsheet has some rows that are grey and faded, with a red X on a column labeled for the filter. The visible rows have a green check on the column for the filter.    You can see a couple of things to note: the rows that have their most current review prior to 2023 are greyed out, you can see how many rows were filtered in the bottom of the screen, and there's a toggle on the filter itself to turn it off and on.  Let's investigate one more numerical variable in this new context (with only the filtered data). Find the five number summary (minimum, 25th percentile, median, 75th percentile, and maximum) for the availability_365 variable. Then, display a boxplot to see this summary visually.    Calculate the IQR for the filtered availability_365 variable (either by hand, or by selecting it as a descriptive statistic to show). Interpret this value, noting that it might be helpful to also report Q1 and Q3 in this interpretation.       Save Your Progress  It will still be helpful to save your progress, here! We'll likely return to this, whether to use the actual Filter that we set up or to use as a reference for some other data set for a project. If you don't want to keep all of the plots and tables up, you can right-click and select Remove from the All menu.   "
},
{
  "id": "subsubsec-SummarizingNumericalVariables-5",
  "level": "2",
  "url": "lab2-summarizingvariables.html#subsubsec-SummarizingNumericalVariables-5",
  "type": "Checkpoint",
  "number": "3.2.1",
  "title": "",
  "body": "  Describe the distribution of prices by describing the shape, interpreting a reasonable measure of center as well as a reasonable measure of variability. Notice that the choice of measure of center and variability should depend on the shape.   "
},
{
  "id": "subsubsec-SummarizingNumericalVariables-7",
  "level": "2",
  "url": "lab2-summarizingvariables.html#subsubsec-SummarizingNumericalVariables-7",
  "type": "Checkpoint",
  "number": "3.2.2",
  "title": "",
  "body": "  Add the variables latitude and longitude to the Variables box. Why do these histograms look different from the one describing prices? Explain the differences.   "
},
{
  "id": "subsubsec-SummarizingNumericalVariables-9",
  "level": "2",
  "url": "lab2-summarizingvariables.html#subsubsec-SummarizingNumericalVariables-9",
  "type": "Checkpoint",
  "number": "3.2.3",
  "title": "",
  "body": "  You can search coordinates on google maps by writing them in the form latitude, longitude: a search of \"41.692, -87.840\" on google maps will find Moraine Valley Community College's campus. Use the mean latitude and longitude to find the average location of an AirBnB on google maps. Now use the median latitude and longitude. What are the differences in the types of locations you find? Which one do you think would better represent the average location of an AirBnB in New York City? Is there a meaningful difference?   "
},
{
  "id": "subsubsec-SummarizingCategoricalVariables-4",
  "level": "2",
  "url": "lab2-summarizingvariables.html#subsubsec-SummarizingCategoricalVariables-4",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "",
  "body": "  Which room types are most common? Describe the distribution of different room types in words.   "
},
{
  "id": "subsubsec-SummarizingCategoricalVariables-6",
  "level": "2",
  "url": "lab2-summarizingvariables.html#subsubsec-SummarizingCategoricalVariables-6",
  "type": "Checkpoint",
  "number": "3.2.5",
  "title": "",
  "body": "  Which neighborhoods are most popular for hosting an AirBnB? Describe the proportions for each borough.   "
},
{
  "id": "fig-modules",
  "level": "2",
  "url": "lab2-summarizingvariables.html#fig-modules",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " The jamovi Modules menu.   A menu showing different jamovi modules, including scatr, Rj, and jpower. Each has a description and a button to Install. There is a scrollbar, indicating that there are more. There is a search bar on the top.   "
},
{
  "id": "fig-exampleplot",
  "level": "2",
  "url": "lab2-summarizingvariables.html#fig-exampleplot",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " Example plot to replicate.   A plot labeled neighbourhood_group. The plot is a bar with 4 different sections: a small red one labeled 3%, a larger green one labeled 37%, a similarly sized yellow one labeled 44%, a smaller grey one labeled 15%, and a tiny blue one labeled 1%. These are, in order, representative of Bronx, Brooklyn, Manhattan, Queens, and Staten Island.   "
},
{
  "id": "subsubsec-SummarizingCategoricalVariables-13",
  "level": "2",
  "url": "lab2-summarizingvariables.html#subsubsec-SummarizingCategoricalVariables-13",
  "type": "Checkpoint",
  "number": "3.2.8",
  "title": "",
  "body": "  Upload your plot in the Lab Submission assignment!   "
},
{
  "id": "fig-filter",
  "level": "2",
  "url": "lab2-summarizingvariables.html#fig-filter",
  "type": "Figure",
  "number": "3.2.9",
  "title": "",
  "body": " Active filter, showing only the listings with recent reviews.   The jamovi spreadsheet view, with a small window above it showing the filter for last_review_year from 2023 larger. The spreadsheet has some rows that are grey and faded, with a red X on a column labeled for the filter. The visible rows have a green check on the column for the filter.   "
},
{
  "id": "subsec-AddingAFilter-7",
  "level": "2",
  "url": "lab2-summarizingvariables.html#subsec-AddingAFilter-7",
  "type": "Checkpoint",
  "number": "3.2.10",
  "title": "",
  "body": "  Calculate the IQR for the filtered availability_365 variable (either by hand, or by selecting it as a descriptive statistic to show). Interpret this value, noting that it might be helpful to also report Q1 and Q3 in this interpretation.   "
},
{
  "id": "lab3-moredataviz",
  "level": "1",
  "url": "lab3-moredataviz.html",
  "type": "Section",
  "number": "3.3",
  "title": "Lab 3: More Data Visualization",
  "body": " Lab 3: More Data Visualization   In this lab assignment, we're going to build a couple of more data visualizations, where the focus is less on summarizing a single variable and more on exploring connections between variables. We aren't doing any formal tests, but we are doing some preliminary work towards answering a research question.   What You'll Need      Data: we're going to continue to use the AirBnB data set. Hopefully you have an up-to-date version of this, with the changes we've made in the previous labs.     Questions: before getting into this lab, see if you can come up with some questions to consider, specifically about relationships between variables. I'll add a couple of mine, and we'll look at those, but this is an important process to get comfortable with, since you'll be doing this on your own for your project. We'll come up with questions about:   a pair of two categorical variables.    a pair of two numerical variables.    a categorical variable and a numerical variable.           Tasks   We're going to begin investigating three questions in this lab.   Is the distribution of AirBnB listings different across different boroughs?    Is there a connection between the price of a listing and the minimum number of nights required to book it?    Are the different types of listings available in the same way for the next year?       Listing Type by Borough  We'll start by opening the Analyses tab and selecting Descriptives from the Exploration menu, as normal. Since we want to explore the distribution of the listing types, we'll add room_type to the Variables box. But now we can add a variable to the Split by window as well: let's put neighbourhood_group into that. Since these are both categorical variables, we'll care about seeing a frequency table: select that. You might want to remove the selections from the Statistics menu, although I think seeing the overall sample size of the different boroughs is useful.  Notice that this does not produce a two-way table (a contingency table): instead, we have a table that is a bit hard to read, although the same information is there. Rows are grouped into the types of listing, and then each room type is broken up into the 5 boroughs. We'll see later on this semester how to build a contingency table easily in jamovi, but let's move on for now and start visualizing.  The default (and only) option in the Plots menu is the Bar plot: check it and look at the bar plot. Now go back to the setup with the variables selected and swap them: put room_type in the Split by window and neighbourhood_group in the Variables pane. You can compare the bar plots, and see which one helps you get a handle on the distributions of listing types across different boroughs. Does it look like there are some differences in the distribution of listing types across boroughs? What about this plot makes things easy to see, or difficult to see?  Let's try to create a better bar plot. First, we might want to not visualize the raw counts: with Brooklyn and Manhattan being so much more popular of a listing location than the other 3 boroughs, it can be hard to compare the distributions of listing types. Second, we want to try to condense this plot a bit: making it smaller will hopefully make it easier to compare the different boroughs.  Find the Survey Plots option in the Exploration menu, add room_type to the Variables window and then add neighbourhood_group to the Grouping Variable option.    Create a useful and readable plot that shows the different (proportional) distributions of room types grouped by boroughs. Save your plot as either a .pdf or a .png , and upload to the Lab Submission assignment.      Summarize your plot: are there some notable differences in the distribution of listing types across the different boroughs?      Price Compared to Minimum Number of Nights  In order for us to look at the relationship between two numerical variables, we'll think about a scatterplot. Scatterplots aren't included as a default plot type in the Descriptives menu. Instead, you'll find it under Exploration , where you can click Scatterplot .   If you don't have the Scatterplot option by default, that's fine! You can just install and add the scatr module. This is normally included as a default, but if that wasn't in your installation of jamovi, it's no problem! You can just add it yourself.   Now that we have our scatterplot menu open, we can add minimum_nights to the X-Axis box, and we can add price to the Y-Axis . You should notice that there are two observations with an enormous price. You can investigate them a bit!   Ok, I did, because I was curious! Here's the first one: https:\/\/www.airbnb.com\/rooms\/605115521796576121 . And here's the second one: https:\/\/www.airbnb.com\/rooms\/17160286 . You can see that they're both listed by the same person and both are listed with a minimum stay of 30 days for $100,000.00 per night. I'm assuming that these are artificially high prices so that the person listing these doesn't have to book it out for now! This (clearly) doesn't reflect the actual pricing of AirBnB listings.   Let's filter these ones out, so that we don't get these artificially high prices! Add a filter for price < 100000 .  You'll also notice that there are some absurdly high values for the minimum number of nights. I did a quick check of everything where the minimum number of nights was larger than a year: all of them were listings that hadn't been reviewed in a while, and had been booked for short periods of time in the past. In short, these listings aren't currently available: instead of jacking the price way up, they just have priced themselves out by forcing prospective visitors to stay for over a year!  Change your filter to price < 100000 and minimum_nights <= 365 .  Now we can look at the scatterplot! How would you explain the association (if any) between these two variables? Do we expect the prices of the listings to behave or be distributed differently for different numbers of minimum nights?    Save your plot as either a .pdf or a .png , and upload to the Lab Submission assignment.      Listing Type Availability  We'll keep the filter that we just created on: this will continue to show us only the listings that are presumably available to reserve. But now we'll look at how available these listings are in the next year. You have some good options for this plot, but, regardless of how you plot this, you'll be looking at availability_365 grouped or split by room_type . You can build histograms, boxplots, or density plots (a kind of \"smooth\" histogram) to compare these. Let's start!  In Descriptives (in the Exploration menu), display the following statistics:   N    Mean    Standard Deviation    Q1, Q2, Q3 (these are the 25th, 50th, and 75th percentiles, and note that the 50th percentile can also be found using the Median)    IQR   Before you visualize any plots, think about whether or not there are some differences in the way this variable is distributed across the different groups.  Now plot a histogram and box plot. Do these visuals match what you had thought when you looked at the summary statistics? You can also swap out the histogram for a density plot to get a smoother depiction of this histogram.  For a different version of these same plots, open up the Survey Plots menu under Exploration . Set up your variables, and look at the different plots. You have options for what to display under Continuous Plots . For instance, I think it might be useful to get rid of the Data plot, which is just a dot plot where the dots aren't stacked. Since there are so many observations here, it's pretty messy and not very enlightening. Notice also that the Violin plot is just the density plot from earlier. Normally violin plots are reflected, to kind of act like a combination of bloxplot and density plot, but these ones aren't.  Play with the different plots and options until you are happy with what they're showing you.    Pick one of the plots you made that you think best demonstrates the differences or similarities of the availability in the next year for different types of listings available. Save it as a .pdf or .png file and upload it to the Lab Submission assignment.      Describe the distribution of the number of days available for booking in the next year for the different room types. In your explanation, reference both the summary statistics you have displayed as well as the plot you uploaded.       Save Your Progress  We added another filter which will certainly be useful, so save your progress. As a reminder, you can right-click on the different plots you've created and select Remove from either the Analysis or All menus in order to clean up your output.   "
},
{
  "id": "subsubsec-ListingTypeByBorough-7",
  "level": "2",
  "url": "lab3-moredataviz.html#subsubsec-ListingTypeByBorough-7",
  "type": "Checkpoint",
  "number": "3.3.1",
  "title": "",
  "body": "  Create a useful and readable plot that shows the different (proportional) distributions of room types grouped by boroughs. Save your plot as either a .pdf or a .png , and upload to the Lab Submission assignment.   "
},
{
  "id": "subsubsec-ListingTypeByBorough-8",
  "level": "2",
  "url": "lab3-moredataviz.html#subsubsec-ListingTypeByBorough-8",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "",
  "body": "  Summarize your plot: are there some notable differences in the distribution of listing types across the different boroughs?   "
},
{
  "id": "subsubsec-PriceComparedToNights-3",
  "level": "2",
  "url": "lab3-moredataviz.html#subsubsec-PriceComparedToNights-3",
  "type": "Note",
  "number": "3.3.3",
  "title": "",
  "body": " If you don't have the Scatterplot option by default, that's fine! You can just install and add the scatr module. This is normally included as a default, but if that wasn't in your installation of jamovi, it's no problem! You can just add it yourself.  "
},
{
  "id": "subsubsec-PriceComparedToNights-10",
  "level": "2",
  "url": "lab3-moredataviz.html#subsubsec-PriceComparedToNights-10",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": "  Save your plot as either a .pdf or a .png , and upload to the Lab Submission assignment.   "
},
{
  "id": "subsubsec-ListingTypeAvailability-7",
  "level": "2",
  "url": "lab3-moredataviz.html#subsubsec-ListingTypeAvailability-7",
  "type": "Checkpoint",
  "number": "3.3.5",
  "title": "",
  "body": "  Pick one of the plots you made that you think best demonstrates the differences or similarities of the availability in the next year for different types of listings available. Save it as a .pdf or .png file and upload it to the Lab Submission assignment.   "
},
{
  "id": "subsubsec-ListingTypeAvailability-8",
  "level": "2",
  "url": "lab3-moredataviz.html#subsubsec-ListingTypeAvailability-8",
  "type": "Checkpoint",
  "number": "3.3.6",
  "title": "",
  "body": "  Describe the distribution of the number of days available for booking in the next year for the different room types. In your explanation, reference both the summary statistics you have displayed as well as the plot you uploaded.   "
},
{
  "id": "lab4-introtoinference",
  "level": "1",
  "url": "lab4-introtoinference.html",
  "type": "Section",
  "number": "3.4",
  "title": "Lab 4: Introduction to Inference",
  "body": " Lab 4: Introduction to Inference   In this lab assignment, we'll introduce some of the basics of statistical inference. Some of the specifics will be a bit different than what we're learning, but overall we're just going to focus on the concept of a confidence interval and hypothesis test.   What You'll Need  Just the Data: we're still working with the AirBnB data. Make sure you're working with the most up-to-date version of the data set as possible (with the new variables and filters we've created). If you need a new version of the data set or a reminder of what the variables mean, visit the page.     Tasks   New Variable  We've had a filter set up (it hasn't been on, just there) to look only at the AirBnBs that have been reviewed recently. Let's turn this into a categorical variable. In the Variables tab, add a new computed variable named recent . We want this to flag our recently reviewed listings (where recent means anything in 2023 or 2024). The first thing we need is for the listing to actually be reviewed, so we need number_of_reviews > 0 . We want to combine this with the listings reviewed in 2023 and 2024, where last_review_year >= 2023 . So the actual formula to compute the recent variable will be: number_of_reviews > 0 and last_review_year >= 2023 This will output a 1 for listings that have been reviewed and have been reviewed since 2023 and a 0 for the other listings.  Before we move on, we should make sure we're all on the same page. We have two filters right now.   Tw two filters.   Screenshot of jamovi data set with two filters. One is last_review_year >= 2023. This one is turned off. The other is price < 100000 and minimum_nights <= 365. This one is turned on.       The first is the one we just used to set up a new variable. You can now delete the filter for last_review_year >= 2023 , since we have a variable measuring it.    The second one is the one filtering out the artificially inflated prices, where price < 100000 and minimum_nights <= 365 . Let's keep that one here, since we have reason to believe that these listings are ones that aren't really there for booking purposes: the price has been artificially inflated to make them unavailable to book.       Confidence Interval to Estimate a Proportion  We're going to calculate the confidence interval to estimate the proportion of listings that have recently been reviewed in two ways:   We'll calculate the confidence interval by hand, using the formula: .    We'll let jamovi calculate the confidence interval using the Binomial Test .      These are different from each other! In the one we do by hand, we'll use a normal approximation of the binomial sampling distribution, while jamovi will calculate based on the actual binomial sampling distribution. We'll see how close they are, and how well the normal approximation of the binomial sampling distribution works!   To construct a 95% confidence interval estimation of , we only need a value for (the sample proportion) and (the sample size). We can use , which is the critical value that corresponds to a 95% confidence level, and the standard error of the sampling distribution: . Pull up the Descriptives menu and add recent to the Variables window. From there, we can de-select all of the statistics other than sample size, and tell jamovi to display a Frequency Table. This gives us two bits of information that are valuable, and one of them isn't necessarily the % of Total column in the Frequency Table!  This value is rounded, but we can see how it was calculated: it's the number of times the value of recent was 1 divided by the total sample size. Sure, we can change the number of decimal points to get a more accurate percentage displayed, but I think we can just use .    Calculate the 95% confidence interval for the sample proportion, using and .    We'll compare this with the exact binomial confidence interval to see how well our calculated confidence interval matches.  We're actually going to construct the confidence interval at the same time as doing a hypothesis test, but we'll see that part specifically later.  Find the Frequencies menu in the Analyses tab and select 2 Outcomes (Binomial Test) from the menu. It should be listed under One Sample Proportion Tests. This menu should look familiar, and you can add the recent variable to the window on the right. Then check the box to display a confidence interval with 95% confidence level. You'll get a table on the right with the counts for the two values of recent as well as the sample proportions, and, most important for us right now, the lower and upper bounds of a 95% confidence interval.    Report the lower and upper values of the 95% confidence interval. How much does this confidence interval differ from the one you calculated by hand (using the normal approximation)? Explain what this means.      Pick one of the confidence intervals and interpret it. What does this tell you about the actual amount of listings on AirBnB that have recent reviews?      Hypothesis Test for a Proportion  Now take some time to look at some of the other options in the Proportion Test. We can add a Test value, which is just the claim about the population proportion that the null hypothesis makes. We can also change the alternative hypothesis. For now, we'll leave things as the default options: So nothing now has changed in our output: we're displaying a table with a p-value and a confidence interval. Notice, now, that the p-value is small enough that jamovi just displays it as being less than 0.001. This is typical in statistical software: with very small p-values, we might just get a display of a kind of order of magnitude or a general benchmark of how small it is.  Let's compare that to a p-value we might calculate using our normal approximation hypothesis test.      Prepare   Our parameter of interest is the population proportion of AirBnB listings that have been reviewed recently (where we define that to be reviewed in 2023 or 2024). We have our hypotheses, with the null hypothesis and the alternative hypothesis . We'll test this at the typical significance level, with . From our sample, we have that and the sample proportion is .     Check   Our sample size is very large here, so we more than meet our conditions to assume that the sampling distribution of is normal. Since our null hypothesis claims that the population proportion is 0.5, we expect to see 11813.5 listings that have been reviewed recently and 11813.5 listings that haven't. These are both well over 10. We can also assume that each listing being reviewed recently or not is independent of each other, but a deeper examination of this might lead us to think that it is possible that there could be some small amount of dependence: maybe some specific location or host is more or less likely to be reviewed after being visited, or more or less likely to be visited at all. For now, let's not worry too much about this.     Calculate   We need a calculation for standard error, a Z-score, and then a p-value.  For the standard error, we can use the following: where , the claim from the null hypothesis.  Then we can calculate the Z-score for our sample statistic under the null hypothesis' sampling distribution: . Now look up a probability for the p-value using a normal distribution tool, like the one below.   Normal Distribution Calculator    You'll notice that the Z-score is so big that this application rounds the p-value down to 0. We know the probability corresponding with this Z-score isn't actually 0, it's just extremely small: that's why jamovi gives the output < .001.  Let's do this one more time. In the little applet above, there are two tabs at the top: one for Distribution and one for Statistics . Click the Statistics one. From the drop down menu at the top, change T Test of a Mean to Z Test of a Proportion . Now we have a spot to enter the claim from the null hypothesis, select our alternative hypothesis, and then put in 14302 for Successes and 23627 for . This should report results for a Z-score (which should match what you calculated) and a p-value (which should be 0, just like what you looked up).     Conclude   Compare the p-value to our significance level. What does this mean?       Interpret the results of the hypothesis test. What does this tell us about the population proportion of recently reviewed AirBnB listings?      Connect this result or conclusion to the conclusion you got from the confidence interval. Are they related to each other? How? Why might it be useful to pair these kinds of results together when we analyze and test data?       Save Your Progress  We added another variable, so it could be useful to save this. As a reminder, you can right-click on the different test results you've created and select Remove from either the Analysis or All menus in order to clean up your output.   "
},
{
  "id": "fig-Filters",
  "level": "2",
  "url": "lab4-introtoinference.html#fig-Filters",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " Tw two filters.   Screenshot of jamovi data set with two filters. One is last_review_year >= 2023. This one is turned off. The other is price < 100000 and minimum_nights <= 365. This one is turned on.   "
},
{
  "id": "subsubsec-ConfidenceIntervalProportion-3",
  "level": "2",
  "url": "lab4-introtoinference.html#subsubsec-ConfidenceIntervalProportion-3",
  "type": "Note",
  "number": "3.4.2",
  "title": "",
  "body": " These are different from each other! In the one we do by hand, we'll use a normal approximation of the binomial sampling distribution, while jamovi will calculate based on the actual binomial sampling distribution. We'll see how close they are, and how well the normal approximation of the binomial sampling distribution works!  "
},
{
  "id": "subsubsec-ConfidenceIntervalProportion-6",
  "level": "2",
  "url": "lab4-introtoinference.html#subsubsec-ConfidenceIntervalProportion-6",
  "type": "Checkpoint",
  "number": "3.4.3",
  "title": "",
  "body": "  Calculate the 95% confidence interval for the sample proportion, using and .   "
},
{
  "id": "subsubsec-ConfidenceIntervalProportion-10",
  "level": "2",
  "url": "lab4-introtoinference.html#subsubsec-ConfidenceIntervalProportion-10",
  "type": "Checkpoint",
  "number": "3.4.4",
  "title": "",
  "body": "  Report the lower and upper values of the 95% confidence interval. How much does this confidence interval differ from the one you calculated by hand (using the normal approximation)? Explain what this means.   "
},
{
  "id": "subsubsec-ConfidenceIntervalProportion-11",
  "level": "2",
  "url": "lab4-introtoinference.html#subsubsec-ConfidenceIntervalProportion-11",
  "type": "Checkpoint",
  "number": "3.4.5",
  "title": "",
  "body": "  Pick one of the confidence intervals and interpret it. What does this tell you about the actual amount of listings on AirBnB that have recent reviews?   "
},
{
  "id": "fig-NormalDist",
  "level": "2",
  "url": "lab4-introtoinference.html#fig-NormalDist",
  "type": "Figure",
  "number": "3.4.6",
  "title": "",
  "body": " Normal Distribution Calculator   "
},
{
  "id": "subsubsec-HypothesisTestProportion-5",
  "level": "2",
  "url": "lab4-introtoinference.html#subsubsec-HypothesisTestProportion-5",
  "type": "Checkpoint",
  "number": "3.4.7",
  "title": "",
  "body": "  Interpret the results of the hypothesis test. What does this tell us about the population proportion of recently reviewed AirBnB listings?   "
},
{
  "id": "subsubsec-HypothesisTestProportion-6",
  "level": "2",
  "url": "lab4-introtoinference.html#subsubsec-HypothesisTestProportion-6",
  "type": "Checkpoint",
  "number": "3.4.8",
  "title": "",
  "body": "  Connect this result or conclusion to the conclusion you got from the confidence interval. Are they related to each other? How? Why might it be useful to pair these kinds of results together when we analyze and test data?   "
},
{
  "id": "lab5-inferencecategorical-",
  "level": "1",
  "url": "lab5-inferencecategorical-.html",
  "type": "Section",
  "number": "3.5",
  "title": "Lab 5: Inference for Categorical Data",
  "body": " Lab 5: Inference for Categorical Data   In this lab, we'll apply some different tests and build some different confidence intervals that are concerned with proportions.   What You'll Need      Data: make sure you're working with a copy of the AirBnB data set that has the most recent filters in it!     Notes: it will be helpful to have any notes or resources about hypothesis tests or confidence intervals for categorical data. You'll likely want to be able to look up conditions easily, ro remind yourself of what is happening in each calculation.        Tasks   We've already looked at a test of a single proportion, so let's compare proportions a bit more heavily.    Distribution of Room Types  Build a frequency table for the room_type variable in the Descriptives menu. We've already noted that the types of listings are dominated by the Entire home\/apt and Private room categories. Let's compare this distribution to a claim made in a 2017 publication Dogru-Dr. True, Tarik & Mody, Makarand & Suess, Courtney. (2017). The hotel industry's Achilles Heel? Quantifying the negative impacts of Airbnb on Boston's hotel performance . Boston Hospitality Review. 2017. . Below is a relevant table, copied from the paper.   The percentage of entire home, private room, and shared room listings in Airbnb     Total cumulative listings  Active cumulative listings Listings with at least one booking within the past 12 months as of June 2017.     Year  Entire home  Private room  Shared room  Entire home  Private room  Shared room    2008  50%  50%  0.0%  66.6%  33.3%  0.0%    2009  57.6%  42.3%  0.0%  58.1%  41.8%  0.0%    2010  53.2%  46.7%  0.0%  50.4%  49.6%  0.0%    2011  47.4%  50.1%  1.3%  46.8%  51.5%  1.6%    2012  50.2%  48.1%  1.7%  50.3%  48.1%  1.5%    2013  48.8%  49.4%  1.7%  49.2%  49.4%  1.3%    2014  50.2%  47.8%  1.9%  51.3%  47.4%  1.2%    2015  49.5%  47.8%  2.6%  51.8%  46.4%  1.7%    2016  49.5%  47.4%  2.9%  51.1%  46.4%  2.4%    2017  49.3%  47.6%  2.89%  50.4%  46.9%  2.4%     We'll have to fiddle with this a bit to get this claim for the null hypothesis. We'll use the 2017 numbers, and the total cumulative listings. Note that this doesn't have Hotel room as one of the options, since that wasn't an option in 2017. It's fine, the percentages don't quite add up to 100% anyways, so let's put the remaining bit in the hotel room option. Here's our null hypothesis claim!   Null Hypothesis Distribution    room_type  Proportion    Entire home\/apt  0.493    Hotel room     Private room  0.476    Shared room  0.0289    Total  1.00       What is the percentage that we'll put in for hotel room to make the total add up to 1.00?    Now we need to do a Goodness of Fit Test! In the Analyses tab, select Frequencies and then find the N Outcomes, Goodness of fit option. We should have a pretty familiar setup, with all of our variables on the left. Add room_type to the Variable field. You'll need to add your expected proportions! Open up the Expected Proportions menu and fill in your null hypothesis distribution (using your proportion for hotel rooms).  On the right we have a table with the frequency distribution of our variables, as observed (we can add the expected distribution using the Expected counts checkbox) and a table with the test statistic, degree of freedom, and p-value.    What was the test statistic for this test? How do you interpret the results of this test? Does the distribution of AirBnB listing types in New York match what was reported for the overall distribution of AirBnB listings in 2017?      Listing Types by Borough  Let's see if there is some connection with the types of listings and the boroughs of New York City. We'll perform a Test for Independence or Association. Under the Frequencies menu, find the Test for Association option. Here we'll have an option to perform the test for association by building a contingency table or a two way table. We'll add room_type and neighbourhood_group as Rows and Columns (it doesn't matter which one is which). This will set up our test for association, but notice that we have some options in the Statistics menu. If we had a 2x2 table (two groups with a proportion in each), we'd be performing the Z Test for 2 Proportions , and we have options to change the null hypothesis, output a confidence interval, and show the Z Test statistic. There are also a couple of other nice measurements that get used in different field, especially for the 2x2 case. For our test, we'll leave it as just showing the statistic.  Under the Cells menu, we can show the expected counts under the null hypothesis that these two variables are independent.    What is the expected number of Private rooms in the Bronx under the null hypothesis? Where does this number come from, or how was it calculated?      What is the statistic, p-value, and conclusion of this test? Are these two variables independent? What does that mean about the types of listings across different boroughs?    Note also that there's an option under Plots to include a bar graph. I think this one isn't that great and is often cramped. We've had better options in the Survey plots menu. Go to this menu and create a plot that compares the percentage distribution of room_type across different boroughs from the neighbourhood_group variable or vice versa (distributions of boroughs for different listing types).    Generate and submit your plot comparing the distributions of room_type across different boroughs from the neighbourhood_group variable or vice versa (distributions of boroughs for different listing types).      "
},
{
  "id": "subsubsec-DistributionRoomTypes-3",
  "level": "2",
  "url": "lab5-inferencecategorical-.html#subsubsec-DistributionRoomTypes-3",
  "type": "Table",
  "number": "3.5.1",
  "title": "The percentage of entire home, private room, and shared room listings in Airbnb",
  "body": " The percentage of entire home, private room, and shared room listings in Airbnb     Total cumulative listings  Active cumulative listings Listings with at least one booking within the past 12 months as of June 2017.     Year  Entire home  Private room  Shared room  Entire home  Private room  Shared room    2008  50%  50%  0.0%  66.6%  33.3%  0.0%    2009  57.6%  42.3%  0.0%  58.1%  41.8%  0.0%    2010  53.2%  46.7%  0.0%  50.4%  49.6%  0.0%    2011  47.4%  50.1%  1.3%  46.8%  51.5%  1.6%    2012  50.2%  48.1%  1.7%  50.3%  48.1%  1.5%    2013  48.8%  49.4%  1.7%  49.2%  49.4%  1.3%    2014  50.2%  47.8%  1.9%  51.3%  47.4%  1.2%    2015  49.5%  47.8%  2.6%  51.8%  46.4%  1.7%    2016  49.5%  47.4%  2.9%  51.1%  46.4%  2.4%    2017  49.3%  47.6%  2.89%  50.4%  46.9%  2.4%    "
},
{
  "id": "subsubsec-DistributionRoomTypes-5",
  "level": "2",
  "url": "lab5-inferencecategorical-.html#subsubsec-DistributionRoomTypes-5",
  "type": "Table",
  "number": "3.5.2",
  "title": "Null Hypothesis Distribution",
  "body": " Null Hypothesis Distribution    room_type  Proportion    Entire home\/apt  0.493    Hotel room     Private room  0.476    Shared room  0.0289    Total  1.00    "
},
{
  "id": "subsubsec-DistributionRoomTypes-6",
  "level": "2",
  "url": "lab5-inferencecategorical-.html#subsubsec-DistributionRoomTypes-6",
  "type": "Checkpoint",
  "number": "3.5.3",
  "title": "",
  "body": "  What is the percentage that we'll put in for hotel room to make the total add up to 1.00?   "
},
{
  "id": "subsubsec-DistributionRoomTypes-9",
  "level": "2",
  "url": "lab5-inferencecategorical-.html#subsubsec-DistributionRoomTypes-9",
  "type": "Checkpoint",
  "number": "3.5.4",
  "title": "",
  "body": "  What was the test statistic for this test? How do you interpret the results of this test? Does the distribution of AirBnB listing types in New York match what was reported for the overall distribution of AirBnB listings in 2017?   "
},
{
  "id": "subsubsec-ListingTypeByBorough2-4",
  "level": "2",
  "url": "lab5-inferencecategorical-.html#subsubsec-ListingTypeByBorough2-4",
  "type": "Checkpoint",
  "number": "3.5.5",
  "title": "",
  "body": "  What is the expected number of Private rooms in the Bronx under the null hypothesis? Where does this number come from, or how was it calculated?   "
},
{
  "id": "subsubsec-ListingTypeByBorough2-5",
  "level": "2",
  "url": "lab5-inferencecategorical-.html#subsubsec-ListingTypeByBorough2-5",
  "type": "Checkpoint",
  "number": "3.5.6",
  "title": "",
  "body": "  What is the statistic, p-value, and conclusion of this test? Are these two variables independent? What does that mean about the types of listings across different boroughs?   "
},
{
  "id": "subsubsec-ListingTypeByBorough2-7",
  "level": "2",
  "url": "lab5-inferencecategorical-.html#subsubsec-ListingTypeByBorough2-7",
  "type": "Checkpoint",
  "number": "3.5.7",
  "title": "",
  "body": "  Generate and submit your plot comparing the distributions of room_type across different boroughs from the neighbourhood_group variable or vice versa (distributions of boroughs for different listing types).   "
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
