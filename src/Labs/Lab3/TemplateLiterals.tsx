import React from "react";

export default function TemplateLiterals() {
  const five = 2 + 3;
  const result = "2 + 3 = " + five;
  const template = `2 + 3 = ${five}`;
  const quote = `"2 + 3 = ${five}"`;
  return (
    <div>
      <h3>Template Literals</h3>
      <h4>Concatenation</h4>
      <p>{result}</p>
      <h4>Template Literal</h4>
      <p>{template}</p>
      <h4>Quote</h4>
      <p>{quote}</p>
    </div>
  );
}
