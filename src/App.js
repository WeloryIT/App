import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="header">
        <div class="blur">
          <h1 class="h1">Самое полезное приложение студии WeloryIT</h1>
          <p class="p">Пока здесь ничего нет, но мы работает над этим</p>
          <div class="links">
            <a href="https://vk.com/weloryit">
              <img src="https://i.imgur.com/49zRdsK.png" class="vk" />
            </a>
            <a href="https://github.com/weloryit">
              <img src="https://i.imgur.com/qWhslZ0.png" class="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}