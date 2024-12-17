import { LANGUAGE_VERSIONS } from "./constants";


export function executeCode(language, sourceCode) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          language: language,
          version: LANGUAGE_VERSIONS[language],
          files: [{content: sourceCode}],
        }),
        headers: {'Content-Type': 'application/json;charset=utf-8'}
      })
      .then(() => res({
          "status": "success",
          "output": "Hello, world!\n"
      }))
     .catch(() => rej({
        "status": "error",
        "error": "SyntaxError: Unexpected token"
      }))
    }, 1000)//imitation of code compiling on the server
  })
}
