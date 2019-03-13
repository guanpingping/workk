<template>
    <div id="header">
        <input type="text">
        <button>搜索</button>
    </div>
</template>

<script>

</script>

<style>
    #header{
        height: 44px;
        background: #c33;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #header>input{
        border:0;
        height: 30px;
        border-radius: 5px 0 0 5px;
        width: 50%;
        border-right: 0;
    }
    #header>button{
        border: 0;
        width: 40px;
        height: 30px;
        background: #fff;
        
    }
</style>