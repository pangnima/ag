<template>
	<span class="icon-comment">
		<svg fill="none" viewBox="0 0 24 24">
			<path d="M17 9H7V7h10v2ZM7 13h10v-2H7v2Z" fill="currentColor"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M2 18V2h20v16h-6v4h-2a4 4 0 0 1-4-4H2Zm10-2v2a2 2 0 0 0 2 2v-4h6V4H4v12h8Z" fill="currentColor"/>
		</svg>
		<span>12345</span>
	</span>
</template>

<script>
export default {
	name:'IconComment',
}
</script>

<style lang="scss" scoped>
	.icon-comment{
		display: flex;
		align-items: center;
		svg{width:16px; height:16px;margin-right: 5px;}
	}
</style>