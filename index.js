const assign = require('deep-assign');

// api url https://github.com/knsv/mermaid/blob/master/src/mermaidAPI.js
const config = {
  theme: 'forest',
  logLevel: 5,
  startOnLoad: true,
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    useMaxWidth: true,
    curve: 'linear'
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 4,
    axisFormat: '%Y-%m-%d'
  },
  class: {},
  git: {}
};

hexo.config.mermaid = assign({
  version: '7.1.2',
  enable: true
},
  config,
  hexo.config.mermaid
);

hexo.extend.filter.register('before_post_render', require('./lib/render'), 9);
