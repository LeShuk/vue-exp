<template>
  <div class="app">
    <h1>Страница с записями</h1>
    <div class="app_btns">
      <my-button
          @click="showDialog"
      >
        Создать запись
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск по заголовкам..."/>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

<!--    Если мы наблюдаем за свойством, используем :posts="posts"-->
<!--    Если мы используем computed-свойство, то используем :posts="sortedPost"-->
    <post-list
        :posts="sortedAndFilteredPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />

    <div v-else>
      Загрузка...
    </div>
<!--    todo: декомпозировать!-->
    <div class="page_wrapper">
      <div
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          class="page"
          :class="{
            'current-page': page === pageNumber
            }"
          @click="changePage(pageNumber)"
      >
        {{pageNumber}}
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";

export default {
  name: "App",
  components: {
    MySelect,
    MyButton,
    MyDialog,
    PostList, PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ],
      searchQuery: '',
      page: 1,
      limit: 5,
      totalPages: 0,
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
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert('Что-то пошло не так...')
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    },
    sortedAndFilteredPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  watch: {
    //Вариант: наблюдаем, если свойство меняется, выполняем функцию. Имя функции должно совпадать с наблюдаемым свойством!
    // минусом - меняется само свойство объекта
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue]);
    //   })
    // }
    page() {
      this.fetchPosts();
    }
  },
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

.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page_wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid green;
}

</style>