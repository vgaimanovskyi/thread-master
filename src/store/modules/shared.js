export default {
    state: {
        loading: false,
        error: null,
        overflow: false
    },
    mutations: {
        SET_LOADING(state, payload) {
            state.loading = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        CLEAR_ERROR(state) {
            state.error = null;
        },
        PAGE_OVERFLOW(state, payload) {
            state.overflow = payload;
        }
    },
    actions: {
        loading({ commit }, payload) {
            commit("SET_LOADING", payload);
        },
        error({ commit }, payload) {
            commit("SET_ERROR", payload);
        },
        clearError({ commit }) {
            commit("CLEAR_ERROR");
        },
    },
    getters: {
        getLoading(state) {
            return state.loading;
        },
        getError(state) {
            return state.error;
        },
        getOverflow(state) {
            return state.overflow;
        }
    },
};