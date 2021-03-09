<template>
  <v-app>
    <v-app-bar floating app>
      <v-toolbar-title>Markdown Notes</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app
        floating
        permanent
        color="secondary">
      <span @click="refresh">tree struct <v-icon>mdi-reload</v-icon></span>
      <Tree :tree="tree"/>
    </v-navigation-drawer>
    <v-main app>
      <v-container fluid>
        <Markdown v-if="$root.$data.selectedLeaf.title"/>
        <div v-else>
          <h2>Select a note</h2>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Tree from "@/components/Tree";
import Markdown from "@/components/Markdown";
import axios from "axios";

export default {
  name: 'Home',
  components: {
    Tree,
    Markdown
  },
  data: function () {
    return {
      tree: []
    }
  },
  async created() {
    await this.getParentsLeaf()
  },
  methods: {
    getParentsLeaf: async function () {
      try {
        const response = await axios.get(this.backAddress() + 'tree', this.getHeaders())
        this.tree = response.data
      } catch (e) {
        console.error(e);
      }
    },
    refresh: async function () {
      try {
        this.tree = [];
        this.$root.$data.selectedLeaf = {};
        await this.getParentsLeaf();
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
