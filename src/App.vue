<template>
  <div class="app">
    <h1>Страница с записями</h1>
    <my-button
        @click="showDialog"
        style="margin: 15px 0;"
    >
      Создать запись
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";

export default {
  name: "App",
  components: {
    MyButton,
    MyDialog,
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
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      //Фильтр возвращает новый массив. "Просто" удаления элементов из массива в js нет?
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    }
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