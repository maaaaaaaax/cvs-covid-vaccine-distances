# Closest CVS Covid-19 Vaccine Appointments
As of April 19, 2021, many California residents want to get a COVID-19 vaccine through CVS, but when they visit cvs.com/coronavirus, the only available appointments are in cities you've probably never been to, or even heard of. 

This tool helps you find the nearest vaccination location, in miles or minutes of driving.

<br>
<br>

# Getting Started
To find the nearest available vaccine location to your current location:

1. Visit cvs.com/coronavirus and click "COVID-19 vaccine, Information, eligibility & scheduling."

2. Scroll down the page until you see a map of the United States. Click the link for "California" or the red arrow next to California.

3. An overlay should open, saying something like, "Appointments available at select CVS stores within the following cities/towns." If this dialog doesn't open, then this tool no longer works.

4. Open https://docs.google.com/spreadsheets/d/1iPYXmpbjR5N7DSHKWXM8htMu0s5D4nXsksBC7B5W00M/edit?usp=sharing in a new Chrome tab. Click File > Make a copy. Name your file whatever you want.

5. Once your file is open, cut and paste the CVS list of available COVID-19 appointments into Sheet2 of your Google Sheets. Create a filter view to filter out the "Fully Booked" locations by selecting all the data in your sheet (command + A, or click in the top left cell to the upper left of A1). You should see a green upside-down triangle to indicate your filter view is active. Click on the filter icon in B1 next to the word 'Availability', click the check mark next to 'Available' in the drop-down menu, then click the green 'OK' button.

6. Sheet2 should now show all the cities in California that have available COVID-19 vaccine appointments. Cut and paste these cities into Sheet1 with command + c, command + v.

7. While you're looking at Sheet1, click Tools from the Google Sheets menu, then click Script Editor. You should now be looking at JavaScript code I wrote in Google Apps Script to get the distance in miles and minutes from Google Maps, then add the results to your Google Sheet. Look at line 13. Replace '1585 Charleston Rd, Mountain View, CA 94043' with your home, apartment, or office address, so that we can calculate the closest CVS that has availability. Your privacy should be protected, since you made a copy of my initial Google Sheets project, and only you have access to the copy.

8. After you've changed the address, click Save, then Run. You should see an Authorization required dialog pop up. Click Review permissions, then log in to your Google account. On the 'Google hasn't verified this app' screen, click 'Advanced', then click 'Go to CVS Covid-19 Vaccines Available in CA (unsafe)'. If you don't trust the developer (me), send me a message on LinkedIn or Twitter. Nice to meet you! On the next screen, click the blue Allow button.

9. The code should start executing, meaning we're asking Google Maps to give us the directions to all of the cities that you got from CVS, then edit our Google Sheet to add the distance in miles and minutes. Once you see 'execution completed,' click back to your Google Sheet. Voila! You can now sort by distance or time to nearest appointment.

<br>
<br>

I hope this project helps you save time driving to your vaccine appointment, and that maybe you liked learning about Google Sheets + Apps Script along the way. Please leave a comment on Github, email me, or DM me if these instructions didn't work.

By Max Wiederholt
Email: max.wiederholt@gmail.com
Github: https://github.com/maaaaaaaax/cvs-covid-vaccine-distances/
LinkedIn: https://www.linkedin.com/in/maxwiederholt

Open Sourced under Apache 2.0 license. Use whatever you want, but please don't sue me.