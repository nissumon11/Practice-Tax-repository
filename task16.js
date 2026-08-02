const describeDeclaration = (keyword) => {
  if (keyword === "let") {
    return "Cannot redeclare, can reassign";
  } else if (keyword === "const") {
    return "Cannot redeclare, cannot reassign";
  } else if (keyword === "var") {
    return "Can redeclare, can reassign";
  } else return "Invalid";
};

console.log(describeDeclaration("let"));

console.log(describeDeclaration("int"));

console.log(describeDeclaration("const"));

console.log(describeDeclaration("int"));
