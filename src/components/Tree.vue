<template>
  <div class="tree">
    <ul class="parent-tree-list">
      <Leaf v-for="leaf in tree" :key="leaf.id" :leaf="leaf"></Leaf>
    </ul>
    <div class="actions">
      <v-speed-dial
          v-model="fab"
          bottom
          right
          open-on-hover
          transition="slide-y-reverse-transition">
        <template v-slot:activator>
          <v-btn
              v-model="fab"
              color="blue darken-2"
              dark
              fab>
            <v-icon v-if="fab">
              mdi-close
            </v-icon>
            <v-icon v-else>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-btn
            fab
            dark
            small
            color="#388E3C"
            @click="triggerDialog('leaf')">
          <v-icon>mdi-leaf</v-icon>
        </v-btn>
        <v-btn
            fab
            dark
            small
            color="#388E3C"
            @click="triggerDialog('markdown')">
          <v-icon>mdi-language-markdown</v-icon>
        </v-btn>
        <v-btn
            fab
            dark
            small
            color="#C62828"
            @click="triggerDialog('delete')">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </div>
    <v-dialog
        v-model="dialog.triggered"
        max-width="500px">
      <v-card>
        <v-container>
          {{ dialog.title }}
          <v-text-field v-if="dialog.label" :label="dialog.label" v-model="dialog.data"></v-text-field>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              text
              color="#C62828"
              @click="dialog.triggered = false"
          >
            Close
          </v-btn>
          <v-btn
              text
              color="#388E3C"
              @click="dialog.action">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Tree',
  components: {
    Leaf: () => import('./Leaf')
  },
  props: {
    tree: Array
  },
  data: () => ({
    dialog: {
      triggered: false,
      title: null,
      action: null,
      data: null,
    },
    fab: null
  }),
  methods: {
    createLeaf: async function () {
      try {
        const response = await axios.post(this.backAddress() + 'leaf', {
          label: this.dialog.data,
          parentLeaf: this.$root.$data.selectedLeaf ? this.$root.$data.selectedLeaf.id : null
        }, this.getHeaders());
        if (response) {
          this.dialog.triggered = false;
          this.dialog.data = null;
        }
      } catch (e) {
        console.error(e);
      }
    },
    createNote: async function () {
      try {
        const response = await axios.post(this.backAddress() + 'notes', {
          title: this.dialog.data,
          leaf: this.$root.$data.selectedLeaf ? this.$root.$data.selectedLeaf.id : null
        }, this.getHeaders());
        if (response) {
          this.dialog.triggered = false;
          this.dialog.data = null;
        }
      } catch (e) {
        console.error(e);
      }
    },
    delete: async function () {
      try {
        let type;
        if (this.$root.$data.selectedLeaf.title) {
          type = 'notes';
        } else {
          type = 'leaf';
        }
        const response = await axios.delete(this.backAddress() + type + '/' + this.$root.$data.selectedLeaf.id,
            this.getHeaders());
        if (response) {
          this.dialog.triggered = false;
          console.log(response)
        }
      } catch (e) {
        console.error(e);
      }
    },
    triggerDialog: function (dialog) {
      switch (dialog) {
        case 'leaf':
          this.dialog.title = 'New leaf';
          this.dialog.label = 'Label';
          this.dialog.action = this.createLeaf;
          this.dialog.triggered = true;
          break;
        case 'markdown':
          this.dialog.title = 'New markdown note';
          this.dialog.label = 'Title';
          this.dialog.action = this.createNote;
          this.dialog.triggered = true;
          break;
        case 'delete':
          if (this.$root.$data.selectedLeaf.title) {
            this.dialog.title = 'Are tou sure you want to delete this note ?';
            this.dialog.action = this.delete;
            this.dialog.triggered = true;
          } else {
            this.dialog.action = this.delete;
            this.dialog.title = 'Are tou sure you want to delete this leaf ?';
            this.dialog.triggered = true;
          }
          break;
      }
    }
  }
}
</script>

<style>
.parent-tree-list {
  padding-left: 2px !important;
  height: 100%;
  overflow: auto;
}

.actions {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>
