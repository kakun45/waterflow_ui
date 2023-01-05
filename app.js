// GET only
// what's AJAX: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
// http://localhost/ui/stats/tasks - NO! >>
// http://127.0.0.1:5500/mocks/ui/stats/tasks/index.html

// constants variables in here:  
JOBS_URL = 'http://127.0.0.1:5500/mocks/ui/stats/jobs/index.html';
TASKS_URL =  'http://127.0.0.1:5500/mocks/ui/stats/tasks/index.html';
REFRESH_INTERVAL_MS = 3000;

// event listener on 'load' 
window.addEventListener("load", getData, (event) => {
  console.log("page is fully loaded");
  event.preventDefault();  
});

// event listener on 'refresh-all-button' 
document.querySelector('.refresh-all-button').addEventListener('click', getData);

// AUTORefresh, in MILISECONDS
// setInterval(function() {
//   console.log("TEST");
//   document.querySelector(".fas fa-user-cog").innerHTML += 'Hello'
// }, REFRESH_INTERVAL_MS);

// working 2022/01/04
function getData(e) { 
  const xhr_jobs = new XMLHttpRequest();
  xhr_jobs.open('GET', JOBS_URL, true);
  
  xhr_jobs.onload = function() {
    // console.log("ReadyState=", xhr_jobs.readyState); // 4 
    if (this.status === 200) {
      try {
        const response = JSON.parse(this.responseText); // object {...}
      } catch(e) {
        console.log(e);
        // document.querySelector("#output-jobs-pending").innerHTML = `<p>JSON Data is invalid</p>`; // message into UI
        // !!! Leading 0 - should never happen in json!! will not parse here! ex.: "pending_count": 0454, 
      }
      let output  = '';
      const response = JSON.parse(this.responseText);
      if (typeof response === 'object') {
        output = `<h1>${response.pending_count}</h1>`;
        document.querySelector("#output-jobs-pending").innerHTML = output;
        output = `<h1>${response.fetching_count}</h1>`;
        document.querySelector("#output-jobs-fetching").innerHTML = output;
        output = `<h1>${response.running_count}</h1>`;
        document.querySelector("#output-jobs-running").innerHTML = output;
        output = `<h1>${response.failed}</h1>`;
        document.querySelector("#output-jobs-failed").innerHTML = output;
        output = `<h1>${response.succeeded}</h1>`;
        document.querySelector("#output-jobs-succeeded").innerHTML = output;
        } else {
        output += `<p>JSON Data is invalid</p>`;
      }
    }
  }
  xhr_jobs.send();

  const xhr_tasks = new XMLHttpRequest();
  xhr_tasks.open('GET', TASKS_URL, true); 
  xhr_tasks.onload = function() {
    // code that sets the tasks goes here
    // console.log("second call", typeof xhr_tasks.responseText, xhr_tasks.responseText);
    // console.log('53.this.status === 200'); // printing 200
    try {
      const response_tasks = JSON.parse(this.responseText); // object {...}
      // const response_tasks = JSON.parse(xhr_tasks.responseText); // object {...}
      // console.log('57. response_tasks=', response_tasks);
    } catch(e) {
      console.log(e);
      // document.querySelector("#output-tasks-pending").innerHTML = `<p>JSON Data is invalid</p>`;
      // !!! Leading 0 - should never happen in json!! will not parse here! ex.: "paused_count": 0454, 
    }
    const response_tasks = JSON.parse(this.responseText);
    if (typeof response_tasks === 'object') {
      document.querySelector("#output-tasks-pending").innerHTML = `<h1>${response_tasks.pending_count}</h1>`;
      document.querySelector("#output-tasks-blocked").innerHTML = `<h1>${response_tasks.blocked_count}</h1>`;
      document.querySelector("#output-tasks-running").innerHTML = `<h1>${response_tasks.running_count}</h1>`;
      document.querySelector("#output-tasks-failed").innerHTML = `<h1>${response_tasks.failed_count}</h1>`;
      document.querySelector("#output-tasks-succeeded").innerHTML = `<h1>${response_tasks.succeeded_count}</h1>`;
    } else {
      document.querySelector("#output-tasks-pending").innerHTML = `<p>JSON Data is invalid</p>`;
    }
  }
  xhr_tasks.send();

  e.preventDefault();  
}