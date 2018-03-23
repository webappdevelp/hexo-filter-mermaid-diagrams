# hexo-filter-mermaid-diagrams
[![Build Status](https://travis-ci.org/webappdevelp/hexo-filter-mermaid-diagrams.svg?branch=master)](https://travis-ci.org/webappdevelp/hexo-filter-mermaid-diagrams)
----
![](/img/header.png)
Generation of diagrams and flowcharts from text in a similar manner as markdown.
Mermaid plugin is using [mermaid.js](https://mermaidjs.github.io/) fro hexo!
### flowchart
```
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
![](/img/flow.png)
### Sequence diagram
```
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```
![](/img/sequence.png)
### Gantt diagram
```
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
```
![](/img/gantt.png)
### Class diagram - ❗️ experimental
```
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
```
![](/img/class.png)
### Git graph - ❗️ experimental
```
gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
```
![](/img/git.png)

> Click here [Mermaid](https://github.com/knsv/mermaid) to learn more official discriptions! 

## Install
```bash
$ yarn add hexo-filter-mermaid-diagrams
```

## Config
after installed, you should edit hexo config file: `_config.yml`:
```yaml
# mermaid chart
mermaid: ## mermaid url https://github.com/knsv/mermaid
  enable: true  # default true
  version: "7.1.2" # default v7.1.2
  options:  # find more api options from https://github.com/knsv/mermaid/blob/master/src/mermaidAPI.js
    #startOnload: true  // default true
```
## Credits
Thanks to the [Mermaid](https://mermaidjs.github.io/) project!