# waterflow_ui
User interface for a DAG execution engine


https://user-images.githubusercontent.com/53381916/213963012-8c33dbe1-ca98-49db-801d-f9291a85e0b0.mp4

<img width="949" alt="waterflow_ui_screenshot" src="https://user-images.githubusercontent.com/53381916/213963059-938d8140-0f46-4663-a603-66ef1281bbea.png">


TESTING INSTRUCTIONS:

VSCode LiveServer is listening on http://127.0.0.1:5500/index.html

temp local path for jobs/tasks on Live Server 5500:
http://127.0.0.1:5500/mocks/ui/stats/jobs/index.html

// http://localhost/ui/stats/tasks - NO! >> port 80

command to run on 8000: 
```
python3 -m http.server
```
listening on http://0.0.0.0:8000/
then:
http://127.0.0.1:8000/mocks/ui/stats/jobs/index.html

Running a mock server on port 80:
```
cd mocks
python -m http.server 80
```
then:
http://127.0.0.1:80/mocks/ui/stats/jobs/index.html
