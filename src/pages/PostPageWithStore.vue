<template>
  <div>
    <h1>Страница с записями</h1>
      <div class="app_btns">
        <my-button
          @click="showDialog"
        >
        Создать запись
        </my-button>
        <my-select
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            :options="sortOptions"
        />
      </div>
    <my-input
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск по заголовкам..."/>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="sortedAndFilteredPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />

    <div v-else>
      Загрузка...
    </div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";
import Pagination from "@/components/UI/Pagination";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  name: "PostPageWithStore",
  components: {
    Pagination,
    MySelect,
    MyButton,
    MyDialog,
    PostList, PostForm,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndFilteredPosts: 'post/sortedAndFilteredPosts'
    }),
  }
}
</script>

<style>

.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.observer {
  height: 30px;
  background: green;
}

</style>