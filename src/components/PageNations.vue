<template>
	<div class="pagenation-box">
		<router-link class="active" to="/">1</router-link>
		<router-link to="/">2</router-link>
		<router-link to="/">3</router-link>
		<router-link to="/">4</router-link>
		<router-link to="/">5</router-link>
	</div>
</template>

<script>
export default {
	name:'PageNaiton',
}
</script>

<style lang="scss" scoped>
	.pagenation-box{
		display: flex;
		justify-content: center;
		padding:50px 0;
		a{ font-size: $sf; border:solid 1px #707070; padding:4px 8px; box-sizing: border-box; margin:0 5px; border-radius:3px;
			&.active{
				background: #707070;
				color:#fff;
			}
		}
	}
</style>