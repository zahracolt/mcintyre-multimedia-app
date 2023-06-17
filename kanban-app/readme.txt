## Project Deployment to Netlify

Firstly, we will need to install the Netlify CLI tool using the following command in your terminal:

    `npm install netlify-cli -g`

You will also need to create an account on Netlify. Thereafter, ensure that you are logged in to Netlify on your browser.

Next, we will obtain an access token so that you can deploy your project from your terminal. We will use the following command in your terminal:

    `netlify login`

A new browser tab or window will be opened asking you to authorize Netlify CLI to access Netlify on your behalf. Click on the Authorize button. In the event that the browser tab or window is not opened, you can also copy the URL in your terminal and input it in your browser. Once authorization has been granted, your terminal should now have the message "You are now logged into your Netlify account!"

Next, in your terminal, enter 
    
    `netlify deploy`

You will come across the following prompts and these are the responses you should make:

    What would you like to do?: Create & configure a new site
    Team: <choose the default option>
    Site name: <yourusername>-kanban-app (ensure you replace <yourusername> with your StackUp username)

On asked to provide a publish directory, enter `build`. Once the files have been uploaded, you will be provided with a "Website Draft URL". Go to that website and check that your website works as intended. 

If everything looks good, use the following command:
    
    `netlify deploy --prod`

Once again, you will be asked for the publish directory. Use `build`.

When you see the message "Deploy is live!" and your website URL is provided, you know that your site has been successfully deployed. Your terminal output should look similar to the 'expected output'. Visit your website again and ensure that everything works well.
