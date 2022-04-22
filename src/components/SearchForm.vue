<template>
	<div class="search-box">
		<button type="button" class="btn-hot">
			<IconFire></IconFire>
		</button>
		<div class="btn-search">
			<label for="search">
				<input type="text" placeholder="검색어" id="search">
				<IconSearch></IconSearch>
			</label>
		</div>
	</div>
</template>

<script>
import IconFire from '@/assets/icon/IconFire.vue';
import IconSearch from '@/assets/icon/IconSearch.vue';
export default {
	name:'SearchForm',
	components:{
		IconFire,
		IconSearch
	}
}
</script>

<style lang="scss" scoped>
.search-box{
	margin-left: 20px;
	display: flex;
	align-items: center;
	.btn-hot{display: flex; align-items:center}
	.btn-search svg{width:20px; height:20px;}
	.btn-search input{width:0; border:0; transition: all .5s; cursor: pointer; margin:0 0 0 5px; height: 30px; border-bottom:solid 1px transparent; box-sizing: border-box;}
	.btn-search label{display: flex;align-items: center; cursor: pointer;}
	.btn-search label:active,
	.btn-search label:focus,
	.btn-search label:hover
	{
		input{width: 200px; border-bottom:solid 1px #777; padding:0 10px;}
	}
}
</style>