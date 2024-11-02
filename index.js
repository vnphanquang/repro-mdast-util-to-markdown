import fs from 'fs';
import { fromHtml } from 'hast-util-from-html';
import { toMarkdown } from 'mdast-util-to-markdown';
import { toMdast } from 'hast-util-to-mdast';
import { gfmToMarkdown } from 'mdast-util-gfm';

const html = fs.readFileSync('./input.html', 'utf8');

const hast = fromHtml(html);
const mdast = toMdast(hast);
const md = toMarkdown(mdast, { extensions: [gfmToMarkdown()] });

fs.writeFileSync('./output.md', md);
