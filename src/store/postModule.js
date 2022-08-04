import axios from "axios";

export const postModule = {
    state: () => {
        return {
            posts: [],
            isPostLoading: false,
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'},
            ],
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
        }
    },
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },

        sortedAndFilteredPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsPostLoading(state, bool) {
            state.isPostLoading = bool;
        },
        setSelectedSort(state, query) {
            state.selectedSort = query;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setPage(state, page) {
            state.page = page;
        },

        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setIsPostLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data);
            } catch (e) {
                alert('Что-то пошло не так...')
            } finally {
                commit('setIsPostLoading', false)
            }
        },

        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page + 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit) )
                commit('setPosts',[...state.posts, ...response.data] )
            } catch (e) {
                alert('Что-то пошло не так...')
            }
        },
    },
    namespaced: true,
}