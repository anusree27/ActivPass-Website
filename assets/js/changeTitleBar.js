function updateTitle() {
  const titles = ['ActivPass', 'Launching soon 🔥']
  let currentIndex = 0

  setInterval(() => {
    document.title = titles[currentIndex]
    currentIndex = (currentIndex + 1) % titles.length
  }, 2500) // Change every 5 seconds
}

// Call the function to start updating the title
updateTitle()
