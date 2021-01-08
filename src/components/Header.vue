<template>
  <div>
    <v-row
        id="header"
        style="margin: 0; padding: 0; height: 44px"
    >
      <v-col
          cols="12"
          sm="6"
          md="4"
          style="margin: 0;"
      ></v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      ></v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
          style="margin: 0; padding: 0; height: 44px"
      >
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            lazy
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                style="margin: 2px; padding: 3px; height: 44px;"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date"
              @input="menu = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "header",
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
  }),
}
</script>

<style scoped>
#header {
  border: #2c3e50;

}
</style>