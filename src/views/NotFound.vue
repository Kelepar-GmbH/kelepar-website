<template>
  <main>
    <div class="main-container">
      <div class="content blue-img">
        <h1>Oops, wrong way :/</h1>
        <p>Could not load this page.</p>
        <div class="links">
          <div class="button">
            <a class="btn2" href="/#intro" target="" aria-label="Back">Back</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  font-size: var(--h1-desktop);
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 2rem 0 1rem 0;
}

p {
  font-size: 20px;
  text-align: center;
}

a {
  color: var(--kelepar-color-highlight-one);
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  text-align: center;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.blue-img {
  background-image: url(../assets/img/banners/oxford-blue.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.button {
  padding: 5px 10px;
  margin: 0 auto;
}

.btn1,
.btn2 {
  width: 200px;
  border: 2px solid;
  border-color: var(--kelepar-color-highlight-one);
  border-radius: 0;
}

.links {
  display: flex;
  flex-direction: row;
  padding: 20px;
  text-align: center;
}

@media (max-width: 1200px) {

  h1 {
    font-size: var(--h2-mobile);
    letter-spacing: 1px;
  }

  h2 {
    font-size: var(--h2-mobile);
    letter-spacing: 1px;
  }

  p {
    font-size: var(--p-mobile);
  }
}
</style>