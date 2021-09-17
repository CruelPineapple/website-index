<template>
    <div class="title">
        <p class="word">Hopeful Dreamer</p>
    </div>
</template>

<script>

export default {
    name: 'TopTitle'
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap'); */
@media only screen and (max-width: 850px){
.title{
    width: 100%;
    height: 150px;
    background-color: #e799b0;
}
.word{
    font-size: 50px;
    color: white;
    margin: 0;
    padding-top: 92px;
    font-family: 'Josefin Sans', sans-serif;
}
}
@media only screen and (min-width: 851px){
.title{
    width: 100%;
    height: 300px;
    background-color: #e799b0;
}
.word{
    font-size: 130px;
    color: white;
    margin: 0;
    padding-top: 150px;
    font-family: 'Josefin Sans', sans-serif;
}
}

</style>
