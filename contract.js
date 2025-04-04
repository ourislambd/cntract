var password = prompt("সাইট এক্সেস যোগাযোগ করুন 01771687270:");
  if (password === "YOUR_PASSWORD") {
    document.body.style.display = 'block';
  } else {
    document.body.innerHTML = '<h1>এক্সেস ডিনাইড!</h1>';
  }
