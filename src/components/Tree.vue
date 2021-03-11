<template>
  <div class="tree">
    <ul class="parent-tree-list" v-if="$root.$data.loadingTree === false">
      <Leaf v-for="leaf in tree" :key="leaf.id" :leaf="leaf"></Leaf>
    </ul>
    <v-row v-else
           align="center"
           justify="space-around">
      <v-icon class="loading" color="primary">mdi-loading mdi-spin</v-icon>
    </v-row>
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
            :disabled="$root.$data.selectedLeaf.title"
            fab
            dark
            small
            color="#388E3C"
            @click="triggerDialog('leaf')">
          <v-icon>mdi-leaf</v-icon>
        </v-btn>
        <v-btn
            :disabled="!$root.$data.selectedLeaf.label"
            fab
            dark
            small
            color="#388E3C"
            @click="triggerDialog('markdown')">
          <v-icon>mdi-language-markdown</v-icon>
        </v-btn>
        <v-btn
            :disabled="!$root.$data.selectedLeaf.id"
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
          <div v-if="dialog.label">
            <v-text-field
                :label="dialog.label"
                v-model="dialog.data"
                @keydown.enter="dialog.action"></v-text-field>
          </div>
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
        if (!this.$root.$data.selectedLeaf.id) {
          this.$root.$data.loadingTree = true;
        }
        const parentLeaf = this.$root.$data.selectedLeaf.id ? this.$root.$data.selectedLeaf.id : null;
        const response = await axios.post(this.backAddress() + 'leaf', {
          label: this.dialog.data,
          parentLeaf: parentLeaf
        }, this.getHeaders());
        if (response) {
          this.dialog.triggered = false;
          this.dialog.data = null;
          this.$root.$data.loadingTree = false;
          this.$root.$data.refreshing = parentLeaf ? 'leaf' : 'parents'
        }
      } catch (e) {
        console.error(e);
      }
    },
    createNote: async function () {
      try {
        if (this.$root.$data.selectedLeaf.id) {
          const response = await axios.post(this.backAddress() + 'notes', {
            title: this.dialog.data,
            leaf: this.$root.$data.selectedLeaf.id
          }, this.getHeaders());
          if (response) {
            this.dialog.triggered = false;
            this.dialog.data = null;
            this.$root.$data.refreshing = 'leaf';
          }
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
          if (type === 'notes') {
            this.$root.$data.selectedLeaf.id = this.$root.$data.selectedLeaf.leaf;
            this.$root.$data.refreshing = 'leaf';
          } else {
            if (this.$root.$data.selectedLeaf.parentLeaf) {
              this.$root.$data.selectedLeaf.id = this.$root.$data.selectedLeaf.parentLeaf;
              this.$root.$data.refreshing = 'leaf';
            } else {
              this.$root.$data.refreshing = 'parents';
            }
          }
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
            this.dialog.label = null;
          } else {
            this.dialog.action = this.delete;
            this.dialog.title = 'Are tou sure you want to delete this leaf ?';
            this.dialog.triggered = true;
            this.dialog.label = null;
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

.loading {
  font-size: 30px !important;
  margin-top: 20px;
}

.mdi-spin:before {
  -webkit-animation: mdi-spin 1s infinite linear !important;
  animation: mdi-spin 1s infinite linear !important;
}
</style>
