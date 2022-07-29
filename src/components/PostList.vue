<template>
  <div v-if="posts.length > 0">
    <h3>Список Постов</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
  </div>
<!--  v-if полностью скрывает элемент из дом-дереваа, если условие не соблюдается.
Если нужно просто скрывать элемент, но сохранять его в дереве, используется v-show-->
  <h2 v-else style="color: red">
    Тут могла быть ваша запись. Искренне ваш, дневничок.
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>