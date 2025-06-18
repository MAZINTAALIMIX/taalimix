    let timerInterval;
    let seconds = 0;

    function updateDisplay() {
      let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
      let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      let secs = String(seconds % 60).padStart(2, '0');
      document.getElementById('timer').textContent = `${hrs}:${mins}:${secs}`;
    }

    function startTimer() {
      if (!timerInterval) {
        timerInterval = setInterval(() => {
          seconds++;
          updateDisplay();
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    function resetTimer() {
      stopTimer();
      seconds = 0;
      updateDisplay();
    }
