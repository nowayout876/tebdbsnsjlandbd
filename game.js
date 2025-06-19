fetch('story.json')
  .then(res => res.json())
  .then(story => {
    function renderScene(key) {
      const scene = story[key];
      document.getElementById('scene-text').innerText = scene.text;
      document.getElementById('scene-img').src = scene.img;
      document.getElementById('fact-box').innerText = scene.fact;

      const choices = document.getElementById('choices');
      choices.innerHTML = '';
      scene.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => renderScene(opt.next);
        choices.appendChild(btn);
      });
    }
    renderScene('intro');
  });