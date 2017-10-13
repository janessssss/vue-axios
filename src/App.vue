<template>
    <div id="app">
        <ma></ma>
        <mb></mb>
        <mc></mc>
        <md></md>
        <User></User>
    </div>
</template>

<script>
import ma from './components/A'
import mb from './components/B'
import mc from './components/C'
import md from './components/D'
import User from './components/user'
import {
        mapState,
        mapMutations,
        mapGetters,
        mapActions
        } from 'vuex';
export default {
    name: 'app',
    components : {
        ma,
        mb,
        mc,
        md,
        User
    }
}
</script>

