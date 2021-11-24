import { posts } from "./posts.js"
import { demo } from "./demo.js"

export const useStore = defineStore("main", {
  state: () => {
    return {
      posts,
      demo
    }
  },

  getters: {
    getId: (state) => {
      return (type) => state[type].map((value) => value.id).sort()
    },

    getLatestPosts: (state) => {
      return (number) =>
        state.posts
          .map((post) => {
            const newPosts = {}

            newPosts.id = post.id
            newPosts.date = new Date(post.date)

            return newPosts
          })
          .sort((a, b) => a.date - b.date)
          .reverse()
          .slice(0, number)
    },

    getPostById: (state) => {
      return (id) => state.posts.find((post) => post.id === id)
    },

    getPostsByCategory: (state) => {
      return (category) =>
        state.posts
          .filter((post) => post.category === category)
          .sort((a, b) => a.name - b.name)
    },

    getPostsByTag: (state) => {
      return (tag) =>
        state.posts
          .filter((post) => post.tags.includes(tag))
          .sort((a, b) => a.name - b.name)
    }
  }
})
