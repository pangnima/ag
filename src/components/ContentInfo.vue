<template>
	<div class="contents-info">
		<!-- <p class="like"><IconLike/> 999,999</p>
		<p class="comment"><IconComment/>999,999</p>
		<p class="time">999,999</p> -->
	</div>
</template>

<script>
// import IconLike from '@/assets/icon/ico_like.vue'
// import IconComment from '@/assets/icon/ico_comment.vue'
export default {
	name : 'contentsInfo',
	components : {
		// IconLike,
		// IconComment
	}
}
</script>

<style lang="scss" scope>
	.contents-info{
		display: flex;
		align-items: center;
		margin-top:10px;
		p{display: flex; align-items: center;
			& + * { margin-left: 10px;}
			svg{ width:20px; margin-right: 5px;}
			&.time{
				&::before{
					content: "";
					margin-right: 5px;
					display: block;
					width: 4px; height: 4px;
					border-radius: 50%;
					background: #000;
				}
			}
		}
	}
</style>