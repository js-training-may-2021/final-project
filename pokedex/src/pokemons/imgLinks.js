let imgLinks = {};
for (let i = 1; i <= 720; i++) {
  imgLinks[i] = require(`./${i}.png`).default;
}

export default imgLinks;
