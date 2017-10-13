<<template>
    <div>
        多页面显示同一个state数据：{{$store.state.count}}
        <button @click="increment">同步+1</button>
    </div>
</template>

<script>
    export default {
        methods : {
            increment () {
                this.$store.commit('increment')
            }
        }
    }
</script>