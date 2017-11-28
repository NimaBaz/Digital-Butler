# Digital-Butler

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
component design Document -
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
