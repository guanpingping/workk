<template>
    <div>
       <slot name="name2"></slot>
       <h2>One</h2>
       <slot name="name1"></slot>
       <slot name="name3"></slot>
       <slot :val="city"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            city:"北京"
        }
    }

}
</script>


<style >
    
</style>