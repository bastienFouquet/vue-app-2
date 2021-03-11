<template>
  <li class="node-tree">
    <div @click="getLeaf(leaf)" class="node" :class="{'active': isActive}">
      <v-icon>{{ leaf.label ? 'mdi-leaf' : 'mdi-language-markdown' }}</v-icon>
      <span class="label">{{ leaf.label || leaf.title }}</span>
    </div>

    <ul class="tree-list" v-if="selectedLeaf.notes && selectedLeaf.notes.length">
      <Leaf v-for="note in selectedLeaf.notes" :key="note.id" :leaf="note"/>
    </ul>
    <ul class="tree-list" v-if="selectedLeaf.children && selectedLeaf.children.length">
      <Leaf v-for="child in selectedLeaf.children" :key="child.id" :leaf="child"/>
    </ul>
  </li>
</template>

<script>
import axios from "axios";

export default {
  name: 'Leaf',
  props: {
    leaf: Object
  },
  data: function () {
    return {
      selectedLeaf: {}
    }
  },
  watch: {
    '$root.$data.refreshing': 'refresh'
  },
  methods: {
    getLeaf: async function (leaf) {
      try {
        if (leaf) {
          this.$root.$data.selectedLeaf = leaf;
          if (leaf.label) {
            const response = await axios.get(this.backAddress() + 'leaf/' + leaf.id, this.getHeaders());
            this.selectedLeaf = response.data;
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
    refresh: async function () {
      if (this.$root.$data.refreshing === 'leaf') {
        await this.getLeaf(this.selectedLeaf);
        this.$root.$data.refreshing = null;
      }
    }
  },
  computed: {
    isActive() {
      return this.$root.$data.selectedLeaf.id === this.leaf.id;
    }
  }
}
</script>

<style>
.node-tree {
  list-style: none;
}

.tree-list {
  padding-left: 17px !important;
}

.node {
  padding: 6px;
  border-radius: 30px;
  margin-top: 2px;
  margin-right: 10px;
  margin-left: 5px;
}

.node.active, .node:hover {
  background-color: #515151 !important;
  cursor: pointer;
}

.label {
  padding-left: 5px;
  font-size: 15px;
}
</style>
