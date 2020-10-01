<template>
<div class="tile is-child box">
  <article class="media level">
    <figure class="media-left">
      <p class="image is-32x32">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Effect of Labor</strong>
          <br>
          Lorem ipsum dolor sit amet, eiusmod tempor incididunt ?
        </p>
        <p>
          10 questions
        </p>
      </div>
    </div>
  </article>
    <nav class="level">
      <div class="level-item">
        <router-link to="/start" class="button prim has-text-white">
          Take Survey
        </router-link>
      </div>
    </nav>
</div>
</template>

<style lang="scss" scoped>
.prim {
  background: #4512D2;
}
.box, .button {
  border-radius: 0;
}
</style>