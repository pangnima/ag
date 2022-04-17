<template>
	<div class="container">
		<h2 class="title">움짤</h2>
		<div class="sub-menu">
			<div class="tab">
				<router-link to="/mphoto/list">리스트로 보기</router-link>
				<router-link to="/mphoto/bj">BJ별로 보기</router-link>
			</div>
			<div class="search-box">
				<div class="btn-search">
					<label for="search">
						<input type="text" placeholder="검색어" id="search">
						<IconSearch></IconSearch>
					</label>
				</div>
			</div>
			<div class="sort-box">
				<button type="button" class="active"><span>인기순
					<svg viewBox="0 0 24 24">
					<path d="m21.9 19.3-9-15.6-.3-.3c-.5-.3-1.1-.2-1.4.3l-9 15.6c-.2.1-.2.3-.2.5 0 .6.4 1 1 1h18c.2 0 .3 0 .5-.1.5-.3.6-.9.4-1.4z"/>
					</svg>
				</span></button>
				<button type="button"><span>최신순</span></button>
				<router-link to="/upload" class="btn-upload">올리기</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import IconSearch from '@/assets/icon/ico_search.vue';
	export default {
		name: 'MovePhoto',
		components:{
			IconSearch,
		}
	}
</script>

<style lang="scss" scoped>
.container{padding-top:60px;}
.sub-menu{display:flex; padding:30px 0; align-items:center;}
.title{font-size:30px;}
.tab{display:flex; align-items:center;
	a{padding:5px 30px; border:solid 1px #eee; border-radius:10px;
		&.router-link-exact-active{background:#ddeef6;}
		& + a{margin-left:10px;}
	}
}

// 움짤
.sort-box{
	display: flex;
	margin-left: auto;
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
.search-box{
	display: flex;
	align-items: center;
	.btn-hot{height: 40px; display: flex; align-items: center;}
	.btn-hot svg{width: 20px; height:20px}
	.btn-search svg{width: 20px; height: 20px;}
	.btn-search input{width:0; border:0; transition: all .5s; cursor: pointer; margin:0 10px 0 10px; height: 40px; border-bottom:solid 1px transparent}
	.btn-search label{display: flex;align-items: center; cursor: pointer;}
	.btn-search label:active,
	.btn-search label:focus,
	.btn-search label:hover
	{
		input{width: 200px; border-bottom:solid 1px #777; padding:0 10px;}
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
				.title{font-size: $mf;
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