<template>
  <div id="editor">
    <v-alert
        v-if="alert"
        dismissible
        elevation="2"
        type="success"
    ></v-alert>
    <span class="sectionTitle editorSection">Editor</span>
    <textarea :value="input" @input="update($event.target.value)"></textarea>
    <span class="sectionTitle prevSection">Preview</span>
    <div v-html="compiledMarkdown"></div>
    <v-btn class="custom-button"
           color="#388E3C"
           fab
           @click="updateNote">
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
  </div>
</template>

<script>
import marked from "marked";
import axios from "axios";

export default {
  name: 'Markdown',
  created: function () {
    if (this.$root.$data.selectedLeaf.content) {
      this.input = this.$root.$data.selectedLeaf.content;
    }
  },
  data: function () {
    return {
      input: '',
      alert: false
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input);
    }
  },
  methods: {
    update: function (input) {
      this.input = input;
    },
    updateNote: async function () {
      try {
        const response = await axios.put(this.backAddress() + 'notes/' + this.$root.$data.selectedLeaf.id, {
          content: this.input
        }, this.getHeaders());
        if (response) {
          this.alert = true;
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
<style>

#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #272727;
  border-radius: 15px;
}

textarea,
#editor div {
  display: inline-block;
  width: 50%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  font-size: 15px;
  color: white;
  padding: 20px;
  height: 88vh;
  overflow: auto;
}

code {
  color: #ff6666;
}

.sectionTitle {
  position: absolute;
  top: 18px;
  padding-left: 5px;
  font-size: 18px;
  display: inline-block;
}

.editorSection {
  right: 51%;
}

.prevSection {
  right: 2%;
}

.custom-button {
  position: fixed;
  right: 1%;
  bottom: 2%;
}
</style>
