<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Markdown Notes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon color="#C62828" @click="logout" style="{cursor: pointer}">
        mdi-power
      </v-icon>
    </v-app-bar>
    <v-navigation-drawer app
                         floating
                         permanent
                         color="secondary">
      <v-container style="{text-align: center}">
        <v-btn
            width="100%"
            elevation="2"
            @click="$root.$data.refreshing = 'parents'"
            color="primary">
          Reload tree
        </v-btn>
      </v-container>
      <Tree :tree="tree"/>
      <v-container v-if="$root.$data.loadingTree === false">
        <h4 v-if="tree.length === 0">Create your first leaf to begin</h4>
      </v-container>
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
    await this.getParentsLeaf();
  },
  watch: {
    '$root.$data.refreshing': 'refresh'
  },
  methods: {
    getParentsLeaf: async function () {
      try {
        if (!this.$root.$data.selectedLeaf.id) {
          this.$root.$data.loadingTree = true;
        }
        const response = await axios.get(this.backAddress() + 'tree', this.getHeaders());
        if (response) {
          this.tree = response.data;
          this.$root.$data.loadingTree = false;
        }
      } catch (e) {
        console.error(e);
      }
    },
    refresh: async function () {
      try {
        if (this.$root.$data.refreshing === 'parents') {
          this.tree = [];
          this.$root.$data.selectedLeaf = {};
          await this.getParentsLeaf();
          this.$root.$data.refreshing = null;
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
