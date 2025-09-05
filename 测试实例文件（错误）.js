// src/example.js（错误版本：含 ESLint 违规）
var unusedVar = "this variable is not used"; // 违反 no-unused-vars
console.log("debug info"); // 违反 no-console
const str = 'single quote' // 违反 quotes（强制双引号）+ 违反 semi（缺少分号）
function test() {
\treturn "tab indent"; // 违反 indent（使用 Tab 缩进）
}