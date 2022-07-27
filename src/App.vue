<template>
  <div class="app">
    <post-form />
    <post-list :posts="posts"/>
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
        {id: 1, title: 'Дневничок разработчика (нет)', body: 'Изучаю vue.js, полет нормальный...'},
        {id: 2, title: 'Дневничок разработчика (нет)', body: 'Цикличный вывод данных в компоненте.'},
        {id: 3, title: 'Мысли вслух',
          body: 'Немного подбешивает, что приходится тексты выдумывать. Знаю, есть генераторы, но искать их зело лень.'},
      ],
      formTitle: '',
      formBody: '',
      idCounter: 4,
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: this.idCounter,
        title: this.formTitle,
        body: this.formBody,
      }
      this.posts.push(newPost);
      this.formTitle = '';
      this.formBody = '';
      this.id += 1;
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