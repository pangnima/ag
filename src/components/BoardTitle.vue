<template>
	<div class="title">
		<h2>{{title}}</h2>
		<router-link to=""><span>더보기</span> <icon-arrow></icon-arrow></router-link>
	</div>
</template>

<script>
import IconArrow from '../assets/icon/ico_arrow.vue';
export default {
	name:'BoardTitle',
	components:{
		IconArrow
	},
	props:['title'],

}
</script>

<style lang="scss" scoped>
	.title{
		display: flex; align-items:flex-end;
		font-size: $p;
		line-height: 1;
		h2{font-size: $h2; line-height: 1;}
		a {margin-left: 14px; line-height: 1; display: flex;
			align-items: center;
			svg{width:10px; margin-left: 4px; margin-top:1px}
		}
	}
</style>