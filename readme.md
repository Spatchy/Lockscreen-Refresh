# Lockscreen Refresh
##### The ultra customisable lockscreen changer

### Abstract
Would you like to see a fresh new image that fits your tastes on your Windows lock screen every time you log in?
Then this is the app for you! No more seeing the same static image over and over or letting Windows Spotlight play guessing games, simply tell Lockscreen Refresh what you like and let it fetch a spicy new image for your lockscreen every day!

### Behind the Scenes
The app is created using the Electron framework. Th current windows lockscreen image is located in `C:\ProgramData\Microsoft\Windows\SystemData\S-1-5-21-...\ReadOnly\LockScreen_A` and can be easily replaced once ownership has been taken of the folder.

The backend is a simple API passthrough, programmed in PHP (yes, I know PHP ugh) that uses a securely stored API token(s) to fetch image links from an image provider, the current plan is to use Wallpaper Abyss. Once an image URL is obtained, it is passed to the app that then downloads the image and stores it as the user's lockscreen.

### Todo
- ~~Apply for Wallpaper Abyss API~~ [done!]
- Implement server-side API passthrough [in progress: ~50%]
- Implement API calls and image downloading in app
- Make a nicer GUI
- Implement automatic lockscreen image replacing
- Implement automatic updates
- Think of other neat features