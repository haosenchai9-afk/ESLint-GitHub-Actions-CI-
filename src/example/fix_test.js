// src/example.js（修复版本：符合所有 ESLint 规则）
const usedVar = "this variable is used"; // 修复 no-unused-vars（变量已使用）
// console.log("debug info"); // 修复 no-console（注释或删除）
const str = "double quote"; // 修复 quotes（双引号）+ 修复 semi（加分号）
function test() {
  return "space indent"; // 修复 indent（2 个空格缩进）
}

// 新增：使用变量，避免 no-unused-vars
console.log(usedVar);
test();
