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
component design structure --waiting on team approval

                   +-----------+
            +------+app_nav_bar|
            |      +-----------+
            |
+--------+  |      +------------+
|app_root+---------+app_info_row|
+--------+  |      +------------+
            |
            |
            |      +------------+    +-----------+
            +------+app_d3charts+----+app_d3graph|
            |      +------------+    +-----------+
            |
            |      +-----------+
            +------+app_toolbar|
                   +-----------+
