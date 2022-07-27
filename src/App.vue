<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
    />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
  name: "App",
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Дневничок разработчика (нет)',
          body: 'Изучаю vue.js, полет нормальный...',
          emotion: 'Задумчивый'
        },
        {
          id: 2,
          title: 'Дневничок разработчика (нет)',
          body: 'Цикличный вывод данных в компоненте.',
          emotion: 'Деловитый'
        },
        {
          id: 3,
          title: 'Мысли вслух',
          body: 'Немного подбешивает, что приходится тексты выдумывать. Знаю, есть генераторы, но искать их зело лень.',
          emotion: 'Мне кажется, я просыпаюсь...'
        },
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}


</style>