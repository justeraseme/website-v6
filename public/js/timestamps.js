        document.querySelectorAll("time.post-time").forEach(el => {
          let timestamp = parseInt(el.getAttribute("datetime"), 10);
          let date = new Date(timestamp * 1000);

        el.textContent = date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: '2-digit',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        
        el.setAttribute("datetime", date.toISOString());
      });
// original script by wintrmoon. i don't know if they're uncomfortable with me still using this convenient thing...