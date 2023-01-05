# waterflow_ui
User interface for a DAG execution engine

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