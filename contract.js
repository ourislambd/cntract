var password = prompt("সাইট এক্সেস করতে পাসওয়ার্ড দিন:");
  if (password === "YOUR_PASSWORD") {
    document.body.style.display = 'block';
  } else {
    document.body.innerHTML = '<h1>এক্সেস ডিনাইড!</h1>';
  }
