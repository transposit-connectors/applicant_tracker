# Airtable Applicant Tracker

Airtable has [a pre-built template](https://airtable.com/templates/professional/expksc99BziBsZRgR/applicant-tracking-system) for an applicant tracking base. One of the important requirements of an applicant tracker is limiting access around who can see feedback. In this case however, Airtable’s sharing model is designed around sharing access to the entire base.

One of the areas Transposit shines is the ability to layer fine-grained permissions on top of other data sources. In this example, we are going to make a Transposit application that allows interviewers to see only applicant information where they are an interviewer.


## Create a new Airtable base from the applicant tracking template

Go to [the applicant tracking template](https://airtable.com/templates/professional/expksc99BziBsZRgR/applicant-tracking-system) and select **Use template**. This will create a new base in your workspace.


## Add an email address to identify each interviewer

  * Select the applicant tracking base you just created.
  * Select the “Interviewers” table.
  * Add a new column named `Email` (uppercase `E`) of type `Single line text`.

Note: For testing purposes, set the email of one of the interviewers to the Google account email you use with Transposit.

## Get the baseId

  * Go to [https://airtable.com/api](https://airtable.com/api) and select the correct base
  * The app ID can be found in the URL in your browser address bar. The URL will look like `https://airtable.com/appPqRsgYQmpJ4wRQ/api/docs`, and the part that begins with `app` is the app ID.

## Step through Transposit

  * Fork the app [https://console.transposit.com/t/transposit-sample/applicant_tracker](https://console.transposit.com/t/transposit-sample/applicant_tracker) (find the Fork button at the top of the editor view)
  * Add your Airtable key
  * Note `get_logged_in_user_applicants` is the deployed operation. That's the operation your hosted application will call. Test the operation by adding the `baseId` and your email.
  * Go to the link for the hosted app, and see it work
  * Note you can limit access to your application, under Authentication
  * Be sure to set the correct `baseID` in the hosted app
