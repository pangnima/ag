<template>
	<div class="container">
		<div class="control-box">
			<BoardCategory></BoardCategory>
			<SearchForm></SearchForm>
			<div class="btn-container">
				<router-link to="/boardall/write"  class="btn-write"><span>글쓰기</span></router-link>
			</div>
		</div>
		<BoardList></BoardList>
		<PageNaiton></PageNaiton>
	</div>
</template>

<script>
import BoardList from '@/components/Board/BoardList.vue';
import BoardCategory from '@/components/Board/BoardCategory.vue';
import SearchForm from '@/components/SearchForm.vue';
import PageNaiton from '@/components/PageNations.vue';
export default {
	name: "AllBoard",
	components : {
		BoardList,
		BoardCategory,
		PageNaiton,
		SearchForm,
	}
}
</script>

<style lang="scss" scoped>
.container{padding:30px; border:solid 1px #e1e1e1; margin-top:40px; border-radius: 5px; box-sizing: border-box;}
.control-box{
	display: flex;
	align-items: center;
}
.tag-box{
	border:solid 1px #e1e1e1;
	border-radius: 5px;
	padding:5px 15px;
	span{
		font-size: $mf;
		cursor: pointer;
		& + span {margin-left:10px;}
	}
}


.btn-container{
	margin-left: auto;
	[class^=btn-]{border:solid 1px #eee; padding:8px 20px; border-radius: 5px; font-size: 14px; transition: all .7s;}
	[class^=btn-]:hover{background: #333; color:#fff}
	[class^=btn-]:hover span {color:#fff;}
}
</style>