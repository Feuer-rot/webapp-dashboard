const alertBox = document.querySelector(".alert");

alertBox.innerHTML = "<p><strong>Alert:</strong> You have unread messages</p><p class='alert-banner-close'>x</p>";

alertBox.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
  alertBox.style.display = "none"
  }
  });

// Charts

const ctxLine = document.getElementById('traffic-chart').getContext('2d'); 

new Chart (ctxLine, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      label: 'Traffic',
      data: [400, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500],
      borderColor: 'rgba(162, 162, 215, 0.5)', 
        backgroundColor: "rgba(155, 155, 239, 0.3)",
      fill: true,
      tension: 0.4,
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

 // BAR CHART
 const ctxBar = document.getElementById('daily-traffic-chart').getContext('2d');
 new Chart(ctxBar, {
   type: 'bar',
   data: {
     labels: ['S', 'M', 'T', 'w', 'T', 'F', 'S'],
     datasets: [{
       label: 'Daily Traffic',
       data: [55, 110, 175, 125, 225, 200, 100],
       backgroundColor: 'rgb(130, 130, 209)',
       borderColor: 'rgb(130, 130, 209)',
       borderWidth: 1
     }]
   },
   options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }
 });

 // DOUGHNUT CHART
 const ctxDoughnut = document.getElementById('mobile-user-chart').getContext('2d');
 new Chart(ctxDoughnut, {
   type: 'doughnut',
   data: {
     labels: ['Desktop', 'Tablet', 'Phones'],
     datasets: [{
       label: 'Mobile Users',
       data: [70, 15, 15],
       backgroundColor: ['rgb(130, 130, 209)', 'rgb(112, 180, 113)', 'rgb(100, 166, 188)'],
       borderWidth: 0
     }]
   },
   options: {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
       legend: {
         position: 'right',
         labels: {
          boxWidth: 20
        }
       }
     }
   }
 });


 //MESSAGE SEND
const sendBtn = document.getElementById("send-btn");
const searchUser = document.querySelector("input[type=search]");
const MessageUser = document.querySelector("textarea");

 sendBtn.addEventListener('click', e => {
  if (searchUser.value === "" && MessageUser.value === "") {
    alert("A user must be selected and the message can't be empty");
    } else if (searchUser.value === "") {
      alert("A user must be selected");
    } else if  (MessageUser.value === "") {
      alert("The message can't be empty");
    }else {
      alert("Your message has been sent");
    }
  });