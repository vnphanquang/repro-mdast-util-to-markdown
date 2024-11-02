# Reproduction

Steps:

1. Clone the repository
2. Install dependencies (pnpm, yarn, npm)
3. Run script: `node index.js`

Expected: should output `output.md`

Actual: error thrown observed in console:

```text
[..truncated]/node_modules/.pnpm/mdast-util-to-markdown@2.1.1/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js:106
        before === results[results.length - 1].slice(-1)
                                               ^

TypeError: Cannot read properties of undefined (reading 'slice')
    at containerPhrasing ([..truncated]/node_modules/.pnpm/mdast-util-to-markdown@2.1.1/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js:106:48)
    at Object.containerPhrasingBound [as containerPhrasing] ([..truncated]/node_modules/.pnpm/mdast-util-to-markdown@2.1.1/node_modules/mdast-util-to-markdown/lib/index.js:138:10)
    at paragraph ([..truncated]/node_modules/.pnpm/mdast-util-to-markdown@2.1.1/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js:16:23)
    at containerPhrasing ([..truncated]/node_modules/.pnpm/mdast-util-to-markdown@2.1.1/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js:50:11)
    at Object.containerPhrasingBound [as containerPhrasing] ([..truncated]/node_modules/.pnpm/mdast-util-to-markdown@2.1.1/node_modules/mdast-util-to-markdown/lib/index.js:138:10)
    at handleTableCell ([..truncated]/node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js:216:25)
    at handleTableRowAsData ([..truncated]/node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js:279:23)
    at handleTableAsData ([..truncated]/node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js:255:23)
    at Object.handleTable ([..truncated]/node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js:191:26)
    at Object.one [as handle] ([..truncated]/node_modules/.pnpm/zwitch@2.0.4/node_modules/zwitch/index.js:108:17)
```


Output of `npx envinfo --system --npmPackages --binaries`:

```text
  System:
    OS: Linux 6.6 Arch Linux
    CPU: (4) x64 Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz
    Memory: 5.10 GB / 15.57 GB
    Container: Yes
    Shell: 3.7.1 - /usr/bin/fish
  Binaries:
    Node: 22.11.0 - ~/.volta/tools/image/node/22.11.0/bin/node
    npm: 10.9.0 - ~/.volta/tools/image/node/22.11.0/bin/npm
    pnpm: 9.12.3 - ~/.volta/bin/pnpm
  npmPackages:
    hast-util-from-html: ^2.0.3 => 2.0.3
    hast-util-to-mdast: ^10.1.0 => 10.1.0
    mdast-util-gfm: ^3.0.0 => 3.0.0
    mdast-util-to-markdown: ^2.1.1 => 2.1.1
```
