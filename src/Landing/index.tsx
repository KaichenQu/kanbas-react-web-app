import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Kaichen Qu Landing Page - CS5610 - Section 1</h1>
      <h2>Labs</h2>
      <nav>
        <ul>
          <li>
            <Link to="/Labs/Lab1">Lab 1</Link>
          </li>
          <li>
            <Link to="/Labs/Lab2">Lab 2</Link>
          </li>
          <li>
            <Link to="/Labs/Lab3">Lab 3</Link>
          </li>
          <li>
            <Link to="/Kanbas">Kanbas</Link>
          </li>
        </ul>
        <h2>Github</h2>
        <li>
          <a href="https://github.com/KaichenQu/kanbas-react-web-app">
            Kanbas React Web App Github
          </a>
        </li>
      </nav>
    </div>
  );
}
