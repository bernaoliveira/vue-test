import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        events: [],
    },

    mutations: {
        ADD_EVENT(state, payload) {
            state.events.unshift(payload);
        },
    },

    actions: {
        addEvent({ commit }, event) {
            commit("ADD_EVENT", event);
        },
    },
});
