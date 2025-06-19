let storyData = {};

async function loadStory() {
  const response = await fetch('story.json');
  storyData = await response.json();
  showScene('intro');
}

function showScene(key) {
  const scene = storyData[key];
  const text = document.getElementById('story-text');
  const options = document.getElementById('options');

  text.innerHTML = scene.text;
  options.innerHTML = '';

  scene.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option.text;
    btn.onclick = () => showScene(option.next);
    options.appendChild(btn);
  });
}

loadStory();

