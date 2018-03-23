const reg = /(\s*)(```) *(mermaid) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;

function ignore(data) {
  var source = data.source;
  var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

module.exports = function (data) {
  const mermaidConfig = this.config.mermaid;
  let { enable } = mermaidConfig;
  enable = enable || false;
  if (!enable) {
    return;
  }
  if (!ignore(data)) {
    let mermaidCodes = [];
    data.content = data.content
      .replace(reg, function (raw, start, startQuote, lang, content, endQuote, end) {
        content = `\n${content}\n`;
        mermaidCodes.push(content);
        return `${start}<div class="mermaid"></div>${end}`;
      });
    if (mermaidCodes.length) {
      // resources
      data.content += `<script>
        var codes = ${JSON.stringify(mermaidCodes)};
        for(var i = 0; i <= codes.length - 1; i++) {
          document.querySelectorAll('.mermaid')[i].innerHTML = codes[i];
        }
      </script>
      <script src="https://unpkg.com/mermaid@${mermaidConfig.version}/dist/mermaid.min.js"></script><script>
        if (window.mermaid) {
          mermaid.initialize(${JSON.stringify(mermaidConfig)});
        }
      </script>`;
    }
  }
};
