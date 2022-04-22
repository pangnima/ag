<template>
	<div class="view-detail">
		<div class="view-info-item"><IconView class="icon-views"></IconView> <span>9,999</span></div>
		<div class="view-info-item"><icon-comment></icon-comment> <span>9,999</span></div>
		<div class="view-info-item"><IconLike></IconLike> <span>9,999</span></div>
	</div>
</template>

<script>
import IconView from "@/assets/icon/IconEye.vue";
import IconComment from "@/assets/icon/IconComment.vue";
import IconLike from "@/assets/icon/IconLike.vue";
export default {
	name:'ViewInfo',
	components:{
		IconView,
		IconComment,
		IconLike
	}
}
</script>
<style lang="scss" scoped>
	.view-detail{
		display: flex;
		align-items: center;
		justify-content: left;
		.view-info-item{display: flex;align-items: center;
			margin-right:10px;
			svg{width:16px; height:16px; margin-right:5px;}
			.icon-views{ width:20px; height:20px;}
			span{font-size: $sf;}
		}
	}
</style>