<template>
	<ul class="board-category">
		<li>#전체</li>
		<li>#공지</li>
		<li>#스타크래프트</li>
		<li>#롤</li>
		<li>#배그</li>
	</ul>
</template>

<script>
export default {
	name:'BoardCategory',
}
</script>

<style lang="scss" scoped>
.board-category{
	display: flex;
	align-items:center;
	li{
		font-size: $mf;
		cursor: pointer;
		& + li {margin-left:10px;}
	}
}
</style>