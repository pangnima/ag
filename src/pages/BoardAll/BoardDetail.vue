<template>
	<div class="container">
		<BoardView></BoardView>
		<BoardComment></BoardComment>
	</div>
</template>

<script>
import BoardView from "../../components/Board/BoardView.vue"
import BoardComment from "../../components/Board/BoardComment.vue"


export default {
	name: "BoardDetail",
	components:{
		BoardComment,
		BoardView
	}
}
</script>

<style lang="scss" scoped>
.container{padding:30px 0; margin-top:20px; border-radius: 5px; box-sizing: border-box;}
.title{font-size:30px;}
.txt-edit{
	padding:20px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 300px;
	margin:30px 0;
	border:solid 1px #333;
}

</style>
