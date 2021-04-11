<template>
    <div class="title">
        <p class="word">Rice Shower</p>
    </div>
</template>

<script>

export default {
    name: 'TopTitle'
}
</script>

<style scoped>
@media only screen and (max-width: 850px){
.title{
    width: 100%;
    height: 150px;
    background-color: rgba(71, 0, 235, 0.452);
}
.word{
    font-size: 50px;
    color: white;
    margin: 0;
    padding-top: 92px;
}
}
@media only screen and (min-width: 851px){
.title{
    width: 100%;
    height: 300px;
    background-color: rgba(71, 0, 235, 0.452);
}
.word{
    font-size: 130px;
    color: white;
    margin: 0;
    padding-top: 150px;
}
}

</style>
