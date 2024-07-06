<script>
  import "../app.css"
</script>

<main>
  <header>
    <h1>Mikhail Gladyshev</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About me</a></li>
        <li><a href="/experience">Experience</a></li>
      </ul>
    </nav>
  </header>
  <slot></slot>
  <section id="contact">
    <h2>Contact</h2>
    <div class="social-links">
      <a id="gh-link" href="https://github.com/secretanry" target="_blank">
        <img src="./pngwing.com-3.png" alt="GitHub">
      </a>
      <a id="tg-link" href="https://t.me/secretanry" target="_blank">
        <img src="./pngwing.com-2.png" alt="Telegram">
      </a>
      <a id="email" href="mailto:secret.anry@gmail.com">
        <img src="./pngwing.com.png" alt="Email">
      </a>
    </div>
  </section>
</main>

