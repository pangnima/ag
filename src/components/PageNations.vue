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
		a{ font-size: $p; border:solid 1px #707070; padding:5px 10px; box-sizing: border-box; margin:0 5px; border-radius:2px;
			&.active{
				background: #707070;
				color:#fff;
			}
		}
	}
</style>