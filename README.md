# How to deploy your website from any web builder to your domain

1) Create a Github account
2) Click on the fork button to fork this repository
3) Go to https://netlify.com and login with your Github account
4) Create a new site and select the forked repository. Click on advanced and add "Environment variables". Set the key to SITE and the value should be your "yourdomain.com".
5) The first build might fail, but that's ok. You forgot the environment variable. 
5.1) Add a new environment variable. You can do this as follows: 1) Open settings in netlify 2) "Build & Deploy>Environment" 3) Under "Environment variables" click on edit variables and add the following:
Set the key to SITE and the value should be your "yourdomain.com".
5.2) Start a new deploy
6) Add your custom domain to Netlify under "Settings>Domain Management>Domains"
7) Click on Verify and then on Add Domain
8) Go to the site where you bought your custom domain and add the DNS records as mentioned in the previous step. With this step, you will point your domain to Netlify

🎉 Your site should be live on your custom domain.