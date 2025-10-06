// @ts-nocheck
import React from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  usePrismTheme,
} from '@docusaurus/theme-common';
import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import {Highlight} from 'prism-react-renderer';
import Line from '@theme/CodeBlock/Line';
import CopyButton from '@theme/CodeBlock/CopyButton';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import Container from '@theme/CodeBlock/Container';

import styles from './styles.module.css';

// 编程语言映射表
const LANGUAGE_MAP: Record<string, string> = {
  "ada": "Ada",
  "ansible": "Ansible",
  "apache": "ApacheConf",
  "apacheconf": "ApacheConf",
  "applescript": "AppleScript",
  "asm": "Assembly",
  "assembly": "Assembly",
  "astro": "Astro",
  "bash": "Bash",
  "bat": "Batch",
  "c": "C",
  "c++": "C++",
  "cc": "C++",
  "clj": "Clojure",
  "clojure": "Clojure",
  "cmd": "Batch",
  "cobol": "COBOL",
  "coffee": "CoffeeScript",
  "coffeescript": "CoffeeScript",
  "cpp": "C++",
  "cs": "C#",
  "csharp": "C#",
  "css": "CSS",
  "cxx": "C++",
  "dart": "Dart",
  "delphi": "Delphi",
  "diff": "Diff",
  "docker": "Docker",
  "dockerfile": "Dockerfile",
  "ejs": "EJS",
  "elixir": "Elixir",
  "erl": "Erlang",
  "erlang": "Erlang",
  "ex": "Elixir",
  "exs": "Elixir Script",
  "f#": "F#",
  "fish": "Fish",
  "fortran": "Fortran",
  "fs": "F#",
  "fsharp": "F#",
  "git": "Git",
  "go": "Go",
  "golang": "Go",
  "gql": "GraphQL",
  "graphql": "GraphQL",
  "groovy": "Groovy",
  "h": "C/C++ Header",
  "handlebars": "Handlebars",
  "haskell": "Haskell",
  "hbs": "Handlebars",
  "hcl": "HCL",
  "hpp": "C++ Header",
  "hs": "Haskell",
  "htm": "HTML",
  "html": "HTML",
  "ini": "INI",
  "jade": "Pug",
  "java": "Java",
  "javascript": "JavaScript",
  "jenkinsfile": "Jenkinsfile",
  "jl": "Julia",
  "js": "JavaScript",
  "json": "JSON",
  "json5": "JSON5",
  "jsonc": "JSON with Comments",
  "jsx": "JavaScript (JSX)",
  "julia": "Julia",
  "kt": "Kotlin",
  "kotlin": "Kotlin",
  "kts": "Kotlin Script",
  "latex": "LaTeX",
  "less": "Less",
  "lisp": "Lisp",
  "lua": "Lua",
  "m": "Objective-C",
  "make": "Makefile",
  "makefile": "Makefile",
  "markdown": "Markdown",
  "matlab": "MATLAB",
  "md": "Markdown",
  "mdx": "MDX",
  "ml": "OCaml",
  "mm": "Objective-C++",
  "mysql": "MySQL",
  "nginx": "NGINX",
  "nim": "Nim",
  "objective-c": "Objective-C",
  "objective-c++": "Objective-C++",
  "ocaml": "OCaml",
  "pas": "Pascal",
  "pascal": "Pascal",
  "patch": "Patch",
  "perl": "Perl",
  "pgsql": "PostgreSQL",
  "php": "PHP",
  "pl": "Perl",
  "plaintext": "Plain Text",
  "plsql": "PL/SQL",
  "postgres": "PostgreSQL",
  "postgresql": "PostgreSQL",
  "powershell": "PowerShell",
  "properties": ".properties",
  "proto": "Protocol Buffers",
  "protobuf": "Protocol Buffers",
  "ps1": "PowerShell",
  "psm1": "PowerShell Module",
  "pug": "Pug",
  "py": "Python",
  "python": "Python",
  "pyw": "Python",
  "r": "R",
  "rb": "Ruby",
  "regex": "RegEx",
  "regexp": "RegExp",
  "rs": "Rust",
  "ruby": "Ruby",
  "rust": "Rust",
  "sass": "Sass",
  "scala": "Scala",
  "scss": "SCSS",
  "sh": "Shell",
  "shell": "Shell",
  "sql": "SQL",
  "sqlite": "SQLite",
  "styl": "Stylus",
  "stylus": "Stylus",
  "svelte": "Svelte",
  "swift": "Swift",
  "tex": "TeX",
  "text": "Text",
  "tf": "Terraform",
  "terraform": "Terraform",
  "toml": "TOML",
  "ts": "TypeScript",
  "tsx": "TypeScript (TSX)",
  "typescript": "TypeScript",
  "txt": "Text",
  "vb": "Visual Basic",
  "vbnet": "VB.NET",
  "vbs": "VBScript",
  "visualbasic": "Visual Basic",
  "vue": "Vue",
  "xml": "XML",
  "yaml": "YAML",
  "yml": "YAML",
  "zig": "Zig",
  "zsh": "Zsh"
};

export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const {
    prism: {defaultLanguage, magicComments},
  } = useThemeConfig();
  const language = languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage;
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();

  const title = parseCodeBlockTitle(metastring) || titleProp;
  const {lineClassNames, code} = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers =
    showLineNumbersProp ?? containsLineNumbers(metastring);

  // 获取语言的显示名称
  const getLanguageLabel = (lang: string | undefined): string => {
    if (!lang) return 'Text';
    return LANGUAGE_MAP[lang.toLowerCase()] || lang.toUpperCase();
  };

  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language &&
          !blockClassName.includes(`language-${language}`) &&
          `language-${language}`,
      )}>
      {/* Custom Title Bar */}
      <div className={styles.codeBlockHeader}>
        <div className={styles.codeBlockTitle}>
          {title ? (
            <span className={styles.titleText}>{title}</span>
          ) : (
            <span className={styles.languageTag}>{getLanguageLabel(language)}</span>
          )}
        </div>
        <div className={styles.codeBlockActions}>
          {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
            <WordWrapButton
              className={styles.codeButton}
              onClick={() => wordWrap.toggle()}
              isEnabled={wordWrap.isEnabled}
            />
          )}
          <CopyButton className={styles.codeButton} code={code} />
        </div>
      </div>

      {/* Code Content */}
      <div className={clsx(styles.codeBlockContent, 'thin-scrollbar')}>
        <Highlight theme={prismTheme} code={code} language={language ?? 'text'}>
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre
              tabIndex={0}
              ref={wordWrap.codeBlockRef}
              className={clsx(className, styles.codeBlockLines, 'thin-scrollbar')}
              style={style}>
              <code
                className={clsx(
                  styles.codeBlockLinesWithNumbering,
                  showLineNumbers && styles.codeBlockLinesWithNumberingShow,
                )}>
                {tokens.map((line, i) => (
                  <Line
                    key={i}
                    line={line}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={showLineNumbers}
                  />
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </Container>
  );
}

