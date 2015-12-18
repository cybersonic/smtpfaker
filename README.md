SMTP Faker
This is a simple program to emulate an smtp server so that you can test your applications email.


Fairly simple to use,

node smtpfake.js

It then runs on port 8025 by default and logs all incoming email to the folder it was started in. If you want to define a different port or directory you can add the following arguments:

node smtpfake.js --port 25 --directory ~/myfolder/
