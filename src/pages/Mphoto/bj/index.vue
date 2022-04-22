<template>
	<div class="mphoto-box">
		<ul>
			<li>
				<!-- BJ썸네일 -->
				<div class="thumb">
					<img src="@/assets/images/icon_nick.png" alt="">
				</div>
				<!-- 정보 -->
				<div class="info">
					<p class="name">BJ 킴성태</p>
					<p class="count"><span>999,999</span> 개의 움짤</p>
				</div>
			</li>
			<li>
				<!-- BJ썸네일 -->
				<div class="thumb">
					<img src="@/assets/images/icon_nick.png" alt="">
				</div>
				<!-- 정보 -->
				<div class="info">
					<p class="name">BJ 킴성태</p>
					<p class="count"><span>999,999</span> 개의 움짤</p>
				</div>
			</li>
			<li>
				<!-- BJ썸네일 -->
				<div class="thumb">
					<img src="@/assets/images/icon_nick.png" alt="">
				</div>
				<!-- 정보 -->
				<div class="info">
					<p class="name">BJ 킴성태</p>
					<p class="count"><span>999,999</span> 개의 움짤</p>
				</div>
			</li>
			<li>
				<!-- BJ썸네일 -->
				<div class="thumb">
					<img src="@/assets/images/icon_nick.png" alt="">
				</div>
				<!-- 정보 -->
				<div class="info">
					<p class="name">BJ 킴성태</p>
					<p class="count"><span>999,999</span> 개의 움짤</p>
				</div>
			</li>
			<li>
				<!-- BJ썸네일 -->
				<div class="thumb">
					<img src="@/assets/images/icon_nick.png" alt="">
				</div>
				<!-- 정보 -->
				<div class="info">
					<p class="name">BJ 킴성태</p>
					<p class="count"><span>999,999</span> 개의 움짤</p>
				</div>
			</li>
			<li>
				<!-- BJ썸네일 -->
				<div class="thumb">
					<img src="@/assets/images/icon_nick.png" alt="">
				</div>
				<!-- 정보 -->
				<div class="info">
					<p class="name">BJ 킴성태</p>
					<p class="count"><span>999,999</span> 개의 움짤</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	// import IconSearch from '@/assets/icon/ico_search.vue';
	// import ContentsInfo from '@/components/ContentInfo.vue';
	export default {
		name: 'MovePhotoBj',
		components:{
			// IconSearch,
			// ContentsInfo
		}
	}
</script>

<style lang="scss" scoped>
.mphoto-box{
	ul{
		display: flex;
		flex-wrap: wrap;
		margin-left: -3%;
		li{
			background: #f5f5f5;
			border:solid 1px #ccc;
			padding:20px;
			border-radius:5px;
			width:30%;
			position: relative;
			margin:0 0 30px 3%;
			box-sizing: border-box;
			.thumb{
				margin-left: auto;
				width:100px;
				img{vertical-align: top; width: 100%;}
			}
			.info{
				font-size: 16px;
				.name{font-weight: bold;}
				.count{display: flex; align-items: center; color:#6c6c6c}
			}
		}
	}
}

</style>