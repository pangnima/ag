<template>
	<div class="mphoto-box">
		<ul>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">감스트 복종햇!!!!!!!</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">움짤 제목을 길게 보여주면서 길면 2줄까지 보여주고 말줄임표움짤 제목을 길게 보여주면서 길면 2줄까지 보여주고 말줄임표움짤 제목을 길게 보여주면서 길면 2줄까지 보여주고 말줄임표움짤 제목을 길게 보여주면서 길면 2줄까지 보여주고 말줄임표</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">감스트 복종햇!!!!!!!</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">감스트 복종햇!!!!!!!</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">감스트 복종햇!!!!!!!</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">감스트 복종햇!!!!!!!</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">움짤 제목을 길게 보여주면서 길면 2줄까지 보여주고 말줄임표움짤 제목을 길게 보여주면서 길면 2줄까지 보여주고 말줄임표움짤 제목을 길게 보여주면서 길면 2줄까지 보여주고 말줄임표움짤 제목을 길게 보여주면서 길면 2줄까지 보여주고 말줄임표</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">감스트 복종햇!!!!!!!</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">감스트 복종햇!!!!!!!</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
			<li>
				<div class="thumb">
					<img src="@/assets/images/m_thumb.png" alt="썸네일">
				</div>
				<div class="info-box">
					<h2 class="title">감스트 복종햇!!!!!!!</h2>
					<ContentsInfo></ContentsInfo>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	// import IconSearch from '@/assets/icon/ico_search.vue';
	import ContentsInfo from '@/components/ContentInfo.vue';
	export default {
		name: 'MovePhoto',
		components:{
			// IconSearch,
			ContentsInfo
		}
	}
</script>

<style lang="scss" scoped>
.container{padding-top:60px;}
.sub-menu{display:flex; padding:30px 0; align-items:center; justify-content:space-between;}
.title{font-size:30px;}
.tab{display:flex; align-items:center;
	a{padding:5px 30px; border:solid 1px #eee; border-radius:10px;
		&.router-link-exact-active{background:#ddeef6;}
		
		& + a{margin-left:10px;}
	}
}
.search-box{
	button{border:0; background: none;
		& + button{margin-left: 15px;}
		&.btn-hot svg{width: 25px;}
		&.btn-search svg{width: 25px;}
	}
}


// 움짤
.sort-box{
	display: flex;
	button{
		font-size: 16px;
		margin-right: 20px;
		span{display: flex; align-items: center;}
		svg{width:16px; margin-left: 5px;}
		&.active{font-weight: bold;}
	}
	.btn-upload {border:solid 1px #000; border-radius: 5px; padding:5px 20px;
		transition: all .5s;
		&:hover{
			background: #000;
			color:#fff;
		}
	}
}
.mphoto-box {
	ul{	display: flex; flex-wrap: wrap;
		li{
			width: 24%;
			margin-bottom:50px;
			margin-right:1%;
			.thumb{
				border:solid 1px #e1e1e1;
				border-radius: 20px;
				overflow: hidden;
				img{vertical-align: top; width: 100%;}
			}
			.info-box{
				padding:15px;
				.title{font-size: $pl;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
		}
	}
}
</style>