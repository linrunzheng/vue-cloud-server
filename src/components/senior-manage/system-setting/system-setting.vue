<template>
    <div>
        <el-button @click="current='privateSet'">私有云设置</el-button>
        <el-button @click="current='cloudSet'">公有云设置</el-button>
        <el-button @click="current='otherSet'">同步</el-button>
        <component :is="current"></component>
    </div>
</template>
<script type="text/javascript">
    import privateSet from './privateSet.vue'
    import cloudSet from './cloud-set.vue'
    import otherSet from './other-set.vue'
    export default{       
        data(){
            return {
               current:privateSet
            }
        },
        methods:{

        },
        components:{
           privateSet,
           cloudSet,
           otherSet
        }
    }
</script>

<style>

</style>
