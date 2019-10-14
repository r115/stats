export const state = () => ({
  auth: false
})

export const mutations = {
  logout (state) {
    state.auth = false
  }
}
