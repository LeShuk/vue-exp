<template>
  <div >
    <h1>Страница с записями</h1>
    <div class="app_btns">
<!--      <my-button-->
<!--          @click="showDialog"-->
<!--      >-->
<!--        Создать запись-->
<!--      </my-button>-->
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-input
        v-focus
        v-model="searchQuery"
        placeholder="Поиск по заголовкам..."/>
<!--    <my-dialog v-model:show="dialogVisible">-->
<!--      <post-form-->
<!--          @create="createPost"-->
<!--      />-->
<!--    </my-dialog>-->

    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostLoading"
    />

    <div v-else>
      Загрузка...
    </div>
<!--    <div v-intersection="loadMorePosts" class="observer"></div>-->
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
import {ref} from "vue";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPost";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  name: "PosPageWithCompositionApi",
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
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ],
    }
  },
  setup(props) {
   const {posts, isPostLoading, totalPages} = usePosts(10, 1);
   const {selectedSort, sortedPosts} = useSortedPosts(posts);
   const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      isPostLoading,
      totalPages,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    };
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