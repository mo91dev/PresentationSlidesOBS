# Youtube Slide Web App for OBS
Present images as presentation slides in OBS as a browser source for CSS support and extensibility.
## How to use
This project assumes you have familiarity with Git, NPM, and the command line.


If this is your first time running the application or you have made updates to the  client code, run `bash update.sh`. For those using windows, just run the commands within the script manually.

1. Run `run.sh`
2. In OBS, add a new browser source to your scene
   1. Set the URL to the URL of the application. The command line will print your URL (http://localhost:7777)
   2. Width = 1920
   3. Height = 1430
   4. Custom CSS ```body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }```
3. Resize the browser source until it fits the width of your scene
4. The slide controls should now be off-screen and your viewers should see nothing
5. To  interact and add slides:
   1. click the browser source adn select "Interact" in OBS
   2. Select Files (Images). **Your files should be in alphabetical order according to how you want them to appear.**
   3. You can now move forward, backward, or hide the slides using the controls

## Considerations
Selecting new files will remove all the old ones from the web app. 

## Contribute

Just fork it and do what you want.
  