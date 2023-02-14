# Digital-Butler
Digital Butler is an app that will aid providers with answering customer problems such as
connection and home network issues. We mainly worked on the front end design of the product,
a web app, that will be used for professional purposes (providers). The application will be able to
show information/history of one’s home network and efficiently resolve connectivity issues.

Download and install node.js 6.x

git clone <this repo>

cd Digital-Butler

npm install

npm install -g @angular/cli

ng serve

*********************************************************
To check in code:

git add .

git commit -m "try to be concise with message for debugging"

git pull

if there are merge conflict do

git mergetool

and merge the appropriate lines of code

after all merge conflicts are resolved

git push

********************************************************
To create a new project after set-up:
(This method creates all of the files that an angular project has)

npm install -g @angular/cli

ng new 'projectName'

cd 'projectName'

ng serve

*****************************************************
Component Design Document -
<pre>
                                           +-----------+
                                    +------+appNavbar  |
                                    |      +-----------+
                                    |
                                    |      +-------------------+
                                    +------+ appInternetCare   |
                                    |      +-------------------+
                                    |
                                    |      +---------------+
                                    +------+appDeviceCare  |
                                    |      +---------------+
                                    |
                                    |      +--------------------+
                                    +------+appProductService   |
                                    |      +--------------------+
                                    |
+----------+         +-----------+  |      +-------------+
| appRoot  +---------+ appUser   +---------+appWifiCare  |
+----------+         +-----------+  |      +-------------+
                                    |
                                    |
                                    |      +------------+    +-----------+
                                    +------+appD3charts +----+appD3graph |
                                    |      +------------+    +-----------+
                                    |
                                    |      +-----------+
                                    +------+appToolbar |
                                           +-----------+

</pre>

****************************************************************
To run d3 charts correcctly:
cd Digital-Butler\src\app\components\d3chart\heatMap
C:\Python27\python.exe -m SimpleHTTPServer 8000

you will also need to allow cross origin request 
nico@holisticlabs.net
